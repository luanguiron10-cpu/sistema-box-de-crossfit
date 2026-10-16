# CrossFit SaaS — gestão original de boxes

Projeto em fase de documentação e planejamento: alunos, equipe, turmas, reservas, presença, WODs, resultados, PRs e acompanhamento. **Decisão aprovada: código-base central e instalações independentes por box**, cada uma com projeto Supabase e implantação Cloudflare próprios. Não há aplicação executável nem banco implantado neste pacote.

## Estado e destino

- Repositório confirmado pelo proprietário: [luanguiron10-cpu/sistema-box-de-crossfit](https://github.com/luanguiron10-cpu/sistema-box-de-crossfit), privado.
- Branch desta revisão: `arquitetura/instalacoes-independentes`, derivada de `setup/documentacao-inicial` no commit `01405f2`. Consulte o [registro da Fase 3](docs/historico/fase-3.md).
- A [ADR-009 aceita](docs/arquitetura/adr-009-instalacoes-independentes.md) supera a proposta compartilhada anterior, preservada no histórico Git. Cada ambiente de cada cliente terá seus próprios dados, Auth, Storage, configuração e destino Cloudflare. Nenhum recurso foi provisionado.
- Frontend responsivo React/TypeScript continua como proposta de implementação; regras físicas e detalhes operacionais precisam de testes futuros.
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

## Distribuição e instalação

Manter uma base de código com releases fixadas por tag/commit. Cada instalação recebe build configurado para seu destino e identidade visual, sem fork permanente. A versão do código é comum; o digest do artefato configurado pode variar. Não compartilhar sessões, tokens, credenciais ou dados operacionais entre clientes.

- [Checklist de novo box](docs/implantacao/checklist-novo-box.md).
- [Versões, atualizações e rollback](docs/implantacao/distribuicao-atualizacao-rollback.md).
- [Critérios de reprodução do zero](docs/testes/criterios-reproducao-instalacao.md).
- [Auditoria da Fase 3](docs/testes/auditoria-fase-3.md).

Os procedimentos acima são planos, sem execução. Banco dedicado não elimina RLS, proteção de notas privadas ou controle de papéis dentro de cada instalação. Modelo principal não usa banco multi-tenant compartilhado, conta universal ou ranking entre boxes.
