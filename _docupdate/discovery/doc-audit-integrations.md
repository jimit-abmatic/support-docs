# Doc Audit — Integrations Section

Audit date: 2026-06-12
Scope: `docs/integrations/*.md` and `docs/integrations/*/*.md` (15 files)
Purpose: feed downstream planner. For each doc: topic + current-content summary, screenshots referenced (with on-disk existence), product claims to verify against the live app, and visible staleness signals.

---

## Cross-cutting findings (apply to multiple docs)

1. **Heavy reuse of the generic `integrations-hub.png` screenshot.** 11 of the 15 docs illustrate their connection step with the SAME `/img/screenshots/integrations-hub.png` image (overview, salesforce, salesforce-setup, hubspot, pipedrive, activecampaign, outreach, sync-behavior, linkedin-ads, google-ads, segment, google-analytics). Captions claim the image shows a section-specific card ("Find Salesforce in the CRM section", "scroll to the Marketing & Sales Automation section to find Outreach", "Advertising section with LinkedIn, Google Ads, and Meta", "Conversion Tracking section with Segment"), but they all point at one hub image. The actual hub screenshot cannot match every one of those captions. PLANNER: verify whether `integrations-hub.png` actually shows the claimed card/section for each doc, and consider swapping in the many unused product-specific screenshots already present on disk (see #2).
2. **Many product-specific integration screenshots exist on disk but are UNUSED.** The screenshots directory contains `salesforce-integration.png`, `integration-salesforce.png`, `integration-hubspot.png`, `hubspot-sync-settings.png`, `integration-pipedrive.png`, `linkedin-ads-integration.png`, `linkedin-integration.png`, `linkedin-ad-integrations.png`, `linkedin-ad-integrations-bottom.png`, `google-ads-integration.png`, `integrations-google-ads.png`, `google-ads-accounts-list.png`, `google-ads-contacts-list.png`, `google-analytics-integration.png`, `segment-integration.png`, `crm-sync-settings.png`, `hubspot-sync-settings.png`, `integrations-communications.png`, `integrations-crm-status.png`, `integrations-fullpage.png`. These look purpose-built for these docs but are not referenced. PLANNER: confirm with live app whether these are current, then wire them in to replace the generic hub image where a section-specific/sync-settings view is described.
3. **No referenced screenshots are broken.** All 11 distinct image paths referenced across the 15 docs resolve to existing files in `static/img/screenshots/`. Staleness risk is about *content accuracy of the images vs current UI*, not missing files.
4. **Inconsistent navigation label for the Integrations page.** Some docs say "go to **Integrations** in the left sidebar" (segment, salesforce.md step 1, pipedrive, activecampaign, linkedin-ads, hubspot.md), others say "**Settings > Integrations**" (overview, gmail, slack, google-analytics, salesforce-setup, hubspot-setup, outreach, sync-behavior, google-ads step in nav). hubspot-setup is most explicit: "click **Settings** in the left sidebar, click the **Integrations** tab." PLANNER: determine the ONE correct nav path in the live app and normalize all docs.
5. **"Automation Tools" vs "Marketing & Sales Automation" section-name mismatch.** outreach.md step 1 says "Scroll to the **Automation Tools** section" but its screenshot caption and overview.md call it "Marketing & Sales Automation." Verify live section heading.
6. **Button-label inconsistency: Connect vs Authorize.** overview/gmail/slack use "Connect"; salesforce.md uses "Connect"; salesforce-setup/hubspot/hubspot-setup/pipedrive/activecampaign/outreach/linkedin-ads/google-ads use "Authorize"; activecampaign final button is "**Integrate**"; outreach uses uppercase "**AUTHORIZE**"/"**SETTINGS**". Disconnect button is variously "Disable", "Disconnect", or "Disable or Disconnect". PLANNER: capture the real button labels per integration.

---

## docPath: docs/integrations/overview.md

**Topic / summary:** The hub/landing page for the entire Integrations section. Documents the Integrations Hub (Settings > Integrations), enumerates every category (CRM, Communications, Conversion Tracking, IP Data Providers, Ad Networks, Accounts & Contacts Data, Marketing & Sales Automation), then covers the generic connect flow, sync behavior concepts, status indicators, common workflows, field mapping, best practices, and troubleshooting.

**Screenshots referenced (all exist on disk):**
- `/img/screenshots/integrations-hub.png`
- `/img/screenshots/integrations-crm.png`
- `/img/screenshots/integrations-gmail.png` (used here as the "Communications" section image)
- `/img/screenshots/integrations-conversion-tracking.png`
- `/img/screenshots/integrations-ip-providers.png`
- `/img/screenshots/integrations-ad-networks.png`
- `/img/screenshots/integrations-data-sources.png`
- `/img/screenshots/integrations-automation.png`

**Claimed product features / UI / labels to verify:**
- Integrations Hub at **Settings > Integrations**, organized by category with connection-status indicators.
- "Drag connected CRMs to set priority order" (drag-and-drop CRM priority ordering for conflict resolution) — claimed twice.
- CRM platforms listed: Salesforce, HubSpot, Pipedrive, ActiveCampaign.
- Communications: Gmail (email tracking via OAuth), Slack.
- Conversion Tracking: Google Analytics 4, Segment — and "Only one conversion tracking integration can be active at a time."
- **Abmatic IP Data Providers**: a "proprietary 5-provider waterfall" with named providers: "Abmatic IP Primary", "Abmatic IP Enhanced", "Abmatic IP Extended", "Abmatic AI Enrichment", "Abmatic IP Fallback" — all auto-active, no config. (Verify these branded names appear in the live UI; they read like marketing rebrands of underlying vendors. NOTE: internal memory references a 5-provider waterfall but also a "5x5 decommission" — confirm the provider count/names are current.)
- Ad Networks: LinkedIn Ads, Google Ads, Meta ("Connect via Integrations page").
- Accounts & Contacts Data: Abmatic (built-in), Apollo.io ("275M+ contacts and 73M+ companies") — with drag-to-prioritize.
- Marketing & Sales Automation: Outreach, Marketo ("Connect via Integrations page").
- Connect flow: OAuth integrations list "Salesforce, HubSpot, LinkedIn, Gmail, etc."; API-key integrations "ActiveCampaign, Apollo."
- Configure Settings table claims: Sync Direction (Import only / Export only / Two-way), Duplicate Handling (Create new / Update existing / Skip), Field Mapping, Auto-Push.
- Sync Modes: Fill / Overwrite. Sync Frequency: Real-time / Hourly / Daily.
- Status indicators: Active (green), Inactive (gray), Syncing (blue spinner), Error (red).
- Field mapping at **Settings > Custom Fields** with **Add Field Mapping**.
- Default field-mapping table (Abmatic↔Salesforce↔HubSpot).
- Workflow step "Enable 'Auto-Push to CRM' in Company Reveal settings."

**Staleness signals:**
- Marketing-heavy "Why Integrations Drive ABM Success" before/after table — not strictly a staleness issue but light on verifiable UI.
- The 5-provider waterfall branded names are the single biggest verification risk — they may not be exposed by these exact names in the live app, or count may have changed.
- "Meta" and "Marketo" are listed as available ("Connect via Integrations page") but have NO dedicated doc and NO setup steps — verify they actually appear as cards.
- Sync Frequency here uses "Real-time / Hourly / Daily" labels, but every CRM-specific doc uses "Every 1 hour / 6 hours / 12 hours / 24 hours / Manual." Inconsistent vocabulary — overview may be outdated or simplified.
- "Drag connected CRMs to set priority order" appears only in overview; no CRM-specific doc mentions drag-to-prioritize. Verify this feature exists.
- References `/audiences/crm-sync`, `/audiences/linkedin-dmp`, `/audiences/google-customer-match`, `/campaigns/email-campaigns` — confirm these slugs still resolve.

---

## docPath: docs/integrations/gmail.md

**Topic / summary:** Gmail integration that powers AI Sequence email-sending. Connect Google account via OAuth so sequence email tasks (automatic + manual) send from the user's real Gmail. Covers why/what, prerequisites, connect + verify steps, required OAuth scopes, how it drives automatic vs manual sequence email steps, sending limits, deliverability, troubleshooting, disconnect.

**Screenshots referenced (exists):**
- `/img/screenshots/integrations-gmail.png` (caption: "Communications section ... Gmail and Slack cards").

**Claimed product features / UI / labels to verify:**
- Gmail card under **Settings > Integrations > Communications** with **Authorize** button; shows green **Active** badge after connect; **Disable** button replaces Authorize.
- In an AI Sequence campaign **Tasks** tab, **Send Email** button is enabled only when Gmail connected (disabled otherwise).
- Sequence step types: "**Automatic Email Template**" (auto-sends when task due, status → **Done**) and "**Manual Email Template**" (review draft in Tasks grid, click **Send Email**, status → **Done**).
- Task statuses referenced: "Active", "Done".
- OAuth scopes claimed: `gmail.modify`, `gmail.settings.basic`, `gmail.send`, `openid`/`profile`/`email`.
- Claim: Abmatic "cannot read your inbox or delete messages."
- Sending limits table: Google Workspace 2,000/day, personal Gmail 500/day.
- Disconnect via **Disable** on Gmail card; revoke at myaccount.google.com/permissions ("Abmatic AI" app).

**Staleness signals:**
- Scope list and "least privilege" claims are exact and must match the real Google consent screen — high verification priority (legal/trust-sensitive).
- Cross-links to `/campaigns/email-campaigns` (AI Sequences) and `/ai-agents/sdr-agent` — confirm slugs exist.
- "Keep sequences under 5 steps" is generic advice, not a UI claim.
- Whether Gmail is genuinely the active email-send mechanism (vs SDR Agent / other sending infra) should be confirmed against current product.

---

## docPath: docs/integrations/google-analytics.md

**Topic / summary:** Google Analytics 4 integration for conversion tracking. Connect GA4 via OAuth to import conversion goals, auto-create a custom dimension for personalized-vs-control attribution, and measure lift in Campaign Insights. Covers prerequisites, 4-step setup (navigate, authenticate, select property, configure custom dimensions), how it works, viewing imported goals, metrics, lift calc, best practices, troubleshooting, disconnect.

**Screenshots referenced (both exist):**
- `/img/screenshots/integrations-hub.png` (caption: scroll past CRM/Communications to Conversion Tracking section).
- `/img/screenshots/conversions-manage.png` (Conversions > Manage tab).

**Claimed product features / UI / labels to verify:**
- GA4 card in **Settings > Integrations > Conversion Tracking** with **Authorize**.
- Permissions: View Analytics data / Edit Analytics data / Read Analytics configuration.
- Property selection dialog: Account + Property.
- Abmatic auto-creates a custom dimension; if slots full, user picks an existing dimension to repurpose.
- Imported GA4 events appear in **Conversions > Manage** "with a Google Analytics icon."
- **Main Event** toggle to set primary conversion.
- Multi-goal: Main Event + Supporting Events.
- Campaign Insights metrics: Conversions (Personalized), Conversions (Control), Conversion Rate, Lift.
- Disconnect via **Settings > Disable** (note: "Click **Settings** > **Disable**" — a Settings sub-menu, differs from other docs' single Disable button).

**Staleness signals:**
- Frontmatter has NO `sidebar_position` (unlike most siblings) — ordering may be unintentional. Minor.
- Disconnect path "Click **Settings** > **Disable**" conflicts with the simpler "Disable button" pattern in other docs; verify GA4 actually has a Settings sub-step.
- The hub screenshot is reused with a Conversion-Tracking-specific caption — same issue as cross-cutting #1.
- Cross-links: `/conversions/overview`, `/conversions/create-goals`, `/campaigns/ab-testing`. Verify.

---

## docPath: docs/integrations/segment.md

**Topic / summary:** Segment integration as a conversion-tracking source. Abmatic provides an API key, user adds Abmatic as a Segment *destination*, Segment events flow in as conversion goals. Covers why/what, how-it-works diagram, prerequisites, 4-step setup, using Segment events as goals, GA-via-Segment, best practices, troubleshooting, status, privacy.

**Screenshots referenced (both exist):**
- `/img/screenshots/integrations-hub.png` (caption: Conversion Tracking section with Segment).
- `/img/screenshots/conversions-manage.png`.

**Claimed product features / UI / labels to verify:**
- Segment card under **Conversion Tracking**; nav says "**Integrations** in the left sidebar" (inconsistent with Settings>Integrations elsewhere).
- **Settings** on Segment card reveals an **API key** to copy.
- **CRITICAL STALENESS:** Step 3 says in Segment "**Search for 'Markettailor'** (Abmatic's integration name in Segment)" and links to `https://segment.com/docs/connections/destinations/catalog/markettailor/`. "Markettailor" is the OLD company name (pre-Abmatic rebrand). This may still be accurate on Segment's side (destination not renamed) OR may now be "Abmatic". HIGH verification priority — confirm the actual Segment catalog name + URL still resolves.
- Activation: **Settings** on Segment card → toggle **Inactive → Active** → **Save**.
- "Only one conversion tracking integration can be active at a time" (must deactivate GA first).
- Events appear in **Conversions > Manage** "with a Segment icon"; **Main Event** toggle.
- Event-naming conventions table (Form Submitted, CTA Clicked, Page Viewed, Order Completed).
- External links: Segment Markettailor destination doc, Segment GA custom-dimensions doc.

**Staleness signals:**
- "Markettailor" branding is the standout stale-terminology risk (old company name). Even if Segment's catalog still uses it, the doc should explain the rebrand clearly.
- Frontmatter has no `sidebar_position`.
- Nav label "Integrations in the left sidebar" vs "Settings > Integrations."
- External Segment doc URLs may have moved — verify both links 200.

---

## docPath: docs/integrations/slack.md

**Topic / summary:** Slack integration for real-time visitor/contact/engagement alerts routed to channels and DMs. Deepest UI doc in the set. Covers why/what, prerequisites, connect (OAuth), initial setup (bot added), the Slack settings page anatomy (left sidebar + channel detail tabs), channel filters (firmographics, geo, behavioral, UTM, contact), AND/OR logic, notification types, message customization (contact + account properties), user-level DM notifications, channel management, global settings, best practices, troubleshooting, disconnect.

**Screenshots referenced (exists):**
- `/img/screenshots/settings-slack.png` (caption: channel list, filter config, notification settings tabs).

**Claimed product features / UI / labels to verify (extensive):**
- Connect via **Settings > Integrations > Communications > Slack** with **Connect** button → Slack auth → **Allow**.
- After connect: syncs channels/users, creates default notification settings, adds "Abmatic bot."
- Slack settings page accessed at **Settings > Slack** (note: a dedicated Slack settings page, not just the integration card).
- Left sidebar sections: **Channels**, **+ CREATE CHANNEL**, **Active Members**.
- Channel detail tabs: **Filters**, **Notification Settings**, **Messages**, **Members**, **Message Customization**.
- Filter builder: "Selector + Operator + Value", **Save**.
- Filter categories/fields: Company Name, Domain, Employee Count, Annual Revenue, Industry, Company Type; Country, Region, City, Time Zone; Total Page Views, Total Sessions, Visited Pages, Referrer; utm_source/medium/campaign/content; Job Title, Job Title Level, Job Title Role, Company Name.
- AND/OR filter groups example syntax.
- Notification types: Account Visitors, Contact Visitors, Account Engagement, Contact Engagement, Form Submissions, Summary/Digest; **All Notifications** master toggle.
- Message Customization fields — Contact properties (Full Name, Job Title, Company Name, LinkedIn URL, Work Email, Visited Page, Campaigns, Confidence, Abmatic Link) and Account properties (Company Name, Website, Industry, Company Size, Revenue, LinkedIn URL, Technologies, Visited Pages, Abmatic Link).
- User-level DMs via **Active Members**; example filters "Associated AE `is` [rep]", "Account List `is any of` [Target Accounts Q1]".
- **+ CREATE CHANNEL** (public/private, description, **Create**); **Join Channel**; **Sync Channels**.
- Global settings: **Disable form notifications**, **Smart account notifications**.
- Reconnect via **Settings > Slack > Reconnect**; Disconnect via **Settings > Slack > Disconnect**.

**Staleness signals:**
- Very large surface area of exact tab names, filter field names, and toggle labels — highest UI-drift risk in the whole section. Single screenshot (`settings-slack.png`) cannot cover all five tabs / sidebar; planner should consider whether more screenshots are needed and whether the one image is current.
- Frontmatter `sidebar_position: 2` is the same as gmail.md's `sidebar_position: 2` (both root-level integrations docs collide on position 2) — sidebar ordering ambiguity.
- "Associated AE" filter naming and "Account List" filter should be verified — these tie into routing features that may have changed.
- Cross-links: `/audiences/filters`, `/settings/notifications`, `/visitor-tracking/company-identification`, `/visitor-tracking/contact-reveal`.

---

## docPath: docs/integrations/crm/salesforce.md

**Topic / summary:** Full reference for the Salesforce integration (companion to salesforce-setup.md). Bi-directional sync of accounts/contacts/leads/opportunities/campaigns. Covers why/what, prerequisites, connect + configure, object mapping, field tables (Account/Contact-Lead/Opportunity), sync direction/operations/field-mapping modes/frequency/auto-push, account matching + domain normalization, campaign integration (member status mapping, Campaign Influence), import sources (List Views/Reports/SOQL), pushing (Create as Lead/Contact), activity logging, sync logs, lead-vs-contact handling, duplicate handling, troubleshooting, best practices.

**Screenshots referenced (exists):**
- `/img/screenshots/integrations-hub.png` (caption: "Salesforce shows Active status when connected") — generic hub image, not a Salesforce-specific view. A `salesforce-integration.png` / `integration-salesforce.png` exists on disk but is unused.

**Claimed product features / UI / labels to verify:**
- Prerequisites: Salesforce Enterprise/Unlimited/Developer; System Admin or API access; R/W on Account/Contact/Lead/Opportunity/Campaign.
- Connect: **Integrations > Salesforce > Connect** → SF login → Authorize → "Active status."
- Settings tabs implied: Accounts, Contacts, Leads, Opportunities, Campaigns + Activity Log.
- Object mapping table (SF Account→Account by Website Domain; Contact→Contact by Email; Lead→Contact source:lead; Opportunity→Opportunity Data by SF ID; Campaign→Campaign by SF ID).
- Field tables with specific SF API names (Website, AnnualRevenue, NumberOfEmployees, OwnerId, etc.) mapping to Abmatic fields (work_email, job_title, account_id...).
- Sync directions (SF→Abmatic / Abmatic→SF / Two-way); Create/Update operations; Don't Sync/Fill/Overwrite modes; Frequency (Manual / 24h / 6h / 1h); **Automatically push changes to Salesforce**.
- Account matching priority: SF ID → Website → Email Domain → Create New; domain normalization rules.
- Campaign Member Status mapping: Added→Sent, Viewed→Responded, Submitted form→Converted, Requested demo→Qualified. (Verify these auto-status transitions actually exist — they read prescriptive.)
- Import: **Campaigns > Import from CRM > Salesforce**; **Audiences > Accounts/Contacts > Create > Import from CRM**; sources List Views / Reports / SOQL Query.
- Push: **Push to CRM > Salesforce** with **Create as Lead** / **Create as Contact**.
- Activity logging to Salesforce **Task** objects (website visit, personalization, form submission) + Campaign Member.
- Sync logs: **Integrations > Salesforce > Settings > Activity Log**.

**Staleness signals:**
- Uses generic hub screenshot while a SF-specific one exists unused (cross-cutting #1/#2).
- Campaign Member Status auto-mapping (Sent/Responded/Converted/Qualified) is a strong, specific claim — verify it's real and not aspirational.
- Activity logging as Salesforce Tasks is a notable claim — verify the integration actually writes Tasks.
- SOQL Query import source — confirm it exists in current UI.
- `sidebar_position: 1` here while salesforce-setup.md is `sidebar_position: 0` — setup intended to sort first; fine but confirm intended ordering.
- Cross-link `/campaigns/crm-campaigns` and `/audiences/crm-sync` — verify.

---

## docPath: docs/integrations/crm/salesforce-setup.md

**Topic / summary:** Step-by-step Salesforce setup walkthrough ("under 20 minutes"). 8 numbered steps: start connection, authorize in SF, grant permissions, configure sync settings (object tabs), field mapping (default account + contact/lead mappings), set sync frequency, save + initial sync, verify connection. Plus SF-specific features (Leads/Campaigns/Opportunity tabs), troubleshooting, next steps.

**Screenshots referenced (exists):**
- `/img/screenshots/integrations-hub.png` (caption: "Find Salesforce in the CRM Platforms section and click Authorize").

**Claimed product features / UI / labels to verify:**
- Prerequisites: Enterprise/Unlimited/Developer/**Performance** editions (note: adds Performance vs salesforce.md's list); "API Enabled + Modify All Data"; Essentials/Professional excluded.
- Check edition via SF **Setup → Company Information → Organization Edition**.
- Connect: **Settings → Integrations**, Salesforce in CRM section, **Authorize**.
- Permissions granted: "Access basic information", "Access and manage data", "Perform requests at any time."
- Settings dialog object tabs: Accounts, Contacts, Leads, Opportunities, Campaigns, Activity Log.
- Object-level sync settings: **Create in Salesforce**, **Update in Salesforce**, **Create in Abmatic**, **Update in Abmatic**.
- Field mapping: Don't sync / Fill / Overwrite; default account mappings (Name, Website [primary key], Industry, NumberOfEmployees→employee_count, AnnualRevenue→revenue, BillingCountry→country, BillingCity→city); default contact/lead mappings (Email→work_email primary key, FirstName, LastName, Title→job_title, Phone).
- **Add Mapping** button; "Sync to Abmatic" checkbox; Website + Work Email are required, un-removable primary keys.
- Sync frequency options: 1h / 6h / 12h / 24h / Manual only. **Automatically push changes to Salesforce**.
- Initial sync via **Sync [Object] Manually**; initial-sync time table by record count.
- Verify via **Audiences → Accounts**, look for "Salesforce Import" collection; **Last Sync with Salesforce** / **Last Sync with Abmatic** timestamps; **Activity Log** tab.

**Staleness signals:**
- Edition list differs from salesforce.md (adds "Performance") — reconcile.
- Field mapping default direction here is "Both ways" while salesforce.md presents per-direction nuance — verify defaults.
- Claim that a collection literally named "Salesforce Import" is auto-created — verify exact label.
- "Modify All Data" permission requirement is strong — verify it's actually required (over-privileged asks are a trust concern).
- Generic hub screenshot reused.
- Cross-links `/integrations/crm/sync-behavior`, `/audiences/crm-sync`, `/audiences/crm-sync#pushing-to-crm`, `/campaigns/crm-campaigns`.

---

## docPath: docs/integrations/crm/hubspot.md

**Topic / summary:** Full HubSpot reference (companion to hubspot-setup.md). Bi-directional sync of companies/contacts/deals. Covers why/what, prerequisites, "Connect in 3 Steps", object mapping, extensive property tables (company, contact, deal, analytics read-only), sync directions/options/frequency/auto-push, property mapping UI, read-only props, lifecycle-stage integration, deal pipeline sync + revenue attribution, import sources (Active/Static Lists, Views, All), pushing + auto company association, timeline activities, Marketing-Hub-vs-Sales-Hub feature/tier matrix, target-account sync, sync logs, best practices, troubleshooting.

**Screenshots referenced (exists):**
- `/img/screenshots/integrations-hub.png` (caption: "HubSpot appears in the CRM integrations section with Active status"). A `hubspot-settings.png` and `hubspot-sync-settings.png` and `integration-hubspot.png` exist on disk but are unused here (note: hubspot-setup.md uses `hubspot-settings.png`).

**Claimed product features / UI / labels to verify:**
- Prerequisites: HubSpot admin, Marketing or Sales Hub (paid for full features), API access.
- Connect: **Settings > Integrations > HubSpot (CRM) > Authorize**.
- Object mapping: Companies→Accounts (Domain), Contacts→Contacts (Email), Deals→Opportunities (HubSpot ID).
- Company property internal names: name, domain, industry, numberofemployees, annualrevenue, founded_year, type, is_public, total_money_raised, web_technologies.
- Contact props: email, firstname, lastname, jobtitle, phone, company, lifecyclestage, hs_lead_status.
- Deal props: amount, dealstage, dealtype, hs_acv, hs_arr, hs_mrr, closedate.
- Analytics read-only props: hs_analytics_source, hs_analytics_num_page_views, hs_analytics_num_visits, hs_analytics_first_url.
- Property mapping at **Integrations > HubSpot > Settings** with object tabs + **Add Mapping**; Sync-to-CRM (Don't sync/Fill/Overwrite) + Sync-to-Abmatic (checkbox).
- Read-only props: hs_object_id, createdate, analytics props.
- Lifecycle stages list (subscriber, lead, marketingqualifiedlead, salesqualifiedlead, opportunity, customer, evangelist).
- Target account sync via `hs_is_target_account = true` and `hs_target_account` property (Abmatic→HubSpot sets target-account flag). Verify these property names + behavior.
- Auto company association by domain.
- Timeline activities written to HubSpot.

**Staleness signals:**
- The internal HubSpot property names (especially `hs_is_target_account`, `hs_target_account`, `total_money_raised`, `web_technologies`) must match real HubSpot schema + what the integration actually reads/writes. High verification value.
- Generic hub screenshot reused while HubSpot-specific images exist unused.
- "Connect in 3 Steps" here vs hubspot-setup.md's 7 steps — ensure they don't contradict.
- Marketing/Sales Hub tier matrix (Starter/Professional/Enterprise feature gating) — verify against current HubSpot tiers and what Abmatic actually gates.
- Cross-links `/campaigns/crm-campaigns`, `/audiences/contacts`, `/audiences/crm-sync`.

---

## docPath: docs/integrations/crm/hubspot-setup.md

**Topic / summary:** Step-by-step HubSpot setup ("Connect in Minutes"). 7 steps: start connection, authorize, configure sync settings (object tabs), map fields, set frequency, run first sync, verify. Plus tier feature-availability matrix, HubSpot-specific features (lifecycle, domain matching, timeline), troubleshooting, next steps.

**Screenshots referenced (exists):**
- `/img/screenshots/hubspot-settings.png` (caption: "The Integrations page shows all available CRM connections. HubSpot displays 'Active' status") — NOTE: this is the only CRM doc that uses a non-generic screenshot, but its alt text is "Integrations Hub" and caption describes the hub, so the image content vs caption should be verified.

**Claimed product features / UI / labels to verify:**
- Prerequisites: any HubSpot tier (Free CRM/Starter/Pro/Enterprise); Super Admin or Admin with "App Marketplace Access"; Abmatic account with script installed.
- Feature-by-tier matrix (Company sync, Contact sync, Deal sync [Starter+], Lifecycle sync [Starter+], Custom properties, Higher API limits [Pro+]).
- Check subscription: HubSpot **Settings (gear) > Account & Billing > Products & Add-ons**.
- Connect: **Settings (left sidebar) > Integrations tab > HubSpot (CRM Platforms) > Authorize** (or Settings if connected).
- Authorize: sign in, select portal, **Connect app**.
- Permissions: Read/write companies, contacts, deals, lists; Timeline activities.
- Settings tabs: Accounts, Contacts, **Opportunities (deal sync, read-only in Abmatic)**, Activity Log. (Note: "read-only in Abmatic" for Opportunities — verify; hubspot.md treats deals more fully.)
- Object sync options: Create/Update in HubSpot, Create/Update in Abmatic.
- Default company + contact mappings (uses friendly Abmatic field labels: Company Name, Website [primary key], Industry, Employee Count, Revenue, Country, City / Work Email [primary key], First Name, Last Name, Job Title, Company Name, Phone).
- **Add Mapping**; tip to map custom props (icp_tier, buying_stage).
- Frequency: Manual only / Automatic; recommended-by-DB-size table.
- **Automatically push changes to HubSpot**.
- First sync via **Sync Accounts Manually**; sync-time table; activity-log entries text ("Synced X companies from HubSpot", etc.).

**Staleness signals:**
- "App Marketplace Access" permission name — verify it's the current HubSpot permission label.
- Opportunities tab described as "read-only in Abmatic" here, which may conflict with hubspot.md's deal-sync detail — reconcile.
- Tier matrix may drift with HubSpot's plan changes.
- The activity-log message strings ("Synced X companies from HubSpot") are quoted as if literal UI text — verify wording.
- Cross-links `/audiences/crm-sync`, `/campaigns/overview`, `/integrations/crm/hubspot`.

---

## docPath: docs/integrations/crm/pipedrive.md

**Topic / summary:** Pipedrive integration reference. Sync Organizations/Persons/Deals. Covers why/what, prerequisites, connect + configure (Accounts/Contacts/Opportunities/Activity Log tabs), object mapping, field tables, sync directions/operations/field modes/frequency/auto-push, import (All/Filtered/Pipeline Stage with example filters), push (manual + auto, what-gets-pushed table, required fields), sync logs, best practices, 3 use cases, troubleshooting.

**Screenshots referenced (exists):**
- `/img/screenshots/integrations-hub.png` (caption: Integrations page with Pipedrive). `integration-pipedrive.png` exists on disk but unused.

**Claimed product features / UI / labels to verify:**
- Connect: **Settings → Integrations**, Pipedrive in CRM, **Authorize** → Pipedrive login → grant → active.
- Settings tabs: Accounts (org sync), Contacts (person sync), Opportunities (deal sync), Activity Log.
- Object mapping: Organizations→Accounts (Website domain), Persons→Contacts (Email), Deals→Opportunities (Pipedrive Deal ID).
- Field tables: Org (Name, Web Address→Website match key, Address, Owner, Add Time), Person (Name, Email match key, Phone, Organization, Owner), Deal (Title, Value→Amount, Currency, Stage, Expected Close Date, Status).
- Sync directions / Create+Update ops / Don't sync-Fill-Overwrite modes / Frequency (Manual/24h/6h/1h) / auto-push.
- Import: **Audiences → Accounts/Contacts > Create New > Import from CRM > Pipedrive**; sources All Organizations / Filtered / Pipeline Stage; **Duplicate Handling** (Skip / Update existing / Create duplicates); example filter syntax.
- Push: **Push to CRM > Pipedrive**; what-gets-pushed table (revealed companies/enriched contacts/engagement scores auto if enabled; custom fields + account lists manual only).
- Required push fields: Orgs=Name; Persons=Name+Email; Deals=Title+Org/Person.
- Sync status values: Success / Warning / Error.

**Staleness signals:**
- Uses ✅/❌ emoji in the "What Gets Pushed" table — cosmetic but flag for consistency with house style (other docs use Yes/No text).
- Generic hub screenshot reused; Pipedrive-specific image unused.
- "Create duplicates" as a duplicate-handling option — verify it's a real option (unusual to offer).
- Example import-filter pseudo-syntax (`Value > 10000 AND Stage = "Proposal"`) is illustrative, not literal UI — confirm filter UI matches.
- Cross-links `/audiences/accounts`, `/audiences/contacts`, `/visitor-tracking/company-identification`.

---

## docPath: docs/integrations/crm/activecampaign.md

**Topic / summary:** ActiveCampaign integration (API-key based, not OAuth). Sync contacts (+accounts/deals). Covers why/what, prerequisites, find API credentials, connect via API URL + key, configure sync, object mapping, field tables, sync direction/tabs/operations/frequency/auto-push, import (All/Lists/Tags/Segments), push, sync logs, best practices, 3 use cases, troubleshooting.

**Screenshots referenced (exists):**
- `/img/screenshots/integrations-hub.png` (caption: "Find ActiveCampaign in the CRM integrations section").

**Claimed product features / UI / labels to verify:**
- Find creds in ActiveCampaign **Settings → Developer → API Access** (URL like `https://yourcompany.api-us1.com`).
- Connect: Abmatic **Integrations > ActiveCampaign (CRM) > Authorize** → enter API URL + API Key → **Integrate**. (Note: button is "Authorize" to open, then "Integrate" to save — unusual two-label flow; verify.)
- Object mapping: Contacts→Contacts (Email), Accounts/Organizations→Accounts (Website/Domain), Deals→Opportunities (Match Key "N/A").
- Field tables (Contact, Account) with Custom Fields mapping.
- Sync direction described oddly as "Don't sync / Fill / Overwrite" labeled under "Sync Direction Options" (these are modes, not directions — possible doc confusion).
- Tabs: Accounts, Contacts, Opportunities (deal sync read from AC), Activity Log.
- Sync operations matrix (Create/Update × Abmatic→AC / AC→Abmatic).
- Frequency: Manual / Automatic; recommended-by-size table.
- Auto-push: **Pushing** section → "Automatically push changes to ActiveCampaign."
- Import sources: All Contacts / Lists / Tags / Segments.
- Push: **Push to CRM > ActiveCampaign**, choose a list or default.
- Required push fields: Contacts=Email, Accounts=Website domain.

**Staleness signals:**
- "Sync Direction Options" section actually lists Fill/Overwrite *modes*, not directions — likely a doc inconsistency to fix.
- Deals match key "N/A" — verify deal sync actually works / is supported for ActiveCampaign.
- The "Authorize" then "Integrate" button sequence for an API-key integration should be verified against the real dialog.
- Cross-links `/audiences/overview`, `/visitor-tracking/contact-reveal`, `/campaigns/email-campaigns`.

---

## docPath: docs/integrations/crm/outreach.md

**Topic / summary:** Outreach (sales execution platform) integration. Sync Accounts + Prospects (no deals). Covers why/what, prerequisites, navigate to Automation section, authorize (OAuth), object mapping, field tables, sync tabs/direction/operations/frequency, import (All/Filtered Prospects, All Accounts, Specific Sequences), push (manual + auto-push options), sync logs, best practices, 3 use cases, troubleshooting.

**Screenshots referenced (exists):**
- `/img/screenshots/integrations-hub.png` (caption: "scroll to the Marketing & Sales Automation section to find Outreach").

**Claimed product features / UI / labels to verify:**
- Connect: **Settings > Integrations tab**, scroll to "**Automation Tools**" section (caption says "Marketing & Sales Automation" — MISMATCH), Outreach card, **AUTHORIZE** (uppercase) → Outreach login → approve.
- **SETTINGS** (uppercase) on Outreach card; tabs: Accounts, Contacts, Activity Log (NO Opportunities tab — Outreach deals not synced).
- Object mapping: Accounts→Accounts (Domain), Prospects→Contacts (Email).
- Field tables: Account (Name, Domain→Website, Industry, Company Size→Employee Count, Custom Fields), Prospect (First/Last Name, Email→Work Email, Title→Job Title, Phone, Company).
- Sync direction (Don't sync/Fill/Overwrite); Create/Update operations; Frequency (Manual/24h/12h/6h).
- Import sources: All Prospects / Filtered Prospects / All Accounts / **Specific Sequences** (prospects enrolled in a sequence).
- Push: **Push to CRM > Outreach**; auto-push options "Push all new accounts / Push all new contacts / Push on engagement (threshold)."
- Required push fields: Accounts=Domain, Prospects=Email.

**Staleness signals:**
- Section-name mismatch: body says "Automation Tools," caption says "Marketing & Sales Automation," overview.md says "Marketing & Sales Automation." Pick the live label.
- Uppercase button labels (AUTHORIZE/SETTINGS) — verify the UI actually renders uppercase or normalize.
- "Push on engagement (threshold)" auto-push option — verify it exists with a configurable threshold.
- "Specific Sequences" import source — verify Outreach sequence-based import is real.
- Generic hub screenshot with automation-section caption (cross-cutting #1).
- Cross-links `/audiences/accounts`, `/audiences/contacts`, `/campaigns/email-campaigns`, `/integrations/crm/sync-behavior`.

---

## docPath: docs/integrations/crm/sync-behavior.md

**Topic / summary:** Conceptual deep-dive on Fill vs Overwrite (and Don't Sync) sync modes across all CRMs. Covers why it matters, the 3 modes with scenario tables, configuring per-field sync, recommended settings by field type, sync-direction × mode matrix, two-way conflict resolution (timestamp-based), object-level settings, RevOps best practices, common scenarios, FAQ, troubleshooting.

**Screenshots referenced (exists):**
- `/img/screenshots/integrations-hub.png` (caption: "Click SETTINGS on any connected CRM to access field-level sync configuration"). `crm-sync-settings.png` exists on disk unused.

**Claimed product features / UI / labels to verify:**
- 3 sync modes: Don't Sync / Fill / Overwrite, with exact conflict-resolution behavior (Fill = only empty; Overwrite = always, can CLEAR if Abmatic empty).
- Field-mapping table columns: **CRM Field**, **Sync to CRM** (Don't sync/Fill/Overwrite), **Sync Direction** (visual indicator), **Sync to Abmatic** (checkbox), **Abmatic Field**.
- Access via **Settings > Integrations > [CRM] > Settings > object tab (Accounts/Contacts/Leads/Opportunities)**.
- Sync direction × mode matrix including **Two-way** behavior: "Fill = most recent non-empty value wins", "Overwrite = most recent timestamp wins."
- Two-way conflict resolution: timestamp comparison, per-field granularity, audit trail in Activity Log.
- Object-level: Create/Update (to CRM), Create/Update (to Abmatic); Frequency Manual/Automatic (1-24+ hrs); **Automatically push changes to [CRM]**.
- FAQ claims: per-direction different settings on same field; 30-day backup recovery window via support@abmatic.ai; picklist Fill caveat; required keys (Accounts=Website/Domain, Contacts/Leads=Work Email, Salesforce primary keys on create).

**Staleness signals:**
- "Most recent timestamp wins" two-way conflict resolution is a strong behavioral claim — verify the integration truly does timestamp-based per-field resolution (this is non-trivial and may be aspirational).
- "30-day ... recovery from backups" via support — verify this support policy is current/accurate (commitment-bearing).
- Generic hub screenshot used for a field-level-settings caption; a sync-settings screenshot exists unused.
- `sidebar_position: 5` collides with outreach.md `sidebar_position: 5` and activecampaign-adjacent ordering — sidebar order ambiguity within crm/ folder.
- Cross-links to all four CRM docs + `/audiences/crm-sync`.

---

## docPath: docs/integrations/advertising/linkedin-ads.md

**Topic / summary:** LinkedIn Ads integration. Push account/contact lists to LinkedIn Matched Audiences and create LinkedIn campaigns from Abmatic. Covers why/what, prerequisites, navigate, authorize (OAuth) + permissions, select ad account, integration status, what-gets-synced + match rates, creating Matched Audiences, creating campaigns, managing/disconnecting/reconnecting, best practices, troubleshooting, privacy.

**Screenshots referenced (exists):**
- `/img/screenshots/integrations-hub.png` (caption: "Advertising section with LinkedIn, Google Ads, and Meta"). Many LinkedIn-specific images exist unused (`linkedin-ads-integration.png`, `linkedin-integration.png`, `linkedin-ad-integrations.png`, `linkedin-ad-integrations-bottom.png`).

**Claimed product features / UI / labels to verify:**
- Prerequisites: LinkedIn account, Campaign Manager **Admin** role on an Ad Account, Company Page access.
- Connect: **Integrations (left sidebar) > Advertising section > LinkedIn card > Authorize** → LinkedIn auth → **Allow**.
- Permissions: Manage ad accounts, Read organization data, Manage campaigns.
- Ad-account selector → **Confirm**; "Active" status.
- Match rates table: Company Domains 60-80%, Company Names (secondary), Contact Emails 30-50%.
- Create Matched Audience: **Audiences > Accounts > select collection > More Actions (three dots) > Create LinkedIn Matched Audience**; "24-48 hours" to match.
- Create campaign: **Campaigns > Create Campaign > LinkedIn (under Advertising) > Account or Contact targeting > select collection**.
- Disconnect: **Integrations > LinkedIn > Disable or Disconnect**.
- Minimum audience: "300+ matched members."

**Staleness signals:**
- Frontmatter has NO `sidebar_position`.
- Card is called "**LinkedIn**" in step 1 but doc/title is "LinkedIn Ads" — verify card label.
- Match-rate percentages are specific quantitative claims — verify they're still the figures Abmatic wants to publish.
- "300+ matched members" minimum — verify against LinkedIn's current minimum (LinkedIn has historically used 300; confirm still accurate).
- Generic hub screenshot reused with a three-platform caption; LinkedIn-specific images unused.
- Cross-links `/audiences/linkedin-dmp`, `/campaigns/linkedin-ads`, `/audiences/overview`.

---

## docPath: docs/integrations/advertising/google-ads.md

**Topic / summary:** Google Ads integration. Push account/contact lists to Customer Match audiences across Search/Display/YouTube/Gmail. Covers why/what, prerequisites (eligibility), navigate, authorize + permissions, select ad account, verify, integration status, what-gets-synced (hashed) + match rates, audience sync process, using the integration (account/contact collections), managing/disconnecting/reconnecting, best practices, troubleshooting, privacy/compliance.

**Screenshots referenced (exists):**
- `/img/screenshots/integrations-hub.png` (caption: "Advertising section with Google Ads"). `google-ads-integration.png`, `integrations-google-ads.png`, `google-ads-accounts-list.png`, `google-ads-contacts-list.png` exist on disk unused.

**Claimed product features / UI / labels to verify:**
- Prerequisites/eligibility: account 90+ days old, good payment standing, no policy violations, **$50,000+ lifetime spend (varies by region)**, admin access.
- Check eligibility: **Google Ads > Tools > Audience Manager**.
- Connect: **Integrations (main nav) > Advertising > Google Ads card > Authorize** → Google sign-in → **Allow**.
- Permissions: "View your Google Ads accounts", "Manage your Google Ads campaigns."
- Ad-account selector (name, ID, currency); auto-select if single.
- Verify: card → **Active** (green), **Authorize** button → **Disable**, confirmation toast.
- What-gets-synced (SHA-256 hashed): Work emails 30-50%, Personal emails 60-80%, Phone 40-60%, Combined 50-70%.
- Sync process steps: Prepares data → Creates user list → Uploads user data (1-5 min; Google matches in 24-48h).
- Create audience: **Accounts > Collections > select > more menu (three dots) > Create Google Ads Customer Match** (and same for **Contacts > Collections**); "progress stepper."
- Disconnect: **Integrations > Google Ads > Disable**.
- Minimums: don't sync <1,000 contacts; audience "Too small" under threshold.

**Staleness signals:**
- "$50,000+ lifetime spend" Customer Match prerequisite — this requirement was historically Google's but has changed over time; verify it's still accurate (Google has relaxed/altered Customer Match eligibility). HIGH verification priority — could gate users incorrectly.
- Frontmatter has NO `sidebar_position`.
- Navigation says "**Integrations** in the main navigation" (vs Settings > Integrations elsewhere).
- "Accounts > Collections" / "Contacts > Collections" nav differs from CRM docs' "Audiences > Accounts" — verify the real path (the audiences nav may have changed).
- Match-rate percentages and the personal-email > work-email match-rate claim are specific — verify.
- External link to Google Customer Match Policy — verify URL resolves.
- Cross-links `/audiences/google-customer-match`, `/campaigns/google-ads`, `/audiences/accounts`, `/audiences/contacts`.

---

## Summary table — screenshots per doc

| Doc | # img refs | Distinct images | All exist? |
|-----|-----------|-----------------|-----------|
| overview.md | 8 | 8 | Yes |
| gmail.md | 1 | 1 | Yes |
| google-analytics.md | 2 | 2 | Yes |
| segment.md | 2 | 2 | Yes |
| slack.md | 1 | 1 | Yes |
| crm/salesforce.md | 1 | 1 (hub) | Yes |
| crm/salesforce-setup.md | 1 | 1 (hub) | Yes |
| crm/hubspot.md | 1 | 1 (hub) | Yes |
| crm/hubspot-setup.md | 1 | 1 (hubspot-settings) | Yes |
| crm/pipedrive.md | 1 | 1 (hub) | Yes |
| crm/activecampaign.md | 1 | 1 (hub) | Yes |
| crm/outreach.md | 1 | 1 (hub) | Yes |
| crm/sync-behavior.md | 1 | 1 (hub) | Yes |
| advertising/linkedin-ads.md | 1 | 1 (hub) | Yes |
| advertising/google-ads.md | 1 | 1 (hub) | Yes |

Total image references: **24**. Distinct image files referenced: **11** (all present on disk). `integrations-hub.png` is reused **11** times.

## Top staleness concerns for the planner (ranked)

1. **"Markettailor" old-brand name in segment.md** — Segment destination still documented under the pre-rebrand name + a markettailor catalog URL. Verify and clarify.
2. **Generic `integrations-hub.png` reused 11×** with section/product-specific captions it cannot all satisfy; product-specific screenshots already exist on disk (salesforce/hubspot/pipedrive/linkedin/google-ads/segment/ga/sync-settings) but are unused. Biggest visual-accuracy + reuse opportunity.
3. **Google Ads "$50,000+ lifetime spend" Customer Match eligibility** — likely outdated Google requirement that could wrongly gate users.
4. **5-provider "Abmatic IP" waterfall branded names in overview.md** — verify the exact branded provider names/count exist in the live UI.
5. **Inconsistent navigation + button labels across docs** — "Integrations" vs "Settings > Integrations"; "Connect" vs "Authorize" vs "Integrate"; "Disable" vs "Disconnect"; "Automation Tools" vs "Marketing & Sales Automation"; uppercase AUTHORIZE/SETTINGS in outreach. Normalize to live labels.
6. **Strong behavioral/policy claims to validate**: Salesforce campaign-member auto-status mapping + Activity-as-Task logging; two-way "most recent timestamp wins" per-field resolution + "30-day backup recovery" (sync-behavior); HubSpot `hs_is_target_account`/`hs_target_account` round-trip; Outreach "push on engagement threshold" + sequence-based import; Pipedrive "Create duplicates" option.
7. **Audiences navigation drift**: CRM docs use "Audiences > Accounts/Contacts," google-ads uses "Accounts > Collections / Contacts > Collections" — reconcile against current nav.
8. **Frontmatter inconsistencies**: missing `sidebar_position` on google-analytics, segment, linkedin-ads, google-ads; duplicate `sidebar_position: 2` (gmail/slack) and `: 5` (outreach/sync-behavior) cause ambiguous sidebar ordering.
9. **Overview vs detail-doc vocabulary drift**: overview Sync Frequency labels (Real-time/Hourly/Daily) and Sync Direction labels (Import/Export/Two-way) differ from the per-CRM docs (Every 1h/6h/12h/24h/Manual). Confirm which matches the app.
10. **Meta and Marketo** are advertised as available in overview.md with no setup docs and no steps ("Connect via Integrations page") — verify the cards exist and decide whether stub docs are needed.
