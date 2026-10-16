# Matriz de funcionalidades

Consolidação em 16/10/2026 da pesquisa documental de 14/10/2026. Legenda e URLs em [fontes](fontes.md). D não significa funcionalidade testada. As propostas P não descrevem implementação existente.

| ID | Referência e classificação | Evidência/limite | Proposta própria P e critério de aceite | Privacidade |
|---|---|---|---|---|
| F01 | Cadastro e situação do aluno — D | S04; ciclo administrativo descrito | Separar identidade, vínculo com box e financeiro; alterar um não deve conceder outro | Restringir dados cadastrais por papel/box |
| F02 | Primeiro acesso — D | S05; identificação, academia e senha | Auth e convite próprios; acesso exige vínculo autorizado | Impedir enumeração de alunos |
| F03 | Grade, turmas e capacidade — D | S06 | Ocorrências de turma com limite; disputa pela última vaga confirma uma reserva | Exibir apenas dados necessários da turma |
| F04 | Reserva, cancelamento e espera — D | S06–S07; política exata deve ser decidida | Operações idempotentes, janelas e promoção configurável; sem duplicação | Lista nominal visível apenas a autorizados |
| F05 | WOD por dia/modalidade — D | S08 | Rascunho/publicação e versões; resultados antigos preservam prescrição | Visibilidade por vínculo e política do box |
| F06 | Movimentos e PRs — D/M | S09/S03; cálculo automático H | PR comparável por movimento, variação, repetições e unidade | Histórico esportivo não público por padrão |
| F07 | Benchmarks reutilizáveis — D | S10 | Versão e regra explícita de comparação | Evitar notas individuais no benchmark |
| F08 | Resultado, ranking e feedback — D | S11; RX/Scaled e desempates H | Comparar prescrições compatíveis; definir empate e consentimento/visibilidade | Não expor notas privadas ou dados de saúde |
| F09 | Evolução individual — D | S12 | Histórico esportivo separado de notas restritas; teste de autorização por papel | Minimizar dados sensíveis |
| F10 | Contratos e financeiro — D | S13; integração de cobrança não validada | Controle administrativo inicial; cobrança futura depende de escopo | Restringir valores e inadimplência |
| F11 | Perfis de colaboradores — D | S14; implementação técnica não auditada | Permissão por operação e vínculo ativo; negar acesso cruzado por API | Isolar tenants e revogar acesso |
| F12 | WOD em TV — D | S08; proteção do link H | Prescrição sem dados pessoais; definir expiração/revogação | Não divulgar resultados nominais em link público |
| F13 | Presença física separada da reserva — P | S06–S07 não comprovam presença física | Chamada ou confirmação autorizada independente da reserva | Frequência limitada ao box e aluno |
| F14 | Versionamento da prescrição — P | Não confirmado na referência | Resultado aponta para versão imutável executada | Registrar autoria sem dados excessivos |
| F15 | Isolamento multi-box — P | Não auditado no fornecedor | RLS e relações impedem leitura/escrita entre boxes | Requisito central de separação lógica |
| F16 | Replicação e operação comercial — P | Objetivo próprio do projeto | Instalação documentada com ambientes e configurações por box | Nenhum dado real em templates ou exemplos |

F01–F12 preservam os identificadores do relatório anterior. F13–F16 foram acrescentados nesta consolidação exclusivamente como propostas próprias; não são descobertas confirmadas do Next Fit.

## Hipóteses em aberto

Não confirmar sem nova evidência: cálculo automático de PR, categorias RX/Scaled nativas, validação de resultados pelo professor, algoritmos de desempate, imutabilidade/versionamento, funcionamento offline, segurança de links TV ou mecanismos internos de autorização. Uma hipótese não pode virar critério de conformidade com o produto de referência; deve ser investigada legitimamente ou decidida como regra própria.
