# FUNC-000 — Título

Status: PROPOSTO. Responsável: a definir. Versão proposta: a definir.

## 1. Objetivo e requisitos

Problema, atores, escopo, exclusões e critérios de aceite verificáveis. Classificar cada requisito como confirmado em fonte, hipótese ou proposta própria; citar fonte quando houver.

## 2. Arquitetura e decisões

Módulos, contratos, alternativas, autorização e links para decisões.

## 3. Código e banco

Arquivos e migrações planejados versus efetivamente alterados. RLS por papel, titularidade e atribuição dentro da instalação independente, compatibilidade e impacto nos dados. Estado inicial: NÃO IMPLEMENTADO.

## 4. Testes e resultados

| Caso/critério | Ambiente e comando | Data | Resultado | Evidência |
|---|---|---|---|---|
| A definir | A definir | — | NÃO EXECUTADO | — |

Cobrir fluxo principal, erros, autorização e isolamento quando aplicáveis. Não inserir credenciais ou dados reais.

## 5. Erros e correções

Estado inicial: nenhuma execução realizada; erros ainda não avaliados. Registrar reprodução, causa, correção e reteste, sem afirmar ausência de defeitos.

## 6. Instalação e atualização

Pré-requisitos, configuração sem valores secretos, sequência, compatibilidade e recuperação. Estado inicial: procedimento ainda não validado.

## 7. Replicação para boxes

Configuração por cliente, isolamento, personalizações suportadas e testes entre duas instalações sintéticas independentes A/B, incluindo separação entre ambientes de teste e produção.

## 8. Versão e histórico

| Versão | Data | Mudança | Referência |
|---|---|---|---|
| A definir | — | Proposta inicial | — |

## Revisão de conclusão

Critérios atendidos: pendente. Testes adequados: pendente. Documentação completa: pendente. Auditor: pendente. Riscos residuais: a avaliar. Publicação: não autorizada por este modelo.

## Complemento obrigatório Fase 3

Referenciar [ADR-009](../arquitetura/adr-009-instalacoes-independentes.md). Os itens 3 e 7 foram revisados diretamente para controle por papel/titularidade dentro da instalação e testes entre instalações sintéticas A/B. Não desenhar banco compartilhado entre clientes; homologação permanece isolada de produção.

Identificação da entrega: instalação sintética/ambiente; tag e SHA; digests de fonte/artefato/configuração pública; esquema e migrations/checksums; contrato de configuração; responsável; compatibilidade anterior/nova. Preencher sem segredos e sem identificadores pessoais reais. Itens 1–8 devem cobrir também atualização, erro de configuração, backup/restauração e rollback de aplicação versus recuperação do banco. Estado inicial de todos os testes operacionais: NÃO EXECUTADO. Ver [checklist](../implantacao/checklist-novo-box.md).
