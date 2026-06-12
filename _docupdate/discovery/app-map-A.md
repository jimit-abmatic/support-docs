# App Map A — Live Abmatic AI reference captures (2026-06-12)

Captured against https://app.abmatic.ai as jimit@abmatic.ai. These are REFERENCE captures (ref- prefix), not for direct use in docs.

## Left Sidebar (consistent across all screens)

A thin icon-only rail on the far left (collapsed/icon mode, no text labels). Top-to-bottom:

1. Abmatic triangle/prism logo (top)
2. Sparkle/stars icon (AI Agent — top nav item; this is the AI agent / Co-Pilot entry, currently the active/topmost feature)
3. Home (house icon)
4. Accounts (briefcase icon)
5. Contacts (people/persons icon)
6. Campaigns (megaphone/bullhorn icon)
7. Target Groups / Segments (funnel icon)
8. Oracle (globe-with-magnifier icon — the autonomous-agent area; Oracle Goals/Inbox/Approvals live here)
9. Reports / Analytics (line-chart-with-sparkles icon)
10. (bottom) collapse/expand sidebar toggle icon

NEW vs older ABM tooling: the AI Agent (sparkle) item sits at the TOP of the nav above Home, and there is a dedicated "Oracle" section (globe+search icon) for autonomous agent goals/inbox/approvals — both are net-new agentic-AI surfaces.

Top bar (right side, all screens): refresh icon (on some pages), dark-mode (moon) toggle, search (magnifier), help (?), notifications (bell), account/avatar.

---

## ref-home  (/)

- Page title: **Home**
- Two tabs at top: **OVERVIEW** (active) and **DASHBOARD**
- Top row of 5 metric stat cards with icons:
  - Accounts **162,304**
  - Contacts **38,119**
  - Reports **361**
  - Campaigns **137**
  - Collections **725**
- Three "Recently Viewed" panels below:
  - **Recently Viewed Accounts** (rows show "Unkown Name" [sic] with globe icons)
  - **Recently Viewed Contacts** (Ahmed Raza — branhapp.com Marketing Program Manager; deniz.ak@decesoftware.com; mihir+testing889@abmatic.ai — LinkedIn icons)
  - **Recently Viewed Reports** (Inbound Campaign CTR Report / Active ABM Opportunities by stage / Quarterly Opportunity Amount Report)
- Bottom row:
  - **Recently Viewed Campaigns** (BOFU / Competitive Ads / Competitive Ads - Data & Intent — all tagged "Openai", all status "Inactive" with red icon)
  - **Recently Viewed Target Groups** (Agentic Chat: Sessions > 0 - All Pages [3,497 Records], Inbound SMB [904 Records], Dynamic Account List - Industry based [445 Records] — labeled "Auto Generated" / "Dynamic", green "Done" status)

NEW: "Collections" is a top-level entity (725). Target Groups support "Auto Generated" and "Dynamic" record lists. Campaigns reference an "Openai" source/type.

---

## ref-ai-agents  (/ai-agents)

- Page title: **AI Agent**
- Centered hero: heading **"Meet Your AI Partner"**
- A profile card showing a person's photo labeled **"Clara - AI ABM"**
- Card caption: **"Campaign execution, Personalization at Scale and Performance Analytics"**
- Below the card: **"Campaigns That Convert, Powered by AI"** and subtext **"Clara crafts hyper-personalized campaigns to engage your most valuable accounts."**

NEW / NOTABLE: The current AI agent persona is named **"Clara"** (tagline "AI ABM"). She is presented as an AI Partner that does campaign execution, personalization at scale, and performance analytics. This is the personified agentic-AI front door.

---

## ref-oracle-goals  (/oracle/goals)

- Page title (centered, top): **Oracle Goals**
- Empty/gated state message: **"Goals aren't enabled for your account yet. Reach out to your Abmatic rep to turn on the autonomous agent goal tracker."**
- No goals UI rendered (feature-flagged off for this account).

NEW / NOTABLE: There is an **autonomous agent goal tracker** ("Oracle Goals") — a feature gated behind account enablement. Confirms an "Oracle" autonomous-agent product line.

---

## ref-oracle-inbox  (/oracle/inbox)

- Page title: **Oracle Approvals** (the /oracle/inbox path renders an "Oracle Approvals" screen)
- A red error banner at top: **"Failed to load approvals."** (transient load error)
- Empty-state card: **"No pending approvals."** with subtext **"When the Oracle queues a high-impact action, it will show up here."**

NEW / NOTABLE: The Oracle inbox is an **approvals queue** — a human-in-the-loop gate where the autonomous Oracle agent queues "high-impact actions" for user approval before executing. (Banner error was transient; empty-state copy is the real content.)

---

## ref-campaigns  (/campaigns)

(First capture caught a loading spinner; re-ran once and got the full table below.)

- Page title: **Campaigns**
- One tab: **TABLE**
- Top-right purple button: **+ CAMPAIGN**
- A **Co-Pilot** card (top-left, with a person photo/avatar): **"Co-Pilot — Personalized Campaigns"** (clickable, has an external/expand arrow)
- Row of summary stat cards (campaign counts by type/channel):
  - All Campaigns **137**
  - Salesforce Camp... **2**
  - LinkedIn **2**
  - A/B Test **6**
  - Agentic Chat **4**
  - Email **15**
  - Widget **8**
- Toolbar: Search box, **FILTERS** dropdown, "Rows: 137", **Sort By: Preference** dropdown, up/down sort arrows, overflow (...) menu
- Table columns: checkbox | **Campaign** | **Preference** (with # rank) | **Status** | **Unique Visitors** (with "vs N in control") | **Created At** | **Updated At**
- Visible campaign rows (name / sub-type / preference rank / status / unique visitors):
  - Inbound - Mihir & Jim Test / Inbound / #1 / **0% Inactive** / 73
  - Competitor Block / Agentic Flow / #2 / **100% Full personalization** / 1
  - Agentic Flow - Marketing / Agentic Flow / #3 / **100% Full personalization** / 1582
  - Inbound Mid-Market / Inbound / #4 / **50% Experiment** / 287
  - Outbound - High Intent - 12/29 / Outbound / #5 / **100% Full personalization** / 0
  - Outbound - 11 High Intent / Outbound / #6 / **100% Full personalization** / 0
  - New ABM USA / Inbound / #7 / **100% Full personalization** / 0
  - Inbound Enterprise / Inbound / #8 / **50% Experiment** / 1029
  - Inbound SMB / Inbound / #9 / **50% Experiment** / 803

NEW / NOTABLE:
- A **Co-Pilot** entry point sits at the top of Campaigns ("Personalized Campaigns").
- Campaign **types/channels** now include **Agentic Chat**, **Agentic Flow**, Email, LinkedIn, Widget, Salesforce, A/B Test — "Agentic Chat" and "Agentic Flow" are net-new agentic campaign types.
- Each campaign has a **Preference rank** (#1, #2…) and a **personalization mode**: "Full personalization" (100%), "Experiment" (50%), or "Inactive" (0%) — with an A/B "vs N in control" visitor comparison.
