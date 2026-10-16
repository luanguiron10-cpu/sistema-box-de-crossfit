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

Entrar → selecionar box com vínculo ativo → consultar turma → reservar → comparecer → professor confirma presença → registrar resultado associado à prescrição executada → consultar evolução.

Reserva, presença e resultado são entidades distintas. Registrar resultado não confirma presença; reservar não gera resultado. Elegibilidade para consultar WOD será decisão explícita do proprietário.

### Jornada do professor

Preparar rascunho → definir blocos, prescrição e pontuação → publicar versão → associar à turma → conduzir chamada → acompanhar resultados → corrigir com autoria e histórico quando autorizado.

Se houver resultado, mudança da prescrição exige nova versão ou correção rastreável. Notas individuais restritas não entram em ranking ou TV.

### Cancelamento e espera

Validar vínculo/política/prazo → cancelar uma única vez → liberar capacidade atomicamente → promover próximo elegível ou enviar convite, conforme política escolhida → registrar evento. Falha ou repetição da requisição não pode criar vaga ou reserva adicional.

### Gestão e replicação

Criar configuração do box → cadastrar modalidades/políticas/equipe → convidar alunos → acompanhar ocupação e frequência → revisar acessos e indicadores. Instalação de outro box deve reutilizar estrutura e configurações documentadas sem copiar dados pessoais de clientes anteriores.

## Decisões pendentes

- Box individual, unidade e rede: fronteiras de tenant e papéis.
- Janelas, tolerâncias, faltas e regra da fila.
- Quem consulta WOD e rankings; identificação pública ou restrita.
- Quem corrige resultados e como recalcular PR/ranking.
- Escopo financeiro inicial e critérios de elegibilidade.

## Testes futuros derivados

Concorrência na última vaga; repetição de reserva/cancelamento; promoção de fila; autorização por tenant/papel; revogação de vínculo; turma cancelada sem falta; preservação de versões; unidades e comparabilidade; empate e time cap; ausência de notas privadas em rankings/TV. Nenhum desses testes foi executado na Fase 1.
