# Changelog — energy-after-50 (HorseFil)

Registro de cada mudança na página, a hipótese por trás e o número que estava por trás da decisão. Formato: data, o que mudou, por quê, métrica pra acompanhar depois.

## 2026-09-19 — Imagem trocada + H1 encurtado
**Commit:** `5888a62`

- H1 encurtado de "She Asked If It Was Her. It Wasn't. It Was Three Slow Leaks Nobody Told Me About." pra "She Asked If It Was Her. It Wasn't." — o título completo entregava o mistério antes da hora.
- Trocada a imagem de abertura de `hero.webp` (sofá/corredor) pra `afternoon.webp` (mesa de escritório), pra bater com o anúncio de melhor CTR na época.

## 2026-09-19/20 — CTA cedo + imagem revertida pro sofá
**Commit:** `ec857d4`

- Adicionado CTA leve depois do "Not guilt. Relief." (mesmo padrão aplicado no Sugar Reset).
- **Revertida a troca de imagem do passo anterior:** confirmado que os 2 anúncios ativos com mais gasto e melhor CTR usam a cena do sofá/corredor (`hero.webp`), não a do escritório. A imagem de abertura da página tinha ficado desalinhada com o próprio anúncio que traz o clique — voltou `hero.webp` pro topo, `afternoon.webp` pra seção "What I tried first" (onde já fazia sentido antes).

**Antes da mudança:** 173 cliques no anúncio (15-19/09), engajamento 20%, 4 cliques no botão (2,3%), 0 venda.

## 2026-09-20 — Abertura mais direta + bloco de quebra de objeção
**Commit:** `397d465`

- Parágrafo de abertura (dropcap + frase seguinte) reduzido de 2 frases pra 1, cortando contexto redundante ("crew de nove", "sempre o cara que resolve") pra ir direto pra tensão.
- Adicionado bloco "Before you talk yourself out of this" antes da tabela de preço, com 4 objeções reais (já tentei suplemento / parece anúncio genérico / é caro / e se não funcionar), usando `.ing` (classe já existente).

**No momento da mudança:** 214 cliques no anúncio (15-20/09), engajamento 23%/20%, 5 cliques no botão (2,3%), 0 venda.

## O que ainda não sabemos
- Se a correção da imagem (voltar pro sofá) mexeu no engajamento — só um dia de dado até agora.
- Criativo pouco testado: só 3 anúncios ativos, todos com a mesma foto (crops diferentes). Vale testar um ângulo visual novo pra saber se o teto de CTR (~0,6%) é da imagem ou do público.
- O anúncio "At 58, He Found Out It Wasn't 'Just Age'" está Rejeitado e, por pedido da Tainara, não deve ser mexido a menos que ela peça de novo.
