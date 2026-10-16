import { reasons } from '../data/siteContent'
import SectionHeading from './SectionHeading'
import './Reasons.css'

export default function Reasons() {
  return (
    <section
      className="reasons section section--soft"
      id={reasons.id}
      aria-labelledby="reasons-heading"
    >
      <div className="container">
        <SectionHeading title={reasons.heading} id="reasons-heading" />
        <ul className="reasons__list">
          {reasons.blocks.map((block) => (
            <li className="reasons__item" key={block.number}>
              <div className="reasons__media">
                <img
                  src={block.image}
                  alt={block.imageAlt}
                  width={800}
                  height={533}
                  loading="lazy"
                />
              </div>
              <div className="reasons__content">
                <p className="reasons__number">{block.number}</p>
                <h3 className="reasons__title">{block.title}</h3>
                <p className="reasons__text">{block.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="section-actions">
          <a className="btn btn--outline" href={reasons.moreHref}>
            {reasons.moreLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
