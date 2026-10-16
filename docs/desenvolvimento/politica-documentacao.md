# Política permanente de documentação

Status: regra do projeto; aplicação ainda não implementada.

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
