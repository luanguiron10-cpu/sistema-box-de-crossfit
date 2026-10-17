# Backlog técnico inicial

## Estado da Fase 4A — 17/10/2026

A fundação frontend demonstrativa executa parte de G01 (aplicação local/toolchain/testes) e apenas apresentação sintética de módulos G04–G10/G13. G01 completo ainda inclui CI e futuras etapas; G02/G03 (banco/Auth), reservas/presença, cálculos PR e demais operações persistidas NÃO estão concluídos. [Evidências da fundação](fase-4a-fundacao.md). As tabelas de propostas abaixo mantêm rastreabilidade histórica; não confundir tela demo com requisito de negócio implementado.

Origem: planejamento da Fase 1 relatado na conversa e consolidado nesta fase. Itens são propostas próprias, sem implementação ou testes de produto executados. P0 compõe o núcleo; P1 complementa operação; P2 representa expansão. Dependências não são evidência de conclusão.

**Linha de base histórica:** a primeira tabela abaixo está superada quanto à topologia compartilhada. O backlog vigente está na seção Revisão Fase 3 — instalações independentes; IDs, prioridades e dependências são preservados.

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

## Revisão Fase 3 — instalações independentes

Decisão do proprietário em 2026-10-16, [ADR-009](../arquitetura/adr-009-instalacoes-independentes.md): substituir modelo compartilhado por uma base central e projetos Supabase/Cloudflare independentes por box e ambiente. A tabela inicial acima preserva a linha de base histórica; sua expressão modelo multi-box em G02 está SUPERADA. A tabela abaixo é o backlog vigente. IDs, prioridades e dependências foram preservados; aceites foram acrescidos de isolamento operacional, sem declarar implementação concluída.

| ID | Prioridade / dependências (inalteradas) | Antes → depois e aceite vigente |
|---|---|---|
| G00 | P0 / — | Box versus rede pendente → instalação por box aprovada; validar papéis internos, políticas esportivas, contrato e RPO/RTO pendentes. |
| G01 | P0 / G00 | Aplicação local/CI → base central, fonte/tag/SHA/digests, toolchain fixada, validação de configuração por instalação; sem deploy automático. |
| G02 | P0 / G00 | Modelo multi-box compartilhado → esquema de uma instalação e RLS por papel/propriedade; negar API não autorizada e tokens de outro projeto, sem tenant selector. |
| G03 | P0 / G01, G02 | Auth/vínculos → identidades e convites locais ao projeto; negar autoelevação, revogação ignorada e autenticação cruzada A/B. |
| G04 | P0 / G03 | Alunos sintéticos → cadastro/eligibilidade dentro da instalação; seed sintético só teste e bootstrap sem senha padrão. |
| G05 | P0 / G04 | Turmas/fuso → regras configuráveis locais, sem alteração de código por cliente; capacidade e janelas verificadas; RF-CF-14: mesma release em A/B com unidades, fuso e janelas distintos sem retroalterar histórico. |
| G06 | P0 / G05 | Reserva atômica → manter última vaga e idempotência por instalação; configuração de prazo não contorna autorização. |
| G07 | P0 / G05, G06 | Presença/correções → manter separação de reserva, auditoria e autoria local. |
| G08 | P0 / G03, G05 | WOD versionado → manter versão executada e prescrição própria do box após upgrade. |
| G09 | P0 / G08 | Resultados tipados → manter time cap, autoria e correções rastreáveis após mudança de esquema. |
| G10 | P0 / G09 | PR/benchmark → comparação/unidades locais; restauração/upgrade não mistura versões esportivas. |
| G11 | P1 / G06 | Espera configurável → política própria do box, promoção atômica e sem interferência entre instalações. |
| G12 | P1 / G09, G10 | Ranking/privacidade → visibilidade interna autorizada, ranking global fora do escopo principal; futura integração exige nova ADR. |
| G13 | P1 / G07, G09, G10 | Evolução/frequência → denominador/período e notas privadas preservados; teste de permissões locais. |
| G14 | P1 / G04 | Financeiro manual → dados e permissões exclusivos da instalação; sem cobrança automatizada nesta entrega. |
| G15 | P2 / decisões específicas | Expansões/integrações → configuração e credenciais por instalação, extensões no código comum; sem forks permanentes. |

Dependências de release transversais: provisionamento reproduzível, matriz app/esquema/configuração, backup/restauração, atualização N-1→N e rollback compatível são gates antes de operar qualquer cliente. Não mudam a ordem dos IDs; não autorizam sua execução. Ver [checklist](../implantacao/checklist-novo-box.md) e [distribuição](../implantacao/distribuicao-atualizacao-rollback.md).

Todos os itens de produto seguem PROPOSTOS; G00 contém a decisão arquitetural aprovada, mas políticas pendentes impedem declará-lo concluído. Nenhum teste de aplicação foi executado. Os oito registros e revisão independente são obrigatórios por funcionalidade, release e instalação.
