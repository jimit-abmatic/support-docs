# Doc Audit — ai-agents section

Audit date: 2026-06-12
Repo root: /Users/jimabmatic.ai/abmatic/support-docs
Files audited: 5 (docs/ai-agents/*.md)

Screenshot existence check: all 4 referenced PNGs exist under `static/img/screenshots/`
(`clara-abm-main.png`, `settings-ai-agents.png`, `ai-agents-hub.png`, `alex-sdr-main.png`).
NOTE: a `settings-ai-agents-config.png` also exists on disk but is NOT referenced by any
ai-agents doc — possible orphan / candidate the config doc should use.

---

## docs/ai-agents/overview.md

- **docPath:** docs/ai-agents/overview.md
- **Frontmatter:** id=ai-agents-overview, title="AI Agents", sidebar_label="Overview", sidebar_position=1
- **Topic / summary:** Top-level landing page for the AI Agents section. Introduces the three
  AI surfaces — Clara (ABM agent, internal), Alex (SDR agent, internal), and the Agentic Chat
  Widget (external/website). Covers access path, getting started in 3 steps, voice mode, agent
  settings, real-world workflow scripts, plan tiers, troubleshooting, and a large copy-paste
  prompt library for marketers.
- **Screenshots referenced (1):**
  - line 26: `/img/screenshots/ai-agents-hub.png` (exists on disk)
- **Product features / UI / labels CLAIMED to exist:**
  - Left sidebar item **AI Agents** (access path).
  - Two named agents: **Clara** (AI ABM Agent) and **Alex** (AI SDR Agent).
  - Third surface **Agentic Chat Widget** (external website AI), links to agentic-chat-widget doc.
  - Login URL `app.abmatic.ai`.
  - Voice Mode: microphone icon to start, click again / pause to stop, keyboard icon to switch to text.
  - Settings → **AI Agents** with settings: Company Context, Pricing Information, Product Details, Differentiators.
  - Campaign types implied by prompt library: inbound personalization campaign, outbound campaign,
    **Banner & Popup** campaign (with exit-intent trigger), dynamic account lists, contact lists, reports.
  - **Plan tiers**: Starter (limited agent access), Growth (full Clara + Alex), Enterprise (full + custom config).
  - Support email `support@abmatic.ai` for upgrades.
  - Claims agents "remember context" / chain requests across messages.
- **Staleness signals:**
  - Marketing-heavy quantified claims that may not be verifiable in-product: "10x", "2-3x higher
    conversion", "80% reduction", "5x more qualified meetings", "90% reduction", "3x more qualified
    conversations". These are claims, not UI — flag for accuracy review, not necessarily stale.
  - **Plan Requirements** table (Starter/Growth/Enterprise + gating) is a high-risk staleness item —
    plan names and what's gated must be verified against current pricing/packaging.
  - Alex described with "Multichannel Engagement — Email, phone, and LinkedIn outreach" — must verify
    all three channels actually ship (see sdr-agent notes; LinkedIn especially).
  - Double `---` separator at lines 251-252 (cosmetic, harmless).
  - Prompt library references specific filters (inferred revenue, page-view counts, exit-intent,
    "/demo" page, CRM "Closed-Lost") — verify these targeting capabilities still exist with these labels.
  - No TODO/placeholder/"coming soon" text found.

---

## docs/ai-agents/configuration.md

- **docPath:** docs/ai-agents/configuration.md
- **Frontmatter:** id=ai-agents-configuration, title="Configuring AI Agents", sidebar_label="Configuration", sidebar_position=2
- **Topic / summary:** How to give AI agents company context. Documents the Settings → AI Agents area
  with two tabs (**Agentic Chat** and **Agentic Sequence**), what context to add for each (company
  overview, products/pricing, differentiators, FAQs for chat; value props, tone, follow-up cadence,
  personalization rules for sequence), best practices, and a testing checklist. Heavy use of example
  content blocks (fictional "Acme Analytics").
- **Screenshots referenced (1):**
  - line 34: `/img/screenshots/settings-ai-agents.png` (exists on disk)
- **Product features / UI / labels CLAIMED to exist:**
  - Settings (left sidebar) → **AI Agents**.
  - Exactly two configuration tabs: **Agentic Chat** and **Agentic Sequence**.
  - **Save Context** button.
  - Settings-vs-campaign precedence: settings = global defaults, campaign **Instructions** tab overrides.
  - Cross-link to /campaigns/agentic-chat for campaign-level config.
- **Staleness signals:**
  - Unverifiable stat: "40% higher engagement rates" (line 21) — claim, flag for review.
  - The referenced screenshot is `settings-ai-agents.png`, but disk also has a more specific
    `settings-ai-agents-config.png` that is unused — verify the screenshot actually shows the two-tab
    UI described (Agentic Chat / Agentic Sequence) and is current.
  - Tab names "Agentic Chat" / "Agentic Sequence" are the key labels to verify against live UI — if the
    product renamed these (e.g., to "Chat Widget" / "Sequences"), this whole doc is mislabeled.
  - All example content is fictional placeholder ("Acme Analytics", made-up pricing) — intentional, not
    stale, but a reviewer might mistake it for real product pricing.
  - No TODO/"coming soon" text found.

---

## docs/ai-agents/sdr-agent.md

- **docPath:** docs/ai-agents/sdr-agent.md
- **Frontmatter:** id=sdr-agent, title="Alex - AI SDR Agent", sidebar_label="AI SDR (Alex)", sidebar_position=3
- **Topic / summary:** Deep dive on Alex, the AI SDR. Emphasizes voice calling as the core capability,
  plus multi-channel outreach (phone/email/LinkedIn), ICP qualification, prioritization, and automated
  follow-up. Documents the engage-a-prospect form, in-app test-call behavior, configuration via the
  Agentic Sequence settings tab, best practices, and a metrics/FAQ section.
- **Screenshots referenced (1):**
  - line 40: `/img/screenshots/alex-sdr-main.png` (exists on disk)
- **Product features / UI / labels CLAIMED to exist:**
  - **AI Agents** sidebar → select **Alex** (AI SDR).
  - Prospect-engagement form fields: **Mobile Number** (E.164), **LinkedIn URL**, **Work Email**.
  - Button: **Get in touch with Alex**.
  - Behavior claim: leaving Mobile Number blank triggers an **in-app** test call you can hear.
  - With a mobile number, Alex "calls the prospect directly within minutes"; call recordings logged.
  - Config path: Settings → **AI Agents** → **Agentic Sequence** tab; **Save Context** button.
  - Metrics surfaced in **Analytics**: Outreach Volume, Response Rate, Qualification Rate, Meetings
    Booked, Pipeline Influenced.
- **Staleness signals:**
  - **Multi-channel claim (phone + email + LinkedIn)** is the highest-risk item: verify Alex actually
    performs LinkedIn and email outreach today, or whether it is voice-only / voice+email. Doc leans
    hard on voice calling as "where the magic happens."
  - Real outbound phone calling raises compliance/consent questions; doc says "Ensure you have proper
    consent" but verify the feature ships and how it is gated (telephony provider, regions).
  - The Analytics metrics list (Outreach Volume / Response Rate / Qualification Rate / Meetings Booked /
    Pipeline Influenced) must be checked against the actual Analytics UI — these named tiles may not exist.
  - The exact button label **"Get in touch with Alex"** and field set must be verified against live form.
  - Quantified claims ("10x", "increase qualified pipeline by 40%", "ROI within 60 days") are example/
    marketing copy — flag for accuracy but not structural staleness.
  - No TODO/placeholder/"coming soon" text found.

---

## docs/ai-agents/abm-agent.md

- **docPath:** docs/ai-agents/abm-agent.md
- **Frontmatter:** id=abm-agent, title="Clara - AI ABM Agent", sidebar_label="AI ABM (Clara)", sidebar_position=4
- **Topic / summary:** Deep dive on Clara, the conversational ABM assistant. Documents five core
  functions (build account lists, build contact lists, launch campaigns, generate reports, suggest
  personalization), getting-started flow with quick-start buttons, an extensive example-prompt library,
  voice mode, configuration via Settings, best practices, real-world workflows, KPIs, and troubleshooting.
- **Screenshots referenced (1):**
  - line 61: `/img/screenshots/clara-abm-main.png` (exists on disk)
- **Product features / UI / labels CLAIMED to exist:**
  - **AI Agents** sidebar → select **Clara** (AI ABM).
  - Quick-start buttons: **Accounts**, **Contacts**, **Campaigns**, **Reports**, **Personalization**
    (lines 64-70).
  - Voice mode button (speak instead of type).
  - Config path: Settings → **AI Agents** → **Agentic Chat** tab; **Save Context** button.
  - Capabilities: creates dynamic/static account lists, contact lists, inbound campaigns, reports/analysis,
    website personalization headline/CTA suggestions — all via natural language.
- **Staleness signals:**
  - **INTERNAL INCONSISTENCY (notable):** Clara's config is documented here under the **Agentic Chat**
    tab (line 156), but Clara is an *internal ABM* agent. The agentic-chat-widget doc and configuration
    doc frame the **Agentic Chat** tab as context for the *website visitor* chat widget. This conflation
    of "Agentic Chat" (settings tab) with Clara's context is a likely doc error and a top thing for the
    planner to resolve — verify which settings tab actually drives Clara.
  - Quick-start button labels (Accounts/Contacts/Campaigns/Reports/Personalization) must be verified
    against the live Clara UI — exact wording/availability.
  - Quantified KPI/benefit framing ("Minutes, Not Hours", "2-3x", etc.) is marketing copy.
  - Workflow examples reference CRM-driven filters (Q1 opportunities, "downloaded our ROI guide",
    "Closed-Lost") — verify Clara can actually filter on CRM opportunity stage / form-download events.
  - No TODO/placeholder/"coming soon" text found.

---

## docs/ai-agents/agentic-chat-widget.md

- **docPath:** docs/ai-agents/agentic-chat-widget.md
- **Frontmatter:** id=agentic-chat-widget, title="Agentic Chat Widget", sidebar_label="Chat Widget", sidebar_position=5
- **Topic / summary:** Conceptual + configuration doc for the customer-facing on-site AI chat widget.
  Contrasts it with internal Clara/Alex, explains the visitor journey, intelligence sources, AI
  capabilities (NLU, context awareness, lead qualification tiers), voice interaction via OpenAI Realtime
  API (with a 6-voice picker), integration with visitor tracking / campaigns / Slack / CRM, configuration
  precedence (settings vs campaign), performance optimization targets, and security/privacy.
- **Screenshots referenced (0):** none. (`grep '!\['` returns nothing.)
- **Product features / UI / labels CLAIMED to exist:**
  - Widget deployed via **Agentic Chat campaigns** (campaign targeting controls which visitors see it).
  - Voice: microphone button → WebRTC → **OpenAI Realtime API**; transcripts saved as text.
  - Voice picker with 6 named voices: **Alloy, Echo, Fable, Onyx, Nova, Shimmer** (line 103-110).
  - Intent tiers: High / Medium / Low with next-action mapping.
  - **Slack notifications**: first-message alert, email-capture notification, high-intent signal.
  - Config: Settings → **AI Agents** → **Agentic Chat** tab → **Save Context**; campaign-level
    **Instructions** tab → **Save**; precedence rule (campaign overrides settings).
  - Cross-links: /campaigns/agentic-chat, /ai-agents/ai-agents-configuration, /ai-agents/ai-agents-overview,
    /visitor-tracking/overview.
- **Staleness signals:**
  - **No screenshot at all** — the only doc in the section with zero images, despite describing a
    visible voice picker and a widget UI. Strong candidate for adding screenshots (widget on site,
    voice selector).
  - **Voice list is hardcoded to OpenAI's 6 classic voices** (Alloy/Echo/Fable/Onyx/Nova/Shimmer).
    OpenAI's Realtime voice lineup has changed over time (newer voices added, some defaults renamed);
    verify the in-product picker still offers exactly these six. HIGH staleness risk.
  - Names a specific vendor/tech ("OpenAI Realtime API", "WebRTC") — verify still accurate and that
    naming the vendor is desired in customer docs.
  - **CRM Potential** section (lines 145-151) is explicitly aspirational ("Captured data *can* flow to
    your CRM") — soft "coming soon"-style framing; verify whether CRM sync is actually live or still
    "potential". This is the closest thing to a placeholder/forward-looking claim in the set.
  - Performance "targets" (conversation rate 5-15%, email capture 20-40%, high-intent 10-25%) are
    benchmark claims, not UI — flag for review, low structural risk.
  - "Compliant with standard data protection practices" / "No visitor data shared with third parties"
    are privacy claims worth legal verification given the OpenAI dependency.
  - No TODO text found.

---

## Cross-cutting observations for the planner

1. **"Agentic Chat" tab ambiguity** — three docs (configuration, abm-agent, agentic-chat-widget) all
   point Clara/chat context at a Settings → AI Agents → **Agentic Chat** tab, but abm-agent uses it for
   Clara's internal ABM context while the widget doc uses it for the external widget. Confirm whether one
   tab really drives both, or the docs have crossed wires. Single highest-value thing to verify.
2. **Plan/packaging gating** (overview.md Starter/Growth/Enterprise) needs verification against current pricing.
3. **Alex multi-channel scope** (phone/email/LinkedIn) — verify which channels truly ship.
4. **Widget voice list** — verify the 6 OpenAI voices still match the live picker.
5. **Screenshot freshness** — all 4 referenced images exist, but none verified as current; agentic-chat-widget
   has zero screenshots; `settings-ai-agents-config.png` exists unused.
6. No literal "TODO" / "coming soon" / placeholder markers anywhere; staleness here is about UI-label drift
   and unverified marketing stats, not abandoned stub text.
