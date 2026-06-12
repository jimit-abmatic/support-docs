# Analytics area — current-state discovery (frontend source)

Scope: `/analytics/reports`, report builder/editor, `/analytics/dashboards`, dashboard detail. Source read live from `app-frontend`.

## Files that implement this area
- Routes: `src/App.tsx` (lines ~124, 282–325). `/analytics` redirects to `/analytics/reports`.
- `src/components/analytics/reports/ReportsTable.tsx` — reports list (`/analytics/reports`)
- `src/components/analytics/reports/ReportEdit.tsx` — report builder/editor (`/analytics/reports/:id/edit`)
- `src/components/analytics/reports/ReportView.tsx` — read-only "full report" view (`/analytics/reports/:id`)
- `src/components/analytics/reports/AgGridMenuItem.tsx` — small grid menu helper
- `src/components/analytics/dashboards/DashboardTable.tsx` — dashboards list (`/analytics/dashboards`)
- `src/components/analytics/dashboards/Dashboard.tsx` — dashboard detail + widget grid (`/analytics/dashboards/:id`); also renders the Home Dashboard
- `src/contexts/AnalyticsContext.tsx` — all API calls, report types, dashboard date-range presets, type defs

Whole area is gated by `<PaidPlanGuard>`. Non-paid plans see "You need to switch to a paid plan in order to use this feature." with an "Upgrade Plan" button linking to https://abmatic.ai/demo.

---

## CURRENT features

### Top-level Analytics page
- Topbar title: **Analytics**. Two MUI tabs at top: **Reports** and **Dashboards** (navigates between `/analytics/reports` and `/analytics/dashboards`).
- An `AgentCard` titled **"Create Insightful Reports"** sits above the reports grid (AI-assist entry point).
- `FilterBlocks` quick-filter chips by report type, with a leading **All Reports** block (counts per type).

### Reports list (`/analytics/reports`)
- AG Grid table of saved reports. Columns: **Name** (link; subtitle shows the report type in Start Case), hidden **Report Type**, **Created At**, **Updated At**. Sorted by Updated At desc by default.
- **Create Report** button (top-right, `+` icon) → dialog "Create Report" with a **Report Type** autocomplete; on submit creates a report named `Report - <random>` and routes to the editor.
- Row-selection + overflow (`⋮`) menu: **Go to Dashboards**, and **Delete selected** (with "Delete Reports" confirm dialog).
- Per-table state (sort/columns/filter) persisted via `accountContext.updateTableState({table:'reports'})`.

### Report TYPES (authoritative current list — `reportTypes` in AnalyticsContext.tsx)
1. `account`
2. `contact`
3. `opportunity`
4. `campaign`
5. `user`
6. `unique_visitor`
7. `linkedin_visitor_session`  ← LinkedIn visitor sessions report type

(Labels are auto-Start-Cased in UI, e.g. "Unique Visitor", "Linkedin Visitor Session".)

### Report builder / editor (`/analytics/reports/:id/edit`)
- Breadcrumb: **Reports › `<Report Type>`**. Inline editable **Report Name** (auto-saves, 500ms debounce).
- A **Total Rows** stat card (top-right). Note banner: **"This preview shows only a maximum of 500 rows."**
- Full AG Grid Enterprise pivot/charting surface:
  - Sidebar tool panels: **columns** and **filters**.
  - Row-group panel always visible (drag columns to group).
  - **Pivot mode** toggle (column menu).
  - Aggregations per column (sum via custom `aggregate`, plus standard min/max/count/avg/first/last in `Aggregation` type).
  - **Advanced Filtering** — toggled via the report `⋮` menu: **"Enable/Disable Advance Filtering"** (confirm dialog warns it removes existing filters; note "Removing column does not remove the advance filter").
  - **Show Chart** button (pie-chart icon). Tooltip/gating: *"Chart can only be enabled when a row group and an aggregation is set; and pivot mode is on."* Chart is a pivot chart (default `groupedColumn`), saved as a chart model.
  - **Save & View Full Report** button → saves chart model, routes to `/analytics/reports/:id`.
- All grid changes (columns, filters, sort, pivot, group, agg, chart) auto-persist to the backend via `updateReportWhileEditing` (`PUT analytics/reports/:id/edit`).
- Available columns / colDefs are **backend-driven** (returned in `grid_data.col_defs` from the API per report type) — the frontend does not hardcode the per-type column list.

### Report full view (`/analytics/reports/:id`)
- Read-only pivot grid + optional chart at top. **Edit Report** button.
- Data is **paginated** client-side: fetched 500 rows/page via `GET analytics/reports/:id/view?page&page_size=500` looping on `has_more`, with a live **"Loading rows: X of Y"** progress indicator.
- If not pivot-viewable: message *"This report is not in a viewable state. Edit the report to add a grouping, an aggregation and turn on the pivot mode with an optional chart."*

### Dashboards list (`/analytics/dashboards`)
- AG Grid table: **Name** (link), **Created At**, (and Updated/Last-refreshed fields in model). **Create Dashboard** button (`+`) creates `Dashboard - <random>` and opens it.
- The account's **Home Dashboard** row is NOT selectable/deletable (`isRowSelectable` excludes `homeDashboardId`). Overflow menu supports **Delete selected**.

### Dashboard detail (`/analytics/dashboards/:id`) + Home Dashboard
- `Dashboard.tsx` serves both a named dashboard (`:id`) and the **Home Dashboard** (when no param id, falls back to `account.homeDashboardId`; header reads **"Home Dashboard"** with "Last updated at …").
- Drag-and-drop widget grid (`react-grid-layout`, 4 cols, max **20 reports per dashboard** — Add button disabled past 20 with tooltip "A dashboard can have only 20 reports at max.").
- **Edit mode** (`?edit=true`): editable dashboard name, **+ Report** to add a widget, **Save Dashboard**, per-widget drag handle + remove (X).
- **Add Report** dialog: pick a report (only reports with `chartEnabled` are listed), choose widget type **Chart** or **Table**, then **Add Report**. Widget added via `PUT analytics/dashboards/:id/widgets`.
- View mode: **DateRangeSelection** filter, **Edit Dashboard** button, and a **Refresh** icon that clears the dashboard cache (`?clearCache=True`) and reloads.
- Each widget header links back to its source report ("`<ReportName>`" + shortcut icon).
- Dashboard date-range presets (`dashboardFilters`): Custom, Today, Yesterday, Last Week (Sun–Sat), This Week (Sun–Today), Last 7/28/30/60/90 Days, Last 12 Months, This Year (Jan–Today).

---

## NEW / CHANGED since ~2026-03-01 (with commit refs)

The analytics **report builder + dashboard UI itself is stable** (last substantive edits Jan 2026: paginated ReportView + progress UI, commits `00733980`, `a7b17f5e`, `e312a056`). The meaningful new work in this area is the **Demo Booked columns**, which surface in the `account`/`contact`/`campaign` reporting data (and the parallel target/campaign tables that share the same data model):

- **`8a6a1e37` (PR #1469, 2026-06-05)** — `feat(demo-booked): grid + PerformanceTable columns for Demo Booked At / Demo Scheduled At`
  - Accounts + Contacts grids (`AccountColumns.tsx`, `ContactColumns.tsx`) gained two date columns: **`demo_booked_at` → "Demo Booked At"** and **`demo_scheduled_at` → "Demo Scheduled At"** (sortable, `agDateColumnFilter`).
  - `PerformanceTable.tsx` gained a **`demoBookedAt` → "Demo Booked At"** column next to the existing **`demoTime` → "Demo Time"**. Sourced from `MeetingModel.createdAt` (booked-at) vs `MeetingModel.startTime` (scheduled/demo time).
- **`1fcc213c` (PR #1465, 2026-06-03)** — added `demoBooked` / `demoAE` / `demoTime` columns to the **account- and contact-level Performance tables** (previously only on agentic-chat campaigns). Reverted an earlier "Demo Booked chip in header" approach in favor of per-row columns. Backend `visitors.py get_performance` extended to carry the four demo fields at account/contact level.
- **`a0e43965` / `2bfd6652` (PRs #1463/#1461, 2026-06-02/03)** — Demo Booked badge on account & contact Overview / Engagement / Performance views (badge approach; later the chip was reverted in favor of columns per `1fcc213c`).
- **`16d527ed` (PR #1457, 2026-06-02)** — `feat(crm-settings): expose demo_booked in account + contact field selectors` — `demo_booked` now appears in the CRM-sync mapping dropdown (Integrations → HubSpot/Salesforce → Settings → Add Mapping). Field populated by the agentic-chat meeting-booking flow.
- **`c85dd653` (2026-04-10)** — "Add demo booking columns to agentic-chat performance table" (the original demo-booking columns, before they were generalized to account/contact in June).

Related terminology/rename that touches reporting labels:
- **`8899ae40` (PR #1424, 2026-05-20)** — "Banner & Popup" campaign renamed to **Widget**; "Advanced" category renamed to **Agentic**. Affects how campaign report rows/labels read.

---

## Exact current UI labels / terminology (verbatim)
- Page title: **Analytics**; tabs **Reports** / **Dashboards**.
- **Create Report**, field **Report Type**; default name pattern `Report - <random>`.
- **Create Dashboard**; default name `Dashboard - <random>`.
- Editor buttons: **Show Chart**, **Save & View Full Report**, **Enable Advance Filtering** / **Disable Advance Filtering** (note the spelling "Advance", not "Advanced").
- **Total Rows** card; banner **"This preview shows only a maximum of 500 rows."**
- View: **Edit Report**; empty-state text quoted above.
- Dashboard: **Add Report**, widget types **Chart** / **Table**, **Save Dashboard**, **Edit Dashboard**, **Home Dashboard**, "A dashboard can have only 20 reports at max."
- New columns: **Demo Booked At** (`demo_booked_at` / `demoBookedAt`), **Demo Scheduled At** (`demo_scheduled_at`), and existing **Demo Time** (`demoTime`), plus **Demo Booked** (bool) / **Demo AE**.
- Report-type display labels (Start Case): Account, Contact, Opportunity, Campaign, User, Unique Visitor, **Linkedin Visitor Session**.

---

## DOC-IMPACT notes (what docs need to add/fix)
1. **NEW demo-booking columns** — docs must add **Demo Booked At**, **Demo Scheduled At**, **Demo Time**, **Demo Booked**, **Demo AE** to account/contact/campaign reporting + Performance tables, and explain the meaning split: *Demo Booked At = when the meeting was booked* vs *Demo Scheduled At / Demo Time = the meeting's scheduled start*. Tie to the agentic-chat meeting-booking flow.
2. **CRM mapping** — `demo_booked` is now a mappable field in Integrations → HubSpot/Salesforce → Add Mapping; document it.
3. **Report types list** — confirm docs list all 7 current types, especially **Unique Visitor** and **LinkedIn Visitor Session** (the latter pairs with the LinkedIn/visitor reveal area).
4. **"Advance Filtering"** spelling — UI literally says "Advance Filtering" (not "Advanced"); match the docs to the on-screen label or note the typo.
5. **500-row preview** in the editor and **paginated full-view with "Loading rows: X of Y"** progress are real behaviors worth documenting (users will notice the editor preview is capped at 500 while the full View loads everything page-by-page).
6. **Dashboard limits/behaviors** — 20 widgets max, Home Dashboard is non-deletable, the Refresh button clears server cache, `chartEnabled`-only reports can be added as widgets. If docs predate this, add.
7. **Campaign-label rename** ("Banner & Popup" → **Widget**, "Advanced" → **Agentic**) flows into campaign report rows — update any campaign-type wording.
8. Whole area is **paid-plan only** — keep the paywall note.
