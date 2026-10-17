$theme = 'https://kaitori-bugyo.jp/wp-content/themes/original-theme/img'
$uploads = 'https://kaitori-bugyo.jp/wp-content/uploads'
$img = 'public/images'

$files = @(
  # canonical wired images
  @{ url = "$theme/logo.webp";                    out = "$img/logo.webp" },
  @{ url = "$theme/fv_pc.webp";                   out = "$img/hero-pc.webp" },
  @{ url = "$theme/fv_sp.webp";                   out = "$img/hero-sp.webp" },
  @{ url = "$theme/icon-web.webp";                out = "$img/icon-web.webp" },
  @{ url = "$theme/item-gold.webp";               out = "$img/item-01.webp" },
  @{ url = "$theme/item-jewelry.webp";            out = "$img/item-02.webp" },
  @{ url = "$theme/item-brand.webp";              out = "$img/item-03.webp" },
  @{ url = "$theme/item-watch.webp";              out = "$img/item-04.webp" },
  @{ url = "$theme/item-stamp.webp";              out = "$img/item-05.webp" },
  @{ url = "$theme/item-coin.webp";               out = "$img/item-06.webp" },
  @{ url = "$theme/item-antique.webp";            out = "$img/item-07.webp" },
  @{ url = "$theme/item-ticket.webp";             out = "$img/item-08.webp" },
  @{ url = "$theme/price-item_01.webp";           out = "$img/price-01.webp" },
  @{ url = "$theme/price-item_02.webp";           out = "$img/price-02.webp" },
  @{ url = "$theme/price-item_03.webp";           out = "$img/price-03.webp" },
  @{ url = "$theme/price-item_04.webp";           out = "$img/price-04.webp" },
  @{ url = "$theme/reason_img_01.webp";           out = "$img/reason-01.webp" },
  @{ url = "$theme/reason_img_02.webp";           out = "$img/reason-02.webp" },
  @{ url = "$theme/flow_01.webp";                 out = "$img/flow-01.webp" },
  @{ url = "$theme/flow_02.webp";                 out = "$img/flow-02.webp" },
  @{ url = "$theme/flow_03.webp";                 out = "$img/flow-03.webp" },
  @{ url = "$theme/fc_banner.webp";               out = "$img/footer-banner.webp" },
  @{ url = "$theme/fc_banner_sp.webp";            out = "$img/footer-banner-sp.webp" },
  # extras kept with original names
  @{ url = "$theme/icon-line.webp";               out = "$img/icon-line.webp" },
  @{ url = "$theme/cta_title.webp";               out = "$img/cta_title.webp" },
  @{ url = "$theme/price-title-head.webp";        out = "$img/price-title-head.webp" },
  @{ url = "$theme/title-underline.webp";         out = "$img/title-underline.webp" },
  @{ url = "$theme/nagashima_1200.webp";          out = "$img/nagashima_1200.webp" },
  @{ url = "$theme/footer-btn.webp";              out = "$img/footer-btn.webp" },
  @{ url = "$theme/footer-btn_sp.webp";           out = "$img/footer-btn_sp.webp" },
  @{ url = "$uploads/2026/08/jcrma_logo.png";     out = "$img/jcrma_logo.png" }
  # NOTE: favicon / ogp images are intentionally NOT downloaded here.
  # They are our own branding: public/favicon*.png and public/ogp.png
)

$fail = 0
foreach ($f in $files) {
  $dir = Split-Path $f.out -Parent
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
  & curl.exe -sSL --fail -o $f.out $f.url
  if ($LASTEXITCODE -ne 0) {
    Write-Host "FAIL $($f.url)"
    $fail++
  } else {
    $size = (Get-Item $f.out).Length
    Write-Host ("OK   {0,-45} {1,8} bytes" -f $f.out, $size)
  }
}
Write-Host ""
if ($fail -gt 0) { Write-Host "$fail DOWNLOAD(S) FAILED"; exit 1 } else { Write-Host "ALL $($files.Count) DOWNLOADS OK" }
