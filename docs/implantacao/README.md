# Instalações independentes

Revisão documental 0.2, 2026-10-16. Decisão aprovada: um código-base central; cada box e ambiente têm projeto Supabase e implantação Cloudflare próprios. A proposta de banco multi-tenant compartilhado está superada pela [ADR-009](../arquitetura/adr-009-instalacoes-independentes.md). O histórico anterior permanece no Git. Nenhuma infraestrutura, build, migração ou restauração foi executada.

- [Checklist de novo box e reprodução](checklist-novo-box.md)
- [Distribuição, atualização, backup e rollback](distribuicao-atualizacao-rollback.md)
- [Política permanente](../desenvolvimento/politica-documentacao.md)

Instalação dedicada é o padrão aprovado. Regiões, custos, retenção, RPO/RTO e responsabilidade operacional são pendentes contratuais. Recursos de backup dependem do plano contratado e precisam ser verificados antes de qualquer promessa. Um backup do banco não cobre automaticamente os objetos do Storage: [documentação oficial](https://supabase.com/docs/guides/platform/backups).

Exportação e encerramento: validar solicitante e instalação; gerar exportação versionada e manifesto de arquivos em canal protegido fora do Git; revogar integrações e sessões conforme procedimento validado; tratar retenção e eliminação autorizadas, incluindo backups. Não há dados de outros clientes no mesmo projeto por desenho. Não assumir que isso elimina riscos de credenciais trocadas ou permissões internas incorretas.

Não conectar Pages ao GitHub, ativar workflows ou provisionar recursos nesta fase. O push documental autorizado não autoriza deploy ou migração. A [integração Git do Pages](https://developers.cloudflare.com/pages/configuration/git-integration/) será avaliada em fase autorizada. Todas as instruções operacionais abaixo são planos, sem comandos de aplicação disponíveis.
