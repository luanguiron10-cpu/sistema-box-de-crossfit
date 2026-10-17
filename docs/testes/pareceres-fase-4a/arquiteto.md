# Parecer independente — Arquiteto — Fase 4A

Data: 17/10/2026. Execução real `fase4a_arquiteto`, tipo `arquiteto`. Dono deste parecer e do [plano arquitetural](../../arquitetura/fase-4a-frontend.md); não implementou os arquivos de aplicação revisados. Não realizou mutações Git ou infraestrutura.

## Trabalho efetivamente realizado

Leu AGENTS.md, agents/arquiteto.md, ADR-009, backlog vigente, modelo de funcionalidade, relatório Fase 1, histórico Fase 2 e auditoria Fase 3. Redigiu plano, caminhos, contratos e aceites antes da implementação; coordenador aprovou e encaminhou ao desenvolvedor. Consultou documentação oficial Vite, Vitest e typescript-eslint e registry público via web; distinguiu versão latest de compatibilidade. Consulta HTTP PowerShell ao registry foi bloqueada por restrição de rede; instalação e consulta npm completa ficaram com desenvolvedor/coordenador.

Revisou diretamente package.json, tsconfig, Vite, configuração/tipos, App/Provider/Routes/Layout, páginas e componentes de dashboard/alunos/turmas/WOD/resultados/configurações e os testes App/config. A versão observada do pacote é 0.3.0, Node requerido >=24.15 <25 e npm11, React19.3.1, Router7.18.4, Vite8.3.4, Vitest5.0.5, TypeScript5.9.3 e ESLint9.39.5. Metadados e resultados npm finais devem ser conferidos na evidência do desenvolvedor; este parecer não certifica independentemente a resolução completa de dependências.

## Conclusão da revisão estática

**Favorável à fundação demonstrativa, condicionada aos testes e auditoria final registrados pelos responsáveis.** A ADR-009 permanece preservada: fonte comum e JSON público por instalação, sem selector de tenant/backend, sem SDK, Auth ou persistência real. Rotas/links respeitam flags, erro de configuração bloqueia a UI, branding permite logo local validado e versão vem do pacote. Nenhum novo modelo de isolamento foi inventado.

Separação app/components/features/config/data é proporcional ao escopo; sem serviços fictícios. Páginas de turmas/WOD/resultados foram extraídas dos alunos após apontamento. Há landmarks, skip link, foco no título por rota, labels e menu com estado/Escape; código estático não prova funcionamento responsivo ou conformidade WCAG.

## Achados, correções e riscos

| Achado comunicado ao coordenador | Situação observada |
|---|---|
| Logo restrita a duas constantes exigiria alterar TS para novo cliente | CORRIGIDO: string com validação de caminho local seguro; teste aceita novo asset e rejeita URL/data/traversal/query |
| Escape duplo inserido na regex de logo durante geração | CORRIGIDO na releitura: regex de caminho local válida; typecheck deve confirmar conjunto |
| Classes/WOD/resultados estavam hospedados em StudentPages | CORRIGIDO: páginas nos módulos respectivos; fallback 404 ainda junto de alunos é pequena dívida organizacional |
| Flags não são autorização | Documentado; guards limitam exposição demo, não substituem controles backend futuros |

Riscos residuais: fixtures têm datas fixas e frequências ilustrativas; config de fuso não converte agenda real; novas cores exigem revisar contraste além do par branco/acento; novos SVGs devem ser próprios/autorizados e revisados; navegador/servidor devem suportar fallback SPA para deep links. Acesso por papel, RLS, recuperação e isolamento entre projetos não existem nesta entrega. G01 fica parcial quanto ao escopo integral do backlog; G02–G15 não são concluídos por estes mocks.

## Evidências e limites dos testes

Este arquiteto executou leituras e pesquisa oficial; **não executou lint, typecheck, testes automatizados, build ou navegador**. Não os registra como PASSOU. Testes escritos foram inspecionados: navegação/foco, alternância demo, vazio, config A/B, rota desabilitada, prévia transitória, menu/Escape, erro/recuperação e error boundary; configuração cobre caminhos/cores/fuso/unidades/flags. Evidência runtime pertence ao relatório final e ao auditor, que devem informar comandos, falhas/retestes e limitações.

Não foram executados Auth/RLS, reserva concorrente, banco, backup/restauração, deploy ou dispositivos Android/iOS reais. Não há autorização neste parecer para produção, merge ou release. Envio da branch é o autorizado pelo proprietário, após as verificações finais.
