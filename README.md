# Ateliê Doce Flor · modelo de site para confeitaria

Modelo de site de uma página para confeitaria: cardápio com contador de quantidade, total em tempo real, data de entrega e pedido formatado pronto para enviar no WhatsApp. Em português e inglês.

> **Site de demonstração.** Todos os dados (nome, endereço, telefone, preços) são fictícios. É um modelo para adaptar ao negócio de um cliente.

<!-- Ver online: cole aqui o endereço do site publicado, no formato **[Ver online](https://...)** -->

<p align="center">
  <img src="docs/screenshot-desktop.png" alt="Site da confeitaria no desktop: título, bolo ilustrado em CSS e faixa com os três passos do pedido" width="640">
  <img src="docs/screenshot-mobile.png" alt="Site da confeitaria no celular: tela inicial" width="231">
</p>

## O que tem no site

- **Tela inicial:** título, botão para o cardápio e um bolo desenhado só com CSS.
- **Três passos:** escolha, envie e confirme.
- **Cardápio por categorias:** doces finos, bolos e kits, com preço, unidade de venda e contador de quantidade.
- **Seu pedido:** resumo com total estimado, nome e data desejada (respeitando a antecedência mínima). O botão abre o WhatsApp com a lista dos itens já escrita.

## Destaques

- **Pedido sem sistema:** o carrinho só monta o texto e abre o WhatsApp, sem servidor e sem custo.
- **Regras do negócio nos dados:** antecedência mínima de dias e forma de retirada ficam em `src/data.js`.
- **HTML pronto no build:** o React é renderizado em HTML estático durante o `npm run build` (SSG) e hidratado no navegador. O conteúdo aparece mesmo sem JavaScript e a página carrega rápido.
- **Duas línguas:** versão em português (`/`) e em inglês (`/en/`), cada uma gerada como página própria, com seletor PT | EN e `hreflang` quando o endereço final é informado.
- **Responsivo e acessível:** layout adaptado para celular e desktop, HTML semântico, foco visível no teclado e respeito à preferência de reduzir movimento.
- **Conteúdo separado do código:** textos (nos dois idiomas), preços e dados do negócio ficam em um único arquivo (`src/data.js`).

## Tecnologias

| | |
|---|---|
| Interface | React 18 |
| Build e dev server | Vite 5 |
| Estilo | CSS puro (variáveis, grid e flexbox) |
| Fontes | Fredoka e DM Sans (Google Fonts) |

## Rodando localmente

Precisa do [Node.js](https://nodejs.org) (versão LTS).

```bash
npm install
npm run dev      # abre em http://localhost:5173 (versão em inglês em /en/)
npm run build    # gera o site pronto em dist/
npm run preview  # confere o resultado do build
```

## Adaptando para outro cliente

1. Edite `src/data.js`: nome, WhatsApp, antecedência mínima, produtos (nome, descrição, preço e unidade) e os passos do pedido. Os textos de retirada e das mensagens ficam em `conteudo`.
2. Preencha `site.url` com o endereço final do site. Com ele, o build inclui link canônico, `hreflang`, imagem de prévia e `sitemap.xml`.
3. Troque `public/og.png` e `public/og-en.png` (1200×630) pela imagem de prévia do cliente.
4. Em `index.html`, apague a linha `<meta name="robots" content="noindex, nofollow" />`. Ela existe só para o modelo de demonstração não aparecer no Google como se fosse um negócio real.

## Estrutura

```
src/
  data.js          conteúdo e textos (PT e EN)
  App.jsx          páginas e componentes
  styles.css       estilos
  main.jsx         entrada no navegador
  entry-server.jsx entrada do build (HTML pré-renderizado)
scripts/prerender.mjs   gera dist/ com uma página por idioma
public/                 favicon e imagens de prévia
```

## Contato

Rebecca Ramos · [GitHub](https://github.com/ramos-r) · [LinkedIn](https://www.linkedin.com/in/devramosr/)
