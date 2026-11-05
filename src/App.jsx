import { useEffect, useMemo, useState } from 'react'
import { negocio, produtos, passos, conteudo } from './data.js'

// Seletor de idioma: cada idioma é uma página própria (/ e /en/)
function Idiomas({ lang, rotulo }) {
  return (
    <nav className="idioma" aria-label={rotulo}>
      <a href="/" lang="pt-BR" hrefLang="pt-BR" title="Português" aria-current={lang === 'pt' ? 'true' : undefined}>PT</a>
      <a href="/en/" lang="en" hrefLang="en" title="English" aria-current={lang === 'en' ? 'true' : undefined}>EN</a>
    </nav>
  )
}

export default function App({ lang = 'pt' }) {
  const c = conteudo[lang] || conteudo.pt
  const ui = c.ui
  const brl = (v) => v.toLocaleString(ui.moeda, { style: 'currency', currency: 'BRL' })
  const formatarData = (iso) => (iso ? new Date(iso + 'T12:00:00').toLocaleDateString(ui.moeda) : '')

  const [qtd, setQtd] = useState({})
  const [data, setData] = useState('')
  const [nome, setNome] = useState('')
  const [dataMinima, setDataMinima] = useState('') // calculada no navegador (no build a data seria a do dia da publicação)
  const categorias = useMemo(() => [...new Set(produtos.map((p) => p.cat))], [])

  useEffect(() => {
    const d = new Date()
    d.setDate(d.getDate() + negocio.antecedenciaDias)
    const mes = String(d.getMonth() + 1).padStart(2, '0')
    const dia = String(d.getDate()).padStart(2, '0')
    setDataMinima(`${d.getFullYear()}-${mes}-${dia}`)
  }, [])

  const mudar = (id, delta) =>
    setQtd((q) => ({ ...q, [id]: Math.max(0, (q[id] || 0) + delta) }))

  const itens = produtos.filter((p) => qtd[p.id] > 0)
  const total = itens.reduce((s, p) => s + p.preco * qtd[p.id], 0)
  const totalItens = itens.reduce((s, p) => s + qtd[p.id], 0)

  const linhas = itens.map((p) => `• ${qtd[p.id]}x ${p[lang].nome} (${p[lang].unidade})`)
  const mensagem = [
    ui.msgAbertura.replace('{nome}', nome || ui.msgNomePadrao),
    ...(linhas.length ? linhas : [ui.msgSemItens]),
    ui.msgTotal.replace('{total}', brl(total)),
    data ? ui.msgData.replace('{data}', formatarData(data)) : ui.msgDataAcombinar,
  ].join('\n')
  const link = `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensagem)}`

  return (
    <>
      <header className="topo">
        <a className="marca" href="#inicio">{negocio.nome}</a>
        <div className="topo-direita">
          <nav aria-label={ui.navAria}>
            <a href="#cardapio">{ui.nav.cardapio}</a>
            <a href="#pedido">{ui.nav.pedido}</a>
          </nav>
          <Idiomas lang={lang} rotulo={ui.idiomaAria} />
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">{ui.eyebrow} · {negocio.cidade}</p>
              <h1>{ui.titulo}</h1>
              <p className="lead">{ui.lead}</p>
              <a className="btn btn-primario" href="#cardapio">{ui.btnCardapio}</a>
            </div>
            <div className="confete" aria-hidden="true">
              <span className="bolha b1" /><span className="bolha b2" /><span className="bolha b3" />
              <span className="bolha b4" /><span className="bolha b5" />
              <div className="bolo">
                <i className="vela" />
                <i className="camada c1" />
                <i className="camada c2" />
                <i className="camada c3" />
              </div>
            </div>
          </div>
        </section>

        <section className="passos">
          <ol className="container passos-lista">
            {passos.map((p) => (
              <li key={p.n}>
                <b>{p.n}</b>
                <div>
                  <strong>{p[lang].t}</strong>
                  <span>{p[lang].d}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="secao" id="cardapio">
          <div className="container">
            <h2>{ui.cardapioTitulo}</h2>
            {categorias.map((cat) => (
              <div key={cat} className="grupo">
                <h3>{ui.categorias[cat]}</h3>
                <ul className="produtos">
                  {produtos.filter((p) => p.cat === cat).map((p) => (
                    <li key={p.id} className={qtd[p.id] ? 'prod ativo' : 'prod'}>
                      <div className="prod-info">
                        <strong>{p[lang].nome}</strong>
                        <span>{p[lang].desc}</span>
                        <em>{brl(p.preco)} / {p[lang].unidade}</em>
                      </div>
                      <div className="stepper" role="group" aria-label={`${ui.qtdDe} ${p[lang].nome}`}>
                        <button type="button" onClick={() => mudar(p.id, -1)} aria-label={`${ui.diminuir} ${p[lang].nome}`}>−</button>
                        <output aria-live="polite">{qtd[p.id] || 0}</output>
                        <button type="button" onClick={() => mudar(p.id, 1)} aria-label={`${ui.aumentar} ${p[lang].nome}`}>+</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="secao pedido" id="pedido">
          <div className="container pedido-grid">
            <div>
              <h2>{ui.pedidoTitulo}</h2>
              <p className="lead">{ui.retirada}</p>
              <p className="lead">{ui.antecedencia.replace('{dias}', negocio.antecedenciaDias)}</p>
            </div>
            <div className="caixa">
              {itens.length === 0 ? (
                <p className="vazio">{ui.vazio}</p>
              ) : (
                <ul className="resumo">
                  {itens.map((p) => (
                    <li key={p.id}>
                      <span>{qtd[p.id]}x {p[lang].nome}</span>
                      <strong>{brl(p.preco * qtd[p.id])}</strong>
                    </li>
                  ))}
                </ul>
              )}
              <div className="campos">
                <label htmlFor="nome">{ui.labelNome}
                  <input id="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder={ui.placeholderNome} />
                </label>
                <label htmlFor="data">{ui.labelData}
                  <input id="data" type="date" min={dataMinima || undefined} value={data} onChange={(e) => setData(e.target.value)} />
                </label>
              </div>
              <div className="total">
                <span>{ui.totalEstimado} ({totalItens} {totalItens === 1 ? ui.item : ui.itens})</span>
                <strong>{brl(total)}</strong>
              </div>
              <a className="btn btn-whats" href={link} target="_blank" rel="noreferrer">{ui.btnEnviar}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="container">
          <span>{negocio.nome} · {negocio.instagram} · {negocio.whatsappTexto}</span>
          <span>{ui.demo}</span>
        </div>
      </footer>
    </>
  )
}
