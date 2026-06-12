# Doc Audit — Settings Section

Audited the existing Docusaurus markdown under `docs/settings/`. Repo root: `/Users/jimabmatic.ai/abmatic/support-docs`.

- Files audited: 9
- Total screenshot references: 13 (all referenced PNGs verified present on disk under `static/img/screenshots/`)
- Verification note: image *existence* on disk was confirmed for every reference; whether each screenshot still matches the *current live UI* was NOT verified and must be checked downstream.

---

## docs/settings/account.md

**Topic / current content summary:** Account Settings page — the central hub for workspace configuration. Covers Account Details (email/company name/website URL), Branding (company logo + primary color for the chat widget), Page Exclude Rules (wildcard URL patterns to suppress personalization), plus Additional Options (Flush Cache, Sign Out) and an About/version section.

**Screenshots referenced (1):**
- `/img/screenshots/settings-account.png` (line 17) — present on disk.

**Claimed product features / UI / labels / steps:**
- Nav path: Settings (left sidebar) > Account.
- Account Details fields: "Your Email" (display only), "Company Name", "Website URL".
- Admin-only edit gating on Company Name and Website URL; others read-only.
- Branding section with "Company Logo": a "Fetch Logo from Website" button (auto-fetch from domain); logo shown circular in chat widget header; supported formats PNG/JPG/SVG.
- "Primary Color": hex input (e.g. `#6a11cb`) or color picker; used for chat widget header bg, buttons/interactive elements, message styling accents.
- Page Exclude Rules: one URL pattern per line, `*` wildcard, "Save" button. Example patterns table (login, `*/blog/*`, `*/admin/*`, `*example.com/docs/*`).
- Additional Options: "Flush Cache", "Sign Out".
- "About" section showing Abmatic AI version info.

**Staleness signals:**
- Branding section frames logo/primary color as applying to the "chat widget" — needs confirmation the current Account page still hosts widget branding here (may have moved to Agentic Chat / campaign config).
- "Fetch Logo from Website" button label is specific and verifiable.
- "Flush Cache" and "About/version" are the kind of small utility controls most prone to having moved or been removed — verify they still exist on this page.
- No TODO/placeholder/"coming soon" text present.

---

## docs/settings/billing.md

**Topic / current content summary:** Usage & Billing dashboard — monitoring credit consumption across Abmatic services. Lists six credit types and explains each, plus subscription/credit-increase contacts and role-based best practices. This is a usage-monitoring page, not a self-serve billing/payment page.

**Screenshots referenced (1):**
- `/img/screenshots/settings-usage.png` (line 23) — present on disk.

**Claimed product features / UI / labels / steps:**
- Nav path: Settings > Usage (note: doc title is "Usage & Billing" but the sidebar item it references is "Usage").
- Credits Overview with six labeled credit types: "Apollo Contacts", "Campaigns", "Open AI", "Abmatic Accounts", "Abmatic Contacts", "Abmatic IP Reveal".
- "Used/Total Credits Used" display format.
- Contact emails: sales@abmatic.ai (more credits), billing@abmatic.ai (billing questions).

**Staleness signals:**
- Front matter has NO `id` or `sidebar_label` (unlike sibling docs) and no `sidebar_position` — inconsistent metadata; routing relies on filename.
- Title "Usage & Billing" vs nav label "Usage" mismatch — verify the actual settings tab name in live app.
- "Apollo Contacts" credit type names a specific vendor (Apollo) — verify this label still appears; vendor-named credit lines are likely to change.
- "Open AI" label (with a space) names OpenAI explicitly — verify exact label/casing in UI.
- Credit-type set (6 categories) is highly specific and must be reconciled against the live Usage dashboard; categories may have been added/removed/renamed.
- Links to `/faq/billing` (line 105) — verify that target doc exists.
- No payment-method/invoice self-service described (all routed to email) — confirm there is genuinely no in-app billing UI.

---

## docs/settings/contact-reveal.md

**Topic / current content summary:** Contact Reveal Settings — controls how individual contacts visiting the site are identified/revealed. Centers on an accuracy slider (volume vs confidence trade-off, default 50%) and Reveal Filters (account-attribute filters to limit reveals to ICP). Heavy on best-practice tables and credit-impact guidance.

**Screenshots referenced (1):**
- `/img/screenshots/settings-contact-reveal.png` (line 22) — present on disk.

**Claimed product features / UI / labels / steps:**
- Nav path: Settings > Contact Reveal.
- Accuracy slider with percentage ranges (10-100%), stated default 50%.
- "Filters" section: add filter conditions, criteria by account-level attributes (Company Size, Industry, Location, Revenue, Custom Fields). Filters "apply automatically to future reveals."
- Filter operator examples shown as pseudo-query syntax (AND, IN, BETWEEN, >=).

**Staleness signals:**
- The accuracy ranges/labels and "Default: 50%" are very specific numeric claims — verify the slider exists, its range, and default in live UI.
- Filter UI is described generically ("Click to add filter conditions") — needs verification of actual filter builder controls/labels.
- Links to `/visitor-tracking/contact-reveal` and `/audiences/overview` (lines 144, 147) — verify targets exist.
- No TODO/placeholder text.

---

## docs/settings/custom-fields.md

**Topic / current content summary:** Custom Fields — extending account/contact data with named custom field slots. Covers configuring fields (up to 30 each for Accounts and Contacts), targeting/personalizing with them, CRM (Salesforce/HubSpot) field mapping, CSV/API import, plus best practices and troubleshooting.

**Screenshots referenced (1):**
- `/img/screenshots/settings-custom-fields.png` (line 12) — present on disk.

**Claimed product features / UI / labels / steps:**
- Nav path: Settings > Custom Fields; two expandable sections "Accounts" and "Contacts".
- Up to 30 custom fields for accounts and 30 for contacts; slots named "Custom Field 1, 2, 3…"; changes save automatically.
- Campaign targeting: "Add Filter" -> "Custom Fields (Account)" / "Custom Fields (Contact)"; operators is/is not/contains/does not contain/begins with.
- Personalization token syntax: `{{account.field_01}}`.
- CRM mapping under Settings > Integrations (Salesforce field mapping e.g. `Account.Customer_Tier__c`; HubSpot property mapping). Sync direction table (CRM→Abmatic, Abmatic→CRM, Two-way).
- CSV import using columns `field_01`, `field_02` via Accounts > Import from CSV.
- API update with JSON body containing `field_01` etc.

**Staleness signals:**
- "up to 30 custom fields" for each — specific cap that must be verified (caps commonly change).
- Token syntax `{{account.field_01}}` and CSV header `field_01` are load-bearing technical strings — verify exact format still used by product.
- Two-way sync direction claim — verify the product actually supports bidirectional/Abmatic→CRM push for custom fields (often import-only in practice).
- "begins with" operator and the exact operator set need verification against live filter UI.
- Many cross-links (`/audiences/accounts`, `/audiences/contacts`, `/integrations/crm/salesforce`, `/integrations/crm/hubspot`, `/audiences/csv-import`) — verify targets exist.
- No TODO/placeholder text.

---

## docs/settings/data-export.md

**Topic / current content summary:** Data Export — centralized export history page for downloading CSV exports of accounts/contacts. Explains the export-history table columns, export statuses, how to trigger exports from Accounts/Contacts/Target Groups, downloading, file contents, and troubleshooting.

**Screenshots referenced (1):**
- `/img/screenshots/settings-data-export.png` (line 23) — present on disk.

**Claimed product features / UI / labels / steps:**
- Nav path: Settings > Data Export.
- History table columns: "File Name", "No. of Records", "Exported At", "Action".
- Export statuses: "Download", "Processing", "Pushed" (Pushed = exported directly to Salesforce).
- Export trigger flows from Audiences > Accounts / Audiences > Contacts: select via checkboxes or none-for-all, "Export" button in toolbar, name file (letters/numbers/underscores/hyphens only), "Export" to start.
- Export from Target Groups scoped to that group + active filters.
- Email with download link sent when ready; CSV opens in a new tab.
- Stated content of account vs contact exports (fields lists).

**Staleness signals:**
- Front matter has ONLY `sidebar_position: 7` — NO `id`, `title`, or `sidebar_label`. Title is derived from the H1. Most metadata-sparse file in the set; inconsistent with siblings.
- "Pushed" status = "exported directly to Salesforce" — verify this status/Salesforce-push path still exists.
- "30 minutes" processing-timeout guidance and "CSV opens in a new tab" behavior are specific claims to verify.
- The export-from-Contacts flow is asserted but related MEMORY context notes export pipeline work centered on accounts (`export_csv` Lambda) — verify contact export still exists and behaves as described.
- No TODO/placeholder text.

---

## docs/settings/notifications.md

**Topic / current content summary:** Notification Settings — toggling In-App notifications per category. Lists eight notification categories in a table, how to enable/disable (checkbox, no save), and how to view notifications via the bell icon. Role-based best practices included.

**Screenshots referenced (1):**
- `/img/screenshots/settings-notifications.png` (line 22) — present on disk.

**Claimed product features / UI / labels / steps:**
- Nav path: Settings > Notifications.
- Eight categories with an "In-App" checkbox each: "Export", "Target Groups", "Form Fills", "Campaigns", "IP Reveal", "CRM", "Accounts", "Credits".
- Changes take effect immediately, no save button.
- "bell icon" in top navigation opens notification center (view recent, mark read, click through).

**Staleness signals:**
- Table is described as having only an "In-App" toggle column — likely the live UI also has Email (and possibly Slack) columns; doc may understate channels. Verify whether additional notification channels/columns now exist.
- The exact set/labels of 8 categories must be reconciled with live UI (categories commonly added/removed).
- Links to `/integrations/slack` (line 82) — verify target exists.
- No TODO/placeholder text.

---

## docs/settings/script-installation.md

**Topic / current content summary:** Script Installation — installing the Abmatic tracking script. Covers getting the script, install methods across many platforms (Direct HTML, GTM, WordPress, Shopify, Webflow, Next.js, Nuxt/Vue), verifying installation, what the script tracks, privacy/consent, performance, troubleshooting, and advanced config (custom events, debug mode). The longest, most technical doc in the set.

**Screenshots referenced (1):**
- `/img/screenshots/installation-script.png` (line 12) — present on disk. NOTE: filename prefix is `installation-` (not `settings-`), unlike every other screenshot in this section.

**Claimed product features / UI / labels / steps:**
- Nav path: Settings > Installation; click the script code box to copy.
- Script format: `<script async src="https://clients.abmatic.ai/YOUR_SCRIPT_ID.js"></script>`.
- Status indicator on the Installation page: "Active" (green) / "Inactive" (gray); "Last visitor" timestamp.
- Verification via browser console + Network tab (filter "abmatic"/"clients.abmatic", status 200).
- Performance claims table: "~15KB gzipped", async, global CDN, zero blocking.
- Consent integration snippets for CookieBot (`data-cookieconsent="statistics"`) and OneTrust-style gating.
- Advanced: exclude internal traffic via Account Settings > Page Exclude Rules; custom event API `abmatic('track', 'demo_requested', {...})`; debug mode `abmatic('debug', true)`.

**Staleness signals:**
- Screenshot filename `installation-script.png` breaks the `settings-*` naming convention used by all other settings screenshots — possible legacy asset; verify it depicts the current Installation page.
- `clients.abmatic.ai/YOUR_SCRIPT_ID.js` script URL format — verify against the actual snippet the app emits today (delivery host/path is load-bearing; MEMORY confirms `clients.abmatic.ai` is the client-script host, but the exact embed shape should be confirmed).
- "~15KB gzipped" is a hard performance number that may be stale.
- Custom event / debug JS API (`abmatic('track', ...)`, `abmatic('debug', true)`) — verify this global function name and signature actually exist in the current client script; this is a common drift point and may be aspirational.
- "Status" indicator labels ("Active"/"Inactive") and "Last visitor" timestamp need verification on the live Installation page.
- Several integration code snippets (Next.js `_document.js`, Nuxt `nuxt.config.js`) are generic boilerplate — low risk but worth a sanity check.
- Links to `/getting-started/quick-start`, `/visitor-tracking/overview`, `/conversions/form-tracking`, `/conversions/event-tracking` — verify targets exist.
- No TODO/placeholder text.

---

## docs/settings/users.md

**Topic / current content summary:** User Management — inviting team members, roles/permissions, and the user grid. Defines two roles (Admin, Regular User) with a permissions matrix, invite flow, user list columns, statuses, role changes, deactivate/reactivate, and Salesforce user sync/import.

**Screenshots referenced (1):**
- `/img/screenshots/settings-users.png` (line 12) — present on disk.

**Claimed product features / UI / labels / steps:**
- Nav path: Settings > Users; "+ User" button top right.
- Exactly two roles: "Admin" and "Regular User", with a specific permission matrix (e.g., Regular Users cannot manage integrations, invite users, or access account settings/billing; both can use "AI agents (Alex, Clara)").
- Invite flow: enter email, select role, "Invite"; invitee gets email to set password.
- User grid columns: Email, User Role (editable), Status & Actions, First Name, Last Name, Company Name, Mobile Phone; inline-editable cells for admins.
- Statuses: "Active", "Invited", "Deactivated".
- "Deactivate"/"Reactivate" buttons; cannot deactivate self or account owner.
- Salesforce User Sync: "⋮" menu next to search bar > "Import from Salesforce"; extra columns "Salesforce UserId" and "Salesforce Sync" when connected.

**Staleness signals:**
- "two user roles" claim is rigid — verify the app hasn't added more roles (e.g., Viewer/Manager) or renamed "Regular User".
- Permission matrix is highly specific and a prime drift candidate — each row should be verified against current role capabilities.
- "AI agents (Alex, Clara)" naming appears here and in billing.md — verify these agent product names are current (MEMORY references Alex=AI SDR, Clara=AI ABM, but UI naming may differ).
- Inline-editable grid columns (Mobile Phone, Company Name, etc.) and the exact column set need verification.
- "+ User" button label and "⋮ > Import from Salesforce" placement are specific UI claims.
- Links to `/getting-started/quick-start`, `/integrations/crm/salesforce`, `/settings/account`, `/settings/billing`, `/integrations/slack` — verify targets exist.
- No TODO/placeholder text.

---

## docs/settings/website-context.md

**Topic / current content summary:** Website Context — scrapes the customer's site to feed Agentic Chat with page summaries and extracted FAQs. Most feature-dense settings doc: covers the "Pages Scraped" tab (per-page Summary/FAQs/Preview/Rescrape/Delete + delete-all), the "Settings" tab (Build Website Context, Add URL, Include/Exclude URL prefixes), rescraping, best practices (include/exclude page-type tables), and extensive troubleshooting.

**Screenshots referenced (5):**
- `/img/screenshots/settings-website-context-pages.png` (line 33) — present.
- `/img/screenshots/settings-website-context-summary-dialog.png` (line 54) — present.
- `/img/screenshots/settings-website-context-faqs-dialog.png` (line 60) — present.
- `/img/screenshots/settings-website-context-preview-dialog.png` (line 66) — present.
- `/img/screenshots/settings-website-context-settings.png` (line 87) — present.

**Claimed product features / UI / labels / steps:**
- Nav path: Settings (left sidebar) > "Website Context" tab in top navigation; two sub-tabs "Pages Scraped" and "Settings".
- Pages Scraped grid columns/actions: Page URL, Summary (dialog), FAQs (dialog), Preview (dialog), Rescrape (refresh icon), Delete (trash icon); Search bar + Filters dropdown; three-dot menu > "Delete All Pages" with confirm.
- Settings tab: "Build Website Context" button (crawl from domain, follow links, scrape, generate summaries + FAQs); progress bar with page count + "Stop" button; "Add URL" field + "Add URL" button.
- URL filtering: "Include URL Prefixes" (override default skips of `/blog`, `/news`) and "Exclude URL Prefixes" (always skip), chips with X to remove; adding an exclude prefix that matches existing pages prompts to delete them.
- Rescrape single page "takes about 15 seconds".

**Staleness signals:**
- This doc is detailed and dialog-by-dialog specific — every dialog (Summary/FAQs/Preview) and button label must be reconciled with current UI; high verification surface area.
- Claim that `/blog` and `/news` are skipped by default is a specific scraper-behavior assertion to verify.
- "about 15 seconds" rescrape timing — specific claim likely to drift.
- Ties directly to Agentic Chat / AI Agents product naming (Clara, Alex) via Related links — verify those linked docs (`/ai-agents/ai-agents-configuration`, `/campaigns/agentic-chat`, `/ai-agents/ai-agents-overview`) exist.
- No TODO/placeholder text, but the feature is newer/AI-driven and thus more likely to have shifting UI than the older settings pages.

---

## Cross-cutting / top staleness concerns (for the planner)

1. **No literal placeholders found** — there is zero "TODO", "coming soon", or "[placeholder]" text in any settings doc, and all 13 referenced screenshots exist on disk. Staleness here is NOT obvious-text rot; it is **unverified specificity** — every doc makes precise UI/label/numeric claims that need a live-app comparison.

2. **Front-matter inconsistency** — `billing.md` (no id/sidebar_label, no position) and `data-export.md` (only `sidebar_position: 7`, no id/title/sidebar_label) deviate from the well-formed front matter in the other 7 files. Title/nav-label mismatch in billing ("Usage & Billing" doc vs "Usage" nav tab).

3. **Screenshot freshness is unverified** — files exist but currency vs live UI is unknown. The odd one out is `installation-script.png` (breaks the `settings-*` naming convention), suggesting a possibly older/reused asset. Website Context carries 5 screenshots (the bulk of this section's visuals), so any UI drift there has outsized image-rework cost.

4. **Hard numeric / technical claims most likely to be stale:** 30-custom-field cap (custom-fields), 50% default accuracy + slider range (contact-reveal), ~15KB gzipped script size (script-installation), ~15s rescrape time (website-context), 30-min export timeout (data-export). These are the cheapest to verify and the easiest to get wrong.

5. **Load-bearing technical strings to verify verbatim:** script embed `https://clients.abmatic.ai/YOUR_SCRIPT_ID.js`; JS API `abmatic('track', ...)` and `abmatic('debug', true)` (possibly aspirational/nonexistent); personalization token `{{account.field_01}}`; CSV header `field_01`. Errors here directly break customer implementations.

6. **Product-naming and capability claims to reconcile with current product:** AI agent names "Alex" / "Clara" (appear in billing, users, website-context links); credit-type labels incl. vendor-named "Apollo Contacts" and "Open AI" (billing); "Pushed → Salesforce" export status; two-roles-only model (users); two-way custom-field CRM sync; Branding (logo/primary color) living on the Account page vs having moved to Agentic Chat config.

7. **Notification channels likely understated** — notifications.md documents only an "In-App" toggle column; the live UI plausibly includes Email/Slack columns. Worth flagging as a probable gap rather than rot.

8. **Internal cross-links unverified** — many `/faq/billing`, `/visitor-tracking/*`, `/audiences/*`, `/integrations/*`, `/conversions/*`, `/ai-agents/*`, `/campaigns/agentic-chat`, `/getting-started/quick-start` links are asserted; downstream should confirm these target docs exist to avoid broken links.
