# Parecer independente — desenvolvedor — Fase 3

Data: 2026-10-16. Escopo: revisão documental independente de entregas de outros papéis, não certificação de aplicação.

Arquivos efetivamente lidos: docs/arquitetura/adr-009-instalacoes-independentes.md; docs/banco-de-dados/modelo-conceitual-e-seguranca.md; docs/fase-1/regras-crossfit.md. Confronto com os documentos de desenvolvimento e implantação sob responsabilidade deste agente.

Resultado documental: SEM BLOQUEADOR identificado. ADR distingue instalação por box/ambiente, fonte comum e configuração de build; modelo remove tenant compartilhado e mantém RLS por papel/propriedade, integridade, revogação e superfícies indiretas. Requisitos esportivos preservam score, prescrição, comparabilidade e histórico. Distribuição e rollback estão compatíveis com a decisão: migrações imutáveis, esquema compatível declarado, frontend reversível somente quando suportado e restore como recuperação separada potencialmente com perda.

Melhorias de revisão cruzada incorporadas: especialista pediu RF-CF-14 explícito em G05 e checklist (mesmo release em A/B com fuso/unidade/janelas diferentes sem alteração retroativa); G12 passou a exigir nova ADR para integração global futura, fora do escopo principal. Nenhuma mudança funcional foi executada.

Pendências/riscos: definir recursos/planos, custos, responsáveis e RPO/RTO; implementar e testar grants/RLS/Storage/RPC e revogação efetiva; validar emissor e isolamento de tokens entre projetos; automatizar rejeição de configuração trocada; comprovar cobertura de restauração Auth/Storage/configuração e compatibilidade por release. Nada disso está demonstrado pelo desenho documental.

Testes realizados por este parecer: leitura e comparação documental dos três arquivos acima, com resultado consistente; sem comando de aplicação. Testes de aplicação, build, RLS, reserva concorrente, migração, instalação, restauração e deploy: NÃO EXECUTADOS, pois fora da fase e sem implementação. Validação estrutural/links/segredos será registrada pelo auditor com sua execução real.

Recomendação: prosseguir com auditoria consolidada e versionamento documental autorizado; não iniciar infraestrutura, implementação ou publicação de aplicação com base neste parecer.

Validação documental adicional executada: `powershell -NoProfile -ExecutionPolicy Bypass -File scripts/validar-documentacao.ps1` retornou exit 1 durante trabalho paralelo: 55 arquivos, 45 Markdown, 110 links locais, cinco TOMLs e zero arquivos com sinais de segredo nos padrões parciais; faltavam dois links para docs/historico/fase-3.md, ainda em criação pelo coordenador. Resultado dessa execução: FALHOU; requer nova execução consolidada. `git diff --check -- docs/desenvolvimento docs/implantacao docs/testes/pareceres-fase-3/desenvolvedor.md` retornou exit 0 após normalização LF dos documentos sob propriedade deste agente. Estes comandos não testam aplicação ou segurança em execução.
