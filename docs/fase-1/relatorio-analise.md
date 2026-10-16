# Fase 1 — Análise funcional documental

Pesquisa anterior: 14/10/2026. Consolidação documental: 16/10/2026. Status: levantamento e propostas; aplicação não implementada nesta fase.

## Objetivo e escopo

Estudar problemas e fluxos públicos do Next Fit como referência para um sistema original de gestão de boxes. O projeto pretende atender alunos, professores e gestores, com possível comercialização por assinatura, implantação personalizada ou licenciamento.

Esta consolidação usa o relatório entregue na conversa anterior. Não reexecuta a pesquisa nem certifica o comportamento atual do fornecedor. Fontes precisas, classificação e limitações estão em [fontes.md](fontes.md); requisitos em [matriz-funcionalidades.md](matriz-funcionalidades.md); jornadas em [fluxos.md](fluxos.md).

## Participação dos agentes registrada na conversa

| Tipo | Tarefa relatada |
|---|---|
| engenharia_reversa | Pesquisa pública, evidências e fluxos |
| especialista_crossfit | Requisitos esportivos e critérios de comparação |
| arquiteto | Módulos, modelo conceitual e arquitetura |
| desenvolvedor | Backlog com dependências e prioridades |
| auditor | Limites de evidência, autorização e originalidade |

A conversa registrou delegações reais por `agent_type`. Este documento preserva esse registro histórico; não constitui nova sondagem de acesso MCP nem execução desses agentes em 14/10.

## Conclusões

A documentação pública sustenta referências de cadastro, agenda, capacidade, reservas, espera, WOD, movimentos, benchmarks, resultados, evolução, contratos e perfis. Existem anúncios comerciais complementares. Isso não demonstra segurança, desempenho, isolamento de clientes ou correção dos algoritmos do fornecedor.

O sistema próprio deve distinguir reserva, presença e resultado; preservar a versão da prescrição; comparar apenas desempenhos compatíveis; limitar exposição de rankings; e autorizar operações por tenant e papel. Esses são requisitos próprios, não afirmações sobre a implementação do Next Fit.

## Proposta técnica preliminar — P

Frontend responsivo React/TypeScript; GitHub para histórico e revisão; Cloudflare Pages como candidato à hospedagem; Supabase Auth/Postgres/RLS para identidade e dados. São decisões preliminares documentais, sem recursos criados ou configuração de produção nesta fase. Ver documentação arquitetural da Fase 2 para decisões vigentes.

Módulos iniciais: identidade/vínculos; alunos; agenda; reservas/presença; WOD/prescrições; resultados/PRs; acompanhamento; administração. Modelo conceitual inicial: boxes, memberships, students, class_sessions, bookings, attendance_records, workout_versions e workout_results. O isolamento multi-box exige validação no banco, não apenas filtro visual.

## Plano inicial

1. Fechar regras de negócio, papéis, privacidade e escopo do MVP.
2. Estabelecer repositório, documentação, versionamento e CI sem publicação automática.
3. Modelar tenants e autorização antes de desenvolver operações de domínio.
4. Implementar cadastro, agenda e reserva transacional.
5. Implementar presença, WOD versionado, resultados e PRs comparáveis.
6. Acrescentar espera, ranking, indicadores e financeiro conforme prioridades.
7. Auditar acesso, concorrência, privacidade e regressões antes de qualquer implantação autorizada.

## Testes e evidências

O relatório anterior registrou leitura pública, participação dos agentes e revisão documental. Não foram executados testes runtime do Next Fit, testes da aplicação própria, banco, RLS, concorrência, build ou implantação. Não há código da aplicação presumido como existente na pasta.

Na consolidação de 16/10, a verificação documental deve conferir links internos, consistência de classificações e ausência de alegações de testes inexistentes. Resultados da auditoria da Fase 2 devem ser registrados separadamente pelo auditor.

## Segurança e originalidade

Nenhum login privado, bypass, endpoint privado, análise invasiva ou coleta de dados reais foi necessário. Nenhum código, mídia, marca ou layout do Next Fit integra estes documentos. REA não foi necessário à pesquisa documental. Investigações futuras exigem escopo legítimo e relato de evidências, erros e limites.

## Pendências

Confirmar fronteiras entre box/rede/unidade, elegibilidade do WOD, faltas, promoção de fila, privacidade de rankings, correção de resultados, financeiro e ambientes. Não há estimativa comercial validada, parecer jurídico, garantia de conformidade ou produto pronto para venda decorrente desta fase.
