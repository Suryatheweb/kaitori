import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const outDir = join(root, 'public', 'images')
mkdirSync(outDir, { recursive: true })

const DARK = '#2b1d12'
const CREAM = '#fdf8ef'
const GOLD = '#b08420'

function svg({ w, h, label, bg = DARK, fg = CREAM }) {
  const fontSize = Math.max(14, Math.round(Math.min(w, h) / 7))
  const stroke = fg
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label} placeholder">
  <rect width="${w}" height="${h}" fill="${bg}"/>
  <rect x="8" y="8" width="${w - 16}" height="${h - 16}" fill="none" stroke="${stroke}" stroke-opacity="0.45" stroke-width="2" stroke-dasharray="10 8"/>
  <text x="${w / 2}" y="${h / 2}" fill="${fg}" font-family="Helvetica, Arial, sans-serif" font-size="${fontSize}" font-weight="700" text-anchor="middle" dominant-baseline="central">${label}</text>
</svg>
`
}

const images = [
  { file: 'logo.svg', w: 240, h: 64, label: 'LOGO', bg: DARK, fg: GOLD },
  { file: 'hero.svg', w: 1440, h: 620, label: 'HERO PC 1440x620' },
  { file: 'hero-mobile.svg', w: 768, h: 900, label: 'HERO SP 768x900' },
  { file: 'icon-web.svg', w: 96, h: 96, label: 'WEB', bg: GOLD, fg: '#241105' },
  { file: 'icon-phone.svg', w: 96, h: 96, label: 'TEL', bg: '#3f6b4a', fg: CREAM },
  { file: 'footer-banner.svg', w: 1200, h: 240, label: 'BANNER 1200x240' },
  { file: 'item-01.svg', w: 400, h: 300, label: 'ITEM 01' },
  { file: 'item-02.svg', w: 400, h: 300, label: 'ITEM 02' },
  { file: 'item-03.svg', w: 400, h: 300, label: 'ITEM 03' },
  { file: 'item-04.svg', w: 400, h: 300, label: 'ITEM 04' },
  { file: 'item-05.svg', w: 400, h: 300, label: 'ITEM 05' },
  { file: 'item-06.svg', w: 400, h: 300, label: 'ITEM 06' },
  { file: 'item-07.svg', w: 400, h: 300, label: 'ITEM 07' },
  { file: 'item-08.svg', w: 400, h: 300, label: 'ITEM 08' },
  { file: 'price-01.svg', w: 600, h: 450, label: 'PRICE 01' },
  { file: 'price-02.svg', w: 600, h: 450, label: 'PRICE 02' },
  { file: 'price-03.svg', w: 600, h: 450, label: 'PRICE 03' },
  { file: 'price-04.svg', w: 600, h: 450, label: 'PRICE 04' },
  { file: 'reason-01.svg', w: 800, h: 560, label: 'REASON 01' },
  { file: 'reason-02.svg', w: 800, h: 560, label: 'REASON 02' },
  { file: 'flow-01.svg', w: 640, h: 420, label: 'STEP 01' },
  { file: 'flow-02.svg', w: 640, h: 420, label: 'STEP 02' },
  { file: 'flow-03.svg', w: 640, h: 420, label: 'STEP 03' },
  { file: 'store-01.svg', w: 640, h: 420, label: 'STORE 01' },
  { file: 'store-02.svg', w: 640, h: 420, label: 'STORE 02' },
  { file: 'store-03.svg', w: 640, h: 420, label: 'STORE 03' },
  { file: 'store-04.svg', w: 640, h: 420, label: 'STORE 04' },
]

for (const img of images) {
  writeFileSync(join(outDir, img.file), svg(img), 'utf8')
}

console.log(`Wrote ${images.length} placeholder images to public/images/`)
