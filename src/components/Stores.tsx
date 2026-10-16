import { stores } from '../data/siteContent'
import SectionHeading from './SectionHeading'
import './Stores.css'

export default function Stores() {
  return (
    <section
      className="stores section section--soft"
      id={stores.id}
      aria-labelledby="stores-heading"
    >
      <div className="container">
        <SectionHeading title={stores.heading} lead={stores.lead} id="stores-heading" />
        <ul className="stores__grid">
          {stores.cards.map((store) => (
            <li className="stores__card" key={store.name}>
              <img
                className="stores__image"
                src={store.image}
                alt={store.imageAlt}
                width={800}
                height={600}
                loading="lazy"
              />
              <div className="stores__body">
                <h3 className="stores__name">{store.name}</h3>
                <dl className="stores__details">
                  <div className="stores__row">
                    <dt>住所</dt>
                    <dd>{store.address}</dd>
                  </div>
                  <div className="stores__row">
                    <dt>TEL</dt>
                    <dd>
                      <a href={`tel:${store.tel.replace(/-/g, '')}`}>{store.tel}</a>
                    </dd>
                  </div>
                  <div className="stores__row">
                    <dt>アクセス</dt>
                    <dd>{store.access}</dd>
                  </div>
                </dl>
                {store.note && <p className="stores__note">{store.note}</p>}
              </div>
            </li>
          ))}
        </ul>
        <div className="section-actions">
          <a className="btn btn--outline" href={stores.moreHref}>
            {stores.moreLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
