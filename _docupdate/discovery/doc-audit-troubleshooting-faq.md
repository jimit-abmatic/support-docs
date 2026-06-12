# Doc Audit — Troubleshooting & FAQ sections

Audit date: 2026-06-12
Repo: /Users/jimabmatic.ai/abmatic/support-docs
Scope: `docs/troubleshooting/*.md` + `docs/faq/*.md` (9 files)

Image-existence note (applies to all): every screenshot referenced by these 9 files
EXISTS on disk under `static/img/screenshots/` (root) — no broken file paths were found.
HOWEVER: 8 of 9 files reference the **root** `screenshots/` images, while a curated
`static/img/screenshots/verified/` subdirectory exists holding a known-good vetted set
(includes settings-usage.png, integrations-hub.png, settings-slack.png, reveal-accounts.png,
reveal-contacts.png, ai-agents-hub.png, campaigns-list.png, installation-script.png, etc.).
Only `troubleshooting-overview.md` points into `verified/`. This is an inconsistency the
downstream planner should resolve (decide whether all docs should source from `verified/`).
Several referenced root images do NOT have a `verified/` twin (e.g. first-campaign-type-modal.png,
wp-audience-tab.png, page-editor-main.png, dynamic-content-menu.png, ab-control-insights.png,
wp-insights-tab.png, wp-performance-tab.png, wp-pages-tab.png, integrations-crm-status.png) —
these are candidates that may be stale/unverified and worth re-capturing against the live app.

---

## docs/faq/billing.md

**Topic:** Billing FAQ — pricing model, plans (Starter/Professional/Enterprise), free trial,
visitor/company limits, Contact Reveal credits, usage viewing, payment methods, invoices,
plan changes, cancellation, data retention/export, pause/reactivation, credits & add-ons, support.

**Summary:** A long Q&A reference for everything billing. Frames pricing as usage-based on
"Identified Companies" + Features + Users + Contact Reveal credits. Documents a 3-tier plan
matrix, a 14-day free trial, overage behavior, and self-service workflows under Settings.

**Screenshots referenced (1):**
- L99 `/img/screenshots/settings-usage.png` — "Usage dashboard showing credit allocations and current usage"

**Product/UI/labels CLAIMED to exist (verify against live app):**
- **Settings → Usage** tab showing these specific credit lines: Apollo Contacts credits,
  Campaign credits, AI (OpenAI) credits, Abmatic Accounts identified, Abmatic Contacts revealed,
  IP Reveal credits (L93–97). VERY specific label list — high-value to verify.
- **Settings → Usage → "Buy More Credits"** button + credit package selection flow (L277–279).
- **Settings → Account** with a **Billing** section + **"Update Payment Method"** button (L105–109).
- **Settings → Account → Billing History**, click invoice → download PDF (L119–121).
- **Settings → Account** shows an **Account ID** at the top (L321–322).
- **Settings → Export** with exportable categories: Accounts/companies, Contacts/leads,
  Campaign performance, Analytics/reports (L228–233).
- Plan tier feature claims: Enterprise gets "AI Agents (Alex & Clara)", SSO, SLAs (L42).
- 14-day free trial, "no credit card required", signup at https://app.abmatic.ai/signup (L46–48).

**Staleness signals / risks:**
- Pricing/plan *names* (Starter/Professional/Enterprise) and per-plan credit counts
  (Starter 100/mo, Professional 500/mo) are concrete numbers that drift — verify against current
  pricing page / billing UI. MEMORY notes pricing was changed to "annual-only" in v6 marketing;
  confirm this FAQ matches.
- Quantitative claims likely to be stale: "60-80% lower than expected", "Save 15-20%" annual,
  60M/300M company DB figures elsewhere — treat all hard numbers as suspect.
- AI agents are named **"Alex (SDR) and Clara (ABM)"** — cross-check these agent names/roles are
  still the live product naming (recurs in general.md; the AI Agents Hub screenshot exists).
- Related-resources links at bottom point to `/settings/account`, `/settings/users`,
  `/settings/billing`, `/settings/data-export` — verify these slugs resolve (note doc body uses
  "Settings → Usage" / "Settings → Export" wording but link is `/settings/billing` and
  `/settings/data-export` — possible slug mismatch).
- No TODO/"coming soon"/placeholder text found.

---

## docs/faq/campaigns.md

**Topic:** Campaigns FAQ — campaign types, inbound vs outbound, targeting, website personalization,
personalization variables, A/B testing, control-group guidance, performance optimization,
campaign management (duplicate/schedule/archive), analytics tabs & export.

**Summary:** Comprehensive Q&A on building and optimizing campaigns, centered on Website
Personalization + a 5-type campaign taxonomy. Heavy on A/B testing methodology and the visual editor.

**Screenshots referenced (8):**
- L31 `/img/screenshots/first-campaign-type-modal.png` — campaign type selection
- L59 `/img/screenshots/wp-audience-tab.png` — audience targeting config
- L82 `/img/screenshots/page-editor-main.png` — visual editor personalization
- L107 `/img/screenshots/dynamic-content-menu.png` — Insert Personalization Variables modal
- L143 `/img/screenshots/ab-control-insights.png` — A/B test Personalized vs Control
- L184 `/img/screenshots/wp-insights-tab.png` — lift & statistical significance
- L207 `/img/screenshots/campaigns-list.png` — campaign list status indicators
- L295 `/img/screenshots/wp-performance-tab.png` — performance metrics dashboard

**Product/UI/labels CLAIMED to exist (verify):**
- **Five campaign types**: Website Personalization, AI Sequences, LinkedIn Ads, Google Ads,
  CRM Campaigns (L21–29). NOTE: terminology to verify — MEMORY/marketing references "Agentic Chat",
  "AI Sequences"/"Agentic Flow" naming; live app screenshots in repo include `agentic-flow-*` and
  `agentic-chat-*` — the doc's "AI Sequences" label may be outdated vs live "Agentic" naming.
- **Inbound vs Outbound** campaign modes (L41–44).
- Targeting methods: Account Lists, Dynamic Filters, CRM Segments, Intent Signals (L52–57).
- **Personalization variables / tokens** with `{{mt_*}}` syntax: `{{mt_company}}`, `{{mt_industry}}`,
  `{{mt_city}}`, `{{mt_region}}`, `{{mt_country}}`, `{{mt_employee_count}}` (L94–99). HIGH-VALUE to
  verify token prefix `mt_` and exact names against the live editor "Insert Personalization Variables" modal.
- **Debug Mode** in the editor to preview as different accounts / bypass control group (L117,123).
- Campaign **Status** values: "Full personalization", "Experiment", "Inactive" (L115, L201).
- Page **status** "Active"/"Draft"/"Inactive" (L116).
- **Actions menu (⋮) → Duplicate Campaign** (L249–253) and **Actions → Archive** (L270–272).
- Analytics tabs: **Performance, Insights, Engagement, Audience** (L301–306).
- Settings → Installation (L119), Engagement tab visitor counts (L205,210).
- CSV export "from any analytics tab", scheduled reports, API access (Enterprise) (L311–313).

**Staleness signals / risks:**
- "AI Sequences" as the email/multichannel type label is the strongest staleness suspect — likely
  renamed to an "Agentic Flow"/"Agentic Chat" family in the live app (repo screenshots use that naming).
- `{{mt_*}}` variable prefix must be verified; if tokens changed prefix or names, every example breaks.
- "Abmatic offers five campaign types" — count is brittle; verify the create-campaign modal still
  shows exactly these five (screenshot first-campaign-type-modal.png has no verified/ twin).
- Recommended control % defaults ("Start with 25% control", "default is 50/50") — verify against
  current default in campaign settings.
- No TODO/placeholder/"coming soon" text. No broken image paths.

---

## docs/faq/general.md

**Topic:** General FAQ — what Abmatic is/who it's for, differentiation, skills needed, setup time,
visitor identification mechanics & rates, data/privacy/compliance (GDPR/SOC2), data storage/retention,
pricing/plans, technical (SPA/GTM/CDN support), support channels/hours, bug/feature reporting.

**Summary:** Broad introductory FAQ. Positions Abmatic as a 4-pillar ABM platform (Identify,
Personalize, Automate via AI agents, Integrate, Measure). Includes identification-rate tables,
privacy posture, and technical compatibility matrices.

**Screenshots referenced (3):**
- L58 `/img/screenshots/ai-agents-hub.png` — "Abmatic AI Agents Hub" (Alex SDR / Clara ABM)
- L99 `/img/screenshots/reveal-accounts.png` — Reveal Accounts dashboard
- L139 `/img/screenshots/reveal-contacts.png` — Contact Reveal

**Product/UI/labels CLAIMED to exist (verify):**
- **AI agents named "Alex (SDR)" and "Clara (ABM)"** (L58–59) — verify current agent names/roster
  (repo has alex-sdr-main.png, clara-abm-main.png so likely current, but confirm no new agents).
- Visitor identification via **300M+ companies** database (L96) — number likely stale; MEMORY/other
  docs cite differing DB sizes. Verify.
- Script size **"< 50KB"** and **"< 50ms"** load impact (L94, L266, L272) — verify against current bundle.
- **Form Tracking**, **Contact Reveal** (credits), **CRM matching** as the 3 individual-ID methods (L133–137).
- Data centers AWS us-east-1 / us-west-2; EU on request (L189). Encryption AES-256 / TLS 1.3 (L192).
- Retention: visitor/session 24 months, campaign 36 months (L198–199) — verify; MEMORY notes
  live analytics collections hold ~90 days with Online Archive beyond — the "24 months" claim may be
  misleading vs the 90-day live cliff.
- SPA support matrix (React/Vue/Angular/Next/Nuxt) via History API (L278–285).
- GTM install via Custom HTML tag, All Pages trigger (L289–298).
- CDN/LB support: Cloudflare/CloudFront/Fastly/Akamai/nginx (L304–310), X-Forwarded-For (L312).
- 14-day free trial, app.abmatic.ai/signup (L228).
- Support hours "Mon-Fri 9am-6pm ET"; Enterprise 24/7 (L334).
- feedback@abmatic.ai, "reviewed quarterly" (L352–356).

**Staleness signals / risks:**
- Marketing metrics likely fabricated/stale: "2-3x higher conversion", "Save 10+ hours/week",
  "40-60% improvement in engagement within 30 days" (L26–28, L44). MEMORY notes a v6 effort
  "fabricated metrics purged" on the marketing site — these FAQ stats may be the same purged class.
- "300M+ companies" DB figure (verify/normalize).
- Retention "24 months / 36 months" conflicts with the live ~90-day analytics retention reality.
- Agent names Alex/Clara recur — single source-of-truth check needed.
- No TODO/placeholder/"coming soon". No broken image paths.

---

## docs/faq/integrations.md

**Topic:** Integrations FAQ — supported CRMs, sync frequency, sync-failure handling, custom field
mapping, Fill vs Overwrite modes, selective record sync, ad-platform integrations (LinkedIn/Google),
Slack notifications, Google Analytics & Segment, and an integration-troubleshooting mini-section.

**Summary:** Q&A covering the full integrations surface. Claims native one-click OAuth for five CRMs
and documents LinkedIn/Google audience push, Slack alerts, and GA/Segment connectors.

**Screenshots referenced (5; integrations-hub.png reused 4×):**
- L35 `/img/screenshots/integrations-hub.png` — Integrations Hub
- L79 `/img/screenshots/integrations-hub.png` — (reuse) field mapping nav
- L123 `/img/screenshots/integrations-hub.png` — (reuse) Advertising section / LinkedIn
- L181 `/img/screenshots/integrations-hub.png` — (reuse) Advertising section / Google Ads
- L199 `/img/screenshots/settings-slack.png` — Slack Integration

**Product/UI/labels CLAIMED to exist (verify):**
- **CRMs: Salesforce, HubSpot, Pipedrive, Outreach, ActiveCampaign** all "Native OAuth" (L25–29).
  Verify all five are still live native integrations (esp. Outreach, ActiveCampaign, Pipedrive).
- Sync frequency options: **15 min / hourly / 12 hours / manual** (L44–47) — verify these exact options.
- **Settings → Integrations** hub; per-CRM **SETTINGS** button → **Field Mapping** (L79–80, L313).
- **Field Mapping: "Map up to 30 fields" per object** (L72) — verify the 30-field cap.
- **Fill vs Overwrite** modes (L86–89); link to `/integrations/crm/sync-behavior`.
- Import methods: Field filters, List views, Saved reports (Salesforce), Manual selection (L101–106).
- Ad platforms: **LinkedIn Ads** (push company lists) + **Google Ads** (Customer Match) (L120–121).
- **Audiences → [List] → Actions → Push to LinkedIn** flow (L130–134).
- **Settings → Slack → Connect to Slack** flow + channel/event config (L217–223).
- GA integration (event forwarding, company data layer, conversion tracking) (L231–238).
- **Segment** as source AND destination (L243–248).
- Troubleshooting: "Reconnect" button, Sync Logs tab, **Integrations > Settings > Sync Frequency** (L260–296).

**Staleness signals / risks:**
- The CRM list (Pipedrive/Outreach/ActiveCampaign as *native OAuth*) is the top staleness suspect —
  many ABM tools support only SFDC + HubSpot natively; verify the other three aren't aspirational.
- "Map up to 30 fields" and the precise sync-frequency tiers are concrete numbers to confirm.
- Slack setup nav appears in TWO forms: "Settings > Slack" (L219) here vs Slack covered under
  Integrations elsewhere — confirm whether Slack lives at Settings → Slack or Settings → Integrations
  (common-errors.md L267 says "Integrations > Slack"; troubleshooting consistency issue).
- Single reused hero screenshot (integrations-hub.png) stands in for field-mapping, advertising, and
  Google-Ads contexts — captions promise content the one image can't actually show. Planner may want
  dedicated screenshots for Advertising section + Field Mapping.
- No TODO/placeholder/"coming soon". No broken image paths.

---

## docs/troubleshooting/troubleshooting-overview.md

**Topic:** Troubleshooting landing page — quick diagnostics checklist, issues-by-category tables
(script, CRM, campaign), error-message explanations (429/500/"Account not found"/auth), pre-support
checklist, screenshot-capture guidance.

**Summary:** Hub/overview that routes to the three deep-dive troubleshooting docs and explains the
most common errors inline. sidebar_position: 1.

**Screenshots referenced (1):**
- L28 `/img/screenshots/verified/installation-script.png` — "Installation verification status"
  (ONLY file in the audited set that uses the `verified/` path — inconsistent with peers).

**Product/UI/labels CLAIMED to exist (verify):**
- **Settings → Installation** page with a green-checkmark "verified" tracking status (L23,28,40).
- **Integrations** page "Connected" status + **Reconnect** button (L24, L50, L120–122).
- **Settings → Users** for account/role status (L111).
- SDK/JS API calls: **`abmatic.page()`** on route change, **`abmatic.track()`** for events (L41–42).
  NOTE: script-issues.md documents `window.abmatic.identify(...)` but NOT `abmatic.page()`/
  `abmatic.track()` — these specific method names need verification against the live client script
  API (MEMORY references client-script built from common-py/client_script). Possible doc invented
  method names.
- Error strings quoted: `Request failed with status code 429`, `...500`,
  `Account not found. Signing out.`, `Authentication failed` (L78–117).
- "~30% of visitors can be identified" (L40) — conflicts with script-issues.md/general.md tables
  that cite 60-80% corporate. Internal inconsistency.

**Staleness signals / risks:**
- The `verified/` image path here vs root path everywhere else is a structural inconsistency.
- `abmatic.page()` / `abmatic.track()` SDK method names are unverified and appear nowhere else —
  HIGH risk of being inaccurate.
- Identification-rate figure (~30%) inconsistent with sibling docs.
- No TODO/placeholder/"coming soon".

---

## docs/troubleshooting/script-issues.md

**Topic:** Script & tracking troubleshooting — script not loading, no visitors, unidentified
visitors, page views not tracking (SPA), form-submission tracking, manual form tracking API,
a checklist, and support escalation.

**Summary:** Deep-dive on installing/diagnosing the tracking script. Walks View-Source and
DevTools Network checks, ad-blocker/CSP causes, SPA pushState behavior, and automatic + manual
form tracking. sidebar_position: 2.

**Screenshots referenced (1):**
- L16 `/img/screenshots/installation-script.png` — "Installation page showing script and status"

**Product/UI/labels CLAIMED to exist (verify):**
- Script tag form: **`<script async src="https://clients.abmatic.ai/YOUR_ID.js"></script>`**
  (L35, L52) — verify the clients.abmatic.ai/<id>.js URL pattern is current (MEMORY confirms
  clients.abmatic.ai is the live client-script host).
- **Installation page** status "Inactive"/"Active" (L23, L94).
- **Reveal → Accounts** section showing identified companies (L26, L94).
- CSP directives: `script-src https://clients.abmatic.ai`, `connect-src ... https://api.abmatic.ai` (L84–85).
- **Settings → Account** with excluded domains/IPs filters (L114–116).
- Automatic form tracking triggers on `<input type="email">` + standard POST/fetch/XHR (L184–185).
- **Manual form tracking JS API: `window.abmatic.identify({ email, firstName, lastName, company })`**
  (L201–207) — verify this method signature exists on the live client script.
- Platform notes: GTM publish/Preview, WordPress (header.php / WP Super Cache, W3 Total Cache,
  LiteSpeed), Elementor/Divi header sections (L55–64).
- Identification-rate table 60-80% corporate etc. (L127–132).

**Staleness signals / risks:**
- `window.abmatic.identify(...)` signature is the key thing to verify; it's the only JS API the
  page documents and is load-bearing for "manual form tracking".
- The `clients.abmatic.ai/YOUR_ID.js` pattern — confirm whether the live snippet is exactly this
  (some installs use a query-param or different path). The anti-flicker/script snippets in
  campaign-issues.md use the same URL, so verify once.
- Identification-rate numbers differ across docs (here vs overview's ~30%).
- No TODO/placeholder/"coming soon". No broken image paths.

---

## docs/troubleshooting/crm-sync.md

**Topic:** CRM sync troubleshooting — Salesforce ("Invalid Grant", insufficient privileges, API
limits), HubSpot (permissions/scopes, rate limits), records-not-syncing, duplicates & matching
rules, slow sync expectations, field mapping, reconnecting, sync logs.

**Summary:** The most procedurally detailed troubleshooting doc. Covers SFDC + HubSpot deeply plus
generic sync mechanics; quotes specific permissions/scopes, API-limit tables, and an initial-sync
time-by-record-count table. sidebar_position: 3.

**Screenshots referenced (1):**
- L16 `/img/screenshots/integrations-crm-status.png` — "CRM Integration Status"
  (NOTE: this image has no `verified/` twin — candidate for re-capture/verification.)

**Product/UI/labels CLAIMED to exist (verify):**
- **Integrations** page with **Disconnect / Connect / Sync Now** buttons + "Connected" status (L49–52,
  L334–339).
- **Integrations > [CRM] > Sync Logs** / "View History", filter by Success/Error/Warning (L183, L352–356).
- **Integrations > Sync Settings** (object enable/disable, "Last Synced" timestamp) (L177–186).
- **Integrations > Sync Settings > Matching Rules** with Primary/Secondary match fields (L236–243).
- **Integrations > [CRM] > Field Mapping → Add Field Mapping** with Source/Destination/Direction/
  Behavior (Fill/Overwrite/Ignore) (L313–320).
- Salesforce permissions: **API Enabled, View All Data, Modify All Data, Object-level CRUD** (L68–73).
- HubSpot scopes: `crm.objects.contacts.read/write`, `crm.objects.companies.read/write`,
  `crm.objects.deals.read` (L124–130). "Connect with a Super Admin user" (L136).
- API-limit tables: SFDC editions (15K + users×1K, Unlimited users×5K), HubSpot burst 100/10s,
  daily 250K, secondly 10/s (L93–97, L153–157).
- Import filter methods, one-way sync toggles ("Import from CRM"/"Export to CRM") (L204–218).

**Staleness signals / risks:**
- HubSpot daily limit "250,000 requests/day" and burst/secondly numbers are vendor-side values that
  change; SFDC API formula likewise. Lower priority (these are third-party limits) but flag.
- UI nav strings are very specific ("Sync Settings", "Matching Rules", "Field Mapping",
  "Sync Logs"/"View History") — verify these labels/paths exist exactly in the live Integrations UI.
  The faq/integrations.md uses slightly different phrasing ("SETTINGS button on your connected CRM"),
  so reconcile the canonical nav.
- integrations-crm-status.png has no verified/ twin → likely unvetted/stale screenshot.
- No TODO/placeholder/"coming soon".

---

## docs/troubleshooting/campaign-issues.md

**Topic:** Campaign troubleshooting — personalization not showing (5-step), editor not loading,
wrong content/priority conflicts, no analytics, page flickering (FOOC) + anti-flicker, A/B test
significance, conversion tracking, LinkedIn/Google Ads audience sync issues.

**Summary:** The largest troubleshooting doc (456 lines). Quick-diagnostic table up top, then deep
sections. Includes code snippets (script placement + anti-flicker). sidebar_position: 4.

**Screenshots referenced (2):**
- L47 `/img/screenshots/campaigns-list.png` — campaign list status column
- L64 `/img/screenshots/wp-pages-tab.png` — campaign Pages tab (has NO verified/ twin)

**Product/UI/labels CLAIMED to exist (verify):**
- Campaign **Status** column values: "100% Full personalization", "50% Experiment", "0% Inactive"
  (L43–45) — verify the live status label format including the percentage prefixes.
- Campaign **Pages tab** with per-page **Active/Draft/Inactive** status + green checkmark +
  **Publish** button (L54–64).
- Campaign **Audience tab** targeting conditions (Target Account List, Industry, Company size,
  Page URL, Geographic) (L72–83).
- **Preference column** (#1, #2...) drag-to-reorder priority; "lower number = higher priority" (L190–194).
- **Conversions** section: active goals, URL-based / Event-based / Form-based types,
  attribution window default 30 days (L243–248, L360–383).
- Editor security: X-Frame-Options/CSP/login-required iframe issues (L160–171).
- Script snippet `<script async src="https://clients.abmatic.ai/YOUR_ID.js">` (L278) + anti-flicker
  opacity snippet (L288–296) — verify Abmatic actually recommends this DIY anti-flicker pattern
  (contact-support framing suggests it's not a built-in feature).
- **Integrations** LinkedIn/Google Ads "Active" status + reconnect (L393–397).
- Ad-platform minimums: LinkedIn 300 matched members, Google 100 (Display)/1,000 (Search) (L416–420).

**Staleness signals / risks:**
- Status-badge wording ("100% Full personalization" / "50% Experiment" / "0% Inactive") is very
  specific and a prime candidate for drift — must match the live Campaigns list exactly.
- "Preference" column terminology for priority — verify it's still called Preference.
- Anti-flicker snippet is a manual hack with a hard 2s opacity:0 — verify current best-practice;
  could be stale/risky guidance if the product now ships a native anti-flicker.
- wp-pages-tab.png has no verified/ twin → likely unvetted/stale screenshot.
- No TODO/placeholder/"coming soon".

---

## docs/troubleshooting/common-errors.md

**Topic:** Common error-message reference — HTTP 400/401/403/404/429/500, authentication errors,
CRM integration errors, Slack integration errors, campaign/editor errors, data/analytics errors,
prevention tips. NO screenshots.

**Summary:** A lookup table of error strings → meaning → fix. The only audited file with zero image
references. sidebar_position: 5.

**Screenshots referenced:** NONE (0).

**Product/UI/labels CLAIMED to exist (verify):**
- Exact error strings: "Account not found. Signing out.", "Invalid credentials", "Session expired",
  "Authentication failed"/"Invalid Grant", "Insufficient privileges"/"Missing permissions",
  "API limit exceeded", "Duplicate record", "Missing scope", "Invalid name specials", "Not in channel",
  "Failed to load page", "Element not found", "Changes couldn't be saved", "No data available",
  "Report failed to generate" — verify these match strings the live app actually emits.
- **Settings → Users** to see assigned role/permissions (L74).
- **Integrations** Disconnect/Connect flow (L188–191, L267–269).
- **Integrations > Sync Settings > Matching Rules** (L250).
- Slack: `/invite @Abmatic`, channel > Settings > Add apps (L298–300); "Integrations > Slack" (L267).
- SFDC perms (API Enabled/View All/Modify All) + HubSpot scopes (mirror crm-sync.md).
- Link `/campaigns/page-editor#troubleshooting` (L326) — verify this anchor/page exists.

**Staleness signals / risks:**
- "Invalid name specials" — odd/garbled error string (likely a literal product string, but worth
  confirming it still appears; reads like it could be a legacy/mistranslated message).
- Slack nav inconsistency: here "Integrations > Slack" (L267) vs faq/integrations.md "Settings > Slack"
  (L219). Reconcile canonical location.
- Response-time SLA table uses plan tier "Standard" (L429) whereas billing.md/general.md use
  "Starter" — plan-name inconsistency across docs.
- `/campaigns/page-editor#troubleshooting` cross-link should be validated.
- No TODO/placeholder/"coming soon".

---

## Cross-cutting findings for the planner

1. **Image sourcing inconsistency:** 8/9 docs reference root `screenshots/*.png`; only
   troubleshooting-overview.md uses `screenshots/verified/*.png`. A vetted `verified/` set exists but
   several referenced images lack a verified twin (first-campaign-type-modal, wp-audience-tab,
   page-editor-main, dynamic-content-menu, ab-control-insights, wp-insights-tab, wp-performance-tab,
   wp-pages-tab, integrations-crm-status). These no-twin images are the top re-capture candidates.
2. **Campaign-type naming drift:** "AI Sequences" (faq/campaigns.md) likely renamed to an
   "Agentic Flow / Agentic Chat" family in the live app (repo screenshots use agentic-* naming).
3. **SDK method-name risk:** troubleshooting-overview.md cites `abmatic.page()` / `abmatic.track()`;
   script-issues.md cites `window.abmatic.identify(...)`. These must be verified against the live
   client script; the page()/track() names appear nowhere else and may be invented.
4. **Plan-name inconsistency:** Starter/Professional/Enterprise (billing, general) vs Standard
   (common-errors response-time table). Pick one canonical set.
5. **Identification-rate inconsistency:** ~30% (overview) vs 60-80% corporate tables (general,
   script-issues). Reconcile.
6. **Retention claim risk:** general.md "24 months / 36 months" vs the live ~90-day analytics
   retention reality (Online Archive beyond). Likely misleading.
7. **Marketing-metric staleness:** "2-3x conversion", "10+ hrs/week", "40-60% engagement",
   "300M+ companies", "60-80% lower costs" — class of fabricated/aspirational stats that a v6
   marketing pass reportedly purged; verify before keeping.
8. **Nav-label reconciliation:** Slack at "Settings > Slack" vs "Integrations > Slack"; CRM field
   mapping nav phrased differently between faq/integrations and troubleshooting/crm-sync.
9. **Token prefix:** `{{mt_*}}` personalization variables must be verified end-to-end.
10. **No file in scope contains TODO / placeholder / "coming soon" text, and no referenced image
    path is broken on disk** — staleness is content/accuracy-based, not structural-link rot.
