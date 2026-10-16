# Testes e auditorias

Registre data, versão/commit, ambiente, comando ou procedimento, resultado, limitações e correção aplicada. Use PASSOU, FALHOU, NÃO EXECUTADO ou BLOQUEADO; tarefa planejada não é evidência de sucesso.

- [Auditoria da Fase 2](auditoria-fase-2.md): estrutura, documentação, preservação e segredos.
- [Roteiro inicial preservado](../roteiro-de-testes.md).
- Verificador local: `./scripts/validar-documentacao.ps1` (a partir da raiz).
- [Inventário inicial](../historico/inventario-inicial.json): comparação dos arquivos anteriores.

## Plano mínimo para implementação futura

1. Dois boxes e todos os papéis: testes positivos e negativos de leitura/escrita, troca de tenant, elevação de papel e vínculo revogado.
2. Reserva: duas solicitações simultâneas à última vaga, idempotência, cancelamento e promoção de espera.
3. Presença: não confundir reserva, evitar duplicidade, preservar correções e excluir turma cancelada de faltas.
4. Esporte: versões WOD, tempo/carga/reps, time cap, categorias/prescrições, conversões, empate e correções PR.
5. Privacidade: notas privadas, rankings, exportações e arquivos.
6. Interface: acessibilidade, responsividade e erros; operação: atualização, backup/restauração e replicação com dados sintéticos.

Esses testes de aplicação NÃO FORAM EXECUTADOS nesta fase, pois não há implementação. A validação documental não comprova RLS, desempenho ou funcionamento do aplicativo.
