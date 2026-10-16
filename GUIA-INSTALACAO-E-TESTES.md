# Guia de instalação e validação — Codex CLI

## Antes de começar
Este pacote preserva os cinco papéis do projeto original e adiciona a ativação `multi_agent = true`. A configuração não garante que todas as interfaces do Codex exponham `agent_type`. A extensão VS Code e o CLI podem disponibilizar ferramentas diferentes. Não confundir nome da tarefa com tipo do agente.

## Instalação
1. Faça backup da pasta atual antes de substituir arquivos.
2. Extraia este ZIP e abra a pasta interna `crossfit-codex-agentes` no VS Code.
3. Abra **Terminal > New Terminal** (PowerShell), confira que está na raiz do projeto.
4. Execute `codex.cmd --version` e `codex.cmd features list | Select-String "multi_agent"`.
5. Execute `codex.cmd` e inicie uma conversa nova.

## Teste 1 — inspeção, sem delegação
Peça ao Codex: "Inspecione a assinatura REAL de collaboration.spawn_agent nesta sessão. Informe se existe agent_type e quais valores aceita. Não inicie agentes nem altere arquivos. Não infira a assinatura a partir do config.toml." 

## Teste 2 — se agent_type existir
Peça: "Use collaboration.spawn_agent com agent_type=auditor para revisar AGENTS.md em modo somente leitura. Mostre argumentos efetivamente enviados, ID retornado, conclusão e evidências de instruções personalizadas. Não altere arquivos."

## Teste 3 — equipe
Somente depois de validar o teste 2, solicite a delegação explícita para cada um dos cinco tipos e recolha evidências por agente. Se a assinatura mudar, interrompa e registre o bloqueio.

## Se agent_type não existir
Não há como forçar a ferramenta a aceitar esse parâmetro editando TOML. Use uma sessão que exponha os tipos ou trabalhe sequencialmente com os documentos `agents/*.md` (modo manual, **não** agentes personalizados nativos). Para isolar o problema, compare CLI e extensão e relate a versão, a interface e os parâmetros reais. Não habilite recursos experimentais sem necessidade.

## Verificação de resultados
Uma delegação só é comprovada por chamada real, tipo efetivamente selecionado, identificador de execução e resultado. Configuração presente no disco, nomes exibidos ou instruções copiadas manualmente não bastam.

## Cuidados
Não cole credenciais nem execute deploy ou alterações de produção nos testes. A validação neste pacote é estática: não foi possível executar seu Codex local a partir daqui.
