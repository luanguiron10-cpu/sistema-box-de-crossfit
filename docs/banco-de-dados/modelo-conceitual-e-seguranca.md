# Modelo conceitual e estratégia de autorização

Estado: desenho original 0.2, 2026-10-16, subordinado à [ADR-009 aceita](../arquitetura/adr-009-instalacoes-independentes.md). Não é esquema implementado. A proposta 0.1 é preservada no [Git 01405f2](https://github.com/luanguiron10-cpu/sistema-box-de-crossfit/blob/01405f250e5f8556bd23a6d08ec44a68d33c59a7/docs/banco-de-dados/modelo-conceitual-e-seguranca.md).

## Entidades propostas e invariantes

| Domínio | Entidades | Relações e restrições planejadas |
| --- | --- | --- |
| Instalação | installation_settings | Singleton: exatamente uma configuração ativa; identidade opaca da instalação, ambiente, fuso, marca e políticas; sem segredo. Mudança de destino não é operação de aluno |
| Identidade local | profiles, user_roles, staff_assignments | profiles referencia Auth deste projeto; papéis e vínculos ativos revogáveis, atribuição de professor/turma explícita; usuário não edita privilégios |
| Alunos | students, plans, enrollments | Aluno pode não ter login; associação profile/aluno única/controlada; matrícula e financeiro não concedem papel administrativo |
| Agenda | class_types, schedule_templates, class_sessions | Fuso, capacidade, professor/atribuições e estado por ocorrência; cancelada não gera falta |
| Participação | bookings, waitlist_entries, attendance_records | Unicidade aluno/ocorrência; transação para vagas; reserva, presença e resultado separados |
| Esporte | movements, workouts, workout_versions, workout_blocks, session_workouts | Catálogo local com origem/licença quando importado; versões usadas imutáveis, sem catálogo remoto compartilhado presumido |
| Desempenho | workout_results, result_components, movement_attempts, benchmark_versions | Aluno, versão, prescrição e pontuação comparáveis; unidades originais preservadas; PR derivado auditável |
| Acompanhamento | private_notes, audit_events | Autor, escopo de compartilhamento, necessidade e acesso explícitos; logs mínimos sem tokens ou conteúdo pessoal desnecessário |

Tentativa em movement_attempts sempre referencia aluno/titular local, com WOD/resultado opcionais para permitir PR avulso. benchmark_versions descreve a definição versionada, sem titular aluno obrigatório; o desempenho individual referencia essa definição quando aplicável.

Um box por banco. Não há box_id/tenant_id obrigatório em cada tabela, boxes/memberships globais, seletor de tenant ou Auth central. Identificadores e referências locais não autorizam acesso. Futuras unidades exigem decisão e modelo próprios. Integridade FK, unicidade, ownership e imutabilidade serão constraints físicas projetadas/testadas. Inventário comercial de instalações fica separado, sem acesso automático aos dados esportivos.

## Matriz intrainstalação proposta

Todas as operações exigem identidade deste projeto, conta ativa e autorização atual. Negação por padrão; gerir não autoriza autoelevação, exportação irrestrita ou assumir outro usuário.

| Recurso | Proprietário | Gestor | Professor | Recepção | Aluno |
| --- | --- | --- | --- | --- | --- |
| Papéis/configurações | Gerir com auditoria e proteção contra perda do último proprietário | Configuração delegada, sem elevar papel | Ler mínimo | Ler mínimo | Informação pública permitida |
| Alunos/elegibilidade | Gerir | Gerir | Mínimo de alunos atribuídos | Campos operacionais delegados | Próprio cadastro e campos editáveis |
| Turmas/reservas | Gerir | Gerir | Atribuídas/delegadas | Operar se delegado | Elegíveis; reservar/cancelar para si |
| Presença | Gerir/corrigir auditado | Gerir/corrigir | Turmas atribuídas | Confirmar se delegado | Ler própria |
| WOD | Gerir | Gerir | Criar/publicar se autorizado | Publicado necessário | Publicado conforme elegibilidade |
| Resultado/PR | Ler; corrigir auditado | Ler; corrigir auditado | Alunos/atividades atribuídos | Negado por padrão | Próprio; correção conforme janela |
| Ranking | Projeção permitida | Projeção permitida | Projeção permitida | Negado por padrão | Projeção autorizada, sem notas privadas |
| Notas restritas | Sem acesso automático pelo cargo | Só autorização/necessidade | Próprias/compartilhadas autorizadas | Negado | Negado a notas internas; direitos de acesso por fluxo próprio |
| Financeiro | Gerir | Se delegado | Negado | Se delegado | Próprios registros permitidos |
| Auditoria/exportação | Escopo específico registrado | Se delegado | Negado por padrão | Negado | Exportação própria por fluxo controlado |

Operador do produto não é superusuário da aplicação. Suporte exige consentimento, escopo, expiração e trilha local. A mesma pessoa em outro box precisa de identidade/vínculo local independente; sua credencial ou cargo em A não dá direitos em B.

## RLS, grants e superfícies indiretas

Proposta: autenticação válida local → perfil ativo → papel/titularidade/atribuição atuais → operação/campos permitidos. Validar linha anterior e nova; impedir apropriação de student_id, autoria, role e vinculação de terceiros. Não confiar em user_metadata editável nem somente claims de papel antigas; operações sensíveis consultam estado autorizado corrente. Revogar papel/conta nega nova operação mesmo com access token anterior ainda válido. Logout/revogação de sessão não deve ser confundido com invalidação imediata de todo JWT; projetar verificação aplicável e teste real.

Configurar grants e RLS por operação em toda tabela exposta; não habilitar anônimo no domínio por conveniência. Views e relatórios devem preservar políticas; preferir privilégios do chamador quando suportado. RPC privilegiada exige search_path controlado, autorização explícita, argumentos restritos e execução mínima; não presumir que RLS protege toda função. Credenciais privilegiadas podem contornar RLS, portanto ficam apenas no backend autorizado. Storage requer bucket/políticas e ownership próprios; caminho com identificador não autoriza leitura. URLs assinadas têm validade limitada; logs/exports/notificações não podem criar vazamento lateral.

Reserva/cancelamento usam operação transacional; escrita direta não pode contornar capacidade, elegibilidade ou idempotência. Exclusão e retenção/anonimização exigem decisão própria, sem apagar histórico esportivo silenciosamente.

## Plano de testes futuros — NÃO EXECUTADOS

- Negação por papel, titularidade e atribuição em leitura/escrita/API direta; usuário autenticado sem perfil ativo.
- Aluno altera student_id/autoria, recepção tenta elevar papel, professor acessa aluno não atribuído; todos negados.
- Revogação/reativação e token anterior; vínculo login/aluno; último proprietário e suporte expirado.
- Views, RPC, Storage, relatórios, ranking e exportação sem notas ou dados indevidos.
- Dois projetos sintéticos: token A em B negado; credencial de mesmo e-mail sem vínculo local não concede acesso.
- Configuração A→B bloqueada; produção indisponível a preview. Independência das atualizações e ausência de chave privilegiada no bundle.
- Vaga concorrente, idempotência, presença corrigida; prescrição versionada, cap/unidades/empates.
- Instalação vazia, upgrade anterior suportado, seed repetido, backup/restauração e compatibilidade rollback.

## Fontes

[RLS oficial](https://supabase.com/docs/guides/database/postgres/row-level-security), [migrations](https://supabase.com/docs/guides/local-development/database-migrations) e [backups](https://supabase.com/docs/guides/platform/backups), consultados em 16/10/2026. O desenho é próprio e não constitui comprovação de controle implementado.
