# Doc Audit — Getting Started Section

Audit date: 2026-06-12
Repo root: /Users/jimabmatic.ai/abmatic/support-docs
Scope: docs/intro.md + docs/getting-started/*.md (8 files)

Image-existence note: ALL screenshot files referenced by these 8 docs currently exist on disk under `static/img/screenshots/` (and `static/img/screenshots/verified/`). So there are no hard "file not found" broken refs. The staleness risk is instead (a) heavy image REUSE — the same screenshot stands in for many different UI states, and (b) `screenshots/` (root) images are NOT in the `verified/` set, suggesting they were not captured/validated against the live app the way the `verified/` ones were. Two parallel screenshot conventions coexist (root vs `verified/`), and the getting-started docs mix both.

---

## 1. docs/intro.md

**Topic / current content:** Top-level documentation landing page ("Welcome to Abmatic AI"), slug `/`. Positions Abmatic as an ABM platform that identifies, engages, converts best-fit accounts. Provides quick-nav cards, a capability matrix, role-based quick links (Marketing Manager, MarOps/RevOps, Sales Rep, Developer), an ASCII platform-overview diagram, popular-articles lists, support contacts, and a "What's New" section.

**Screenshots referenced (1):**
- L13 `/img/screenshots/home-dashboard.png` (root, non-verified)

**Claimed product features / UI / labels (to verify against live app):**
- Capability set: Visitor Identification, Contact Reveal, Website Personalization, AI Agents, CRM Integration, Advertising Audiences (LinkedIn + Google Ads), Campaign Analytics.
- AI Agents named **Alex (SDR)** and **Clara (ABM)**, stated **"AI Agents GA … now generally available"**.
- Internal doc routes asserted to exist: `/visitor-tracking/company-identification`, `/visitor-tracking/contact-reveal`, `/campaigns/website-personalization`, `/ai-agents/ai-agents-overview`, `/integrations/overview`, `/audiences/linkedin-dmp`, `/analytics/overview`, `/integrations/crm/salesforce-setup`, `/integrations/crm/hubspot-setup`, `/integrations/crm/sync-behavior`, `/campaigns/page-editor`, `/campaigns/ab-testing`, `/audiences/overview`, `/ai-agents/ai-agents-configuration`, `/ai-agents/sdr-agent`, `/ai-agents/abm-agent`, `/analytics/campaign-performance`, `/audiences/crm-sync`, `/api/api-accounts`, `/api/api-overview`, `/troubleshooting/script-issues`, `/conversions/overview`, `/integrations/slack`, `/troubleshooting/common-errors`, `/changelog`.
- "What's New" highlights: AI Agents GA; "Enhanced Dashboards — Custom widget creation and sharing"; "Google Customer Match — Direct audience sync to Google Ads".
- Support SLA claim: email support response **within 24 hours**; feedback@abmatic.ai; app.abmatic.ai; abmatic.ai.

**Staleness signals:**
- "What's New" / "Recent highlights" are time-sensitive marketing claims with no date — likely to drift; "GA" status and "Enhanced Dashboards … sharing" need confirmation the sharing feature actually exists (home-dashboard.md says dashboards are "personal to your account," which conflicts with "sharing").
- Many cross-links are asserted; a downstream link-validation pass should confirm each target doc exists (e.g., `/audiences/linkedin-dmp`, `/audiences/crm-sync`, `/api/api-accounts`, `/changelog`).
- Uses `/img/screenshots/home-dashboard.png` (root variant) rather than the `verified/` one used by use-cases.md for the same dashboard — inconsistent sourcing.

---

## 2. docs/getting-started/quick-start.md

**Topic / current content:** End-to-end onboarding walkthrough ("under 20 minutes" in body vs. "15 minutes" claimed on intro.md card). 9 steps: sign up → log in (+ forgot password) → company setup (Welcome page) → install tracking script (HTML / GTM) → explore Home dashboard → connect CRM (Salesforce/HubSpot) → view first visitors (Reveal > Accounts) → create first audience (Audiences > Accounts) → launch first campaign (Inbound personalization with visual editor). Ends with next-steps tables, common setup issues, and a summary checklist.

**Screenshots referenced (20 refs; heavy reuse):**
- L39 `sign-up.png`
- L51 `sign-in.png`
- L64 `forgot-password.png`
- L99, L114, L147 `installation-script.png` (SAME image reused 3× for three different captions: copy script, copy script again, and GTM Custom HTML tag)
- L159 `settings-script.png`
- L176 `home-dashboard.png`
- L206, L217, L228, L240 `integrations-hub.png` (SAME image reused 4×: Integrations Hub, Salesforce connect, HubSpot connect, verify connection)
- L259 `reveal-accounts.png`
- L291, L317, L354 `accounts-list.png` (SAME image reused 3×: audiences list, industry-list filters, campaign targeting)
- L306 `account-create-modal.png`
- L331, L376 `campaigns-list.png` (reused 2×: campaigns list, AND as the "visual editor / publish headline" caption at L376 — wrong-looking: a campaigns-list image captioned as the visual editor)
- L340 `campaign-create.png`
- L344, L365 `campaign-create-modal.png` (reused 2×: campaign type select, AND "add page URL" at L365 — caption/image mismatch)

**Claimed product features / UI / labels (to verify):**
- Sign-up URL `app.abmatic.ai/signup`; **Sign In** button; **Forgot Password?** flow.
- First-login **Welcome page** asking for Website + Company Name + **Submit**.
- Left sidebar nav items: **Settings**, **Installation** / **Script Installation**, **Integrations**, **Reveal** (> Accounts), **Audiences** (> Accounts), **Campaigns**.
- Script tag format `https://clients.abmatic.ai/YOUR_ID.js`; **Copy Script** button; verification shows green **Verified** status; "up to 5 minutes to detect."
- Home dashboard sections claimed: Visitors Overview, Recent Activity, Campaign Performance, Quick Actions. NOTE: this conflicts with home-dashboard.md, which describes a two-tab Overview/Dashboard model with five summary cards (Accounts/Contacts/Reports/Campaigns/Collections) and recently-viewed panels — quick-start's dashboard description appears OUTDATED relative to the dedicated home-dashboard doc.
- Reveal > Accounts columns: Company, Industry, Size, Location, Last Visit, Page Views.
- Audiences create flow: **Create Collection** button; methods **Build from Filters / Upload CSV / Import from CRM**. (Terminology mismatch: button called "Create Collection" but home-dashboard.md/playbooks call them "Account List" / "Target Group" / "+ Account List".)
- Campaign creation: **Create Campaign** → select **Inbound** (Website Personalization); tabs **Audience** and **Pages**; **Add Page**; visual editor; personalization token `{{mt_industry}}`; **Publish**.
- Personalization variable used: `{{mt_industry}}`.

**Staleness signals:**
- Time-to-value inconsistency: "under 20 minutes" here vs "15 minutes" on intro.md.
- Multiple caption/image mismatches due to reuse (L376 campaigns-list captioned as visual editor; L365 campaign-create-modal captioned as add-page; installation-script reused as a GTM screenshot at L147).
- Dashboard description (Step 5) likely STALE — does not match the current two-tab Home described in home-dashboard.md.
- Terminology drift: "Create Collection" / "Collection" vs "Target Group" / "Account List" used elsewhere — needs reconciliation against the live label.
- Step 3 "Welcome page (Website + Company Name + Submit)" should be checked against the live onboarding (a `welcome-page.png` asset exists but is not used here).
- "Reveal > Accounts" navigation and "Audiences > Accounts" both claim an Accounts sub-area — verify whether Reveal and Audiences are still separate top-level nav items in the live app.

---

## 3. docs/getting-started/install-script.md

**Topic / current content:** Deep-dive on installing the tracking script. Covers why-install benefits, getting your unique script from the **Installation** page, and four install methods: Direct HTML, Google Tag Manager, WordPress (plugin + theme), and React/Next.js/SPA (Next.js App Router `next/script`, CRA, react-helmet). Then verification (status indicator + manual DevTools/Network check), troubleshooting tables, CSP whitelist, and next steps.

**Screenshots referenced (2 refs, 1 unique):**
- L30 `installation-script.png`
- L157 `installation-script.png` (SAME image reused; captioned "Installation Status — Verify your script is working" though it's the same copy-script image)

**Claimed product features / UI / labels (to verify):**
- **Installation** page reachable from left sidebar; **click the script code to copy** (click-to-copy behavior).
- Script format `https://clients.abmatic.ai/YOUR_UNIQUE_ID.js`; example ID `d8r773ra7437`.
- Verification status values: **Active** ✅ ("Script detected, visitor data flowing") and **Inactive** ⏳ ("Waiting for first visitor detection"). NOTE: quick-start.md instead says the status shows **Verified** (green) — STATUS LABEL CONFLICT between the two docs ("Active" vs "Verified"). Needs live confirmation of the actual label.
- Manual verify: filter Network tab by "abmatic", request to `clients.abmatic.ai/YOUR_ID.js`.
- CSP domains: `script-src https://clients.abmatic.ai`; `connect-src https://clients.abmatic.ai https://api.abmatic.ai`.
- SPA route-change auto-detection claim ("No additional configuration needed").
- Next steps links: `/getting-started/first-campaign`, `/integrations/overview`, `/conversions/overview`, `/ai-agents/ai-agents-overview`.
- Mentions an in-app **chat widget** for support.

**Staleness signals:**
- Status-label conflict with quick-start.md (Active/Inactive vs Verified) — one of them is wrong against the live UI.
- Only one real screenshot for a multi-method install guide; the "Installation Status" caption (L157) reuses the copy-script image, so there is no actual verification-status screenshot.
- `installation-page.png` exists as an asset but is NOT used — there may be a better/intended screenshot available.
- Detection-time claim here ("Just installed → wait 2-3 minutes") differs from quick-start's "up to 5 minutes" — minor inconsistency.

---

## 4. docs/getting-started/home-dashboard.md

**Topic / current content:** Dedicated reference for the Home page. Describes a two-tab model: **Overview** (five summary cards + five recently-viewed panels) and **Dashboard** (customizable analytics widgets, date-range selector, edit mode, up to 20 widgets). Includes quick-actions table, getting-started-from-home guidance, and dashboard-idea recipes. This is the most internally-detailed/current-looking doc of the set.

**Screenshots referenced (2, both unique):**
- L12 `home-overview-tab.png`
- L67 `home-dashboard-alt.png`

**Claimed product features / UI / labels (to verify):**
- Two tabs: **Overview** and **Dashboard**.
- Overview five summary cards: **Accounts, Contacts, Reports, Campaigns, Collections**, each with a click-through destination (All Accounts, All Contacts, Analytics Reports, Campaigns list, Accounts Collections).
- Five recently-viewed panels: Accounts, Contacts, Reports, Campaigns, **Target Groups** (panel says "Recently Viewed Target Groups" but summary card says "Collections" — note internal Collections vs Target Groups naming).
- Dashboard tab: **Edit Dashboard**, **+ Report**, Add Report dialog, display types **Chart**/**Table**, **Add Report**, drag handle (six-dot icon), X to remove, resize by corner, **Save Dashboard**, **Refresh**, **Last updated** timestamp.
- Date-range options: **Last 7 Days / Last 30 Days / Last 60 Days / Last 90 Days / Custom**. NOTE: the prose intro at L72 lists only "Last 7/30/60 Days, Custom Range" but the table at L105-111 ALSO lists "Last 90 Days" — internal inconsistency about whether 90 Days exists.
- Max **20 report widgets** per dashboard.
- **Paid Plan Feature** gate: Dashboard tab requires a paid plan; free users see an upgrade prompt; Overview is for all users.
- States dashboards are "personal to your account" — CONFLICTS with intro.md "What's New: Enhanced Dashboards — custom widget creation and **sharing**."
- Quick-actions reference a **+ Account List** button (vs quick-start's "Create Collection") — label drift.

**Staleness signals:**
- Internal inconsistency on date-range options (90 Days listed in table but omitted in prose).
- Naming inconsistency: "Collections" (card) vs "Target Groups" (panel) vs "Account List" (button) vs "Account Lists" (Related link `/audiences/accounts`).
- Conflict with intro.md over dashboard "sharing" capability.
- Quick-start.md's Step-5 dashboard description does not match this doc — quick-start needs updating to this two-tab model (flag for planner: this doc is likely the source of truth).
- Related links to verify: `/analytics/dashboards`, `/analytics/reports`, `/audiences/accounts`, `/campaigns/overview`.

---

## 5. docs/getting-started/first-campaign.md

**Topic / current content:** Detailed 11-step guide to launching a Website Personalization campaign. Open Campaigns → Create Campaign wizard → choose type (Inbound vs Outbound) → (Outbound) select audience → name campaign → (Inbound) targeting rules + control group → add page → personalize in Visual Editor with `{{mt_*}}` variables → preview → publish → monitor in Insights. Includes strategy guide, common mistakes, and troubleshooting tables. Opens with an unsourced metric claim ("2-3x higher conversion rates").

**Screenshots referenced (9 refs, 8 unique):**
- L46 `first-campaign-list.png`
- L56 `first-campaign-create-button.png`
- L66 `first-campaign-type-modal.png`
- L90 `accounts-list.png` (root, non-verified — reused generic accounts list for "Outbound Audience Selection"; caption/image likely mismatched)
- L105 `first-campaign-detail.png`
- L129 `first-campaign-audience.png`
- L151 `first-campaign-control.png`
- L166 `first-campaign-pages.png`
- L278 `first-campaign-insights.png`

**Claimed product features / UI / labels (to verify):**
- **Create Campaign** button (top-right) opens a wizard.
- Campaign types grid "organized by channel"; **Website Personalization** with **Inbound** vs **Outbound** sub-options.
- Outbound flow: choose **Account** or **Contact** targeting; pick a **Target Group** from dropdown.
- Rename by clicking campaign name at top of detail view; naming pattern `[Page] - [Audience]`.
- **Audience** tab with visual rule builder; rule fields referenced: Industry, Employee Count, Total Sessions, Visited Pages, Country, State.
- **Control %** setting; recommended 20% (default 20%), 30-50% for rigorous tests.
- **Pages** tab → **Add Page** → URL (supports wildcards e.g. `/products/*`).
- Visual Editor: click headline (blue outline), side panel text field, `{{ }}` button or type `{{` to insert variables.
- Variables: `{{mt_company}}`, `{{mt_industry}}`, `{{mt_city}}`, `{{mt_employee_count}}`.
- **Preview** (enter test company name), then **Publish** (top-right) → status **Active**.
- **Insights** tab metrics: Visitors, Personalized %, Control %, Engagement Rate, Conversion Lift.
- Troubleshooting links: `/getting-started/install-script`, `/conversions/overview`, `/campaigns/page-editor`, `/campaigns/website-personalization`, `/campaigns/ab-testing`, `/audiences/filters`, `/troubleshooting/campaign-issues`, `/getting-started/use-cases`.

**Staleness signals:**
- Unsourced performance claims ("2-3x higher conversion rates," "15-30% engagement lift," "20-40% form conversion lift," "30-50% improvement") — marketing numbers that should be flagged/verified before publishing.
- L90 reuses generic `accounts-list.png` for the Outbound audience step — caption/image mismatch; an outbound-specific screenshot likely needed.
- Mix of `first-campaign-*` dedicated screenshots (good) with one generic root image (L90) — inconsistent sourcing.
- Verify the live wizard still has the exact Inbound/Outbound split under "Website Personalization" and the tab names (Audience / Pages / Insights) — campaign UI is a likely-moved area.
- `{{mt_employee_count}}` variable claim should be confirmed it exists (glossary lists only company/industry/city variables).

---

## 6. docs/getting-started/use-cases.md

**Topic / current content:** Problem/solution/results catalog of ~13 use cases across Website Personalization, Company Identification (Reveal), CRM Integration, Advertising Campaigns, Measuring Impact, AI-Powered Outreach, Competitive Displacement, and Event-Driven Marketing. Each use case gives "The Challenge / The Abmatic Solution / What Success Looks Like." Uses ONLY `verified/` screenshots.

**Screenshots referenced (4, all from verified/):**
- L12 `verified/home-dashboard.png`
- L47 `verified/campaigns-list.png`
- L98 `verified/integrations-hub.png`
- L176 `verified/analytics-reports.png`

**Claimed product features / UI / labels (to verify):**
- Campaign types named: **Website Personalization**, **Outbound Personalization**, **Agentic Flow**, **Agentic Chat**, **Banner & Popup**.
- Reveal > Accounts (filter by industry/size/location/pages); save **High Intent** target group; **Push to CRM** action.
- CRM: connect from **Settings > Integrations**; field mapping; bidirectional sync; **Fill mode**.
- Advertising: LinkedIn matched audience; Google Ads **Customer Match**; audience of "recent website visits in last 30 days."
- AI Outreach config locations: **Settings > AI Agents > Agentic Sequence** (value props/tone/rules); Agentic Chat config in an **Instructions** tab.
- Filter example syntax: `Total Page Views > 5 AND Visited Pages contains "pricing"`.
- Conversions setup (demo requests, trials, form submissions); opportunity sync for attribution.
- Control group example: **30% control**.
- Audiences > Contacts CSV upload for event leads.

**Staleness signals:**
- Terminology to reconcile with glossary/other docs: glossary calls the email sequence product **"Agentic Sequence"** and lists campaign type **"AI Sequences"**, while use-cases.md uses **"Agentic Flow"** and **"Agentic Sequence"** interchangeably, plus **"Banner & Popup"** — the exact live campaign-type names must be pinned down (this is the biggest naming-drift cluster in the set).
- "Settings > AI Agents > Agentic Sequence" path conflicts with playbooks.md's "AI Agents → Alex (SDR)/Clara (ABM)" and glossary's "AI Agents in the sidebar" — verify whether AI agent config lives under Settings or a top-level AI Agents nav.
- Heavily verified-screenshot-based (good), but the AI Outreach / Agentic Chat / Competitive Displacement / Event-Driven sections have NO screenshots at all despite asset availability (e.g., `agentic-flow-*`, `agentic-chat-*`, `banner-popup-*` exist) — gaps the planner may want filled.
- Unsourced result metrics throughout ("3x more qualified conversations," "15-25% reply rate," "10x outreach volume").

---

## 7. docs/getting-started/playbooks.md

**Topic / current content:** Five end-to-end ABM playbooks: (1) Enterprise 1:1, (2) Mid-Market 1:Few, (3) Demand Gen 1:Many, (4) Sales-Marketing Alignment, (5) Website Optimization. Each has prerequisites, numbered steps referencing specific nav paths, metrics tables, and outcome claims. Uses `verified/` screenshots.

**Screenshots referenced (6, all from verified/):**
- L12 `verified/campaigns-list.png`
- L53 `verified/accounts-list.png`
- L179 `verified/conversions-overview.png`
- L256 `verified/ai-agents-hub.png`
- L287 `verified/integrations-hub.png`
- L329 `verified/analytics-reports.png`

**Claimed product features / UI / labels (to verify):**
- Nav paths asserted: **Audiences → Target Groups**, **Create Target Group**, **Import from CSV** / **Import from CRM**; **Campaigns → Create Campaign** → **Website Personalization**; **Conversions → Manage**; **Audiences → Create → Dynamic Collection**; **AI Agents → Alex (SDR)**; **AI Agents → Clara (ABM)**.
- Account targeting by **Account Name = [Company Name]**.
- Slack alerts on account visits; CRM sync to Salesforce/HubSpot; add sales reps as **users with View permissions** (role/permission claim).
- AI SDR (Alex) "researches the account and crafts relevant messaging"; AI ABM (Clara) "optimizes content selection, channel mix and timing."
- Push audiences to **LinkedIn** (matched audience) and **Google Ads** (remarketing); "view-through conversions."

**Staleness signals:**
- Naming drift again: "Target Group" (here) vs "Collection"/"Account List" (quick-start, home-dashboard) vs "Dynamic Collection" (Step in this same doc) — the audiences object name is inconsistent across the whole getting-started set.
- "AI Agents → Alex (SDR)" / "Clara (ABM)" nav path conflicts with use-cases.md's "Settings > AI Agents > Agentic Sequence" — verify where AI agents actually live.
- Unsourced outcome claims ("3-5x higher engagement," "208%"-style figures, "30-50% improvement").
- Only `verified/` hero-style screenshots — none of the per-step UI (Target Group creation, conversion goals modal, AI agent config) is shown despite assets existing (`accounts-create-modal`, `conversions-manage`, `alex-sdr-main`, `clara-abm-main`).
- "users with View permissions" — permissions model claim that should be checked against live Settings > Users.
- Links: `/faq/general` Help Center link to verify.

---

## 8. docs/getting-started/glossary.md

**Topic / current content:** Alphabetical glossary (A–W) of ABM and Abmatic terms with "Find it:" nav hints and several definition tables. No screenshots. Defines product-specific terms (AI Agent Alex/Clara, Agentic Chat, Agentic Sequence, Reveal, Page Editor, Personalization Variables, Dynamic Collection, etc.) plus general ABM vocabulary.

**Screenshots referenced:** NONE.

**Claimed product features / UI / labels (to verify):**
- AI Agents: **Alex (AI SDR)** and **Clara (AI ABM)**; "Find it: AI Agents in the sidebar."
- **Agentic Chat** and **Agentic Sequence** as named product features.
- Campaign-type table: **Website Personalization, AI Sequences, LinkedIn Ads, Google Ads, CRM Campaigns** (note: "AI Sequences" here vs "Agentic Flow"/"Agentic Sequence" elsewhere; no "Banner & Popup" or "Display Ads" listed despite those existing in use-cases.md / asset library).
- Nav "Find it:" hints: Reveal > Accounts / Reveal > Contacts; Audiences > Accounts / Target Groups; Conversions in sidebar; Analytics > Dashboards / Reports; Integrations > [CRM] > Field Mapping; Campaigns in sidebar; AI Agents in sidebar.
- **Contact Reveal** "Requires: Contact Reveal credits."
- **Control Group** default **20%**.
- **CRM** integrations list: Salesforce, HubSpot, Pipedrive, ActiveCampaign, Outreach.
- **Rate Limit**: "100 requests/minute for most endpoints" (specific API claim).
- **IP Identification** rate "40-80%"; **LinkedIn DMP** match rate "60-80%."
- Personalization variables: `{{mt_company}}`, `{{mt_industry}}`, `{{mt_city}}` (does NOT list `{{mt_employee_count}}` which first-campaign.md uses — inconsistency).
- Cites external stat "208% higher revenue (ITSMA)."

**Staleness signals:**
- Campaign-type naming inconsistency vs the rest of the set ("AI Sequences" vs "Agentic Flow/Sequence"; omits Banner & Popup / Display Ads / Intent / Retargeting / Meta campaign types that exist as assets) — glossary's campaign taxonomy may be outdated.
- Variable list incomplete vs first-campaign.md (`{{mt_employee_count}}` missing).
- CRM integration list (Pipedrive/ActiveCampaign/Outreach) should be verified against live Integrations Hub (install-script.md mentions "Pipedrive"; intro/quick-start emphasize only Salesforce + HubSpot).
- Hardcoded numeric claims (rate limit 100/min, match rates, identification rates, "208% ITSMA") — verify currency/accuracy.
- Several "Find it:" paths rely on the same nav assumptions flagged elsewhere (Reveal vs Audiences as separate sections; AI Agents in sidebar vs under Settings).

---

## Cross-Cutting Findings (for the planner)

1. **Audiences object naming is inconsistent across the section.** "Collection" / "Create Collection" (quick-start) vs "Target Group" / "Create Target Group" (playbooks, first-campaign) vs "Account List" / "+ Account List" (home-dashboard) vs "Dynamic Collection" (playbooks). Pin the live label and normalize.
2. **AI / outreach product naming is inconsistent.** "AI Sequences" (glossary) vs "Agentic Sequence" (use-cases, glossary) vs "Agentic Flow" (use-cases) vs "Agentic Chat" / "Banner & Popup" / "Display Ads". Also AI-agent config location conflicts (top-level "AI Agents" nav per playbooks/glossary vs "Settings > AI Agents" per use-cases).
3. **Script-status label conflict:** install-script.md says **Active/Inactive**; quick-start.md says **Verified** (green). Only one matches the live UI.
4. **Home dashboard description conflict:** quick-start.md Step 5 describes an old single-view dashboard (Visitors Overview / Recent Activity / Quick Actions) that does NOT match the current two-tab Overview/Dashboard model in home-dashboard.md. quick-start almost certainly needs updating.
5. **Dashboard "sharing" conflict:** intro.md "What's New" claims dashboard sharing; home-dashboard.md says dashboards are personal-only.
6. **Date-range options internal conflict** within home-dashboard.md (90 Days in table, absent in prose).
7. **Personalization-variable list mismatch:** first-campaign.md adds `{{mt_employee_count}}`; glossary omits it.
8. **Screenshot reuse / caption mismatches** (no missing files, but wrong-context images): quick-start L376 (campaigns-list captioned as visual editor), L365 (campaign-create-modal captioned as add-page), L147 (installation-script captioned as GTM); first-campaign L90 (generic accounts-list for outbound audience); install-script L157 (copy-script image captioned as status).
9. **Two screenshot conventions coexist:** root `screenshots/` (used by intro, quick-start, install-script, first-campaign) vs `screenshots/verified/` (used by use-cases, playbooks, and partly intro). The `verified/` set appears purpose-captured; root images appear ad hoc and reused. Recommend standardizing on verified captures.
10. **Unsourced performance metrics** are pervasive (first-campaign, use-cases, playbooks: "2-3x," "15-30%," "10x," "208% ITSMA," "30-50%") and need fact-check/removal before publishing.
11. **Time-to-value inconsistency:** "15 minutes" (intro card) vs "under 20 minutes" (quick-start) vs "5 minutes" (install).
12. **Link validation needed** across dozens of asserted internal routes (e.g., `/audiences/linkedin-dmp`, `/audiences/crm-sync`, `/api/api-accounts`, `/changelog`, `/faq/general`, `/campaigns/agentic-flow`).
