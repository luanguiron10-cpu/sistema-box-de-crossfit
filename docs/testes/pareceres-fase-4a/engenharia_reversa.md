# Parecer Fase 4A — engenharia_reversa

Data: 17/10/2026. Responsabilidade: navegação original, rastreabilidade pública e linguagem honesta de demonstração. Este parecer não substitui auditoria de código/segurança.

## Executado

- Leitura de `AGENTS.md`, `agents/engenharia-reversa.md` e matriz funcional da Fase 1.
- Consulta pública real ao WAI APG Disclosure Navigation e WAI WCAG22 Target Size Minimum; URLs e limites no [plano de navegação](../../desenvolvimento/fase-4a-navegacao.md).
- Envio ao principal de sugestões verificáveis de menu mobile, foco, aviso demo, ausência de fake save/reserva e alvos por toque.
- Separação de D histórico, H e P. Não foram pesquisados endpoints privados, copiados código/ativos/identidade do Next Fit nem executado REA.

## Evidências e limites

A matriz Fase 1 é evidência documental histórica, sem nova validação do fornecedor nesta fase. A primeira listagem de `src` retornou diretório inexistente antes da implementação. Testes visuais, navegação em navegador, leitor de tela e dispositivos físicos: **NÃO EXECUTADOS por este agente** até esta revisão. Não se declara conformidade WCAG nem originalidade absoluta por comparação exaustiva.

## Critérios de revisão posterior

Confirmar por inspeção do código: links sem `role=menu`, menu com estado expandido, aviso demo, perfil sem semântica de autenticação, nenhuma chamada externa/persistência de negócio, rótulos coerentes entre reserva/presença/resultado e configuração local independente. Confirmar em navegador: foco, overflow, toque e rota inválida. Resultados do principal/auditor devem indicar autor, método e limitação sem atribuí-los a este agente.

## Revisão real do frontend após implementação

Arquivos efetivamente lidos: `src/app/layouts/AppLayout.tsx`, `src/app/routes/AppRoutes.tsx`, `src/app/App.tsx`, `src/config/installation.ts`, `src/config/installation.test.ts`, `src/styles/global.css`, `src/data/demo.ts`, `src/components/ui/Primitives.tsx`, `src/features/dashboard/DashboardPages.tsx`, `src/features/students/StudentPages.tsx`, `src/features/settings/SettingsPage.tsx`, `src/features/classes/ClassList.tsx`, `src/features/classes/ClassesPage.tsx`, `src/features/results/Results.tsx`, `src/features/results/ResultsPage.tsx`, `src/features/workouts/WorkoutCard.tsx` e `src/features/workouts/WorkoutsPage.tsx`.

Observações verificadas por leitura, sem equivaler a teste de navegador:

- Links React Router e navegação sem `role=menu`; botão mobile possui estado expandido e relação ao conteúdo. Há Escape, retorno de foco ao botão e foco no título ao trocar rota.
- Aviso persistente identifica dados sintéticos, ausência de autenticação e persistência; seletor chama-se visualização demo. Não se apresenta como login.
- Configuração restringe arquivos locais, campos conhecidos, unidades e cor; flags governam rotas e links principais. Não há seleção global de box/backend nem credenciais nesses arquivos.
- Configurações anunciam prévia temporária, sem botão de salvar fictício. Turmas distinguem reserva de presença; PRs informam contexto e valores aproximados; WOD não simula coleta.
- Telas vazias de benchmark/resultados e rota inválida explicam ausência e retorno. Não foram observados ativos, nomes comerciais ou código do Next Fit nos arquivos examinados; não é prova de originalidade absoluta.

Finding concreto enviado ao principal: o painel exibia 32 reservas enquanto dados locais somavam 12+16+8=36, com capacidade total 44. Solicitação: corrigir ou derivar indicador da fonte. Validação da correção fica com desenvolvedor/auditor.

Riscos encaminhados à verificação visual: nome de instalação longo na marca lateral, legibilidade de textos auxiliares muito pequenos, alcance por teclado/rolagem com menu lateral mobile aberto e overflow em larguras estreitas. CSS com media queries não prova resolução desses riscos.

## Verificação final das correções e evidências do principal

Releitura final de `DashboardPages.tsx`, `App.test.tsx` e `global.css`: indicador agora deriva reservas/capacidade das fixtures por `reduce` (36/44); existe teste automatizado específico para esses valores. O CSS final permite quebra de marca longa e aplica 0,75 rem aos textos auxiliares mobile listados. Estes achados de leitura estão **CORRIGIDOS**; a revisão não equivale à execução desse teste por este agente.

Foram efetivamente lidos os JSON [browser-results](../evidencias-fase-4a/browser-results.json) e [browser-extra-results](../evidencias-fase-4a/browser-extra-results.json), produzidos pelo agente principal em Chrome 155.0.8059.82 no build local. O primeiro contém 94 verificações com `passed: true`, incluindo 40 combinações de dez rotas por quatro larguras (320/375/768/1440 CSS px), imagens locais, abertura de menu, Escape/retorno de foco, foco do título, troca de visualização, descarte da prévia e ausência de erros/requisições externas observadas. O segundo contém 13 verificações aprovadas de build B, flags, configuração inválida/recuperação, skip link e nome longo sem overflow em 320/375/1440.

Assim, os riscos específicos de overflow e menu encaminhados têm evidência de resolução nas condições registradas pelo principal. A responsabilidade pela execução no navegador é do principal; este agente revisou arquivos e resultados, não operou esse navegador nem inspecionou screenshots. Tais verificações não provam todas as combinações de conteúdo, zoom, navegador ou tecnologia assistiva.

Parecer final: **favorável à entrega demonstrativa da Fase 4A**, no escopo de navegação, linguagem e rastreabilidade examinados. Dispositivos Android/iOS físicos, leitor de tela e certificação de conformidade WCAG completa: **NÃO EXECUTADOS por este agente**, sem alegação de certificação. Nenhum código, Git, configuração dos agentes ou infraestrutura foi alterado por este agente.
