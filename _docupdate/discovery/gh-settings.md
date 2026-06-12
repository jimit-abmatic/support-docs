# Settings Area — Current State Discovery

Source: `/Users/jimabmatic.ai/abmatic/app-frontend` @ commit `3c9e1b26` (2026-06-05). Routes from `src/App.tsx`; components under `src/components/account/`.

## Settings sub-nav (authoritative tab list + labels)

The settings left/inline nav is `src/components/account/AccountInlineNav.tsx`. Current tabs IN ORDER, with exact labels:

1. **Account** → `/settings/account`
2. **Users** → `/settings/users`
3. **Custom Fields** → `/settings/custom-fields`
4. **Integrations** → `/integrations`
5. **Exports** → `/settings/export`
6. **Contact Reveal** → `/settings/contact-reveal`
7. **Usage** → `/settings/usage`
8. **AI Agents** → `/settings/ai-agents`
9. **Website Context** → `/settings/website-context`
10. **API Keys** → `/settings/api-keys`
11. **Change password** → `/settings/change-password`
12. **Notifications** → `/settings/notifications`

> NOTE: There is NO "Privacy" tab in the nav. The `/settings/privacy` route (DataCollectionContainer) is **commented out** in `App.tsx` (lines 429-442) — privacy/data-collection settings are no longer reachable in the product. Docs that describe a Settings → Privacy / Data Collection page are STALE.
>
> Also note: `Slack` (`/settings/slack`) and `Calendar` / `Google Calendar` (`/settings/calendar`) routes exist but are reached from the **Integrations** breadcrumb, not the settings sub-nav.

---

## Current features by page

### Account (`/settings/account`, `AccountContainer.tsx`)
- **Account Details**: Your Email (read-only), Company Name, Website URL. Company Name + Website URL are editable **only for admin role**; non-admins see read-only fields. Save/Saved button.
- **Branding** section (admin-facing): Company Logo with "Fetch Logo from Website" button (auto-fetches logo from website domain, POST `settings/branding {fetchLogo:true}`), Primary Color hex picker ("This color will be used throughout the chat widget", default `#6a11cb`, "Save Branding"). Backed by GET/POST `settings/branding`.
- **Exclude URLs** form (right column, `ExcludeUrlsForm.tsx`).
- **About**: shows "Abmatic AI Version v6.1".
- Footer actions: **Flush Cache**, **Reset Demo Account** (DemoAccountResetButton), **Sign out**.

### Users (`/settings/users`, `UserList.tsx`)
- Grid of users. Columns: Email (editable), User Role (dropdown), Status & Actions, First Name, Last Name, Company Name, Mobile Phone, **Google Calendar** (Connected/Not Connected chip), **Zoom** (Connected/Not Connected chip), **Default AE** (star toggle).
- **Three user roles** now: Regular User (person icon), **Admin** (shield icon), **Sales** (support-agent icon). Sales is a new role.
- Invite User dialog (email + role). Status flow: Active / Pending / Deactivated / NotInvited; actions Invite / Invited / Reactivate / Deactivate.
- **Default AE**: star icon to set/unset the default calendar user (account executive) for meeting routing; only shows for users with Google Calendar connected; admin only. Backed by `integration/googleCalendar/default-calendar-user`.
- **CRM sync**: when Salesforce active → "Salesforce UserId" col + "Pull from Salesforce" + bulk "Import from Salesforce". When HubSpot active → "HubSpot UserId" col + "Pull from HubSpot" + bulk "Import from HubSpot".
- **Default filter**: only users that are BOTH `isActive` AND `isInvited` are shown until the admin types a ≥3-char search — inactive/un-invited users are hidden by default.

### Custom Fields (`/settings/custom-fields`, `CustomFields.tsx`)
- Two accordions: **Accounts** and **Contacts**, each listing "Custom Field 1..N" text inputs. Auto-saves on change (debounced 500ms). "Configure the custom fields for Accounts and Contacts."

### Exports (`/settings/export`, `ExportPage.tsx`)
- CSV export management page. (No major UI change since March in frontend.)

### Contact Reveal (`/settings/contact-reveal`, `ContactReveal.tsx`)
- **Accuracy** slider (10%–100%, step 10, default 50%): "High Volume / Low Accuracy" ↔ "Low Volume / High Accuracy". Greater accuracy = lower volume. Saves via `updateContactRevealAccuracy`.
- **Filters**: a ConditionalFilter ("Set up filters to only reveal the contacts that matter to you.") stored in `account.reveal_filters.account`. Save / Clear All.

### Usage (`/settings/usage`, `Usage.tsx` / `UsageContainer.tsx`)
- **Credits** breakdown by provider with friendly labels + units:
  - `apollo_contacts` → "Apollo Contacts" (credits)
  - `campaign` → "Campaigns" (visitors)
  - `pdl_accounts` → "Abmatic Accounts" (credits)
  - `pdl_contacts` → "Abmatic Contacts" (credits)
  - `pdl_ip_reveal` → "Abmatic IP Reveal" (lookups)
  - `open_ai` → "OpenAI Tokens" (tokens)
  - Shows `used/total <unit> used`, turns red when over quota.
- **Current plan limits** (`CurrentPlanLimits.tsx`): Inbound visitors, Company lookups (each shows limit + "(N left)").
- **Current billing period** (`CurrentBillingPeriod.tsx`).
- Note: PDL-backed providers are surfaced to customers as "Abmatic Accounts / Contacts / IP Reveal" (vendor name PDL hidden).

### AI Agents (`/settings/ai-agents`, `AIAgentsSettings.tsx`)
- Two agent tabs (buttons): **Agentic Chat** and **Agentic Sequence**.
- **Agentic Chat Context** / **Agentic Sequence Context**: large freeform textareas where the customer pastes company/product info (chat) or value-prop/tone/cadence guidance (sequence). "Save Context".
- **Refresh Context** button (Agentic Chat only): "Regenerate context from your scraped website pages using AI." Calls `refreshWebsiteContext`.
- Stored at `account.aiAgents.agenticChat.context` / `account.aiAgents.agenticSequence.context`.

### Website Context (`/settings/website-context`, `WebsiteContextSettings.tsx`)
- Two tabs: **Pages Scraped** and **Settings**.
- **Pages Scraped** tab: AgGrid of scraped pages. Columns: Page URL (title + path), **Summary** (opens dialog with AI summary), **FAQs** ("N FAQs" → dialog of Q/A pairs extracted per page), **Preview** (rendered page content), **Rescrape** (per-page refresh icon), **Delete** (per-page). 3-dot menu → "Delete All Pages".
- **Settings** tab:
  - **Build Website Context**: "Build Website Context" button (kicks off crawl/scrape with live progress: "Scraping in progress... N pages scraped so far", Stop/Retry, polls status every 5s).
  - **Add URL**: manually add a single page URL to scrape.
  - **URL Filtering** with two accordions: **Include URL Prefixes** ("Overrides default skip patterns like /blog, /news") and **Exclude URL Prefixes** ("URLs matching these prefixes will always be skipped"). Adding an exclude prefix that matches existing pages prompts a confirm dialog that will delete matching pages.

### API Keys (`/settings/api-keys`, `ApiKeySettings.tsx`) — NEW
- Generate / Regenerate / Revoke a single account API key. Shows prefix + created date for the active key; full key shown once on generation with copy-to-clipboard ("Store this key securely — it won't be shown after you leave this page.").
- Static info: **Base URL: `https://api.abmatic.ai/v1`**, **Rate limit: 100 requests/minute**, "We recommend rotating your API key every 365 days." "API keys allow programmatic access to your account data via the public API."
- Backed by GET/POST/DELETE `account/api-key`.

### Change password (`/settings/change-password`, `ChangePasswordPage.tsx`)
- Old password + new password fields → "Password changed!" Standard.

### Notifications (`/settings/notifications`, `NotificationSettings.tsx`)
- **Notification Preferences** powered by **Knock** (`@knocklabs/client`). Table "Notification Type" × "In-App" checkbox column.
- Categories with titles/descriptions: Export, Target Groups, Form Fills, Campaigns, IP Reveal, CRM, Accounts, Credits, Other.
- Only the **In-App Feed** channel is active; Email and Slack channel columns are present in code but **commented out / disabled**.

---

## NEW / CHANGED since ~2026-03-01 (with commit refs)

- **API Keys page is brand new** — `adb80e17` "Add API key management settings page" (2026-03-23). Entire `/settings/api-keys` tab, public API (`api.abmatic.ai/v1`, 100 req/min). Almost certainly undocumented.
- **New "Sales" user role + Google-only sales sign-in** — `56cef679` (2026-04-15). Third role alongside Admin/Regular User; sales users get a restricted SalesDashboard (Google Calendar + Zoom integration cards) via `/sales/sign-in`. Role icons added to Users grid + invite form.
- **Calendly-level meeting settings + Default AE** — `a474fca1` (2026-04-14). Per-day hours, event types, and **Default AE** designation. In Users grid this surfaces as Google Calendar / Zoom connection chips + the Default AE star toggle (`integration/googleCalendar/default-calendar-user`).
- **Users list default-filter changes** — `347f44d0` "Hide inactive users by default" + `f5a53e9b` "require BOTH isActive AND isInvited". Default view now hides inactive/un-invited users until a ≥3-char search.
- **HubSpot user import/parity** — `8c7bc308` "HubSpot users at /users + column/selector parity" (#1409). HubSpot UserId column + "Pull from HubSpot" + "Import from HubSpot" bulk action (mirrors existing Salesforce flow).
- **Usage credits revamp** — `265581e1` "fix(credits): admin dashboard accuracy, friendly labels, units, validation" (2026-05-08). Friendly provider labels (Apollo Contacts, Abmatic Accounts/Contacts/IP Reveal, OpenAI Tokens), per-provider units (credits/visitors/lookups/tokens), over-quota red state.
- **Website Context heavy rework** — early March cluster `4ddf4cd8`/`dda69902`/`29f0983d`/`8c33345a`/`5f23ea1e`/`ef56b870`/`4fe0f14d` (2026-03-09) introduced Build Website Context crawl, per-page Summary + **FAQ extraction**, Preview, Rescrape, Include/Exclude URL prefix filtering, Delete All. If docs were finalized Jan–Feb, much of this is new.
- **AI Agents "Refresh Context"** — `8699ccb5` "fix website scraping" added `refreshWebsiteContext` (regenerate agentic-chat context from scraped pages).
- **Admin Oracle / AI agent config foundation** — `83afa02b` "Oracle foundation: admin AI agent config UI" (#1350), `4e3b5341` config import fix. Lives in admin (`src/admin/components/singleAccount/aiAgent/AIAgentContainer.tsx`) + `src/components/oracle/` + Oracle routes `/oracle/goals`, `/oracle/inbox` (ApprovalInbox). This is the new **Oracle** product surface — separate from the customer Settings → AI Agents page; likely undocumented.
- **Admin api-usage panels** — `1cd37eab` "Admin api-usage: PDL/Apollo credit panels + Today/Yesterday/10d presets" (#1379); `3c9e1b26` removed the 5x5 provider from the admin usage dashboard. Admin-only, but informs the Usage credit model.

---

## Doc-impact notes (what to add / fix)

1. **ADD: API Keys page** — entirely new settings tab. Document generate/regenerate/revoke, one-time key reveal, base URL `https://api.abmatic.ai/v1`, 100 req/min rate limit, rotation recommendation.
2. **REMOVE/RETIRE: Privacy / Data Collection settings** — `/settings/privacy` route is commented out and not in the nav. Remove any "Settings → Privacy / Data Collection" doc page or mark deprecated.
3. **UPDATE: Users page** — now has a **Sales** role (3 roles total), Google Calendar + Zoom connection columns, **Default AE** star, HubSpot user import (parity with Salesforce), and a default filter that hides inactive/un-invited users until you search (≥3 chars). Old docs likely show only Admin/Regular User.
4. **ADD: Website Context page** — document the two tabs (Pages Scraped / Settings), Build Website Context crawl + live progress, per-page Summary/FAQs/Preview/Rescrape/Delete, Add URL, and Include/Exclude URL Prefix filtering (incl. the delete-matching-pages confirmation).
5. **ADD/UPDATE: AI Agents page** — Agentic Chat vs Agentic Sequence context tabs + "Refresh Context" (regenerate from scraped pages). Clarify relationship to Website Context.
6. **UPDATE: Usage page** — new provider credit labels and units (Apollo Contacts; Abmatic Accounts/Contacts/IP Reveal; OpenAI Tokens; Campaigns=visitors), over-quota red indicator. Note vendor PDL is surfaced as "Abmatic" to customers — keep docs consistent (don't say "PeopleDataLabs"/"PDL").
7. **UPDATE: Account page** — document the **Branding** section (Fetch Logo from Website, Primary Color for chat widget). Note admin-vs-non-admin field editability. Version label now "v6.1".
8. **UPDATE: Notifications** — currently only the **In-App Feed** channel is enabled (Email/Slack columns disabled). Categories: Export, Target Groups, Form Fills, Campaigns, IP Reveal, CRM, Accounts, Credits, Other. Powered by Knock.
9. **TERMINOLOGY: settings sub-nav order/labels** — use exact labels: "Custom Fields", "Exports" (plural), "Contact Reveal", "AI Agents", "Website Context", "API Keys", "Change password", "Notifications". Integrations / Slack / Google Calendar are accessed via Integrations, not the settings sub-nav.
10. **NEW PRODUCT (cross-area): Oracle** — `/oracle/goals` and `/oracle/inbox` (Approval Inbox) plus an admin AI-agent config. Not part of the customer Settings nav but adjacent; flag for a separate Oracle doc.
