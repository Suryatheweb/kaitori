/* ==========================================================================
   Central content file — edit ALL page text, links and image paths here.
   Images live in /public/images/. Swap the src paths for your own files.
   public/images/SIZES.md lists every image's width × height and KB
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
    src: 'images/logo.png',
    alt: '買取ひだまり堂 ロゴ',
  },
  phone: '00-0000-0000',
  phoneHours: '受付時間 9:00 - 18:00',
  phoneHref: 'tel:000000000',
  ctaLabel: '無料査定はこちら',
  ctaHref: '/contact',
  copyright: '© 買取ひだまり堂 2026',
}

export const links = {
  webForm: '/contact',
  chatForm: '/contact',
  forBeginners: '#about',
  items: '#items',
  flow: '#flow',
  faq: '#faq',
  franchise: '#company',
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
  { label: '会社概要', href: '#company' },
]

/* --- Sections ------------------------------------------------------------- */

export const news = {
  title: '新着情報',
  items: [
    { date: '2026.10.01', title: 'Web査定フォームのご案内を更新しました', href: '#contact' },
    { date: '2026.09.15', title: '買取品目のページを公開しました', href: '#items' },
    { date: '2026.09.01', title: '参考買取価格を掲載しました', href: '#price' },
    { date: '2026.08.20', title: 'よくある質問を更新しました', href: '#faq' },
  ] satisfies NewsItem[],
}

export const hero = {
  image: {
    src: 'images/hero-pc.webp',
    srcMobile: 'images/hero-sp.webp',
    alt: '高価買取のメインビジュアル',
    href: '/contact',
  },
}

export const about = {
  id: 'about',
  heading: '幅広い品目を、丁寧に査定',
  lead:
    'お品物の一点一点に目を向け、市場相場をもとにした適正価格をご案内します。\n査定料・出張料・キャンセル料は無料です。',
  body: [
    '腕時計やブランド品、貴金属やジュエリーなど、ご自宅で眠っている品物はありませんか。当店では、時計や貴金属からブランド品、切手や金券まで、幅広い品目を丁寧に査定いたします。',
    '査定はお客様のご納得を第一に行っております。価格にご納得いただけない場合のキャンセルも無料です。まずはお電話またはフォームから、お気軽にご連絡ください。',
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
    'ご自宅で眠っている品物があれば、まずはお気軽にご相談ください。\n下記のほかにも、幅広い品目を取り扱っております。',
  cards: [
    { image: 'images/item-01.png', imageAlt: '金・貴金属のカテゴリ画像', label: '金・貴金属' },
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
  lead: '実際の査定額は品物の状態や相場により異なりますが、参考として一部の買取価格例をご紹介します。',
  badge: '相場変動中',
  cards: [
    {
      image: 'images/price-01.webp',
      imageAlt: 'ブランドバッグの参考買取価格の画像',
      title: 'ブランドバッグ',
      price: '¥120,000',
    },
    {
      image: 'images/price-02.webp',
      imageAlt: 'ブランドバッグ（チェーン付き）の参考買取価格の画像',
      title: 'ブランドバッグ（チェーン付き）',
      price: '¥350,000',
    },
    {
      image: 'images/price-03.webp',
      imageAlt: '記念金貨の参考買取価格の画像',
      title: '記念金貨 1万円',
      price: '¥45,000',
    },
    {
      image: 'images/price-04.webp',
      imageAlt: '高級腕時計の参考買取価格の画像',
      title: '高級腕時計',
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
      body: 'お問い合わせから査定、お支払いまで、できるだけスムーズに進めてまいります。お急ぎの場合も、まずはご相談ください。',
    },
    {
      image: 'images/reason-02.webp',
      imageAlt: '正確な診断のイメージ画像',
      number: 'REASON 02',
      title: '診断の正確さ',
      body: '相場や品物の状態、希少性などを総合的に見極め、根拠のある価格をご提示いたします。',
    },
    {
      image: 'images/flow-01.webp',
      imageAlt: '安心して相談できる対応のイメージ画像',
      number: 'REASON 03',
      title: '安心の対応体制',
      body: '出張査定はもちろん、ご自宅や事務所など、ご指定の場所へ伺います。',
    },
  ] satisfies ReasonBlock[],
  moreLabel: 'はじめてご利用の方へ',
  moreHref: links.forBeginners,
}

export const flow = {
  id: 'flow',
  heading: '買取の流れ',
  lead: 'ご相談からお支払いまでの流れを、3つのステップでご案内します。',
  steps: [
    {
      image: 'images/flow-01.webp',
      imageAlt: 'お問い合わせステップの画像',
      number: '01',
      title: 'お問い合わせ',
      body: 'フォームまたはお電話からお気軽にご連絡ください。品物の種類や点数など、簡単な情報を伺います。',
    },
    {
      image: 'images/flow-02.webp',
      imageAlt: '無料査定ステップの画像',
      number: '02',
      title: '無料査定',
      body: '査定士が一点一点を丁寧に確認し、相場にもとづいた価格をご提示します。査定料は無料です。',
    },
    {
      image: 'images/flow-03.webp',
      imageAlt: 'お支払いステップの画像',
      number: '03',
      title: 'お支払い',
      body: '金額にご納得いただければ、その場でお支払いいたします。キャンセルしても費用はかかりません。',
    },
  ] satisfies FlowStep[],
  moreLabel: '買取の流れはこちら',
  moreHref: links.flow,
}

export const faq = {
  id: 'faq',
  heading: 'よくある質問',
  lead: '査定や買取に関するよくあるご質問をまとめました。',
  items: [
    {
      question: '査定料はかかりますか？',
      answer:
        '査定は無料です。出張料やキャンセル料もいただきませんので、費用の心配なくご相談いただけます。',
    },
    {
      question: '出張査定は可能ですか？',
      answer:
        'はい、出張査定に対応しております。ご自宅や事務所など、ご指定の場所へ査定士が伺います。対応エリアについては、お問い合わせ時にお気軽にご確認ください。',
    },
    {
      question: '査定にはどれくらい時間がかかりますか？',
      answer:
        'お品物の点数や内容により異なります。お急ぎの場合はあらかじめお知らせください。',
    },
    {
      question: '壊れている品物でも買取できますか？',
      answer:
        '傷や動作不良がある品物でも、査定できる場合がございます。状態を拝見したうえで判断しますので、まずはご相談ください。',
    },
    {
      question: 'その場で現金で支払ってもらえますか？',
      answer:
        '査定金額にご納得いただけましたら、その場でお支払いいたします。金額や状況に応じて、銀行振込にも対応可能です。',
    },
  ] satisfies FaqItem[],
  moreLabel: 'よくある質問一覧はこちら',
  moreHref: links.faq,
}

export const company = {
  id: 'company',
  heading: '会社概要',
  rows: [
    { label: '社名', value: '合同会社ReUnion' },
    { label: '屋号', value: '買取ひだまり堂' },
    { label: '事業内容', value: '中古品の買取・販売' },
    {
      label: '本社',
      value: '〒980-0804\n宮城県仙台市青葉区大町2丁目11-11\nGranria西公園305',
    },
    { label: '東京営業所', value: '〒132-0025\n東京都江戸川区松江7-28-3' },
    { label: '代表', value: '高田将暉' },
    { label: '古物商番号', value: '宮城県公安委員会許可\n第221000001646号' },
  ] satisfies CompanyRow[],
}

export const footer = {
  banner: {
    src: 'images/footer-banner.webp',
    srcMobile: 'images/footer-banner-sp.webp',
    alt: 'フッターのバナー画像',
    label: 'FC加盟店募集',
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
  sentMessage: '送信いただきありがとうございました。内容を確認のうえ、担当者よりご連絡いたします。',
  privacyHeading: '個人情報保護方針',
  privacyBody: [
    '当店は、お客様からお預かりする個人情報を適切に管理し、利用目的の範囲内でのみ使用いたします。',
    '取得した個人情報は、査定のご案内、お問い合わせへの回答、サービスに関するご連絡のために利用いたします。ご本人の同意がある場合を除き、個人情報を第三者へ提供することはありません。',
    '個人情報の開示・訂正・削除をご希望の場合は、お問い合わせ窓口までご連絡ください。対応いたします。',
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
