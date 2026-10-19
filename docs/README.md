# Índice permanente de documentação

Estado em 17/10/2026: Fase 4A implementa fundação frontend demonstrativa local. Módulos de negócio, Auth, persistência e infraestrutura continuam não implementados. Histórico documental das fases anteriores preservado.

**Arquitetura vigente:** [ADR-009 aceita](arquitetura/adr-009-instalacoes-independentes.md): código-base central, instalações Supabase/Cloudflare independentes por box e ambiente. A proposta compartilhada da Fase 2 é histórica e está superada. Detalhes de implementação permanecem planejados.

| Área | Entrada | Conteúdo |
|---|---|---|
| Referência e requisitos | [Fase 1](fase-1/relatorio-analise.md) | Fontes, matriz, fluxos e propostas originais |
| Domínio | [Regras CrossFit](fase-1/regras-crossfit.md) | WOD, scores, PR, agenda e aceite |
| Arquitetura | [Arquitetura](arquitetura/README.md) | Módulos e decisões propostas |
| Banco e segurança | [Banco](banco-de-dados/README.md) | Modelo conceitual, papéis e isolamento |
| Desenvolvimento | [Desenvolvimento](desenvolvimento/README.md) | Política, modelo de funcionalidade e backlog |
| Qualidade | [Testes](testes/README.md) | Evidências reais e auditorias |
| Implantação | [Implantação](implantacao/README.md) | Instalação, atualização e replicação propostas |
| Uso | [Manuais](manuais/README.md) | Fluxos propostos por papel, sem telas implementadas |
| Comercial | [Comercial](comercial/README.md) | Modalidades e decisões pendentes |
| Histórico | [Histórico](historico/README.md) | Versões, preservação e integração GitHub |

Fase 3: [checklist novo box](implantacao/checklist-novo-box.md), [distribuição e rollback](implantacao/distribuicao-atualizacao-rollback.md), [reprodução do zero](testes/criterios-reproducao-instalacao.md) e [auditoria independente](testes/auditoria-fase-3.md).

Fase 4A: [fundação e oito registros](desenvolvimento/fase-4a-fundacao.md), [arquitetura frontend](arquitetura/fase-4a-frontend.md), [manual Windows](implantacao/frontend-windows.md), [navegador](testes/fase-4a-browser.md), [auditoria](testes/auditoria-fase-4a.md) e [histórico](historico/fase-4a.md).

Documentos legados preservados: [plano](plano-de-acao.md) e [roteiro](roteiro-de-testes.md). Nenhum documento novo deve apagar evidência anterior; correções precisam indicar a conclusão substituída e o motivo.

Continuação Fase 4A: [publicação da demonstração GitHub Pages](implantacao/github-pages-demo.md).
