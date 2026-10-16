# Desenvolvimento

Esta pasta registra implementação, validação e manutenção do produto original. A aplicação ainda não foi implementada nesta fase.

- [Política permanente](politica-documentacao.md)
- [Modelo por funcionalidade](modelo-funcionalidade.md)
- [Backlog inicial](backlog.md)

Validação local da documentação: executar `powershell -NoProfile -File scripts/validar-documentacao.ps1` na raiz. O script não acessa rede nem altera arquivos. Seu resultado não substitui testes da aplicação ou revisão humana de dados sensíveis.

Neste ambiente, a política padrão bloqueou a execução por arquivo. Após revisar o script, a execução de validação usou `powershell -NoProfile -ExecutionPolicy Bypass -File scripts/validar-documentacao.ps1`, limitado ao processo iniciado; nenhuma política persistente foi modificada. Em ambientes gerenciados, seguir a política da organização.
