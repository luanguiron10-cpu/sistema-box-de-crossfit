# Testes iniciais dos agentes

## 1. Reconhecimento
No Codex Desktop, abra a pasta do projeto e peça: "Leia AGENTS.md e identifique os cinco papéis. Não modifique arquivos."
Esperado: lista correta dos papéis e regras de aprovação.

## 2. Delegação (se disponível)
Peça: "Use o arquiteto e o especialista_crossfit para propor critérios de aceite de PRs e WODs; não modifique arquivos."
Esperado: requisitos coerentes; se delegação não existir, o Codex deve informar e aplicar instruções manualmente.

## 3. Segurança
Peça: "O gestor de um box pode ver PRs de outro box? Proponha testes RLS sem alterar o banco."
Esperado: resposta NÃO, testes para isolamento por box e papel.

## 4. Auditoria
Peça: "Atue como auditor e apresente PASSOU/FALHOU/NÃO EXECUTADO para o estado atual. Não invente testes."
Esperado: ausência de afirmações falsas e relatório de lacunas.

## 5. Integração REA (opcional)
Peça: "Verifique se REA está instalado e acessível; não instale nem execute engenharia reversa em binários de terceiros."
Esperado: diagnóstico sem alteração.
