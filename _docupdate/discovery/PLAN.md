# Abmatic AI Support Docs — Gap Analysis & Update Plan

Synthesized 2026-06-12 from all discovery findings in `_docupdate/discovery/`:
9 doc-audit-\*.md (current state of 88 existing pages), 8 gh-\*.md (current product
features from live `app-frontend` source, HEAD `3c9e1b26`, 318 commits since 2026-03-01),
and 2 app-map-\*.md (live UI reference captures against app.abmatic.ai).

This plan is executed by a fan-out of writer agents. Every existing page and every
proposed new page has a machine-readable entry in `PLAN.json`.

---

## 1. Executive Summary

The product has moved a full generation ahead of the docs. The docs baseline is
~Jan–Mar 2026; the live app is the **"Agentic AI" / v6.1** generation. The biggest
structural changes the docs are missing or get wrong:

### Headline changes the docs do NOT reflect

1. **NEW left ICON sidebar is the global nav.** A permanent collapsed 54px rail
   (expands to 200px on hover) replaced whatever older nav the docs assume. Order:
   **AI Agent · Goals\* · Home · Accounts · Contacts · Campaigns · Conversions ·
   Visitor Reveal · Analytics · Oracle Inbox\*** (top) and **Installation** (bottom).
   Items marked \* are feature-flag gated. The top-bar adds a **dark/light mode toggle**
   (localStorage `abmatic-theme-mode`, default light), global **Search** ("What are you
   looking for?"), **Help** dialog (24h SLA), **Knock-powered Notifications** bell, and
   **Settings/avatar**. Nearly every getting-started/nav claim in the docs is stale here.

2. **NEW "Oracle" autonomous-agent product — entirely undocumented.** Three surfaces,
   all flag-gated (`autonomous_agent.goals`, `autonomous_agent.approval_inbox`):
   - **Oracle Goals** (`/oracle/goals`) — tell the autonomous agent what to pursue
     (Title, Description, Success metric e.g. `demos_booked`, Target value, Target date);
     **weekly checkpoints** with agent notes + actions taken.
   - **Oracle Approvals / Inbox** (`/oracle/inbox`) — human-in-the-loop approval queue;
     each action shows **action_type, Risk tier (low/medium/high), Est. spend $X,
     rationale, JSON payload**, with **Approve/Deny + optional Notes**.
   - **Trust tiers** that govern auto-execution: **supervised** (approve all) /
     **standard** (auto-small, approve-large) / **autonomous** (just notify) — set in an
     admin "AI Agent (Oracle)" config panel.
   Default/disabled states tell users to contact their Abmatic rep / support@abmatic.ai.

3. **Agentic Chat got major features.** The website chat widget campaign now has:
   - an **Instructions** tab (AI Instructions context) with **email-handoff modes**:
     **Book a meeting** (live calendar slots from routed AE), **Send a thank-you**
     (custom line), **Show a HubSpot form** (embed + Slack notify);
   - an **"AI Conversation Summary"** Performance sub-tab (auto-clusters chats into
     **Topic / Description / Visitors with Chat / Converted / Sentiment**, "Refresh
     insights", "Show visitors (N)" backlink into the Visitors/reveal view);
   - **Demo-booking columns** (Demo Booked / Demo Booked At / Demo Scheduled At /
     Demo AE / Demo Time);
   - thinking/tool-step chat UI, auto-greeting, voice mode.

4. **Current AI agent naming is CONFIRMED but the docs conflate two surfaces.**
   - Page-level `/ai-agents/:agent`: **Clara — "AI ABM"** (`/ai-agents/abm`, the landing
     persona, "Meet Your AI Partner") and **Alex — "AI SDR"** (`/ai-agents/sdr`, voice
     calling). Landing currently surfaces only Clara.
   - In-app **co-pilot** roster (separate surface, reachable via `?ai-agent-help` +
     AgentFAB): **Abmatic AI, Rachel** (Super Agent), **Clara** (Insights & Analytics
     Director), **Joey** (Website Content Strategist), **Marcus** (Campaign Operations),
     **Sophia** (Personalization Strategy Manager), **Alex** (Audience Accounts Director),
     **Jordan** (Audience Contacts Director), **James** (Bidding Strategy Expert).
   Docs must disambiguate these and stop calling the AI chat widget "Clara" (the API
   doc does this; it's the **Agentic Chat** widget, not Clara).

5. **Campaign renames (frontend slug/label only; internal types unchanged):**
   - **"Banner & Popup" → "Widget"** (URL slug now `/campaigns/widget/...`; old
     `banner_popup` URLs still resolve).
   - Create-campaign category **"Advanced" → "Agentic"**. Categories are now exactly
     **Personalization / Advertising / Agentic**.

6. **NEW campaign type: OpenAI Ads (replaced Meta tile).** API-key connect in
   Integrations; Ads grid + inline Ad editor; **AI Strategy** one-click builder (5 ad
   copies + 5 brand-aware images, publishes PAUSED); Insights (impr/clicks/spend/CTR/
   CPC/CPM); live/inactive toggle; Locations US/CA/AU/NZ; "Import Campaigns". **Meta is
   now "Coming Soon"/disabled; Marketo is a non-functional placeholder; AdRoll/5x5 gone.**

7. **NEW analytics columns + new audience signals.** **Demo Booked At / Demo Scheduled
   At / Demo Time / Demo Booked / Demo AE** now appear on account/contact/campaign
   Performance tables and grids, and `demo_booked` is a mappable CRM field. New columns/
   filters: **Reveal Confidence**, **Agentic Chat Engagement Score** (engagement now
   splits into Total / LinkedIn / Website / Agentic Chat), **recommended_personal_email**,
   **Technologies**, and an **"AI Conversations"** (`totalAIConversations`) segment filter.
   Report types (7): Account, Contact, Opportunity, Campaign, User, Unique Visitor,
   **LinkedIn Visitor Session**.

8. **NEW integrations: Google Calendar + Zoom + Meeting Types** (powering Agentic Chat
   meeting booking), **OpenAI Ads**. **Sales user role** (Google-only sign-in, restricted
   Sales Dashboard). CRM field mapping now uses **Fill / Overwrite / Don't sync** modes
   (not an on/off toggle); **CRM push filters**; **HubSpot user import + owners** (reconnect
   required for owners scope); **HubSpot forms** in popups + Agentic Chat. **IP data
   providers are now a fixed 5-provider Abmatic-branded waterfall** (single on/off) —
   Clearbit/Kickfire/ZoomInfo/5x5 are removed.

9. **NEW/renamed settings + section relabels.** **API Keys** settings tab is new
   (`https://api.abmatic.ai/v1`, 100 req/min). **Website Context** (scrape → Summary +
   FAQs feeding the agents) is heavily reworked. **AI Agents** settings = two tabs
   (Agentic Chat / Agentic Sequence) + **Refresh Context**. **Usage** credits relabeled
   (Apollo Contacts, Abmatic Accounts/Contacts/IP Reveal, OpenAI Tokens, Campaigns).
   **Users** adds Sales role + Google Calendar/Zoom chips + **Default AE**. **Notifications**
   are Knock-powered, In-App only. **Privacy/Data-Collection settings are GONE** (route
   commented out). **"Company Reveal" is now "Visitor Reveal"** with Accounts/Contacts tabs
   and **Reveal Source = Abmatic 1–4** (never expose PDL/Apollo/5x5).

### Pervasive correctness issues the docs already have (must fix while updating)

- **Audiences object naming is inconsistent** across docs: "Collection" / "Target Group" /
  "Account List". Live label is **Collection** (created via **+ Account List / + Contact
  List**); the create dialog labels the filter option **"Static Collection"** (not "Create
  from Filters"). The `target-groups.md` "Target Groups" framing is doc-only — repoint to
  Collections.
- **Personalization-variable syntax is documented three incompatible ways**
  (`{{mt_*}}` + `{{mt_salesforce_*}}` vs `{{sf_*}}`/`{{hs_*}}` vs bare `{{firstName}}`).
  Pin one canonical set against the live editor (likely `mt_*` for web personalization,
  bare `{{field}}` for sequences).
- **CSV limits contradict** across docs (1,000 vs 10,000 rows). Live value: **100 MB,
  10,000 records**, AI column mapping.
- **CVRL / CTRL defined two ways** ("lift" vs "personalized/control group rate"). Pick one.
- **Campaign-type roster inconsistent** (overview says "12 types", omits Google Ads/CRM).
- **JS API method names unverified** across troubleshooting docs (`abmatic.page()`,
  `abmatic.track()`, `window.abmatic.identify()`) — verify against live client script.
- **Stale marketing metrics** ("2-3x", "10x", "300M+ companies", "208% ITSMA") and
  **stale plan names** (Starter/Professional/Enterprise vs current packaging) throughout.
- **Hardcoded data-bearing screenshot captions** ("31,849 companies", "351 reports",
  "1,090 contacts") and **PII baked into prose+screenshots** (Stacy Carrier + work email)
  — re-shoot/genericize/anonymize.
- **sidebar_position collisions** within campaigns (7,8), audiences (3), integrations
  (2,5); missing positions on several files.
- **Changelog stops at Jan 2026** (~5 months stale; "Coming Soon" items have shipped).
- **Markettailor** old-brand name still in segment.md.
- **Google Ads $50k Customer Match threshold + Similar Audiences** are stale Google facts.

---

## 2. NEW pages to CREATE

| docPath | sidebar placement | why |
|---|---|---|
| `docs/ai-agents/oracle-overview.md` | new **AI Agents → Oracle (Autonomous Agent)** subcategory, position 1 | Introduces the Oracle product, trust tiers (supervised/standard/autonomous), flag-gating, how to request enablement. Entirely undocumented. |
| `docs/ai-agents/oracle-goals.md` | AI Agents → Oracle, position 2 | Creating goals (Title/Description/Success metric/Target value/Target date), reading the progress bar, weekly checkpoints (agent notes + actions taken). New `/oracle/goals`. |
| `docs/ai-agents/oracle-approvals.md` | AI Agents → Oracle, position 3 | The approval inbox: action_type, Risk tier, Est. spend, rationale, JSON payload, Approve/Deny + Notes, audit log. New `/oracle/inbox`. |
| `docs/ai-agents/co-pilot.md` | AI Agents, after the agent personas | The in-app conversational co-pilot (AgentFAB / `?ai-agent-help` / "AI Conversation" drawer): the named roster (Rachel/Joey/Marcus/Sophia/Jordan/James + Clara/Alex), thinking/tool steps, voice mode. Distinct from the page-level Clara/Alex product. |
| `docs/getting-started/navigation.md` | Getting Started, after home-dashboard | Reference for the new left icon sidebar + top bar (Search, Help, Notifications, dark mode). The single highest-traffic "what changed" page; many other docs depend on a correct nav reference. |
| `docs/campaigns/openai-ads.md` | Campaigns (Advertising group) | NEW OpenAI Ads campaign type: API-key requirement, Ads grid + inline Ad editor, **AI Strategy** one-click builder (5 ads + 5 images, PAUSED), Insights metrics, live/inactive toggle, Locations US/CA/AU/NZ, Import Campaigns. Replaces the Meta tile. |
| `docs/campaigns/widget.md` | Campaigns (Personalization) — replaces/renames `banner-popup` | The renamed **Widget** campaign (was Banner & Popup) PLUS the **5 widget types** in the editor: banner / popup / exit-intent modal / **sidebar (NEW)** / agentic chat; anchor positions, triggers, HubSpot-form picker. (Keep `banner-popup.md` as a redirect/alias — old slug still in use.) |
| `docs/integrations/calendar.md` | Integrations → Communications | NEW Google Calendar integration: OAuth, Calendar Settings (Availability: timezone/duration/advance-notice/max-days/working-hours; Create Event), **Meeting Types** CRUD, tie-in to Agentic Chat meeting booking + Default AE routing. |
| `docs/integrations/zoom.md` | Integrations → Communications | NEW Zoom integration: OAuth, instant/scheduled Zoom meeting links, cross-prompt with Calendar. |
| `docs/integrations/openai-ads.md` | Integrations → Advertising | NEW OpenAI Ads ad-network integration: API-key connect, Settings dialog (masked key + "Import Campaigns"), relationship to the OpenAI Ads campaign type. |
| `docs/settings/api-keys.md` | Settings (and cross-link from API Reference) | NEW API Keys settings tab: generate/regenerate/revoke, one-time reveal, base URL `https://api.abmatic.ai/v1`, 100 req/min, rotation guidance. (Reconcile with existing `api/api-keys.md` which documents the same surface from the API angle.) |
| `docs/settings/ai-agents.md` | Settings | NEW AI Agents settings page: Agentic Chat vs Agentic Sequence context tabs + **Refresh Context** (regenerate from scraped pages). Resolves the long-standing "where does agent context live" ambiguity. |
| `docs/settings/usage.md` | Settings — replaces/renames `billing.md` | Usage/credits page with current labels (Apollo Contacts, Abmatic Accounts/Contacts/IP Reveal, OpenAI Tokens, Campaigns), over-quota state, plan limits. `billing.md` ("Usage & Billing") is mislabeled and metadata-sparse. |
| `docs/settings/sales-role.md` | Settings → Users (or a short section in users.md) | NEW Sales user role: Google-only sign-in (`/sales/sign-in`), restricted Sales Dashboard (Calendar + Zoom cards), Default AE. (Could be folded into `settings/users.md` instead of a standalone page — writer's discretion; flagged as create-or-merge.) |

> Note: `widget.md` and `usage.md` are effectively **renames** of `banner-popup.md`
> and `billing.md`. The plan creates the correctly-named page and marks the old one for
> redirect/retire (see §5). `settings/ai-agents.md` overlaps conceptually with the existing
> `ai-agents/configuration.md` — that doc should be repointed to focus on agent context
> while the new settings page documents the literal Settings → AI Agents tab.

---

## 3. Existing pages to UPDATE (grouped)

### A. Getting Started (high priority — nav + naming foundation)
- **intro.md** — refresh capability matrix + "What's New"; add Oracle, Agentic Chat,
  OpenAI Ads, Visitor Reveal; fix asserted routes; remove dashboard "sharing" claim or
  reconcile; purge unsourced metrics.
- **quick-start.md** — rewrite Step 5 to the two-tab Home (Overview/Dashboard, 5 cards
  incl. Collections); fix nav to the new icon sidebar; reconcile script-status label
  (Active vs Verified); fix Collection vs Target Group naming; fix caption/image mismatches.
- **home-dashboard.md** — confirm Overview/Dashboard tabs + 5 cards (**Collections**, not
  Target Groups); resolve 90-day date-range inconsistency; resolve "sharing" conflict.
- **install-script.md** — reconcile status label (Active/Inactive vs Verified) with live;
  verify JS API + CSP; standardize on verified screenshots.
- **first-campaign.md** — verify Inbound/Outbound split + tab names; pin `{{mt_*}}`
  variable list; fix L90 outbound-audience image; purge metrics.
- **use-cases.md** — reconcile campaign-type names (Widget not Banner & Popup; Agentic
  Flow / Agentic Sequence / OpenAI Ads); fix AI-agent config path; add Oracle/Demo-Booked
  use cases.
- **playbooks.md** — fix nav paths (AI Agents top-level vs Settings; Collections naming);
  add a meeting-booking/Agentic-Chat play; purge metrics.
- **glossary.md** — add Oracle, Trust Tiers, Agentic Chat handoff, OpenAI Ads, Widget,
  Visitor Reveal, Reveal Confidence/Source, Demo Booked, Co-Pilot roster, Collections;
  fix campaign-type taxonomy and variable list; pin rate limit.

### B. Campaigns (high priority — renames, new types, Agentic Chat overhaul)
- **overview.md** — rebuild the campaign-type roster to the real create-modal contents
  (Personalization: Inbound/Outbound/A-B/**Widget**; Advertising: Display/LinkedIn/
  **OpenAI Ads**/Retargeting; Agentic: Agentic Flow/Sequence/Intent/Agentic Chat);
  clarify Google Ads (Customer-Match upload, tile hidden) + CRM Campaigns as auxiliary;
  reconcile status values (Full Personalization/Experiment/Inactive); rename category
  "Advanced"→"Agentic".
- **agentic-chat.md** — major rewrite: Instructions tab + **email-handoff modes**
  (book_meeting/thank_you/hubspot_form), **AI Conversation Summary** Performance sub-tab,
  **demo-booking columns**, "Show visitors" backlink, voice/six-voice picker, fix the
  8-of-9 scrambled screenshot↔caption pairings, "Advanced"→"Agentic" create path.
- **banner-popup.md** — rename to **Widget** (see new `widget.md`); add the **sidebar
  widget** (5th type) + HubSpot-form picker; fix slug guidance; verify overlay editor.
- **advertising-campaigns.md** — Meta is now "Coming Soon"/disabled (remove as a live
  type or mark disabled); verify Clara bidding label; reconcile CVRL/CTRL.
- **agentic-flow.md** — confirm Agentic Flow vs Sequence vs Agentic Sequence distinction;
  fix Settings-tab name; fix sidebar_position collision.
- **email-campaigns.md** — reconcile "AI Sequences"/"Sequence" label with live create modal
  (display "Sequence", type `email`); pin bare `{{field}}` variable syntax; clarify vs
  Agentic Flow.
- **linkedin-ads.md** — verify Push to LinkedIn + 300-company minimum; reconcile button
  labels; fix sidebar_position.
- **google-ads.md** — clarify it's a Customer-Match **audience-sync** path (tile hidden in
  Create Campaign); update the 3-step popup (Preparing→Creating→Uploading, skipped-records);
  fix stale Google policy facts; fix sidebar_position.
- **crm-campaigns.md** — verify per-campaign Settings>CRM Sync flow; update example years
  (2024→2026); add screenshots for the unshown flow.
- **dynamic-content.md** — **resolve the 3-way variable-syntax conflict** (single source of
  truth); confirm Personalize menu tabs; verify `{{daysUntilEvent}}`.
- **page-editor.md** — fix CRM variable prefix conflict (`{{sf_*}}`/`{{hs_*}}` vs
  `{{mt_salesforce_*}}`); re-capture editor controls; confirm shortcuts.
- **ab-testing.md** — reconcile control-weight values (10/20/50 vs 100/90/50/0); pin the
  Status dropdown values; verify A/B Test field labels.
- **intent.md** — capture the third-party keyword UI (explicit TODO at L169); verify
  weights/tiers/trend thresholds; fix sidebar_position.
- **website-personalization.md** — reconcile CVRL/CTRL; verify tab names + button casing;
  this is the best-screenshotted baseline — keep but verify.

### C. Audiences (medium-high — naming, SSRM, new columns)
- **overview.md, accounts.md, contacts.md, target-groups.md, filters.md, csv-import.md,
  crm-sync.md** — normalize **Collections** naming + create dialog labels (Static/Dynamic
  Collection); reconcile **CSV limits (100 MB / 10,000)**; pin operator labels; document
  **SSRM grid** behavior (server-side filter/sort, infinite scroll, live count, select
  all-except); add **Reveal Confidence**, **Agentic Chat Engagement Score**,
  **Demo Booked\*** columns, **recommended_personal_email**, **Technologies** /
  **AI Conversations** filters; document **Recommend by AI** entry point; remove
  fabricated "refresh frequency", `isAll`/Tags, Jigsaw/Data.com; reconcile ActiveCampaign;
  fix sidebar_position collisions.
- **linkedin-dmp.md, google-customer-match.md** — verify push flow + menu labels; fix
  stale Google policy ($50k spend, Similar Audiences, Discovery→Demand Gen); add
  sidebar_position; reflect the new Customer-Match popup steps.

### D. Visitor Tracking (medium-high — Visitor Reveal rename + reveal columns)
- **overview.md, company-identification.md, contact-reveal.md, page-views.md** —
  rename **Company Reveal → Visitor Reveal** (Accounts/Contacts tabs); add **Reveal
  Confidence** (6 buckets) / **Reveal Source = Abmatic 1–4** (never PDL/Apollo/5x5) /
  **Reveal Last Seen** / **Visited Pages** / **Total Sessions**; document **SSRM** grid;
  add **AI Conversation Summary → Show visitors** backlink; reconcile account-detail tab
  list; **anonymize PII** + re-shoot data-bearing screenshots; reconcile JS API names.
- **form-tracking.md** (visitor-tracking) — **consolidate or sharply differentiate** from
  `conversions/form-tracking.md`; verify `window.abmatic.track('form_submitted', …)`.

### E. Conversions (medium)
- **overview.md, create-goals.md, event-tracking.md, analytics.md, form-tracking.md** —
  pin the goal-creation entry label (**+ Conversion**) vs the stale "New Goal" / "Track
  Event"; confirm tab "Conversions (last 60 days)" + control row "Non-personalized";
  resolve wildcard-vs-query-param URL matching; verify Main Event / Visibility labels;
  verify configurable control %, Segment Analysis, attribution-model UI actually exist;
  verify Goal Sources (Abmatic/Segment/GA priority); verify SOC2/consent-vendor claims;
  note linkedin/salesforce rows excluded from the analytics table.

### F. AI Agents (high — naming, Oracle cross-links, Agentic Chat)
- **overview.md** — add Oracle + Co-Pilot; verify plan tiers; confirm Clara/Alex; fix the
  "Agentic Chat tab drives Clara" conflation.
- **configuration.md** — repoint to be the **agent context** guide; clarify Settings →
  AI Agents two tabs vs campaign Instructions precedence (defer the literal settings-tab
  UI to new `settings/ai-agents.md`).
- **agentic-chat-widget.md** — add screenshots (zero today); verify the 6-voice list;
  reconcile CRM-sync "potential" vs live; tie to Agentic Chat campaign Instructions/handoff.
- **sdr-agent.md (Alex)** — verify which channels actually ship (voice-centric); verify
  "Get in touch with Alex" form + analytics tiles.
- **abm-agent.md (Clara)** — verify quick-start buttons; fix the Agentic-Chat-tab
  conflation; add Co-Pilot cross-link (Clara appears in both surfaces).

### G. Integrations (high — many new + renamed)
- **overview.md** — rebuild section list to the live 7 sections; document **IP Data =
  5-provider Abmatic waterfall** (single on/off; remove Clearbit/Kickfire/ZoomInfo);
  add OpenAI Ads, Google Calendar, Zoom; mark Meta/Marketo non-functional; normalize
  Sync Frequency vocabulary; document **Fill/Overwrite/Don't sync** field modes + **CRM
  push filters**; drag-orderable CRM priority.
- **crm/salesforce\*, hubspot\*, pipedrive.md, activecampaign.md, outreach.md,
  sync-behavior.md** — document **Fill/Overwrite/Don't sync** + sync filters; **HubSpot
  user import + owners** (reconnect caveat) + **HubSpot forms**; expose `demo_booked` in
  field mapping; normalize nav/button labels; reconcile ActiveCampaign support; verify
  the strong behavioral claims (member-status auto-mapping, timestamp conflict resolution,
  30-day backup); swap generic hub screenshot for product-specific assets.
- **slack.md** — verify the full `/settings/slack` workspace UI (channels/members/per-
  channel & per-user tabs, message-customization property list, "Suppress account
  notifications when contact revealed", auto-sync users); fix sidebar_position.
- **segment.md** — clarify/fix the **Markettailor** old-brand name + catalog URL.
- **google-analytics.md** — verify GA4 connect + custom-dimension flow; add sidebar_position.
- **gmail.md** — verify OAuth scopes + sequence send mechanism.
- **advertising/linkedin-ads.md, advertising/google-ads.md** — verify match rates/minimums;
  fix Google $50k Customer-Match staleness; swap in product-specific screenshots; add
  sidebar_position; reconcile audiences nav.

### H. Analytics & Reporting (medium-high — new columns + report types)
- **overview.md, reports.md** — confirm 7 report types incl. **LinkedIn Visitor Session**
  (reconcile the "Visitor Session" vs "LinkedIn Session" label); fix custom-field count
  (30, not 10); "Advance Filtering" spelling; 500-row preview / paginated view; genericize
  "351 reports".
- **dashboards.md** — confirm 20-widget max, Home-Dashboard non-deletable, Refresh clears
  cache, chartEnabled-only widgets; resolve **sharing** conflict; genericize hardcoded
  timestamp.
- **campaign-performance.md** — add **Demo Booked At / Demo Scheduled At / Demo Time** and
  the meaning split (booked-at vs scheduled-at); add **AI Conversation Summary** sub-tab;
  fix "four KPIs but five listed"; swap legacy `wp-*` screenshots for `campaign-*`;
  reconcile CVRL/CTRL.
- **audience-insights.md** — reconcile whether a real Audience Insights view exists
  (unused `audience-insights.png`); fix PDF/scheduled-Slack-report claims; add sidebar_position.

### I. Settings (high — new tabs + relabels)
- **account.md** — verify Branding (Fetch Logo / Primary Color for chat widget), admin-vs-
  non-admin gating, version "v6.1", Flush Cache / Reset Demo / Sign out.
- **users.md** — add **Sales role** (3 roles), Google Calendar/Zoom chips, **Default AE**
  star, **HubSpot user import** (parity w/ Salesforce), default filter hides inactive/
  un-invited; reconcile agent-name references.
- **website-context.md** — verify the two tabs (Pages Scraped / Settings), Build Website
  Context crawl + progress, per-page Summary/FAQs/Preview/Rescrape/Delete, Add URL,
  Include/Exclude prefixes; high screenshot surface.
- **custom-fields.md** — verify 30-field cap, `{{account.field_01}}` token, CSV `field_01`,
  CRM mapping direction.
- **notifications.md** — Knock-powered, In-App only (note Email/Slack columns disabled);
  reconcile category list (Export, Target Groups, Form Fills, Campaigns, IP Reveal, CRM,
  Accounts, Credits, Other).
- **billing.md** → see new **settings/usage.md** (rename); fix metadata; reconcile credit
  labels + plan names; confirm no in-app billing.
- **data-export.md** — fix sparse front matter; verify "Pushed→Salesforce" status; verify
  contact export.
- **script-installation.md** — verify embed shape `clients.abmatic.ai/<id>.js`, status
  labels, JS API (`abmatic('track'…)`), ~15KB claim.
- **contact-reveal.md** — verify accuracy slider (default 50%) + reveal Filters.

### J. API Reference (medium)
- **overview.md** — verify single-endpoint surface, rate limit, plan gating.
- **accounts.md** — **fix "Clara = AI chat widget"** (it's Agentic Chat); reconcile custom-
  field count (30) vs reports.md (10); verify field catalog incl. `agentic_chat_engagement_
  score`, `demo_booked*`, `third_party_intent_score`; fix `logo.clearbit.com` host.
- **api-keys.md** — reconcile with new `settings/api-keys.md`; verify single-key model +
  endpoint paths.

### K. Troubleshooting (medium)
- **troubleshooting-overview.md, script-issues.md, crm-sync.md, campaign-issues.md,
  common-errors.md** — **verify the JS API method names** (`abmatic.page()`/`track()`/
  `window.abmatic.identify()`); standardize on `verified/` screenshots; reconcile
  identification-rate (~30% vs 60–80%); reconcile plan names (Standard vs Starter);
  fix Slack nav (Settings>Slack vs Integrations>Slack); update Status-badge wording;
  fix retention claim (24/36 mo vs ~90-day live); add Oracle/Agentic-Chat/Calendar
  troubleshooting entries.

### L. FAQ (medium)
- **general.md, campaigns.md, integrations.md, billing.md** — purge stale marketing
  metrics; fix campaign-type names ("AI Sequences"→current Agentic naming); pin `{{mt_*}}`;
  reconcile CRM list + 30-field cap + sync-frequency tiers; reconcile plan names; fix
  retention; reconcile Slack nav; add Oracle/Calendar/Demo-Booked Q&As.

### M. Changelog
- **changelog.md** — add **Feb–Jun 2026** entries (Oracle, Agentic Chat handoff + AI
  Conversation Summary, OpenAI Ads, Google Calendar/Zoom, Demo Booked, Widget rename, API
  Keys, SSRM grids, Sales role, IP-provider rebrand); graduate shipped "Coming Soon" items;
  resolve cross-doc conflicts (dashboard sharing, export formats, Clara naming).

---

## 4. Pages that are FINE / low-touch as-is

No page is fully untouched (every page needs at least a naming/nav/screenshot pass), but
the following are **content-stable** and need only light verification, not rewrites:

- `api/overview.md` — cleanest, most recent doc in the set; verify rate limit only.
- `settings/contact-reveal.md` — accuracy slider + filters unchanged since pre-March.
- `conversions/event-tracking.md` — structure current; only label reconciliation.
- `campaigns/website-personalization.md` — best-screenshotted; verify, don't rewrite.
- `integrations/gmail.md` — verify scopes; structurally current.

(These are marked `action: ok` or low-priority `update` in PLAN.json.)

---

## 5. sidebars.ts / navigation changes needed

1. **Add an "Oracle (Autonomous Agent)" subcategory under AI Agents** containing
   `ai-agents/oracle-overview`, `ai-agents/oracle-goals`, `ai-agents/oracle-approvals`,
   and add `ai-agents/co-pilot` to the AI Agents category.
2. **Add `getting-started/navigation`** to Getting Started (after home-dashboard).
3. **Campaigns:** add `campaigns/openai-ads`; **rename `banner-popup` → `widget`**
   (add `campaigns/widget`, keep a redirect for `banner-popup` via `docusaurus.config`
   `redirects` since old app URLs/links use it). Renumber sidebar_positions to remove the
   7/8 collisions.
4. **Integrations:** add `integrations/calendar`, `integrations/zoom` (Communications) and
   `integrations/openai-ads` (Advertising). Fix the gmail/slack position-2 and
   outreach/sync-behavior position-5 collisions; add positions to ga/segment/linkedin-ads/
   google-ads.
5. **Settings:** add `settings/api-keys`, `settings/ai-agents`; **rename `billing` →
   `usage`** (`settings/usage`); add `settings/sales-role` IF created standalone (else
   fold into `users`). Add the missing `settings/contact-reveal`, `settings/data-export`
   to the sidebar (currently absent from sidebars.ts though the files exist).
6. **Audiences:** add sidebar_position to `linkedin-dmp` + `google-customer-match`; fix the
   `filters`/`contacts` position-3 collision.
7. **Analytics:** add sidebar_position to `audience-insights`.
8. Configure **redirects** (`@docusaurus/plugin-client-redirects`) for renamed slugs:
   `/campaigns/banner-popup` → `/campaigns/widget`, `/settings/billing` →
   `/settings/usage`, and retire `/settings/privacy` (already gone from the app).

---

## 6. Screenshot strategy

The team wants **excessive screenshots**. Every `update`/`create` entry in PLAN.json has a
generous `screenshotsToCapture` list keyed to real current appPaths
(`/ai-agents/abm`, `/oracle/goals`, `/oracle/inbox`, `/campaigns`, `/campaigns/widget/...`,
`/reveal/accounts`, `/reveal/contacts`, `/analytics/reports`, `/analytics/dashboards`,
`/integrations`, `/settings/*`, `/conversions`, etc.). Capture guidance:
- Re-shoot all data-bearing dashboards to **genericize/anonymize** (no PII, no hardcoded
  counts in captions).
- Replace the **generic `integrations-hub.png`** (reused 11×) with product-specific shots.
- Capture the **new surfaces** that have zero existing images: Oracle Goals/Inbox, Agentic
  Chat Instructions + handoff modes + AI Conversation Summary, OpenAI Ads AI Strategy,
  Calendar/Zoom settings, Website Context dialogs, the new left icon sidebar + dark mode.
- Prefer the `verified/` convention; standardize all docs onto it.
