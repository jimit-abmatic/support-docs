# Discovery: app-shell-home (global nav, top bar, search, help, notifications, dark mode, Home dashboard)

Source: `/Users/jimabmatic.ai/abmatic/app-frontend` (HEAD `3c9e1b26`, 2026-06-05). React/TS, MUI.
Docs baseline ~Jan–Mar 2026. 318 frontend commits since 2026-03-01.

---

## 1. Components implementing this area

- **Left icon sidebar (global nav):** `src/components/common/SideNavContainer.tsx` (+ `sideNavContainer.css`). Wraps almost every authenticated route in `App.tsx`.
- **Top bar:** `src/components/common/Topbar.tsx` -> renders page title/breadcrumb (`props.children`) + `TopRightToolbar`.
- **Top-right toolbar:** `src/components/common/TopRightToolbar.tsx` (dark-mode toggle, Search, Help, Notifications, Settings/account).
- **Global search:** `src/components/search/SearchDrawer.tsx`.
- **Help/support:** `src/components/common/Support.tsx`.
- **Notifications:** `src/components/common/Notification.tsx` (Knock-powered feed popover).
- **Dark mode:** `src/contexts/ThemeContext.tsx`, applied via `MuiThemeProvider` (`src/contexts/MuiThemeContext`).
- **Home dashboard:** `src/components/home/Container.tsx` (tabs) + `src/components/home/Overview.tsx` (Overview tab) + `components/analytics/dashboards/Dashboard` (Dashboard tab).
- **Oracle (new product, surfaced in nav):** `src/components/oracle/Goals.tsx`, `ApprovalInbox.tsx`, `useOracleFlags.ts`.
- **AI Agent chat (top sidebar entry + right-side drawer):** `src/components/chat/*` (`ABMAgent`, `Container` as `Chat`, `SDRAgent`, `VoiceMode`, etc.), `src/components/common/AgentFAB.tsx`.

---

## 2. CURRENT user-facing features

### Left ICON sidebar (the redesign)
- Permanent left rail, **collapsed width 54px**, expands to **200px on hover** (`onMouseEnter`/`onMouseLeave`), animated, with shadow when expanded. Background token `--bg-nav`.
- Top: Abmatic logo (`/Primary-logo.png`) + wordmark **"ABMATIC AI"** (rendered uppercased). Clicking the logo navigates to `/` (Home).
- Selected item highlighted with rounded pill (`--secondary` background), 24px border-radius.
- **TOP nav items (in order):**
  1. **AI Agent** — icon `AutoAwesome`, navigates to `/ai-agents/abm`.
  2. **Goals** — icon `FlagOutlined`, navigates to `/oracle/goals`. **Only shown when permission flag `autonomous_agent.goals` is on.**
  3. **Home** — icon `HomeOutlined`, navigates to `/` (empty `name`).
  4. **Accounts** — `BusinessCenterOutlined` -> `/accounts`.
  5. **Contacts** — `PeopleAltOutlined` -> `/contacts`.
  6. **Campaigns** — `CampaignOutlined` -> `/campaigns`.
  7. **Conversions** — `FilterAltOutlined` -> `/conversions`.
  8. **Visitor Reveal** — `TravelExploreOutlined` -> `/reveal`.
  9. **Analytics** — `InsightsOutlined` -> `/analytics`.
  10. **Oracle Inbox** — `InboxOutlined` -> `/oracle/inbox`. **Only shown when flag `autonomous_agent.approval_inbox` is on** (`useHasApprovalInbox`).
- **BOTTOM nav item:** **Installation** — `CodeOffOutlined` -> `/installation`.
- A persistent **right-side AI drawer (400px)** titled **"AI Conversation"** opens when URL has `?ai-agent-help` query param; it embeds `<ABMAgent floating />` and pushes main content left via `marginRight: 400px`. Close button returns to the bare pathname.

### Top bar / top-right toolbar (left -> right)
- Page title or breadcrumbs (passed in by each page).
- **Dark/Light mode toggle** — tooltip "Switch to Dark Mode"/"Switch to Light Mode"; icon rotates 15deg on hover; `LightModeOutlined`/`DarkModeOutlined`.
- **Search** — tooltip "Search", `SearchIcon`, opens SearchDrawer.
- **Help** — tooltip "Help", `HelpIcon`, opens Support dialog.
- **Notifications** — Knock bell with unread-count `Badge`.
- **Settings/account** — `AccountCircleIcon`, tooltip "Settings", navigates to `/settings/account`.

### Global search (SearchDrawer)
- Floating dialog anchored top-right (no backdrop), 480px wide. Field label "Search", placeholder **"What are you looking for?"**, 500ms debounce; hits `GET {api}/search?query=`.
- Returns mixed result types, each with its own icon and click target:
  - **Account** (`BusinessCenter`) -> `/accounts/<website>/overview`
  - **Contact** (`PeopleAlt`) -> `/contacts/<workEmail>/overview`
  - **Campaign** (`Campaign`) -> `/campaigns/<typeSlug>/<id>/edit`
  - **Report** (`Summarize`) -> `/analytics/reports/<id>`
  - **Dashboard** (`Dashboard`) -> `/analytics/dashboards/<id>`
  - **Target group / Collection** (`AutoAwesomeMotion`) -> routes by status: Draft(1)->create-from-filters, Preview(2)->preview, Done(5)->table. Status chips: Draft / Preview / Processing / Done / Failed.
- Empty state "No Results".

### Help (Support dialog)
- Title **"Help"**. Copy: "Write your query for troubleshooting and we will get back to you within 24 hours." Free-text query (min 3 chars), Send/Cancel. On send, calls `sendSupportQuery({query,email})`; confirmation: "We have received your query and we will get back to you within 24 hours."

### Notifications
- Powered by **Knock** (`@knocklabs/react`): `KnockProvider`/`KnockFeedProvider`, `NotificationFeedPopover`. Bell badge shows `unread_count`. Requires `account.knockToken` + `config.knock.public_api_key` + `feed_channel_id`. (NOTE: not a homegrown panel — third-party feed.)

### Dark mode
- `ThemeProvider` with modes `'light' | 'dark'`, persisted in **localStorage key `abmatic-theme-mode`**, default **light**. Toggles `dark-mode`/`light-mode` classes on `<html>`. Exposes `useTheme()`, `useIsDarkMode()`. All surfaces use CSS variables (`--bg-nav`, `--bg-surface`, `--secondary-text`, etc.).

### Home dashboard (`/` and `/home-dashboard`)
- **`/` is the post-login landing page.** Two tabs: **Overview** (value `''`, route `/`) and **Dashboard** (value `home-dashboard`, route `/home-dashboard`). Top shows "Home" title (on `/`) or "Home / Home Dashboard" breadcrumb.
- **Overview tab** (`Overview.tsx`):
  - **5 stat cards** (clickable) across the top: **Accounts**, **Contacts**, **Reports**, **Campaigns**, **Collections** (the `targetGroup` widget is labeled **"Collection**s**"**, not "Target Groups"). Counts use an animated `CountAnimation`. Card click navigates (Accounts->/accounts/all, Contacts->/contacts/all, Reports->/analytics/reports, Campaigns->/campaigns, Collections->/accounts).
  - **"Recently Viewed" sections** for each: **Recently Viewed Accounts / Contacts / Reports / Campaigns / Collections** (heading uses startCase of the singular). Rows link to the resource; accounts show employee count + website-open button; contacts show email/title + LinkedIn button; campaigns show type + Active/Inactive chip; collections show record count + source + status chip; reports show type.
  - Data via `accountContext.getDashboardData()`; skeleton loaders while loading.
- **Dashboard tab** renders the analytics `Dashboard` component (configurable widget grid; out of scope detail here).

---

## 3. NEW / CHANGED since ~2026-03-01 (with commit refs)

- **Oracle product introduced (autonomous agent) — biggest net-new area.** Three commits 2026-04-17/18:
  - `83afa02b` Oracle foundation: admin AI agent config UI (#1350) — admin per-account `AIAgentContainer` with feature-flag checkboxes (`autonomous_agent` + sub-flags), saves to `PUT /admin/account/<id>/ai-agent`.
  - `bc06d8ee` Oracle approval inbox UI (#1351) — `/oracle/inbox` (`ApprovalInbox.tsx`). Titled **"Oracle Approvals"**. Lists pending approvals with **action_type, Risk chip (low/medium/high), Est. spend (USD), proposed time, rationale, JSON payload preview**. Approve/Deny each with optional notes -> `POST {api}/oracle/approvals/<id>/approve|deny`. 403 -> "Oracle is not enabled for your account." Empty -> "No pending approvals."
  - `2d0921c9` Oracle goals UI (#1352) — `/oracle/goals` (`Goals.tsx`). Titled **"Oracle Goals"**. List goal cards with title/description/target date/progress bar; **"New Goal"** dialog (Title, Description, Success metric e.g. demos_booked, Target value, Target date) -> `POST {api}/oracle/goals`. Goal detail dialog shows **weekly checkpoints** (week_start, progress, agent_notes, actions_taken). Flag-off empty state: "Goals aren't enabled for your account yet…".
  - Sidebar gates: **Goals** entry requires flag `autonomous_agent.goals`; **Oracle Inbox** entry requires `autonomous_agent.approval_inbox`.
- **AI Agent chat UI overhaul** `71935171` (2026-03-24) "AI Agent chat UI with thinking/tool steps, auto-greeting, and direct nav (#1301)" — the `/ai-agents/:agent?` experience (thinking/tool step rendering, auto-greeting, direct navigation). The sidebar's top item is now **"AI Agent"** -> `/ai-agents/abm`. Several follow-ups: `4f1f3b9d` (2026-03-26) dark-mode support for agent thinking/tool UI; agentic-chat editor/handoff work (`d91bb988`, `c00898a1`, `ce2887db`).
- **Campaign terminology rename** `8899ae40` (2026-05-20): **"Banner & Popup" campaign renamed to "Widget"**, and the **"Advanced" create-campaign category renamed to "Agentic"**. Frontend-only (slug + display); internal type stays `banner_popup`; old `/campaigns/banner_popup/...` URLs still work via `campaignTypeUtils`. SearchDrawer updated to match.
- **Sidebar links open in same page / anchor selector hidden** `ad0f882a` (2026-05-21).
- **Sales user role + Sales Dashboard** `56cef679` (2026-04-15): new "sales" user role with **Google-only sign-in** and a dedicated integration/sales dashboard (`src/components/sales/SalesDashboard.tsx`). `f61ba347` later surfaces Google Calendar OAuth/axios errors there.
- **Demo Booked badge** `2bfd6652` (2026-06-03): surfaced on account Overview/Engagement/Performance (adjacent to home/overview area).
- **5x5 provider removed** from admin usage dashboard `3c9e1b26` (matches MEMORY 5x5 decommission).
- **Calendar pages replaced / Zoom added** `aab00146` (2026-04-09): legacy calendar pages removed, Zoom integration support added (affects `/settings/calendar`).

### Pre-March but likely newer than docs
- **Dark mode** shipped `813e893d` (#1179, 2025-12-17) — if docs were written early-Jan they may predate it; verify docs mention the light/dark toggle, localStorage persistence, default light.

---

## 4. Exact current UI labels / terminology (for docs)

- Brand wordmark in sidebar: **"ABMATIC AI"** (uppercase). Company name is **"Abmatic AI"** (never "abmatic").
- Sidebar items: **AI Agent, Goals, Home, Accounts, Contacts, Campaigns, Conversions, Visitor Reveal, Analytics, Oracle Inbox, Installation.**
- Home tabs: **Overview**, **Dashboard**.
- Home stat cards: **Accounts, Contacts, Reports, Campaigns, Collections** (note: "Collections", not "Target Groups").
- Home sections: **Recently Viewed Accounts / Contacts / Reports / Campaigns / Collections.**
- Toolbar tooltips: **"Switch to Dark Mode" / "Switch to Light Mode", "Search", "Help", "Notifications", "Settings".**
- Search placeholder: **"What are you looking for?"**
- Help dialog title: **"Help"**; 24-hour SLA copy.
- Oracle: pages titled **"Oracle Goals"**, **"Oracle Approvals"**; right drawer titled **"AI Conversation"**.
- Campaign types: **"Widget"** (was Banner & Popup); create category **"Agentic"** (was Advanced).

---

## 5. Doc-impact notes (add / fix)

1. **Document the new left ICON sidebar** as the global nav: collapsed 54px / hover-expand 200px, the exact item list and order above, logo->Home behavior, selected-pill styling. Old docs likely describe a different/older nav.
2. **Add the Oracle product entirely** (new since April, almost certainly undocumented): Oracle Goals (`/oracle/goals`), Oracle Approvals/Inbox (`/oracle/inbox`), the approval workflow (risk tier, est. spend, approve/deny + notes, weekly checkpoints), and that **both are feature-flag gated** (`autonomous_agent.goals`, `autonomous_agent.approval_inbox`) — most accounts won't see them. Note admin enablement via the admin AI-agent config UI.
3. **Rename in docs:** "Banner & Popup" campaign -> **Widget**; "Advanced" category -> **Agentic**. Note internal type unchanged and old URLs still work.
4. **AI Agent** is the first sidebar entry (-> `/ai-agents/abm`) and there is a slide-in **"AI Conversation"** drawer via `?ai-agent-help`. Document the thinking/tool-step chat UX and auto-greeting (changed Mar 2026).
5. **Home dashboard:** confirm docs say **`/` is the post-login landing** with **Overview + Dashboard** tabs; correct any "Target Groups" label to **Collections**; describe the 5 animated stat cards and 5 Recently-Viewed sections.
6. **Dark mode:** document the top-bar toggle, localStorage persistence (`abmatic-theme-mode`), default light. (Heads-up: this is theme styling only; verify screenshots if docs show light-only.)
7. **Notifications** are a **Knock** feed popover (bell + unread badge), not a custom in-app panel — describe accordingly; requires Knock token on the account.
8. **Global search** covers Accounts, Contacts, Campaigns, Reports, Dashboards, and Collections (target groups) with status-aware routing — make sure docs list all six and the status-based deep links.
9. **New "Sales" user role** with Google-only sign-in and a Sales Dashboard — likely undocumented; note the restricted experience.
10. **Settings/Integrations:** legacy calendar pages removed and **Zoom** integration added (affects any calendar/integration docs).
