# Fase 4A — Fundação modular do frontend

Data: 17/10/2026. Responsável: agente `arquiteto`, execução `fase4a_arquiteto`. Escopo: plano próprio aprovado pelo coordenador antes da implementação. Não substitui a [ADR-009](adr-009-instalacoes-independentes.md).

## Contexto, requisitos e limites

A linha de base informada e inspecionada pelo coordenador é `f368b8ab1b3b1a68618caea3cb2545bf8436276e`, branch `arquitetura/instalacoes-independentes`, sem código de aplicação. O repositório contém instruções e documentação; não presumir implementação de Auth, RLS ou operações de negócio. A Fase 4A atende parcialmente G01 do [backlog](../desenvolvimento/backlog.md), sem concluir G00–G15 ou antecipar controles backend.

Construir SPA responsiva original ARENA, com Box Horizonte sintético, para demonstrar jornadas de gestor, professor e aluno. Dados e indicadores são ilustrativos; perfil é alternância visual e não autenticação. Reservas, presenças, PRs e configurações não são persistidos. Nenhuma integração externa, infraestrutura, migration ou deploy integra esta fase.

## Plano anterior ao código e caminhos

1. Coordenador confirma raiz, remoto, branch, commit, árvore limpa, ferramentas e ausência de app; cria `feature/fase-4a-fundacao-frontend` da referência aprovada.
2. Arquiteto define contratos e critérios; engenharia reversa propõe navegação original a partir de referências públicas; especialista valida conceitos e textos.
3. Desenvolvedor implementa configuração, layout, componentes, rotas e testes. Dependências só após consultar versões estáveis, engines e peers oficiais.
4. Executar instalação, lint, tipos, testes e build; corrigir erros e repetir verificações afetadas. Coordenador verifica navegador real quando disponível.
5. Revisões independentes dos cinco papéis, documentação e auditoria antes dos commits/envio autorizados. Sem merge nem publicação automática.

| Caminhos planejados | Responsabilidade |
|---|---|
| `src/app/routes`, `src/app/layouts`, `src/app/providers` | Composição da aplicação, roteamento, layout compartilhado e contexto público |
| `src/components/ui`, `src/components/navigation` | Componentes visuais e navegação sem regras esportivas ocultas |
| `src/features/dashboard`, `students`, `classes`, `workouts`, `results`, `settings` | Páginas/jornadas e componentes do domínio demonstrativo; criar apenas pastas utilizadas |
| `src/config`, `src/data`, `src/styles`, `src/types` | Contrato e validação, fixtures sintéticas, tokens/estilos e tipos compartilhados realmente usados |
| `public/config`, ativos locais | Configuração pública padrão e exemplos A/B, sem credenciais |
| `package.json`, lockfile, configs Vite/TS/ESLint/Prettier, testes | Desenvolvimento reproduzível e validações locais |
| `docs/arquitetura/fase-4a-frontend.md` | Plano e decisões deste arquiteto |
| `docs/testes/pareceres-fase-4a/arquiteto.md` | Revisão independente do código após implementação |

Demais documentos de funcionalidade, execução Windows, auditoria, histórico, README e changelog são responsabilidade do coordenador/desenvolvedor. Não criar diretórios vazios para simular modularidade. `hooks` e `lib` só surgem com necessidade concreta; sem SDK fictício ou camada de serviços simulando backend.

## Decisões de implementação

- React e TypeScript; Vite para dev/build; React Router para rotas declarativas. Rotas previstas: `/`, `/gestor`, `/professor`, `/aluno`, `/configuracoes`, módulos demonstrativos quando úteis e fallback 404 com retorno.
- CSS leve com tokens e componentes reutilizáveis; modularizar quando trouxer isolamento útil. Identidade original: fundo claro quente, navegação navy e acentos coral/âmbar. Fonte local do sistema evita dependência de serviço de fontes.
- Estado React local/contexto apenas para configuração e visualização. Sem store global adicional, localStorage, cookie de login, formulário prometendo gravação ou requisições a backend.
- Configuração carregada de JSON público local; `VITE_INSTALLATION_CONFIG` seleciona caminho local de arquivo no dev/build. Não aceitar URL arbitrária, querystring selecionando backend ou segredo em variáveis `VITE_*` (todo valor delas pode chegar ao browser).
- Contrato tipado versionado valida nome, identidade, logo local, fuso IANA, unidades e flags. Erro de carregamento/validação exibe tela acessível e impede aplicação parcial silenciosa. Versão da aplicação tem fonte única no pacote/código central, não é valor livre de cliente.
- Configuração A/B usa mesma fonte e versão: somente arquivo público muda. Prévia de marca nas configurações é temporária; restaurar/recarregar remove alterações. Configurações não são controle de acesso; flags não substituem autorização futura.
- Componentes principais: cabeçalho, menu mobile, navegação ativa, aviso demo, cards/indicadores, estado vazio/erro, WOD e turmas. Landmarks, título de página, foco visível, skip link e rótulos acessíveis compõem o contrato de UI.

## Dependências e compatibilidade

Consulta oficial em 17/10/2026: [guia Vite](https://vite.dev/guide/) descreve Node 20.19+/22.12+; [guia Vitest](https://vitest.dev/guide/) indica Node >=22.12 e Vite >=6.4; [typescript-eslint](https://typescript-eslint.io/users/dependency-versions/) declara TypeScript >=4.8.4 e <6.1, ESLint 8.57/9/10. Node local informado: 24.22; npm 11.19.

O registry público consultado via web retornou React 19.3.1 e TypeScript 7.0.2 em `latest`. Isso não valida a combinação: TS7 fica fora da faixa do lint consultado. O desenvolvedor/coordenador deve registrar versões e engines obtidas por `npm view`, selecionar versões estáveis compatíveis e fixá-las no lockfile. Não usar beta, `--force` ou `--legacy-peer-deps` para ocultar incompatibilidades. Tentativa de consulta HTTP ao registry por PowerShell sem elevação foi bloqueada por restrição de socket; nenhum pacote foi instalado pelo arquiteto. Resultado web isolado não substitui a verificação completa do conjunto instalado.

## Critérios de aceite e testes planejados

| Critério | Evidência exigida |
|---|---|
| Inicial, gestor, professor, aluno e configurações | Renderização RTL e visita real às rotas; dados demonstrativos explícitos |
| Navegação/perfis | Rota e item ativo corretos; troca de visualização não afirma sessão/permissão |
| Componentes e estados | Testes de vazio, erro, formulário temporário e menu |
| Configuração A/B | Mesma versão, nomes/cores/fuso/unidades próprios; JSON ausente/inválido bloqueia com erro |
| Acessibilidade básica | Landmarks, nomes, labels, teclado, foco/menu, sem claims de certificação WCAG |
| Responsividade | Navegador em mobile/tablet/desktop; observar overflow e interação, não inferir só por media queries |
| Qualidade | `npm ci`, scripts dev/build/lint/typecheck/test/format e verificação documental com resultados reais |
| Segurança/procedência | Sem segredos, dados reais, APIs remotas, assets proprietários ou configuração de deploy |

Resultados serão consolidados pelo coordenador/auditor; esta tabela é plano, não resultado de execução. Testes de RLS, Auth, concorrência, persistência e isolamento entre projetos continuam NÃO EXECUTADOS porque não existem nesta fase.

## Atualização, replicação e riscos

Reprodução: clonar branch/commit, usar Node/npm compatíveis, `npm ci`, fornecer config pública sintética e executar scripts. Atualização usa novo commit/release com lockfile e contrato de configuração compatível. Rollback local volta ao commit/config anterior e reinstala pelo lockfile; não há banco ou dados persistidos a restaurar. Este procedimento não comprova recuperação operacional futura.

Riscos: drift de versão/configuração; marca sem contraste após personalização; confusão entre perfil demo e autorização; números sintéticos interpretados como indicadores reais; fixtures com datas estáticas; deep links dependentes do servidor SPA; dependências recentes incompatíveis. Mitigar com validação, testes, avisos persistentes e documentação. O produto continua impróprio para atendimento real de clientes até implementar e auditar o backend nas fases autorizadas.

## Versão e histórico

Versão documental inicial 0.1, 17/10/2026. Base arquitetural ADR-009 preservada. Sem modificação de banco ou infraestrutura. Estado do plano: aprovado para implementação pelo coordenador; resultado de código/testes depende da [revisão](../testes/pareceres-fase-4a/arquiteto.md).
