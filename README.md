# CrossFit SaaS — gestão original de boxes

Fundação web demonstrativa para gestão de boxes: alunos, equipe, turmas, WODs, resultados e acompanhamento. **Código-base central e instalações independentes por box**, conforme ADR-009. A Fase 4A implementa frontend local; não há banco, autenticação real ou persistência de operações de negócio.

## Estado e destino

- Repositório confirmado pelo proprietário: [luanguiron10-cpu/sistema-box-de-crossfit](https://github.com/luanguiron10-cpu/sistema-box-de-crossfit), privado.
- Branch desta implementação: `feature/fase-4a-fundacao-frontend`, derivada de `f368b8ab1b3b1a68618caea3cb2545bf8436276e`. Consulte o [registro da Fase 4A](docs/historico/fase-4a.md); a [Fase 3](docs/historico/fase-3.md) permanece no histórico.
- A [ADR-009 aceita](docs/arquitetura/adr-009-instalacoes-independentes.md) supera a proposta compartilhada anterior, preservada no histórico Git. Cada ambiente de cada cliente terá seus próprios dados, Auth, Storage, configuração e destino Cloudflare. Nenhum recurso foi provisionado.
- Frontend React/TypeScript/Vite com navegação demonstrativa e configuração pública local. Regras físicas, backend, autenticação, implantação e recuperação de produção precisam de implementação e testes futuros.
- Comercialização futura por assinatura, implantação personalizada ou licenciamento; escopo, preço e licença ainda dependem de decisão do proprietário.

## Começar

Requer Node/npm compatíveis com os engines do package.json; ambiente da entrega Node 24.22.0/npm 11.19.1. Na raiz, em PowerShell:

```powershell
npm.cmd ci
npm.cmd run dev -- --host 127.0.0.1
```

Abra a URL local exibida. A aplicação usa apenas dados sintéticos; trocar perfil é prévia visual, sem login. Configurações em tela são voláteis e não são salvas. Nenhuma reserva, presença ou PR é persistido.

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd test -- --run
npm.cmd run format:check
npm.cmd run build
npm.cmd run preview -- --host 127.0.0.1
```

Instruções de clonagem limpa, configuração demonstrativa A/B e diagnóstico: [manual Windows](docs/implantacao/frontend-windows.md). A presença de um comando aqui não implica teste aprovado; resultados reais ficam na [auditoria da Fase 4A](docs/testes/auditoria-fase-4a.md).

1. Leia [AGENTS.md](AGENTS.md) e o [índice documental](docs/README.md).
2. Consulte a [Fase 1](docs/fase-1/relatorio-analise.md), a [arquitetura](docs/arquitetura/README.md) e o [backlog](docs/desenvolvimento/backlog.md).
3. Antes de desenvolver, aprove requisitos e preencha o [modelo de funcionalidade](docs/desenvolvimento/modelo-funcionalidade.md).
4. Em PowerShell, execute `./scripts/validar-documentacao.ps1` para conferir a documentação. Isso não testa aplicação, Supabase ou segurança em produção.

## Regras de contribuição

Cada funcionalidade precisa dos oito registros da [política permanente](docs/desenvolvimento/politica-documentacao.md), testes adequados e revisão. Resultados não executados são registrados como tal. Nunca incluir credenciais, dados pessoais reais, dumps ou material proprietário de referências.

O estudo Next Fit é documental e público; não é código nem interface a reproduzir. Os documentos distinguem evidência documental, marketing, hipótese e proposta própria.

## Agentes e publicação

Os cinco papéis são `arquiteto`, `engenharia_reversa`, `desenvolvedor`, `especialista_crossfit` e `auditor`. Configurações em `.codex/agents/` e instruções complementares em `agents/`.

Push de documentação à branch solicitada não autoriza merge, release ou deploy. Não há workflow de publicação criado por esta fase. Alterações no Supabase de produção, migrações e publicação Cloudflare exigem autorização específica.

## Conteúdo anterior

[LEIA-ME-PRIMEIRO.md](LEIA-ME-PRIMEIRO.md), [guia de instalação dos agentes](GUIA-INSTALACAO-E-TESTES.md), [plano inicial](docs/plano-de-acao.md) e [roteiro inicial](docs/roteiro-de-testes.md) foram preservados como histórico. Consulte documentos novos para o estado atual.

Licença comercial definitiva não foi escolhida; esta documentação não concede uma licença de redistribuição do produto nem substitui contratos futuros.

## Distribuição e instalação

Manter uma base de código com releases fixadas por tag/commit. Cada instalação recebe build configurado para seu destino e identidade visual, sem fork permanente. A versão do código é comum; o digest do artefato configurado pode variar. Não compartilhar sessões, tokens, credenciais ou dados operacionais entre clientes.

- [Checklist de novo box](docs/implantacao/checklist-novo-box.md).
- [Versões, atualizações e rollback](docs/implantacao/distribuicao-atualizacao-rollback.md).
- [Critérios de reprodução do zero](docs/testes/criterios-reproducao-instalacao.md).
- [Auditoria da Fase 3](docs/testes/auditoria-fase-3.md).

Os procedimentos acima são planos, sem execução. Banco dedicado não elimina RLS, proteção de notas privadas ou controle de papéis dentro de cada instalação. Modelo principal não usa banco multi-tenant compartilhado, conta universal ou ranking entre boxes.

Na Fase 4A, somente a seleção de configurações **locais demonstrativas** A/B é implementada no frontend; provisionamento, migrations, backups e implantação continuam planos. Ver [arquitetura frontend](docs/arquitetura/fase-4a-frontend.md) e [requisitos da fundação](docs/desenvolvimento/fase-4a-fundacao.md).

Publicação da demonstração: procedimento, atualização e reversão em [GitHub Pages](docs/implantacao/github-pages-demo.md). Branch dedicada: publish/demo-fase-4a; rotas usam #/.
