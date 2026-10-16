import { items } from '../data/siteContent'
import SectionHeading from './SectionHeading'
import './Items.css'

export default function Items() {
  return (
    <section className="items section" id={items.id} aria-labelledby="items-heading">
      <div className="container">
        <SectionHeading title={items.heading} lead={items.lead} id="items-heading" />
        <ul className="items__grid">
          {items.cards.map((card) => (
            <li className="items__card" key={card.label}>
              <img
                className="items__image"
                src={card.image}
                alt={card.imageAlt}
                width={400}
                height={300}
                loading="lazy"
              />
              <h3 className="items__label">{card.label}</h3>
            </li>
          ))}
        </ul>
        <div className="section-actions">
          <a className="btn btn--outline" href={items.moreHref}>
            {items.moreLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
