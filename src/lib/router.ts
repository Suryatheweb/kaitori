/* Tiny pushState router — no dependencies, good enough for a 2-page site. */

type Listener = (path: string) => void

const listeners = new Set<Listener>()
let currentPath = window.location.pathname

export function getPath(): string {
  return currentPath
}

export function subscribe(fn: Listener): () => void {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

function emit(path: string): void {
  currentPath = path
  listeners.forEach((fn) => fn(path))
}

export function navigate(href: string): void {
  const url = new URL(href, window.location.href)
  const path = url.pathname
  const hash = url.hash

  if (path !== currentPath) {
    window.history.pushState({}, '', path + hash)
    emit(path)
    window.scrollTo({ top: 0 })
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    }
    return
  }

  if (hash) {
    window.history.pushState({}, '', path + hash)
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }
}

/** Intercept same-origin anchor clicks and route them client-side. */
export function installRouter(): () => void {
  const onPop = () => emit(window.location.pathname)

  const onClick = (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return
    }
    const anchor = (e.target as HTMLElement | null)?.closest('a')
    if (!anchor || (anchor.target && anchor.target !== '_self') || anchor.hasAttribute('download')) {
      return
    }
    const href = anchor.getAttribute('href')
    if (!href || href.startsWith('#')) {
      // In-page anchors: only intercept when we must navigate home first.
      if (href && currentPath !== '/') {
        e.preventDefault()
        navigate(`/${href}`)
      }
      return
    }
    let url: URL
    try {
      url = new URL(href, window.location.href)
    } catch {
      return
    }
    if (url.origin !== window.location.origin) {
      return // external links, tel:, mailto:
    }
    e.preventDefault()
    navigate(url.pathname + url.hash)
  }

  window.addEventListener('popstate', onPop)
  document.addEventListener('click', onClick)
  return () => {
    window.removeEventListener('popstate', onPop)
    document.removeEventListener('click', onClick)
  }
}
