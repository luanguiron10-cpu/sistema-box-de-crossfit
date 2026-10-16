param([string]$Raiz = (Split-Path -Parent $PSScriptRoot))

$ErrorActionPreference = 'Stop'
$root = (Resolve-Path -LiteralPath $Raiz).Path
$problems = [System.Collections.Generic.List[string]]::new()
$required = @('docs','docs/fase-1','docs/arquitetura','docs/banco-de-dados','docs/desenvolvimento','docs/testes','docs/implantacao','docs/manuais','docs/comercial','docs/historico','.codex/agents')
foreach ($relative in $required) {
    if (-not (Test-Path -LiteralPath (Join-Path $root $relative) -PathType Container)) { $problems.Add("Diretorio ausente: $relative") }
}
foreach ($relative in @('AGENTS.md','README.md','.codex/config.toml')) {
    if (-not (Test-Path -LiteralPath (Join-Path $root $relative) -PathType Leaf)) { $problems.Add("Arquivo ausente: $relative") }
}
$files = @(Get-ChildItem -LiteralPath $root -Recurse -File -Force | Where-Object { $_.FullName -notmatch '[\\/](\.git|node_modules|dist|build|\.next)[\\/]' })
$markdown = @($files | Where-Object Extension -eq '.md')
$linkCount = 0
foreach ($file in $markdown) {
    $content = [string](Get-Content -LiteralPath $file.FullName -Raw -Encoding UTF8)
    # Ignora exemplos em blocos de codigo e links externos/ancoras.
    $content = [regex]::Replace($content, '(?ms)^\s*```.*?^\s*```\s*$', '')
    foreach ($match in [regex]::Matches($content, '\]\((?<target><[^>]+>|[^\s)]+)(?:\s+"[^"]*")?\)')) {
        $target = $match.Groups['target'].Value.Trim('<','>')
        if ($target -match '^(?:[a-zA-Z][a-zA-Z0-9+.-]*:|#|/|\\)') { continue }
        $target = ($target -split '[#?]',2)[0]
        if (-not $target) { continue }
        $linkCount++
        $decoded = [uri]::UnescapeDataString($target)
        $destination = Join-Path $file.DirectoryName $decoded
        if (-not (Test-Path -LiteralPath $destination)) { $problems.Add("Link local ausente em $($file.FullName.Substring($root.Length + 1)): $target") }
    }
}
$riskyFiles = @($files | Where-Object { ($_.Name -match '^\.env(?:\..+)?$' -and $_.Name -notmatch '\.(example|sample|template)$') -or $_.Name -match '^(id_rsa|id_ed25519|credentials\.json)$' -or $_.Extension -match '^\.(p12|pfx|key)$' })
foreach ($file in $riskyFiles) { $problems.Add("Nome de arquivo sensivel: $($file.FullName.Substring($root.Length + 1))") }
$secretFiles = 0
$textExtensions = @('.md','.toml','.json','.yaml','.yml','.txt','.ps1','.sql','.js','.ts','.tsx','.jsx','.html','.css','.env')
# Padroes de alto sinal; nao e um detector completo e nao imprime valores.
$patterns = @('-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----','gh[pousr]_[A-Za-z0-9]{30,}','github_pat_[A-Za-z0-9_]{40,}','sb_secret_[A-Za-z0-9_-]{20,}','AKIA[0-9A-Z]{16}')
foreach ($file in $files) {
    if ($file.Extension -notin $textExtensions -or $file.Length -gt 2097152) { continue }
    $content = [string](Get-Content -LiteralPath $file.FullName -Raw -Encoding UTF8)
    foreach ($pattern in $patterns) {
        if ($content -match $pattern) { $secretFiles++; $problems.Add("Possivel segredo em arquivo: $($file.FullName.Substring($root.Length + 1))"); break }
    }
}
$tomls = @($files | Where-Object { $_.DirectoryName -eq (Join-Path $root '.codex/agents') -and $_.Extension -eq '.toml' })
if ($tomls.Count -ne 5) { $problems.Add("Esperados 5 TOMLs de agentes; encontrados $($tomls.Count)") }
foreach ($file in $tomls) {
    $content = [string](Get-Content -LiteralPath $file.FullName -Raw -Encoding UTF8)
    if ($content -notmatch '(?m)^\s*developer_instructions\s*=') { $problems.Add("Chave developer_instructions ausente em $($file.Name)") }
}
Write-Output "Arquivos inspecionados: $($files.Count); Markdown: $($markdown.Count); links locais: $linkCount; TOMLs de agentes: $($tomls.Count); arquivos com sinais de segredo: $secretFiles."
Write-Output 'Limites: TOML verificado apenas por contagem/chave minima, sem parser sintatico. Links inline relativos sao verificados por existencia; ancoras, links de referencia e externos nao sao validados. Varredura de segredos e parcial; arquivos binarios/grandes e dados pessoais exigem revisao humana. Nao testa aplicacao, autenticacao ou RLS.'
if ($problems.Count -gt 0) {
    foreach ($problem in $problems) { Write-Output "ERRO: $problem" }
    Write-Output "FALHOU: $($problems.Count) ocorrencias."
    exit 1
}
Write-Output 'PASSOU: verificacoes documentais limitadas.'
exit 0
