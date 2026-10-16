# Gestor — fluxo proposto

Data: 16/10/2026. Versão documental: 0.2 — Fase 3. **Rascunho; aplicação e passos de interface ainda não implementados ou testados.**

## Preparar o box

O gestor deverá definir modalidades, turmas, capacidade, responsáveis, fuso horário e políticas de participação. Convites e papéis deverão conceder somente as atribuições necessárias e estar vinculados ao box correto.

Antes da operação, aprovar elegibilidade para WOD/reservas, cancelamento, no-show, espera, comprovação de presença, edição de resultados e visibilidade dos rankings. Configuração de um cliente não deverá alterar outro box.

## Acompanhar a operação

Indicadores propostos incluem ocupação, reservas, presenças e evolução esportiva. Relatórios de frequência deverão informar período e denominador; faltas não poderão ser inferidas de turmas canceladas. Acesso financeiro e notas individuais dependerá de autorização específica.

## Implantação e manutenção

Cada implantação futura deverá registrar configurações, versão, responsável, testes de isolamento entre instalações e autorização entre papéis locais, treinamento e procedimento de atualização/recuperação. Personalizações exigirão documentação do impacto em migrações, manutenção e replicação para outros clientes.

Este manual não autoriza cobrança, publicação, migração ou alteração de produção. Plano comercial, suporte, retenção/exportação de dados e responsabilidades contratuais permanecem pendentes de definição. Antes da liberação, validar os fluxos com dados fictícios e registrar evidências.


## Revisão Fase 3 — instalação independente

A [ADR-009](../arquitetura/adr-009-instalacoes-independentes.md) estabelece projeto Supabase e implantação Cloudflare próprios por box, separados também por ambiente. Gestor usa a URL e autenticação da instalação; não gerencia outros clientes por seletor compartilhado.

Identidade visual autorizada, fuso, unidades, modalidades e políticas serão configurações versionadas separadas do código. Personalização não cria fork permanente. Cada atualização deve registrar release central, versão do esquema, configurações, backup/restauração, compatibilidade e plano de rollback; não executar atualização sem autorização e evidências de homologação. Backup, restauração e reprodução do zero são requisitos planejados, **NÃO EXECUTADOS** aqui. O acesso de suporte deve ser específico, limitado e auditável; não pressupõe conta administrativa universal.

Checklist operacional proposto: confirmar URL/cliente/ambiente; revisar branding e políticas; cadastrar papéis mínimos; validar reserva, presença, WOD/PR e privacidade com dados sintéticos; registrar treinamento e suporte; aprovar liberação somente após testes técnicos e restauração. Dados reais e contas sintéticas não devem ser misturados. Sem alteração de código ou banco nesta revisão.
