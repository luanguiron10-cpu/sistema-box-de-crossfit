# Política permanente de documentação

Status: regra do projeto; Fase 4A inicia fundação frontend demonstrativa. Backend, autenticação e operações persistidas ainda não implementados.

Cada funcionalidade recebe identificador, responsável, versão proposta e documento baseado no [modelo](modelo-funcionalidade.md). O registro acompanha a implementação e sua revisão, com links relativos para decisões, alterações, migrações e evidências.

Oito registros obrigatórios:

1. Objetivo, requisitos verificáveis, escopo e critérios de aceite.
2. Arquitetura, alternativas consideradas e decisões técnicas.
3. Alterações no código e banco, incluindo arquivos, migrações e autorização.
4. Testes efetivamente executados, ambiente, comando, data, resultado e limitações.
5. Erros encontrados, reprodução, correções e confirmação da correção.
6. Instalação, atualização, compatibilidade e recuperação.
7. Impacto na replicação e isolamento de dados entre boxes.
8. Versão da funcionalidade e histórico de mudanças.

Estados permitidos: PROPOSTO, EM IMPLEMENTAÇÃO, EM REVISÃO, BLOQUEADO e CONCLUÍDO. Testes usam PASSOU, FALHOU, NÃO EXECUTADO ou NÃO APLICÁVEL (com justificativa). Planejar um teste não equivale a executá-lo.

Uma funcionalidade só pode ser CONCLUÍDA com os oito registros preenchidos, critérios atendidos, testes adequados executados e revisão do auditor. Toda exceção ou risco residual deve estar explícito; não declarar conclusão quando faltar verificação essencial. A documentação de pesquisa separa fonte pública verificada, relato histórico, hipótese e proposta própria.

Registros de teste ficam em `docs/testes/`; decisões em `docs/arquitetura/`; banco em `docs/banco-de-dados/`; instalação em `docs/implantacao/`; mudanças em `docs/historico/`. Não incluir dados reais de alunos, segredos ou saídas que os exponham. Usar exemplos sintéticos e referências a nomes de variáveis, sem valores.

Antes de revisar um commit: conferir diff, links, arquivos acidentais e segredos; executar o verificador documental e os testes relevantes. Publicação de aplicação, produção e migrações continuam sujeitas à autorização do proprietário. A autorização da Fase 2 abrange o envio da branch de documentação ao repositório confirmado, sem merge ou deploy.

## Instalações independentes — revisão Fase 3

A [ADR-009](../arquitetura/adr-009-instalacoes-independentes.md) substitui o banco compartilhado: cada box/ambiente tem projeto e implantação próprios, mantendo uma fonte central. Aplicar os oito registros também a cada instalação e release, com manifesto sanitizado de tag/SHA/digests, esquema e configuração; resultado em um cliente não prova resultado nos outros. Não registrar credenciais nem nomes pessoais reais nesses manifestos.

Modelo multi-tenant e testes por tenant em documentos anteriores são referências históricas superadas: a verificação vigente compara instalações sintéticas A/B e separa papéis dentro de cada uma. Para cada promoção futura registrar matriz de compatibilidade, migrations imutáveis, configuração/branding autorizados, seed só de teste, cobertura de backup, ensaio de restauração e caminho de rollback/forward-fix. Regras e procedimentos ainda NÃO IMPLEMENTADOS.

A autorização da Fase 3 abrange documentação, commits e push da branch solicitada; não autoriza merge, release publicada, infraestrutura, aplicação, migrações ou deploy. Testes operacionais não executados continuam NÃO EXECUTADO; validação documental é evidência apenas documental.
