# 跨境工具比价墙 / Cross-border Tools Wall

Bilingual (zh-first) static-friendly Next.js site comparing logistics, payments, ERP, and ad tools for Shopify / Shopee / TikTok Shop sellers.

Monetization later via **sponsor / featured listings** (`/sponsor`). No payment integration yet.

## Stack

- Next.js App Router + TypeScript + Tailwind CSS
- Data in `src/data/*.ts` (easy for daily update routines)
- Deployable on **Vercel free tier** ($0)

## Local run

```bash
cd /workspace/crossborder-tools-wall
npm install
npm run dev
# http://localhost:3000
```

```bash
npm run build   # must succeed
npm start       # serve production build
```

## Deploy to Vercel

1. Push this folder to a GitHub repo (e.g. `lycheeKing1024/crossborder-tools-wall`), **or** use `vercel` CLI from this directory.
2. Import the repo in [Vercel Dashboard](https://vercel.com/new) — framework preset: Next.js.
3. Leave env empty. Deploy. Default `*.vercel.app` URL is fine (custom domain optional).

```bash
npx vercel          # preview
npx vercel --prod   # production (needs login)
```

## Daily update (routines)

1. Edit `src/data/tools.ts` (pricing summaries, lastUpdated, pros/cons).
2. Optionally bump `siteConfig.lastDataRefresh` in `src/data/site.ts`.
3. Commit → Vercel auto-deploys (once connected).

A future routine can rewrite `tools.ts` or swap to JSON under `src/data/` and regenerate.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Hero, category nav, sponsor slot, featured tools |
| `/tools` | All tools by category |
| `/tools/logistics` | 物流 |
| `/tools/payments` | 收款 |
| `/tools/erp` | ERP |
| `/tools/ads` | 广告 |
| `/sponsor` | How to get featured (pricing TBD) |
| `/about` | About |

## Notes

- Prices are **approximate** public notes — always verify on vendor sites.
- Sponsor email placeholder: edit `sponsorEmail` in `src/data/site.ts`.
