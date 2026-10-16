# Critérios de reprodução de uma instalação independente

Estado: plano de testes, NÃO EXECUTADO. Fase 3, 16/10/2026. Não autoriza criar infraestrutura, executar migrations ou usar produção.

## Preparação e evidências

Em etapa futura expressamente autorizada, usar duas instalações sintéticas A e B, cada uma com projeto Supabase e implantação Cloudflare exclusivos; separar também teste/homologação/produção. Registrar release/commit central, versão de schema, versão do contrato de configuração, inventário de artefatos e executor, sem credenciais ou dados reais. Nenhum fork permanente por cliente.

## Reprodução do zero

1. Partir de recursos de teste vazios; conferir titularidade, ambiente, projeto, domínio e inventário antes de qualquer escrita.
2. Obter release imutável do código central e conferir integridade; aplicar configuração pública própria e segredos por canal protegido. Recusar chaves privilegiadas em bundle, logs e manifesto versionado.
3. Aplicar migrations versionadas na ordem prevista; registrar versões/checksums e divergências. Sem correções manuais invisíveis.
4. Carregar seed exclusivamente sintético, identificado e repetível; bootstrap inicial do proprietário sem senha fixa no repositório.
5. Configurar autenticação, URLs de retorno, papéis, grants, RLS, Storage e serviços auxiliares conforme runbook da release.
6. Implantar somente em teste e executar a matriz abaixo; registrar resultado individual, evidências sanitizadas e limitações.
7. Recriar do zero e obter as mesmas versões, estrutura e comportamento esperado. IDs/horários aleatórios não precisam ser idênticos.
8. Ensaiar atualização da versão anterior suportada, recuperação e rollback; documentar incompatibilidades e janela operacional.

## Matriz de aceite futura

| ID | Teste | Resultado exigido | Estado |
|---|---|---|---|
| R01 | Instalações A e B e seus ambientes | Recursos distintos, configuração e manifestos próprios; nenhum banco/Storage compartilhado | NÃO EXECUTADO |
| R02 | Vinculação frontend/backend | A aponta exclusivamente para A; validação detecta ligação acidental A→B antes de liberar uso | NÃO EXECUTADO |
| R03 | Token de A contra API/Storage de B | Rejeitado; nenhum dado ou metadado privado de B visível | NÃO EXECUTADO |
| R04 | Identidade semelhante nas duas instalações | Mesmo e-mail sintético não concede vínculo, papel ou acesso na outra instalação | NÃO EXECUTADO |
| R05 | Papéis proprietário/gestor/professor/recepção/aluno | Matriz permite operações autorizadas e nega autoelevação, alteração de dono e acesso indevido | NÃO EXECUTADO |
| R06 | API direta, views, funções e Storage | Proteções independem de UI; grants e RLS revisados; funções privilegiadas justificadas e restritas | NÃO EXECUTADO |
| R07 | Revogação com JWT existente | Nova operação sensível negada pela consulta corrente do perfil/papel revogado, mesmo com JWT anterior; medir latência e invalidação de sessões separadamente | NÃO EXECUTADO |
| R08 | Configuração visual e esportiva A/B | Identidades próprias e regras isoladas, sem fork nem mudança arbitrária do schema | NÃO EXECUTADO |
| R09 | Seed e migrations | Apenas dados sintéticos; replay limpo e atualização suportada sem perda | NÃO EXECUTADO |
| R10 | Reservas/presença/resultados/PR/ranking | Concorrência, idempotência e comparabilidade conforme critérios do backlog | NÃO EXECUTADO |
| R11 | Backup/restauração | Restaurar banco, Auth, objetos Storage e configuração conforme inventário; verificar login e integridade sem depender de backup SQL isolado | NÃO EXECUTADO |
| R12 | Atualização e rollback | Compatibilidade app/schema/config demonstrada; rollback de app não implica reversão segura de schema; recuperação com RPO/RTO medidos | NÃO EXECUTADO |
| R13 | Drift e manutenção | Detectar versão divergente e mudanças fora da release; bloquear atualização incompatível | NÃO EXECUTADO |
| R14 | Segredos e logs | Nenhuma chave privilegiada em bundle/repositório/logs; rotação e acesso operacional documentados | NÃO EXECUTADO |

## Condição de conclusão

Instalação reproduzível exige todos os testes aplicáveis executados, falhas corrigidas e retestadas, documentação atualizada e aprovação do responsável. Teste indisponível permanece BLOQUEADO/NÃO EXECUTADO. RPO, RTO, janela de manutenção, política de retenção, cobertura real dos backups contratados e SLA de revogação ainda precisam de definição e medição. Backup/restauração não deve ser anunciado como garantido antes do ensaio.
