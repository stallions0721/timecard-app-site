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
| `index.html` | 紹介ページ本体 |
| `help.html` | 使い方ガイド（日本語） |
| `help-en.html` | 使い方ガイド（英語） |
| `privacy.html` | ブログのプライバシーポリシーへリダイレクト |
| `app-ads.txt` | AdMob 用（サイトの**ルート**に配置） |
| `assets/badges/` | 公式ストアバッジ |
| `assets/screenshots/` | 画面キャプチャ |

### スクショの同期（`docs/verification/` を更新したとき）

```bash
./tool/sync_website_screenshots.sh
```

| 紹介サイト | 元ファイル |
|------------|------------|
| `home.png` | `ios_01_home.png` |
| `month-list.png` | `ios_02_month_list.png` |
| `month-detail.png` | `ios_06_month_dtl.png` |
| `daily.png` | `ios_03_daily_edit.png` |
| `year.png` | `ios_04_year_list.png` |
| `workplace-list.png` | `ios_05_work_place2.png` |

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
| プライバシーポリシー | https://stallions0721.blogspot.com/2026/04/2026412-time-card-1.html |

## ローカル確認

```bash
cd website
python3 -m http.server 8080
```

ブラウザで http://localhost:8080/ を開きます。

## 文言の更新

ストア掲載文のドラフトは `docs/play_store_listing_draft.md` です。紹介文を変えるときは `index.html` とそちらを揃えるとよいです。
