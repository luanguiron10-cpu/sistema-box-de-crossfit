# Fase 4A — domínio esportivo e experiência demonstrativa

Versão documental 0.1, 17/10/2026. Responsável: `especialista_crossfit`.

## Objetivo, requisitos e aceite

Representar aluno, professor e gestor com dados locais sintéticos, sem implementar regras operacionais nem autenticação. Base: [RF-CF-01–14](../fase-1/regras-crossfit.md), [matriz](../fase-1/matriz-funcionalidades.md) e [ADR-009](../arquitetura/adr-009-instalacoes-independentes.md). Estas são propostas próprias P, não novas descobertas sobre o Next Fit.

| ID | Rastreabilidade | Critério da demonstração |
| --- | --- | --- |
| CF4A-01 | RF-CF-01/03/05 | WOD identifica programação do dia, formato, movimentos, repetições e unidade de carga quando aplicável. Prescrição ilustrativa não é orientação individual. |
| CF4A-02 | RF-CF-06/07 | PR informa movimento/variação, repetições e unidade; benchmark significa treino padronizado reutilizável, não sinônimo de PR. Não alegar cálculo ou homologação automática. |
| CF4A-03 | RF-CF-09/10 | Reserva, presença e resultado aparecem como conceitos distintos. Não há mensagem de reserva/presença salva nem preenchimento que prometa persistência. |
| CF4A-04 | RF-CF-11 | Frequência ilustrativa informa período e denominador; porcentagem deve ser coerente com os números apresentados. |
| CF4A-05 | RF-CF-12/13 | Troca aluno/professor/gestor é explicitamente uma visualização demonstrativa, sem login ou concessão de autorização. Dados usam identificadores fictícios, sem saúde ou notas pessoais. |
| CF4A-06 | RF-CF-01/09 | Professor visualiza turmas do dia, WOD e lista sintética; aluno visualiza próximos treinos, WOD, PRs e histórico. Operações futuras não são apresentadas como concluídas. |
| CF4A-07 | RF-CF-14, ADR-009 | Uma instalação é exibida por execução, sem seletor global de clientes. Nome, cores, fuso e unidades vêm de configuração pública local. |
| CF4A-08 | Todos | Data demonstrativa fixa 17/10/2026 é explícita. “Hoje” e “próximo” devem usar esse contexto, sem se passar por agenda real em dias futuros. |

## Arquitetura e dados propostos

Componentes consomem fixtures locais; nenhuma regra de reserva, chamada, ranking ou autorização é implementada nesta fase. Não comparar resultados Scaled sem prescrição equivalente nem misturar unidades em ranking. Exemplo sintético: Atleta 01; agachamento frontal, 1 repetição, 70 kg. Exemplo de frequência: 72 presenças em 90 reservas, 80%, semana demonstrativa identificada. Esses exemplos não obrigam valores exatos na interface, mas exigem contexto consistente.

## Alterações e limites

Este documento não altera código nem banco. Implementação do frontend e suas evidências pertencem ao registro central da Fase 4A. Regras de cancelamento, espera, homologação, categorias e comparabilidade continuam pendentes de decisão local; o protótipo não as resolve implicitamente.

## Testes, erros e revisão

Leitura documental realizada: AGENTS.md, papel do especialista, regras RF-CF, matriz e três manuais. Critérios definidos e enviados ao desenvolvedor antes da implementação. Revisão do código e evidências finais em [parecer](../testes/pareceres-fase-4a/especialista_crossfit.md). Testes esportivos de backend, concorrência, permissões, cálculo de PR e persistência: **NÃO EXECUTADOS**, pois fora desta fundação demonstrativa.

## Instalação, atualização e replicação

Usar mesmo release e fixtures sintéticas em configurações públicas A/B. Alterar nome/cores não cria conta, projeto ou isolamento de backend. Atualizações preservam a distinção entre demonstração e produto operacional. Reversão desta fase é de versão do frontend, sem banco a reverter. Instalação Windows e comandos ficam no manual técnico da Fase 4A.

## Histórico

0.1: critérios demonstrativos rastreados aos requisitos aprovados; sem alteração das regras esportivas futuras.
