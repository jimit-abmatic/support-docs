# Doc Audit — Campaigns Section

Audit of all 14 markdown files under `docs/campaigns/*.md`. For each file: topic + summary, screenshots referenced (with on-disk existence), product claims (UI/labels/steps to verify against the live app), and staleness signals.

**Global note on screenshots:** All 42 distinct referenced images resolve to real files under `static/img/screenshots/...` (verified). So there are NO broken image *paths*. The risk is **alt-text vs filename mismatch** (the image content may not match what the prose describes) — most acute in `agentic-chat.md` (see below). Cross-doc reuse of the same screenshot for different described UIs is also common.

---

## 1. docs/campaigns/ab-testing.md

**Topic / summary:** A/B testing in Abmatic. Documents two approaches: (a) built-in automatic control groups on every personalization campaign, and (b) URL-based A/B tests comparing two distinct page URLs. Covers control-group weighting, lift math, statistical significance, segment analysis, and the testing→personalization workflow.

**Screenshots referenced:**
- L34 `/img/screenshots/ab-control-insights.png` — "Campaign insights showing personalized vs control performance" (exists)
- L61 `/img/screenshots/campaigns-list.png` — "Campaign status column showing different A/B test configurations" (exists; shared with overview.md and website-personalization.md)

**Product claims to verify against live app:**
- Two A/B testing approaches: Built-in Control Groups + URL-based A/B Tests.
- Control-group weight is configured via the **Status** dropdown on the Campaigns list; offered values stated as **100%, 90%, 50%, 0%** (L58). NOTE: the prose table just above (L51-53) lists control weights of 10% / 20% / 50% — these two value sets are **inconsistent** (10/20/50 vs 100/90/50/0). One of them is wrong.
- "Changes take effect immediately for new visitors."
- URL A/B test created via **Campaigns → Create Campaign → select "A/B Test" as the campaign type** (L86-87).
- URL A/B test fields: **URL A (Control)**, **URL B (Variant)**, **Probability B** (L90-94). Verify these exact field labels exist.
- Multiple page pairs per campaign, each with independent analytics.
- Metrics: Visitors, CTA Clicks, CTR, Conversions, CVR, Lift.
- **Insights** tab shows personalized vs control side-by-side.
- Segment filters claimed: Industry, Company size, Location, Traffic source (L238-241).

**Staleness signals:**
- **Internal contradiction** on control/personalization weight options (10/20/50% table vs 100/90/50/0% dropdown instructions). Needs reconciliation with live UI.
- All metric values in tables (847 visitors, +32.7% etc.) and sample-size guidance are illustrative, not live — fine, but flag that "Insights" layout claims should be screenshot-verified.
- No TODO/"coming soon"/placeholder text.

---

## 2. docs/campaigns/advertising-campaigns.md

**Topic / summary:** Umbrella doc for three ad campaign types that share one workflow/UI: **Display Advertising**, **Meta (Facebook/Instagram)**, and **Retargeting**. Covers create flow, the Audience tab (Audience selection, Budget, Schedule, Bidding), Creatives tab, and Insights/Engagement/Performance tabs, plus per-type deep dives and use cases.

**Screenshots referenced:**
- L54 `/img/screenshots/display-ads-type-select.png` — "Create Campaign modal showing Advertising options" (exists)
- L63 `/img/screenshots/display-ads-create-step2.png` — "Account or Contact selection step" (exists)
- L73 `/img/screenshots/display-ads-detail.png` — "Select a collection step" (exists)

**Product claims to verify against live app:**
- Create flow: **Campaigns → + Campaign → under "Advertising"** select Display Advertising / Meta / Retargeting (L47-52).
- Step 2 targeting mode: **Account** vs **Contact**.
- Step 3: **Select Accounts / Select Contacts** dropdown → **Create Campaign**.
- Audience tab "organized into four numbered sections": 1 Audience Selection, 2 Budget, 3 Schedule, 4 Bidding (L79-134).
- Sidebar metrics: Accounts in campaign, estimated potential audience, daily audience, daily impressions, daily spend.
- Budget options: daily / lifetime / both; "may vary by up to 50% on high-opportunity days."
- Schedule: start–end date vs run continuously.
- Optimization Strategy: Conversions / Clicks / Impressions.
- Bidding Strategy: **AI-Predicted (Clara)**, Max Delivery, Cost Cap, Manual (L122-128). **VERIFY the agent name "Clara"** still matches the product (memory references AI agents "Clara and Alex").
- **Save changes** button at top of Audience tab.
- Creatives tab: **+ Creative** button; grid columns Creative / Status (Active/Inactive toggle) / Updated At / Created At; multi-select delete via three-dot menu.
- Insights metrics: Impressions, CTA Clicks (CTR), Conversions (CVR), **CVRL**, **CTRL**. Chart view tabs: Impressions / CTA / CTR / Conversion / CVR with Total/Personalized/Control lines; date range + **Compare Date Ranges**.
- Performance sub-tabs: Visitors / CTA Clicks / Accounts / Conversions.

**Staleness signals:**
- **"Meta" naming**: This is the only doc that documents a "Meta (Facebook/Instagram)" ad type as a first-class create-modal option. overview.md also lists "Meta." Confirm "Meta" still exists as a distinct selectable campaign type (vs being folded into Display/Retargeting). High-priority live check.
- Sidebar font "Clara" dependency — see linkedin/advertising note; consistency check across docs.
- No placeholder/TODO text.

---

## 3. docs/campaigns/agentic-chat.md

**Topic / summary:** AI chat widget campaign. Covers create flow (under "Advanced"), config tabs (Insights/Audience/Instructions/Pages/Engagement/Performance), AI Instructions, display modes (Minimized/Welcome/Sidebar/Expanded/Voice), text + voice chat, email capture, lead-qualification intent scoring, website context scraping, URL patterns, analytics, Slack notifications, troubleshooting.

**Screenshots referenced (NOTE — systematic alt-text↔filename mismatch):**
- L34 `/img/screenshots/campaign-create-wizard.png` — create wizard (exists; shared)
- L53 `agentic-chat/ac-create-modal.png` — alt says "Widget Configuration Panel … Preview Mode" (exists)
- L70 `agentic-chat/ac-preview-sidebar.png` — alt says "**Audience tab** … Sessions and Country filters" (filename says *preview-sidebar*) ⚠️ mismatch
- L137 `agentic-chat/ac-audience-tab.png` — alt says "**Page editor … widget settings panel … display mode**" (filename says *audience-tab*) ⚠️ mismatch
- L149 `agentic-chat/ac-insights-tab.png` — alt says "**widget open … AI greeting**" (filename says *insights-tab*) ⚠️ mismatch
- L214 `agentic-chat/ac-preview-minimized.png` — alt says "**Pages tab** … Include/Exclude Patterns" (filename says *preview-minimized*) ⚠️ mismatch
- L267 `agentic-chat/ac-preview-expanded.png` — alt says "**Insights tab** … CTA Clicks, Conversions, CVRL, CTRL" (filename says *preview-expanded*) ⚠️ mismatch
- L281 `agentic-chat/ac-preview-welcome.png` — alt says "**Engagement tab** … page visits" (filename says *preview-welcome*) ⚠️ mismatch
- L294 `agentic-chat/ac-performance-tab.png` — alt says "Performance tab … Visitors sub-tab" (exists; filename matches)

All files exist on disk, but **8 of 9 alt-texts describe a different screen than the filename implies** — the image-to-caption pairing looks scrambled and almost certainly renders the wrong screenshot next to the prose. This is the single biggest screenshot-integrity problem in the section.

**Product claims to verify against live app:**
- Create: **Campaigns → + CAMPAIGN → Agentic Chat under the "Advanced" category** (L30-32).
- Config tabs: **Insights, Audience, Instructions, Pages, Engagement, Performance** (L42-49). NOTE: tab list says "Instructions" tab; verify it exists (vs being in Settings).
- Widget config panel: Display mode, Welcome Message, Page Context, Quick Prompts; Preview Mode buttons **Minimized / Welcome / Sidebar / Expanded** (L51-53, L135).
- Display modes incl. a **Voice** mode (L145); "supports six voice options" (L170).
- WebRTC voice; microphone icon; transcripts saved.
- Email capture filters personal domains; triggers Slack notification.
- Intent levels: High / Medium / Low.
- Website context managed at **Settings > AI Agents > Agentic Chat tab** (L201, L320) — verify nav path.
- Pages tab patterns: `*`, `/pricing*`, `/blog/*`, `!/admin/*` (L216-221).
- Insights metrics: CTA Clicks, Conversions, **CVRL** ("Conversion rate - personalized group"), **CTRL** ("Conversion rate - control group"), Total Impressions. NOTE: CVRL/CTRL definitions here (L273-274) conflict with advertising-campaigns.md (which calls CVRL "conversion rate lift" / CTRL "click-through rate lift") and with website-personalization.md (which also says "personalized group / control group"). **The meaning of CVRL/CTRL is documented inconsistently across the section** — needs a single source of truth.
- Performance sub-tabs: VISITORS / CTA CLICKS / ACCOUNTS / CONVERSIONS.
- Slack: **Settings > Integrations > Slack**.

**Staleness signals:**
- Scrambled alt-text↔filename pairing on 8 images (highest-priority fix).
- "3x more qualified conversations" marketing claim (L22) — unverifiable stat.
- CVRL/CTRL definition conflict across docs.
- No TODO/"coming soon" text.

---

## 4. docs/campaigns/agentic-flow.md

**Topic / summary:** AI-personalized multi-channel outreach sequences (emails/calls/LinkedIn) where AI writes unique content per contact. Positioned vs. "AI Sequence" (email-campaigns.md). Covers create flow, Audience rules, Sequence builder, step types, AI context config in Settings, campaign tabs, strategies, three detailed use cases.

**Screenshots referenced:**
- L42 `/img/screenshots/campaigns-main-list.png` — campaigns list (exists; shared with banner-popup)
- L52 `/img/screenshots/campaign-create-wizard.png` — create wizard (exists; shared)
- L59 `/img/screenshots/agentic-flow-select-contact.png` — select contact collection (exists)
- L74 `/img/screenshots/agentic-flow-audience-tab.png` — Audience tab (exists)
- L90 `/img/screenshots/agentic-flow-sequence-tab.png` — Sequence tab with "+ Step and Activate buttons" (exists)
- L96 `/img/screenshots/agentic-flow-add-step.png` — Create Sequence Step dialog (exists)

**Product claims to verify against live app:**
- Create: **Campaigns → + Campaign → Advanced → Agentic Flow** → choose **Contact Collection** → **Create** (L48-55).
- Audience tab "Campaign rules" filters: Account List, Industry, Company Size, Location, Behavior (L66-72).
- Sequence tab: **+ Step**, step types **Manual Email / Automatic Email / Call / LinkedIn** (L84-88), **trigger delay** (days/hours/minutes), **Activate** button.
- AI context configured at **Settings → AI Agents → "Agentic Sequence" tab** (L120-122, L275, L350). NOTE the tab is called **"Agentic Sequence"** here (not "Agentic Flow") — confirm whether the Settings tab name matches the campaign name; potential terminology drift.
- Sequence grid columns: Step / Step Type / Step Template / Created At / Updated At.
- Key actions: + Step, Activate, **Clear Personalizations** (via menu icon).

**Staleness signals:**
- **Terminology**: campaign type = "Agentic Flow" but its AI settings tab = "Agentic Sequence," while a separate campaign type "AI Sequence" (email-campaigns.md) ALSO points to a Settings tab. Overlap/confusion risk between "Agentic Flow," "Agentic Sequence," and "AI Sequence" — verify exact product names and that two distinct campaign types still exist.
- `sidebar_position: 7` collides with linkedin-ads.md (also 7), intent.md (also 7), and conflicts with google-ads.md (also 8) / banner-popup.md (8). **Sidebar ordering is ambiguous across the section** (see global sidebar-position table at end).
- Three use cases contain illustrative metrics (reply rates, meetings) — fine as examples.
- No TODO/placeholder text.

---

## 5. docs/campaigns/banner-popup.md

**Topic / summary:** Overlay campaigns (banners/popups/slide-ins) layered on existing pages, controlled by URL patterns. Covers create flow (under "Personalization"), Audience tab, Pages/Patterns tab (include/exclude, regex), monitoring, campaign tabs, and three detailed use cases (exit-intent, industry welcome, event promotion).

**Screenshots referenced:**
- L37 `/img/screenshots/campaigns-main-list.png` — campaigns list (exists; shared)
- L47 `/img/screenshots/campaign-create-wizard.png` — create wizard (exists; shared)
- L56 `/img/screenshots/banner-popup-audience-tab.png` — Audience tab (exists)
- L75 `/img/screenshots/banner-popup-pages-tab.png` — Pages tab with "Include Patterns, Exclude Patterns, and Sample URL columns" (exists)

**Product claims to verify against live app:**
- Create: **Campaigns → + Campaign → under "Personalization" → Banner & Popup** → select **target collection (account or contact)** → **Create** (L43-50).
- Pages tab: include patterns + exclude patterns, "Patterns support regex" (L80); columns "Include Patterns, Exclude Patterns, Sample URL" (per L75 alt).
- Overlay placements claimed: top/bottom banner, center popup, slide-in (L32).
- Tabs: Insights, Audience, Pages (Patterns), Engagement, Performance.
- **"Preference" system** to prioritize overlapping campaigns (L192, L253, L268) — verify this is the same "Preference" column from overview.md.
- Variables used in use-case copy: `{{mt_companyName}}`, `{{mt_industry}}`, `{{daysUntilEvent}}` (L329). **`{{daysUntilEvent}}` is NOT listed in dynamic-content.md's variable catalog** — verify it actually exists or is invented for the example.

**Staleness signals:**
- Claims of specific overlay UI (banner placement options, exit-intent trigger, scroll-depth/time-on-page triggers, "Display: Slide-in from bottom-right after 15 seconds" L307) are presented as configurable but no screenshot shows the overlay editor — **unverified UI claims**; the creative/overlay editor itself is undocumented and unscreenshotted.
- `{{daysUntilEvent}}` variable not in the canonical variable list — possible fabrication.
- Heavy illustrative metrics in use cases (conversion lifts, registration counts) — illustrative.
- `sidebar_position: 8` collides with google-ads.md (8).
- No TODO/placeholder text.

---

## 6. docs/campaigns/crm-campaigns.md

**Topic / summary:** Syncing Abmatic campaigns to Salesforce and HubSpot — campaign linking, automatic member sync, engagement sync, attribution/ROI. Covers create-synced-campaign flow, Salesforce field/member-status/metrics mapping, HubSpot sync, member management, multi-touch attribution, use cases, troubleshooting.

**Screenshots referenced:**
- L31 `/img/screenshots/crm-campaign-overview.png` — "Salesforce Campaigns filter" (exists)
- L45 `/img/screenshots/integrations-hub.png` — "CRM integrations available" (exists; shared with google-ads.md and linkedin-ads.md)

**Product claims to verify against live app:**
- Setup path: **open campaign → Settings > CRM Sync** (L51). Then choose Salesforce/HubSpot → **Create New** or **Link Existing** → configure sync settings → **Enable Sync** (L53-68). **VERIFY this "Settings > CRM Sync" panel exists per-campaign.**
- Salesforce synced fields table (Campaign Name, Start/End Date, Status, Description, Type).
- Member status mapping (Added→Sent, Page personalized→Responded, Form submitted→Converted, Meeting booked→Qualified) — described as **suggested/configurable**.
- Salesforce metrics that sync (Number Sent, Leads, Contacts, Responses, Opportunities, Amount Won).
- HubSpot synced properties (Name, Start/End Date, Budget, Goals) + timeline activities.
- Member management: automatic membership triggers; **Members** tab with **Add Members** (L165-169); member removal conditions.
- Attribution models: First Touch / Last Touch / Linear / Custom.
- Troubleshooting references **Settings > Integrations**, deduplication setting, field mappings.

**Staleness signals:**
- **Only 2 screenshots for a long, claim-dense doc.** The entire setup flow (Settings > CRM Sync panel, Create/Link, status mapping config, Members tab) is **unscreenshotted** — high risk that the documented flow doesn't match current UI. Strong candidate for screenshot capture + flow verification.
- Naming-convention examples use **2024** quarters (`2024-Q1-ABM-...`, L242-244) — dated example year (today is 2026); cosmetically stale.
- Attribution models / ROI formula presented genericly — verify Abmatic actually exposes selectable attribution models in-product vs. relying on CRM-native reporting.
- No TODO/"coming soon" text.

---

## 7. docs/campaigns/dynamic-content.md

**Topic / summary:** Personalization-variable ("token") reference. Documents `{{mt_*}}` syntax for location, company (IP reveal), CRM (HubSpot/Salesforce), CSV-import, and custom variables; fallback syntax; how to insert via the page editor; use cases; testing; troubleshooting; advanced layering.

**Screenshots referenced:**
- L113 `/img/screenshots/dynamic-content-editor.png` — "Page editor with personalization button" (exists)
- L122 `/img/screenshots/dynamic-content-menu.png` — "Personalization variables menu" (exists)

**Product claims to verify against live app (these are the canonical variable names — high-value to validate exactly):**
- Location: `{{mt_country}}`, `{{mt_region}}`, `{{mt_city}}`, `{{mt_timezone}}`, `{{mt_preferredLanguage}}`.
- Company: `{{mt_companyName}}`, `{{mt_industry}}`, `{{mt_employees}}`, `{{mt_revenue}}`, `{{mt_website}}`.
- HubSpot: `{{mt_hubspot_company_name}}`, `{{mt_hubspot_contact_firstname}}`, `{{mt_hubspot_contact_lastname}}`, `{{mt_hubspot_contact_jobtitle}}`, `{{mt_hubspot_company_industry}}`.
- Salesforce: `{{mt_salesforce_account_Name}}`, `{{mt_salesforce_account_Industry}}`, `{{mt_salesforce_contact_FirstName}}`, `{{mt_salesforce_contact_Title}}`, `{{mt_salesforce_account_OwnerId}}`.
- CSV: `{{mt_csv_[column_name]}}`.
- Fallback syntax: `{{mt_companyName|there}}`.
- Custom variables: page editor → **Personalize** → **Custom Variables** tab → **+ Variable**.
- Personalization menu tabs: **Account Details / IP Reveal Details / Custom Variables** (L117, L124-130).

**Staleness signals / INTERNAL INCONSISTENCY (important):**
- **Variable-name conflict with page-editor.md and email-campaigns.md.** This doc uses `{{mt_company}}` in examples (L27, L137, L263) AND `{{mt_companyName}}` in the catalog (L57) — both for company name. page-editor.md uses `{{mt_company}}` and a different CRM prefix style `{{sf_*}}` / `{{hs_*}}` (NOT the `{{mt_salesforce_*}}` / `{{mt_hubspot_*}}` form used here). email-campaigns.md and agentic-flow use a totally different bare syntax (`{{firstName}}`, `{{company}}`, `{{industry}}`). **Three different variable syntaxes coexist across the campaigns section** — must reconcile against the live app to find which prefixes are real (likely `mt_*` for web personalization vs. bare `{{field}}` for sequences). This is the top correctness issue in the section.
- "IP data is 80-90% accurate" (L272) — verify claim still stands.
- No TODO/placeholder text.

---

## 8. docs/campaigns/email-campaigns.md

**Topic / summary:** "AI Sequences" — multi-channel (Email/Call/LinkedIn) sequences where AI personalizes templates per contact. (File id is `email-campaigns` but the product is titled **AI Sequences**.) Covers step types, create flow (under "Advanced" → **Sequence**), sequence-step editor, personalization variables, templates, sequence grid, Clear Personalizations, metrics, CRM integration/triggers, troubleshooting.

**Screenshots referenced:**
- L45 `/img/screenshots/sequence-campaigns-list.png` — campaigns list (exists)
- L64 `/img/screenshots/sequence-create-modal.png` — "Create Campaign modal showing Sequence option under Advanced" (exists)

**Product claims to verify against live app:**
- Create: **Campaigns → + Campaign → Advanced → "Sequence"** → choose Contact Collection → Create (L60-67). NOTE: create modal label is **"Sequence"** but the doc/product title is **"AI Sequences"** — verify the actual label in the modal.
- Step types: Automatic Email / Manual Email / Call Script / LinkedIn Message.
- Add step via **+** button or menu; set **trigger delay**.
- Variables: `{{firstName}}`, `{{lastName}}`, `{{jobTitle}}`, `{{email}}`, `{{company}}`, `{{industry}}`, `{{employeeCount}}`, `{{website}}`, `{{visitedPages}}`, `{{lastVisit}}`, `{{engagementScore}}` (L117-139). **Bare syntax — conflicts with dynamic-content.md's `mt_*` syntax (see #7).**
- Sequence grid columns: Step / Step Type / Step Template / Created At / Updated At.
- Edit step: menu (three dots) → **Update Sequence Step**.
- **Clear Personalizations** via three-dot menu.
- **Activate** button.
- CRM triggers (new lead, deal stage change, property update, task completed) — verify these triggers are actually configurable in-product.

**Staleness signals:**
- **File id/slug `email-campaigns` vs product name "AI Sequences"** — naming mismatch baked into the URL (`/campaigns/email-campaigns`). Many other docs link to it as "AI Sequences." Cosmetic but worth noting; relates to the Agentic Flow vs AI Sequence overlap (#4).
- Overlap with agentic-flow.md is heavy (same step types, same grid, same "Clear Personalizations") — verify these are genuinely two distinct campaign types in the live app and the distinction (template-control vs full-AI) still holds.
- Variable-syntax conflict (see #7).
- `{{lastVisit}}` example "January 15, 2026" — fine.
- No TODO/placeholder text.

---

## 9. docs/campaigns/google-ads.md

**Topic / summary:** Google Ads via **Customer Match** — connect Google Ads, build account/contact lists, push as Customer Match audiences, run Search/Display/YouTube/Remarketing. Covers match rates, audience strategies, budget allocation, attribution, best practices, privacy.

**Screenshots referenced:**
- L52 `/img/screenshots/integrations-hub.png` — "Integrations Page" (exists; shared)
- L68 `/img/screenshots/google-ads-accounts-list.png` — "Account Collections" (exists)

**Product claims to verify against live app:**
- Connect: **Integrations → Google Ads card → Authorize** → Google sign-in → select account → confirm; status → **Active** (L42-50).
- Build list: **Accounts / Contacts → Create Collection** with criteria (Industry, Company size, Revenue, Tech stack, CRM properties) (L58-66).
- Push: **Accounts/Contacts → select collection → more menu (three dots) → "Create Google Ads Customer Match"** (L72-82). **VERIFY this exact menu item label.**
- "Google Customer Match requires a minimum of 1,000 matched users" (L85, L266).
- Match-rate table (work email 30-50%, etc.).

**Staleness signals:**
- **NO screenshot of the campaign-creation step itself.** Notably, unlike linkedin-ads.md, this doc describes Google Ads almost entirely as an audience-sync integration (push Customer Match), NOT as an in-Abmatic campaign type selectable in the Create-Campaign modal. overview.md lists "Google Ads" under campaign resources but does NOT list it as a create-modal campaign type. **Open question: is "Google Ads" a real Abmatic campaign type or just an audience-sync integration?** Needs live verification; affects whether this belongs in /campaigns at all.
- `sidebar_position: 8` collides with banner-popup.md (8). Also note id `google-ads` title "Google Ads Campaigns."
- Match-rate percentages and budget-allocation table are generic best-practice numbers — illustrative.
- No TODO/placeholder text.

---

## 10. docs/campaigns/intent.md

**Topic / summary:** Intent campaigns scoring accounts by buying readiness. Two types: **First-Party** (weighted website actions) and **Third-Party** (keyword/topic research). Documents default action weights, score tiers, trend indicators, multi-channel signal aggregation (Website/LinkedIn/LinkedIn Messaging/Email/Chat), setup, engagement-history timeline, use cases, weight-config best practices, troubleshooting.

**Screenshots referenced:**
- L137 `/img/screenshots/campaign-create-wizard.png` — "Intent option under Advanced" (exists; shared)
- L154 `/img/screenshots/intent-scoring-weights.png` — "First-party intent scoring weights configuration" (exists)
- L169 **HTML comment placeholder (no image):** `<!-- Screenshot: Third-party intent keyword configuration will be added when the feature UI is captured -->` ⚠️ explicit missing-screenshot TODO.

**Product claims to verify against live app:**
- Create: **Campaigns → + CAMPAIGN → Advanced → Intent** → choose **First Party / Third Party** (L130-135).
- First-Party default weights table (L61-72): Form Fill 50, Demo Page Visit 10, Home Page Visit 2, Outbound 1.2, Inbound 1.1, Other Page Count 1, Blog Page Visit 0.8, Time on Page 0.5, Scroll Depth (per 10%) 0.1. **VERIFY these exact action names + default weights in the live weights UI** (range 0-100, slider + text input).
- Score tiers (75+ Very High … 0-9 Minimal) — verify these are product-defined or doc-invented guidance.
- Third-Party: **Add Keyword**, weight 0-100, **Save & Show Insights** (L160-162).
- Third-party Insights metrics: Surging Accounts, Average Intent Score, Active Signals (score > 40), Topics Tracked.
- Trend labels: Surging (>+15) / Heating (+5..+15) / Stable (-5..+5) / Cooling (< -5) — verify exact thresholds.
- Engagement-history timeline fields and per-channel LinkedIn / LinkedIn Messaging / Email metric tables (L185-233).
- Troubleshooting nav: **Settings > Script Installation**, **Settings > Integrations**.

**Staleness signals:**
- **Explicit unfilled screenshot placeholder** (L169) for third-party keyword config — a real "coming soon"-style TODO. The doc even says "when the feature UI is captured," hinting the third-party UI may be newer/unstable.
- Exact numeric thresholds (trend surge bands, score tiers, "Active Signals > 40") are precise enough to be wrong if the product changed — high-value to verify.
- `sidebar_position: 7` collides with agentic-flow.md and linkedin-ads.md.
- No other placeholder text.

---

## 11. docs/campaigns/linkedin-ads.md

**Topic / summary:** LinkedIn campaigns syncing account lists to LinkedIn Matched Audiences. Covers connect flow, building account lists, create-campaign flow (LinkedIn under "Advertising"), Account/Contact targeting, audience+budget+schedule config, **Push to LinkedIn**, matched-audience requirements/match rates, campaign types, targeting layers, creative tips, analytics, use cases, troubleshooting.

**Screenshots referenced:**
- L66 `/img/screenshots/linkedin-create-modal.png` — "Campaign creation showing LinkedIn option" (exists)
- L72 `/img/screenshots/linkedin-campaign-account-select.png` — "Select Account or Contact targeting" (exists)
- L77 `/img/screenshots/linkedin-campaign-collection-select.png` — "Select a collection" (exists)
- L87 `/img/screenshots/linkedin-campaign-audience.png` — "audience and budget configuration" (exists)
- L170 `/img/screenshots/linkedin-campaign-detail.png` — "campaign insights showing metrics" (exists)

**Product claims to verify against live app:**
- Connect: **Integrations → LinkedIn card → Authorize** → sign in (Campaign Manager admin) → select Ad Account → status "Active" (L37-45).
- Account list: **Audiences > Accounts → Create Collection / Upload from CSV** (domains required).
- Create: **Campaigns → Create Campaign → "LinkedIn" under the Advertising section** (L62-64). NOTE create-button label here is **"Create Campaign"** (vs "+ Campaign"/"+ CAMPAIGN" elsewhere) — inconsistent button labeling across docs; verify actual label.
- Account vs Contact targeting → select collection → **Create Campaign**.
- Configure: Audience / Budget (daily/lifetime/both) / Schedule.
- **Push to LinkedIn** button (L90-95). **VERIFY this button exists and label.**
- Matched audience: domains 60-80%, emails 30-50%; **minimum 300 matched companies** (L107, L114, L250); 24-48h processing.
- Campaign types (Sponsored Content / Message Ads / Conversation Ads / Video Ads) — these are LinkedIn-native types, not Abmatic UI; lower verification priority.
- Analytics grouped by Account / Campaign / Creative; metrics Impressions/Clicks/Spend/CPC.
- Related link: **LinkedIn DMP** (`/audiences/linkedin-dmp`).

**Staleness signals:**
- **Minimum-companies inconsistency:** LinkedIn doc says **300** matched companies (L114, L250); advertising-campaigns.md (Meta) and others don't state a number; google-ads.md says **1,000** users for Customer Match. These are different platforms so different minimums are plausible — but confirm the 300 figure is current.
- Button-label inconsistency ("Create Campaign" vs "+ CAMPAIGN").
- `sidebar_position: 7` collides with agentic-flow.md and intent.md.
- No TODO/placeholder text.

---

## 12. docs/campaigns/overview.md

**Topic / summary:** Campaigns landing page. Describes the Campaigns dashboard, the **12 campaign types across 3 categories** (Personalization / Advertising / Advanced), the campaign table columns, status types, visitor metrics, the Preference/priority system, and a "which campaign type should I use" playbook + multi-channel ABM sequence.

**Screenshots referenced:**
- L27 `/img/screenshots/campaigns-list.png` — "Campaigns List" (exists; shared)
- L44 `/img/screenshots/campaign-create-wizard.png` — "all campaign types organized by category" (exists; shared)

**Product claims to verify against live app (this is the master list — verify the create-modal contents against it):**
- **"12 campaign types across three categories"** (L42). Enumerated:
  - Personalization: **Inbound, Outbound, A/B Testing, Banner & Popup**
  - Advertising: **Display Advertising, LinkedIn, Meta, Retargeting**
  - Advanced: **Agentic Flow, AI Sequences, Intent, Agentic Chat**
  - That is 12. **NOTE: "Google Ads" and "CRM Campaigns" are NOT in this 12-type list** even though both have their own /campaigns docs. Confirm whether Google Ads / CRM are actual create-modal campaign types or auxiliary (integration/sync) features. This is a structural consistency question for the whole section.
- Dashboard elements: **+ CAMPAIGN** button, Summary Cards (click to filter), Search & Filters, Campaign Table.
- Table columns: Campaign Name (with type), **Preference**, Status, Unique Visitors, Created/Updated.
- Status types: **100% Full Personalization / 50% Experiment / 0% Inactive** (L84-89). NOTE these three named statuses vs ab-testing.md's claim of a Status dropdown offering "100%, 90%, 50%, 0%." Reconcile.
- Unique Visitors format: "422 vs 437 in control."
- Preference priority (#1 wins, falls through).
- Quick actions: click campaign / + CAMPAIGN / click type card to filter (example "click '9 Outbound'") / checkboxes / sortable headers.

**Staleness signals:**
- **Authoritative 12-type list excludes Google Ads & CRM Campaigns** that nonetheless have full docs — top structural inconsistency to resolve (are there really 12, 13, or 14 types?).
- Status terminology ("Full Personalization / Experiment / Inactive" + "100/50/0%") vs ab-testing.md's "100/90/50/0%" weights — conflicting. Pick one truth.
- Links to "First Campaign Tutorial" (`/getting-started/first-campaign`) — cross-section link, out of scope but note it's relied upon.
- No TODO/placeholder text.

---

## 13. docs/campaigns/page-editor.md

**Topic / summary:** The visual (no-code) page editor used by Website Personalization campaigns. Covers opening the editor from the Pages tab, the 3-area interface (toolbar/canvas/side panel), selecting/editing text (incl. Edit HTML), changing images, links, inserting personalization variables, styling, hiding/restoring elements, device preview, save vs publish, page status, keyboard shortcuts, troubleshooting.

**Screenshots referenced:**
- L37 `/img/screenshots/page-editor-pages-list.png` — "Campaign pages list" (exists)
- L45 `/img/screenshots/page-editor-main.png` — "Visual Page Editor … editing interface" (exists)

**Product claims to verify against live app:**
- Open: Website Personalization campaign → **Pages** tab → **Add Page** / select page → enter URL → **Open in Editor** (L34-41).
- Interface areas: Top Toolbar / Main Canvas / Side Panel.
- Text edit + **Edit HTML** (syntax highlighting) → **Save**.
- Image: **Change Image** → Upload / URL / Gallery; alt text, dimensions, object-fit.
- Links: edit href, target="_blank".
- Variables: **{ }** button or press `{`; menu of variables. **Examples here use `{{mt_country}}`, `{{mt_company}}`, `{{mt_industry}}`, and `{{sf_*}}` / `{{hs_*}}` CRM prefixes** (L109-127) — the `{{sf_*}}`/`{{hs_*}}` form CONFLICTS with dynamic-content.md's `{{mt_salesforce_*}}`/`{{mt_hubspot_*}}` form. (See #7.)
- Styling props (font size/weight/color/align/decoration; bg color/opacity/display/visibility); **CSS Classes** field.
- Hide: **Hide Element** / `Delete`; restore via **Show Removed Elements** → **Restore**.
- Device preview via **Dimensions** accordion (Desktop/Tablet/Mobile).
- Save vs Publish; page statuses Draft/Published/Active/Inactive.
- Keyboard shortcuts table (Ctrl/Cmd+S, Z, Shift+Z, `{`, Delete, Escape).
- Mentions a **"DOM tree navigator"** / **Select Parent** in side panel (L65, L250).

**Staleness signals:**
- **CRM variable-prefix conflict** (`{{sf_*}}`/`{{hs_*}}` here vs `{{mt_salesforce_*}}`/`{{mt_hubspot_*}}` in dynamic-content.md). At least one is wrong vs the live editor.
- Only 2 screenshots for a feature-dense editor; many specific controls (Edit HTML, Change Image dialog, Show Removed Elements, Dimensions accordion, CSS Classes, DOM tree navigator, keyboard shortcuts) are **unscreenshotted** and high-risk for drift. Strong candidate for re-capture against the live editor.
- Keyboard shortcuts and "press `{`" are very specific — verify they still work.
- No TODO/placeholder text.

---

## 14. docs/campaigns/website-personalization.md

**Topic / summary:** The core Inbound/Outbound web personalization campaign walkthrough. Step-by-step: navigate to Campaigns, create campaign (Inbound/Outbound/A/B/Banner&Popup), define audience (rules), add pages, then monitor via Insights/Engagement/Performance. Plus best practices, status guide, campaign ideas, troubleshooting.

**Screenshots referenced (7 — most in the section):**
- L33 `/img/screenshots/campaigns-list.png` — "Campaigns List" (exists; shared)
- L46 `/img/screenshots/wp-create-modal.png` — "Campaign Create Modal" (exists)
- L65 `/img/screenshots/wp-audience-tab.png` — "Campaign Audience Tab" (exists)
- L99 `/img/screenshots/wp-pages-tab.png` — "Campaign Pages Tab" (exists)
- L128 `/img/screenshots/wp-insights-tab.png` — "Campaign Insights" (exists)
- L149 `/img/screenshots/wp-engagement-tab.png` — "Campaign Engagement" (exists)
- L167 `/img/screenshots/wp-performance-tab.png` — "Campaign Performance" (exists)

**Product claims to verify against live app:**
- Log in at **app.abmatic.ai** → **Campaigns** sidebar.
- Create via **+ CAMPAIGN** → type selector; types **Inbound / Outbound / A/B Testing / Banner & Popup** (L50-58). "Select Inbound for most…"
- **AUDIENCE** tab: filters Account List / Industry / Company Size / Location / Behavior; add rule via **+ RULE** → filter type → condition (Is / Is Not / Contains) → values → **SAVE**; rules are **AND** logic (L84-91).
- **PAGES** tab: table shows URL + active/inactive, visitor counts (personalized vs control), CTA click data, last updated; add via **+ PAGE** → full URL → Add → click URL to open Visual Page Editor.
- **INSIGHTS** tab metrics: CTA Clicks, Conversions, **CVRL** ("Conversion rate - personalized group"), **CTRL** ("Conversion rate - control group"), Total Visitors; chart Personalized (green) vs Control (red); Lift. (CVRL/CTRL definitions here match agentic-chat.md but conflict with advertising-campaigns.md — see #3.)
- **ENGAGEMENT** tab: Time on Page, Page Views, Scroll Depth, Engagement Score (0-100).
- **PERFORMANCE** tab sub-tabs: VISITORS / CTA CLICKS / ACCOUNTS / CONVERSIONS.
- Status guide: 100% Full personalization / 50% Experiment / 0% Inactive.

**Staleness signals:**
- CVRL/CTRL definition conflict with advertising-campaigns.md (lift vs group rate) — section-wide inconsistency.
- "average 2% conversion → 3-5x higher" and "2.3x increase in demo requests" (L19-23) marketing stats — unverifiable.
- UI button casing ("+ CAMPAIGN", "+ RULE", "+ PAGE", "SAVE" all caps) — verify the live UI actually uses these labels/casing (linkedin-ads.md uses "Create Campaign" instead). Consistent casing across docs is a small content-quality item.
- Best-screenshotted doc in the section — good reference baseline for what the campaign tabs should look like.
- No TODO/placeholder text.

---

## Cross-Cutting Findings (feed the planner)

1. **Personalization-variable syntax is documented THREE incompatible ways** (top correctness risk):
   - `{{mt_*}}` + `{{mt_salesforce_*}}`/`{{mt_hubspot_*}}` (dynamic-content.md)
   - `{{mt_*}}` + `{{sf_*}}`/`{{hs_*}}` (page-editor.md)
   - bare `{{firstName}}`/`{{company}}`/`{{industry}}` (email-campaigns.md, agentic-flow.md)
   - Also `{{mt_company}}` vs `{{mt_companyName}}` used interchangeably within dynamic-content.md.
   - Action: verify the real token syntax(es) in the live app; likely web-personalization uses `mt_*` and sequences use bare `{{field}}` — but the CRM-prefix form must be pinned down.

2. **CVRL / CTRL are defined two different ways**: "lift" (advertising-campaigns.md) vs "personalized-group rate / control-group rate" (website-personalization.md, agentic-chat.md). Establish one definition.

3. **Campaign-type roster is inconsistent.** overview.md authoritatively says **12 types** and omits **Google Ads** and **CRM Campaigns**, yet both have full /campaigns docs. Determine whether Google Ads and CRM are true create-modal campaign types or integration/sync features, and align overview + doc placement.

4. **Status/weight values conflict.** overview.md & website-personalization.md: 100% / 50% / 0% (Full Personalization / Experiment / Inactive). ab-testing.md: Status dropdown of **100/90/50/0%** AND a separate 10/20/50% control-weight table. Reconcile to the real control-group control.

5. **"Agentic Flow" vs "AI Sequence" vs "Agentic Sequence" naming overlap.** Two near-identical campaign types (same step types, same grid, same Clear Personalizations) plus a Settings tab named "Agentic Sequence." Confirm both campaign types still exist and the distinction is current; the `email-campaigns` slug for the "AI Sequences" product is a URL/name mismatch.

6. **Agentic-chat screenshots are mis-paired** — 8 of 9 alt-texts describe a different screen than the filename suggests (e.g., the "Audience tab" caption points at `ac-preview-sidebar.png`). Almost certainly renders wrong images. Needs re-mapping (or re-capture).

7. **"Meta" ad type** is documented as a first-class create-modal option (advertising-campaigns.md + overview.md). Verify it still exists as selectable.

8. **`{{daysUntilEvent}}`** used in banner-popup.md is not in the variable catalog — verify or remove.

9. **One explicit screenshot TODO**: intent.md L169 HTML comment — third-party keyword-config UI never captured.

10. **Under-screenshotted, claim-dense docs** (high drift risk; candidates for capture + flow verification): **crm-campaigns.md** (2 shots, entire Settings>CRM Sync flow unshown), **page-editor.md** (2 shots, many editor controls unshown), **google-ads.md** (2 shots, no create-campaign UI; unclear if it's even a campaign type), **dynamic-content.md** (2 shots).

11. **Dated example content**: crm-campaigns.md naming-convention examples use **2024** quarters (cosmetic; today is 2026).

12. **`sidebar_position` collisions** within the section: position **7** used by agentic-flow, intent, AND linkedin-ads; position **8** used by google-ads AND banner-popup; advertising-campaigns is 7 as well via `email-campaigns` at 6. Sidebar ordering is ambiguous and should be renumbered.

13. **Button-label / casing inconsistency** for the create action: "+ CAMPAIGN" / "+ Campaign" / "Create Campaign" appear across docs. Pin to the live label.

14. **Marketing stats** ("3x more qualified conversations," "2.3x increase in demo requests," "average 2% conversion") appear without sourcing in several docs — flag for legal/accuracy review.
