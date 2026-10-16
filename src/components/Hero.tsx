import { hero } from '../data/siteContent'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
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
    </section>
  )
}
