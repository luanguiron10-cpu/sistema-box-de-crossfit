# Modelo conceitual e estratégia de autorização

Estado: proposta original, versão documental 0.1, 2026-10-16. Não é esquema implementado nem garantia de isolamento. Papéis e entidades dependem de aceite.

## Entidades e relacionamentos

| Domínio | Entidades propostas | Relações e invariantes |
| --- | --- | --- |
| Identidade | profiles, boxes, memberships, membership_roles | Identidade global mínima; vínculo único usuário/box; papéis vinculados ao membership, revogáveis |
| Alunos | students, plans, enrollments | Aluno do box pode ainda não ter login; vínculo com identidade é opcional e controlado; financeiro separado de identidade |
| Agenda | class_types, schedule_templates, class_sessions | Ocorrência guarda horário, fuso aplicável, capacidade, professor e estado; cancelada não gera falta |
| Participação | bookings, waitlist_entries, attendance_records | Um aluno/ocorrência; capacidade respeitada em concorrência; presença e reserva independentes |
| Esporte | movements, workouts, workout_versions, workout_blocks, session_workouts | Movimentos do box ou catálogo explicitamente compartilhado; versão publicada preservada quando usada |
| Desempenho | workout_results, result_components, movement_attempts, benchmark_versions | Resultado referencia aluno, versão e prescrição; unidade e valor originais preservados; PR é derivação auditável |
| Acompanhamento | private_notes, audit_events, box_settings | Notas restritas e segregadas; eventos mínimos com autor e contexto; não registrar tokens ou conteúdo sensível sem necessidade |

Dados de domínio incluem box_id, identificador, autoria e datas conforme necessidade. Chaves compostas ou verificação equivalente no banco devem impedir um resultado do box A referenciar aluno/turma do box B. Índices e constraints serão projetados e medidos após o esquema físico. Profiles globais não expõem diretório global de usuários: o aluno edita campos próprios permitidos; dados de equipe são acessados por projeções tenant-scoped mínimas.

## Matriz de acesso proposta

Todas as permissões exigem vínculo ativo no **mesmo box** e escopo da operação. Negação é padrão. “Gerir” não inclui trocar tenant, exportar indiscriminadamente ou assumir outro usuário.

| Recurso | Proprietário do box | Gestor | Professor | Recepção | Aluno |
| --- | --- | --- | --- | --- | --- |
| Papéis e configurações | Gerir com auditoria | Configuração operacional delegada; sem elevar privilégios | Ler necessário | Ler necessário | Ler informação pública do próprio box |
| Cadastro/elegibilidade | Gerir | Gerir | Ler mínimo dos alunos atendidos | Gerir campos operacionais | Ler próprio; editar campos permitidos |
| Turmas e agenda | Gerir | Gerir | Gerir atribuídas conforme delegação | Reservar/cancelar administrativamente | Ler elegíveis e reservar/cancelar para si |
| Presença | Gerir/corrigir | Gerir/corrigir | Confirmar/corrigir turmas atribuídas | Confirmar se delegado | Ler própria |
| WOD | Gerir | Gerir | Criar/publicar se delegado | Ler publicado necessário | Ler publicado conforme elegibilidade |
| Resultados/PRs | Ler no box; correção auditada | Ler no box; correção auditada | Acompanhar e corrigir conforme regra | Sem acesso por padrão | Registrar/ler próprios; correção conforme janela |
| Ranking | Ler projeção permitida | Ler projeção permitida | Ler projeção permitida | Sem acesso por padrão | Ler projeção consentida/autorizada |
| Notas privadas | Sem acesso automático pelo cargo | Somente se autorizado e necessário | Próprias ou compartilhadas com autorização | Negado | Negado a notas internas; solicitação de dados tem fluxo próprio |
| Financeiro administrativo | Gerir | Gerir se delegado | Negado | Operar se delegado | Ler próprios lançamentos permitidos |
| Auditoria/exportação | Acesso específico, autenticado e registrado | Acesso específico delegado | Negado por padrão | Negado | Exportação própria por fluxo controlado |

O operador da plataforma não recebe acesso irrestrito aos boxes como papel de aplicação. Suporte excepcional requer autorização, duração limitada e registro; definir procedimento antes de ofertar suporte com acesso a dados.

## Estratégia RLS e backend

Proposta de avaliação: identidade válida → membership ativo do tenant da linha → papel/atribuição → operação permitida → campos/referências válidos. A alteração deve validar linha anterior e nova, impedindo mover registros para outro box ou usuário. Atualizações e leitura precisam de políticas compatíveis.

Grants e políticas são controles distintos na documentação oficial. Para tabelas expostas, configurar ambos e RLS. Não confiar em user_metadata editável pelo usuário; consultar vínculo atual para operações sensíveis, evitando depender apenas de claims antigas. Não habilitar acesso anônimo ao domínio por conveniência.

Views, funções, relatórios, objetos de Storage e exports devem preservar o mesmo escopo. Preferir execução com privilégios do chamador; qualquer função privilegiada precisa de superfície restrita, autorização explícita e revisão. Credenciais administrativas ficam fora do frontend e do Git. Caminho de arquivo com box_id não substitui política de acesso.

Reserva usa operação transacional com validação de elegibilidade, capacidade, duplicidade e idempotência. O caminho direto de escrita não pode contornar a operação. Exclusão de aluno ou vínculo não elimina silenciosamente histórico: política de retenção e anonimização ainda precisa ser decidida.

## Testes obrigatórios futuros

- Mesmo usuário com papéis diferentes em dois boxes; tentativa por identificador de outro tenant negada.
- Troca de box_id, autoelevação, referência cruzada, API direta e agregados negados.
- Vínculo revogado com token anterior; aluno sem login e usuário sem vínculo.
- Última vaga concorrente; reenvio idempotente; fila concorrente e correção de presença.
- Views, funções, Storage, exportação e ranking sem exposição lateral de notas ou identidade.
- Atualização que muda titular/tenant, leitura necessária ao UPDATE e deleção conforme política.
- Versão de WOD, time cap, unidades e critérios comparáveis sem sobrescrever histórico.

Resultado atual: **não executados**; dependem da implementação. Base consultada: [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), 2026-10-16. Detalhes acima são desenho próprio.
