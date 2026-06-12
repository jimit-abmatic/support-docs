# Doc Audit — Audiences Section

Scope: every `.md` in `docs/audiences/`. For each doc: topic + current-content summary, screenshots referenced (with on-disk existence check), the product features/UI/labels/steps it CLAIMS exist (so live-app verification can confirm), and staleness signals.

All referenced screenshot files were confirmed to EXIST on disk under `static/img/screenshots/` (or `.../workflows/`). No broken image paths were found. Note: many screenshots are REUSED across docs and several are clearly generic stand-ins (e.g., `account-create-modal.png` used as the "Import from CRM" screenshot in crm-sync.md, and `accounts-list.png` / `accounts-static-list.png` reused as LinkedIn/CSV/filter screenshots) — flagged per-doc as semantic-mismatch staleness.

---

## docs/audiences/overview.md

**docPath:** docs/audiences/overview.md
**Frontmatter:** id `overview`, title "Audiences Overview", sidebar_label "Overview", sidebar_position 1

**Topic / current content:** Top-level landing page for the Audiences section. Explains the value of targeted audiences, the Accounts vs Contacts split, the Collections-vs-All-Accounts tabs, collection summary cards, the collection table columns, and the four list-creation methods (Static, Dynamic, CSV, CRM). Ends with a long marketer-oriented "Building Your First Audience" walkthrough and a Next Steps link list.

**Screenshots referenced:**
- L31 `![Accounts List](/img/screenshots/accounts-list.png)` — EXISTS. Caption claims "260 collections" (hardcoded count — staleness risk).
- L74 `![Account Create Modal](/img/screenshots/workflows/audience-02-create-modal.png)` — EXISTS. (Only doc in the section using the `workflows/` variant of the create-modal screenshot; other docs use `account-create-modal.png` for the same modal — inconsistency.)

**Claims to verify against live app:**
- Left sidebar "Audiences" with sub-items **Accounts** and **Contacts**.
- Tabs **Collections** and **All Accounts**.
- Summary cards: **All Collections, Dynamic, Salesforce/HubSpot, Auto Generated, CSV, Abmatic**.
- Collection table columns: **Name, Total Accounts, Status (Done/Processing/Draft), Last Updated At**.
- **+ Account List** button top-right opens a creation modal with Import (Upload from CSV, Import from CRM) and Create (Static Collection, Dynamic Collection) sections.
- Static flow button label **Save Collection**; Dynamic flow button label **Save Collection** (NOTE: accounts.md/contacts.md say the dynamic button is **Save Dynamic Collection** — inconsistency to resolve).
- **Dynamic Collection "Set Refresh Frequency"** step with options **Real-time / Hourly / Daily** — POTENTIALLY FABRICATED; no other audiences doc mentions a user-selectable refresh frequency, and dynamic collections are described elsewhere as auto-updating on visitor match. HIGH staleness/accuracy risk.
- CSV: **Maximum file size 100 MB**, **Maximum records 10,000 per import** (conflicts with accounts.md/contacts.md which say **max 1,000 rows per import**, and with csv-import.md which says **10,000 rows / 200 columns**). DIRECT CONTRADICTION across docs.
- CRM import sources table: Salesforce (Accounts, Contacts, Campaigns, Reports), HubSpot (Companies, Contacts, Lists), Pipedrive (Organizations, People).
- Activation match rates: LinkedIn **60-80%**, Google **40-60%** (verify these numbers are still claimed by product/marketing).
- Campaign builder: **Campaigns → Create Campaign**, Audience tab, select collection; walkthrough uses **+ Campaign** button and **Inbound** campaign type.
- Contact sources: Form Submissions, **Contact Reveal** (IP intelligence), CRM Import, CSV Upload.

**Staleness signals:**
- Hardcoded "260 collections" in image caption — will drift.
- "Set Refresh Frequency (Real-time / Hourly / Daily)" likely does not exist in the product — verify and remove if fabricated.
- CSV limits (100 MB / 10,000) contradict sibling docs (1,000 rows). Numbers must be reconciled section-wide.
- "Save Collection" vs "Save Dynamic Collection" button-label inconsistency vs other docs.
- Double `---` separator at L327-328 (cosmetic).
- Uses `workflows/audience-02-create-modal.png` while every other doc uses `account-create-modal.png` for the same UI — pick one.

---

## docs/audiences/accounts.md

**docPath:** docs/audiences/accounts.md
**Frontmatter:** id `accounts`, title "Account Lists", sidebar_position 2

**Topic / current content:** Deep-dive on account lists/collections. Covers Collections vs All Accounts tabs, collection types, Static vs Dynamic comparison, the four creation methods with step-by-step instructions, enriched account data fields, use-case recipes, collection status/quick actions/editing, automatic enrichment, Company Reveal integration, CRM sync, best practices, troubleshooting, and a large **Recommend by AI** section.

**Screenshots referenced:**
- L12 `accounts-collections-final.png` — EXISTS
- L75 `account-create-modal.png` — EXISTS
- L91 `accounts-static-list.png` — EXISTS
- L123 `accounts-dynamic-list.png` — EXISTS
- L400 `recommend-by-ai-interface.png` — EXISTS
- L430 `recommend-by-ai-results.png` — EXISTS

**Claims to verify against live app:**
- Two tabs: **Collections** (recommended) and **All Accounts**.
- Collection types: Dynamic, Static, CSV, Salesforce/HubSpot, Auto Generated, Abmatic Filters.
- **+ Account List** button top-right; modal with Import (Upload from CSV, Import from CRM) + Create (Static Collection, Dynamic Collection).
- Static builder UI: **Name** field, **Select Filters** panel, Selector/Operator/Value + checkmark, **+ Rule** (AND default), **Preview** (top right), duplicate-handling radio (Skip and keep existing fields / Overwrite existing fields / Update only missing fields), **Save**.
- Operator names referenced in examples: `is`, `isAbove`, `isBelow` (camelCase — verify these are the actual UI labels vs human-readable "is above").
- Dynamic builder: auto-generated name, **Save Dynamic Collection** button (top right); right-panel copy "New visitors that match your filters will automatically be added to this collection."
- CSV import: **max 1,000 rows per import** (CONTRADICTS overview.md and csv-import.md which say 10,000), Website required, duplicate handling labels "Skip / Overwrite All / Overwrite Missing".
- CRM import: choose **Salesforce, HubSpot, or Pipedrive**; build filters w/ CRM-native fields; Preview; Import.
- Enrichment fields: Fit Score, Engagement Score, Temperature (Hot/Warm/Cold), Overall Score, Funding Stage, Parent Company, Technologies, etc.
- Collection status values: Draft, Processing, Done, Error.
- **Company Reveal** collection (auto-generated, cannot be deleted, real-time).
- Path **Audiences > Accounts** for Company Reveal collection.
- **Recommend by AI**: reached via creating a **Static Collection** then navigating to the **Recommend by AI** view; chat UI with "Ask the AI..." input, four sample prompts, **Estimated Accounts** count, **Preview** button, **See Applied Filters** accordion, persistent follow-up conversation.

**Staleness signals:**
- CSV row cap "1,000" contradicts overview.md/csv-import.md (10,000). Pick the true number.
- Operator casing (`isAbove`/`isBelow`) may not match the live UI's display labels.
- "Recommend by AI" sample prompts mention "SaaStr event" / "AE1/AE2" — verify these are the actual seeded prompts, not invented examples.
- Heavy marketing prose ("convert," "in minutes not hours") — not stale per se but verify feature claims (e.g., "30,000+ accounts," "100+ firmographic data points," "AI-powered scoring") are still accurate.
- Claims a `Recommend by AI` lives "on top of a new collection" reached only via Static Collection — verify entry point still matches UI (there is also an `accounts-ai-recommendation.png` asset on disk that is NOT used here, hinting the UI/entry may differ).

---

## docs/audiences/contacts.md

**docPath:** docs/audiences/contacts.md
**Frontmatter:** id `contacts`, title "Contact Lists", sidebar_position 3

**Topic / current content:** Mirror of accounts.md for contacts. Covers Collections vs All Contacts, collection types, Static vs Dynamic, four creation methods, an extensive **Available Contact Filter Fields** reference (Geolocation, IP Lookup, CRM Salesforce, CRM HubSpot, Custom Fields), enriched contact data fields, use cases, contact-account linking, enrichment, list management, CRM sync + Push to CRM, **Person Reveal** integration, best practices, troubleshooting.

**Screenshots referenced:**
- L12 `contacts-collections-final.png` — EXISTS
- L82 `contact-create-options.png` — EXISTS
- L98 `contacts-static-list.png` — EXISTS
- L128 `contacts-dynamic-list.png` — EXISTS

**Claims to verify against live app:**
- Tabs **Collections** and **All Contacts**; department quick-filters (Marketing, Sales, Executive).
- Collection types listed: Dynamic, HubSpot, Salesforce, **Salesforce Campaign Imports**, CSV, Abmatic Filters, Abmatic, Auto Generated.
- Contact grid columns: work email, full name, Temperature, website engagement score, job title, seniority, location, phone.
- **+ Contact List** modal: Import (Upload from CSV, Import from CRM) + Create (Static, Dynamic).
- Static/Dynamic builder identical to accounts; **Save** / **Save Dynamic Collection**.
- CSV import: **Work Email OR LinkedIn URL required**, **max 1,000 rows** (CONTRADICTS csv-import.md 10,000).
- CRM import record types: Salesforce (Contacts and Leads), HubSpot (Contacts), Pipedrive (Persons).
- Filter selector field names (verify exact labels): **Person Job Title Role / Sub Role / Levels**, Company Name, Company Size, Country, City.
- CRM Salesforce filter fields: Account Name, Account Phone, Billing/Shipping City/Country, Temperature, Total/Website/LinkedIn Engagement Score, **Jigsaw Company ID** (data.com).
- CRM HubSpot filter fields: Company Domain Name, Company Name, Deal Name.
- Custom (Account) fields: "Natural name", "Company Logo".
- Collection status values include a **Preview** state (in addition to Draft/Processing/Done/Error).
- **Push to CRM**: Create as Contact (requires LastName, AccountId recommended) / Create as Lead (requires LastName, Company).
- **Person Reveal** section, and access path **Reveal > Contacts** (NOTE: this differs from the "Contact Reveal" terminology used in overview.md and crosslinks — terminology inconsistency).

**Staleness signals:**
- "1,000 rows" CSV cap contradicts csv-import.md/overview.md.
- **Jigsaw Company ID / data.com** reference is dated terminology (Jigsaw/Data.com is a legacy Salesforce product) — verify the field still surfaces; likely stale.
- Terminology drift: "Person Reveal" + path **Reveal > Contacts** here, vs "Contact Reveal" elsewhere and crosslink to `/visitor-tracking/contact-reveal`. Reconcile product name.
- Filter-field reference tables are very granular and high-risk for label drift — every Selector name needs live verification.
- Related-doc link to `/visitor-tracking/contact-reveal` — verify that path exists in current docs.

---

## docs/audiences/filters.md

**docPath:** docs/audiences/filters.md
**Frontmatter:** id `filters`, title "Using Filters to Build Audiences", sidebar_label "Filters", sidebar_position 3 (NOTE: same sidebar_position 3 as contacts.md — collision; Docusaurus will order ambiguously).

**Topic / current content:** Comprehensive reference for the filter builder. Explains Selector+Operator+Value structure, where filters appear, filter categories (Geolocation, Firmographics, Behavioral, UTM, Engagement/Scoring, Contact/IP Lookup, CRM, Custom, Language), standardized field values (seniority, functions, GICS industries, business classification, company-size buckets), condition reference by field type, AND/OR + Groups logic, step-by-step audience building, common filter recipes, dynamic vs static, discovery workflow, best practices, troubleshooting.

**Screenshots referenced:**
- L28 `accounts-static-list.png` — EXISTS (reused as generic "Filter Builder Interface").
- L348 `wp-audience-tab.png` — EXISTS (used for the "Filter Groups with AND/OR" example; same image reused in target-groups.md).

**Claims to verify against live app:**
- Filter structure Selector + Operator + Value; **+ Rule**, **checkmark** confirm, **Save**.
- Filters appear in: Account Collections, Contact Collections, **Campaign Audiences (Campaigns > Edit Campaign > Audience tab)**, and a **FILTERS button** on the Collections page.
- Selector fields claimed to exist: Country, City, Region, Time Zone; Company Name, Domain, Employee Count, Annual Revenue, Industry, Sub-Industry, Company Type, Company Size, Founded Year; Total Page Views, Total Sessions, Visited Pages, Referrer; utm_campaign/medium/source/term/content; Temperature, Total/Website/LinkedIn Engagement Score, **Account List**; Person Job Title Role/Sub Role/Levels; Salesforce + HubSpot CRM fields; Custom Fields (Account), **Query String**; **Preferred Language**.
- Standardized values: seniority buckets (C-Level, VP Level, Director Level, Manager Level, Senior IC, Individual Contributor, Entry Level); **Business Classification** values incl. "SAAS"; GICS industry list; company-size buckets (1-10 … 10001+).
- Condition operators by type: text (is, is not, contains, does not contain, begins with, ends with); numeric (is, is above, is below, is between); enum (is any of, is not any of / is none of).
- The "Inbound Enterprise" campaign worked example (Country any-of 7 countries, Account List none-of "Abmatic AI Customer List", grouped OR Employee Count > 501 / Company Size buckets) — verify this matches the screenshot and real product.

**Staleness signals:**
- **sidebar_position 3 collides with contacts.md** — likely a real ordering bug to flag for the planner.
- Filter builder screenshot is a reused account-static-list image, not a dedicated filter-builder shot — semantic mismatch.
- Uses human-readable operator labels ("is above", "is any of") here, while accounts.md/target-groups.md use camelCase ("isAbove", "isAny") — the docs disagree on the actual UI labels; needs a single source of truth.
- "Business Classification IS SAAS" example uses a field not clearly listed in contacts/accounts filter tables — verify field exists.
- "Query String" and "Preferred Language" selectors — verify they're real.
- The `wp-audience-tab.png` ("wp" = website personalization) is an old naming; the campaign worked-example narrative is detailed and brittle to UI change.

---

## docs/audiences/target-groups.md

**docPath:** docs/audiences/target-groups.md
**Frontmatter:** id `target-groups`, title "Target Groups", sidebar_position 4

**Topic / current content:** Frames Collections as "Target Groups" — organizing accounts/contacts into segments that power campaigns. Covers Static vs Dynamic decision, all group types, creation steps, a Filter Operators reference, real-world use cases by role (ABM / Demand Gen / Sales), processing status, using groups in campaigns (Website Personalization, Ads, **AI Sequences**, CRM Sync), management/quick actions, **Auto-Generated Groups** (Company Reveal, Campaign Audience, User Associated Lists, Form Submission), best practices, troubleshooting.

**Screenshots referenced:**
- L12 `accounts-collections-final.png` — EXISTS (reused from accounts.md)
- L83 `account-create-modal.png` — EXISTS (reused)
- L105 `accounts-static-list.png` — EXISTS (reused as "Filter Builder")
- L186 `wp-audience-tab.png` — EXISTS (reused; same "Inbound Enterprise" example as filters.md)

**Claims to verify against live app:**
- "Target Groups" terminology equated with "Collections" — verify the product actually uses "Target Groups" anywhere, or whether this is doc-only framing (the UI elsewhere is just "Collections" / "Account List" / "Contact List"). POTENTIAL TERMINOLOGY MISMATCH.
- Group types: Dynamic, Static, CSV Import, CRM Sync, Auto Generated, Abmatic Filters.
- Creation via **+ Account List / + Contact List**; Import + Create sections.
- Filter operators table uses camelCase: **is, isNot, contains, doesNotContain, beginsWith, endsWith, isAbove, isBelow, isBetween, isAny, isNone, isAll**. NOTE **isAll** ("must have all tags") appears ONLY here — verify it exists; tags concept not referenced elsewhere.
- Group processing status: Draft, **Preview**, In Queue, Processing, Done, Error.
- Using in campaigns: Audience tab → Account List condition; **AI Sequences** campaign type (verify name — elsewhere referenced as "AI Sequences"/"Agentic"); CRM auto-push.
- Auto-Generated groups + naming patterns: "Campaign Type: Campaign Name", "User Name: Associated Account List (Last 90 Days)", "Form Group: form-name". Verify these exact naming conventions still hold.
- Quick actions: Search, Filter by type via summary card, Sort By (default Last Updated At), inline Rename (auto-saves), Edit Filters, Delete.

**Staleness signals:**
- Whole-doc premise "Target Groups (Collections)" — if the product never uses "Target Groups" the title/framing is stale and confusing vs the rest of the section that says "Collections / Lists."
- `isAll` operator + "Tags" concept appears nowhere else — likely fabricated or rare; verify.
- Operator casing conflicts with filters.md (human-readable) — same section-wide inconsistency.
- Reuses generic screenshots (collections, create-modal, static-list, wp-audience-tab) — none specific to "target groups"; no dedicated visuals.
- Auto-generated group naming patterns are very specific and brittle.

---

## docs/audiences/csv-import.md

**docPath:** docs/audiences/csv-import.md
**Frontmatter:** id `csv-import`, title "CSV Import", sidebar_position 5

**Topic / current content:** Dedicated CSV import guide. File prep specs, navigation to upload, upload+map flow, required fields (account: website/domain; contact: work_email OR linkedin_url), column-mapping reference tables, custom fields (field_01–field_30), duplicate handling, post-upload processing pipeline + status, auto-enrichment tables, CRM auto-push, example CSV snippets, best practices, troubleshooting, and a pointer to the identical contacts flow.

**Screenshots referenced:**
- L12 `accounts-list.png` — EXISTS (reused; captioned "Account Collections showing CSV imports").
- L49 `account-create-modal.png` — EXISTS (reused).
- L292 `contact-create-modal.png` — EXISTS.

**Claims to verify against live app:**
- File specs: format .csv, UTF-8, **Max Rows 10,000 per import**, **Max Columns 200**, headers required.
- Navigation: **Audiences → Accounts/Contacts → + Account List/+ Contact List → Upload from CSV**.
- Upload+map flow ends with button **Create Mapping** (NOTE: other docs say the CSV import button is **Import** — label inconsistency).
- Required: Account = Website/Domain (`website` or `domain`); Contact = Work Email (`work_email`/`email`) OR LinkedIn URL (`linkedin_url`).
- Auto domain normalization (`https://www.EXAMPLE.com/page` → `example.com`).
- Column-mapping accepted header aliases (domain/website, company/name, employees/employee_count, etc.).
- Custom fields **field_01 through field_30**, defined in **Settings → Custom Fields**.
- Duplicate handling labels: **Skip / Overwrite All / Overwrite Missing** (NOTE: differs from accounts.md "Skip and keep existing fields / Overwrite existing fields / Update only missing fields" — label inconsistency).
- Processing status codes: **IN_QUEUE, PROCESSING, DONE, ERROR** (uppercase — verify these are user-visible).
- Email notification sent on completion.
- Processing-time table by import size (verify still represented in UI/marketing).

**Staleness signals:**
- **Max Rows 10,000 here vs "max 1,000 rows per import" in accounts.md & contacts.md** — hard contradiction; also the intro hero text says "bulk import 10,000 records." Reconcile the true cap.
- Overview.md adds a **100 MB** file-size limit not mentioned here — reconcile.
- Button label **Create Mapping** vs **Import** across docs.
- Duplicate-handling option labels differ from accounts/contacts docs.
- Uppercase status codes (IN_QUEUE) may be internal, not user-facing.
- Screenshots are all reused/generic (no dedicated CSV upload or column-mapping screenshot, even though `csv-01-upload-page.png` and `accounts-csv-import.png` exist on disk and are NOT used) — likely better assets available.

---

## docs/audiences/crm-sync.md

**docPath:** docs/audiences/crm-sync.md
**Frontmatter:** id `crm-sync`, title "CRM Sync", sidebar_position 6

**Topic / current content:** Bidirectional CRM sync guide. Supported-CRM matrix, getting-started (connect via OAuth, import from CRM, configure sync settings), sync directions (import/export/two-way), import filters + options + duplicate handling, push (manual/auto) + required fields, field mapping (default + custom field_01–field_30), record matching, sync logs/monitoring + common errors, best practices, use cases, troubleshooting.

**Screenshots referenced:**
- L46 `integrations-hub.png` — EXISTS ("CRM Integrations Hub").
- L69 `account-create-modal.png` — EXISTS but SEMANTIC MISMATCH: captioned "Import from CRM" while the asset is the generic create-list modal.

**Claims to verify against live app:**
- Supported CRMs: **Salesforce, HubSpot, Pipedrive, ActiveCampaign** (NOTE: ActiveCampaign appears here but is absent from accounts.md/contacts.md/overview.md CRM lists, which only list Salesforce/HubSpot/Pipedrive — verify ActiveCampaign is actually supported).
- Object support matrix per CRM (Accounts/Contacts/Leads/Opportunities; HubSpot Companies/Deals; Pipedrive Organizations/Persons/Deals).
- Connect path: **Settings > Integrations** → CRM card → **Authorize** → OAuth → shows **Active**.
- Import path: Accounts/Contacts → **+ Account List/+ Contact List** → **Import from CRM** → filters → Preview → **Pull** (NOTE: button "Pull" here vs "Import" elsewhere).
- Sync settings: **Settings > Integrations > [CRM] > Settings**, configure direction + frequency.
- Import options: All Records / Filtered / List-View.
- Duplicate handling: Skip / Overwrite All / Update Missing.
- Push to CRM: select records → **Push to CRM** → Contact or Lead → review mappings → **Push**; Auto-Push toggle in sync settings.
- Required fields per object (Salesforce Contact: LastName; Lead: LastName+Company; etc.).
- Default field mappings tables (Abmatic↔SF/HS/PD).
- Custom field mapping uses **field_01 through field_30**.
- Record matching order (CRM ID → domain/email → create).
- Sync log fields (Resource Type, Status, Direction, Timestamp, Message) and error codes (REQUIRED_FIELD_MISSING, INVALID_FIELD, INSUFFICIENT_ACCESS, DUPLICATE_VALUE).

**Staleness signals:**
- **ActiveCampaign listed as supported here but nowhere else** — verify; if accurate, other docs are stale; if not, this row is stale.
- "Import from CRM" screenshot is the generic create-modal — should be a real CRM import screenshot (asset `accounts-crm-import.png` exists on disk and is unused).
- Button labels inconsistent across section: **Pull** (here) vs **Import** (overview/accounts/contacts) vs **Create Mapping** (csv-import).
- Salesforce-specific error codes / data.com-era assumptions — verify still surfaced.
- Related links point to `/integrations/crm/salesforce` and `/integrations/crm/hubspot` — verify those doc paths exist.

---

## docs/audiences/linkedin-dmp.md

**docPath:** docs/audiences/linkedin-dmp.md
**Frontmatter:** id `linkedin-dmp`, title "LinkedIn Matched Audiences", sidebar_label "LinkedIn DMP" (NO sidebar_position — will fall back to default ordering).

**Topic / current content:** Pushing Abmatic account/contact collections to LinkedIn as Matched Audiences. Value prop, how-it-works diagram, connect LinkedIn Ads, prepare list, create matched audience, match-rate expectations + improvement tips, sync behavior/status, dynamic-vs-static, using in Campaign Manager, campaign strategies, multi-touch coordination, best practices, **audience size minimums (300+ members)**, troubleshooting, privacy.

**Screenshots referenced:**
- L52 `integrations-hub.png` — EXISTS.
- L80 `accounts-list.png` — EXISTS but SEMANTIC MISMATCH: captioned "Creating LinkedIn Matched Audience from collection" while asset is the generic accounts list.

**Claims to verify against live app:**
- Connect path: **Integrations > LinkedIn Ads** → **Connect** → LinkedIn OAuth → select Ad Account. (NOTE: says "Integrations" / "Settings > Integrations" inconsistently with crm-sync which uses "Settings > Integrations.")
- Create flow: Audiences > Accounts/Contacts → select collection → **More Actions (three dots)** → **Create LinkedIn Matched Audience** → confirm. Three sync steps: Preparing data / Uploading CSV / Creating Matched Audience.
- Sync status values: **Syncing / Active / Error**.
- Dynamic auto-update every 24h; static updates on edit; CSV needs manual re-push; CRM-synced updates on CRM sync.
- LinkedIn minimums **300 members** for Sponsored Content / Message Ads / Dynamic Ads / Lead Gen Forms.
- Match-rate guidance (70%+/50-70%/<50%) and improvement tips.
- Prerequisite: admin access to LinkedIn Campaign Manager.

**Staleness signals:**
- No `sidebar_position` (google-customer-match.md also lacks one) — these two land in default order while siblings are explicitly positioned; flag for ordering consistency.
- Action menu naming "**More Actions** (three dots)" here vs google-customer-match.md "**Actions menu** (three dots)" — reconcile the real menu label, and confirm a push action lives in a row/kebab menu (not a button).
- Generic accounts-list screenshot stands in for the LinkedIn-specific create action — no real LinkedIn UI shown.
- LinkedIn min-audience (300) and match-rate numbers are external/LinkedIn-controlled — verify still current.
- Privacy section says "Company data uploaded to LinkedIn's DMP" — verify product still uses the DMP/Matched-Audiences mechanism and the "LinkedIn DMP" label.

---

## docs/audiences/google-customer-match.md

**docPath:** docs/audiences/google-customer-match.md
**Frontmatter:** id `google-customer-match`, title "Google Customer Match", sidebar_label "Google Customer Match" (NO sidebar_position).

**Topic / current content:** Pushing Abmatic contact lists to Google Ads Customer Match. Value prop, how-it-works, Google Ads eligibility requirements, data requirements, connect Google Ads, prepare list, push flow + timing, match-rate expectations (B2C vs B2B), sync behavior/status, using audiences in Google Ads (campaign types, observation vs targeting, Similar Audiences), ABM multi-touch coordination, privacy/compliance, best practices, troubleshooting, comparison table vs LinkedIn DMP/Retargeting.

**Screenshots referenced:**
- L72 `integrations-hub.png` — EXISTS.
- L84 `contacts-list.png` — EXISTS (captioned "Contact collections with email data" — generic, acceptable).

**Claims to verify against live app:**
- Connect path: **Settings > Integrations** → scroll to Advertising section → **Google Ads** → **Connect** → Google OAuth → select Google Ads account → authorize.
- Push flow: Audiences > Contacts → select collection → **Actions menu (three dots)** → **Push to Google Ads** → choose account → name audience → **Create**.
- Sync status indicators: Processing / Uploading / Matching / Ready / **Too Small** / Error.
- Eligibility requirements (Google-controlled): 90-day account history, payment history, policy compliance, **$50,000+ total spend (varies by region)**, min **1,000 contacts**.
- SHA-256 hashing claim; Similar Audiences (lookalikes) creation.
- Comparison table: Customer Match (email/phone, B2B 20-40%), LinkedIn DMP (company match, B2B 60-80%), Retargeting (cookie-based).

**Staleness signals:**
- No `sidebar_position`.
- Action-menu label differs from linkedin-dmp.md ("Actions menu" vs "More Actions").
- **Google policy facts are highly time-sensitive**: the **$50,000 spend** eligibility threshold and **Similar/Lookalike Audiences** are both stale risks — Google deprecated/sunset Similar Audiences (broadly ended ~2023) and Customer Match eligibility rules have changed. HIGH staleness/accuracy risk; verify against current Google Ads policy before publishing.
- "Gmail" / "Discovery" campaign types — Google has renamed/retired some (Discovery → Demand Gen). Verify campaign-type names.
- Push is from **Contacts** here (email-based) while LinkedIn doc pushes from Accounts/Contacts — confirm Google push is contact-only in product.
- Generic integrations-hub + contacts-list screenshots; no real Google-push UI shown.

---

# Cross-cutting issues for the planner

1. **CSV row-limit contradiction (HIGH):** accounts.md & contacts.md say **max 1,000 rows**; csv-import.md & overview.md say **10,000** (+ overview adds 100 MB / 200 columns from csv-import). One true number needed section-wide.
2. **Operator-label inconsistency (HIGH):** filters.md uses human-readable ("is above", "is any of"); accounts.md / target-groups.md use camelCase ("isAbove", "isAny", and a unique unverified **isAll**). Establish the real UI labels.
3. **Button/menu label drift:** list-creation/import button is variously **Import / Pull / Create Mapping / Create**; dynamic save is **Save Collection** vs **Save Dynamic Collection**; row action menu is **Actions menu** vs **More Actions**. Normalize after live verification.
4. **Terminology drift:** "Target Groups" (target-groups.md) vs "Collections/Lists" everywhere else; "Person Reveal"/"Reveal > Contacts" (contacts.md) vs "Contact Reveal" (overview + crosslink `/visitor-tracking/contact-reveal`).
5. **CRM list mismatch:** ActiveCampaign supported only in crm-sync.md; Salesforce/HubSpot/Pipedrive everywhere else. Verify.
6. **Likely-fabricated/stale feature claims to verify or remove:** overview.md "Dynamic refresh frequency (Real-time/Hourly/Daily)"; target-groups.md `isAll`/Tags; google-customer-match.md **$50k spend threshold** + **Similar Audiences** + "Discovery" campaign type; contacts.md **Jigsaw/Data.com Company ID**.
7. **Frontmatter issues:** filters.md and contacts.md share **sidebar_position 3** (collision); linkedin-dmp.md and google-customer-match.md have **no sidebar_position**.
8. **Screenshot reuse / better assets unused:** Several docs reuse generic `accounts-list.png` / `account-create-modal.png` / `accounts-static-list.png` for LinkedIn/Google/CRM/filter/CSV contexts even though dedicated assets exist on disk and are unused (`accounts-crm-import.png`, `accounts-csv-import.png`, `csv-01-upload-page.png`, `accounts-ai-recommendation.png`, `contacts-filter-panel.png`, etc.). No broken paths, but semantic-mismatch and missed-asset opportunities throughout.
