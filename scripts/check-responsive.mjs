/**
 * Responsive smoke test — runs the built site through headless Chrome at
 * desktop / tablet / mobile widths and checks the functional requirements.
 *
 * Prerequisite: `npm run build`, then start `npm run preview` on port 4173.
 * Run with: `npm run test:responsive`
 */
import puppeteer from 'puppeteer-core'
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'

const CHROME =
  process.env.CHROME_PATH ||
  'C:/Program Files/Google/Chrome/Application/chrome.exe'
const BASE_URL = process.env.BASE_URL || 'http://localhost:4173/'
const SHOTS = join(process.cwd(), 'test-screenshots')

const VIEWPORTS = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'mobile-390', width: 390, height: 844 },
]

const failures = []
const check = (label, ok, detail = '') => {
  const mark = ok ? 'PASS' : 'FAIL'
  console.log(`  [${mark}] ${label}${detail ? ` — ${detail}` : ''}`)
  if (!ok) failures.push(label)
}

mkdirSync(SHOTS, { recursive: true })

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true })

try {
  for (const vp of VIEWPORTS) {
    console.log(`\n== ${vp.name} (${vp.width}x${vp.height}) ==`)
    const page = await browser.newPage()
    await page.setViewport({ width: vp.width, height: vp.height })
    await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 30000 })

    // 1. No horizontal overflow
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement
      const offenders = []
      const isHiddenOrOffCanvas = (el) => {
        // Closed mobile drawer is intentionally translated off-canvas.
        if (el.closest('.header__drawer') && !el.closest('.header__drawer.is-open')) return true
        const style = getComputedStyle(el)
        return style.visibility === 'hidden' || style.display === 'none'
      }
      for (const el of document.querySelectorAll('*')) {
        if (isHiddenOrOffCanvas(el)) continue
        const r = el.getBoundingClientRect()
        if (r.right > window.innerWidth + 1 || r.left < -1) {
          offenders.push(
            `${el.tagName.toLowerCase()}.${String(el.className).split(' ')[0]} right=${Math.round(r.right)}`,
          )
        }
      }
      return {
        scrollWidth: doc.scrollWidth,
        innerWidth: window.innerWidth,
        offenders: offenders.slice(0, 5),
      }
    })
    check(
      'no horizontal overflow',
      overflow.scrollWidth <= overflow.innerWidth + 1,
      `scrollWidth=${overflow.scrollWidth} innerWidth=${overflow.innerWidth}` +
        (overflow.offenders.length ? ` offenders: ${overflow.offenders.join(', ')}` : ''),
    )

    // 2. All sections rendered
    const sections = await page.evaluate(() =>
      ['top', 'news', 'about', 'contact', 'items', 'price', 'reasons', 'flow', 'faq', 'company']
        .filter((id) => !document.getElementById(id))
        .concat(
          document.querySelectorAll('main > section').length === 11
            ? []
            : [`section count=${document.querySelectorAll('main > section').length}`],
        ),
    )
    check('all section anchors present', sections.length === 0, sections.join(', '))

    // 3. Navigation visibility rules
    const desktopNav = await page.$('.header__nav')
    const burger = await page.$('.header__burger')
    const navVisible = await desktopNav?.isVisible()
    const burgerVisible = await burger?.isVisible()
    if (vp.width >= 1024) {
      check('desktop nav visible', navVisible === true)
      check('burger hidden', burgerVisible === false)
    } else {
      check('burger visible', burgerVisible === true)
      check('desktop nav hidden', navVisible === false)
    }

    // 4. Mobile menu open/close
    if (vp.width < 1024) {
      await burger.click()
      await new Promise((r) => setTimeout(r, 400))
      const opened = await page.evaluate(() => {
        const btn = document.querySelector('.header__burger')
        const drawer = document.querySelector('.header__drawer')
        return (
          btn?.getAttribute('aria-expanded') === 'true' &&
          drawer?.classList.contains('is-open')
        )
      })
      check('mobile menu opens (aria-expanded + is-open)', opened)
      await page.screenshot({ path: join(SHOTS, `${vp.name}-menu-open.png`) })

      await page.keyboard.press('Escape')
      await new Promise((r) => setTimeout(r, 400))
      const closedByEsc = await page.evaluate(
        () => document.querySelector('.header__burger')?.getAttribute('aria-expanded') === 'false',
      )
      check('mobile menu closes with Escape', closedByEsc)

      await burger.click()
      await new Promise((r) => setTimeout(r, 300))
      await page.click('.header__drawer-link')
      await new Promise((r) => setTimeout(r, 500))
      const closedByLink = await page.evaluate(
        () => document.querySelector('.header__burger')?.getAttribute('aria-expanded') === 'false',
      )
      check('mobile menu closes when a link is clicked', closedByLink)
    }

    // 5. Nav anchor scrolls to the right section
    await page.evaluate(() => window.scrollTo(0, 0))
    if (vp.width >= 1024) {
      await page.click('.header__nav-list a[href="#items"]')
    } else {
      await page.click('.header__burger')
      await new Promise((r) => setTimeout(r, 400))
      await page.click('.header__drawer-link[href="#items"]')
    }
    await new Promise((r) => setTimeout(r, 900))
    const scrollTarget = await page.evaluate(() => {
      const el = document.getElementById('items')
      if (!el) return null
      return Math.abs(el.getBoundingClientRect().top)
    })
    check('nav anchor scrolls near #items', scrollTarget !== null && scrollTarget < 200, `top=${scrollTarget}`)

    // 6. FAQ expand / collapse
    await page.evaluate(() => document.getElementById('faq')?.scrollIntoView())
    const faqResult = await page.evaluate(async () => {
      const btn = document.querySelector('.faq__toggle')
      if (!btn) return { error: 'no button' }
      btn.click()
      await new Promise((r) => setTimeout(r, 400))
      const expanded = btn.getAttribute('aria-expanded')
      const answer = document.getElementById(btn.getAttribute('aria-controls'))
      const openHeight = answer?.getBoundingClientRect().height ?? 0
      btn.click()
      await new Promise((r) => setTimeout(r, 400))
      const collapsed = btn.getAttribute('aria-expanded')
      const closedHeight = answer?.getBoundingClientRect().height ?? 0
      return { expanded, collapsed, openHeight, closedHeight }
    })
    check('FAQ expands', faqResult.expanded === 'true' && faqResult.openHeight > 10, JSON.stringify(faqResult))
    check('FAQ collapses', faqResult.collapsed === 'false' && faqResult.closedHeight < 10)

    // 7. Placeholder links defined (no empty hrefs)
    const badHrefs = await page.evaluate(() =>
      [...document.querySelectorAll('a')].filter((a) => !a.getAttribute('href')).length,
    )
    check('every anchor has an href', badHrefs === 0, `${badHrefs} missing`)

    // 8. Images have alt text
    const noAlt = await page.evaluate(
      () => [...document.querySelectorAll('img')].filter((i) => !i.hasAttribute('alt')).length,
    )
    check('every img has alt attribute', noAlt === 0, `${noAlt} missing`)

    // Screenshots (full page) — scroll first so lazy-loaded images decode
    await page.evaluate(async () => {
      const h = document.body.scrollHeight
      for (let y = 0; y < h; y += 500) {
        window.scrollTo(0, y)
        await new Promise((r) => setTimeout(r, 50))
      }
      window.scrollTo(0, 0)
    })
    await page.evaluate(() =>
      Promise.all([...document.images].map((i) => i.decode().catch(() => {}))),
    )
    await new Promise((r) => setTimeout(r, 400))
    await page.screenshot({ path: join(SHOTS, `${vp.name}.png`), fullPage: true })
    console.log(`  screenshot: test-screenshots/${vp.name}.png`)

    await page.close()
  }
} finally {
  await browser.close()
}

console.log(`\n${failures.length === 0 ? 'ALL CHECKS PASSED' : `${failures.length} CHECK(S) FAILED:`}`)
if (failures.length) {
  console.log(failures.map((f) => ` - ${f}`).join('\n'))
  process.exitCode = 1
}
