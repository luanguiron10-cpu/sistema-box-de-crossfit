# Parecer do desenvolvedor — Fase 4A

Data: 17/10/2026. Papel delegado real: `desenvolvedor`. Versão do frontend: `0.3.0`.

## Trabalho efetivamente executado

Após ler `AGENTS.md`, `agents/desenvolvedor.md` e ADR-009, aguardei o plano aprovado do arquiteto e os critérios do especialista. Implementei a aplicação em `src/`, os exemplos públicos em `public/`, `index.html` e a configuração npm, TypeScript, Vite, ESLint e Prettier. Preservei arquivos de outros agentes; não executei operações Git, infraestrutura, Supabase, deploy ou publicação.

A fundação possui navegação por React Router, início, gestor, professor, aluno, configurações, módulos demonstrativos de alunos/turmas/WODs/resultados, estado vazio, rota desconhecida e tratamento de falhas. Componentes compartilhados e CSS próprio compõem identidade provisória original, sem ativos externos ou reprodução de interfaces proprietárias.

Configurações A/B são JSON públicos locais carregados uma vez e validados. `VITE_INSTALLATION_CONFIG` seleciona um caminho local durante execução/build, sem parâmetro do navegador ou destino de backend. Validação rejeita campos desconhecidos, fuso/unidade inválidos, logos externos e cor sem contraste suficiente sobre branco. Um novo arquivo de instalação e ativo local autorizado não exigem alteração de TypeScript. Configurações sensíveis não existem nesta aplicação.

Alternância de perfil altera somente a visualização demonstrativa. Reservas, presença, resultados e PRs não são persistidos. A prévia de identidade é volátil e descartada ao sair da página. Flags de módulos controlam links, rotas e conteúdo dependente. A data demonstrativa é fixa em 17/10/2026.

## Dependências e ambiente

Consultei versões, engines e peers no registry npm antes da instalação. Ambiente informado e verificado pela coordenação: Node 24.22 e npm 11.19. O pacote exige Node `>=24.15.0 <25` e npm `>=11 <12`.

Versões fixadas e lockfile: React/DOM 19.3.1, React Router 7.18.4, Vite 8.3.4, plugin React 6.1.2, TypeScript 5.9.3, Vitest 5.0.5, React Testing Library 16.3.3, jsdom 30.1.3, ESLint 10.13.0, typescript-eslint 8.71.2 e Prettier 3.9.10. TypeScript 5.9.3 está dentro do intervalo suportado pelo typescript-eslint consultado (`>=4.8.4 <6.1.0`). Não foram adicionadas bibliotecas de gráficos, componentes ou browser à aplicação.

## Evidências executadas por este agente

| Comando | Resultado real |
| --- | --- |
| `npm view ... version engines peerDependencies --json` | Consultas das dependências e peers concluídas; rede autorizada |
| `npm install` | Instalação inicial concluída; 249 pacotes adicionados |
| `npm install --save-dev --save-exact eslint@10.13.0 @eslint/js@10.0.1 @testing-library/dom@10.4.2` | Atualização concluída; 238 pacotes auditados; zero vulnerabilidades reportadas pelo npm naquele momento |
| `npm run format` | Executado para formatar arquivos do app/toolchain |
| `npm run typecheck` | PASSOU, exit 0 |
| `npm run lint` | PASSOU |
| `npm test` | PASSOU: dois arquivos, 26 testes; execução final observada com duração de 8,74 s |
| `npm run build` | PASSOU: Vite 8.3.4, 40 módulos, build em 1,65 s; CSS 17,83 kB e JS 284,44 kB (89,62 kB gzip) |
| `npm run format:check` | PASSOU após correção da formatação do teste alterado |

Testes estão em `src/app/App.test.tsx` e `src/config/installation.test.ts`. Cobrem renderização, limites demonstrativos, navegação e foco do título, troca de visão, estado vazio, config B/rota desabilitada, prévia volátil e validação, menu/Escape/foco, recuperação de configuração, error boundary, falha de fetch, flag de alunos, consistência de reservas e associação de erro ao campo. O contrato de configuração cobre configs A/B, campos desconhecidos, logos inseguros, novo ativo local, cor/fuso/unidade/flags e caminho local.

## Erros encontrados e correções

1. Comandos tentados antes de terminar a instalação não encontraram os binários. Aquela tentativa não aprovou verificações; os comandos foram repetidos após instalação e seus resultados estão acima.
2. O registry marcou ESLint 9.39.5 como sem suporte. Consultei ESLint 10 e peers, atualizei para 10.13.0 e repeti lint com sucesso.
3. Um teste buscava o nome acessível da marca com espaço diferente do DOM. A execução inicial teve um teste falho de 23; corrigi o seletor e acrescentei três regressões. A execução posterior passou 26/26.
4. Corrigi escape da expressão de logo local antes da checagem final de tipos.
5. Revisões apontaram lista de alunos visível com módulo desabilitado e erro de nome associado ao campo de cor. Corrigidos e cobertos por testes.
6. O total de reservas inicialmente foi escrito incorretamente. Passei a derivar 36 reservas e 44 vagas das fixtures; acrescentei teste.
7. Menu recebeu foco ao abrir e Escape com restauração do botão; conteúdo oculto mobile usa `display: none`. Nomes longos receberam quebra; textos auxiliares mobile foram ampliados.
8. `format:check` detectou o arquivo de testes editado durante a execução de qualidade. Reexecutei formatação e a checagem passou.

## Limites e parecer

### Revisão adicional do título e dependências

A coordenação identificou que o HTML inicial ainda continha o nome da instalação A no título. Corrigi `index.html` para título genérico e `AppLayout` para definir `document.title` a partir do nome público validado da instalação. Um teste adicional monta A e depois B e verifica ambos os títulos, sem marca fixa no fluxo. Removi a dependência não utilizada `eslint-plugin-react-refresh` por `npm uninstall eslint-plugin-react-refresh --offline --ignore-scripts --no-audit --no-fund`; um pacote foi removido, com atualização de package e lockfile.

Repetição após a correção: `npm run format`, `npm run typecheck`, `npm run lint`, `npm test`, `npm run build` e `npm run format:check` concluídos com sucesso. Testes: **27/27**, dois arquivos, duração 9,88 s. Build: 40 módulos, 559 ms; HTML 0,61 kB, CSS 17,83 kB, JS 284,52 kB (89,65 kB gzip). A execução sequencial terminou com exit 0. Os resultados anteriores permanecem como histórico real.

Favorável à fundação frontend demonstrativa, condicionado à auditoria e consolidação da coordenação. Testes jsdom não comprovam responsividade em navegador nem certificação WCAG. QA real, reprodução `npm ci`, instalação B no navegador, preservação do Git e SHA remoto são atividades da coordenação/auditor; este parecer não declara que as executei.

Zero vulnerabilidades reportadas pelo npm é resultado pontual e limitado, não garantia de segurança. Não foram implementados nem testados Auth, RLS, backend, persistência, migrations, backup, isolamento operacional entre projetos, pagamentos ou serviços externos. Dispositivos físicos e leitores de tela: NÃO EXECUTADOS por este agente. O produto continua impróprio para operação real de clientes nesta fase.
