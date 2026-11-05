// Troque estes dados para adaptar o site a outro cliente.
// O site tem duas versões: português (endereço /) e inglês (endereço /en/).
//  - Dados iguais nos dois idiomas: `negocio`, `site` e os preços.
//  - Textos: dentro de `pt:` e `en:` (em cada produto e passo) e em `conteudo.pt` / `conteudo.en`.

export const negocio = {
  nome: 'Ateliê Doce Flor',
  cidade: 'Vila Mariana, São Paulo',
  whatsapp: '5511999999999', // DDI + DDD + número, só dígitos
  whatsappTexto: '(11) 99999-9999',
  instagram: '@docefloratelie',
  antecedenciaDias: 3, // pedidos com no mínimo X dias de antecedência
}

// Endereço final do site (ex.: 'https://atelie-doce-flor.vercel.app'), sem barra no fim.
// Com ele preenchido, o build inclui link canônico, hreflang, imagem de prévia e sitemap.
export const site = { url: '' }

// cat: grupo do cardápio (os nomes aparecem em conteudo.*.ui.categorias)
// unidade: como o produto é vendido (aparece ao lado do preço)
export const produtos = [
  { id: 'brig', cat: 'doces', preco: 140, pt: { nome: 'Brigadeiro gourmet', desc: 'Belga, ninho com Nutella ou pistache.', unidade: 'cento' }, en: { nome: 'Gourmet brigadeiro', desc: 'Belgian chocolate, milk-powder with Nutella or pistachio.', unidade: 'hundred' } },
  { id: 'beijinho', cat: 'doces', preco: 130, pt: { nome: 'Beijinho de coco queimado', desc: 'Coco fresco e cravo.', unidade: 'cento' }, en: { nome: 'Toasted coconut beijinho', desc: 'Fresh coconut and clove.', unidade: 'hundred' } },
  { id: 'trufa', cat: 'doces', preco: 8, pt: { nome: 'Trufas sortidas', desc: 'Maracujá, café e limão siciliano.', unidade: 'unidade' }, en: { nome: 'Assorted truffles', desc: 'Passion fruit, coffee and Sicilian lemon.', unidade: 'unit' } },
  { id: 'bolo-cenoura', cat: 'bolos', preco: 95, pt: { nome: 'Bolo de cenoura com brigadeiro', desc: 'Serve de 10 a 12 fatias.', unidade: 'bolo' }, en: { nome: 'Carrot cake with brigadeiro', desc: 'Serves 10 to 12 slices.', unidade: 'cake' } },
  { id: 'bolo-festa', cat: 'bolos', preco: 140, pt: { nome: 'Bolo de festa decorado', desc: 'Massa e recheio à escolha. Valor por kg.', unidade: 'kg' }, en: { nome: 'Decorated party cake', desc: 'Choice of batter and filling. Price per kg.', unidade: 'kg' } },
  { id: 'naked', cat: 'bolos', preco: 180, pt: { nome: 'Naked cake com frutas', desc: 'Chantilly, frutas vermelhas e flores.', unidade: 'bolo' }, en: { nome: 'Naked cake with fruit', desc: 'Whipped cream, red berries and flowers.', unidade: 'cake' } },
  { id: 'kit', cat: 'kits', preco: 320, pt: { nome: 'Kit festa para 20 pessoas', desc: '40 docinhos, 20 salgados e 1 bolo pequeno.', unidade: 'kit' }, en: { nome: 'Party kit for 20 people', desc: '40 sweets, 20 savory snacks and 1 small cake.', unidade: 'kit' } },
  { id: 'caixa', cat: 'kits', preco: 85, pt: { nome: 'Caixa presente com 12 doces', desc: 'Embalagem com laço e cartão.', unidade: 'caixa' }, en: { nome: 'Gift box with 12 sweets', desc: 'Ribbon-tied box with a card.', unidade: 'box' } },
]

export const passos = [
  { n: '1', pt: { t: 'Escolha', d: 'Marque os itens e as quantidades.' }, en: { t: 'Choose', d: 'Pick the items and quantities.' } },
  { n: '2', pt: { t: 'Envie', d: 'O pedido sai pronto no WhatsApp.' }, en: { t: 'Send', d: 'Your order is ready to send on WhatsApp.' } },
  { n: '3', pt: { t: 'Confirme', d: 'Combinamos detalhes e sinal de 50%.' }, en: { t: 'Confirm', d: 'We agree on the details and a 50% deposit.' } },
]

export const conteudo = {
  pt: {
    meta: {
      titulo: 'Ateliê Doce Flor · Confeitaria artesanal em São Paulo',
      descricao: 'Bolos, doces finos e kits festa sob encomenda na Vila Mariana, São Paulo. Monte seu pedido e envie pelo WhatsApp. Site de demonstração com dados fictícios.',
      descricaoCurta: 'Doces feitos sob encomenda para o seu dia especial. Site de demonstração.',
      locale: 'pt_BR',
      hreflang: 'pt-BR',
    },
    ui: {
      moeda: 'pt-BR',
      navAria: 'Principal',
      idiomaAria: 'Idioma',
      nav: { cardapio: 'Cardápio', pedido: 'Pedido' },
      eyebrow: 'Confeitaria artesanal',
      titulo: 'Doces feitos sob encomenda para o seu dia especial.',
      lead: 'Bolos, doces finos e kits festa preparados no dia, com ingredientes selecionados. Monte seu pedido aqui e envie direto pelo WhatsApp.',
      btnCardapio: 'Ver cardápio',
      cardapioTitulo: 'Cardápio',
      categorias: { doces: 'Doces finos', bolos: 'Bolos', kits: 'Kits' },
      qtdDe: 'Quantidade de',
      diminuir: 'Diminuir',
      aumentar: 'Aumentar',
      pedidoTitulo: 'Seu pedido',
      retirada: 'Retirada na Vila Mariana ou entrega por motoboy (taxa conforme o bairro).',
      antecedencia: 'Pedidos com pelo menos {dias} dias de antecedência.',
      vazio: 'Use os botões + no cardápio para adicionar itens.',
      labelNome: 'Seu nome',
      placeholderNome: 'Como podemos te chamar?',
      labelData: 'Data desejada',
      totalEstimado: 'Total estimado',
      item: 'item',
      itens: 'itens',
      btnEnviar: 'Enviar pedido pelo WhatsApp',
      msgAbertura: 'Olá! Sou {nome} e quero fazer uma encomenda:',
      msgNomePadrao: '[meu nome]',
      msgSemItens: '• (ainda vou escolher os itens)',
      msgTotal: 'Total estimado: {total}',
      msgData: 'Data desejada: {data}',
      msgDataAcombinar: 'Data desejada: a combinar',
      demo: 'Site de demonstração com dados fictícios.',
    },
  },
  en: {
    meta: {
      titulo: 'Ateliê Doce Flor · Artisan bakery in São Paulo',
      descricao: 'Made-to-order cakes, fine sweets and party kits in Vila Mariana, São Paulo. Build your order and send it on WhatsApp. Demo site with fictional data.',
      descricaoCurta: 'Sweets made to order for your special day. Demo site.',
      locale: 'en_US',
      hreflang: 'en',
    },
    ui: {
      moeda: 'en-US',
      navAria: 'Main',
      idiomaAria: 'Language',
      nav: { cardapio: 'Menu', pedido: 'Order' },
      eyebrow: 'Artisan bakery',
      titulo: 'Sweets made to order for your special day.',
      lead: 'Cakes, fine sweets and party kits made fresh on the day with carefully selected ingredients. Build your order here and send it straight on WhatsApp.',
      btnCardapio: 'See the menu',
      cardapioTitulo: 'Menu',
      categorias: { doces: 'Fine sweets', bolos: 'Cakes', kits: 'Kits' },
      qtdDe: 'Quantity of',
      diminuir: 'Decrease',
      aumentar: 'Increase',
      pedidoTitulo: 'Your order',
      retirada: 'Pick-up in Vila Mariana or motorbike delivery (fee depends on the neighborhood).',
      antecedencia: 'Orders need at least {dias} days of notice.',
      vazio: 'Use the + buttons on the menu to add items.',
      labelNome: 'Your name',
      placeholderNome: 'What should we call you?',
      labelData: 'Preferred date',
      totalEstimado: 'Estimated total',
      item: 'item',
      itens: 'items',
      btnEnviar: 'Send order on WhatsApp',
      msgAbertura: "Hi! I'm {nome} and I'd like to place an order:",
      msgNomePadrao: '[my name]',
      msgSemItens: "• (I'll choose the items soon)",
      msgTotal: 'Estimated total: {total}',
      msgData: 'Preferred date: {data}',
      msgDataAcombinar: 'Preferred date: to be arranged',
      demo: 'Demo site with fictional data.',
    },
  },
}
