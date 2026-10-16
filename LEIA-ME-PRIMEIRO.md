# Instalação no Codex Desktop (Windows)

1. Faça backup do repositório existente (commit ou cópia).
2. Descompacte este pacote em uma pasta temporária.
3. Copie `AGENTS.md`, `agents/`, `docs/` e `.codex/` para a **raiz do repositório** aberto no Codex. Se já existir `AGENTS.md` ou `.codex/config.toml`, NÃO sobrescreva: mescle manualmente.
4. Abra essa pasta como projeto no Codex Desktop; reinicie o app se necessário.
5. Abra as configurações do Codex e confira se a versão suporta multi-agentes e agentes personalizados. O suporte e o caminho de configuração podem variar conforme versão.
6. Se os agentes personalizados não forem reconhecidos, use os arquivos `agents/*.md` como prompts especializados, mantendo `AGENTS.md` como instrução principal.
7. Execute os testes de `docs/roteiro-de-testes.md` e registre resultados reais.
8. Só depois configure REA, Supabase e publicação, com permissões e autorização apropriadas.

**Atenção:** este pacote não instala software automaticamente nem altera seu GitHub/Supabase. A sintaxe dos agentes é uma configuração proposta para versões compatíveis e deve ser validada no aplicativo instalado.


**Atualização v2:** consulte GUIA-INSTALACAO-E-TESTES.md antes de testar agentes.
