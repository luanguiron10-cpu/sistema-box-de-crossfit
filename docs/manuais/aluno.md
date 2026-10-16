# Aluno — fluxo proposto

Data: 16/10/2026. Versão documental: 0.2 — Fase 3. **Rascunho; aplicação e passos de interface ainda não implementados ou testados.**

## Acesso e agenda

O aluno acessará a URL comunicada pelo seu box e usará a autenticação própria dessa instalação. Participar de outro box exige acesso e vínculo próprios na outra instalação; não há conta universal nem seletor de box. Resultados, reservas e ranking pertencem somente à instalação acessada.

Fluxo pretendido: consultar modalidades e turmas disponíveis, verificar horário e vagas, solicitar reserva e receber confirmação. Uma solicitação ainda não confirmada não garante vaga. Cancelamento e espera dependerão das políticas comunicadas pelo box.

## Treino e evolução

O aluno consultará a versão publicada do WOD quando elegível. Após o treino, poderá informar resultado no tipo solicitado, com unidade e prescrição realmente executada. RX/Scaled/Adaptado não substituem descrição da adaptação.

Treino incompleto no time cap deverá registrar essa condição e o trabalho realizado. Resultado, reserva e presença terão registros distintos. A política do box definirá edição e validação pelo coach.

O histórico deverá explicar filtros usados para PRs e benchmarks. Participação identificável em ranking dependerá da escolha de visibilidade e das regras de comparação. Dúvidas sobre execução física devem ser tratadas com o coach; o software não fornecerá orientação médica.

## Pendências de validação

Janelas, cancelamentos, espera, visibilidade do WOD e ranking e canal de suporte precisam ser aprovados. O manual definitivo deverá ser validado com usuário de teste e ambiente de homologação, sem dados reais.


## Revisão Fase 3

A [ADR-009](../arquitetura/adr-009-instalacoes-independentes.md) define instalações independentes. Identidade visual e políticas podem variar por configuração, mantendo o mesmo produto versionado. Unidade de medida e fuso serão explicitados; alterações não apagarão contexto de resultados anteriores. Fluxos e isolamento: **NÃO EXECUTADOS**; validar em homologação com aluno sintético. Sem alteração de código ou banco nesta revisão.
