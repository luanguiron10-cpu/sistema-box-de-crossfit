# Integração GitHub — Fase 2

Data: 16/10/2026. Destino confirmado pelo proprietário nesta conversa.

| Item | Evidência |
|---|---|
| Repositório | `luanguiron10-cpu/sistema-box-de-crossfit` |
| URL | https://github.com/luanguiron10-cpu/sistema-box-de-crossfit |
| Proprietário e conexão selecionada | `luanguiron10-cpu` |
| Visibilidade | Privado, retornado pela API autenticada |
| Permissões | `push: true`, `admin: true`, retornadas pela API |
| Estado remoto inicial | API de branches retornou lista vazia; não havia branch/histórico a integrar |
| Estado local inicial | Sem `.git`; `git status` e `git remote -v` retornaram not a git repository |
| Branch solicitada | `setup/documentacao-inicial` |

A descoberta inicial usou conexão padrão diferente (`telagomidia`); o proprietário confirmou a URL acima e a consulta passou a usar a conexão correspondente. Repositórios do site pessoal e TelaGo não foram utilizados nem alterados.

O acesso inicial ao Git pela rede restrita falhou; após liberar a consulta de rede, `git -c credential.interactive=false ls-remote` alcançou o servidor, mas falhou por falta de credencial local. Nenhum token foi solicitado, extraído do conector ou armazenado. A conexão MCP tem acesso próprio, distinto da autenticação do Git no terminal.

## Estado após auditoria e commits locais

- Auditoria documental e preservação: PASSOU, com limites em `docs/testes/auditoria-fase-2.md`.
- Git inicializado na branch exata `setup/documentacao-inicial`, com origin HTTPS acima.
- `0fcfcb7`: governança, instruções e configurações preservadas.
- `76efccc`: documentação técnica, operacional, comercial, manuais e verificador.
- Um commit adicional registra auditoria Git e este estado; seu SHA é consultável no log, sem autorreferência circular.
- Identidade dos commits usa o login confirmado e endereço GitHub noreply; não foi incluído email pessoal nos commits.
- Verificador final: exit 0, 47 arquivos, 37 Markdown, 58 links locais, cinco TOMLs, zero sinais de segredo nos padrões verificados.
- `git fsck --full`: exit 0, sem saída.
- Ressalva: whitespace já existente no guia legado, preservado deliberadamente para manter bytes anteriores.

O proprietário autorizou iniciar login oficial pelo navegador e concluir o push. O login via Git Credential Manager terminou com exit 0; a consulta posterior `git -c credential.interactive=false ls-remote origin` passou com exit 0 e nenhuma referência, coerente com o remoto vazio. O envio segue pendente no momento deste registro e só será confirmado após verificar o SHA remoto. Não alterar main, fazer merge, usar force push ou habilitar publicação automática.

## Confirmação de envio

O estado pendente acima foi superado: `git -c credential.interactive=false push --set-upstream origin setup/documentacao-inicial` terminou com exit 0. A API autenticada de branches retornou exclusivamente `setup/documentacao-inicial`, apontando para `16a8c81a2437d07fb5575ddae76a9a08ba35268b`, idêntico ao HEAD local no instante da verificação.

Commits enviados e confirmados nessa verificação: `0fcfcb7`, `76efccc`, `16a8c81`. O commit seguinte contém este comprovante e o adendo do auditor; seu identificador deve ser consultado no log, pois o arquivo não pode conter antecipadamente o próprio SHA definitivo. A conclusão final da conversa verifica também o envio desse último registro.

Não houve merge. Nenhuma main preexistia nem foi criada por comando nesta fase. Não foram criados workflows de publicação, alterado Supabase ou publicado aplicativo/Cloudflare. A configuração de visibilidade do repositório não foi modificada.
