DSM-0001 — Atualização de e-mail no portfólio

Tipo de mudança: Padrão
Repositório: https://github.com/livinha1306/livia-codes-quality
Branch: main
Responsável: Lívia Azuma Marques — Data: 2025-09-18

1. Contexto e problema

O e-mail de contato exibido no portfólio estava desatualizado, dificultando que visitantes ou potenciais clientes/conexões profissionais entrassem em contato.

2. Hipótese e valor esperado (falsificável)

Se atualizarmos o e-mail de contato no portfólio, então esperamos que todos os formulários ou links de contato enviem mensagens para o e-mail correto, garantindo comunicação eficaz e evitando perda de oportunidades, pois o endereço anterior não estava sendo monitorado.

3. Escopo

Arquivos afetados: index.html, possivelmente style.css. Mudança limitada à seção de contato.

4. Risco e mitigação

Risco: e-mail incorreto ou link quebrado.

Mitigação: testar envio de e-mail clicando no link após atualização; rollback rápido via commit anterior.


5. Plano de rollout e rollback

Rollout: push na main → redeploy automático (Vercel/GitHub Pages) → testar link de e-mail.

Rollback (gatilho): se o link abrir e-mail incorreto ou não funcionar → reverter commit ou deploy.


6. Métricas, SLIs e critérios de sucesso

Métricas: link de e-mail funcionando corretamente.

Critério de sucesso: clicar no link abre o cliente de e-mail com o endereço correto.

Janela de observação: 24h após publicação.


7. Aprovação proporcional ao risco

Revisão pelo próprio responsável (mudança pequena e isolada).

8. Rastreabilidade

Issue/CR: N/A

Commits: c3d4e5f

PR: N/A — Release/Tag: v1.0.2


9. Evidências (anexos)

Screenshot do portfólio mostrando o novo e-mail.

Teste de clique confirmando abertura do cliente de e-mail com endereço correto.


10. Pós-mudança (review breve)

E-mail atualizado com sucesso; próximo passo: revisar outros contatos e links do portfólio para consistência.


---

Checklist de risco (marcar)

[x] Mudança pequena e isolada

[x] Plano de rollback testado

[x] Critérios de sucesso objetivos definidos

[x] Observabilidade/evidência preparada

[x] Aprovação de par registrada no PR