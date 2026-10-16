import { site } from '../data/siteContent'
import './MobileContactBar.css'

/**
 * Fixed bottom contact bar — only visible on small screens.
 * Gives mobile visitors persistent access to phone + free assessment CTA.
 */
export default function MobileContactBar() {
  return (
    <div className="mobile-bar" role="region" aria-label="お問い合わせショートカット">
      <a className="mobile-bar__button mobile-bar__button--outline" href={site.phoneHref}>
        <span className="mobile-bar__icon" aria-hidden="true">
          ☎
        </span>
        電話で相談
      </a>
      <a className="mobile-bar__button mobile-bar__button--fill" href={site.ctaHref}>
        {site.ctaLabel}
      </a>
    </div>
  )
}
