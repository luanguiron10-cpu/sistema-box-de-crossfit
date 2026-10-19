# Publicação da demonstração Fase 4A

Registro iniciado em 19/10/2026. Escopo PUB-4A, frontend 0.3.0: disponibilizar a demonstração existente, sem iniciar Fase 4B.

## Objetivo e aceite

Base preservada: `e19bf21854a85966f736f535429348ef119e9efe`, branch original `feature/fase-4a-fundacao-frontend`. Publicação isolada em `publish/demo-fase-4a`, sem merge ou mudança da branch padrão. Aceite exige checks locais, revisão independente, workflow concluído e acesso real no navegador remoto. Push ou build isolados não comprovam publicação.

## Arquitetura e decisões

Vite usa base `/sistema-box-de-crossfit/`. HashRouter mantém caminhos após `#`, por exemplo `#/aluno`; o fragmento não é enviado ao servidor estático. Link direto e atualização carregam o mesmo index sem rewrite. `/aluno` sem hash não é endereço suportado. O link de pular conteúdo move foco sem sobrescrever a rota. JSONs e logos passam por helper público com whitelist e prefixo BASE_URL; configuração lógica permanece local, sem endpoints arbitrários.

Workflow único `.github/workflows/pages-demo.yml`: push somente na branch de publicação, Node 24.22.0, npm ci, lint, typecheck, testes, formato e build, upload oficial de dist, deploy oficial Pages. Build recebe contents:read; deploy recebe pages:write e id-token:write, environment github-pages. Actions fixadas em SHA, sem credenciais persistidas no checkout. Concorrência serializa publicações. Nenhum arquivo fonte, docs ou node_modules é enviado como diretório do site; o JavaScript compilado permanece naturalmente acessível ao visitante.

## Código e banco

Alterados Vite, entrada/router, helper e carregamento de configuração, imagens layout/settings e testes. Adicionados workflow, documentação e evidências. Nenhuma mudança de banco, Auth, pagamentos ou integração externa. Demonstração permanece sintética e sem persistência.

## Execução, testes, erros e resultados

Resultados finais serão acrescentados após execução. Validação anterior da Fase 4A não substitui reteste destes ajustes. Ver também [auditoria da publicação](../testes/auditoria-pages-fase-4a.md). A tentativa de habilitação em 17/10 foi impedida por indisponibilidade da revisão automática por limite de uso; nenhuma alteração Pages ocorreu naquela tentativa.

Em 19/10, API autenticada confirmou repositório `public`, admin:true e Pages inicialmente inexistente. A visibilidade pública já existia: não foi alterada por esta tarefa. A criação Pages com build_type workflow teve sucesso e HTTPS habilitado. Isso não atesta disponibilidade para um repositório privado: GitHub Free suporta repositório público; privado exige plano compatível. Caso o proprietário torne o código privado depois, verificar plano antes, sem tornar público como solução automática. Cloudflare Pages é alternativa sujeita a aprovação, não configurada aqui.

## Instalação, atualização e reversão

Local: Node 24/npm 11, `npm ci`, `npm run dev`; abrir o subcaminho indicado pelo Vite. Ver [manual Windows](frontend-windows.md).

Atualização: checkout da branch `publish/demo-fase-4a`, mudanças revisadas, checks, commit e push. GitHub Actions publica automaticamente após aprovação de todos os checks. Não é necessário merge na branch padrão. Conferir conclusão do job deploy e testar site em janela nova, inclusive `#/professor` e reload. Falha dos checks impede um novo artefato de substituir a versão anterior.

Reversão: usar `git revert` dos commits defeituosos na branch de publicação, preservar o workflow/configuração Pages e fazer push; validar o novo deploy. Não usar force push ou reset remoto. Se houver vários commits, revisar a sequência e compatibilidade antes da reversão. O repositório não configura credenciais no frontend. Settings → Pages → Source deve permanecer GitHub Actions; já configurado por API nesta execução.

## Replicação e limites

O mesmo código usa arquivos de configuração A/B sintéticos. Outra URL de hospedagem exige base própria em seu build; nenhum backend é selecionado por parâmetro. A publicação pública expõe o bundle e configuração pública, nunca deve conter segredos. Não comprova isolamento Supabase ou segurança para clientes. GitHub Pages destina-se aqui somente à demonstração do projeto; não é a plataforma aprovada de operação comercial SaaS.

## Versão, histórico e fontes

PUB-4A sobre frontend 0.3.0, preservando histórico da Fase 4A. Commit de publicação, workflow e resultados remotos constarão do adendo de evidências. Testes em dispositivos físicos/Safari/leitor de tela não se presumem executados por emulação de viewport.

Delegações reais: `pages_arquiteto` (arquiteto) revisou plano/base/hash/permissões; `pages_fontes` (engenharia_reversa) consultou documentação pública e confirmou por git ls-remote todos os cinco SHAs das actions; `pages_dominio` (especialista_crossfit) revisou fixtures/avisos/números por perfil; `pages_dev` (desenvolvedor) corrigiu/finalizou código e testes; `pages_auditor` (auditor) revisou código/configuração/preservação e mantém parecer independente. Coordenador executa API, navegador, documentação e Git. Pareceres estáticos não substituem testes runtime; não foi necessário REA ou acesso privado de terceiros.

Falha intermediária real: o primeiro smoke estático usou dist anterior à recompilação, cujos JS/CSS ainda apontavam para /assets na raiz. Houve 404 e timeout de tela; resultado preservado em pages-local-inicial-results.json. Recompilar e retestar é obrigatório antes de publicar. O ensaio usa Chrome headless instalado e servidor Node estático sem fallback; o harness temporário não acrescenta dependência ao produto.

Fontes oficiais consultadas: [Vite e Pages](https://vite.dev/guide/static-deploy#github-pages), [workflow Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [HashRouter](https://reactrouter.com/api/declarative-routers/HashRouter), [limites Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).

Segundo smoke estático: 86/87 verificações passaram, sem exceção JavaScript ou falha dos recursos da aplicação. Falhou o critério console limpo por requisição automática de favicon na raiz. Corrigido index.html com favicon original sob %BASE_URL%; resultado anterior preservado em pages-local-favicon-results.json. Novo build e reteste exigidos.

Checks executados pelo desenvolvedor: npm run lint, npm run typecheck, npm run build, npm run format:check PASSARAM. npm test inicial não coletou casos por timeout de workers forks no Windows; npm test -- --pool=threads --maxWorkers=1 PASSOU36/36 em três arquivos. CI Linux mantém npm test padrão, resultado deverá ser conferido no workflow. Verificação documental PASSOU no checkpoint115 arquivos/61Markdown/183links; varredura de segredos é limitada, não certificação.


Reteste final local: PASSOU87/87 asserções no Chrome real headless,375/1440px, nove rotas com acesso direto e reload, imagens, menu, back/forward, skip link, prévia descartada e armazenamento vazio. Zero exceções JS, errosHTTP ou errosconsole. JSON pages-local-results.json e imagens preservados. Auditor independente repetiu36/36 testes com threads1, favorável ao envio/deploy. Validador documental final PASSOU118arquivos/61Markdown/183links, sem sinais nos padrões limitados. Commit/push e testes remotos a seguir ainda não são declarados aprovados neste checkpoint.
