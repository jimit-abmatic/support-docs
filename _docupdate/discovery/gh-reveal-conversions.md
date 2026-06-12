# Discovery: Visitor Reveal + Conversions area

Source of truth: live frontend `/Users/jimabmatic.ai/abmatic/app-frontend` (read 2026-06-12).
Scope: `/reveal/:resourceType` (accounts | contacts), company/contact identification, page views; `/conversions`, `/conversions/manage`, `/conversions/editor`; `/settings/contact-reveal`.

---

## 1. Where this area lives (component map)

Visitor Reveal:
- Route `/reveal/:resourceType` -> `src/components/companyReveal/RevealContainer.tsx` (`/reveal` redirects to `/reveal/accounts`).
- `RevealContainer.tsx` — top bar "Visitor Reveal" + tabs **Accounts / Contacts**.
- `RevealWrapper.tsx` — gating logic: loader, NoPermission, EmptyRevealCompanies, then renders `CompanyRevealTable` (accounts) or `PersonRevealTable` (contacts).
- `CompanyRevealTable.tsx` — also exports `VisitedPagesPopup`, `getConfidence`, `ConfidenceRenderer`, `confidenceOrder`. Renders shared `ResourceTable` with `groupId = account.company_reveal_group_id`, `groupType='account'`.
- `PersonRevealTable.tsx` — `ResourceTable` with `account.person_reveal_group_id`, `groupType='contact'`.
- `emptyStates.tsx` — NoPermission ("You need Company Lookups in your plan…"), EmptyRevealCompanies.
- The actual grid/columns are the SHARED `src/components/target/ResourceTable.tsx` (reveal-specific columns gated by `isRevealGroup`). NOTE: page title set via `useSetNewPage('Company Reveal')` even though UI label is "Visitor Reveal".

Conversions:
- `/conversions` -> `src/components/conversions/ConversionContainer.tsx` (tabs: "Conversions (last 60 days)" / "Manage").
- `src/components/conversions/table/ConversionTable.tsx` — the per-campaign conversion analytics grid (AG Grid master/detail).
- `src/components/conversions/table/ConversionRateElement.tsx`.
- `src/components/conversions/NewConversionGoalPopover.tsx` — "Add a new conversion event" dialog (two cards).
- `src/components/conversions/NewConversionGoal/CreateEventForm.tsx` + `NewEventCard.tsx`.
- `src/components/conversions/util.tsx` — `NewConversionGoalBtn` ("+ Conversion"), `SegmentEventText`, lift helpers.
- `/conversions/manage` -> `src/components/manageConversions/ManageConversionsContainer.tsx` + `ManageConversionsTable.tsx`, plus `RenameForm.tsx`, `ToEditorForm.tsx`.
- `/conversions/editor` -> `src/components/editor/EditorConversion.tsx` (visual editor in "track mode" to attach click events to DOM elements).
- Contexts: `ConversionAnalyticsContext`, `ConversionManagementContext`, `contexts/conversionManagement/domElems.ts`.

Contact Reveal settings:
- `/settings/contact-reveal` -> `src/components/account/ContactReveal.tsx`.

Global nav (`src/components/common/SideNavContainer.tsx`): left icon sidebar entries `conversions` (label "Conversions", FilterAlt icon) and `reveal` (label **"Visitor Reveal"**, TravelExplore icon).

---

## 2. Current user-facing features

### Visitor Reveal (`/reveal/accounts`, `/reveal/contacts`)
- Top bar title: **"Visitor Reveal"**. Two tabs: **Accounts**, **Contacts**.
- Gating:
  - If `account.api_credits.pdl_ip_reveal.total === 0` -> NoPermission screen: "You need Company Lookups in your plan to access Company Reveal." + "Visit demo page" button (opens abmatic.ai/pricing).
  - If no companies -> empty state "Patience, you don't have any visiting companies to show yet."
- Both tabs render the shared `ResourceTable` grid. Reveal-specific columns (only present for reveal groups, `isRevealGroup`):
  - **Reveal Confidence** — bucketed label from numeric confidence: None (≤5), Very Low (≤20), Low (≤30), Moderate (≤50), High (≤70), Very High (≤100). Rendered as colored chip (success/warning/error). Also drives a confidence chip-count summary.
  - **Reveal Source** (field `ip_source`) — value-mapped display (see §4 terminology). Header was "Reveal IP Source", now **"Reveal Source"**.
  - **Reveal Last Seen** (`last_seen`, date filter).
  - **Visited Pages** — `VisitedPagesPopup` cell: a "View (N)" button opening a "Visited Pages (N)" dialog listing every URL the visitor hit (clickable links); "No Pages" when empty.
  - **Total Sessions** (field `visitors_count`).
- Plus the full account/contact column set from `AccountColumns.tsx` / `ContactColumns.tsx` (engagement scores, temperature, technologies, UTM terms/campaigns/sources/mediums, firmographics, funding, LinkedIn ad metrics, etc.). Contacts add Work Email, Mobile Number, Reveal Confidence, Job Company Reveal Confidence/Last Seen, etc.
- Grid is full-featured: column show/hide, multi/set/text/number/date filters, server-side pagination + infinite scroll, row selection with bulk actions, persisted filter model + column state.

### Contact Reveal settings (`/settings/contact-reveal`)
- **Accuracy** slider (10%–100%, step 10, default 50%): "High Volume / Low Accuracy" ↔ "Low Volume / High Accuracy". Writes `contact_reveal_accuracy`. Copy: greater accuracy = lower volume.
- **Filters**: a ConditionalFilter builder ("Set up filters to only reveal the contacts that matter to you") saved to `account.reveal_filters.account`. Save / Clear all.

### Conversions (`/conversions`)
- Title "Conversions". Tabs: **"Conversions (last 60 days)"** and **"Manage"** (Manage disabled until at least one event exists).
- Header right: **"+ Conversion"** button (opens new-conversion dialog).
- Main table = per-campaign conversion analytics:
  - Columns: **Campaigns**, **Unique Visitors** (control row shows control visitors; campaign rows show a Personalized-vs-Control cell), then one column per **active conversion event** (the event name).
  - First row = **"Non-personalized"** (campaignId `0000-0000-0000-0000`) = control baseline.
  - Master/detail expansion per campaign: detail grid rows = **Conversions / Conversion Rate / Conversion Lift**, columns per event split into **Personalized** vs **Control**.
  - Conversion Lift shown with sign and capped at 999%.
  - Rows of type `linkedin` and `salesforce` are filtered OUT of this table.
- Empty states (`emptyStates.tsx`):
  - No events + no integration -> "To measure the performance of personalization, add conversion events or integrate a conversion tracking service." + "Go to Integrations" + "+ Conversion".
  - Events from an integration but none yet -> "Patience, it might take a while to detect first conversions."
  - Events exist but none visible -> prompt to enable in **Conversion Management** tab.
  - No conversion data -> "Patience, you don't have enough visitor data to show conversions yet."
- If Segment integration active: events come from Segment; "+ Conversion" popup is suppressed when `activeIntegration === 'googleAnalytics'`; a Segment-logo note points users to the Conversion Management tab.

### New conversion event creation (dialog)
- "Add a new conversion event" with two cards:
  - **Track Click Event** (icon AdsClick, button "Click Event"): "Track click events in the visual editor. You can track button clicks, link clicks, and form submissions." -> opens `CreateTrackEventForm` then routes to `/conversions/editor?url=<pageUrl>`.
  - **Track Page View Event** (icon Visibility, button "Page View"): "Track a conversion when a user views a particular page. This works best with 'Thank you' pages after a form submission." -> `CreatePageEventForm`.
- Form is a 2-step stepper: (1) "Create an event name", (2) "Add a link" (Website URL). URL must match the account's `clientDomain` (https:// or https://www.). Event names must be unique.

### Conversion Management (`/conversions/manage`)
- Table of all events. Columns:
  - **Event** (name), **Event Type** ("Click Event" / "Page View" with icon), **Attached To** (N Elements for track events / page URL for page events), **Main Event** (radio — sets `mainConversionMetric`), **Visiblility** [sic — exact label in code] (toggle `isActive`), row "⋮" menu.
  - Row menu options: **Rename event**, **Attach to a new element** (track events only), **Delete event**.
  - Master/detail: for track events, expands to a sub-grid of Page URL (links to `/conversions/editor?url=...`) + Attached To (element count).

### Conversion Editor (`/conversions/editor`)
- Visual editor in **Track Mode** (`TrackModeControls`) over the live page (`?url=`), used to click/attach DOM elements to a click-conversion event. Right drawer side controls; top nav `EditorTopNavConversion`.

### Conversion tracking integrations (related)
- `src/components/integrations/conversionTracking/` — **Google Analytics** (custom dimension selector, options window) and **Segment** integrations feed conversion events. GA integration disables the native "+ Conversion" popup.

---

## 3. What's NEW or CHANGED since ~2026-03-01 (with commit refs)

### BIG: All Accounts/Contacts grids (incl. both Reveal tables) migrated to SSRM (Server-Side Row Model)
This is the largest change touching the Reveal area. The reveal Accounts/Contacts tables render the shared `ResourceTable`, which was rewritten to server-side data.
- `e7cccd80` (2026-05-08) "SSRM mode for All Accounts / All Contacts (behind feature flag)".
- `618e2681` (2026-05-11) **"Remove legacy CSRM ResourceTable — SSRM is now unconditional"** — the old client-side grid is gone; SSRM is the only path now.
- `6f7bc4f6` (PR #1400, 2026-05-12) merge of the SSRM accounts/contacts feature.
- `f2ca065d` (2026-05-08) "SSRM: restore filter persistence + missing reveal columns" — re-added **Visited Pages** + **visitors_count/Total Sessions** to the SSRM reveal column set (parity with legacy); persisted filter model now applied on mount via `initialState.filter.filterModel`.
- `ec2f2467` (PR #1446, 2026-05-28) "Fix SSRM grid set-filter values + sort drift".
- `58efac34`/`c5258a19` (PR #1432) "scope account-detail contacts grid to its account (SSRM)".
- Many UX-polish commits: "Load 50 more" pinned bottom row (`24a46c7b`,`60d8540a`) then true infinite scroll (`dd5693c7`,`eac7877e`); custom selection column + all_except status panel (`5794c2d9`); pinned `engagement_score`/`job_title_role` columns (`e33c7c0c`,`7a8269f7`); skeleton/spinner loaders (`932ddaae`,`bf69435f`); live count display (`d37aa7e0`,`125ee921`); selected-count toolbar (`13f79823`,`dab5fd4f`).
- DOC IMPACT: filtering/sorting/scrolling behavior, infinite scroll vs paging, "select all / all-except N" bulk semantics, and persisted filters all changed. Any screenshot or step-by-step of the Accounts/Contacts/Reveal grid from before May 2026 is likely stale.

### Reveal Confidence column (NEW, Mar 2026)
- `97d97298` (2026-03-03) "add reveal confidence" — added **Reveal Confidence** to both `AccountColumns.tsx` and `ContactColumns.tsx` (plus Job Company Reveal Confidence on contacts). Bucketed labels None/Very Low/Low/Moderate/High/Very High with colored chips, and a confidence chip-count summary in the grid.

### Reveal Source relabel + source value mapping (CHANGED, Mar 2026)
- `7dbe54c0` (2026-03-09) "fix reveal source" — column header renamed **"Reveal IP Source" -> "Reveal Source"** and added an `IP_SOURCE_DISPLAY_MAP` so raw provider names are masked behind "Abmatic 1/2/3/4". `3cf379e5` (2026-03-09) "fix reveal ip source" follow-up.
- DOC IMPACT: docs must use "Reveal Source" and the Abmatic 1–4 labels, NOT raw provider names (PDL/Apollo/5x5). 5x5 is deprecated (removed 2026-06; mapping retained only for ≤90d historical rows).

### AI Conversation Summary backlink into Visitor Reveal (NEW, Jun 2026)
- `042fb64b` (2026-06-03) "AI conversation summary: show on account/contact tabs + backlink to visitors" — adds an "AI Conversation Summary" tab on account/contact performance with a **"Show visitors (N)"** action that deep-links into the Visitors sub-tab filtered by `visitorId`. Ties Agentic Chat data into the reveal/visitor view.

### Oracle (adjacent, OUT of strict scope but note)
- `2d0921c9` (PR #1352, 2026-04-17) "Oracle goals UI" — new `/oracle/goals` (+ `/oracle/inbox`) product, gated by `autonomous_agent.goals` flag, new conditional sidebar entries. Not part of reveal/conversions, but it's a NEW top-level product the docs almost certainly don't cover.

### NOT changed since March (still current, predate window)
- Contact Reveal accuracy slider + reveal filters: `70844958` (PR #863) — pre-March, unchanged.
- Conversions "last 60 days" tab label + analytics table structure, two-card new-event flow, Conversion Management table, conversion editor track mode: all pre-March, still current.
- "Total Sessions" column: introduced `1f87eeab` (2025-06) — old, but it survived the SSRM rewrite unchanged.

---

## 4. Exact current UI labels / terminology (use these verbatim)

Visitor Reveal:
- Sidebar + page title: **"Visitor Reveal"** (NOT "Company Reveal" — though internal page-tracking string is still "Company Reveal").
- Tabs: **Accounts**, **Contacts**.
- Columns: **Reveal Confidence**, **Reveal Source**, **Reveal Last Seen**, **Visited Pages**, **Total Sessions**.
- Confidence buckets: **None / Very Low / Low / Moderate / High / Very High**.
- Reveal Source values (raw -> shown):
  - First party / First_party -> **Abmatic 1**
  - 5x5 -> **Abmatic 2** (DEPRECATED, historical only)
  - Abmatic / People Data Labs / Form Email (PDL) -> **Abmatic 3**
  - Apollo -> **Abmatic 4**
- Visited Pages dialog: **"Visited Pages (N)"**, "These are all the pages visited by this visitor."
- No-permission copy: **"You need Company Lookups in your plan to access Company Reveal."**

Contact Reveal settings:
- **Accuracy** slider; endpoints "High Volume / Low Accuracy" / "Low Volume / High Accuracy"; default **50%**.
- **Filters** — "Set up filters to only reveal the contacts that matter to you."

Conversions:
- Page title **"Conversions"**. Tabs **"Conversions (last 60 days)"** and **"Manage"**.
- Button: **"+ Conversion"**.
- New-event cards: **"Track Click Event"** (button "Click Event") / **"Track Page View Event"** (button "Page View").
- Analytics columns: **Campaigns**, **Unique Visitors**, then one per active event. Control row label: **"Non-personalized"**.
- Detail rows: **Conversions / Conversion Rate / Conversion Lift**; split **Personalized** vs **Control**.
- Conversion Management columns: **Event**, **Event Type** (Click Event / Page View), **Attached To**, **Main Event**, **Visiblility** [exact spelling in code], "⋮".
- Row menu: **Rename event**, **Attach to a new element**, **Delete event**.
- Integration note label: **"Conversion Management"** tab; Segment events surface there.

---

## 5. Doc-impact notes (what to add/fix)

1. **Rename "Company Reveal" -> "Visitor Reveal"** everywhere user-facing. The product UI is "Visitor Reveal" with Accounts/Contacts tabs; only legacy internal strings say "Company Reveal".
2. **Add the reveal columns**: Reveal Confidence (with the 6 buckets + colors), Reveal Source (Abmatic 1–4 labels — never expose PDL/Apollo/5x5), Reveal Last Seen, Visited Pages popup, Total Sessions.
3. **Reveal Source terminology**: document Abmatic 1–4 mapping; mark Abmatic 2 (5x5) deprecated.
4. **SSRM grid behavior (May 2026)**: rewrite any "All Accounts/Contacts/Reveal table" how-to. New: server-side filtering/sorting, infinite scroll, live row counts, select-all / all-except-N bulk-select semantics, persisted filter + column state. Pre-May screenshots are stale.
5. **AI Conversation Summary -> Visitors deep link (Jun 2026)**: document the "Show visitors (N)" backlink from account/contact AI Conversation Summary into the Visitors sub-tab (Agentic Chat ↔ reveal linkage).
6. **Conversions**: confirm docs say tab is "Conversions (last 60 days)" and control baseline row is "Non-personalized"; document the Personalized-vs-Control lift detail grid; note linkedin/salesforce rows are excluded from this table.
7. **Conversion event types**: exactly two native types — Track Click Event (visual editor attach) and Track Page View Event (URL-based, "best for Thank-you pages"). URL must match the account domain. Plus Segment/Google Analytics integration-sourced events (GA disables the native add popup).
8. **Conversion Management**: document Main Event radio (main conversion metric), Visibility toggle, Rename/Attach/Delete actions, and master/detail page-URL drilldown.
9. **Contact Reveal settings**: accuracy slider (volume↔accuracy tradeoff, default 50%) + reveal Filters builder — verify docs exist; unchanged since pre-March but easy to miss.
10. **Oracle** (`/oracle/goals`, `/oracle/inbox`) is a brand-new product (Apr 2026, flag-gated) — flag for a separate doc; out of this area's scope.
