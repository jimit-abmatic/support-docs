# Audiences area — current product state (from live frontend source)

Repo: `/Users/jimabmatic.ai/abmatic/app-frontend`
Area: Accounts, Contacts, Collections, Target Groups, Filters, CSV upload, import-from-CRM, recommend-by-AI, dynamic collections, account/contact detail.
Audit date: 2026-06-12. Focus "new" = changes since ~2026-03-01.

## Where it lives in code
- Routes in `src/App.tsx` (lines ~595-685) under `/:urlType` where `urlType` = `accounts` | `contacts`.
- Components in `src/components/target/` and `src/components/target/resource/`.
- Column definitions: `AccountColumns.tsx` (~92KB), `ContactColumns.tsx` (~104KB).

### Route → component map (current)
- `/:urlType` -> `Container` (Collections list + create/import dialog) — `components/target/Container.tsx`
- `/:urlType/all` -> `AllResourcesWrapper`/`AllResources` (All Accounts / All Contacts grid) — `AllResources.tsx`
- `/:urlType/:id/create-from-filters` -> `CreateFromFilters` (Static Collection by filters)
- `/:urlType/:id/create-dynamic-collection` -> `CreateDynamicCollection`
- `/:urlType/:id/import-from-crm` -> `ImportFromCrm`
- `/:urlType/:id/recommend-by-ai` -> `RecommendByAI`
- `/:urlType/upload-from-csv` -> `UploadFromCsv`
- `/:urlType/:id/preview` -> `TargetGroupPreview`
- `/:urlType/:id/table` -> `TargetGroupTable`
- `/:urlType/:id/:page` -> `ResourceContainer` (account/contact DETAIL with tabs)

## CURRENT user-facing features

### Collections list (landing on /accounts or /contacts)
- Two top tabs: **Collections** and **All Accounts** / **All Contacts**.
- Page title is "Accounts" / "Contacts". Primary button (top-right): **+ Account List** / **+ Contact List** opens a "Target Accounts/Contacts" dialog.
- Create/import dialog has two cards:
  - **Import** card: "Upload from CSV" and "Import from CRM".
  - **Create** card: **Static Collection** (filters) and **Dynamic Collection**.
  - NOTE the dialog labels the filter-based option **"Static Collection"** (sourceType `abmatic-filters`), not "Create from Filters". The AI-recommend path is NOT surfaced as a button in this dialog (route exists at `/recommend-by-ai`).
- `CollectionsTable` lists collections with a per-row `...` menu, a Processing status chip (with manual refresh), and per-list actions; supports Google Ads / LinkedIn DMP sync status popups (`GoogleAdsStatusPopup`, `LinkedInDMPStatusPopup`).

### Create flows
- **Static Collection / Create from Filters**: `ConditionalFilter` builder; saves a static list.
- **Dynamic Collection** (`CreateDynamicCollection.tsx`): filter builder + helper panel "How it works: New visitors that match your filters will automatically be added to this collection." Name must be ≥3 chars. Save button "Save Dynamic Collection"; once saved shows "Go to Collection"; mid-process shows "Processing...". sourceType `dynamic`.
- **Recommend by AI** (`RecommendByAI.tsx`): chat-style prompt box that calls `openaiRecommendFilters`; returns filter conditions written onto the target group. Includes sample prompts (e.g. "Create an account list for india based Electronics companies with 200-2000 employees", SAM-list narrowing, SaaStr event list, clone-AE1-list).
- **Upload from CSV** (`UploadFromCsv.tsx` + dialog in `Container.tsx`): max file size **100 MB**, max **10,000 records**. Uses AI column mapping via `api.openaiColumnsMapping` (auto-maps CSV headers to Abmatic fields, shows sample).
- **Import from CRM** (`ImportFromCrm.tsx`): requires an active CRM (Salesforce / HubSpot / Pipedrive); otherwise routes to `/integrations`. Uses `crmPreference[0]` as default source.

### Account/Contact grid (All tab + collection table)
Implemented by `ResourceTable.tsx` using AG Grid **Server-Side Row Model (SSRM)**.
- Engagement temperature buckets: None / Cold (1-33) / Warm (34-66) / Hot (67+).
- Columns include engagement scores (Total, LinkedIn, Website, **Agentic Chat Engagement Score**), Conversations, Last Conversation, **Reveal Confidence**, Technologies, Demo Booked + Demo Booked At + Demo Scheduled At, owner info, etc.
- Bulk actions menu (`ResourceTableOptions.tsx`): **Show Filter Definition**, **Export to CSV**, **Push to CRM**, **Push to Outreach** (when Outreach active), **Enrich**, **Add to Group**, **Remove from Group**, **Delete permanently** (only on All tab).
- Selection supports "select all / all-except" semantics across unloaded pages (SSRM selection envelope).
- Create single record by LinkedIn URL from the All tab.

### Account/Contact detail (`ResourceContainer.tsx`)
Tabs: **Overview, Collections, Campaigns, Contacts (accounts only), Opportunities, Engagement, Performance, Edit**.
- Overview has a `...` menu: **Change/Save Layout**, **Push to CRM** (disabled if no CRM), **Push to Outreach** (if Outreach active).
- Overview/Engagement/Performance can show a green **Demo Booked** badge.
- Performance tab includes an **AI Conversation Summary** sub-view with "Show visitors (N)" backlink to the Visitors sub-tab.

## NEW / CHANGED since ~2026-03-01 (with commit refs)

### 1. SSRM rewrite of Accounts/Contacts grids (BIGGEST change)
Legacy client-side grid fully removed; server-side row model is now unconditional.
- `618e2681` Remove legacy CSRM ResourceTable — SSRM is now unconditional
- `e7cccd80` SSRM mode for All Accounts / All Contacts (behind flag, later made default)
- `2ee68c61`, `dd5693c7` (true infinite scroll), `5794c2d9` (custom selection column + all_except status panel), `ec2f2467` (#1446 fix set-filter values + sort drift), `58efac34` (#1432 scope account-detail contacts grid).
User impact: server-side pagination/filtering/sorting, infinite scroll, live total count, set-filter dropdown values fetched from server (`/accounts|contacts/distinct`), "select all-except" bulk selection across pages. Bulk actions (enrich/export/push/delete/add-remove group) now send a selection envelope to backend.

### 2. Demo Booked tracking (entire feature is new)
- `16d527ed` expose `demo_booked` in account + contact field selectors (CRM Settings)
- `2bfd6652` Demo Booked badge on account Overview/Engagement/Performance
- `a0e43965` extend badge to contacts
- `1fcc213c` Performance tables get demoBooked / demoAE / demoTime columns
- `8a6a1e37` grid + PerformanceTable columns: **Demo Booked At** (`demo_booked_at`) and **Demo Scheduled At** (`demo_scheduled_at`), plus PerformanceTable **Demo Time** (from MeetingModel.startTime). Sourced from MeetingModel.createdAt/startTime.

### 3. AI Conversation Summary on account/contact (new)
- `042fb64b` AI conversation summary tab on account/contact + "Show visitors (N)" backlink that carries topic visitorIds into the Visitors sub-tab. Generalized `ChatTopicSummaryTable` to entityType campaign/account/contact.

### 4. Push to CRM / Outreach from detail Overview (new)
- `7686782b` (#1306) add **Push to CRM** option on account/contact Overview `...` menu (previously only in grid bulk menu). **Push to Outreach** also present when Outreach integration active.

### 5. New columns / filters
- `97d97298` / `6dd9e64d` add **Reveal Confidence** column (`confidence`) + reveal ip source/source fixes.
- `fcf40fc9` **Agentic Chat Engagement Score** column (engagement score now broken into LinkedIn / Website / Agentic Chat sub-scores alongside Total).
- `be7e374f` show **recommended_personal_email** column; fixed "personal_emails" filter label.
- `a8a494e5` contact emails column now renders from `{type,address}` objects (was showing `[object Object]`).
- `05b4dc94` (#1287) add **Technologies** selector to campaign/collection filter UI.
- `f03b6c5d` (#1359) **AI Conversations** campaign filter.

### 6. CRM Settings sync filters (new)
- `e5f327fa` (#1312) add **sync filter UI** to CRM Settings modal (control which records sync to CRM).
- `8c7bc308` (#1409) HubSpot users surfaced at /users with column/selector parity.

### 7. Google Ads / LinkedIn DMP audience-push polish
- `461f38b2` / `b0f344f9` Google Ads Customer Match popup now shows enrichment step + match-status + skipped-records summary (dropped a separate "Enriching" step).

### 8. Integrations affecting this area
- `3c9e1b26` removed the 5x5 provider (data enrichment vendor) — any docs referencing 5x5 enrichment are stale.

## Exact current UI labels / terminology
- Tabs: "Collections" / "All Accounts" / "All Contacts".
- Create button: "+ Account List" / "+ Contact List"; dialog "Target Accounts" / "Target Contacts".
- Dialog cards/buttons: "Import" → "Upload from CSV", "Import from CRM"; "Create" → **"Static Collection"**, **"Dynamic Collection"**.
- Engagement buckets: None / Cold / Warm / Hot.
- Grid bulk menu: "Show Filter Definition", "Export to CSV", "Push to CRM", "Push to Outreach", "Enrich", "Add to Group", "Remove from Group", "Delete permanently".
- Detail tabs: Overview, Collections, Campaigns, Contacts, Opportunities, Engagement, Performance, Edit.
- Badges/columns: "Demo Booked", "Demo Booked At", "Demo Scheduled At", "Demo Time", "Reveal Confidence", "Agentic Chat Engagement Score", "AI Conversation Summary".
- CSV limits: 100 MB, 10,000 records.

## Doc-impact notes (add / fix)
1. **Add Demo Booked tracking** — entirely new; doc the badge + the four columns (Demo Booked, Demo Booked At, Demo Scheduled At, Demo Time) and where they appear (Overview/Engagement/Performance + grids + Performance tables). Tie to Agentic Chat demo bookings.
2. **Rename in dialog**: docs likely say "Create from Filters"; UI now says **"Static Collection"**. Keep "Static" vs "Dynamic" distinction explicit (dynamic auto-adds matching new visitors).
3. **SSRM behavior** — if docs describe client-side filtering/"all rows load", update to server-side pagination, infinite scroll, live total count, and the new "select all-except" bulk selection across pages.
4. **Reveal Confidence column** + reveal source — new; document alongside Visitor Reveal.
5. **Engagement score breakdown** — docs probably mention a single engagement score; now there are Total + LinkedIn + Website + Agentic Chat sub-scores.
6. **AI Conversation Summary** on account/contact detail (with "Show visitors" backlink) — new, undocumented.
7. **Push to CRM / Push to Outreach from the detail Overview** menu — new path (previously bulk-only). Outreach is a supported push target.
8. **CRM Settings sync filters** + HubSpot users at /users — new.
9. **recommended_personal_email** column + fixed personal-emails filter label; contact emails are typed `{type,address}`.
10. **Technologies** and **AI Conversations** filter selectors are new in the filter builder.
11. **Remove any 5x5 enrichment references** (provider removed). Enrich now uses remaining providers.
12. CSV upload uses **AI column mapping** (auto-maps headers) — confirm docs mention this and the 100 MB / 10k-row limits.
13. Recommend-by-AI is reachable via route/flow but is NOT a button in the main create dialog — verify how users currently reach it (may be docs-only legacy).
