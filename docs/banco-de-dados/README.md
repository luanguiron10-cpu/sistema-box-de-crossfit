# Banco de dados e segurança

Versão documental 0.2, 2026-10-16. **Não existe esquema aplicado**. Nenhum projeto Supabase foi acessado/modificado; nenhuma migration, seed ou teste de RLS foi executado nesta fase.

A [ADR-009](../arquitetura/adr-009-instalacoes-independentes.md) exige projeto Supabase exclusivo por box e ambiente. O [modelo conceitual e autorização](modelo-conceitual-e-seguranca.md) substitui a proposta compartilhada; não contém SQL executável.

## Processo futuro de alteração e recuperação

1. Vincular requisito, ADR, classificação e impacto em todas as instalações suportadas.
2. Projetar constraints, grants, RLS, views, RPC e Storage; revisar antes de exposição.
3. Criar migration versionada no código central, nunca sobrescrever migration distribuída. Declarar intervalo compatível app/esquema e procedimentos de falha. Confirmar versão/ferramentas antes da execução futura.
4. Aplicar cadeia completa em ambiente descartável vazio e atualizar cópia sintética da versão anterior. Seed idempotente/reprodutível só com dados fictícios; não cria senha administrativa compartilhada. Bootstrap de proprietário será fluxo separado, autenticado e auditado.
5. Validar papéis/titularidade, revogação, concorrência e separação entre projetos. Comparar estado esperado do esquema e falhar em divergência, sem correção manual silenciosa por cliente.
6. Ensaiar backup/restauração e correção progressiva antes de produção. Preferir expansão/contração para mudanças incompatíveis, mantendo janela de compatibilidade; remoção destrutiva requer etapa e aprovação próprias.

Backup deve inventariar banco, objetos de Storage, Auth/configurações, funções, marca, domínios/redirects e versões. Não presumir que backup do banco inclui arquivos ou configurações da plataforma. Confirmar cobertura real/plano, criptografia, acesso, retenção e RPO/RTO acordados. Restaurar primeiro em destino isolado; conferir identidades e impedir envio externo acidental. Segredos são reprovisionados pelo cofre, não pelo Git.

Rollback do frontend exige compatibilidade com esquema atual. Migration reversa somente se expressamente projetada e ensaiada; preferir correção aditiva. Restauração integral é recuperação com possível perda desde o ponto restaurado, requer avaliação/aprovação e reconciliação, nunca promessa automática. Atualização falha de um box não dispara atualização dos demais.

Backups/dumps/credenciais/dados reais não integram o repositório. Futuro diretório de migrations pertence à implementação, não é criado nesta fase. Testes de aplicação, migration, restauração e isolamento: **NÃO EXECUTADOS**.

## Fontes e limites

Consultadas em 16/10/2026: [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), [migrations](https://supabase.com/docs/guides/local-development/database-migrations), [backups](https://supabase.com/docs/guides/platform/backups), [changelog HTML](https://supabase.com/changelog). O changelog HTML foi acessível nesta fase, superando a limitação anterior de leitura do índice Markdown; isso não certifica revisão exaustiva de mudanças nem compatibilidade de versões ainda não escolhidas. Revalidar dependências/changelog na implementação. Modelo anterior preservado no [Git 01405f2](https://github.com/luanguiron10-cpu/sistema-box-de-crossfit/tree/01405f250e5f8556bd23a6d08ec44a68d33c59a7/docs/banco-de-dados).
