# Parecer independente — especialista_crossfit

Data: 2026-10-16. Revisão documental Fase 3. Estado: favorável com refinamentos de precisão; não é aceite de aplicação.

## Escopo e independência

Autor das revisões de regras esportivas e manuais; revisão independente dos documentos de outros responsáveis: [ADR-009](../../arquitetura/adr-009-instalacoes-independentes.md), [modelo conceitual e segurança](../../banco-de-dados/modelo-conceitual-e-seguranca.md), [backlog](../../desenvolvimento/backlog.md) e [checklist](../../implantacao/checklist-novo-box.md). Não é revisão independente dos próprios manuais.

## Achados e evidências

- ADR e modelo removem conta global/seletor e preservam autorização por titularidade, papel e atribuição dentro da instalação. Ranking não recebe notas privadas. Separação física não é tratada como substituta de autorização.
- G00–G15 mantêm IDs, prioridades e dependências, com linha histórica e tabela vigente; G07–G13 preservam presença separada, WOD versionado, score, time cap, comparação de PR e privacidade. G04/checklist reservam seed sintético a teste, sem senha padrão.
- RF-CF-01–13 foram preservados com deltas explícitos em 08/12/13; RF-CF-14 registra configuração por instalação sem forks. Critérios de restauração/upgrade preservam versão e histórico esportivo.
- Refinamento enviado ao arquiteto: explicitar aluno obrigatório em tentativas avulsas de movimento, WOD opcional e benchmark como definição. Refinamento aplicado pelo arquiteto: movement_attempts exige aluno local, WOD/resultado são opcionais e benchmark_versions é definição sem titular.
- Refinamentos enviados ao desenvolvedor: vincular RF-CF-14 a teste A/B com unidade/fuso/janelas distintos e sem mudança retroativa; evitar que expressão ranking global “por padrão” seja interpretada como integração já autorizada. Fora do escopo principal, tal integração exige nova decisão.

## Validações e limites

Leitura e comparação documental executadas; `git diff --check -- docs/fase-1/regras-crossfit.md docs/manuais/` executado com exit code 0 após normalização de EOF. Revisão dos demais arquivos foi leitura, sem executar sua implementação. Não houve pesquisa nova de referência nem validação universal das políticas esportivas.

Testes de aplicação, concorrência, RLS, provisionamento, seed, atualização, restauração e rollback: **NÃO EXECUTADOS**, pois não há implementação/infraestrutura autorizada nesta fase. Aceite com coaches das políticas variáveis continua pendente. Nenhum código, banco, configuração de agente ou infraestrutura foi alterado por este agente.
