# Parecer Fase 4A — especialista CrossFit

Data: 17/10/2026. Estado: **FAVORÁVEL NA REVISÃO ESTÁTICA DE DOMÍNIO**, limitada à demonstração local.

Responsabilidade real: leitura das regras RF-CF, matriz funcional e manuais; definição e comunicação ao desenvolvedor dos [critérios CF4A](../../desenvolvimento/fase-4a-dominio.md). Sem mudanças no código da aplicação ou banco, Git, infraestrutura ou publicação.

## Evidências reais

Revisados por leitura: `src/data/demo.ts`, `DashboardPages.tsx`, `StudentPages.tsx`, `WorkoutCard.tsx`, `Results.tsx`, `ClassList.tsx`, `SettingsPage.tsx`, `AppLayout.tsx` e configuração pública tipada. A leitura confirma critérios CF4A-01–08 no código: WOD contextualizado; PR por movimento, variação, repetições e unidade; definição de benchmark; reserva distinta de presença; alunos fictícios; período/denominador de frequência; visualização de perfis sem autenticação; data de referência fixa; personalização temporária e sem backend. Isso não equivale a executar as telas.

Revisão, correções e limitação corrigida:

- Minha revisão inicial somou incorretamente 12 + 16 + 8 como 32 e recomendou alteração indevida. A soma correta é 36. Releitura final de `src/data/demo.ts` e `DashboardPages.tsx` confirma total derivado das fixtures: **36 reservas / 44 vagas**, sem número fixo duplicado. O erro deste parecer foi corrigido; gráfico semanal totaliza 72 e 72/90 corresponde a 80%.
- AMRAP incluía corrida e pontuação rounds/repetições sem regra de trecho parcial. Rodapé agora informa que não há coleta de pontuação e que essa regra será definida com o professor. Os exemplos kg/lb foram identificados como equivalentes aproximados sintéticos.

Nenhum comando de teste automatizado nem navegador foi executado por este especialista. Acessibilidade visual, responsividade e navegação reais devem ser verificadas pelo principal/desenvolvedor/auditor e registradas separadamente. Backend, persistência, RLS, concorrência, cálculo de PR, ranking e uso com clientes: **NÃO EXECUTADOS** e fora do escopo demonstrativo.

## Riscos e próximos passos

Dados são fixtures; não há garantia operacional para uso por clientes. Fase 4B exige decisão explícita sobre reserva/cancelamento, visibilidade, chamada, correções e comparabilidade antes de implementar regras e testes de autorização. Recomendação favorável somente ao conteúdo demonstrativo revisado, sem aprovação de deploy ou produção.
