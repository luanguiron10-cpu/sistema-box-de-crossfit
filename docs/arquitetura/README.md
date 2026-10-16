# Arquitetura — instalações independentes

Versão documental 0.2, 2026-10-16. A [ADR-009 aceita](adr-009-instalacoes-independentes.md) define UM código-base central e instalação independente por box e ambiente. A proposta compartilhada anterior permanece no [registro histórico](decisoes-propostas.md). Não existe aplicação ou infraestrutura implementada nesta entrega.

## Componentes e fronteiras

Frontend React/TypeScript responsivo no Cloudflare Pages, Supabase Auth/Postgres/Storage por instalação e GitHub central para fonte e revisão. Frontend contém apenas configuração pública e não autoriza operações. Backend restrito será usado quando houver segredos ou integração; nunca como atalho para contornar autorização. Nenhuma integração Git→deploy é ativada por esta documentação.

Cada instalação atende um box. Identidade, papéis, alunos, WODs, reservas e resultados são locais. Não há cadastro global, seletor de box, sessão central ou permissão herdada de outro cliente. Desenvolvimento e homologação têm projetos próprios e dados sintéticos; previews nunca apontam à produção.

## Módulos e dependências

1. Configuração da instalação, Auth local, perfis e papéis ativos.
2. Alunos/elegibilidade, modalidades, agenda, reservas e presença.
3. Movimentos, WOD/prescrição versionados, resultados, PRs e ranking comparável.
4. Acompanhamento com notas restritas, relatórios mínimos e auditoria.
5. Financeiro administrativo local separado da cobrança comercial da assinatura do produto.

Aplicação modular única é proposta; não há justificativa de microserviços. Modelo detalhado no [banco e segurança](../banco-de-dados/modelo-conceitual-e-seguranca.md). Regras esportivas continuam configuráveis sem invalidar histórico. Identidade visual e políticas são configuração versionada; não alterar código para cada box.

## Distribuição e operação planejadas

Fonte central → versão/tag fixada → build com configuração pública validada → artefato identificado → homologação independente → aprovação → liberação individual. Mesmo código pode gerar artefatos diferentes conforme configuração pública. Inventário operacional deve guardar versão app/esquema/configuração por instalação, sem credenciais ou dados pessoais. Atualização de um box não atualiza os demais por consequência.

Recriar instalação usa a mesma cadeia de migrations e seed sintético. Atualizar exige ensaio da versão anterior suportada, backup e compatibilidade declarada; rollback de app só é permitido quando compatível com esquema corrente. Ver [implantação](../implantacao/) e [processo de banco](../banco-de-dados/).

## Riscos e aceite

Configuração A→B é risco material: validar destino, instalação, ambiente, domínio e redirects antes da liberação; bloquear inconsistência. Separação de projeto não substitui RLS por papel/titularidade. Contas de suporte, exports e backups requerem autorização específica. Aceite futuro: instalação do zero, duas instâncias separadas, RLS, revogação, concorrência, upgrade e restauração executados com evidências. **NÃO EXECUTADOS nesta fase documental**.

Fontes oficiais consultadas em 16/10/2026: [Pages build](https://developers.cloudflare.com/pages/configuration/build-configuration/), [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), [migrations](https://supabase.com/docs/guides/local-development/database-migrations). Capacidades da plataforma não comprovam funcionamento do produto.
