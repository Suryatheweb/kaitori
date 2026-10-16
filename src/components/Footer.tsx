import { footer, site } from '../data/siteContent'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container container--wide">
        <div className="footer__banner-area">
          <a className="footer__banner" href={footer.banner.href}>
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={footer.banner.srcMobile}
              />
              <img
                src={footer.banner.src}
                alt={footer.banner.alt}
                width={1774}
                height={887}
                loading="lazy"
              />
            </picture>
            <span className="footer__banner-label">{footer.banner.label}</span>
          </a>
        </div>

        <div className="footer__main">
          <a className="footer__logo" href="#top">
            <img src={site.logo.src} alt={site.logo.alt} width={280} height={80} />
          </a>

          <nav className="footer__nav" aria-label="フッターナビゲーション">
            <ul className="footer__nav-list">
              {footer.links.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <a className="footer__nav-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__cta">
            <a className="btn btn--primary btn--block" href={site.ctaHref}>
              {site.ctaLabel}
            </a>
            <a className="footer__tel" href={site.phoneHref}>
              {site.phone}
              <span className="footer__tel-hours">{site.phoneHours}</span>
            </a>
          </div>
        </div>

        <p className="footer__copy">
          <small>{site.copyright}</small>
        </p>
      </div>
    </footer>
  )
}
