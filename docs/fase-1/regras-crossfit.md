# Requisitos esportivos e operação do box

Data: 16/10/2026. Versão documental: 0.2 — Fase 3. Estado: proposta para validação do proprietário e coaches.

Este documento consolida as propostas próprias apresentadas na Fase 1. Não descreve funcionalidades implementadas, normas universais de CrossFit nem comportamento verificado no Next Fit. Regras variáveis deverão ser configuradas por box. Não houve teste de aplicação nesta etapa.

## Requisitos e critérios de aceite

| ID | Requisito próprio | Critério de aceite futuro |
| --- | --- | --- |
| RF-CF-01 | WOD com data, blocos, modalidade, prescrição e estado rascunho/publicado. Uma turma pode receber uma versão definida do treino. | Aluno recebe somente versão publicada para a qual tem acesso; rascunho não aparece para aluno. |
| RF-CF-02 | Versionar a prescrição usada em resultados. | Alteração após resultado preserva a versão original e sua associação; histórico identifica autor, momento e motivo da correção. |
| RF-CF-03 | Pontuação tipada por bloco: tempo, carga, repetições, rounds/reps ou conclusão. A regra define direção de ordenação. | Tipo incompatível é recusado; unidade acompanha carga/tempo; EMOM sem score competitivo não ganha ranking artificial. |
| RF-CF-04 | Separar conclusão, tempo limite (time cap) e trabalho realizado. | Resultado não concluído no cap mantém trabalho realizado e estado de não conclusão; não recebe tempo fictício de conclusão. |
| RF-CF-05 | RX, Scaled e Adaptado descrevem a prescrição efetiva, incluindo movimentos, variações, carga, repetições e ajustes relevantes. | Rótulo Scaled sozinho não torna dois resultados comparáveis; categoria informada pelo aluno preserva contexto. |
| RF-CF-06 | PR compara movimento, variação, repetições e unidade sob regra declarada. | Tentativas de 1 e 5 repetições não são comparadas como mesmo PR; conversão preserva valor/unidade originais e precisão definida. |
| RF-CF-07 | Benchmarks têm versão, prescrição e regra de pontuação explícitas. | Mudança relevante cria versão; evolução só compara versões compatíveis e informa os filtros aplicados. |
| RF-CF-08 | Ranking depende de equivalência de versão, prescrição e regra; participação identificável deve ter escolha explícita de visibilidade. | Empates permanecem empates salvo desempate previamente definido; aluno sem adesão não aparece identificado no ranking; notas privadas nunca aparecem. |
| RF-CF-09 | Reserva, presença e resultado são eventos distintos. | Reserva não confirma presença; resultado não confirma presença automaticamente; correção de chamada tem autoria e motivo. |
| RF-CF-10 | Capacidade, cancelamento e espera seguem política do box. | Duas reservas concorrentes para última vaga produzem uma confirmação; repetição da mesma requisição não duplica; cancelamento libera vaga uma vez. |
| RF-CF-11 | Frequência informa período, presenças válidas, denominador e exclusões. | Turma cancelada não gera falta; relatório distingue frequência sobre reservas, aulas previstas ou outra base aprovada. |
| RF-CF-12 | Acompanhamento separa evolução esportiva de observações individuais restritas. | Aluno não lê notas internas sem autorização; informações de outra instalação não aparecem; notas restritas da própria instalação respeitam o papel; dados de saúde desnecessários não são coletados. |
| RF-CF-13 | Professor, gestor e aluno têm capacidades distintas dentro do box. | Aluno altera somente o permitido em seu próprio resultado; homologação e correções seguem política aprovada; mudança de papel não ocorre por ação do próprio aluno. |

## Decisões pendentes por box

- Elegibilidade para visualizar WOD: vínculo, modalidade, plano e momento da publicação.
- Janelas de reserva/cancelamento, tolerância, no-show e eventuais restrições futuras.
- Espera: ordem, promoção automática ou convite, prazo de resposta e tratamento de múltiplas reservas.
- Presença: confirmação por coach, recepção ou mecanismo adicional aprovado; correção retroativa e justificativa.
- Categorias e divisões de ranking, adesão à exposição, apelido, regras de empate e retenção.
- Validação de resultados, contestação, prazo de edição, efeito da correção no PR e ranking.
- Catálogo de movimentos, unidades, arredondamento, precisão e comparabilidade de benchmarks.
- Denominador de frequência e política de aulas extras, reposições e cancelamentos.

Nenhuma decisão pendente autoriza coleta de informação pessoal adicional ou regra automática de punição.

## Cenários para testes futuros

1. Coach publica WOD, aluno registra resultado e coach revisa a prescrição: resultado continua associado à versão executada.
2. Aluno conclui parcialmente um treino no cap: histórico mostra trabalho realizado, sem classificá-lo como concluído.
3. Duas adaptações diferentes usam o rótulo Scaled: classificação conjunta é impedida quando não há regra de equivalência aprovada.
4. Tentativa em libras supera marca equivalente em quilogramas: comparação aplica conversão definida e preserva entrada original.
5. Última vaga recebe requisições simultâneas: somente uma é confirmada, sem ultrapassar capacidade.
6. Reserva cancelada ou turma cancelada: relatório não inventa presença e aplica exclusões do denominador.
7. Aluno revoga exposição no ranking: consulta pública/compartilhada respeita a política e não revela notas internas.

Resultado nesta fase: cenários especificados, não executados. Aceite esportivo exige revisão de coaches; aceite técnico exige implementação e evidências de testes. Alterações futuras devem registrar requisito afetado, versão, erro/correção, implantação e impacto na replicação para outros boxes.

## Revisão arquitetural Fase 3 e rastreabilidade

A [ADR-009](../arquitetura/adr-009-instalacoes-independentes.md) registra a decisão aprovada: código-base central, versões controladas e uma instalação independente por box e ambiente. O aluno acessará a URL do box e usará a autenticação dessa instalação. Participar de outro box exige acesso e vínculo próprios na outra instalação; não há conta universal, seletor de box ou ranking entre instalações no escopo principal.

| Requisitos | Tratamento Fase 3 | Impacto e aceite futuro |
| --- | --- | --- |
| RF-CF-01 a RF-CF-07 | Mantidos | WOD, versões, score, time cap, prescrição, PR e benchmark continuam locais à instalação. |
| RF-CF-08 | Contexto alterado | Ranking somente na instalação, com adesão e comparabilidade; nenhuma consulta agregará alunos de clientes distintos. |
| RF-CF-09 a RF-CF-11 | Mantidos | Reserva, presença, resultado e frequência continuam distintos, com política local e concorrência controlada. |
| RF-CF-12 | Contexto alterado | Evolução e notas pertencem à instalação; papéis locais controlam acesso também entre pessoas do mesmo box. |
| RF-CF-13 | Contexto alterado | Papel e vínculo são concedidos localmente; papel em outra instalação não concede acesso nesta. |
| RF-CF-14 | Novo | Configuração versionada por instalação registra identidade visual autorizada, unidades, fuso, janelas e políticas esportivas; mesmo release aceita configurações distintas sem fork permanente. |

Mudança de configuração não altera retroativamente prescrição, política ou unidade já associada a um resultado. Migrações e atualização do release precisam preservar histórico esportivo e configurações locais; reversão da interface não autoriza reverter dados de forma destrutiva. Seed será exclusivamente sintético e não deverá conceder contas de teste em produção.

Cenários adicionais necessários: reproduzir o mesmo release em duas instalações sintéticas com fusos/unidades/janelas distintos; verificar ausência de acesso cruzado; negar ao aluno a atribuição de papel; atualizar uma instalação sem alterar a outra; recuperar versão/histórico esportivo e configurações em teste de restauração. Todos estão **NÃO EXECUTADOS** nesta fase documental.

Histórico: 0.1 preservou propostas esportivas da Fase 1; 0.2 adapta o contexto de acesso e operação à decisão de instalações independentes. Não houve alteração de código ou banco, migração ou implantação.
