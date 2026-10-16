# Instalação, atualização e replicação

Data: 2026-10-16. Versão documental: 0.1. **Runbook proposto, ainda não executável:** não existe aplicação, build ou migração nesta entrega. Não foi feita implantação, restauração, conexão Cloudflare ou alteração Supabase.

## Preparação e instalação futura

1. Escolher versão revisada do código no repositório correto; URL é registrada somente após confirmação pelo proprietário.
2. Inventariar versões de runtime, gerenciador, CLI e lockfile quando a aplicação existir. Hoje não há comandos de instalação definidos.
3. Provisionar ambientes separados mediante autorização. Guardar segredos no mecanismo apropriado de cada ambiente; frontend recebe apenas configuração pública necessária.
4. Instalar dependências fixadas, aplicar esquema revisado em ambiente descartável e carregar apenas dados sintéticos.
5. Executar testes de permissões, agenda, esporte, build e restauração. Registrar versão, resultado, responsável e evidências sanitizadas.
6. Planejar cutover, suporte, backup, rollback/roll-forward e aprovação explícita antes de produção.

## Replicar para novo box

Registrar configuração do tenant: nome comercial autorizado, fuso, modalidades, capacidade, janelas, papéis, privacidade e prescrição. Criar vínculo inicial do proprietário por fluxo seguro, sem senha padrão compartilhada. Validar isolamento em relação a box de teste anterior, exportação limitada e desligamento. Personalizações devem usar configuração versionada; recurso exclusivo entra no código comum com decisão de produto ou em extensão documentada.

Instância dedicada, se contratada futuramente, necessita inventário próprio de infraestrutura, região, domínio, segredos, custos, observabilidade, backups e ciclo de atualização. Nenhuma conta ou projeto foi criado nesta fase.

## Atualização e manutenção

Vincular release a requisitos, ADRs, commits, mudanças de esquema e testes. Ensaiar atualização da versão anterior em homologação, incluindo múltiplos boxes. Preferir evolução compatível de esquema; rollback de frontend não reverte automaticamente dados/migrações. Se a reversão for insegura, registrar plano de correção progressiva e janela aprovada.

Manter inventário de dependências, revisar vulnerabilidades, expiração de integrações e custos; responsáveis e cadência serão definidos antes da operação. Logs devem minimizar dados, permitir diagnóstico e evitar credenciais. Incidente exige contenção de acesso, avaliação de tenants afetados, preservação de evidências sanitizadas e comunicação autorizada pelo responsável.

## Backup e restauração

Definir RPO/RTO, retenção, responsável, armazenamento protegido e teste de recuperação antes de contratar promessas operacionais. A documentação Supabase informa que backups do banco não incluem objetos armazenados via Storage API. Logo, o plano precisa considerar dados, arquivos e configuração separadamente. Cobertura e retenção dependem do plano contratado; não há plano escolhido aqui. [Fonte oficial de backups](https://supabase.com/docs/guides/platform/backups).

Ensaio futuro: restaurar em ambiente isolado; verificar contagens, relacionamentos, políticas, referências de arquivos e login de usuários sintéticos; medir tempos e perda potencial; registrar falhas. Nenhum ensaio foi realizado. Dump completo não é mecanismo de exportação de um box em banco compartilhado.

## Exportação e encerramento de cliente

Validar solicitante e tenant; exportar somente escopo autorizado, com formato/versionamento e manifesto de arquivos; conferir integridade e ausência de outros boxes. Entregar por canal protegido fora do Git. Planejar suspensão de integrações e sessões, tratamento de usuários que participam de outros boxes, retenção aplicável e eliminação/anonimização autorizada. Prazos e responsabilidades dependem de decisão comercial e revisão jurídica; não são compromissos assumidos neste documento. Retenção de backups precisa ser comunicada e tratada no processo.

## Bloqueio de publicação nesta fase

Não conectar Pages ao GitHub nem ativar workflows de deploy. A [integração Git do Pages](https://developers.cloudflare.com/pages/configuration/git-integration/) pode acionar deploys; quando aprovada futuramente, revisar controles de produção e preview antes de conectar. Nesta fase só o envio da branch documental explicitamente solicitado está autorizado.

Fontes oficiais consultadas em 2026-10-16. Testes de instalação, atualização, replicação e recuperação: **pendentes por inexistência da aplicação e dos ambientes**.
