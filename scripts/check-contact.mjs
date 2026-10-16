import puppeteer from 'puppeteer-core'

const CHROME =
  process.env.CHROME_PATH ||
  'C:/Program Files/Google/Chrome/Application/chrome.exe'
const base = 'http://localhost:4173/'
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true })
const page = await browser.newPage()
let failures = 0

function check(name, ok, extra = '') {
  console.log(`  [${ok ? 'PASS' : 'FAIL'}] ${name}${extra ? ` — ${extra}` : ''}`)
  if (!ok) failures++
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms))

// 1. Direct load of /contact (SPA fallback)
await page.setViewport({ width: 1440, height: 900 })
await page.goto(base + 'contact', { waitUntil: 'networkidle0' })
let h1 = await page.$eval('.contact-page h1', (el) => el.textContent)
check('direct /contact load shows form page', h1 === 'お問い合わせ', h1)
let title = await page.title()
check('document title on /contact', title === 'お問い合わせ | 買取ひだまり堂', title)
await page.screenshot({ path: 'test-screenshots/contact-desktop.png' })

// 2. Form submit (fill required + agree)
await page.type('#contact-name', '山田 太郎')
await page.type('#contact-kana', 'ヤマダ タロウ')
await page.type('#contact-zip', '000-0000')
await page.type('#contact-address', 'サンプル県テスト市中央1-2-3')
await page.type('#contact-email', 'test@example.com')
await page.type('#contact-tel', '00-0000-0000')
await page.click('.contact-form__agree-input')
await page.click('.contact-form__submit .btn')
await wait(300)
const sentText = await page.$eval('.contact-page__sent', (el) => el.textContent).catch(() => null)
check('form submit shows demo message', sentText?.includes('デモ用フォーム') ?? false, String(sentText))
await page.screenshot({ path: 'test-screenshots/contact-desktop-sent.png' })

// 3. From home, header CTA navigates to /contact client-side
await page.goto(base, { waitUntil: 'networkidle0' })
await page.click('.header__cta')
await wait(300)
const pathAfterCta = await page.evaluate(() => window.location.pathname)
check('header CTA goes to /contact', pathAfterCta === '/contact', pathAfterCta)
title = await page.title()
check('title updates after CTA navigation', title === 'お問い合わせ | 買取ひだまり堂', title)

// 4. Web査定 card on home → /contact
await page.goto(base, { waitUntil: 'networkidle0' })
await page.evaluate(() => document.querySelector('#contact')?.scrollIntoView())
await wait(200)
await page.click('.assessment__item:first-child .assessment__card')
await wait(300)
const pathAfterCard = await page.evaluate(() => window.location.pathname)
check('Web査定 card goes to /contact', pathAfterCard === '/contact', pathAfterCard)

// 5. Logo on /contact navigates home
await page.click('.header__logo')
await wait(300)
const pathAfterLogo = await page.evaluate(() => window.location.pathname)
check('logo returns home', pathAfterLogo === '/', pathAfterLogo)

// 5b. Hero image links to /contact (like the reference site's FV)
await page.goto(base, { waitUntil: 'networkidle0' })
const heroHref = await page.$eval('.hero__image-link', (el) => el.getAttribute('href'))
check('hero image is linked', heroHref === '/contact', String(heroHref))
await page.click('.hero__image-link')
await wait(300)
const pathAfterHero = await page.evaluate(() => window.location.pathname)
check('clicking hero image goes to /contact', pathAfterHero === '/contact', pathAfterHero)

// 6. Nav anchor from /contact returns home and scrolls to section
await page.goto(base + 'contact', { waitUntil: 'networkidle0' })
await page.click('.header__nav a[href="#items"]')
await wait(400)
const navState = await page.evaluate(() => ({
  path: window.location.pathname,
  itemsTop: document.querySelector('#items')?.getBoundingClientRect().top ?? null,
}))
check('nav anchor from /contact goes home', navState.path === '/', String(navState.path))
check(
  'nav anchor scrolls to #items',
  navState.itemsTop !== null && navState.itemsTop < 200 && navState.itemsTop > -50,
  String(navState.itemsTop),
)

// 7. Browser back returns to /contact
await page.goBack()
await wait(300)
const pathBack = await page.evaluate(() => window.location.pathname)
check('history back returns to /contact', pathBack === '/contact', pathBack)

// 8. Mobile contact page screenshot
await page.setViewport({ width: 390, height: 844 })
await page.goto(base + 'contact', { waitUntil: 'networkidle0' })
await page.screenshot({ path: 'test-screenshots/contact-mobile.png', fullPage: false })

// 9. No horizontal overflow on contact page
const overflow = await page.evaluate(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  innerWidth: window.innerWidth,
}))
check('no horizontal overflow on /contact', overflow.scrollWidth <= overflow.innerWidth, JSON.stringify(overflow))

await browser.close()
console.log(failures === 0 ? '\nALL CONTACT CHECKS PASSED' : `\n${failures} CHECK(S) FAILED`)
if (failures > 0) process.exit(1)
