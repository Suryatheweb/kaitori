# サンプル買取サービス — ホームページサンプル

参考サイトの**レイアウト構造を再現した、独自のサンプルサイト**です。
React + Vite + TypeScript + 素の CSS で構成されています。
元サイトのロゴ・文言・写真・会社情報は一切使用していません（すべてダミー／プレースホルダー）。

## コマンド

```bash
npm install        # 初回のみ
npm run dev        # 開発サーバー → http://localhost:5173
npm run build      # 本番ビルド（tsc + vite build）
npm run preview    # ビルド結果を確認 → http://localhost:4173
npm run lint       # リント
npm run test:responsive  # 1440/768/390px の表示・機能テスト
```

`test:responsive` は `npm run preview` を起動した状態で実行してください。
スクリーンショットは `test-screenshots/` に出力されます。

## 編集の起点

| 変更したいもの | ファイル |
| --- | --- |
| テキスト・リンク・画像パス（全般） | `src/data/siteContent.ts` |
| 色・フォント・余白・角丸・ボタン | `src/styles/tokens.css` |
| リセット・基本レイアウト・共通ボタン | `src/styles/global.css` |
| 画像（差し替え用プレースホルダー） | `public/images/` |
| ヘッダー（PCナビ・モバイルメニュー） | `src/components/Header.tsx` / `Header.css` |
| 各セクション | `src/components/*.tsx` と同名の `*.css` |
| セクションの並び順 | `src/App.tsx` |

プレースホルダー画像は `node scripts/generate-placeholders.mjs` で再生成できます。
自分の画像を置く場合は `public/images/` に同じファイル名で上書きし、
必要なら `src/data/siteContent.ts` のパス・alt 属性を修正してください。

## セクション構成

1. ヘッダー（PCナビ／モバイルはバーガー＋ドロワー）
2. ヒーロー（見出し・説明・CTA）
3. 新着情報
4. サービス紹介（#about）
5. 無料査定CTA（#contact）
6. 買取品目グリッド（#items）
7. 参考買取価格（#price）
8. 選ばれる理由（#reasons）
9. 無料査定CTA（2回目）
10. 買取の流れ（#flow）
11. よくある質問・アコーディオン（#faq）
12. 会社概要（#company）
13. フッター ＋ モバイル固定お問い合わせバー
