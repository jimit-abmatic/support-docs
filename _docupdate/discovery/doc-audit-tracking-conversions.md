# Doc Audit — visitor-tracking & conversions sections

Audited 2026-06-12. Repo: `/Users/jimabmatic.ai/abmatic/support-docs`.
Scope: `docs/visitor-tracking/*.md` (5 files) + `docs/conversions/*.md` (5 files) = 10 files.

All referenced screenshots exist on disk under `static/img/screenshots/` (verified — no broken/missing image files). Staleness risk for images is therefore about whether the screenshots still match the *live* UI (numbers, labels, layout), not about missing files. Several screenshots are reused across many docs and carry very specific data captions (exact counts like "31,849 companies", "1,090 contacts", named real companies) that will drift and need re-verification against the live app.

Cross-cutting note: there are TWO `form-tracking` docs — `docs/visitor-tracking/form-tracking.md` and `docs/conversions/form-tracking.md`. Both are real sidebar entries (sidebars.ts lines 67 and 76). They overlap heavily (automatic form detection, JS API `window.abmatic.track('form_submitted', ...)`, click-vs-page-view setup). This duplication is a planner concern (consolidate or clearly differentiate). Cross-doc the recurring claims most worth live-verifying: nav path **Reveal > Accounts / Contacts** vs **Conversions > Manage**, the **+ Conversion** button, **Click Event / Page View** goal types, the **Accuracy slider** + **Reveal Filters**, confidence-band percentage ranges, and the JS API method names.

---

## 1. docs/visitor-tracking/overview.md

**docPath:** `docs/visitor-tracking/overview.md`

**Topic / current content:** Top-level overview of Visitor Tracking ("Visitor Reveal"). Explains the 98%-anonymous pitch, the 3-step de-anonymization model (IP company ID → contact matching → enrichment/scoring), confidence levels, and previews each sub-feature (Company Reveal dashboard, Contact Reveal dashboard, Account Detail view, Contacts-within-account, Engagement history, Form Tracking, Page View Analytics). Ends with concrete use cases, a getting-started table, ABM workflow table, and a Data Privacy/Compliance section.

**Screenshots referenced (grep `![`):**
- L72 `/img/screenshots/reveal-accounts-dashboard.png` — caption "31,849 identified companies" w/ exact confidence breakdown (6,038 VH / 6,131 H / 8,380 Low / 8,114 Moderate / 3,186 VL) + named companies OpenText, Quantum Metric, Southeastern Grocers.
- L92 `/img/screenshots/reveal-contacts-dashboard.png` — caption "1,090 identified contacts" + named contacts.
- L112 `/img/screenshots/reveal-account-opentext.png` — caption "OpenText … engagement score of 27", Waterloo, Ontario.
- L128 `/img/screenshots/reveal-account-contacts.png` — caption "Quantum Metric … 9 identified contacts" (1 Eng / 6 Mktg / 1 Prof Svcs).
- L136 `/img/screenshots/reveal-account-engagement.png` — caption Beijing/California sessions.

**Claimed product features / UI / labels to verify live:**
- Product name "Visitor Reveal" / "Company Reveal Dashboard" / "Contact Reveal Dashboard".
- IP database sized "40M+ companies" (L32) — specific number, verify.
- Confidence bands with exact % ranges: Very High 71–100, High 51–70, Moderate 31–50, Low 21–30, Very Low 6–20 (L56–60). Same ranges repeated in company-identification.md and contact-reveal/overview — must stay consistent app-wide.
- Account detail tabs listed (L116–122): Overview, Engagement, Contacts, Performance, Campaigns (note: this list OMITS Collections and Opportunities that company-identification.md DOES list — internal inconsistency).
- Temperature values Hot/Warm/Cold/None.
- Getting-started steps reference "Settings" verification showing "Active", and "Configure Contact Reveal settings in Settings" (L202).
- Form Tracking auto-detection "Works with HubSpot, Marketo, Pardot, and most form builders" (L146).

**Staleness signals:**
- No TODO/"coming soon"/placeholder text.
- Hard-coded dashboard counts in captions (31,849 / 1,090 / scores 27, 47) will drift — re-shoot or genericize.
- Internal inconsistency in account-detail tab lists vs company-identification.md (Collections/Opportunities present in one, absent here).
- "40M+ companies" is a marketing figure that may be outdated.
- Links out to `/getting-started/install-script`, `/visitor-tracking/*`, `/audiences/*` — verify those route targets still exist.

---

## 2. docs/visitor-tracking/company-identification.md

**docPath:** `docs/visitor-tracking/company-identification.md`

**Topic / current content:** Deep dive on IP-based company identification. Covers how it works, what's captured (firmographics), the Reveal > Accounts dashboard, account-list columns, account detail view + its tabs, engagement history, contacts-within-account, confidence levels, filtering/search/advanced filters, identification-rate expectations by traffic source, taking action (Add to List, Push to CRM, Export, Exclude), best-practice daily workflows, and troubleshooting.

**Screenshots referenced:**
- L66 `/img/screenshots/reveal-accounts-dashboard.png` — same 31,849 caption w/ named real companies (Mountainside, Southeastern Grocers, OpenText, Quantum Metric, Berkshire Hathaway Specialty).
- L99 `/img/screenshots/reveal-account-quantum.png` — "Quantum Metric … engagement score of 54", 501–1000 employees, Colorado Springs.
- L119 `/img/screenshots/reveal-account-engagement.png` — Mountainside, Beijing/California sessions.
- L127 `/img/screenshots/reveal-account-contacts.png` — Quantum Metric 9 contacts.

**Claimed product features / UI / labels to verify live:**
- Nav: **Reveal** in left sidebar → **Accounts** tab (L61–63).
- Top-row clickable confidence metric tiles (All / Very High / High / Moderate / Low / Very Low) act as filters.
- Account list columns: Domain, Name, Industry, LinkedIn URL, Inferred Revenue, Summary (AI-generated), Ticker (L85–93).
- Account detail tabs: **Overview, Collections, Campaigns, Opportunities, Engagement, Performance, Contacts** (L105–113) — 7 tabs (more than overview.md lists).
- Engagement tab session metrics: form submissions, page views, unique pages, scroll depth, time on page, engagement score, "Visited Pages" link.
- Confidence levels w/ % ranges (L137–143) — same bands as overview.
- Filter bar quick filters: Industry, Revenue, Location, Confidence, Last Seen.
- Search by name/domain/industry.
- **FILTERS** button for advanced: Pages Visited, Total Visits, Total Page Views, First Visit Date.
- Action buttons: **Add to List**, **Push to CRM** (Salesforce/HubSpot, with create/update/add-to-campaign options), **Export** (CSV), **Exclude**.
- "Report Incorrect" flag for wrong matches (L353, troubleshooting).
- Slack integration via **Settings > Slack** (L325).
- Sort control "Reveal Last Seen" (L308, L313).

**Staleness signals:**
- No TODO/placeholder text.
- Hard-coded counts (31,849, scores 54) in captions — drift risk.
- Tab-list inconsistency vs overview.md (this file has Collections + Opportunities; overview omits them) — one is stale.
- "Report Incorrect" button (L353) and exact "Add to List"/"Push to CRM"/"Exclude" labels are the kind of UI that may have been renamed — high-priority live check.
- Identification-rate percentages by source (L191–199) are estimates that may be marketing-derived rather than current.

---

## 3. docs/visitor-tracking/contact-reveal.md

**docPath:** `docs/visitor-tracking/contact-reveal.md`

**Topic / current content:** Identifying individual people (not just companies). Covers identification methods (form submissions, email clicks, IP+DB, behavioral), the Reveal > Contacts dashboard + summary tiles, contact fields, temperature indicators, taking action (Add to Contacts, Push to CRM, Export), Contact Reveal **Settings** (Accuracy slider, Reveal Filters), best practices, high-impact workflows, **Credit Usage**, and troubleshooting.

**Screenshots referenced:**
- L53 `/img/screenshots/reveal-contacts-dashboard.png` — "1,090 identified contacts"; names a real person "Stacy Carrier (Senior Manager, Web Experience, Quantum Metric)" w/ email scarrier@quantummetric.com (L77), plus a "Chief Executive Officer at Abmatic AI … score of 1652", Mayo Clinic, Marriott, etc.
- L134 `/img/screenshots/reveal-settings.png` — Accuracy slider + Filters (Selector/Operator/Value, "+ RULE").

**Claimed product features / UI / labels to verify live:**
- Nav: **Reveal > Contacts** (L51).
- Dashboard summary tiles by confidence: All / Very High / Very Low / Low / Moderate / High (note odd ordering in the table L61–68).
- Contact columns: Work Email, Full Name, Temperature, Website Engagement Score, Job Title Role (dept), Job Title, Job Company Name (L74–82).
- Temperature: Hot / Warm / Cold / None.
- Actions: **Add to Contacts**, **Push to CRM** (field mapping), **Export** (CSV).
- **Settings > Contact Reveal** page (L132) with **Accuracy slider** ("High Volume / Low Accuracy" ↔ "Low Volume / High Accuracy"), default **50%** (L148).
- Reveal **Filters**: Selector / Operator / Value rules, **+ RULE**, **SAVE** (L163).
- **Credit Usage**: "New contact revealed = 1 credit", returning contact = no cost; monitor at **Settings > Usage** (L242–251).

**Staleness signals:**
- No TODO/placeholder text.
- Real personally-identifiable contact (Stacy Carrier + work email) baked into prose AND screenshot caption — a privacy/freshness liability; likely needs anonymizing and the screenshot re-shot.
- Hard-coded counts (1,090; tile counts 218/148/169/361/107; scores 52/1652) — drift risk.
- Credit model (1 credit/contact) is a billing claim that must match current plans/pricing.
- Confidence-tile ordering in the summary table looks scrambled (VH, then VL, then Low, Moderate, High) — possible doc error vs live order.
- Settings path label "Settings > Contact Reveal" — verify; on-disk screenshot `settings-contact-reveal.png` exists and may be a better/cleaner asset than `reveal-settings.png`.

---

## 4. docs/visitor-tracking/form-tracking.md

**docPath:** `docs/visitor-tracking/form-tracking.md`

**Topic / current content:** Form tracking framed as lead capture / contact creation (more contact/enrichment-oriented than the conversions version). Covers automatic detection, captured data, where form data appears, automatic field mapping table, setting up form conversions (Click Event / Page View), custom JS API tracking, best practices, ABM workflows, troubleshooting, and CRM sync.

**Screenshots referenced:**
- L53 `/img/screenshots/conversions-overview.png` — "form submission data".
- L89 `/img/screenshots/conversions-manage.png` — Manage tab conversion events.

**Claimed product features / UI / labels to verify live:**
- Automatic form detection of Contact/Demo/Newsletter/Gated/Pricing forms (L41–47).
- Field-mapping table: maps `email/e-mail/emailAddress`, `name/full_name/fullName`, `first_name/...`, `company/organization/...`, `phone/...`, `job_title/title/jobTitle` → contact properties (L69–77); claims case-insensitive + snake/camel/kebab handling.
- Where form data appears: **Conversions**, **Contacts**, **Company Reveal**, **Campaign Insights** (L59–64) — note label "Company Reveal" (vs "Reveal" elsewhere).
- Setup via **Conversions > Manage > + Conversion**, Click Event vs Page View.
- JS API: `window.abmatic.track('form_submitted', {...})` (L130) — verify method name/signature still current.
- CRM sync table: HubSpot / Salesforce / **Pipedrive** (L247–251) with deep links to `/integrations/crm/hubspot|salesforce|pipedrive`.

**Staleness signals:**
- No TODO/placeholder.
- Heavy overlap/duplication with `docs/conversions/form-tracking.md` (different framing, same JS API + same setup steps + same screenshots) — consolidation candidate.
- JS API `window.abmatic.track(...)` appears in 3 docs; if the real client API differs (e.g., namespaced differently) all three are wrong together — single highest-value code claim to verify.
- "Company Reveal" label vs "Reveal"/"Visitor Reveal" naming inconsistency across docs.
- Pipedrive listed as supported CRM (L251) — verify it's actually live; deep link `/integrations/crm/pipedrive` must exist.

---

## 5. docs/visitor-tracking/page-views.md

**docPath:** `docs/visitor-tracking/page-views.md`

**Topic / current content:** Automatic page-view tracking. What's captured (URL, title, timestamp, session, referrer, time on page, scroll depth), supported page types (incl. SPA), where to view (Company Reveal, Engagement tab, Contact Reveal, Analytics > Reports), using page views for targeting/retargeting/scoring, custom JS API (`window.abmatic.page(...)`), best practices + weekly workflow, metrics glossary, troubleshooting.

**Screenshots referenced:**
- L57 `/img/screenshots/reveal-accounts-dashboard.png`
- L64 `/img/screenshots/reveal-account-engagement.png` — Mountainside Beijing/California sessions with exact metric labels.
- L81 `/img/screenshots/reveal-contacts-dashboard.png`

**Claimed product features / UI / labels to verify live:**
- Nav uses **"Visitor Reveal" → Accounts / Contacts** (L50, L79) — note "Visitor Reveal" here vs "Reveal" in company-identification.md (naming drift).
- Engagement-tab metric labels exactly: Total Form Submissions, Total Page Views, Total Page Views Unique, Total Scroll Depth Percentage, Total Time On Page, Engagement Score (L65) — verify exact label strings.
- **Analytics > Reports** for aggregate page metrics (L91): most-viewed pages, performance over time, conversion rates by page, traffic sources.
- Targeting filters in campaign builder: **Pages Viewed Contains** `[path]` (L107, L126), **Did Not Submit Form**, **Page Views > N** (L132, L137).
- JS API: `window.abmatic.page('/path', {props})` (L163–185).
- Troubleshooting nav: **Settings → Script Installation** (L246).

**Staleness signals:**
- No TODO/placeholder.
- Naming inconsistency "Visitor Reveal" vs "Reveal" vs "Company Reveal" across the section.
- Exact engagement-metric label strings (with "Total …" prefixes) are brittle — verify against live UI.
- Campaign-builder filter names ("Pages Viewed Contains", "Did Not Submit Form") are specific UI claims to verify.
- Links to `/analytics/reports`, `/campaigns/overview`, `/conversions/overview` — verify targets.

---

## 6. docs/conversions/overview.md

**docPath:** `docs/conversions/overview.md`

**Topic / current content:** Top-level Conversions overview. Why conversion tracking matters, what can be tracked (Click Events, Page Views, Form Submissions, Custom Events), accessing the dashboard, the two-tab interface (Conversions last-60-days / Manage), creating goals, metrics/lift, best practices, integration with Campaign Insights, troubleshooting, next steps.

**Screenshots referenced:**
- L43 `/img/screenshots/conversions-overview.png` — caption "64 campaigns with conversion data for Book a Demo, Banner, and other events".
- L62 `/img/screenshots/conversions-overview.png` (reused).
- L78 `/img/screenshots/conversions-manage.png` — caption "5 configured conversion events".

**Claimed product features / UI / labels to verify live:**
- Left-sidebar **Conversions** entry (L41).
- Two tabs: **"Conversions (last 60 days)"** and **"Manage"** (L53–56) — exact "last 60 days" window is a specific claim (also stated as "Conversions (Last 60 Days)" in event-tracking.md — capitalization differs).
- Conversions tab columns: Campaigns (expandable, expand arrow `>`), Unique Visitors (personalized vs control), [Event Name] (CVR + lift).
- Manage tab columns: **Event, Event Type, Attached To, Main Event, Visibility** (active/inactive toggle) (L82–88).
- **+ Conversion** button top-right (L94).
- Click Event = visual editor; Page View = "URL pattern to track (supports wildcards)" (L116) — wildcard claim; create-goals.md instead says query-param matching, no wildcard mention — possible inconsistency.
- Lift formula + interpretation bands.
- Campaign **Insights** tab integration (L188–196).

**Staleness signals:**
- No TODO/placeholder.
- Hard-coded "64 campaigns" / "5 configured conversion events" captions — drift risk.
- Page View matching described as "supports wildcards" here but as exact/query-param matching in create-goals.md and event-tracking.md — internal contradiction to resolve against live behavior.
- "Main Event" column label here vs "Set as Main Goal" / "Main Goal" terminology in create-goals.md — verify the real label.
- Tab label exact casing ("last 60 days" vs "Last 60 Days") inconsistent across docs.

---

## 7. docs/conversions/create-goals.md

**docPath:** `docs/conversions/create-goals.md`

**Topic / current content:** Step-by-step goal creation. Two goal types (Click Events, Page Views), naming guidance, the visual element selector wizard, page-view URL config + URL matching, setting the Main Conversion Goal, managing goals (Active toggle, edit, delete with historical-data preservation), goal analytics/lift/significance, **Goal Sources** (Abmatic / Segment / Google Analytics priority), best practices, troubleshooting.

**Screenshots referenced:**
- L12 `/img/screenshots/conversions-manage.png` — "Manage your conversion goals".

**Claimed product features / UI / labels to verify live:**
- Nav **Conversions > Manage** (L37, L77, L114).
- Buttons/labels: **New Goal** OR **Add a new conversion event** (L38) — two alternative labels claimed; verify which is real.
- Goal type selectors: **Click Event**, **Page View**.
- Visual editor: enter Website URL, hover-highlight, click element; targeting **Only this element** / **All similar elements**; **Save** (L59–67).
- Page View: Goal Name + full Page URL with `https://`; URL matching incl. query params (NO wildcard mention — contrast overview.md).
- **Set as Main Goal** button (L116).
- **Active** toggle (Active/Inactive).
- Delete preserves historical data (L145).
- **Goal Sources** with priority order Abmatic > Segment > Google Analytics (GA4) (L182–190) — integration claim to verify.
- Lift formula, significance indicators (Significant / Not Significant / Time Estimate).

**Staleness signals:**
- No TODO/placeholder.
- Dual button labels "New Goal" / "Add a new conversion event" — at least one likely stale; reconcile with "+ Conversion" used everywhere else (overview, event-tracking, form-tracking all say **+ Conversion**). This file is the odd one out and is the strongest candidate for stale UI labels.
- Goal Sources (Segment + GA4 import with priority) is a notable feature claim not echoed elsewhere — verify it still exists.
- URL-matching contradiction with overview.md (wildcards vs no wildcards).

---

## 8. docs/conversions/event-tracking.md

**docPath:** `docs/conversions/event-tracking.md`

**Topic / current content:** Broad event tracking — automatic (page views, session, scroll depth, time on page, form detection) and custom (click, page view, form). ASCII flow diagrams, creating click/page-view events, event data structures (field-level), behavioral metrics, SPA support, campaign attribution (personalized/control, multi-touch), Segment + GA4 integration, viewing data, real-time processing, best practices, troubleshooting, technical details (`navigator.sendBeacon()`).

**Screenshots referenced:**
- L101 `/img/screenshots/conversions-manage.png` — "Click Event and Page View event types".

**Claimed product features / UI / labels to verify live:**
- Setup nav: **Conversions → Manage → + Conversion** (L77–79).
- Option **"Track Event"** to open visual selector (L82) — note this differs from "Click Event" used elsewhere; and step 3 names the type "Click Event". Possible stale/renamed option.
- Event data field names (technical): `pageUrl, pageViewId, visitorId, visitId, timeOnPage, scrollDepthPercentage, formSubmission` (page views); `eventName, eventId, element.selector, element.text, timestamp` (clicks); attribution `segmentId, variationId, eventId` (L141–202). These are internal field names that may not match current payloads — verify only if needed.
- Dashboard tab name **"Conversions (Last 60 Days)"** (L238).
- "Check **Visibility** toggle in Manage" (L307, troubleshooting) — matches overview's "Visibility" column.
- Segment integration in **Integrations**; GA4 integration in **Integrations** (L218–232).
- SPA framework support list (React/Vue/Angular/Next.js).
- `navigator.sendBeacon()` transmission claim (L340).

**Staleness signals:**
- No TODO/placeholder.
- Label "Track Event" (L82) inconsistent with "Click Event" goal type used in sibling docs — likely stale.
- Detailed internal field-name tables are implementation-coupled and may have drifted; flagged as lower priority unless verifying data layer.
- Segment/GA4 sync claims (also in create-goals) — verify integrations still exist and are mapped automatically.

---

## 9. docs/conversions/form-tracking.md

**docPath:** `docs/conversions/form-tracking.md`

**Topic / current content:** Form tracking framed as conversion measurement (ROI/lift), counterpart to the visitor-tracking form-tracking doc. Auto form detection, captured fields (with a Security First admonition about excluded fields), two setup methods (Click Event / Page View) with method-selection guidance by scenario, metrics/lift, **Supported Form Builders** table, custom JS API, best practices, form-tracking-by-campaign-type, viewing data, attribution, troubleshooting, privacy/compliance (consent integrations), related features.

**Screenshots referenced:**
- L30 `/img/screenshots/conversions-overview.png`
- L71 `/img/screenshots/conversions-manage.png`

**Claimed product features / UI / labels to verify live:**
- Setup **Conversions > Manage > + Conversion**, Click Event vs Page View (step tables L78–104).
- **Supported Form Builders** table: Native HTML, HubSpot, Marketo, Pardot, Typeform, Gravity Forms, Contact Form 7, Webflow, Unbounce, Custom AJAX (L163–174) — broad compatibility claim list.
- JS API `window.abmatic.track('form_submitted', {...})` incl. React example (L182–238).
- Security admonition: never captures password/credit-card/SSN (L63, L338).
- **Consent Integration**: CookieBot, CookieYes, Iubenda, HubSpot consent (L346–349) — specific vendor claims.
- Compliance claims: GDPR-compliant, **SOC 2 Type II certified infrastructure** (L356).
- Form tracking by campaign type table: Website Personalization, LinkedIn, Google Ads, **AI Sequences**, CRM Campaigns (L266–272).
- Campaign **Insights** tab shows Conversions column.

**Staleness signals:**
- No TODO/placeholder.
- Duplicate of visitor-tracking/form-tracking.md (different angle, overlapping setup + JS API) — consolidation/differentiation needed.
- Compliance/security claims (SOC 2 Type II, GDPR, named consent vendors) are high-stakes assertions that should be verified with the current product/legal posture before publishing.
- Supported-form-builder and consent-vendor lists are specific and may be aspirational/outdated.
- Link `[AI Sequences](/campaigns/email-campaigns)` — slug mismatch risk (label "AI Sequences" → path "email-campaigns"); verify route. Same link pattern appears in several files.
- JS API method shared with other docs — single point of failure if wrong.

---

## 10. docs/conversions/analytics.md

**docPath:** `docs/conversions/analytics.md`

**Topic / current content:** Conversion analytics / measuring lift. The Conversions dashboard, reading metrics (visitor split, lift chips, expandable details), key metrics glossary, lift formula + interpretation bands, statistical significance + time-to-significance, personalized-vs-control + configuring control %, multi-goal analytics (main vs supporting), attribution models (first/last/multi-touch), segment analysis, best practices, time-period analysis (60-day default), troubleshooting.

**Screenshots referenced:**
- L12 `/img/screenshots/conversions-overview.png` — "conversion lift across all campaigns".

**Claimed product features / UI / labels to verify live:**
- Conversions tab columns: Campaign (expand arrow), Unique Visitors (personalized vs control), Goal Columns (lift %).
- "Lift Chips" color coding: purple = positive, gray = negative/neutral (L42) — specific UI styling claim.
- Expandable per-campaign details: Conversions / Conversion Rate / Conversion Lift for personalized vs control.
- **Configuring Control Percentage**: 10% default / 20% / 50% (L153–158) — claims control split is configurable; verify this control exists and where.
- Statistical significance: 95%/90% confidence thresholds, time-to-significance estimate.
- **Main Goal vs Supporting Goals** concept (L162–185).
- Attribution models: First / Last / Multi-Touch (L187–204).
- **Segment Analysis** by Industry / Company Size / Campaign / Time Period (L206–217) — claims a breakdown UI exists; verify.
- Dashboard "last 60 days by default" (L261).
- Troubleshooting references "Create goals in Manage tab", "verify script installation".

**Staleness signals:**
- No TODO/placeholder.
- Several features described conceptually without a screenshot (control-% configuration UI, Segment Analysis breakdown, attribution-model selection) — unclear whether these are actual app screens or aspirational; HIGH priority to confirm they exist in the live product.
- "Lift Chips … purple = positive, gray = negative" is a concrete visual claim that may not match current theming.
- Links to `/campaigns/ab-testing` and `/analytics/campaign-performance` (L305–306) — verify these route targets exist (ab-testing not referenced in the sidebars excerpt seen).

---

## Summary roll-up for planner

- **Files audited:** 10 (5 visitor-tracking, 5 conversions).
- **Total screenshot references:** 24 markdown image tags across the 10 files, resolving to **9 unique image files**, all present on disk (`reveal-accounts-dashboard`, `reveal-account-quantum`, `reveal-account-engagement`, `reveal-account-contacts`, `reveal-account-opentext`, `reveal-contacts-dashboard`, `reveal-settings`, `conversions-overview`, `conversions-manage`). No broken file paths.
- **No literal TODO / "coming soon" / placeholder markers** found in any file.

**Top staleness concerns (priority-ordered):**
1. **Hard-coded data-bearing captions** (31,849 companies, 1,090 contacts, "64 campaigns", "5 configured events", engagement scores 27/47/52/54/1652). These drift and several appear across multiple docs — re-shoot or genericize.
2. **UI label inconsistencies for the goal-creation entry point**: `+ Conversion` (overview, event-tracking, form-tracking ×2) vs **New Goal / Add a new conversion event** (create-goals) vs **Track Event** (event-tracking). At least some are stale; needs live reconciliation.
3. **Product-name drift**: "Reveal" vs "Visitor Reveal" vs "Company Reveal" / "Contact Reveal" used interchangeably across the 5 visitor-tracking docs.
4. **Account-detail tab list inconsistency**: overview.md (5 tabs) vs company-identification.md (7 tabs incl. Collections + Opportunities).
5. **Page-View URL-matching contradiction**: overview.md says "supports wildcards"; create-goals.md / event-tracking.md describe exact/query-param matching.
6. **Duplicate form-tracking docs** (visitor-tracking vs conversions) overlapping on JS API + setup — consolidate or sharply differentiate.
7. **Unverified/possibly-aspirational feature claims** with no screenshot: configurable control-% (10/20/50), Segment Analysis breakdown, attribution-model selection (analytics.md); Goal Sources Segment/GA4 import (create-goals); consent-vendor + SOC 2 Type II claims (conversions/form-tracking).
8. **Shared JS API surface** (`window.abmatic.track('form_submitted', …)` and `window.abmatic.page(…)`) appears in 3 docs — verify against the real client script; if wrong, all are wrong together.
9. **PII baked into prose + screenshot** (Stacy Carrier + work email in contact-reveal.md) — anonymize and re-shoot.
10. **Outbound link slug risks**: "AI Sequences" → `/campaigns/email-campaigns`, plus `/campaigns/ab-testing`, `/analytics/campaign-performance`, `/audiences/crm-sync` — verify route targets resolve.
