# Richest Wolf — Especificação do projeto

Landing page de venda de um infoproduto: ebook (PDF) de finanças em inglês, vendido para o mercado internacional.
Documento vivo. Itens marcados com `[PREENCHER]` dependem de informação que ainda não temos.

---

## 1. Visão geral

| Item | Definição |
|---|---|
| **Produto** | Ebook em PDF sobre finanças, em inglês |
| **Marca** | Richest Wolf |
| **Público** | Compradores de fora do Brasil, falantes de inglês `[PREENCHER: faixa etária, nível de conhecimento]` |
| **Objetivo da página** | Uma única ação: clicar em comprar |
| **Preço** | `[PREENCHER]` (sugestão: exibir em USD) |
| **Pagamento** | Lemon Squeezy (Merchant of Record), checkout em overlay |
| **Entrega** | Automática pelo Lemon Squeezy, sem backend próprio |
| **Idioma da página** | Inglês |
| **Ponto visual central** | Capa do PDF em 3D, interativa, logo na primeira dobra |

**Princípio de design:** a página existe para gerar desejo. A capa 3D é o objeto de desejo, e tudo em volta (texto, cor, espaço) serve para valorizá-la.

---

## 2. Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** para estilo
- **Framer Motion** para animações e inclinação da capa com o mouse
- **next/image** e **next/font** para imagem e fonte otimizadas
- **Lemon Squeezy** (`lemon.js` para o overlay de checkout)
- **Vercel** para hospedagem (deploy pelo GitHub)
- Analytics: **Plausible** ou **Vercel Analytics** (leves, sem banner de cookie pesado) `[DECIDIR]`

Não há banco de dados nem API própria nesta fase.

---

## 3. Estrutura de pastas

```
richest-wolf/
├─ app/
│  ├─ layout.tsx          # fonte, metadata, scripts globais
│  ├─ page.tsx            # monta as seções
│  ├─ globals.css
│  ├─ privacy/page.tsx    # política de privacidade
│  ├─ terms/page.tsx      # termos de uso
│  └─ refund/page.tsx     # política de reembolso
├─ components/
│  ├─ Header.tsx
│  ├─ Hero.tsx
│  ├─ BookCover3D.tsx     # a capa em 3D
│  ├─ Problem.tsx
│  ├─ Solution.tsx
│  ├─ Inside.tsx          # o que tem dentro
│  ├─ Benefits.tsx
│  ├─ About.tsx           # autor
│  ├─ Proof.tsx           # depoimentos
│  ├─ Offer.tsx           # preço + botão
│  ├─ Guarantee.tsx
│  ├─ FAQ.tsx
│  ├─ FinalCTA.tsx
│  ├─ Footer.tsx
│  ├─ BuyButton.tsx       # botão do Lemon Squeezy
│  └─ StickyBuyBar.tsx    # barra fixa no mobile
├─ public/
│  ├─ cover-front.webp
│  ├─ cover-spine.webp    # opcional
│  ├─ og-image.png        # 1200x630
│  └─ favicon.ico
└─ lib/
   └─ config.ts           # preço, link de checkout, textos fixos
```

---

## 4. Passo a passo de execução

### Etapa 0 — Preparação dos ativos
- [ ] Exportar a **capa do PDF** em alta resolução (mínimo 1600 px de altura), em PNG ou WebP
- [ ] Definir nome final, subtítulo e promessa do ebook
- [ ] Escolher paleta e fonte (ver seção 6)
- [ ] Reunir: sumário do ebook, bio do autor, depoimentos reais se houver
- [ ] Conta criada no Lemon Squeezy, produto cadastrado e loja ainda em modo de teste

### Etapa 1 — Projeto base
- [ ] `npx create-next-app@latest richest-wolf` (TypeScript, Tailwind, App Router)
- [ ] Instalar: `npm i framer-motion`
- [ ] Configurar fonte com `next/font` e as cores como variáveis no `globals.css`
- [ ] Criar `lib/config.ts` com preço, URL do checkout e e-mail de contato

### Etapa 2 — Capa 3D (prioridade máxima)
- [ ] Construir `BookCover3D.tsx` (detalhes na seção 5)
- [ ] Testar em celular real, não só no navegador do computador
- [ ] Ajustar sombra, brilho e espessura até parecer um livro físico

### Etapa 3 — Seções da landing
- [ ] Hero com capa 3D, título, subtítulo e botão
- [ ] Demais seções na ordem da seção 7
- [ ] Barra de compra fixa no mobile

### Etapa 4 — Checkout
- [ ] Integrar o botão do Lemon Squeezy (seção 8)
- [ ] Testar uma compra completa em modo de teste
- [ ] Conferir o e-mail de entrega com o link do PDF

### Etapa 5 — Páginas legais e SEO
- [ ] Privacy, Terms e Refund (o Lemon Squeezy costuma exigir)
- [ ] Disclaimer financeiro no rodapé e perto do botão
- [ ] Metadata, Open Graph e imagem de compartilhamento

### Etapa 6 — Publicação
- [ ] Subir para o GitHub e conectar na Vercel
- [ ] Domínio próprio com HTTPS `[PREENCHER: domínio]`
- [ ] **Pedir a ativação da loja no Lemon Squeezy** (revisão leva em torno de 1 a 2 dias úteis)
- [ ] Trocar o link de teste pelo link de produção
- [ ] Fazer uma compra real de valor baixo para validar tudo

### Etapa 7 — Depois do lançamento
- [ ] Medir visitas, cliques no botão e compras
- [ ] Teste A/B do título e do preço
- [ ] Captura de e-mail para quem não comprou (lead magnet: capítulo grátis)

---

## 5. Capa do PDF em 3D

### Abordagem recomendada: CSS 3D + Framer Motion
Leve, rápida no celular, sem biblioteca 3D pesada. Cria um "livro" com cinco faces usando `transform-style: preserve-3d`.

**Faces do livro:**
- Frente: imagem da capa
- Lombada: cor sólida da marca (com título vertical opcional)
- Páginas: lateral clara com listras finas para simular folhas
- Verso: cor sólida ou arte de contracapa
- Sombra: elipse borrada no "chão", abaixo do livro

**Comportamento:**
1. **Entrada:** o livro aparece levemente girado (cerca de -25° no eixo Y) com flutuação suave de cima para baixo, em loop lento
2. **Mouse (desktop):** o livro inclina seguindo o cursor, com movimento suavizado (`useSpring`)
3. **Toque (mobile):** inclinação ao arrastar, ou animação automática de balanço se não houver toque
4. **Hover/toque na capa:** o livro endireita e ganha brilho (reflexo diagonal passando pela capa)
5. **Scroll:** o livro gira devagar enquanto a pessoa desce o primeiro trecho da página

**Acabamento que dá cara de produto premium:**
- Reflexo de luz diagonal (gradiente branco semitransparente que se move)
- Sombra longa e suave, mais forte quando o livro "levanta"
- Brilho dourado atrás do livro (radial gradient), reforçando a marca
- Leve vinheta escura nas bordas da capa para dar volume

### Esqueleto do componente

```tsx
"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function BookCover3D() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-35, -5]), { stiffness: 80, damping: 15 });
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 80, damping: 15 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ perspective: 1400 }}
      className="relative mx-auto w-[260px] sm:w-[340px]"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative aspect-[2/3] w-full"
      >
        {/* frente */}
        <div className="absolute inset-0 overflow-hidden rounded-r-md shadow-2xl"
             style={{ transform: "translateZ(18px)" }}>
          <Image src="/cover-front.webp" alt="Richest Wolf ebook cover" fill priority className="object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent" />
        </div>
        {/* lombada */}
        <div className="absolute left-0 top-0 h-full w-9 bg-neutral-900"
             style={{ transform: "rotateY(-90deg) translateZ(0px)", transformOrigin: "left" }} />
        {/* páginas */}
        <div className="absolute right-0 top-1 h-[calc(100%-8px)] w-9 bg-stone-100"
             style={{ transform: "rotateY(90deg) translateZ(0px)", transformOrigin: "right",
                      backgroundImage: "repeating-linear-gradient(90deg,#e7e5e4 0 1px,#fafaf9 1px 3px)" }} />
        {/* verso */}
        <div className="absolute inset-0 rounded-l-md bg-neutral-900"
             style={{ transform: "translateZ(-18px)" }} />
      </motion.div>

      {/* sombra no chão */}
      <div className="absolute -bottom-8 left-1/2 h-6 w-4/5 -translate-x-1/2 rounded-full bg-black/60 blur-xl" />
    </div>
  );
}
```

> Os valores de profundidade (18 px, 36 px) e ângulos são ponto de partida. Ajustar a olho até a espessura parecer real.

### Alternativa: Three.js (react-three-fiber)
Dá reflexos reais e rotação livre em 360°, mas pesa mais e pode ficar lento em celulares simples. Só vale se o CSS 3D não entregar o efeito desejado. Se for por esse caminho: carregar com `dynamic import` e `ssr: false`, e manter a imagem estática como fallback.

### Fallbacks obrigatórios
- Usuário com `prefers-reduced-motion`: capa estática, levemente girada, sem flutuação
- Celular fraco: desligar sombra pesada e reflexo animado
- Imagem da capa em WebP com `priority` para não atrasar o carregamento

---

## 6. Direção visual

**Sensação desejada:** luxo discreto, poder, disciplina, riqueza silenciosa. Nada de visual "guru de internet" com carro e dinheiro na mão.

| Elemento | Direção |
|---|---|
| **Fundo** | Preto profundo ou grafite (`#0B0B0C`), com brilho dourado sutil atrás da capa |
| **Destaque** | Dourado envelhecido (`#C9A24B`) para botões, números e detalhes |
| **Texto** | Branco quente (`#F4F1EA`) e cinza claro para texto secundário |
| **Títulos** | Serifada elegante (ex.: Playfair Display, Cormorant) |
| **Corpo** | Sans-serif limpa (ex.: Inter) |
| **Espaço** | Muito respiro. Menos elementos, mais impacto |
| **Movimento** | Suave e lento: surgir ao rolar, sem efeitos exagerados |
| **Lobo** | Se existir símbolo/logo do lobo, usar como marca d'água discreta e no cabeçalho |

Ajustar as cores à capa real do PDF. A página deve parecer a extensão dela, não outro projeto.

---

## 7. Seções da landing (ordem e função)

Cada seção tem um papel no caminho até o botão. Textos abaixo são direções em inglês, para refinar com o conteúdo real do ebook.

### 1. Hero (primeira dobra)
**Função:** prender atenção e mostrar o produto.
- Capa 3D grande, no centro ou à direita
- Título curto e forte. Opções a testar:
  - *"Think like the wealthy. Build like a wolf."*
  - *"The money playbook they never taught you."*
- Subtítulo com a promessa concreta: *"A practical guide to [RESULTADO] in [PRAZO]."* `[PREENCHER]`
- Botão: **Get the Book — $XX**
- Linha de confiança abaixo: *Instant PDF download · Secure checkout · 30-day guarantee*

### 2. Problema
**Função:** fazer a pessoa se reconhecer.
- 3 a 4 frases sobre a dor: salário que some, dívida, falta de plano, sensação de ficar para trás
- Tom direto, sem exagero e sem prometer milagre

### 3. Solução
**Função:** apresentar o ebook como o caminho.
- Uma frase sobre o método ou a ideia central do livro `[PREENCHER]`
- Mostrar a capa de novo, em ângulo diferente (reaproveitar o componente 3D)

### 4. O que tem dentro
**Função:** tornar o produto tangível.
- Lista de capítulos com um benefício curto cada
- Número de páginas, formato (PDF), tempo de leitura
- Opcional: 2 a 3 páginas do miolo em "folheada" visual, com leve desfoque

### 5. Benefícios
**Função:** transformar conteúdo em resultado.
- 4 a 6 cards: o que a pessoa vai conseguir fazer depois de ler
- Frases com verbo de ação: *Build a budget you'll actually follow*, *Start investing with a clear plan*

### 6. Autor
**Função:** dar rosto e credibilidade.
- Foto, nome e história curta, honesta `[PREENCHER]`
- Se não houver credenciais formais, usar a experiência real e a razão de ter escrito o livro

### 7. Prova social
**Função:** reduzir o risco percebido.
- Depoimentos **reais** (de leitores beta, amigos que leram, avaliações)
- Se ainda não houver, **não inventar**. Usar a seção "Who this is for" no lugar
- Fabricar depoimentos é fraude e pode derrubar a conta do Lemon Squeezy

### 8. Oferta
**Função:** fechar a decisão.
- Capa 3D, preço, o que está incluso, botão grande
- Preço âncora (de/por) só se o preço "de" for real
- Bônus (checklist, planilha) se existirem, apresentados como parte do pacote

### 9. Garantia
**Função:** tirar o medo de errar.
- Política de reembolso clara, com prazo `[DECIDIR: ex. 14 ou 30 dias]`
- Selo simples, texto curto

### 10. FAQ
**Função:** derrubar objeções.
- *Is this financial advice?* (não, é educacional)
- *Do I need experience?*
- *How do I receive the book?* (por e-mail, na hora)
- *Does it work outside the US?*
- *What if I don't like it?*

### 11. CTA final
**Função:** última chance de clique.
- Frase de fechamento, capa 3D e botão

### 12. Rodapé
- Links: Privacy, Terms, Refund, contato
- **Disclaimer financeiro** (ver seção 9)

**Barra fixa de compra (mobile):** aparece depois do hero, com o preço e o botão. Some perto da seção de oferta.

---

## 8. Integração do checkout (Lemon Squeezy)

1. No painel, abrir o produto e copiar o **link de checkout**
2. Carregar o script do overlay no `layout.tsx`:

```tsx
import Script from "next/script";
// dentro do <body>
<Script src="https://assets.lemonsqueezy.com/lemon.js" strategy="lazyOnload" />
```

3. Botão reutilizável (`BuyButton.tsx`):

```tsx
export default function BuyButton({ label = "Get the Book" }: { label?: string }) {
  return (
    <a
      href="https://SEU-STORE.lemonsqueezy.com/checkout/buy/ID-DO-PRODUTO?embed=1"
      className="lemonsqueezy-button inline-block rounded-md bg-[#C9A24B] px-8 py-4 font-semibold text-black transition hover:brightness-110"
    >
      {label}
    </a>
  );
}
```

4. Usar o mesmo `BuyButton` no hero, na oferta, na barra fixa e no CTA final
5. Guardar o link em `lib/config.ts` para trocar teste por produção em um lugar só
6. Configurar no painel: e-mail de recibo, arquivo do PDF anexado ao produto, URL de retorno pós-compra `[OPCIONAL]`

---

## 9. Conformidade e confiança

- **Disclaimer financeiro** (rodapé e perto do botão): conteúdo educacional, não é aconselhamento financeiro, de investimento, fiscal ou jurídico; resultados variam; investir envolve risco de perda
- **Sem promessas de ganho garantido.** Evitar números de lucro sem comprovação. Isso protege a marca e a conta no meio de pagamento
- **Páginas legais:** privacy, terms, refund, contato
- **Prova social verdadeira:** nada de depoimento, número de vendas ou contador de "pessoas comprando agora" inventado
- **Escassez só se for real:** contador falso de tempo destrói a confiança
- **Conferir direitos de imagem:** fotos, fontes e ícones devem ter licença para uso comercial
- Não sou advogado. Vale uma consulta antes de escalar as vendas

---

## 10. SEO, compartilhamento e desempenho

- `metadata` no `layout.tsx`: título (até ~60 caracteres), descrição (até ~155), Open Graph e Twitter card
- Imagem de compartilhamento 1200×630 com a capa em destaque
- Dados estruturados `Product` (JSON-LD) com nome, descrição e preço
- Meta: pontuação alta no Lighthouse (mobile), LCP abaixo de 2,5 s
- Imagens em WebP, fonte via `next/font`, scripts de terceiros com `lazyOnload`
- Acessibilidade: contraste suficiente do dourado sobre o preto, `alt` na capa, foco visível nos botões

---

## 11. Métricas de sucesso

| Métrica | Como medir |
|---|---|
| Visitantes | Analytics |
| Cliques no botão de compra | Evento personalizado |
| Checkout iniciado → compra | Painel do Lemon Squeezy |
| **Taxa de conversão** | Compras ÷ visitantes (referência inicial comum: 1% a 3%, varia muito por tráfego) |
| Reembolsos | Painel do Lemon Squeezy |
| Origem do tráfego | UTM nos links |

---

## 12. Definição de pronto

- [ ] Capa 3D funcionando suave no celular e no desktop
- [ ] Compra de teste completa, com PDF recebido por e-mail
- [ ] Loja ativada no Lemon Squeezy e compra real validada
- [ ] Páginas legais e disclaimer publicados
- [ ] Domínio com HTTPS e imagem de compartilhamento testada
- [ ] Lighthouse mobile com bom desempenho
- [ ] Analytics registrando visitas e cliques

---

## 13. Pendências para fechar a especificação

1. Título e subtítulo finais do ebook
2. Preço e moeda
3. Promessa principal e público exato
4. Arquivo da capa em alta resolução (e se há contracapa e lombada)
5. Bio e foto do autor
6. Existência de depoimentos reais ou bônus
7. Política de reembolso (prazo)
8. Domínio escolhido
9. O `index.html` atual, para eu migrar o conteúdo e o texto que já existem
