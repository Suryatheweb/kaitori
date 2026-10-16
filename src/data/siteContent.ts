/* ==========================================================================
   Central content file — edit ALL page text, links and image paths here.
   Images live in /public/images/. Swap the src paths for your own files.
   Current files were downloaded from the reference site; see
   public/images/SIZES.md for every image's width × height and KB
   (regenerate: node scripts/image-info.mjs). Match those sizes when swapping.
   ========================================================================== */

export interface NavLink {
  label: string
  href: string
}

export interface NewsItem {
  date: string
  title: string
  href: string
}

export interface ItemCard {
  image: string
  imageAlt: string
  label: string
}

export interface PriceCard {
  image: string
  imageAlt: string
  title: string
  price: string
}

export interface ReasonBlock {
  image: string
  imageAlt: string
  number: string
  title: string
  body: string
}

export interface FlowStep {
  image: string
  imageAlt: string
  number: string
  title: string
  body: string
}

export interface StoreCard {
  image: string
  imageAlt: string
  name: string
  address: string
  tel: string
  access: string
  note?: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface CompanyRow {
  label: string
  value: string
}

export interface CtaOption {
  icon: string
  iconAlt: string
  lead: string
  title: string
  note: string
  href: string
}

/* --- Site-wide settings --------------------------------------------------- */

export const site = {
  name: '買取ひだまり堂',
  logo: {
    src: 'images/logo.svg',
    alt: '買取ひだまり堂 ロゴ',
  },
  phone: '00-0000-0000',
  phoneHours: '受付時間 9:00 - 18:00',
  phoneHref: 'tel:000000000',
  ctaLabel: '無料査定はこちら',
  ctaHref: '/contact',
  copyright: '© 買取ひだまり堂',
}

/* Placeholder links — replace with your real URLs later. */
export const links = {
  webForm: 'https://example.com/web-assessment',
  chatForm: 'https://example.com/chat-assessment',
  forBeginners: 'https://example.com/for-beginners',
  items: 'https://example.com/items',
  flow: 'https://example.com/flow',
  faq: 'https://example.com/faq',
  stores: 'https://example.com/stores',
  franchise: 'https://example.com/franchise',
}

export const navLinks: NavLink[] = [
  { label: 'はじめての方へ', href: '#about' },
  { label: '買取品目', href: '#items' },
  { label: '買取の流れ', href: '#flow' },
  { label: 'よくある質問', href: '#faq' },
]

export const mobileNavLinks: NavLink[] = [
  ...navLinks,
  { label: '参考買取価格', href: '#price' },
  { label: '店舗一覧', href: '#stores' },
  { label: '会社概要', href: '#company' },
]

/* --- Sections ------------------------------------------------------------- */

export const news = {
  title: '新着情報',
  items: [
    { date: '2026.10.01', title: '新しいサンプル店舗がオープンしました', href: '#stores' },
    { date: '2026.09.15', title: '買取品目のラインナップを追加しました', href: '#items' },
    { date: '2026.09.01', title: '無料査定キャンペーンのお知らせ（ダミー）', href: '#contact' },
    { date: '2026.08.20', title: 'よくある質問ページを更新しました', href: '#faq' },
  ] satisfies NewsItem[],
}

export const hero = {
  heading: '大切な品を、\n適正価格で買取します',
  description:
    'ここはプレースホルダーの説明文です。腕時計・ブランド品・貴金属など、幅広い品目を対象とした架空サービスのキャッチコピーと本文を自由に差し替えてください。',
  image: {
    src: 'images/hero-pc.webp',
    srcMobile: 'images/hero-sp.webp',
    alt: 'サービス紹介のメインビジュアル',
    href: '/contact',
  },
  primaryCta: { label: '無料査定を依頼する', href: '/contact' },
  secondaryCta: { label: '買取の流れを見る', href: '#flow' },
}

export const about = {
  id: 'about',
  heading: '幅広い品目を、丁寧に査定',
  lead:
    'お品物の一点一点に目を向け、市場相場をもとにした適正価格をご案内します。\n査定料・出張料・キャンセル料は無料という前提のサンプル文案です。',
  body: [
    'こちらはプレースホルダーの本文です。保有している品物の例、査定の流れ、安心して相談できる理由などを、実際の事業内容に合わせて書き換えてください。',
    '文章は段落ごとに管理されているので、src/data/siteContent.ts の about.body を編集するだけで反映されます。',
  ],
}

export const assessment = {
  id: 'contact',
  heading: '無料査定はこちら',
  options: [
    {
      icon: 'images/icon-web.webp',
      iconAlt: 'Web査定のアイコン画像',
      lead: '写真を送るだけ！簡単30秒',
      title: 'Web査定はこちら',
      note: 'フォームから24時間受付',
      href: '/contact',
    },
    {
      icon: 'images/icon-line.webp',
      iconAlt: 'LINE査定のアイコン画像',
      lead: 'トークで写真を送るだけ！',
      title: 'LINE査定はこちら',
      note: 'LINEから24時間受付中',
      href: links.chatForm,
    },
  ] satisfies CtaOption[],
}

export const items = {
  id: 'items',
  heading: '買取品目',
  lead:
    'ご自宅で眠っている品物があれば、まずはお気軽にご相談ください。\n下記はダミーのカテゴリーです。文字と画像を自由に差し替えられます。',
  cards: [
    { image: 'images/item-01.webp', imageAlt: '金・貴金属のカテゴリ画像', label: '金・貴金属' },
    { image: 'images/item-02.webp', imageAlt: '宝石のカテゴリ画像', label: '宝石' },
    { image: 'images/item-03.webp', imageAlt: 'ブランド品のカテゴリ画像', label: 'ブランド' },
    { image: 'images/item-04.webp', imageAlt: '時計のカテゴリ画像', label: '時計' },
    { image: 'images/item-05.webp', imageAlt: '切手のカテゴリ画像', label: '切手' },
    { image: 'images/item-06.webp', imageAlt: '古銭のカテゴリ画像', label: '古銭' },
    { image: 'images/item-07.webp', imageAlt: '骨董品のカテゴリ画像', label: '骨董品' },
    { image: 'images/item-08.webp', imageAlt: '金券のカテゴリ画像', label: '金券' },
  ] satisfies ItemCard[],
  moreLabel: '買取品目一覧はこちら',
  moreHref: links.items,
}

export const price = {
  id: 'price',
  heading: '参考買取価格',
  lead: '実際の相場ではなく、レイアウト確認用のダミー価格です。',
  badge: '相場変動中',
  cards: [
    {
      image: 'images/price-01.webp',
      imageAlt: '参考買取価格の商品1の画像',
      title: 'ブランドバッグ サンプル01',
      price: '¥120,000',
    },
    {
      image: 'images/price-02.webp',
      imageAlt: '参考買取価格の商品2の画像',
      title: '腕時計 サンプル02',
      price: '¥350,000',
    },
    {
      image: 'images/price-03.webp',
      imageAlt: '参考買取価格の商品3の画像',
      title: '記念金貨 サンプル03',
      price: '¥45,000',
    },
    {
      image: 'images/price-04.webp',
      imageAlt: '参考買取価格の商品4の画像',
      title: 'ジュエリー サンプル04',
      price: '¥80,000',
    },
  ] satisfies PriceCard[],
}

export const reasons = {
  id: 'reasons',
  heading: '選ばれる3つの理由',
  blocks: [
    {
      image: 'images/reason-01.webp',
      imageAlt: 'スピード査定のイメージ画像',
      number: 'REASON 01',
      title: '査定のスピード',
      body: 'プレースホルダーの本文です。問い合わせから査定、お支払いまでの流れを素早く進められる理由を、実際のサービス内容に合わせて記述してください。',
    },
    {
      image: 'images/reason-02.webp',
      imageAlt: '正確な診断のイメージ画像',
      number: 'REASON 02',
      title: '診断の正確さ',
      body: 'プレースホルダーの本文です。相場や状態、希少性などを総合的に判断して価格を提示する姿勢を、独自の表現に書き換えてください。',
    },
    {
      image: 'images/flow-01.webp',
      imageAlt: '安心して相談できる対応のイメージ画像',
      number: 'REASON 03',
      title: '安心の対応体制',
      body: 'プレースホルダーの本文です。店舗での対応や出張対応など、お客様が安心して相談できる環境についてのダミー文章が入ります。',
    },
  ] satisfies ReasonBlock[],
  moreLabel: 'はじめてご利用の方へ',
  moreHref: links.forBeginners,
}

export const flow = {
  id: 'flow',
  heading: '買取の流れ',
  lead: 'ご相談からお支払いまでの流れを、3つのステップでご案内します。（ダミー文章）',
  steps: [
    {
      image: 'images/flow-01.webp',
      imageAlt: 'お問い合わせステップの画像',
      number: '01',
      title: 'お問い合わせ',
      body: 'フォームまたはお電話からお気軽にご連絡ください。専門スタッフが丁寧にご案内します（ダミー文）。',
    },
    {
      image: 'images/flow-02.webp',
      imageAlt: '無料査定ステップの画像',
      number: '02',
      title: '無料査定',
      body: '査定士が一点一点を丁寧に確認し、相場にもとづいた価格をご提示します（ダミー文）。',
    },
    {
      image: 'images/flow-03.webp',
      imageAlt: 'お支払いステップの画像',
      number: '03',
      title: 'お支払い',
      body: '金額にご納得いただければ、その場でお支払いいたします（ダミー文）。',
    },
  ] satisfies FlowStep[],
  moreLabel: '買取の流れはこちら',
  moreHref: links.flow,
}

export const stores = {
  id: 'stores',
  heading: '店舗一覧',
  lead: '住所・電話番号はすべてダミーです。実際の店舗情報に差し替えてください。',
  cards: [
    {
      image: 'images/store-01.jpg',
      imageAlt: 'サンプル店舗1の外観画像',
      name: 'サンプル店舗 A',
      address: '〒000-0000 サンプル県テスト市中央1-2-3',
      tel: '00-0000-0001',
      access: '最寄駅から徒歩5分',
    },
    {
      image: 'images/store-02.jpg',
      imageAlt: 'サンプル店舗2の外観画像',
      name: 'サンプル店舗 B',
      address: '〒000-0000 サンプル県ダミー市駅前4-5-6',
      tel: '00-0000-0002',
      access: '地下鉄駅から徒歩3分',
      note: '出張査定に対応しています（ダミー注記）。',
    },
    {
      image: 'images/store-03.jpg',
      imageAlt: 'サンプル店舗3の外観画像',
      name: 'サンプル店舗 C',
      address: '〒000-0000 サンプル県試験市南7-8-9',
      tel: '00-0000-0003',
      access: 'バス停から徒歩2分',
    },
    {
      image: 'images/store-04.jpg',
      imageAlt: 'サンプル店舗4の外観画像',
      name: 'サンプル店舗 D',
      address: '〒000-0000 サンプル県例示町西10-11-12',
      tel: '00-0000-0004',
      access: '近隣駐車場あり',
    },
  ] satisfies StoreCard[],
  moreLabel: '店舗一覧はこちら',
  moreHref: links.stores,
}

export const faq = {
  id: 'faq',
  heading: 'よくある質問',
  lead: '以下はすべてダミーのQ&Aです。実際の内容に差し替えてください。',
  items: [
    {
      question: '査定料はかかりますか？',
      answer:
        'プレースホルダーの回答です。査定料は無料という想定のダミー文をここに記載します。実際の料金体系に合わせて書き換えてください。',
    },
    {
      question: '出張査定は可能ですか？',
      answer:
        'プレースホルダーの回答です。出張対応の可否や対応エリアを、実際のサービス内容に合わせて記述してください。',
    },
    {
      question: '査定にはどれくらい時間がかかりますか？',
      answer:
        'プレースホルダーの回答です。目安の所要時間をダミーとして記載しています。',
    },
    {
      question: '壊れている品物でも買取できますか？',
      answer:
        'プレースホルダーの回答です。状態に関する考え方を、実際の方針に合わせて書き換えてください。',
    },
    {
      question: 'その場で現金で支払ってもらえますか？',
      answer:
        'プレースホルダーの回答です。支払い方法に関するダミー説明が入ります。',
    },
  ] satisfies FaqItem[],
  moreLabel: 'よくある質問一覧はこちら',
  moreHref: links.faq,
}

export const company = {
  id: 'company',
  heading: '会社概要',
  rows: [
    { label: '社名', value: '株式会社サンプル（ダミー）' },
    { label: '屋号', value: '買取ひだまり堂' },
    { label: '事業内容', value: '中古品の買取・販売（ダミー記載）' },
    { label: '住所', value: '〒000-0000 サンプル県テスト市中央1-2-3' },
    { label: '代表', value: '代表者 名前（ダミー）' },
    { label: '設立', value: '20XX年X月' },
    { label: '古物商許可番号', value: '第000000000000号（ダミー）' },
  ] satisfies CompanyRow[],
}

export const footer = {
  banner: {
    src: 'images/footer-banner.webp',
    srcMobile: 'images/footer-banner-sp.webp',
    alt: 'フッターのバナー画像',
    label: 'フランチャイズ募集（バナー差し替え用）',
    href: links.franchise,
  },
  links: [...navLinks, { label: 'フランチャイズ募集', href: links.franchise }],
}

/* --- Contact page (/contact) ---------------------------------------------- */

export const contact = {
  heading: 'お問い合わせ',
  lead: '査定のお申し込み、ご相談はこちら。出張料、査定料、キャンセル料はありません。安心してお申し込みください。',
  instruction: '下記フォームの必要事項を入力し、「送信する」ボタンを押してください。',
  requiredLabel: '必須',
  optionalLabel: '任意',
  submitLabel: '送信する',
  agreeLabel: 'プライバシーポリシーに同意する',
  sentMessage: 'デモ用フォームのため送信されません。ご入力ありがとうございました。',
  privacyHeading: '個人情報保護方針',
  privacyBody: [
    'こちらはプレースホルダーの個人情報保護方針です。取得した情報の利用目的、管理方法、第三者提供についての考え方を、実際の方針に合わせて書き換えてください。',
    '文章は src/data/siteContent.ts の contact.privacyBody で自由に追加・編集できます。段落ごとに配列の要素として管理されています。',
  ],
  fields: {
    name: { label: 'お名前' },
    kana: { label: 'フリガナ' },
    zip: { label: '郵便番号' },
    address: { label: '住所' },
    email: { label: 'メールアドレス' },
    tel: { label: '電話番号' },
    datetime: { label: 'ご希望日時' },
    photos: { label: 'お品物の写真' },
    message: { label: '備考欄' },
  },
}
