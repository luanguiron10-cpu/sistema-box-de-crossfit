# Fase 4A — navegação original e acessibilidade

Responsável: agente `engenharia_reversa`. Revisão documental em 17/10/2026. Versão: fundação 0.1.0, sem produto operacional. Escopo: frontend demonstrativo local; sem autenticação, backend ou persistência.

## Objetivo e rastreabilidade

Traduzir problemas funcionais da [matriz da Fase 1](../fase-1/matriz-funcionalidades.md) em navegação própria. F01/F03/F05/F06/F09 fundamentam os módulos ilustrativos de alunos, turmas, WOD, resultados e acompanhamento; F13 mantém reserva distinta de presença. F15/F16 seguem a [ADR-009](../arquitetura/adr-009-instalacoes-independentes.md). Não existe seletor global de cliente.

## Fontes e classificação

- **D:** matriz local da Fase 1 lida nesta execução. As referências Next Fit ali registradas não foram novamente consultadas nesta tarefa; D histórico não equivale a comportamento testado.
- **D:** [WAI APG — Disclosure Navigation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/), consultado em 17/10/2026: links em região de navegação e botão expansor permitem navegação usual sem semântica de menu aplicativo; estado expandido e foco precisam permanecer coerentes.
- **D:** [WAI — Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), consultado em 17/10/2026: critério 2.5.8 prevê 24 por 24 CSS px, com exceções; maior área beneficia uso por toque.
- **P:** organização visual, rotas e decisões abaixo são propostas originais. Nenhum CSS, componente, ativo ou código dessas fontes foi copiado.
- **H:** conformidade completa WCAG e usabilidade em dispositivos físicos exigem testes específicos; não são certificadas por esta pesquisa.

## Mapa proposto

| Tela | Pergunta principal | Conteúdo demonstrativo | Aceite |
|---|---|---|---|
| Início | O que posso explorar? | Box local, aviso, links por experiência | Identificar demonstração antes de navegar |
| Gestor | Como está a operação? | Indicadores ilustrativos e atalhos | Números identificados como sintéticos |
| Professor | O que conduzirei? | Turmas, WOD e participantes fictícios | Reserva, presença e resultado não confundidos |
| Aluno | Qual meu próximo treino? | Agenda ilustrativa, WOD, PRs e histórico | Não afirmar reserva/presença realizadas |
| Configurações | Como esta instalação aparece? | Nome, cores, unidades e prévia | Mudanças temporárias, sem promessa de gravação |

Módulos de alunos, turmas, WOD e resultados podem ter rotas próprias ou atalhos coerentes. Recursos sem implementação devem explicar o estado futuro; evitar botão aparentemente funcional que silenciosamente nada faz.

## Interação e critérios verificáveis

1. Navegação com links, rótulos textuais e `aria-current`; título principal único por tela e link para pular ao conteúdo.
2. Menu mobile acionado por botão com nome, `aria-expanded` e relação ao conteúdo controlado. Escape fecha e devolve foco quando aplicável; links ocultos não participam do Tab. Não usar `role=menu` em navegação comum.
3. Alternância de perfil é rotulada como visualização demonstrativa. Não se apresenta como login, autorização ou sessão. Acesso direto à rota não implica privilégio.
4. Aviso de dados sintéticos e ausência de persistência permanece disponível em todas as telas. Evitar textos como “reserva confirmada” ou “salvo com sucesso”.
5. Cartões/grids devem aceitar largura reduzida e nomes longos. Validar ausência de overflow em 320/375/768/1280 CSS px; não basta a presença de media queries.
6. Controles principais preferencialmente com 44 CSS px, foco visível, nomes acessíveis e operação por teclado. Cores não são a única forma de comunicar estado.
7. Vazio descreve ausência de dados demonstrativos e próximo passo apropriado; 404 oferece retorno. Erros de formulário precisam associar mensagem ao campo.

## Segurança e privacidade

Apenas configuração pública e dados sintéticos. Nome/cor não selecionam backend arbitrário. Comparação A/B significa configurações locais de instalações distintas sobre o mesmo código, não autenticação compartilhada. Não foram usadas áreas privadas, endpoints do fornecedor, REA ou credenciais.

## Verificação, operação e histórico

A leitura de documentos e das duas fontes públicas foi executada. A inspeção inicial de `src` encontrou diretório ainda inexistente; isso é estado inicial, não falha de aplicação. Testes de navegação, foco, responsividade, contraste e leitor de tela ainda **NÃO EXECUTADOS por este agente** neste registro; evidências posteriores ficam no [parecer](../testes/pareceres-fase-4a/engenharia_reversa.md).

Nenhum código/banco foi alterado por este agente. Instalação, atualização e rollback da aplicação são responsabilidade dos registros de desenvolvimento da Fase 4A. Esta proposta não exige migração; revisão documental pode ser revertida por commit usual, preservando histórico. Na replicação, os mesmos rótulos de demonstração e limites devem valer para A/B. Histórico: 17/10/2026, primeira proposta e referências públicas consultadas.
