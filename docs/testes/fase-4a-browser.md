# Verificação de navegador — Fase 4A

Data: 17/10/2026. Resultado: PASSOU nas verificações abaixo. Executor: coordenador, Playwright disponível no runtime de desenvolvimento e Chrome headless 155.0.8059.82 instalado no computador. Não foi adicionada biblioteca de navegador ao bundle ou às dependências da aplicação.

## Procedimento real

1. Iniciado Vite dev em localhost:5173; página real renderizou. A primeira execução ocorreu durante alterações HMR e usou seletor pelo nome acessível mutável do botão Menu. Foram aprovadas 80 verificações (largura e imagens em 40 navegações), mas a asserção seguinte do menu falhou. [JSON inicial preservado](evidencias-fase-4a/browser-results-inicial.json). Essa execução não aprovou o menu.
2. Corrigido o seletor do harness para `.mobile-toggle`, sem modificar a semântica acessível. O desenvolvedor também ajustou foco/Escape, tamanho dos textos auxiliares, quebra de nomes longos e foco visual de títulos. Foi escolhido o build estável sem HMR para o reteste.
3. Após instalação pelo lockfile, compilado A e servido por preview em localhost:4173. Percorridas dez rotas (`/`, `/gestor`, `/professor`, `/aluno`, `/configuracoes`, `/alunos`, `/turmas`, `/wods`, `/resultados`, `/nao-existe`) em larguras 320, 375, 768 e 1440 pixels. Alturas: 812 nas estreitas e 1000 nas maiores.
4. Verificado menu aberto, Escape, retorno de foco, navegação móvel, foco no título após rota, três perspectivas demonstrativas, campos de prévia, erro de contraste e descarte após recarregar. Resultado: **94/94 asserções**, zero exceções JavaScript e zero requisições externas durante a coleta A. [JSON final](evidencias-fase-4a/browser-results.json).
5. Compilado B com `VITE_INSTALLATION_CONFIG=/config/installation-b.json` e `--outDir` em pasta temporária; servido em localhost:4174. Verificados marca Serra Training, fuso America/Manaus, lb, resultados ocultos e rota direta bloqueada. Testes adicionais com interceptação de JSON local verificaram nome de 100 caracteres sem overflow, configuração inválida com foco/recuperação, skip link e lista do professor com alunos desabilitados. A primeira rodada passou 13/13; após corrigir o título da aba fixo em Arena, A/B foram reconstruídos e o reteste incluiu dois títulos configurados, **15/15 asserções**. [JSON adicional](evidencias-fase-4a/browser-extra-results.json).

O comando build B em PowerShell foi `npm.cmd run build -- --outDir $buildTarget`, depois de definir a variável pública; `$buildTarget` apontava para pasta temporária específica. Vite avisou que não limparia esse diretório externo; nenhuma limpeza destrutiva foi solicitada. A variável foi removida após o build. Nenhum arquivo do código-fonte foi editado para selecionar B.

## Evidências visuais inspecionadas

O coordenador abriu e inspecionou de fato os quatro PNGs: hierarquia visual, avisos, cards, tabelas e legibilidade demonstrativa.

- [Início desktop](evidencias-fase-4a/inicio-desktop.png).
- [Gestor desktop](evidencias-fase-4a/gestor-desktop.png).
- [Aluno mobile](evidencias-fase-4a/aluno-mobile.png).
- [Configuração B desktop](evidencias-fase-4a/configuracao-b-desktop.png).

## Reprodução e limites

Os harnesses de navegador foram temporários no ambiente de desenvolvimento, não fazem parte da toolchain npm do produto. Os JSONs registram asserções e resultados, não são scripts executáveis. Outro desenvolvedor pode repetir o procedimento manualmente ou automatizá-lo com seu Playwright/navegador. Os 27 testes Vitest/RTL são versionados e executáveis pelo npm. Total final da verificação de navegador: 94 + 15 = 109 asserções, incluindo os títulos configurados.

Emulação de viewport não é teste em aparelhos Android/iOS reais, Safari ou leitor de tela. Não foi executada auditoria WCAG completa, teste de todos os navegadores ou homologação em outro computador físico. Contraste do destaque é validado pelo contrato e rótulos/foco têm testes básicos; isso não certifica conformidade integral. Não há backend para testar RLS, autenticação, autorização de produção ou persistência. Não afirmar isolamento entre projetos Supabase a partir dessas duas configurações públicas.
