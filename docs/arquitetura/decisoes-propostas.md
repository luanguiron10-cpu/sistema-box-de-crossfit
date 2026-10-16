# Registro de decisões propostas

Data: 2026-10-16. Versão documental: 0.1. Todas as ADRs abaixo estão **propostas, pendentes de aprovação técnica e validação**. Nenhuma representa infraestrutura já criada.

| ADR | Contexto e decisão proposta | Alternativas e consequência | Evidência para aceite |
| --- | --- | --- | --- |
| 001 — Tenant | Box como tenant, vínculo de usuário por box e papéis independentes | Rede/unidade pode exigir hierarquia; decidir antes de migrar dados | Dois boxes sintéticos sem vazamento por API, agregados ou relacionamentos |
| 002 — Aplicação modular | Frontend React/TypeScript com Supabase; hospedagem futura Pages | SSR e backend independente serão reconsiderados se requisitos exigirem | Build reprodutível, acessibilidade, autorização e operação transacional testadas |
| 003 — Autorização | RLS mais grants por operação, vínculo ativo e papel no banco | Filtros apenas no frontend são insuficientes | Matriz positiva/negativa por papel/tenant; revogação com token anterior |
| 004 — Prescrição histórica | Resultados apontam para versão imutável de WOD/prescrição executada | Sobrescrever a prescrição destrói comparabilidade | Editar WOD publicado não muda resultado histórico |
| 005 — Participação | Reserva, presença e resultado como registros independentes | Um único check-in misturaria capacidade e frequência | Cancelamento não apaga presença; resultado não cria presença automaticamente |
| 006 — Distribuição | Mesmo código, configurações por cliente; dedicado como variante operacional | Fork por cliente eleva custo de correções e divergência | Atualização de dois boxes sem regressão e inventário de customizações |
| 007 — Entrega | Branch, revisão e CI desacoplados de deploy | Integração Pages pode iniciar builds/publicações automaticamente | Evidência de ausência de gatilho de deploy e aprovação de release |
| 008 — Ranking/PR | Comparar prescrição, versão, unidade e regra compatíveis | Categoria genérica Scaled não assegura comparabilidade | Casos de cap, empate, unidade e repetições revisados pelo especialista |

## Processo de decisão

Arquiteto registra contexto, alternativas e impactos; especialista valida domínio; desenvolvedor avalia viabilidade e testes; auditor revisa autorização e regressão. Proprietário define política de negócio e aprova publicação. Aprovação comercial não comprova segurança técnica.

Ao aceitar, substituir o estado e registrar data, responsável, versão afetada, links de requisito, implementação e testes. Uma decisão superada permanece no histórico, com referência à sucessora.

## Base técnica consultada

[RLS Supabase](https://supabase.com/docs/guides/database/postgres/row-level-security) distingue autorização de linha e grants; [Pages Git](https://developers.cloudflare.com/pages/configuration/git-integration/) documenta automação por integração e controles de branch. Consulta: 2026-10-16. As demais decisões são propostas próprias.
