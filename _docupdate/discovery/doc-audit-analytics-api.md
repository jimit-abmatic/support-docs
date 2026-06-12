# Doc Audit — Analytics & API Sections

Repo root: `/Users/jimabmatic.ai/abmatic/support-docs`
Files audited (9): `docs/analytics/*.md` (5), `docs/api/*.md` (3), `docs/changelog.md` (1).
Image check: all 7 distinct referenced screenshot files exist under `static/img/screenshots/`. No broken file refs detected — but several screenshot *captions* assert specific UI/numbers that may now be stale (flagged per-file).

---

## docs/analytics/overview.md

**docPath:** `docs/analytics/overview.md`

**Topic / summary:** Top-level landing page for the Analytics section. Frames "why analytics matter" for ABM, explains the two primary views (Reports and Dashboards), enumerates report types, defines key metrics (visitor/traffic, engagement, campaign performance), explains Lift and Engagement Score in depth, and gives common workflows + review cadences. Acts as the hub linking to reports/dashboards/campaign-performance/audience-insights.

**Screenshots referenced (2):**
- `/img/screenshots/analytics-reports.png` (line 33) — caption: *"The Reports tab shows 351 reports organized by type, with search, filters, and sorting options."*
- `/img/screenshots/analytics-dashboards.png` (line 68) — caption: *"The Dashboards tab shows your saved dashboards with Home Dashboard as the default landing page."*

**Claimed product features / UI / labels to verify against live app:**
- Left sidebar has **Analytics** entry, with two views: **Reports** and **Dashboards**.
- **Create Report** button; report type dropdown.
- Report types claimed: **Account, Contact, Opportunity, Campaign, User, Unique Visitor, Visitor Session** (note: this page calls it "Visitor Session — LinkedIn visitor data"; `reports.md` calls the same thing "LinkedIn Session"; inconsistent naming — verify the real label).
- Dashboard concepts: Custom Widgets, Multiple Dashboards, **Home Dashboard** as default landing page.
- Metric definitions: Visitors, Sessions, Page Views, Identified Companies, Time on Site, Pages per Session, Return Visitors, Engagement Score, Impressions, CTA Clicks, CTR, Conversions, CVR, Lift.
- **"Reveal > Accounts"** navigation path (workflow "Which accounts should sales call today?") with filter Engagement = High — verify the section is named "Reveal" and has an Accounts subview + Engagement filter.
- Engagement Score factor/weight table (Page views High, Sessions High, Recency Medium, Key page visits Medium, Time on site Low) — presented as fact; verify these weightings are real or are illustrative.

**Staleness signals:**
- Hardcoded **"351 reports"** in screenshot caption — count is volatile and likely stale.
- **Benchmark numbers stated as fact** (e.g., "40–70% company identification rate is typical", CTR "2–5%", CVR "1–3%", Time on Site "2–3+ minutes") — not UI but may need a "guidance, not guarantee" caveat.
- "Statistical Significance" tip says "100+ visitors in each group" while `campaign-performance.md` gives a detailed sample-size table (500–15,000+ per variation) — internal inconsistency.
- Naming mismatch "Unique Visitor / Visitor Session" vs `reports.md` "Unique Visitor / LinkedIn Session" — pick one and verify.
- "Reveal > Accounts" path assumes a section literally named "Reveal" — needs live confirmation (could have moved/renamed).

---

## docs/analytics/dashboards.md

**docPath:** `docs/analytics/dashboards.md` (sidebar_position 2)

**Topic / summary:** Complete guide to building and managing analytics dashboards: creating dashboards, adding widgets bound to saved reports, grid layout/resize, date-range filtering, refresh/caching, setting a Home Dashboard, sharing, templates, and troubleshooting.

**Screenshots referenced (2):**
- `/img/screenshots/analytics-dashboards.png` (line 12) — caption: *"Your dashboard collection showing all available dashboards with creation and update timestamps"*
- `/img/screenshots/dashboard-home.png` (line 36) — caption: *"Example Home Dashboard showing opportunity data by stage, quarter, and campaign type with real metrics"*

**Claimed product features / UI / labels to verify:**
- Nav: **Analytics > Dashboards**; **Create Dashboard** button; name field → **Create** opens editor.
- **Edit Dashboard** button, and the claim you can enter edit mode via URL param **`?edit=true`**.
- **+ Report** button to add a widget; widget types **Chart** and **Table**; **Add Report** confirm button.
- Widget eligibility requirements: report must have **Pivot mode enabled**, **Row grouping**, **Aggregation configured**, **Chart enabled**.
- Grid spec asserted very precisely: **4-column grid**, widget width 1–4 cols, **height in 400px row units**, **max 20 widgets per dashboard**, **14px margins**. (All concrete numbers — high verification priority.)
- Edit-mode controls: Drag Handle (grip icon), Close (X icon), edge-drag resize.
- Layout **auto-saves** (positions/sizes/order); no manual save for layout.
- Date range dropdown shows e.g. **"LAST 60 DAYS"**; presets list: Today, Yesterday, Last 7 days, Last 28/30/60/90 days, Last 12 months, This week/month/year, Custom range. Selected range saved with dashboard.
- **Refresh** button (circular arrow icon) next to "Edit Dashboard"; **"Last updated at"** timestamp.
- **Home Dashboard** label appears automatically; Home Dashboard **cannot be deleted**.
- "All dashboards are visible to your entire account" / "Access based on user permissions."

**Staleness signals:**
- Hardcoded timestamp example **"Last updated at: 1/12/2026 6:09:19 PM"** — dated screenshot-derived string.
- Very specific grid constants (20 widgets, 400px, 14px, 4 cols) are the kind of value that silently drifts after UI refactors — must reverify.
- `?edit=true` URL trick is an implementation detail that may not survive a UI rewrite.
- dashboard-home caption claims "opportunity data by stage, quarter, and campaign type with real metrics" — asserts a specific sample dashboard composition; verify the screenshot still matches.
- Sharing section says dashboards are account-wide visible; changelog claims **"Dashboard Sharing — read-only, no Abmatic login required"** (line 56) — potential contradiction (internal team sharing vs external no-login sharing). Reconcile.

---

## docs/analytics/reports.md

**docPath:** `docs/analytics/reports.md` (sidebar_position 3)

**Topic / summary:** Deep guide to the Reports builder: report types, edit vs view mode, columns/filters/grouping/aggregation, pivot mode, charting, saving/sharing, exporting, advanced features (date decomposition, custom fields), report templates, best practices, troubleshooting. This is the engine that dashboards' widgets depend on.

**Screenshots referenced (1):**
- `/img/screenshots/analytics-reports.png` (line 12) — caption: *"Reports list showing 351 reports organized by type with quick filter blocks"*

**Claimed product features / UI / labels to verify:**
- Nav **Analytics > Reports**; **Create Report** flow (type → name → Create → editor).
- Report types (7): **Account, Contact, Campaign, Opportunity, User, Unique Visitor, LinkedIn Session.** (Note mismatch with overview.md's "Visitor Session" + "Visitor Session = LinkedIn"; overview lists Unique Visitor AND Visitor Session as separate; here it's Unique Visitor + LinkedIn Session. Verify exact type list & labels.)
- Edit mode panels: **Columns Panel, Filters, Grouping, Aggregations, Chart Toggle.** Edit-mode **preview limit 500 rows**.
- Column ops: Show/Hide checkbox, drag reorder, **right-click > Pin Left/Right**, resize, sort.
- Filter types: Text/Number/Date/Set filters; **menu icon > "Enable Advance Filtering"** (note the literal label "Enable Advance Filtering" — verify exact spelling, possibly "Advanced"). Switching standard↔advanced **clears existing filters**.
- Aggregation functions: Sum, Count, Avg, Min, Max, First, Last.
- **Pivot Mode** toggle; "Pivot mode is required for creating charts." Default chart type **Grouped Column**.
- Auto-save of report config + manual **Save** button.
- Row limits table: edit 500 / view no limit / export no limit.
- "Reports query live data (no caching)" vs "Dashboard widgets may be cached."
- Date Field Decomposition (Year/Quarter/Month/Week).
- **Custom fields: "Up to 10 custom fields per entity type."** — NOTE: directly contradicts `api/accounts.md` which documents **field_01 … field_30 (30 custom fields)**. Conflict to resolve.
- Column field lists per report type (Account/Contact/Campaign) — many specific field labels (e.g., Temperature, Salesforce ID, HubSpot ID, Engagement Score) to spot-check.
- **Export** button → CSV.

**Staleness signals:**
- Same hardcoded **"351 reports"** caption as overview.md.
- Custom-field count conflict: **"up to 10"** here vs **30 (`field_01`–`field_30`)** in accounts API doc — at least one is wrong.
- Report-type label inconsistency vs overview.md (LinkedIn Session vs Visitor Session).
- Literal label "Enable Advance Filtering" looks like a possibly-misquoted UI string.
- Several "Attribution" columns claimed for Campaign reports (Revenue Attributed, Influenced Pipeline) overlap with changelog "Coming Soon > Advanced Attribution / Revenue Intelligence" — verify whether attribution columns actually ship today or are aspirational.

---

## docs/analytics/campaign-performance.md

**docPath:** `docs/analytics/campaign-performance.md` (sidebar_position 4)

**Topic / summary:** Explains the per-campaign **Insights** tab and **Performance** tab analytics: summary KPI cards, metric tabs, trend chart (Total/Personalized/Control), personalized-vs-control comparison + lift math, visitor-level Performance grid with sub-tabs and columns, account-level rollups, date ranges, campaign comparison, building custom reports from this data, optimization guidance, statistical-significance/sample-size tables, and troubleshooting.

**Screenshots referenced (2):**
- `/img/screenshots/wp-insights-tab.png` (line 29) — caption: *"The Insights tab shows CTA Clicks, Conversions, CVRL, CTRL metrics with trend charts and Personalized vs Control breakdown"*
- `/img/screenshots/wp-performance-tab.png` (line 123) — caption: *"...visitor-level data with 1,306 rows"* / "Drill into individual visitor sessions..."

**Claimed product features / UI / labels to verify:**
- Path: **Campaigns** (sidebar) → click campaign → **Insights** tab.
- Summary cards: **CTA Clicks, Conversions, CVRL, CTRL, Total Visitors** (highlighted). NOTE: body text says "four key performance indicators" then the table lists **five** rows — internal count error.
- Metric tabs: **Visitors, CTA, CTR, Conversion, CVR.**
- Trend chart 3 lines: Total (blue), Personalized (green), Control (red).
- Comparison table rows: Distribution / Visitors / CTA / CTR / Conversions / CVR with Personalized/Control/Total columns (uses sample 90%/10%, 634/71/705 etc.).
- **Performance** tab with sub-tabs: **Visitors, CTA Clicks, Accounts, Conversions.**
- Visitor data columns: Domain, Visitor (Email or "Anonymous"), Variation, Visited Pages, Total Time on Pages, Total Page Views, Total Unique Page Views.
- Filtering: Search, Filters, **Sort By (Last Seen / Page Views / Time on Page)**, Export.
- **Accounts** sub-tab account-level aggregation + breakdown dimensions (Industry, Company Size, Account Tier, Region).
- Date picker presets: Today / Last 7 / Last 30 / Last 60 / Custom (note: differs from dashboards.md preset set — no "Last 90"/"Last 12 months" here).
- Cross-links to `/campaigns/ab-testing`, `/conversions/create-goals`, `/conversions/analytics`.

**Staleness signals:**
- "CVRL/CTRL" acronyms (this page) vs "CVRL = Conversion Rate Lift" — but elsewhere the product/overview uses **"Lift"**/"CVR"/"CTR"; CVRL/CTRL labels need live verification (may be a screenshot-era label).
- Screenshot filenames use the **`wp-` prefix** (wp-insights-tab, wp-performance-tab) — "wp" likely = an old internal codename ("web personalization"?). Other campaign screenshots in the static dir use **`campaign-insights-tab.png` / `campaign-performance-tab.png`** (newer naming). Strong signal these doc images are from an older UI generation; newer equivalents may already exist on disk.
- "four key performance indicators" but five listed — factual slip.
- Hardcoded sample counts (1,306 rows; 705 visitors; etc.) are illustrative but tie the prose to a specific old screenshot.
- Date-range preset list inconsistent with dashboards.md — verify the actual campaign date picker.
- Account breakdown "Account Tier" dimension — verify this field/label exists.

---

## docs/analytics/audience-insights.md

**docPath:** `docs/analytics/audience-insights.md` (no sidebar_position set — ordering may be off relative to siblings)

**Topic / summary:** Conceptual/strategy doc on turning anonymous traffic into intelligence: account activity overview, visitor composition (industry/size/location), high-intent signals, content consumption, funnel + conversion-path analysis, segment comparison, exporting, and "putting insights into action" for marketing/content/sales. Heavily narrative — light on concrete UI steps except the Reports-based access path.

**Screenshots referenced (1):**
- `/img/screenshots/analytics-reports.png` (line 25) — caption: *"Analytics Reports - View and create reports for audience insights"* (reuses the generic Reports screenshot; there is NOT a dedicated "Audience Insights" view shown).

**Claimed product features / UI / labels to verify:**
- Access path: **"Analytics > Reports"** — claims audience insights are obtained by building custom reports (i.e., there is no standalone "Audience Insights" UI page; it's a capability framing). Verify this is still how users access it.
- Company-size segment table with named tiers **Enterprise (1,000+) / Mid-Market (200–999) / SMB (50–199) / Small Business (<50)** — verify these exact bands/labels exist as filters/segments in-app (differs from API `size` enum bands like 1-10/11-50/51-200/201-500…).
- "Scheduling Reports" steps: Analytics > Reports → **Create Report** → select metrics → **set a schedule** (weekly/monthly) → **delivery via email or Slack.** This asserts scheduled-report + Slack delivery exists in the Reports UI. (Changelog lists "Scheduled Exports" Oct 2025 — cross-check whether scheduling lives in Reports or in Settings > Data Export.)
- Export types: Account activity (CSV), Engagement summary (PDF), Raw visit data. **PDF export is claimed** — verify PDF export actually exists (reports.md only mentions CSV).

**Staleness signals:**
- **No dedicated Audience Insights screen** — doc reuses `analytics-reports.png`; note `static/img/screenshots/audience-insights.png` EXISTS on disk but is NOT used here. Possible mismatch: either a real Audience Insights view exists and the doc is outdated, or the image is orphaned. High-priority reconciliation.
- Claims **PDF export** and **Slack-delivered scheduled reports** that aren't corroborated by reports.md (CSV-only) — likely aspirational/stale.
- Company-size bands here don't match the API `size` enum or any single canonical band set — naming drift.
- Entirely conceptual; almost no verifiable click-path beyond "go to Reports" — much of the "feature" language ("Top Engaged Accounts", "Visitor Journey", "Conversion Paths", "Segment Comparison") may not map to named UI and could read as marketing rather than docs.
- Missing `sidebar_position` (siblings use 1–4) — likely sorts last/alphabetically; ordering issue.

---

## docs/api/overview.md

**docPath:** `docs/api/overview.md` (sidebar_position 1)

**Topic / summary:** Entry point for the public REST API. Documents base URL, API-key auth, rate limits, list/error response envelopes, error-code table, pagination, and the available-endpoints list (currently only `GET /v1/accounts`).

**Screenshots referenced:** none.

**Claimed product features / UI / labels to verify:**
- **Base URL `https://api.abmatic.ai/v1`.**
- Auth via `Authorization: Bearer YOUR_API_KEY`.
- Rate limit **100 req/min per IP**; `429` with backoff.
- Response envelope shape `{data, pagination{total,page,per_page,total_pages}, meta{request_id}}`.
- Error codes 400/401/403/429/500 with named error strings.
- Pagination defaults `page=1`, `per_page=50` (max 100).
- **Only one endpoint listed: `GET /v1/accounts`.** Links to `/api/api-accounts`.
- Gated to **Enterprise plan**; support contact `support@abmatic.ai`.

**Staleness signals:**
- Single-endpoint API surface — fine if accurate, but verify no other public endpoints now exist (contacts? campaigns?) that should be listed.
- "API access available on Enterprise plans" repeated across all 3 API docs — verify plan name still "Enterprise."
- Generally clean/recent (dates in sibling examples are 2026) — lowest staleness risk of the set, but must confirm rate limit (100/min) and per_page max (100) against live API.

---

## docs/api/accounts.md

**docPath:** `docs/api/accounts.md` (sidebar_position 2; id `api-accounts`)

**Topic / summary:** Full reference for `GET /v1/accounts`: auth, query params (page/per_page/fields/sort_by/order_by), default + sortable fields, many example curl/Python/JS requests, example JSON response, and an exhaustive **field catalog** (Basic Info, Scoring & Engagement, Size/Financials, Location, Social, CRM IDs, Website Performance rolling windows, LinkedIn Ads, Visitor Tracking, UTM, AI Chat, Conversions, Enrichment/Metadata, Classification, Custom Fields, Other) with type/source/description per field.

**Screenshots referenced:** none.

**Claimed product features / API surface to verify:**
- Endpoint `GET /v1/accounts` with params `page, per_page (max 100), fields, sort_by (default website), order_by (asc/desc)`.
- **Default field set** (line 50–54) and **sortable fields** list (incl. `last_seen`).
- Huge field catalog — each field name/type/source is a verifiable claim. High-value sub-items:
  - Scoring fields incl. `engagement_score, website_engagement_score, linkedin_engagement_score, agentic_chat_engagement_score, third_party_intent_score, fit_score, overall_score, pmf_score, temperature, last_turned_hot_at`.
  - **AI Chat fields attributed to a widget named "Clara"** (line 346): "Data from Abmatic's AI chat widget (Clara) interactions." NOTE: `changelog.md` defines **Clara as "AI ABM"** and **Agentic Chat** as the website chat widget; here Clara is called the chat widget. Naming conflict to resolve.
  - `custom fields field_01 … field_30` (30) configured under **Settings > Custom Fields** — conflicts with reports.md "up to 10 custom fields."
  - CRM IDs incl. Salesforce/HubSpot/Pipedrive/Outreach + duplicate arrays.
  - Rolling windows 7/30/90-day for website; 7/30/60/90-day for LinkedIn — verify window sets.
- Error responses 400/401/403/429; rate-limit headers `X-RateLimit-*`.

**Staleness signals:**
- **"Clara" = chat widget** here vs **"Clara" = AI ABM agent** in changelog — product naming drift / likely error in one doc.
- Custom-fields count **30** vs reports.md **10** — conflict.
- `logo` example uses **`logo.clearbit.com`** URLs (lines 124, 138) — Clearbit logo API was deprecated/changed; verify logo source/host.
- Example timestamps (`updated_at` 2026-03) are recent → doc itself is reasonably fresh, but the field catalog is long and easy to drift from the live schema; treat each `source` attribution (Enriched/Abmatic/CRM Sync/LinkedIn Ads) as needing spot-verification.
- Sortable list includes `last_seen` but default field set also includes it indirectly — confirm sortable set matches backend.

---

## docs/api/api-keys.md

**docPath:** `docs/api/api-keys.md` (sidebar_position 3)

**Topic / summary:** How to generate, use, view, revoke, and rotate API keys. Covers dashboard path and programmatic JWT-authed endpoints, required headers, security best practices, troubleshooting, and a management-endpoint table.

**Screenshots referenced:** none. (NOTE: doc describes a **Settings > Account > API Keys** UI section but shows no screenshot; `static/img/screenshots/settings-account.png` exists and could illustrate it.)

**Claimed product features / UI / API to verify:**
- Dashboard path: **Settings > Account → API Keys section → Generate API Key** (shown once). Revoke via **Settings > Account > API Keys → Revoke Key → confirm.**
- Key prefix format **`abm_` ** (e.g., `abm_Kx7f`), prefix = first 8 chars.
- Management endpoints (JWT-authed, NOT API-key authed):
  - `GET /account/api-key` → `{data:{prefix,created_at}, has_key, success}`
  - `POST /account/api-key` → generate (replaces existing)
  - `DELETE /account/api-key` → revoke
- Generating a new key **automatically replaces/invalidates** the old one (single active key per account).
- Required headers table (Authorization / Content-Type / Accept).
- Recommends rotation **every 365 days**.

**Staleness signals:**
- Asserts a **single-key-per-account** model ("Generate new key replaces existing"). If the product later supported multiple named keys, this is stale — verify.
- "Settings > Account" location for API Keys — verify the API Keys section actually lives under Settings > Account (vs a dedicated Developers/API settings page).
- Management endpoints are on the **bare host** (`/account/api-key`) while data endpoints are under `/v1` — verify this path split is current.
- Response example timestamps `2026-03-23` — fresh-ish; low staleness risk but UI location is the main thing to confirm.

---

## docs/changelog.md

**docPath:** `docs/changelog.md` (sidebar_position 100, id `changelog`, title "What's New")

**Topic / summary:** Reverse-chronological release notes Oct 2025 → Jan 2026, plus a "Coming Soon" roadmap and feature-request info. Covers AI Agents GA, Enhanced Analytics Dashboards, Google Customer Match, LinkedIn DMP, CRM sync perf, contact reveal accuracy, Slack enhancements, A/B testing, export enhancements.

**Screenshots referenced (4; 3 distinct):**
- `/img/screenshots/ai-agents-hub.png` (line 33)
- `/img/screenshots/analytics-dashboards.png` (line 60)
- `/img/screenshots/integrations-hub.png` (line 81, reused)
- `/img/screenshots/integrations-hub.png` (line 104, reused)

**Claimed product features / UI / labels to verify:**
- **AI Agents GA (Jan 2026)** with named agents: **Alex (AI SDR), Clara (AI ABM), Agentic Chat, Agentic Sequences.** Nav **AI Agents** in sidebar; config under **Settings > AI Agents**; links `/ai-agents/ai-agents-overview`.
- **Enhanced Analytics Dashboards (Jan 2026):** Custom Widgets, **Dashboard Sharing (read-only, no Abmatic login required)**, **Scheduled Exports (weekly/monthly to inbox)**, **New Visualizations: funnel charts, cohort analysis, pipeline waterfall.**
- Google Customer Match + LinkedIn DMP under **Settings > Integrations > Advertising section**; links `/audiences/google-customer-match`, `/audiences/linkedin-dmp`.
- A/B testing: Multi-Variant (A/B/C/D), Statistical Significance, Automatic Winner Selection, Segment-Level Results; link `/campaigns/ab-testing`.
- Export Enhancements: Scheduled Exports, Custom Field Selection, **Multiple Formats CSV/Excel/JSON**, Direct CRM Push; link `/settings/data-export`.
- In-app feedback button "bottom-right corner"; emails `feedback@abmatic.ai`, `support@abmatic.ai`.

**Staleness signals:**
- **"Coming Soon" / "In Active Development" / "On the Roadmap" sections (lines 204–224)** — explicit forward-looking placeholders (Advanced Attribution, Revenue Intelligence, Intent Data Integration, Mobile SDK, Predictive Lead Scoring, Account Health Scores, Custom Integrations API/webhooks, White-Label). MUST audit: some may have shipped since Jan 2026 (current date 2026-06-12, ~5 months later) and need to graduate out of "Coming Soon"; e.g., "Intent Data Integration" overlaps with existing intent campaign screenshots on disk, and `accounts.md` already documents `third_party_intent_score`.
- **Changelog stops at January 2026** but today is **2026-06-12** — ~5 months of releases missing. Strong staleness signal; needs Feb–Jun 2026 entries.
- Cross-doc conflicts surfaced by changelog:
  - **Dashboard Sharing "read-only, no login required"** vs dashboards.md "all dashboards visible to your entire account / based on user permissions."
  - **Scheduled Exports + Excel/JSON formats** vs reports.md (CSV only) and audience-insights.md (PDF) — three different claimed export-format sets across docs.
  - **Clara = "AI ABM"** here vs Clara = "AI chat widget" in accounts.md.
- "60% reduction in manual prospecting time" — unsourced metric stated as fact.
- `integrations-hub.png` reused for two different features (Google Customer Match, LinkedIn DMP) with captions instructing users to "scroll to the Advertising section" — verify Integrations page still has an "Advertising" section and these tiles.
- Several deep-link targets referenced (`/ai-agents/ai-agents-overview`, `/audiences/*`, `/campaigns/ab-testing`, `/settings/data-export`) — confirm those docs exist (out of scope here but flagged for the planner's link-integrity pass).

---

## Cross-cutting issues for the planner

1. **Changelog is ~5 months stale** (ends Jan 2026; today 2026-06-12) and its "Coming Soon" list likely contains shipped features.
2. **Export-format contradictions** across 4 docs: CSV-only (reports.md), +PDF (audience-insights.md), +Excel/JSON & scheduled (changelog.md). Need one canonical answer.
3. **Custom-field count conflict:** 10 (reports.md) vs 30 / `field_01–field_30` (accounts.md).
4. **"Clara" naming conflict:** AI ABM agent (changelog) vs AI chat widget (accounts.md).
5. **Report-type label inconsistency:** "Visitor Session" (overview.md) vs "LinkedIn Session" (reports.md) for the same LinkedIn-visitor report.
6. **Dashboard sharing model conflict:** internal account-wide (dashboards.md) vs external read-only no-login (changelog.md).
7. **Audience Insights** doc has no dedicated UI/screenshot (reuses analytics-reports.png) yet an unused `audience-insights.png` exists on disk — verify whether a real Audience Insights view exists.
8. **Old-generation campaign screenshots:** `wp-insights-tab.png` / `wp-performance-tab.png` use a legacy "wp-" naming; newer `campaign-insights-tab.png` / `campaign-performance-tab.png` already exist in static — campaign-performance.md likely points at outdated images.
9. **Hardcoded volatile values** to de-risk: "351 reports" (×2), "Last updated at: 1/12/2026…", grid constants (20 widgets/400px/14px/4 cols), sample row counts.
