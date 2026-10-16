# Desenvolvimento

Esta pasta registra implementação, validação e manutenção do produto original. A aplicação ainda não foi implementada nesta fase.

- [Política permanente](politica-documentacao.md)
- [Modelo por funcionalidade](modelo-funcionalidade.md)
- [Backlog inicial](backlog.md)

Validação local da documentação: executar `powershell -NoProfile -File scripts/validar-documentacao.ps1` na raiz. O script não acessa rede nem altera arquivos. Seu resultado não substitui testes da aplicação ou revisão humana de dados sensíveis.

Neste ambiente, a política padrão bloqueou a execução por arquivo. Após revisar o script, a execução de validação usou `powershell -NoProfile -ExecutionPolicy Bypass -File scripts/validar-documentacao.ps1`, limitado ao processo iniciado; nenhuma política persistente foi modificada. Em ambientes gerenciados, seguir a política da organização.

Fase 3: [instalações independentes](../implantacao/README.md) e [ADR-009](../arquitetura/adr-009-instalacoes-independentes.md) orientam o backlog vigente. A linha de base histórica é preservada no backlog, seguida da matriz de transição G00–G15. Não há implementação, release de aplicação ou infraestrutura nesta entrega.
