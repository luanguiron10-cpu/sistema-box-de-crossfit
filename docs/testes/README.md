# Testes e auditorias

Registre data, versão/commit, ambiente, comando ou procedimento, resultado, limitações e correção aplicada. Use PASSOU, FALHOU, NÃO EXECUTADO ou BLOQUEADO; tarefa planejada não é evidência de sucesso.

- [Auditoria da Fase 2](auditoria-fase-2.md): estrutura, documentação, preservação e segredos.
- [Auditoria da Fase 3](auditoria-fase-3.md): ADR-009, coerência da revisão e pareceres dos cinco agentes.
- [Critérios de reprodução](criterios-reproducao-instalacao.md): instalações de teste A/B do zero e evidências exigidas, ainda não executados.
- [Roteiro inicial preservado](../roteiro-de-testes.md).
- Verificador local: `./scripts/validar-documentacao.ps1` (a partir da raiz).
- [Inventário inicial](../historico/inventario-inicial.json): comparação dos arquivos anteriores.

## Plano mínimo para implementação futura

1. Duas instalações independentes A/B, cada uma com projeto/credenciais de teste próprios: testar rejeição de tokens de outro projeto, configuração de destino incorreta e ausência de mistura de dados/sessões. Dentro de cada instalação, testar leitura/escrita por papel e titularidade, elevação de papel e vínculo revogado. Não existe troca de tenant em banco compartilhado no modelo aprovado.
2. Reserva: duas solicitações simultâneas à última vaga, idempotência, cancelamento e promoção de espera.
3. Presença: não confundir reserva, evitar duplicidade, preservar correções e excluir turma cancelada de faltas.
4. Esporte: versões WOD, tempo/carga/reps, time cap, categorias/prescrições, conversões, empate e correções PR.
5. Privacidade: notas privadas, rankings, exportações e arquivos.
6. Interface: acessibilidade, responsividade e erros; operação: atualização, backup/restauração e replicação com dados sintéticos.

Esses testes de aplicação NÃO FORAM EXECUTADOS nesta fase, pois não há implementação. A validação documental não comprova RLS, desempenho ou funcionamento do aplicativo.
