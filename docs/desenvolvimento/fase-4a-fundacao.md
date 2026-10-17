# Fase 4A — fundação do frontend

Data: 17/10/2026. Funcionalidade FUND-4A, versão frontend 0.3.0 demonstrativa. Estado: CONCLUÍDA no escopo de fundação demonstrativa, após testes, auditoria e confirmação do primeiro envio remoto registrados no histórico. A versão documental das fases anteriores é independente da versão do aplicativo. Isso não conclui os módulos de negócio nem certifica uso em produção.

## 1. Objetivo e requisitos

Criar SPA original, responsiva, modular e executável localmente sem serviços externos. Base: `f368b8ab1b3b1a68618caea3cb2545bf8436276e`, branch `arquitetura/instalacoes-independentes`, árvore limpa antes das alterações; origin oficial `luanguiron10-cpu/sistema-box-de-crossfit`. Node 24.22.0/npm 11.19.1 disponíveis. Não existia código de aplicação, package.json ou instalação de dependências no repositório.

| Aceite | Evidência exigida |
|---|---|
| Inicialização e build | Servidor HTTP local e build terminam com sucesso |
| Telas | Início, gestor, professor, aluno e configurações; dados sintéticos e aviso inequívoco |
| Navegação | Links, perfil demonstrativo, menu mobile, fallback de rota |
| Configuração A/B | Mesma versão/fonte com JSON público local diferente; configuração inválida tratada |
| Sem falsas operações | Sem Auth real, reserva/presença salva, PR calculado ou persistência de settings |
| Qualidade | Lint, tipos, testes, formatação e revisão humana |
| Acessibilidade e layout | Foco/teclado, rótulos, menu, telas vazias/erro e inspeção em navegador real com viewports distintos |
| Entrega | Oito registros, pareceres, commits e SHA remoto confirmado |

Os módulos de negócio permanecem demonstrações. Não comercializar esta entrega como produto pronto.

## 2. Arquitetura e decisões

Aplicar [plano do arquiteto](../arquitetura/fase-4a-frontend.md) e [ADR-009](../arquitetura/adr-009-instalacoes-independentes.md). React/TypeScript, Vite, React Router, CSS leve, Vitest/Testing Library, ESLint e Prettier. Versões exatas e engines são verificadas no registro de dependências/package-lock; não presumir que todo pacote latest seja compatível.

Sem cliente Supabase, banco, migrations, servidor de API ou autenticação. Identidade visual provisória original e assets locais. Perfil demonstra apenas visualização, não autorização. Configuração pública não admite destino backend ou credenciais.

## 3. Código e banco

Código modular em src; assets e configurações públicas em public; toolchain e lockfile na raiz. Layout/providers/routes, componentes reutilizáveis e features locais separam navegação, dados sintéticos e apresentação. Não criar diretórios vazios ou camadas de serviços fictícias.

Banco: nenhuma alteração. Configurações .codex e histórico anteriores preservados. Lista final de arquivos alterados pode ser obtida por `git diff --name-status f368b8a HEAD` após os commits.

## 4. Testes executados e resultados

Relatórios específicos: [auditoria](../testes/auditoria-fase-4a.md) e [navegador](../testes/fase-4a-browser.md). Desenvolvedor executou install, lint, typecheck, 27 testes, build e format:check com sucesso após correções. Coordenador executou npm ci offline pelo lockfile (237 pacotes no checkpoint anterior à remoção de um plugin de lint sem uso), build A/B, dev/preview HTTP locais e 109 asserções Chrome aprovadas. Ver evidências e checagens independentes do auditor; isso não é teste de backend, produção ou dispositivos físicos.

## 5. Erros e correções

Erros reais e correções: comandos tentados antes de terminar instalação falharam por bins ausentes e foram repetidos depois; ESLint 9 sem suporte foi substituído por 10 compatível; seletor de teste de marca com whitespace corrigido; regex de logo local corrigida; flags passaram a valer também nos painéis embutidos; erro de nome recebeu associação ao campo correto; contagem de reservas derivada das fixtures (36/44); menu recebeu foco/Escape; nomes longos e fontes mobile ajustados; formatação repetida depois de edição concorrente. Um teste inicialmente falhou entre 23, depois 26/26 passaram com regressões adicionais. O harness inicial do navegador usava seletor mutável durante HMR; execução foi preservada como falha e retestada em build estável com seletor apropriado, 94+13 asserções aprovadas. Os pareceres e relatórios detalham limites e autoria.

Revisão adicional final: título HTML inicial passou a ser genérico; após carregar configuração, a aba identifica o box correto A/B. Acrescentado teste de regressão (27/27), removido plugin de ESLint não utilizado e repetidos lint/tipos/build/formato. Os builds A/B e as asserções de títulos do navegador passaram (94+15 no conjunto final). Nenhuma API, autenticação ou persistência foi adicionada.

## 6. Instalação e atualização

[Manual Windows](../implantacao/frontend-windows.md) fornece instalação limpa, comandos, atualização e diagnóstico. Atualização local demonstrativa usa checkout/lockfile/npm ci/build; não distribui release nem implanta em cliente. Reversão é checkout da versão anterior em outra cópia, preservando trabalho local; nenhuma operação destrutiva automática.

## 7. Replicação

Mesma fonte/versão usa configuração A ou B de demonstração selecionada no ambiente de build/dev. Configuração tem nome, marca, logo local, fuso, unidade e flags; não altera código por cliente nem define qualquer conexão de produção. Prévia em settings é volátil. Testar A/B não comprova isolamento de Supabase, que ainda inexiste.

## 8. Versão e histórico

Frontend 0.3.0: fundação demonstrativa. Branch `feature/fase-4a-fundacao-frontend`, derivada do SHA aprovado. [Registro de execução e delegações](../historico/fase-4a.md). Commit/push não significam deploy nem autorização para produção.
