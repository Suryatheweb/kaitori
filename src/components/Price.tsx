import { price } from '../data/siteContent'
import SectionHeading from './SectionHeading'
import './Price.css'

export default function Price() {
  return (
    <section
      className="price section section--dark"
      id={price.id}
      aria-labelledby="price-heading"
    >
      <div className="container">
        <div className="price__badge-row">
          <span className="price__badge">{price.badge}</span>
        </div>
        <SectionHeading title={price.heading} lead={price.lead} id="price-heading" />
        <ul className="price__grid">
          {price.cards.map((card) => (
            <li className="price__card" key={card.title}>
              <img
                className="price__image"
                src={card.image}
                alt={card.imageAlt}
                width={640}
                height={470}
                loading="lazy"
              />
              <div className="price__body">
                <h3 className="price__title">{card.title}</h3>
                <p className="price__row">
                  <span className="price__label">参考買取価格</span>
                  <span className="price__value">{card.price}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
