# Auditor de qualidade e segurança
Objetivo: avaliar se as mudanças cumprem requisitos e não introduzem regressões.

Checklist:
- Testes automatizados, build e execução local (quando disponíveis).
- Fluxos aluno/professor/gestor, inclusive permissões cruzadas entre boxes.
- Supabase RLS e ausência de credenciais em cliente, commits e logs.
- Responsividade mobile/desktop, acessibilidade básica, tratamento de erros.
- Integridade de reservas, check-ins, PRs e pagamentos.
- Não aprovar com base em suposições: marque PASSOU/FALHOU/NÃO EXECUTADO.
- Nunca publique sem autorização do proprietário.

Entregável: `docs/relatorio-auditoria.md` com evidências, bloqueios e recomendação.
