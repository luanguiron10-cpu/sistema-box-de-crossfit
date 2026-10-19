# Auditoria independente — publicação demonstrativa Fase 4A

Data: 19/10/2026. Responsável: agente delegado `auditor`. Escopo exclusivo: revisão da publicação estática, sem implementar Fase 4B ou alterar produção/backend. Foram lidos `AGENTS.md` e `agents/auditor.md`. O proprietário autorizou a publicação da demonstração; não autorizou mudança de visibilidade.

## Estado e preservação

- PASSOU: `git merge-base --is-ancestor e19bf21854a85966f736f535429348ef119e9efe HEAD` retornou 0; base entregue preservada.
- PASSOU: remoto local é `https://github.com/luanguiron10-cpu/sistema-box-de-crossfit.git`; branch `publish/demo-fase-4a`.
- PASSOU no checkpoint de revisão: nenhuma exclusão rastreada contra a referência; alterações existentes foram preservadas.
- PASSOU: `git diff --check` sem erros no checkpoint estático.
- Visibilidade `public` foi confirmada por API pelo agente principal, e não por esta delegação. A tarefa não deve alterá-la. Disponibilidade em plano privado não foi testada: a condição real encontrada é pública.

## Revisão estática

- PASSOU: base Vite `/sistema-box-de-crossfit/`, `HashRouter` e caminhos públicos incorporam `BASE_URL`. Links suportados contêm `#/`, inclusive acesso direto e recarga; rotas sem hash não são prometidas.
- PASSOU: `publicPath` restringe logo/configuração a caminhos locais permitidos. Nenhum endpoint arbitrário é selecionado por parâmetro.
- PASSOU: skip link impede alteração do hash da rota e move o foco ao conteúdo.
- PASSOU: apenas um workflow em `.github/workflows/`, disparado por push na branch explícita. Instalação por `npm ci`, verificações, artefato exclusivamente `dist` e mecanismo oficial Pages.
- PASSOU: permissão global `contents: read`; deploy com `pages: write` e `id-token: write`; checkout sem persistência de credenciais, Actions fixadas por SHA, ambiente `github-pages`, dependência do build e concorrência serializada.
- PASSOU na busca limitada: sem padrões de tokens, chaves privadas, service role ou uso de armazenamento persistente em `src`, `public` e workflow. URLs encontradas são casos negativos de teste e namespace SVG. Busca de arquivos de credenciais/dumps fora de dependências e build não encontrou candidatos. Isso não constitui certificação de ausência de todo segredo no histórico.
- PASSOU: fixtures identificam Atleta/Professor demo; avisos de dados sintéticos e ausência de autenticação/persistência permanecem. Não há SDK Supabase ou chamada de backend nesta alteração.

## Execução e evidências

PASSOU, execução independente deste auditor: `npm.cmd test -- --pool=threads --maxWorkers=1`, saída 0, **36/36 testes em três arquivos**, duração 30,89 s. Execução autorizada fora do sandbox para permitir criação de workers Windows; nenhum arquivo fonte foi modificado por esse procedimento. Novos testes cobrem caminhos sob a base, rejeição de URLs/caminhos arbitrários e navegação hash com skip link.

O desenvolvedor reportou lint, typecheck, build e format:check aprovados e sua repetição de testes threads1 com 36/36. São evidências atribuídas ao desenvolvedor, não comandos executados por este auditor. A primeira tentativa default do Vitest no Windows teve timeout de inicialização de workers antes da coleta; a repetição threads1 passou. Não se presume causa confirmada nem falha de negócio. O workflow Linux mantém o comando padrão, sujeito à verificação real da execução remota.

Foi revisada a correção de favicon: `index.html` referencia `%BASE_URL%assets/arena.svg`, impedindo a busca incidental por favicon ausente na raiz. O responsável principal ainda deve concluir reteste visual/console e verificação remota. Evidências de navegador/deploy do agente principal devem ser atribuídas a ele.

## Parecer e limites

Parecer **favorável a commit/push e deploy demonstrativo autorizados**, com 36 testes independentes aprovados e revisão estática sem achado impeditivo. A publicação somente poderá ser declarada concluída após workflow bem-sucedido e verificação real do endereço. Neste checkpoint: acesso ao site publicado **NÃO EXECUTADO** por este auditor. Não há comprovação de segurança para operação comercial, autenticação, RLS, dispositivos físicos, Safari ou auditoria WCAG completa.

## Adendo — evidências de publicação verificadas

Este auditor leu e conferiu os arquivos [resultado do workflow](pages-workflow-results.json) e [smoke remoto](pages-remote-results.json), produzidos pelo agente principal. Não executou novamente o navegador nem os comandos de deploy.

- PASSOU na evidência de workflow: execução `39250945405`, tentativa 2, estado `completed`, conclusão `success`, commit `c5554a4e0dabd19153fa3286dc7e0f5cce743fa9`. [Execução no GitHub](https://github.com/luanguiron10-cpu/sistema-box-de-crossfit/actions/runs/39250945405).
- PASSOU na evidência de acesso real: `https://luanguiron10-cpu.github.io/sistema-box-de-crossfit/`, **87 verificações, zero falhas**, incluindo viewports 375 e 1440, rotas diretas com hash, atualização, imagens, ausência de overflow, prévia descartada e ausência de armazenamento. Os arrays de erros JavaScript, HTTP e console estão vazios. Autoria da execução: agente principal.
- O primeiro deploy falhou pela política do ambiente `github-pages`, que permitia somente a branch padrão. Segundo relato do principal, a correção adicionou exclusivamente `publish/demo-fase-4a` à allowlist, preservando as demais regras e a visibilidade, seguida de reexecução dos jobs falhos. O sucesso posterior está comprovado no JSON; este auditor não consultou diretamente a API da regra do ambiente.

Parecer final **favorável à entrega demonstrativa publicada**, com base na inspeção independente, 36 testes executados por este auditor e evidências remotas atribuídas ao principal. O próximo commit apenas documental/de evidências disparará outra execução; seu SHA e resultado deverão ser confirmados pelo principal antes do relatório final. Mantêm-se as limitações de plataforma, privacidade pré-existente e ausência de validação para operação real de clientes descritas acima.
