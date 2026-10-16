# ADR-009 — Instalações independentes por box

Data: 2026-10-16. Estado: **ACEITA por decisão explícita do proprietário na Fase 3**. Versão documental 0.2. Aprovação do modelo não comprova implementação, segurança ou viabilidade econômica.

## Contexto e decisão

O produto terá um código-base central e instalações independentes. Cada combinação box/ambiente terá projeto Supabase e implantação Cloudflare próprios, com Auth, banco, Storage, configurações e credenciais isolados. Um box local por instalação; redes/unidades e agregação entre clientes exigem nova ADR. Não há Auth central, seletor de tenant nem direitos automáticos entre instalações, mesmo para a mesma pessoa/e-mail.

A ADR substitui integralmente ADR-001 e ADR-006; substitui parcialmente ADR-002 (topologia), ADR-003 (escopo da autorização) e ADR-007 (distribuição por instalação). Preserva ADR-004, ADR-005 e ADR-008 como propostas esportivas ainda sujeitas a testes. Consulte o [registro com estados e texto anterior](decisoes-propostas.md).

## Alternativas consideradas

| Alternativa | Avaliação |
| --- | --- |
| Banco/Auth compartilhados com tenant em cada linha | Proposta anterior superada; aumenta concentração de dados e exige isolamento entre tenants na mesma base |
| Instâncias próprias do mesmo produto | Escolhida pelo proprietário; separa recursos e falhas de dados, aumenta trabalho de operação e custo por instalação |
| Fork permanente por cliente | Rejeitado como estratégia; dificulta correções e compatibilidade |

## Consequências e controles planejados

- Uma release central é identificada por versão, tag imutável após publicação, commit e lockfile. Corrigir uma release cria outra versão. Não editar migrations já distribuídas.
- Mesmo código/tag pode gerar artefatos distintos por configuração pública de cliente/ambiente. Manifesto registra versão de código, esquema, configuração e checksum do artefato, sem segredos.
- Marca, cores, textos, domínio, fuso e políticas operacionais são configuração validada ou ativos autorizados, sem editar código por cliente. Exceções reutilizáveis entram no produto central; não manter branches eternas de cliente.
- Segredos são injetados por ambiente fora do Git. Não existe chave administrativa universal. Suporte não tem papel irrestrito de aplicação: autorização temporária, menor privilégio e auditoria por instalação.
- O risco principal muda: frontend A configurado com backend B pode expor dados de B se suas políticas permitirem acesso. Identidade da instalação, ambiente, destino Supabase, domínio e redirects Auth devem ser conferidos antes de liberar build; incompatibilidade bloqueia operação. Essa validação é controle de configuração, não substitui RLS.
- RLS continua obrigatória dentro de cada instalação, por usuário, papel ativo, titularidade e atribuição. Separação de projeto não impede vazamento entre alunos ou autoelevação.
- Provisionamento e atualização exigem destino confirmado, aprovação e evidências. Produção nunca é backend de preview; ambientes usam identidades/sessões e dados independentes.
- Migrations versionadas, seed sintético, backup/restauração e rollback são descritos no [banco](../banco-de-dados/) e operacionalizados no [plano de implantação](../implantacao/). Nenhum foi executado nesta fase.

## Critérios de validação futura

Recriar duas instalações sintéticas do zero pela mesma versão; comprovar projetos, Auth e dados separados; negar token de A em B; testar combinação errada de configuração; provar RLS intrainstalação, revogação e ausência de segredos no bundle. Atualizar uma sem alterar a outra. Restaurar banco, arquivos e configuração em destino de teste; testar versão anterior suportada sem perda silenciosa. Registrar tempos e limites antes de assumir RPO/RTO ou SLA.

## Riscos e decisões pendentes

Custos mínimos por box/ambiente, titularidade das contas, contrato de suporte, retenção, RPO/RTO, janelas e versões suportadas ainda precisam de decisão. Backup de banco não equivale a backup integral da instalação. Compatibilidade app/esquema deve ser declarada por release; rollback de frontend não desfaz migration, e restauração pode perder dados posteriores ao backup.

## Fontes e evidências

Decisão do proprietário na conversa de 16/10/2026; desenho próprio. Leitura oficial nesta data: [migrations Supabase](https://supabase.com/docs/guides/local-development/database-migrations), [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), [backups](https://supabase.com/docs/guides/platform/backups), [build Pages](https://developers.cloudflare.com/pages/configuration/build-configuration/). Fontes descrevem capacidades; não demonstram controles neste repositório. Testes operacionais: **NÃO EXECUTADOS**, pois não há implementação nesta fase.
