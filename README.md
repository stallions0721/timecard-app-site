# アプリ紹介サイト（静的）

タイムカードアプリの紹介ページです。**編集はこの `website/` で行い、公開は別の公開 GitHub リポジトリへ同期**します。

## 公開の仕組み（重要）

| 場所 | リポジトリ | 役割 |
|------|------------|------|
| ここ（本体） | `timecard_app` **非公開** | ソースの編集・スクショ同期 |
| 公開用 | `timecard-app-site` 等 **公開** | GitHub Pages で配信 |

手順の詳細（**`gh` 不要・ブラウザ + git のみ**）: [docs/pages_public_repo_setup.md](../docs/pages_public_repo_setup.md)

```bash
# 1. スクショを更新したとき（任意）
./tool/sync_website_screenshots.sh

# 2. 公開リポジトリへ反映
./tool/publish_public_website.sh ../timecard-app-site
cd ../timecard-app-site && git add -A && git commit -m "Update website" && git push
```

公開 URL の例: `https://stallions0721.github.io/timecard-app-site/`

## 含まれるファイル

| ファイル | 内容 |
|----------|------|
| `index.html` | 紹介ページ（日本語） |
| `index-en.html` | 紹介ページ（英語） |
| `help.html` | 使い方ガイド（日本語） |
| `help-en.html` | 使い方ガイド（英語） |
| `privacy.html` | ブログのプライバシーポリシーへリダイレクト（日本語） |
| `privacy-en.html` | プライバシーポリシー（英語・サイト内） |
| `robots.txt` | 検索クローラー向け（サイトマップの所在） |
| `sitemap.xml` | 検索エンジン向けサイトマップ |
| `404.html` | 存在しない URL の案内 |
| `assets/og-image-ja.png` / `og-image-en.png` | SNS・検索向け OGP 画像（1200×630） |
| `app-ads.txt` | AdMob 用（サイトの**ルート**に配置） |
| `assets/badges/` | 公式ストアバッジ |
| `assets/screenshots/` | 画面キャプチャ |

### スクショの同期（`docs/verification/` を更新したとき）

```bash
./tool/sync_website_screenshots.sh
```

| 紹介サイト | 日本語 | 英語 |
|------------|--------|------|
| `home.png` | `ios_01_home.png` | `ios_en_01_home.png` |
| `month-list.png` | `ios_02_month_list.png` | `ios_en_02_month_list.png` |
| `month-calendar.png` | `ios_07_month_calendar.png` | `ios_en_07_month_calendar.png` |
| `daily.png` | `ios_03_daily_edit.png` | `ios_en_03_daily_edit.png` |
| `year.png` | `ios_04_year_list.png` | `ios_en_04_year_list.png` |
| `workplace-list.png` | `ios_05_work_place.png` | `ios_en_05_work_place.png` |
| `widget-settings.png` | `ios_09_widget_settings.png` | `ios_en_09_widget_settings.png` |
| `month-detail.png` | `ios_06_month_dtl.png` | （英語版なし） |

出力先は `website/assets/screenshots/ja/` と `en/` です。幅 780px にリサイズしてから配置します。

## ストア URL

| プラットフォーム | URL |
|------------------|-----|
| iPhone（App Store） | https://apps.apple.com/jp/app/id6766721474 |
| Android（Google Play） | https://play.google.com/store/apps/details?id=jp.ne.app.kintai.activity |

### Play Console / AdMob で登録する URL

公開リポジトリ名に合わせて更新してください。

| 用途 | URL（例: リポジトリ `timecard-app-site`） |
|------|------------------------------------------|
| 開発者サイト・紹介 | `https://stallions0721.github.io/timecard-app-site/` |
| app-ads.txt | `https://stallions0721.github.io/timecard-app-site/app-ads.txt` |
| プライバシーポリシー（日本語） | https://stallions0721.blogspot.com/2026/04/2026412-time-card-1.html |
| プライバシーポリシー（英語） | `…/privacy-en.html`（例: `https://stallions0721.github.io/timecard-app-site/privacy-en.html`） |
| 英語トップ | `…/index-en.html` |

## ローカル確認

```bash
cd website
python3 -m http.server 8080
```

ブラウザで http://localhost:8080/ を開きます。

## 文言の更新

ストア掲載文のドラフトは `docs/play_store_listing_draft.md` です。紹介文を変えるときは `index.html` とそちらを揃えるとよいです。

## 検索に見つかりやすくする（SEO）

サイト側の技術対策（canonical、hreflang、サイトマップ、構造化データ、OGP）は HTML に入れてあります。**検索結果に出すには、公開後に Google へ登録する作業が必要**です。

### 1. Google Search Console に登録（必須）

1. [Google Search Console](https://search.google.com/search-console) を開く
2. **URL プレフィックス** で次を追加する  
   `https://stallions0721.github.io/timecard-app-site/`
3. 所有権の確認は **HTML タグ** が簡単です。発行された  
   `<meta name="google-site-verification" content="……">`  
   を `website/index.html` と `website/index-en.html` の `<head>` に貼り、公開リポジトリへ再同期する
4. 確認後、**サイトマップ** に次を送信する  
   `https://stallions0721.github.io/timecard-app-site/sitemap.xml`
5. 「URL 検査」でトップと `help.html` をインデックス登録する

Bing も同様に [Bing Webmaster Tools](https://www.bing.com/webmasters) へサイトマップを送るとよいです。

### 2. 反映までの目安

初回は数日〜数週間かかることがあります。「タイムカード アプリ」などの一般語は競合が多いため、まずは  
`タイムカード アプリ stallions` や公式 URL そのもので見つかる状態を目指します。

### 3. さらに効く運用（コード以外）

- **Google Play / App Store** の「開発者のウェブサイト」がこの URL になっていること
- ブログ「開発の背景」など、外部ページから公式サイトへリンクする
- 独自ドメイン（例: `timecard-app.example`）があると、`github.io` より検索で扱われやすくなります

OGP 画像を文言ごと描き直す場合:

```bash
python3 tool/render_og_image.py
```
