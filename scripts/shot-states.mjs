import puppeteer from 'puppeteer-core'

const CHROME =
  process.env.CHROME_PATH ||
  'C:/Program Files/Google/Chrome/Application/chrome.exe'
const base = 'http://localhost:4173/'
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true })
const page = await browser.newPage()

async function shot(name, width, height, actions) {
  await page.setViewport({ width, height })
  await page.goto(base, { waitUntil: 'networkidle0' })
  if (actions) await actions()
  await page.screenshot({ path: `test-screenshots/${name}.png` })
  console.log(`  saved test-screenshots/${name}.png`)
}

await shot('desktop-1440-top', 1440, 900)
await shot('desktop-1440-scrolled', 1440, 900, async () => {
  await page.evaluate(() => window.scrollTo(0, 400))
  await new Promise((r) => setTimeout(r, 400))
})
await shot('desktop-1440-assessment', 1440, 900, async () => {
  await page.evaluate(() => document.querySelector('#contact')?.scrollIntoView())
  await new Promise((r) => setTimeout(r, 400))
})
await shot('mobile-390-top', 390, 844)
await shot('mobile-390-assessment', 390, 844, async () => {
  await page.evaluate(() => document.querySelector('#contact')?.scrollIntoView())
  await new Promise((r) => setTimeout(r, 400))
})
await shot('tablet-768-menu-open', 768, 1024, async () => {
  await page.click('.header__burger')
  await new Promise((r) => setTimeout(r, 400))
})

await browser.close()
console.log('done')
