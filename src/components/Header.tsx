import { useEffect, useId, useState } from 'react'
import { mobileNavLinks, navLinks, site } from '../data/siteContent'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="header__inner">
        <a className="header__logo" href="#top" onClick={closeMenu}>
          <img src={site.logo.src} alt={site.logo.alt} width={280} height={80} />
        </a>

        <nav className="header__nav" aria-label="メインナビゲーション">
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="header__nav-link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a className="header__tel" href={site.phoneHref}>
            <svg
              className="header__tel-icon"
              viewBox="0 0 24 24"
              width="26"
              height="26"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
            </svg>
            <span className="header__tel-body">
              <span className="header__tel-number">{site.phone}</span>
              <span className="header__tel-hours">{site.phoneHours}</span>
            </span>
          </a>
          <a className="btn btn--primary header__cta" href={site.ctaHref}>
            {site.ctaLabel}
          </a>
        </div>

        <button
          type="button"
          className={`header__burger${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="header__burger-line" />
          <span className="header__burger-line" />
          <span className="header__burger-line" />
        </button>
      </div>

      <div
        id={menuId}
        className={`header__drawer${open ? ' is-open' : ''}`}
        aria-hidden={!open}
      >
        <nav aria-label="モバイルナビゲーション">
          <ul className="header__drawer-list">
            {mobileNavLinks.map((link) => (
              <li key={link.href}>
                <a className="header__drawer-link" href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__drawer-actions">
          <a className="btn btn--outline btn--block" href={site.phoneHref}>
            電話で相談する {site.phone}
          </a>
          <a className="btn btn--primary btn--block" href={site.ctaHref} onClick={closeMenu}>
            {site.ctaLabel}
          </a>
        </div>
      </div>
      {open && (
        <button
          type="button"
          className="header__backdrop"
          aria-label="メニューを閉じる"
          onClick={closeMenu}
        />
      )}
    </header>
  )
}
