# Banco de dados e segurança

Versão documental 0.1, 2026-10-16. **Não existe esquema aplicado nesta entrega.** Nenhum projeto Supabase foi modificado; nenhuma migração, consulta de dados ou teste de RLS foi executado.

O [modelo conceitual e matriz de acesso](modelo-conceitual-e-seguranca.md) orienta a implementação futura. Não contém SQL executável. Nomes de entidades ainda podem mudar por decisão documentada.

## Processo futuro de alteração

1. Vincular requisito, decisão, entidade, impacto por box e classificação de dados.
2. Projetar invariantes, grants, RLS, views, funções e storage; revisar com auditor antes da exposição.
3. Confirmar versão da CLI e comandos pela ajuda oficial; criar migração versionada no fluxo vigente, sem improvisar nomes ou executar em produção nesta fase.
4. Usar ambiente local descartável e fixtures sintéticas. Registrar aplicação do zero e atualização de versão anterior.
5. Testar matriz de acesso, referências entre boxes, concorrência, revogação e reversibilidade operacional.
6. Registrar erros, correções e evidências sanitizadas; revisar backup/restauração antes da aprovação de produção.

Backups, dumps, dados de alunos e chaves nunca integram o repositório. Fixtures devem ser explicitamente fictícias. O diretório de migrações de aplicação só será criado quando houver implementação; este diretório guarda sua documentação.

## Fontes e limitações

[RLS oficial](https://supabase.com/docs/guides/database/postgres/row-level-security) e [backups](https://supabase.com/docs/guides/platform/backups) consultados em 2026-10-16. Tentativa de consultar `https://supabase.com/changelog.md` falhou no navegador de pesquisa por tipo de conteúdo; alternativa por shell foi bloqueada pela rede do ambiente. Portanto, breaking changes do índice não foram verificados. Reconsultar antes de implementar. Nenhuma conclusão de compatibilidade de versão é afirmada.
