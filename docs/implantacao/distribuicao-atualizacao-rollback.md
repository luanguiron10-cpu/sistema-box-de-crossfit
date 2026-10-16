# Distribuição, atualização e rollback

Status: plano próprio, NÃO IMPLEMENTADO. Aprovação arquitetural: [ADR-009](../arquitetura/adr-009-instalacoes-independentes.md). Testes de build, migração, backup, recuperação e deploy: NÃO EXECUTADOS.

## Fonte e identidade da entrega

Um repositório central produz releases controladas. Não manter branches/forks permanentes por cliente: correções retornam ao código comum; diferenças permitidas usam configuração declarativa validada e recursos aprovados. Tags de release não devem ser movidas: registrar também SHA completo e digest do pacote fonte/artefato. Dependências e toolchain serão fixadas quando existir aplicação.

Manifesto futuro por instalação/ambiente: identificador não pessoal, versão/tag, SHA, digest do pacote e build, versão do esquema, migrações/checksums, versão do contrato de configuração, digest da configuração pública, data, responsável, evidências e autorização. Guardar inventário operacional restrito; Git contém apenas modelo sintético e referências sanitizadas, nunca segredos ou dumps.

Configuração pública inclui marca autorizada, fuso, idioma, modalidades e recursos permitidos. Separar endpoint/identidade do projeto e chave pública de acesso de credenciais administrativas; chave pública não concede autorização sem RLS. Secrets ficam no armazenamento protegido do ambiente. Identidade visual usa tokens e ativos licenciados, sem CSS/código divergente por cliente.

Build separado por box e ambiente deve verificar correspondência entre instalação, domínio, projeto Supabase e configuração esperada; rejeitar ausência, valores desconhecidos e mistura entre teste e produção antes de gerar artefato. Recompilar a mesma fonte é permitido com configuração pública distinta, registrando digests próprios. Não reutilizar cegamente build contendo endpoints de outro box. Nenhum mecanismo foi implementado.

## Compatibilidade e migrações

| Release proposta | Esquema mínimo/máximo | Configuração | Reversão app | Evidência |
|---|---|---|---|---|
| A definir | A definir; bloquear promoção até preenchimento | Contrato a definir | Somente versão comprovadamente compatível | NÃO EXECUTADO |

Migrações futuras são versionadas no código central e imutáveis depois de distribuídas. Cada instalação mantém histórico e checksum; divergência bloqueia atualização, exige investigação e nunca é corrigida apagando histórico. Não há SQL ou arquivos de migração nesta fase. Seed sintético apenas em testes; bootstrap operacional mínimo separado e autorizado, sem alunos ou senhas padrão.

Planejar expansão/contração: adicionar estruturas compatíveis, implantar código que suporta transição, migrar dados com verificações e só remover estrutura após janela de compatibilidade e autorização. Não supor que banco e frontend mudam atomicamente. Registrar versões intermediárias suportadas e duração da janela. Instalações podem ficar em versões distintas dentro de política de suporte a definir.

## Atualização e recuperação

1. Confirmar instalação/ambiente e autorização; comparar inventário, esquema e configuração com manifesto.
2. Ensaiar upgrade da versão anterior com dados sintéticos em homologação independente; verificar RLS e resultados esportivos preservados.
3. Validar backup e recuperação ensaiada, cobertura, retenção e janela. Bloquear se não houver caminho de recuperação aceitável.
4. Aplicar mudanças de forma controlada na futura fase autorizada; executar smoke tests e conferir versão instalada.
5. Falha de aplicação: voltar ao artefato anterior apenas se esquema/configuração forem compatíveis. Falha de migração: preferir forward-fix revisado; não executar down migration destrutiva automaticamente.
6. Restauração de banco é recuperação separada, pode perder gravações e divergir de objetos/identidades. Exige autorização, janela e reconciliação. Ensaiar em destino isolado antes de cutover; nunca apontar clientes ao destino sem validação.

## Backup por instalação

Inventariar separadamente: banco e políticas; objetos Storage e metadados; Auth/identidades; parâmetros de Auth, provedores e URLs; configuração Cloudflare/domínios; código e manifestos. Validar cobertura de cada mecanismo e restaurabilidade de usuários/sessões sem presumir que um dump reconstrói o serviço inteiro. Segredos devem ser reinjetados pelo cofre autorizado e rotacionados quando necessário, sem exportá-los ao Git.

Definir RPO, RTO, retenção, criptografia, acesso, localização e custo antes de operar; todos PENDENTES. Medir perda potencial e duração em ensaio. Verificar contagens, relacionamentos, políticas, arquivos, login sintético e papéis após recuperação. Isolar destinos para impedir e-mails/webhooks reais. [Cobertura de backups Supabase](https://supabase.com/docs/guides/platform/backups).

Cada instalação/release exige os oito registros da política, relatório de falhas/retestes e aceite independente. Push não promove versão em nenhum cliente.
