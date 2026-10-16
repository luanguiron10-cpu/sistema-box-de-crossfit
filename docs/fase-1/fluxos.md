# Fluxos funcionais

Pesquisa documental: 14/10/2026. Consolidação: 16/10/2026. Fluxos D são reconstruções de artigos públicos, sem navegação autenticada ou execução. Consultar [fontes](fontes.md) e [matriz](matriz-funcionalidades.md).

## Referência documental — D

1. **Agenda (S06–S07):** gestor configura modalidade, grade, horários, capacidade e janelas → aluno consulta agenda → solicita reserva ou espera → desistência pode liberar vaga → política documentada pode promover espera. “Check-in” nesse contexto não comprova presença física.
2. **Programação (S08):** responsável escolhe dia/modalidade → descreve WOD, sessões e movimentos → salva → aluno elegível consulta. O relatório anterior registra elegibilidade ligada a contrato ativo da modalidade, independentemente da reserva; não houve teste dessa regra.
3. **Desempenho (S11):** aluno informa resultado → ranking recebe resultado → avaliação, PSE e interações complementam experiência. Homologação por coach e desempates permanecem H.
4. **Gestão (S04/S13):** cadastro → venda de contrato → título financeiro → recebimento. A máquina completa de estados e exceções não foi comprovada.
5. **TV (S08):** modalidade/programação diária → apresentação do WOD por link. Autorização e proteção desse link permanecem H.

## Produto original — P

### Jornada do aluno

Abrir endereço da instalação → autenticar no Auth local → validar vínculo/papel local → consultar turma → reservar → comparecer → professor confirma presença → registrar resultado associado à prescrição executada → consultar evolução, PR e ranking locais da instalação. Não há seletor global ou ranking interboxes.

Reserva, presença e resultado são entidades distintas. Registrar resultado não confirma presença; reservar não gera resultado. Elegibilidade para consultar WOD será decisão explícita do proprietário.

### Jornada do professor

Preparar rascunho → definir blocos, prescrição e pontuação → publicar versão → associar à turma → conduzir chamada → acompanhar resultados → corrigir com autoria e histórico quando autorizado.

Se houver resultado, mudança da prescrição exige nova versão ou correção rastreável. Notas individuais restritas não entram em ranking ou TV.

### Cancelamento e espera

Validar vínculo/política/prazo → cancelar uma única vez → liberar capacidade atomicamente → promover próximo elegível ou enviar convite, conforme política escolhida → registrar evento. Falha ou repetição da requisição não pode criar vaga ou reserva adicional.

### Gestão e replicação

Planejar recursos independentes → selecionar versão central → configurar ambiente e identidade visual autorizada → aplicar migrações comuns e seed sintético em teste → validar autenticação, papéis, restauração e fluxos → obter aprovação da implantação. Nesta fase isso é planejamento, sem execução. Na operação local: configurar modalidades/políticas/equipe → convidar alunos no Auth local → acompanhar ocupação e frequência → revisar acessos. Outra instalação reutiliza versão e contratos de configuração, sem fork permanente, dados ou credenciais do cliente anterior. Backup, atualização e rollback são específicos do destino.

## Decisões pendentes

- Modelo principal resolvido em 16/10/2026: instalação independente por box, conforme [ADR009](../arquitetura/adr-009-instalacoes-independentes.md). Redes/múltiplas unidades exigem decisão própria.
- Janelas, tolerâncias, faltas e regra da fila.
- Quem consulta WOD e rankings; identificação pública ou restrita.
- Quem corrige resultados e como recalcular PR/ranking.
- Escopo financeiro inicial e critérios de elegibilidade.

## Testes futuros derivados

Concorrência na última vaga; repetição de reserva/cancelamento; promoção de fila; autorização por vínculo/papel local; rejeição de sessões de outro projeto; revogação de vínculo; turma cancelada sem falta; preservação de versões; unidades e comparabilidade; empate e time cap; ausência de notas privadas em rankings/TV. Nenhum desses testes foi executado na Fase 1.


## Limite da revisão Fase 3

As jornadas D preservam a pesquisa de 14/10. As mudanças P derivam da decisão do proprietário em 16/10, sem nova pesquisa ou validação de infraestrutura. Reprodução de instalação, restauração e rollback permanecem testes futuros NÃO EXECUTADOS.
