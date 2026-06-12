# CLAUDE.md — Abmatic AI Support Docs (agent orientation)

This repo is the **Abmatic AI support site** (https://support.abmatic.ai), built with **Docusaurus**.
If you were asked to "update the support articles" (or similar), read this file, then **[MAINTAINING.md](./MAINTAINING.md)** for the full runbook. Everything you need — the proven workflow, the screenshot harness, the deploy steps, and how to discover what changed in the product — is documented there.

## What this repo is
- **Docusaurus** static site. Docs are Markdown under `docs/` and are served at the site root (`routeBasePath: '/'`).
- Navigation is **manual** in `sidebars.ts`, keyed by each doc's frontmatter `id`.
- Screenshots live in `static/img/screenshots/` and are referenced as `/img/screenshots/<name>.png`.
- Build runs with `onBrokenLinks: 'throw'` — a broken internal link fails the build.
- Deploys to S3 (`support-abmatic-ai`) behind CloudFront (`EWO3Z3VNLFUQ2`, alias `support.abmatic.ai`).

## The standing task: "update the support articles"
The product (the app at `app.abmatic.ai`, source in `../app-frontend`) moves faster than these docs. Your job is to bring the docs back in sync: fix stale features, document new ones, refresh screenshots. The **proven approach is a multi-agent pipeline** (see MAINTAINING.md §1):

1. **Discover** — audit existing docs, mine the app's recent GitHub commits for what's new, capture live reference screenshots, synthesize a per-page gap plan (`_docupdate/discovery/PLAN.json`).
2. **Screenshot** — capture every needed screen with the login+capture harness (`scripts/screenshots/multi-capture.ts batch`).
3. **Write** — fan out writers (one group per section) using a shared brief so terminology stays consistent.
4. **QA** — sequential tiers (junior → senior → boss) that fix issues and keep the build green.
5. **Deploy** — `npm run build` → `s3 sync` → CloudFront invalidation → verify live.

## Cheat sheet
```bash
# Credentials (gitignored) — recreate if missing; see MAINTAINING.md §2
cat .env.local   # ABMATIC_EMAIL / ABMATIC_PASSWORD / ABMATIC_BASE_URL

# Capture one screenshot (logs in, multi-delay, picks best)
ABMATIC_EMAIL=... ABMATIC_PASSWORD=... npx ts-node scripts/screenshots/multi-capture.ts multi <name> <appPath>

# Capture a whole list in ONE login (preferred at scale)
npx ts-node scripts/screenshots/multi-capture.ts batch <list.json>

# Build (must pass before deploy)
npm run build

# Deploy to production
aws s3 sync build s3://support-abmatic-ai --delete
aws cloudfront create-invalidation --distribution-id EWO3Z3VNLFUQ2 --paths "/*"
```

## Rules of thumb
- **Commit and push frequently** to GitHub — the working copy has been wiped before; GitHub is the source of truth.
- **Never commit `.env.local`** or any live credential (it's gitignored — keep it that way).
- **Verify screenshots** are real app content, not login/blank/loading pages — wait for slow pages and re-capture.
- **No fabricated metrics** in docs; use current terminology (see MAINTAINING.md §3 for the live glossary).
- Keep scratch/orchestration artifacts under `_docupdate/` (the `_docupdate/exec/` subtree is gitignored).
