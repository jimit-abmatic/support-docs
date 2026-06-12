# App Map B — Live Abmatic AI reference captures (2026-06-12)

Captured against https://app.abmatic.ai (jimit@abmatic.ai account). All images are REFERENCE only (ref- prefix), saved under `static/img/screenshots/`.

## Global chrome (consistent across all screens)

- **Top bar**: Abmatic AI triangle/pyramid logo (top-left), page-title text next to it (e.g. "Visitor Reveal", "Analytics", "Settings"). Right side icons: dark-mode moon toggle, global search (magnifier), help (?), notifications bell, user/profile avatar.
- **Left icon rail** (narrow, icon-only, no labels). Top-to-bottom icons observed:
  1. Sparkles/AI (✦) — top item, likely Agentic/AI home
  2. House (Home / dashboard)
  3. Briefcase (Accounts / business)
  4. People (Contacts / audience)
  5. Megaphone (Campaigns)
  6. Funnel/filter (Segments or filters)
  7. Globe-with-magnifier (Visitor Reveal — highlighted/active on the reveal page)
  8. Line chart with sparkle (Analytics — highlighted/active on the analytics page)
  - Bottom of rail: a collapse/expand chevron-style icon.
- The active rail icon gets a light purple rounded pill background.

## Screen 1 — Visitor Reveal / Accounts (`/reveal/accounts`)
File: `static/img/screenshots/ref-reveal-accounts.png`

- Page title: **"Visitor Reveal"**.
- Two tabs at top: **ACCOUNTS** (active) and **CONTACTS**.
- Summary stat tiles across the top: **33,997 All Accounts**, then intent/fit buckets: **14 Very High**, **11 Moderate**, **10 Very Low**, **10 Low**, **5 High**.
- Toolbar: Search box, **FILTERS** dropdown, a **Sort By "Reveal Last See.."** dropdown, plus sort-direction, column-layout, and overflow (3-dot) icon buttons on the right.
- Data table columns: checkbox select, **Domain** (with favicon/logo), **Name**, **Industry**, **LinkedIn URL** (clickable linkedin.com/company links), **Inferred Revenue** (e.g. $1M-$10M, $250M-$500M, $500M-$1B), **Visited Pages** ("VIEW (n)" links, e.g. VIEW (330)), and a **Summary** column (truncated text).
- Notable/new: this is a de-anonymized visitor identification ("Reveal") surface with firmographic enrichment (industry, inferred revenue, LinkedIn) and per-account page-visit counts — distinctly more enrichment-heavy than typical older ABM account lists.

## Screen 2 — Analytics Dashboards (`/analytics/dashboards`)
File: `static/img/screenshots/ref-analytics-dashboards.png`

- Page title: **"Analytics"**.
- CAPTURE NOTE: page never rendered content within the 30s window on either of two attempts — it shows only the centered Abmatic pyramid logo with a purple progress bar (loading state). The Analytics rail icon is shown active. Dashboard body content could not be captured; this is a slow async-loading page rather than a blank/login error.

## Screen 3 — Integrations (`/integrations`)
File: `static/img/screenshots/ref-integrations.png`

- This route lands inside **Settings** (page title "Settings"); **INTEGRATIONS** is the active tab in the Settings tab row.
- Settings tab row (left to right): **ACCOUNT, USERS, CUSTOM FIELDS, INTEGRATIONS, EXPORTS, CONTACT REVEAL, USAGE, AI AGENTS, WEBSITE CONTEXT, API KEYS, CHANGE PASSWORD, NO...(Notifications, cut off)**.
- Section **"Customer Relationship Management (CRM)"** with helper text "Set the order of CRMs by moving the integrations." CRM cards (each draggable, has a 6-dot handle): **Salesforce** (Active / DISABLE), **HubSpot** (Active / DISABLE), **ActiveCampaign** (Inactive / AUTHORIZE), **Pipedrive** (Inactive / AUTHORIZE). Each card has a gear "SETTINGS" link.
- Section **"Communications"** ("Connect all your communication sources and alert mechanisms."): **Gmail**, **Slack** (badged "from Salesforce"), **Google Calendar** ("enable meeting booking through Agentic Chat"), **Zoom** ("create Zoom meeting links"). Cards have SETTINGS links.
- Notable/new: Google Calendar + Zoom integrations explicitly tied to **Agentic Chat** meeting booking — ties to the AI/agent product surface.

## Screen 4 — Website Context (`/settings/website-context`)
File: `static/img/screenshots/ref-website-context.png`

- Settings page, **WEBSITE CONTEXT** tab active.
- Two sub-tabs: **PAGES SCRAPED** (active, purple pill) and **SETTINGS**.
- Helper concept: scraped website pages are used as AI context.
- Toolbar: Search, **FILTERS** dropdown, **Rows: 1** count, **Sort By** dropdown, sort-direction + overflow buttons.
- Table columns: **Page URL**, **Summary**, **FAQs**, **Preview**, **Rescrape**, **Delete**.
- One row present: "Abmatic AI | Transforming Account-Based Marketing" (path "/"), with an eye-icon **Summary** link, **9 FAQs** link, eye-icon **Preview** link, a circular **Rescrape** icon, and a trash **Delete** icon.
- Notable/new: an AI "website context" knowledge base — Abmatic scrapes your site, auto-generates a page Summary and FAQs, which feed the AI agents (see AI Agents tab's "Refresh context").

## Screen 5 — AI Agents (`/settings/ai-agents`)
File: `static/img/screenshots/ref-ai-settings.png`

- Settings page, **AI AGENTS** tab active.
- Two sub-tabs: **AGENTIC CHAT** (active, purple pill) and **AGENTIC SEQUENCE**.
- Helper text: "Regenerate context from your scraped website pages using AI." with a **REFRESH CONTEXT** button.
- Main body: a large editable **"Abmatic AI – Assistant Context Document"** panel (auto-generated brand/product context the agents use). Structured sections visible:
  - **Company snapshot** — describes Abmatic AI as "a unified, account-based marketing (ABM) platform that uses **Agentic AI (autonomous, task-oriented agents)** to orchestrate and automate multi-channel demand generation and ABM campaigns." Who it serves: growth marketers, demand-gen teams, ABM leaders, revenue teams running targeted account-based programs (primarily B2B). Core promise: hyper-personalized, intent-driven, multi-channel campaigns that launch fast, optimize automatically, prove ROI within hours/days not weeks.
  - **Brand voice and communication style** — confident, ROI-obsessed, practical, performance-driven; verbs like orchestrate/scale/personalize/measure/unlock; CTAs "Book a demo. Talk now. Ask the AI assistant."
  - **Platform overview (modules and capabilities)**:
    - **Agentic AI and Account-Based Agents** — "Agentic Chat and account-based agents automate personalization, channel orchestration, bidding, and optimization." Example agent named **"Clara"** — "a data-driven, multi-channel agent that crafts hyper-personalized campaigns for high-value accounts and continuously optimizes to improve ROI."
    - **Personalization Engine** — web and landing page personalization; banners and pop-ups; A/B testing for creative and experiences.
    - **Outbound and Email** — (email sequencing and outbound landing pages; text truncated at bottom).
- **SAVE CONTEXT** button at bottom.
- Notable/new AI feature names: **Agentic Chat**, **Agentic Sequence**, "account-based agents", and a named example agent **"Clara"**. The whole surface is an LLM-context document editor feeding autonomous agents — clearly the current "Agentic AI" generation of the product.

## Cross-screen takeaways

- The product is branded around **"Agentic AI"** / autonomous agents. Two named agent surfaces: **Agentic Chat** (website chat / meeting booking) and **Agentic Sequence** (outbound sequencing). Example agent persona: **Clara**.
- **Visitor Reveal** (de-anonymization + firmographic enrichment + page-visit tracking) is a first-class left-rail destination with Accounts/Contacts tabs.
- Settings is a broad tabbed area: Account, Users, Custom Fields, Integrations, Exports, Contact Reveal, Usage, AI Agents, Website Context, API Keys, Change Password, Notifications.
- **Website Context** (scrape → auto Summary + FAQs) is the knowledge base that powers the AI agents via "Refresh Context".
- CRM integrations are drag-orderable (Salesforce/HubSpot active; ActiveCampaign/Pipedrive available); Comms integrations (Gmail/Slack/Google Calendar/Zoom) feed Agentic Chat meeting booking.
- Analytics dashboard body did not load in time — flag for a manual/longer-wait recapture if a docs screenshot is needed.
