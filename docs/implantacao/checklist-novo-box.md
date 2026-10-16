# Checklist de implantação de novo box

Plano documental; todas as caixas estão pendentes. NÃO EXECUTADO. Sem autorização para criar projetos, aplicar migrações ou implantar nesta fase.

## Preparação e provisionamento futuro

- [ ] Aprovar responsável, contrato/licença, versão, custos, região, domínio, RPO/RTO e escopo de suporte.
- [ ] Registrar instalação e ambientes; projeto Supabase e implantação Cloudflare exclusivos por box/ambiente. Não usar produção para preview ou homologação.
- [ ] Fixar tag, SHA completo, digests, dependências e matriz de compatibilidade conforme [distribuição](distribuicao-atualizacao-rollback.md).
- [ ] Autorizar provisionamento específico e guardar credenciais em cofre; conceder menor privilégio e acesso operacional temporário/auditável.
- [ ] Validar configuração pública, marca autorizada, fuso, políticas, URLs de Auth, origem e projeto corretos. Rejeitar configuração ausente/trocada antes do build.
- [ ] Aplicar migrações futuras em ordem e conferir checksums; seed sintético exclusivamente em testes.
- [ ] Criar proprietário por convite/fluxo seguro, sem senha padrão. Confirmar papéis e ausência de autoelevação.
- [ ] Validar backup de banco, Storage, Auth/configuração e recuperação em destino isolado; registrar cobertura e lacunas.
- [ ] Executar testes autorizados, documentar resultados e obter aceite antes de qualquer produção.

## Reprodução do zero em testes

Preparar duas instalações sintéticas A/B com recursos independentes e homologação separada de cada uma. Versão fonte idêntica, configurações e identidades próprias. Não usar dados reais. Nenhum destes recursos foi criado.

| Caso | Critério de aceite futuro | Estado |
|---|---|---|
| Instalação limpa A/B | Mesma fonte e migrations reproduzem esquema previsto sem edição manual; inventário/digests registrados | NÃO EXECUTADO |
| Configuração inválida | Build recusa endpoint/domínio/projeto incompatível e segredo no contrato público | NÃO EXECUTADO |
| Identidade cruzada | Token A falha nos endpoints B e vice-versa, mesmo com UUID igual; validar emissor/audiência e credenciais independentes | NÃO EXECUTADO |
| Papéis internos | Aluno só acessa escopo autorizado; professor/gestor/recepção limitados; usuário anônimo/revogado negado | NÃO EXECUTADO |
| API direta | RLS e grants protegem SELECT/INSERT/UPDATE/DELETE, Storage e RPC sem depender da UI; impedir autoelevação | NÃO EXECUTADO |
| Ambiente cruzado | Homologação não lê/escreve produção; preview não recebe segredo nem endpoint de produção | NÃO EXECUTADO |
| Operação esportiva | Reserva concorrente, presença separada, WOD versionado, PR e ranking preservam regras do box | NÃO EXECUTADO |
| Atualização | N-1 para N preserva dados sintéticos e compatibilidade documentada | NÃO EXECUTADO |
| Reversão | App anterior funciona só no esquema permitido; caso incompatível bloqueia e orienta forward-fix | NÃO EXECUTADO |
| Recuperação | Restaurar banco/arquivos/identidades/configuração em destino isolado, validar integridade e medir RPO/RTO | NÃO EXECUTADO |
| Repetição | Recriar instalação descartável do zero com manifesto, sem credenciais ou passos ocultos | NÃO EXECUTADO |

Guardar ambiente, comando/procedimento real, versão, data, executor, resultado, erro/correção/reteste e evidência sanitizada em docs/testes. Falta de aplicação ou infraestrutura mantém caso NÃO EXECUTADO; não converter checklist em prova de segurança.

Aceite adicional RF-CF-14: executar a mesma release nas instalações sintéticas A/B com unidades, fusos e janelas distintos; confirmar efeito apenas na configuração local e preservação de prescrição/resultados históricos. Estado: NÃO EXECUTADO. Referência: [regras CrossFit](../fase-1/regras-crossfit.md).
