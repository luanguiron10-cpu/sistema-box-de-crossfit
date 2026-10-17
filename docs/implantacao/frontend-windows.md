# Frontend local no Windows

Fase 4A, 17/10/2026. Apenas demonstração local com dados sintéticos. Sem Supabase, Cloudflare, autenticação ou persistência. Não é procedimento de implantação de produção.

## Pré-requisitos

Git e Node.js em versão estável suportada pelos engines do package.json, com npm. Ambiente usado na entrega: Node 24.22.0 e npm 11.19.1. O npm.cmd evita bloqueio do wrapper npm.ps1 pela política do PowerShell. Não desativar permanentemente política de execução do computador.

## Clonar e reproduzir em computador limpo

A conta deve ter acesso ao repositório privado. Use login oficial GitHub; nunca insira senha/token no endereço ou nos arquivos. No PowerShell:

```powershell
git clone --branch feature/fase-4a-fundacao-frontend https://github.com/luanguiron10-cpu/sistema-box-de-crossfit.git
Set-Location sistema-box-de-crossfit
node --version
npm.cmd --version
npm.cmd ci
npm.cmd run dev -- --host 127.0.0.1
```

Abra a URL localhost exibida pelo Vite. Ctrl+C encerra o processo. A instalação usa registry npm; depois de instaladas as dependências, a aplicação funciona sem backend ou internet. Não executar Vite com exposição pública por padrão. Este procedimento será validado na pasta da entrega; reprodução física em outro computador precisa ser identificada separadamente.

## Verificações

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd test -- --run
npm.cmd run format:check
npm.cmd run build
npm.cmd run preview -- --host 127.0.0.1
```

O build gera dist, ignorado pelo Git. Preview serve o build local e não publica Cloudflare. Não abrir index.html diretamente via file://: SPA e configuração JSON precisam de servidor HTTP. Para validar docs, na raiz: `powershell -NoProfile -ExecutionPolicy Bypass -File scripts/validar-documentacao.ps1`; Bypass vale só para esse processo.

Validação executada nesta entrega: `npm.cmd ci --offline --no-fund --audit=false` reinstalou 237 pacotes pelo lockfile/cache local (exit 0). Instalação inicial pelo registry também foi executada pelo desenvolvedor. O modo offline exige cache previamente preenchido e não substitui o comando npm ci com rede em um computador limpo. Não houve teste físico em outro computador; esse limite é explícito. Ver resultados de qualidade na auditoria e [navegador](../testes/fase-4a-browser.md).

## Instalações demonstrativas A e B

Os JSON em public/config contêm apenas informação pública sintética. Não incluir credenciais, URLs de produção ou detalhes pessoais. Cada instalação futura deve fornecer um contrato de configuração validado, sem alterar a fonte.

Para B, definir antes de iniciar ou compilar (nome de caminho relativo local, conforme o contrato implementado):

```powershell
$env:VITE_INSTALLATION_CONFIG = '/config/installation-b.json'
npm.cmd run dev -- --host 127.0.0.1
# Ou: npm.cmd run build
Remove-Item Env:VITE_INSTALLATION_CONFIG
```

A variável só escolhe JSON de demonstração; não seleciona serviço externo. Reinicie o servidor ao mudar ambiente. Com variável removida, usa A. Recompile se trocar configuração selecionada no build. Prévia na tela de configurações não salva no JSON, localStorage ou servidor; recarregar descarta alterações.

## Problemas frequentes

| Sintoma | Diagnóstico e ação |
|---|---|
| node/npm não encontrado | Instalar Node compatível, reabrir terminal e verificar PATH/versões |
| npm.ps1 bloqueado | Usar npm.cmd; não mudar política persistente |
| Registry sem acesso | Conferir internet/proxy corporativo; não desativar TLS nem registrar credenciais |
| Porta ocupada | Usar URL informada pelo Vite ou porta livre; não encerrar processo de outro projeto |
| JSON inválido/ausente | Verificar contrato e caminho local; tela de erro deve explicar sem expor segredos |
| Instalação B não aparece | Conferir variável antes do comando e reiniciar/recompilar; limpar variável para retornar a A |
| Testes watch não encerram | Usar npm.cmd test -- --run para execução única |
| npm ci falha por divergência | Não apagar lockfile indiscriminadamente; verificar branch, versões e revisar alterações package/lock |
| Rota direta falha fora do Vite | Usar preview local; futura hospedagem SPA precisará fallback, sem deploy nesta fase |

## Atualização e reversão locais

Preserve alterações próprias antes de trocar de versão; confira git status. Atualize apenas a branch correta por fast-forward, execute npm ci e repita verificações. Para inspecionar versão anterior, use outra pasta/cópia ou branch autorizada, sem reset destrutivo. Nenhuma atualização local modifica um cliente ou serviço remoto.
