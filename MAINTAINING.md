# Maintaining the Abmatic AI Support Docs — Operator Runbook

This is the complete guide for keeping https://support.abmatic.ai accurate and current. It is written so that an agent (or a person) handed **"update the support articles"** can self-orient and do the whole job end-to-end. Read [CLAUDE.md](./CLAUDE.md) first for the quick orientation; this file is the depth.

**Table of contents**
1. [The update workflow (multi-agent pipeline)](#1-the-update-workflow)
2. [Logins & credentials](#2-logins--credentials)
3. [Live product glossary (current terminology)](#3-live-product-glossary)
4. [Taking screenshots (the capture harness)](#4-taking-screenshots)
5. [Writing support articles (Docusaurus conventions)](#5-writing-support-articles)
6. [Discovering what changed (reading the app's GitHub commits)](#6-discovering-what-changed)
7. [Writing new scripts / tooling](#7-writing-new-scripts)
8. [Deploying to production](#8-deploying-to-production)
9. [Repo layout & gotchas](#9-repo-layout--gotchas)

---

## 1. The update workflow

The product moves faster than the docs. The proven way to resync is a **5-phase multi-agent pipeline**. Each phase is a background `Workflow` (or a set of `Agent` calls); review the result between phases and commit/push after each so nothing is lost.

| Phase | What it does | Output |
|------|---------------|--------|
| **0. Discover** | Audit every existing doc; mine the app's recent GitHub commits for new/changed features; capture live reference screenshots of the new UI; synthesize a per-page gap plan. | `_docupdate/discovery/PLAN.json` + `PLAN.md`, plus `doc-audit-*.md`, `gh-*.md`, `app-map-*.md` |
| **1. Screenshot** | Capture every screen the plan calls for, with a bounded pool of capture agents (one login each), verifying every image is real content. | PNGs in `static/img/screenshots/` |
| **2. Write** | Fan out writers (one per doc section) against a shared brief (terminology + conventions) so 20 independent agents stay consistent; an integrator registers new pages in `sidebars.ts` and gets the build green. | updated/created `docs/**.md` + `sidebars.ts` |
| **3. QA** | Three **sequential** tiers — junior (mechanical: terminology, fabricated metrics, image existence, build), senior (feature accuracy + screenshot-caption match, reading the actual PNGs), boss (holistic consistency, navigation, sign-off). Each fixes as it goes. | fixes + `_docupdate/exec/QA_LOG.md` + a deploy verdict |
| **4. Deploy** | `npm run build` → `s3 sync` → CloudFront invalidation → verify live. | live site |

**Key design choices that worked:**
- **Group writers by section, not by page** — one agent owning a section produces a consistent voice; 100 lone agents drift.
- **A single shared writer brief** (`_docupdate/exec/WRITER_BRIEF.md`) is what keeps terminology uniform. Regenerate it from §3 each run.
- **Batch screenshots** (one login, many captures) instead of one-login-per-shot — see §4.
- **Commit + push after every phase.** The working copy has been wiped mid-task before; GitHub is the only source of truth.
- The `PLAN.json` schema (per page): `{docPath, action: "create"|"update"|"ok", priority, section, appPaths[], whatChanged, contentTasks[], screenshotsToCapture[{name, appPath, what}]}`. This is the contract that lets the screenshot and writer phases run independently — writers reference screenshot names the capture phase produces.

The scratch artifacts from a run live under `_docupdate/` (discovery findings are committed for traceability; `_docupdate/exec/` is gitignored working state). Look at the most recent `_docupdate/discovery/PLAN.md` for a concrete example of a finished plan.

---

## 2. Logins & credentials

The screenshot harness logs into the **live app** at `https://app.abmatic.ai` as a real test user.

Credentials live in **`.env.local`** at the repo root. **This file is gitignored and must never be committed.** Format:

```
ABMATIC_EMAIL=jimit@abmatic.ai
ABMATIC_PASSWORD=<password — kept out of git; in .env.local on the build machine / team password manager>
ABMATIC_BASE_URL=https://app.abmatic.ai
```

If `.env.local` is missing (e.g. after a fresh clone), recreate it with the test account's credentials (the email is `jimit@abmatic.ai`; get the password from the existing `.env.local` on the build machine or the team's secret store). The harness also accepts the same values as inline env vars on the command line.

**Current app login flow (the harness already handles this):** `app.abmatic.ai/login` redirects to **`/sign-in`**; the email field is `name="username"`; after submitting, the app lands on **`/`** (root), not `/home-dashboard`. If the login flow changes again, update `login()` in `scripts/screenshots/multi-capture.ts` (it's the single place auth is defined).

---

## 3. Live product glossary

Keep this section current — it is the source of truth that prevents stale docs. (As of the last full refresh, ~June 2026, the app is the "Agentic AI" generation.)

- **Company name:** always **"Abmatic AI"** (never "abmatic" / "Abmatic" alone in prose).
- **Global navigation:** a left **icon sidebar** (collapsed ~54px, hover-expands). Order: AI Agent · Goals* · Home · Accounts · Contacts · Campaigns · Conversions · Visitor Reveal · Analytics · Oracle Inbox* (Installation pinned at bottom). `*` = feature-flag-gated. Top bar: dark/light toggle, global Search, Help, Notifications, Settings/avatar.
- **Home** is at `/` (post-login landing): tabs **OVERVIEW** / **DASHBOARD**; 5 stat cards (Accounts, Contacts, Reports, Campaigns, Collections).
- **Campaigns** create modal = one full-screen dialog (button **"+ CAMPAIGN"**) with three columns: **Personalization** (Inbound/Outbound/A-B/**Widget**), **Advertising** (Display/LinkedIn/**OpenAI Ads**/Retargeting), **Agentic** (Agentic Flow/Sequence/Intent/Agentic Chat). The old "**Advanced**" category is now "**Agentic**".
- **Widget** = renamed from "Banner & Popup"; 5 types incl. a new **sidebar widget**.
- **OpenAI Ads** is live; **Meta/Facebook ads are disabled ("Coming Soon")**. 5x5/AdRoll are gone.
- **Visitor Reveal** = renamed from "Company Reveal" (`/reveal/accounts`, `/reveal/contacts`); **Reveal Source** is "Abmatic" with confidence 1–4 (never name PDL/Apollo/Clearbit to users); new Reveal Confidence buckets.
- **AI agents:** page-level personas **Clara (AI ABM)** and **Alex (AI SDR)**; a separate in-app **Co-Pilot** roster also exists. The website chat widget is **not** "Clara" — keep these distinct.
- **Oracle** = autonomous-agent product (**flag-gated**): **Oracle Goals** (`/oracle/goals`, weekly checkpoints), **Oracle Approvals / Inbox** (`/oracle/inbox`), **trust tiers** (supervised/standard/autonomous). On a non-enabled account screens show a gated empty state — that IS the correct current screenshot.
- **Agentic Chat:** Instructions tab; email-handoff modes (book a meeting / thank-you / show a HubSpot form); AI Conversation Summary Performance sub-tab; Demo Booked columns; voice mode.
- **Analytics:** new columns (Demo Booked / Booked At / Scheduled At / AE / Time, Reveal Confidence, Agentic Chat Engagement Score, Technologies); report types include LinkedIn Visitor Session.
- **Settings:** new tabs **API Keys** and **AI Agents**; the **Privacy** page was removed; "Billing" is really **Usage/credits**.
- **New integrations:** Google **Calendar**, **Zoom**, **OpenAI Ads**.

**Hard content rules:** no fabricated metrics (remove invented "3x more…" claims; labeled illustrative examples are OK); plain, clear English; use the syntax the source uses for personalization variables; keep frontmatter `id`s stable on updates.

---

## 4. Taking screenshots

Tool: **`scripts/screenshots/multi-capture.ts`** (Playwright + Chromium). It logs in, navigates, captures at multiple delays (5/10/15/20/30s), scores each for "real content vs login/blank/loading", and saves the best to `static/img/screenshots/<name>.png`. Viewport 1440×900, deviceScaleFactor 2 (retina-sharp).

**Commands:**
```bash
# One screen
ABMATIC_EMAIL=.. ABMATIC_PASSWORD=.. npx ts-node scripts/screenshots/multi-capture.ts multi <name> <appPath>

# A list, in ONE login session (preferred — avoids a login storm at scale)
npx ts-node scripts/screenshots/multi-capture.ts batch <list.json>

# Quality checks
npx ts-node scripts/screenshots/multi-capture.ts audit static/img/screenshots
npx ts-node scripts/screenshots/multi-capture.ts validate docs/<page>.md
```

**`batch` list format** — a JSON array; each item is `{name, path}` plus optional interaction fields:
```json
[
  {"name": "campaigns-list", "path": "/campaigns"},
  {"name": "campaign-create-modal", "path": "/campaigns",
   "clickBefore": ["text=+ CAMPAIGN"], "waitFor": "text=Personalization"},
  {"name": "accounts-filters-open", "path": "/accounts",
   "clickBefore": ["button:has-text('Filters')"], "scrollTo": "text=Industry"},
  {"name": "csv-column-map", "path": "/accounts/upload-from-csv",
   "uploadFile": {"selector": "input[type=file]", "path": "/tmp/sample.csv"},
   "waitForAfter": "text=Map Fields"}
]
```
- `clickBefore` (string[]) — selectors clicked in order before capture (use robust `text=`/`:has-text()` selectors).
- `waitFor` — selector to await before capture; `waitForAfter` — await after clicks/uploads.
- `scrollTo` — scroll a selector into view.
- `uploadFile` `{selector, path}` — drive a hidden file input.

**Reaching hard states:** for modals/tabs/menus, find label text in the captured base image or by grepping `../app-frontend/src`. The campaigns grid is virtualized — rows render after ~25s, so prefer navigating directly to a detail URL by id over clicking a row. Performance sub-tabs are URL-driven (e.g. `?tab=aiConversationSummary`).

**Always verify:** Read the resulting PNG. If it shows a login/blank/loading page, the page just needed more time — re-capture. If the exact sub-state is unreachable after ~2 tries, keep a clean base-page capture and note the substitution; never leave a broken/login image. Flag-gated features (Oracle) legitimately show "not enabled" empty states.

**Cleanup:** the tool also writes `<name>_5s.png … _30s.png` intermediates — delete them after a run (`rm static/img/screenshots/*_{5,10,15,20,30}s.png`); only the canonical `<name>.png` is referenced by docs. Keep throwaway "reference" captures out of `static/` (they'd deploy as orphans).

---

## 5. Writing support articles

Docs are Markdown in `docs/`, served at the site root. The build runs with **`onBrokenLinks: 'throw'`** — a bad internal link fails the build.

**Frontmatter** (match existing pages):
```yaml
---
id: getting-started-quick-start   # KEEP UNCHANGED on edits — sidebars.ts references it
title: Quick Start Guide
sidebar_label: Quick Start
sidebar_position: 1
---
```

**Images:** `![Descriptive alt](/img/screenshots/<name>.png)` — absolute from the static root. Only reference a screenshot that exists on disk (`ls static/img/screenshots/<name>.png`); a missing file shows a broken image on the live site (it does NOT fail the build, so it's easy to miss — grep-check, see §9). Embed screenshots **generously** — screenshot-rich pages are the goal.

**Admonitions** (used heavily): `:::tip`, `:::note`, `:::info`, `:::warning`, `:::caution`.

**Registering a new page:** add its `id` to the right category in `sidebars.ts`. The sidebar is an explicit ordered array keyed by `id` (not by file path); per-file `sidebar_position` only orders within auto-generated categories, so the explicit array wins. Every id in `sidebars.ts` must resolve to a real doc or the build throws.

**Renames / moved pages:** create the new file with full content; turn the old file into a short redirect stub (keeps the old URL alive without the redirects plugin):
```markdown
:::info This page has moved
This content now lives at **[New Title](/new/path)**.
:::
```
Remove the old id from the sidebar (the stub stays on disk as an orphan page).

**MDX:** `.md` files with `markdown.format: 'detect'` accept JSX (e.g. the training-video `<div style={{...}}><video/></div>` embeds). If you add JSX, run the build to confirm it parses.

**Style:** plain, clear, everyday English; explain like to a new user; no fabricated metrics; current terminology (§3).

---

## 6. Discovering what changed

The product source of truth is the frontend repo at **`../app-frontend`** (`/Users/jimabmatic.ai/abmatic/app-frontend`, React/TypeScript). To find what the docs are missing:

```bash
# Current routes (authoritative list of pages/features)
grep -nE "path=|<Route" ../app-frontend/src/App.tsx

# What changed since the docs were last refreshed (pick the right date)
git -C ../app-frontend log --since=2026-03-01 --oneline
git -C ../app-frontend log --since=2026-03-01 --oneline | grep -iE 'oracle|agentic|widget|reveal|<feature>'

# Read a feature's implementation to get exact labels/behavior
grep -rl "<RouteOrComponentName>" ../app-frontend/src
```

Method that works: for each product area, (a) list current features from `src/components`, (b) diff against the existing doc (`doc-audit-*.md`), (c) read notable feature commits to learn the change, (d) note new UI labels and renamed concepts. Cross-check against the **live app** (screenshots) because flags/rollout can differ from `main`. Also useful: `../app-api` for backend behavior (e.g. Agentic Chat, Oracle), and `git log` author/PR titles to spot feature branches.

The discovery phase encodes exactly this: parallel "doc-audit" agents (read existing docs), "gh-mine" agents (read app source + recent commits), "app-map" agents (capture live UI), then a synthesizer that writes `PLAN.json`. Re-run that pattern; see the last `_docupdate/discovery/` for the prompts/outputs that produced a good plan.

---

## 7. Writing new scripts

- **Tooling stack:** Node + TypeScript via `npx ts-node`, Playwright for browser automation. Put screenshot/automation scripts under `scripts/screenshots/`.
- **Reuse the login.** Don't write a new login flow — import or extend `MultiCaptureScreenshotTool` in `multi-capture.ts` (it owns `login()`, `ensureLoggedIn()`, session reuse, and content scoring). New capture needs are usually a new `batch` item option, not a new script.
- **Extending the harness:** the `batch` CLI command reads a JSON list and loops `multiCapture()` on a single logged-in instance — add new per-item options there (it already supports `clickBefore`/`waitFor`/`waitForAfter`/`scrollTo`/`uploadFile`). Keep additions backward-compatible.
- **Long captures:** each `multi`/`batch` shot takes ~30–40s; set a generous Bash timeout (e.g. 600000ms). Bound parallel browser sessions (~6–8) to avoid exhausting memory.
- **Determinism:** the app login allows concurrent sessions (Cognito), so multiple capture agents can run at once.

---

## 8. Deploying to production

Static S3 site behind CloudFront. **Infra:** bucket `s3://support-abmatic-ai`, CloudFront distribution `EWO3Z3VNLFUQ2` (alias `support.abmatic.ai`). AWS creds: the build machine's default profile (IAM user `jimit-app-access`).

```bash
# 1. Build (must succeed; onBrokenLinks:'throw' is the gate)
npm run build

# 2. Publish the static build
aws s3 sync build s3://support-abmatic-ai --delete

# 3. Invalidate the CDN cache
aws cloudfront create-invalidation --distribution-id EWO3Z3VNLFUQ2 --paths "/*"

# 4. Verify live (wait for the invalidation, then cache-bust check)
curl -sI "https://support.abmatic.ai/?t=$(date +%s)" | head -1
#   spot-check a new page renders, e.g. https://support.abmatic.ai/ai-agents/oracle-overview
```

Pre-deploy checklist: build green · all `/img/screenshots/*.png` refs exist (§9) · sidebar has no dangling ids · QA signed off · changes committed & pushed to GitHub. `--delete` removes files from the bucket that aren't in `build/`, so always deploy a full fresh build, never a partial sync.

---

## 9. Repo layout & gotchas

```
docs/                     # the published articles (Markdown, served at site root)
sidebars.ts               # manual navigation, keyed by frontmatter id
docusaurus.config.ts      # site config (onBrokenLinks:'throw', URL, theme)
static/img/screenshots/   # screenshots referenced by docs
scripts/screenshots/      # capture harness (multi-capture.ts = the tool)
.env.local                # credentials (GITIGNORED — never commit)
_docupdate/               # orchestration scratch (discovery findings committed; exec/ gitignored)
CLAUDE.md / MAINTAINING.md # this runbook
```

**Gotchas learned the hard way:**
- **Commit & push after every phase.** The working tree has been wiped mid-run; only what's on GitHub survives.
- A launchd job **`com.abmatic.repo-sync`** fast-forwards clean branches a few times a day. It never touches a *dirty* tree, so it won't clobber in-progress work — but it's why an uncommitted-then-vanished file can't be recovered. Push early.
- **Missing images don't fail the build.** Always run the existence check after writing/QA:
  ```bash
  node -e 'const fs=require("fs"),cp=require("child_process");const r=[...new Set(cp.execSync("grep -rhoE \"/img/screenshots/[^)\" ]+\\.png\" docs",{encoding:"utf8"}).trim().split("\n"))];const m=r.filter(x=>!fs.existsSync("static"+x));console.log("refs:",r.length,"missing:",m.length);m.forEach(x=>console.log(" MISSING",x));'
  ```
- **Stale-but-unreferenced screenshots accumulate** in `static/img/screenshots/`. They don't break anything but bloat the deploy; periodically prune ones no doc references.
- **Don't weaken `onBrokenLinks`** to hide a broken link — fix the link.
- The `id` in frontmatter is the contract with `sidebars.ts`; never change it on an existing page without updating the sidebar.
- Flag-gated features (Oracle) can't be screenshotted in a populated state on the standard test account — document the gated state, or recapture on an enabled account when richer visuals are wanted.
