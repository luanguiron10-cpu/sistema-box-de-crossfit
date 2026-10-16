# Fase 3 — revisão para instalações independentes

Data: 16/10/2026. Versão documental: 0.2.0-docs. Escopo autorizado: decisão arquitetural e documentação, commits e envio da branch, sem merge, implementação, infraestrutura, migrações ou deploy.

## Decisão e histórico preservado

O proprietário aprovou um código-base central com instalações independentes por box: projeto Supabase e implantação Cloudflare próprios, com ambientes separados. A [ADR-009 aceita](../arquitetura/adr-009-instalacoes-independentes.md) supera a proposta de banco multi-tenant compartilhado. A aprovação da arquitetura não comprova execução nem aprova automaticamente todos os detalhes de implementação.

Base local verificada antes das alterações: árvore limpa, branch `setup/documentacao-inicial`, HEAD `01405f250e5f8556bd23a6d08ec44a68d33c59a7`. Branch criada a partir dela: `arquitetura/instalacoes-independentes`. Origin preservado: `https://github.com/luanguiron10-cpu/sistema-box-de-crossfit.git`.

As versões anteriores permanecem integralmente no histórico Git:

- [Arquitetura compartilhada da Fase 2](https://github.com/luanguiron10-cpu/sistema-box-de-crossfit/blob/01405f250e5f8556bd23a6d08ec44a68d33c59a7/docs/arquitetura/README.md).
- [Tabela de propostas anteriores](https://github.com/luanguiron10-cpu/sistema-box-de-crossfit/blob/01405f250e5f8556bd23a6d08ec44a68d33c59a7/docs/arquitetura/decisoes-propostas.md).
- [Modelo conceitual anterior](https://github.com/luanguiron10-cpu/sistema-box-de-crossfit/blob/01405f250e5f8556bd23a6d08ec44a68d33c59a7/docs/banco-de-dados/modelo-conceitual-e-seguranca.md).
- [Backlog anterior G00–G15](https://github.com/luanguiron10-cpu/sistema-box-de-crossfit/blob/01405f250e5f8556bd23a6d08ec44a68d33c59a7/docs/desenvolvimento/backlog.md).

Não reescrever auditorias da Fase 2 ou inventário inicial para refletir a decisão nova retroativamente. Menções ao modelo antigo em registros históricos não são requisitos vigentes. Os guias iniciais e `agents/*.md` são orientações históricas de papel; AGENTS.md e ADR-009 determinam a arquitetura vigente quando houver divergência.

## Delegação e revisão cruzada

| Tipo / execução | Produção atribuída | Revisão independente |
|---|---|---|
| arquiteto / fase3_arquiteto | ADR, arquitetura e dados/segurança | Implantação e manuais produzidos por outros agentes |
| engenharia_reversa / fase3_referencia | Atualização das propostas Fase 1 preservando fontes | Atribuições, histórico, arquitetura, README e comercial |
| especialista_crossfit / fase3_crossfit | Requisitos e manuais | Backlog e modelo de dados |
| desenvolvedor / fase3_desenvolvedor | Backlog, política e procedimentos operacionais | ADR, dados/segurança e domínio |
| auditor / fase3_auditor | Critérios de reprodução e auditoria consolidada | Conjunto final, evidências, segredos, Git e escopo |

Resultados efetivos e links para pareceres: [auditoria da Fase 3](../testes/auditoria-fase-3.md). A tabela acima define responsabilidades, não antecipa aprovação de revisões pendentes.

## Itens de aceite documental

1. ADR aceita, alternativas e impacto explícitos; proposta anterior identificada como superada e recuperável.
2. Auth, papéis e dados locais; projeto dedicado não dispensa grants, RLS, ownership ou revogação.
3. Backlog mantém G00–G15 e rastreia alteração de escopo/aceite/dependências.
4. Configuração e branding separados do código; releases fixadas, sem forks permanentes.
5. Procedimentos de migrações/seed/backup/restauração/atualização/rollback planejados, sem execução.
6. Reprodução do zero em A/B sintéticos e testes de falha de destino, tokens, papéis e compatibilidade previstos.
7. Oito registros e testes por incremento obrigatórios; testes não executados mantidos explícitos.

## Verificações e limites

Fontes oficiais públicas Supabase RLS/migrations/backups e Cloudflare foram consultadas apenas para fundamentar desenho. O endpoint changelog Markdown foi rejeitado pela ferramenta por content-type; o índice HTML foi consultado, sem certificação exaustiva de mudanças de versão. Não houve conexão com projetos Supabase.

Testes de implantação, código, RLS, Auth, concorrência, seed, backup, restauração e rollback: **NÃO EXECUTADOS**. Não há aplicação implementada nesta fase. Verificações documentais e estado Git serão registrados pelo auditor e no fechamento abaixo.

### Verificações documentais executadas e correções

- Verificador documental executado pelo coordenador: PASSOU, exit 0; 57 arquivos, 47 Markdown, 118 links locais, cinco TOMLs e zero sinais de segredo nos padrões inspecionados. Limites: não valida runtime, URLs externas, todos os dados sensíveis ou sintaxe TOML completa.
- `git diff --check` global: exit 0 depois das normalizações de whitespace. Falhas intermediárias e retestes estão no relatório do auditor.
- `git diff --name-only --diff-filter=D 01405f2`: sem saída, nenhum arquivo excluído.
- `git merge-base HEAD 01405f2`: `01405f250e5f8556bd23a6d08ec44a68d33c59a7` no estado pré-commit, confirmando derivação da base.
- `.codex/`, `agents/` e `scripts/`: sem alterações contra a base; nenhuma migração, código de aplicação ou workflow criado.
- API autenticada do repositório consultada pelo coordenador: destino exato, privado e `push: true`. Nenhuma outra conta/repositório foi modificada.

Achados das revisões cruzadas corrigidos documentalmente: relação de PR avulso com aluno sem exigir WOD; benchmark como definição sem titular obrigatório; negação de operação sensível após revogação mesmo com JWT anterior; configuração esportiva RF-CF-14 e ranking global fora do escopo. O modelo de funcionalidade ativo é atualizado para instalações A/B, e o backlog mantém aviso de linha de base histórica. Esses ajustes não representam testes executados do comportamento futuro.

Durante o staging do segundo commit, `git diff --cached --check` detectou CRLF interpretado como whitespace em duas linhas de um parecer novo. A checagem da árvore anterior não incluía arquivos não rastreados. O commit foi interrompido (exit 2), o parecer foi normalizado para LF sem mudança de conteúdo e a checagem do índice foi repetida antes de prosseguir. Essa ocorrência reforça a revisão do índice, além da árvore de trabalho.

## Registro Git e encerramento

O envio autorizado fica limitado à branch `arquitetura/instalacoes-independentes` no repositório privado confirmado. Não criar PR/merge, tag de release ou gatilho de publicação por inferência. Os commits e a confirmação remota serão anotados após auditoria e verificação do SHA; não considerar push realizado com base apenas no commit local.
