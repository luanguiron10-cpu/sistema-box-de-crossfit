# Preparação comercial do produto

Data: 2026-10-16. Versão documental: 0.2 (Fase 3). **Distribuição aprovada pelo proprietário: código-base central com instalações independentes por box e ambiente**, conforme [ADR-009](../arquitetura/adr-009-instalacoes-independentes.md). Condições comerciais abaixo continuam propostas. Este documento não é contrato, licença concedida, precificação ou promessa de disponibilidade. Não há produto em produção nem garantias técnicas implementadas.

## Modelos a avaliar

| Modelo | Entrega proposta | Responsabilidades a decidir | Custo/risco a medir |
| --- | --- | --- | --- |
| Serviço por assinatura com instalação independente | Operação de projeto Supabase e implantação Cloudflare exclusivos do cliente, sobre release comum | Titularidade das contas, custeio, operação, suporte, retenção, exportação e suspensão | Custos por instalação/ambiente, arquivos, backup, monitoramento e suporte |
| Implantação personalizada independente | Configuração, identidade visual e onboarding no destino próprio do box | Titularidade de contas, operação, atualização, migração e domínio | Esforço inicial, compatibilidade e manutenção contínua sem fork |
| Licenciamento para instalação independente | Direito de uso da versão central em condições ainda a definir | Código entregue ou acesso, modificações, redistribuição, suporte e atualizações | Dependências, distribuição, compatibilidade e responsabilidade operacional |

Assinatura do sistema e planos vendidos pelo box a seus alunos são relações distintas. Não implementar cobrança do SaaS por inferência a partir do financeiro do box.

## Decisões antes de ofertar

- Público-alvo inicial e funcionalidades incluídas; por padrão uma instalação atende um box. Redes/unidades com compartilhamento de dados ou autenticação exigem nova decisão, fora do modelo aprovado.
- Unidade de cobrança e limites de uso; medir custo real antes de definir preço.
- O que é configuração, personalização contratada e evolução comum do produto.
- Responsável por infraestrutura, domínio, onboarding, migração, treinamento e canais de suporte.
- Janelas de manutenção, prioridades de incidentes e metas de atendimento compatíveis com testes e capacidade reais.
- Retenção, exportação, encerramento, continuidade de acesso e responsabilidade pelo tratamento de dados.
- Condições de propriedade intelectual, distribuição, dependências e eventual transferência/instância dedicada, submetidas à revisão adequada.

Instalação dedicada é o padrão técnico, não um adicional facultativo ao modelo compartilhado. Ser dedicada não implica conta Cloudflare/organização Supabase separada: a titularidade e o escopo mínimo de acesso administrativo precisam ser contratados e verificados. O requisito mínimo é projeto e implantação próprios por box e ambiente, sem compartilhamento de dados operacionais ou privilégios automáticos entre eles.

## Código central, personalização e manutenção

Versões do produto serão distribuídas do mesmo repositório por tag e SHA fixados, com configuração validada de identidade visual, fuso, unidades e políticas do box. Não criar forks permanentes ou branches de produto por cliente. Funcionalidade exclusiva depende de avaliação para extensão/configuração suportada e testes no código central. Não editar diretamente código ou schema de um cliente para contornar o processo de release.

Registrar por instalação: release e schema, revisão/digest de configuração pública, artefato parametrizado, responsáveis e janela de suporte. Esse inventário operacional não deve conter credenciais ou dados de alunos no Git; detalhes privados ficam em ambiente de operação autorizado. Uma assinatura comercial não pressupõe SSO central, painel com dados de todos os clientes ou atualização automática de todas as instalações.

Atualizações são progressivas e autorizadas por instalação, com backup, compatibilidade e retorno planejados. Suspensão por condição comercial deve seguir política contratual sem apagar dados automaticamente. SLA, janela de suporte, prazo de retenção, RPO e RTO serão definidos após custos, capacidade e ensaios; não são garantias existentes.

Nenhuma licença permissiva será adicionada automaticamente. Visibilidade do GitHub não define, por si só, condições de comercialização ou licença do produto. Conteúdo e credenciais de clientes ficam fora do repositório.

## Originalidade e entrega replicável

Desenvolver identidade própria e código próprio. Registrar procedência e licenças de dependências, fontes, imagens e materiais incluídos. A análise pública do Next Fit descreve problemas e fluxos, sem autorização para copiar seus ativos. Manter demonstrações com dados sintéticos, sem depoimentos ou resultados comerciais inventados.

Onboarding proposto: levantamento → [checklist de projeto/implantação próprios](../implantacao/checklist-novo-box.md) → configuração de identidade visual e papéis locais → importação autorizada e validada → treinamento por papel → aceite dos fluxos → liberação expressamente aprovada. Não importar dados privados de terceiros sem base autorizada e mecanismo legítimo. Seed de demonstração é sintético e não cria contas de teste permanentes em produção.

## Critérios para primeira oferta

Produto mínimo testado; instalação reproduzida do zero e isolamento entre projetos A/B e autorização local demonstrados; instalação/atualização e restauração ensaiadas; inventário de custos por cliente/ambiente; escopo e limites transparentes; suporte e offboarding definidos; documentação do aluno/professor/gestor; revisão das condições comerciais. Evidências dessas etapas ainda estão pendentes.

Offboarding deve prever exportação autorizada do próprio box e arquivos, transferência de administração quando contratada, revogação de acesso da equipe de suporte, desativação de integrações e tratamento de backups/retenção acordados. Não transferir junto dados, usuários ou configuração de outro cliente. A entrega de dados não significa transferência da propriedade do código-base.

## Rastreabilidade da alteração

O modelo comercial da Fase 2 admitia serviço comum com separação lógica e ambiente dedicado opcional. Essa premissa foi superada pela decisão do proprietário na Fase 3. A versão anterior permanece no [commit-base 01405f2](https://github.com/luanguiron10-cpu/sistema-box-de-crossfit/blob/01405f250e5f8556bd23a6d08ec44a68d33c59a7/docs/comercial/README.md); não houve nova pesquisa jurídica nem precificação.

Procedimentos técnicos propostos: [implantação e replicação](../implantacao/README.md), [arquitetura](../arquitetura/README.md) e [segurança](../banco-de-dados/modelo-conceitual-e-seguranca.md). Não foi realizada pesquisa jurídica nesta fase; nenhuma conclusão legal é afirmada.
