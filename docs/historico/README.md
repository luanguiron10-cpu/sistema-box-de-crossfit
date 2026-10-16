# Histórico e rastreabilidade

- [Changelog documental](CHANGELOG.md).
- [Inventário inicial de 16 arquivos](inventario-inicial.json).
- [Integração GitHub](integracao-github.md).
- [Execução da Fase 2](fase-2.md).
- [Revisão arquitetural da Fase 3](fase-3.md): decisão aceita, versões anteriores, rastreabilidade e envio.

Versões dos documentos são independentes da versão futura do produto. Estado `0.1.0-docs` identifica a fundação documental, sem release de software. Registrar alterações por funcionalidade e vincular commits reais quando existirem.

Não há histórico Git local anterior a esta fase. Documentos legados ficam nos mesmos caminhos; seus hashes iniciais permitem verificar preservação. Adições em AGENTS.md e TOMLs preservam conteúdo anterior, mas alteram seus hashes de forma intencional.

A Fase 3 usa versão documental `0.2.0-docs`. O modelo multi-tenant compartilhado da Fase 2 foi superado, sem apagar seus commits, evidências ou auditoria. Consulte a ADR-009 para a decisão atual.
