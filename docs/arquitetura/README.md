# Arquitetura preliminar do CrossFit SaaS

Data: 2026-10-16. Estado: **proposta documental**, ainda sem aplicação, infraestrutura provisionada ou controles demonstrados. Versão documental: 0.1. Nenhuma garantia operacional decorre deste desenho.

## Objetivo e limites

Construir produto original para gestão de boxes por assinatura e futuras modalidades de implantação/licenciamento. A referência funcional Next Fit orienta problemas de negócio; código, identidade visual, materiais e mecanismos internos não são reutilizados. Consulte o estudo em [Fase 1](../fase-1/).

## Componentes propostos

| Componente | Responsabilidade | Limite de confiança |
| --- | --- | --- |
| Frontend React/TypeScript responsivo | Experiência aluno, professor e gestor; navegação por box | Cliente não autoriza operações nem contém segredos privilegiados |
| Supabase Auth | Identidade e sessões | Identidade autenticada não implica vínculo ou papel no box |
| Postgres e RLS | Dados, invariantes, autorização por linha | Cada operação exige política e permissão compatíveis |
| Operações transacionais no banco | Reserva, cancelamento, promoção de espera e correções | Capacidade e concorrência não dependem do navegador |
| Backend restrito, quando necessário | Integrações, segredos e tarefas administrativas | Não adotar chave privilegiada como atalho para autorização |
| Cloudflare Pages | Hospedagem futura do frontend | Nenhuma integração ou publicação ativada nesta fase |
| GitHub | Histórico, revisão, testes e documentação | Envio de branch não significa liberação de aplicativo |

A documentação oficial apresenta suporte a [React no Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/). Escolher dependências e versões somente na implementação, com lockfile e revisão de compatibilidade.

## Módulos e dependências

1. Identidade, boxes e vínculos são fundação dos demais módulos.
2. Alunos e elegibilidade alimentam modalidades, turmas, reservas e frequência.
3. Movimentos e prescrição versionada alimentam WOD, resultados, PRs e rankings.
4. Acompanhamento combina frequência e desempenho, com notas privadas separadas.
5. Financeiro administrativo e cobrança da assinatura do SaaS são domínios distintos. Integração de pagamento será decisão posterior.
6. Auditoria e configurações atravessam os módulos, sem conceder acesso automático a todos os dados.

Começar com aplicação modular única. Não há evidência de escala que justifique microserviços. A necessidade de redes/unidades dentro de um cliente será decisão explícita antes do modelo físico.

## Multi-box e ambientes

O box é o tenant inicial proposto. Uma identidade pode ter vínculos em vários boxes, com papéis independentes. Dados de domínio carregam tenant e referências consistentes; a seleção visual de box apenas escolhe contexto de trabalho. Detalhes no [modelo e segurança](../banco-de-dados/modelo-conceitual-e-seguranca.md).

Separar desenvolvimento, homologação e produção. Dados sintéticos nos dois primeiros; nenhum preview usa credenciais de produção. Futuro cliente dedicado poderá usar instância própria do mesmo produto, sem duplicar a base de código por padrão. Custos e responsabilidade operacional ainda não foram definidos.

## Aceite antes de implementar e liberar

- Decidir box/rede/unidade, papéis, elegibilidade, retenção e política esportiva.
- Registrar invariantes, ameaça de acesso entre tenants e critérios negativos.
- Implementar migrações e testes reprodutíveis em ambiente descartável.
- Verificar isolamento, concorrência, instalação e restauração, registrando resultados reais.
- Obter aprovação explícita para produção e publicação.

## Fontes e verificação

Fontes oficiais consultadas em 2026-10-16: [Cloudflare React](https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/), [integração Git do Pages](https://developers.cloudflare.com/pages/configuration/git-integration/) e [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security). Fatos da plataforma não demonstram implementação neste projeto. Veja [ADRs propostas](decisoes-propostas.md).
