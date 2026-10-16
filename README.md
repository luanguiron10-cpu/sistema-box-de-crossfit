# CrossFit SaaS — gestão original de boxes

Projeto em fase de documentação e planejamento para gestão multi-box: alunos, equipe, turmas, reservas, presença, WODs, resultados, PRs e acompanhamento. Não há aplicação executável nem banco implantado neste pacote.

## Estado e destino

- Repositório confirmado pelo proprietário: [luanguiron10-cpu/sistema-box-de-crossfit](https://github.com/luanguiron10-cpu/sistema-box-de-crossfit), privado.
- Branch de trabalho prevista: `setup/documentacao-inicial`; consulte o [registro de integração](docs/historico/integracao-github.md) para o estado real do envio.
- Frontend responsivo/Cloudflare Pages e Supabase Auth/Postgres/RLS são propostas arquiteturais. Nenhum recurso foi provisionado.
- Comercialização futura por assinatura, implantação personalizada ou licenciamento; escopo, preço e licença ainda dependem de decisão do proprietário.

## Começar

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
