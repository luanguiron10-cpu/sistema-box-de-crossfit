# Backlog técnico inicial

Origem: planejamento da Fase 1 relatado na conversa e consolidado nesta fase. Itens são propostas próprias, sem implementação ou testes de produto executados. P0 compõe o núcleo; P1 complementa operação; P2 representa expansão. Dependências não são evidência de conclusão.

| ID | Prioridade | Entrega e aceite principal | Dependências |
|---|---|---|---|
| G00 | P0 | Definir regras, papéis, privacidade e critérios com proprietário/coaches | — |
| G01 | P0 | Repositório, aplicação local e CI de validação sem deploy automático | G00 |
| G02 | P0 | Modelo multi-box e autorização; testes positivos/negativos de isolamento | G00 |
| G03 | P0 | Auth, vínculos, papéis e convites; impedir autoelevação | G01, G02 |
| G04 | P0 | Cadastro e elegibilidade de alunos com dados sintéticos | G03 |
| G05 | P0 | Modalidades, turmas, capacidade, fuso e janelas | G04 |
| G06 | P0 | Reserva/cancelamento transacionais; última vaga e reenvio sem duplicação | G05 |
| G07 | P0 | Presença separada de reserva, com correções auditáveis | G05, G06 |
| G08 | P0 | WOD, movimentos, prescrições e versões preservadas | G03, G05 |
| G09 | P0 | Resultados tipados, time cap e correções rastreáveis | G08 |
| G10 | P0 | PRs/benchmarks com comparação compatível e conversão de unidades | G09 |
| G11 | P1 | Espera e promoção segundo política definida | G06 |
| G12 | P1 | Ranking comparável, empate explícito e privacidade | G09, G10 |
| G13 | P1 | Evolução e frequência com denominador e período definidos | G07, G09, G10 |
| G14 | P1 | Financeiro administrativo manual com permissões | G04 |
| G15 | P2 | TV, metas, notificações e integrações oficiais | Decisões específicas |

Todos os itens de produto permanecem PROPOSTOS. A estrutura documental e integração Git desta fase não comprovam G01 concluído, pois aplicação e CI ainda precisam de implementação e validação próprias.

Antes da implementação: definir box versus rede/unidade, elegibilidade de WOD, política de faltas/cancelamento/espera, ranking, correções, financeiro e orçamento. Enquanto não houver fila, turma lotada deve recusar novas reservas de modo consistente.

Cada entrega deve seguir a [política](politica-documentacao.md) e o [modelo](modelo-funcionalidade.md), incluindo testes de erro, autorização e replicação. Não criar workflows de publicação nem executar migrações nesta fase.
