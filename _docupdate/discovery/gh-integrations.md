# Discovery: Integrations Area (from live frontend source)

Repo: `/Users/jimabmatic.ai/abmatic/app-frontend`
Route: `/integrations` -> `src/components/integrations/IntegrationContainer.tsx`
Date of discovery: 2026-06-12. Docs baseline ~Jan-Mar 2026.

---

## 1. Current `/integrations` hub layout (sections, in render order)

`IntegrationContainer.tsx` renders these sections (exact header text):

1. **Customer Relationship Management (CRM)** — "Set the order of CRMs by moving the integrations." Draggable grid (react-grid-layout, 4 cols). CRM cards: **Salesforce, HubSpot, Pipedrive, ActiveCampaign**. Order is persisted to `account.permissions.crmPreference`.
2. **Communications** — "Connect all your communication sources and alert mechanisms." Cards: **Gmail, Slack, Google Calendar, Zoom**.
3. **Conversion tracking** — "With conversion tracking, you can only integrate to one service at a time." Cards: **Google Analytics, Segment**.
4. **Abmatic IP Data Providers** — "5 integrated data providers working in a waterfall to maximize visitor identification." Cards: 5 Abmatic-branded providers (see below).
5. **Ad Networks** — Cards: **LinkedIn, Google Ads, OpenAI, Meta (disabled/Coming Soon)**.
6. **Accounts & Contacts Data** — "Set the order of fetching target data by moving the sources." Cards: **Abmatic, Apollo.io** (draggable).
7. **Marketing & Sales Automation** — "Integrate your automation tools for increased productivity." Cards: **Outreach, Marketo** (Marketo handleAuth is a no-op — non-functional placeholder).

Status chip language everywhere: green "Active" / grey "Inactive". Buttons: "Authorize" / "Disable".

---

## 2. CRMs

**Supported, functional CRMs:** Salesforce, HubSpot, Pipedrive, ActiveCampaign (OAuth except ActiveCampaign which uses URL+API key). **Outreach** lives in the "Marketing & Sales Automation" section (not the CRM grid) and uses `CrmSettings` too. `allCrms` in code = `['salesforce','hubspot','activeCampaign','pipedrive']`; `marketo` exists in types but has no working auth.

**CRM Settings modal** (`crm/CrmSettings.tsx`) — tabs:
- Accounts, Contacts, Opportunities, (Salesforce only: Leads, Campaigns), Activity Log. Outreach hides Opportunities + Activity Log.
- **Object syncing** matrix: per-object Create/Update checkboxes in both directions (CRM<->Abmatic), with a directional "Sync" chip ("Sync both ways" / "Sync into <CRM>" / "Sync into Abmatic" / "Not syncing").
- **Field mapping** table with per-field **Sync to CRM mode dropdown: "Don't sync" / "Fill" / "Overwrite"** (NEW granularity — see §6), plus a "Sync to Abmatic" checkbox. "Add Mapping" button.
- **"Set up filters for pushing records"** (NEW) — a `ConditionalFilter` per Accounts/Contacts tab: "Only records matching these filters will be pushed to <CRM>. Leave empty to push all records." Shows "N filter(s) active" chip.
- **Sync frequency**: Polling = "Only when synced manually" / "Automatically" (every N hours). Pushing = "Automatically push changes to <CRM>" checkbox.
- "Sync <Object>s Manually" button; "Last Sync with <CRM>" / "Last Sync with Abmatic" timestamps.

**Push to CRM** (`target/PushToCrmPopup.tsx`) — "Push to <CRM>" dialog; pushes selected accounts/contacts (selection envelope or filter model) to the CRM. Also surfaced as a **"Push to CRM" action on the account/contact Overview page** (NEW, commit `7686782b`).

**Import from CRM** (`target/ImportFromCrm.tsx`) — pull accounts/contacts from CRM into a list.

**HubSpot user import** (NEW) — `/users` page now has **"Import from HubSpot"** menu item alongside "Import from Salesforce" (gated on each CRM being active). Adds `hubspot_ownerId` column + HubSpot owner selector in segmentation, mirroring Salesforce owners (commit `8c7bc308`). HubSpot OAuth now requests `crm.objects.owners.read` via `optional_scope` (commits `4cee3cf9`, `9570d0e3`) — **tenants connected before this must disconnect+reconnect to get owner sync / meeting-router owner matching.**

**HubSpot forms** (NEW) — HubSpot forms OAuth scope added; HubSpot form picker added to popup/exit-intent widget editor and to Agentic Chat (dedicated `HubspotFormSelect`) (commits `8dc4a816`, `c5d5879c`, `4e825f9b`).

---

## 3. Ad Networks (`AdAccountIntegrations.tsx`)

- **LinkedIn** — OAuth; "Create highly targeted ad audiences on linkedin using your Account lists." (Logo refreshed to lighter purple — commits `40064862`, `fa2e9246`.)
- **Google Ads** — OAuth with **multi-account customer selector dialog** ("Select Google Ads Account"); "Create highly targeted Customer Match audiences..." Disable shows a confirmation popup. Uses `datamanager` OAuth scope for Customer Match (commit `f7bdc132`).
- **OpenAI (OpenAI Ads)** — **NEW** (commit `a1f4518d`, PR #1447). Auth via **API key** (not OAuth) in `OptionsWindowApiKey` dialog. Has a **Settings** dialog showing masked API key + **"Import Campaigns"** button that pulls campaigns/ad groups/ads/analytics from OpenAI Ads (OpenAI = source of truth; async backend import with polling up to ~15 min).
- **Meta** — card present but **disabled/Coming Soon** (Authorize button disabled).

NOTE: AdRoll exists in the type (`adroll`) but is NOT rendered as a card. `5x5` provider was removed from the admin usage dashboard (commit `3c9e1b26`).

---

## 4. Communications

**Gmail** — OAuth card. (Generic blurb.)

**Slack** — Card links to dedicated page **`/settings/slack`** (`slack/SlackSettingsPage.tsx`), a full Slack workspace UI (not just a card). Features:
- Left rail: **Channels** the bot has joined (Create Channel / Browse Channel) + **Active Members** list (searchable, min 4 chars).
- Per-channel tabs: **Filters, Notification Settings, Message Customization, Messages, Members**.
- Per-user tabs: **Filters, Message Customization, Channels, Messages**.
- **Notification Settings** toggles: All Notifications, Account Visitors, Contact Visitors, Account Engagement, Contact Engagement, Form Filled, Summary Info.
- **Message Customisation**: choose which Contact / Account properties appear in notifications (Reset to Defaults). Property list incl. Associated AE, Abmatic Link, Campaigns, UTM Parameters, Confidence, technologies, etc.
- Global setting (Settings dialog): "Suppress Account Notifications When Contact Revealed".
- Can create/rename/delete/join Slack channels and toggle private from the app.
- **Users auto-sync on settings page load** (NEW, commits `1f9cbacf`, `210fea9b`).

**Google Calendar** (NEW area) — "Connect Google Calendar to enable meeting booking through Agentic Chat." OAuth (popup, dedicated calendar client ID — commit `07e0c7e1`). Settings gear opens **Calendar Settings dialog** with two tabs (commit `37640c3b`):
  - **Availability**: Timezone, Demo Meeting Duration (15/30/45/60/90 min), Advance Notice (days), Max Days Ahead, per-day Working Hours editor (`DayScheduleEditor`).
  - **Create Event**: ad-hoc event creation form (name, date, time, duration, attendee emails, timezone, "Add Google Meet link") — POSTs to `integration/googleCalendar/events`.
  - **Meeting Types** (`MeetingTypesSection.tsx`) — CRUD of named meeting types (typeId), used by the meeting router.

**Zoom** (NEW) — "Connect Zoom to create Zoom meeting links." OAuth. Settings dialog books an instant/scheduled Zoom meeting (date/time/duration/email -> returns join URL + meeting ID + password) (commits `aab00146`, `677c8ff2`). After connecting Calendar, app prompts "also connect Zoom?" and vice versa (`ConnectOtherIntegrationDialog`).

NOTE: **Legacy standalone calendar pages were removed** (commit `aab00146`). Calendar/Zoom now live as cards in the Communications row + `/settings/calendar`.

---

## 5. Conversion tracking & IP Data

- **Google Analytics** (GA4) — OAuth, account/property selection, custom dimension selectors.
- **Segment** — public key based.
- Only one conversion-tracking service active at a time.
- **Abmatic IP Data Providers** — now shown as **5 fixed Abmatic-branded waterfall providers** (hard-coded in `IPDataIntegrations.tsx`): "Abmatic IP Primary", "Abmatic IP Enhanced", "Abmatic IP Extended", "Abmatic AI Enrichment", "Abmatic IP Fallback". **Clearbit, Kickfire, ZoomInfo are removed/commented out** of the UI (still referenced as removed in `integrationInterfaces.ts` / `IntegrationContext.tsx`). The whole pool is gated by a single `abmaticIpLookup.isActive` flag.

---

## 6. WHAT'S NEW / CHANGED since ~2026-03-01 (with commit refs)

- **OpenAI Ads integration (NEW)** — API-key auth + async campaign import, Settings dialog. `a1f4518d`, PR #1447.
- **Google Calendar integration (NEW)** — for Agentic-Chat meeting booking; OAuth popup, dedicated client ID. `79155486`, `1f7e3a1f`, `07e0c7e1`, `eb19df14`.
- **Calendar Settings: Availability + Create Event tabs (NEW)** — `37640c3b` (PR #1393), `6409e6d9` (Create Event), plus per-day working-hours schedule.
- **Meeting Types CRUD (NEW)** — `MeetingTypesSection` / `MeetingTypeDialog` for the Meeting Router.
- **Zoom integration (NEW)** — instant meeting booking dialog, cross-prompt with Calendar. `aab00146`, `677c8ff2`, `193cc19f`.
- **Sales user role (NEW)** — `56cef679`. Google-only sign-in at `/sales/sign-in`, a restricted **Sales Dashboard** (`components/sales/SalesDashboard.tsx`) showing only Google Calendar + Zoom integration cards (per-user `calendar_settings`), new `sales` role in invite form / user list. `f61ba347` later surfaced Google Calendar OAuth + axios errors there.
- **CRM sync filters (NEW)** — push-record filter UI in CRM Settings. `e5f327fa` (PR #1312).
- **Push to CRM from Overview page (NEW)** — `7686782b` (PR #1306).
- **Field-mapping Fill vs Overwrite modes (NEW)** — replaces old boolean `fromAbmatic` with `fromAbmaticFill` / `fromAbmaticOverwrite` (`ICrmSettingsFieldMapping.direction`); old `fromAbmatic` marked DEPRECATED in code.
- **HubSpot user import + owners (NEW)** — `8c7bc308` (#1409), `4cee3cf9`, `9570d0e3` (#1410). `hubspot_ownerId` column + owner selector; owners.read optional scope.
- **HubSpot forms in popups & Agentic Chat (NEW)** — `c5d5879c` (#1386), `8dc4a816`, `4e825f9b`.
- **demo_booked field exposed in CRM field selectors (NEW)** — `16d527ed`, `e26a5be5`.
- **Slack auto-sync users on load (NEW)** — `1f9cbacf`, `210fea9b`.
- **Google Ads disable confirmation + Customer Match scope** — `9cc9c49a`, `f7bdc132`.
- **5x5 provider removed** from admin usage dashboard — `3c9e1b26`.
- **Branding/logo refresh** — LinkedIn + OpenAI campaign-card logos `40064862`, `fa2e9246`.

---

## 7. Exact current UI labels / terminology (use these in docs)

- Section headers exactly as in §1.
- "Customer Relationship Management (CRM)", "Communications", "Conversion tracking", "Abmatic IP Data Providers", "Ad Networks", "Accounts & Contacts Data", "Marketing & Sales Automation".
- Buttons: "Authorize", "Disable", "Import Campaigns", "Sync Channels", "Sync Users", "Create Channel", "Browse Channel", "Add Mapping", "Push to <CRM>".
- CRM Settings tabs: "Accounts", "Contacts", "Opportunities", "Leads", "Campaigns", "Activity Log".
- Field-mapping modes: "Don't sync", "Fill", "Overwrite".
- Sync chips: "Sync both ways", "Sync into <CRM>", "Sync into Abmatic", "Not syncing".
- Calendar Settings tabs: "Availability", "Create Event". Fields: "Demo Meeting Duration", "Advance Notice (days)", "Max Days Ahead", "Working Hours", "Add Google Meet link".
- Brand casing: **"HubSpot"** (capital S), **"Apollo.io"**, **"OpenAI"**, **"ActiveCampaign"**, **"Google Ads"**, **"Google Analytics"**.

---

## 8. Doc-impact notes (what docs must ADD / FIX)

ADD (likely missing entirely):
- **OpenAI Ads** integration page (API-key connect + campaign import).
- **Google Calendar** integration + **Calendar Settings (Availability/Create Event)** + **Meeting Types** + tie-in to Agentic Chat meeting booking.
- **Zoom** integration (instant meeting links).
- **Sales user role** + Sales Dashboard + `/sales/sign-in` (Google-only).
- **CRM push filters** ("Set up filters for pushing records").
- **Push to CRM from Overview page**.
- **HubSpot user import** at `/users` + HubSpot owners; note the reconnect-required caveat for owners scope.
- **HubSpot forms** usage in popups/exit-intent and Agentic Chat.
- The new **Fill vs Overwrite** field-mapping mode (docs likely describe an old on/off sync toggle).
- **Slack**: the full `/settings/slack` workspace UI (channels/members/per-channel & per-user tabs, message customization property list, "Suppress account notifications when contact revealed").

FIX / REMOVE (contradicts old docs):
- **IP data providers**: docs that mention Clearbit / Kickfire / ZoomInfo as selectable providers are WRONG — now a fixed 5-provider Abmatic waterfall (single on/off).
- **Marketo / Meta** are non-functional placeholders (Marketo auth is a no-op; Meta is "Coming Soon" disabled). Don't document as connectable.
- **AdRoll** is no longer rendered as a card.
- **Legacy standalone calendar pages were removed** — any doc deep-linking old calendar pages is stale.
- Verify CRM tab availability per-CRM (Outreach has no Opportunities/Activity Log; Leads/Campaigns are Salesforce-only).
- Brand casing: ensure "HubSpot" not "Hubspot".
