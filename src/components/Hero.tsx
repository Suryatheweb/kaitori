import { hero } from '../data/siteContent'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <a className="hero__image-link" href={hero.image.href}>
        <picture className="hero__picture">
          <source media="(max-width: 767px)" srcSet={hero.image.srcMobile} />
          <img
            className="hero__image"
            src={hero.image.src}
            alt={hero.image.alt}
            width={1742}
            height={903}
            fetchPriority="high"
          />
        </picture>
      </a>

      <div className="hero__overlay">
        <div className="hero__content container">
          <h1 className="hero__title" id="hero-title">
            {hero.heading}
          </h1>
          <p className="hero__description">{hero.description}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className="btn btn--light" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
