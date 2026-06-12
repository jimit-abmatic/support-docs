# Discovery: AI Agents + Oracle area

Source-of-truth: live frontend at `/Users/jimabmatic.ai/abmatic/app-frontend` (read 2026-06-12).
Docs baseline ~Jan–March 2026. This file maps the CURRENT product state and flags what's new/changed.

## TL;DR (biggest changes vs March docs)

1. **Oracle is a whole NEW product surface — autonomous agent.** Three new things, all flag-gated and undocumented:
   - `/oracle/inbox` — **Oracle Approvals** inbox (approve/deny high-impact agent actions).
   - `/oracle/goals` — **Oracle Goals** (tell the autonomous agent what to pursue; weekly checkpoints).
   - Admin **"AI Agent (Oracle)"** config panel (model / trust tier / feature flags) under a single account.
2. **New global left ICON sidebar** is the nav. AI Agent, Goals (flagged), Home, Accounts, Contacts, Campaigns, Conversions, Visitor Reveal, Analytics, Oracle Inbox (flagged).
3. **Agent names: Alex/Clara are STILL current** — but the cast expanded. Alex = AI SDR, Clara = AI ABM (the two top-level `/ai-agents/:agent` personas). The in-app co-pilot/chat has a larger roster (Rachel/Joey/Marcus/Sophia/Jordan/James + Clara/Alex).
4. **Agentic Chat got major features**: AI thinking/tool-step chat UI, auto-greeting, email-handoff modes (book meeting / thank-you / HubSpot form), an "AI Conversation Summary" analytics tab, and demo-booking analytics columns. "Banner & Popup" campaign renamed to **Widget**; "Advanced" category renamed to **Agentic**.

---

## Current features

### /ai-agents/:agent? — AI Agent ("Meet Your AI Partner")
Component: `src/components/chat/Container.tsx` (route renders `<Chat>`), nav label **"AI Agent"**, default sidebar link is `ai-agents/abm`.
- Two top-level agents (`agents` array in Container.tsx):
  - **Alex — "AI SDR"** (`/ai-agents/sdr`). Heading "Let Alex Find Your Next Big Client." Capabilities text: "Multichannel Outreach, ICP Qualification, and Dynamic Lead Prioritization." Component `SDRAgent.tsx` — has a **voice call** flow ("Speak to Alex - Your AI SDR"), takes LinkedIn URL + email to personalize the call, initiates an AI voice call to a prospect.
  - **Clara — "AI ABM"** (`/ai-agents/abm`). Heading "Campaigns That Convert, Powered by AI." Capabilities: "Campaign execution, Personalization at Scale and Performance Analytics." Component `ABMAgent.tsx`.
- Landing (no `:agent`) shows **"Meet Your AI Partner"** and currently renders only the **Clara** card (`agents.slice(1)` — Alex card is sliced off the landing grid, though `/ai-agents/sdr` still works directly).
- Gated by `PaidPlanGuard`.

### In-app conversational co-pilot (ChatContext agent roster)
`src/contexts/ChatContext.tsx` defines a routed agent roster used by the chat/co-pilot (sidebar "Co-Pilot" card, `AgentCard.tsx`). These are named "directors"/specialists the conversation can route to:
- **Abmatic AI** (`abmatic_agent`) — "AI Agent", autonomous ABM assistant.
- **Rachel** (`super_agent`) — "Super Agent".
- **Clara** (`report`) — "Insights & Analytics Director".
- **Joey** (`content`) — "Website Content Strategist".
- **Marcus** (`campaign`) — "Campaign Operations".
- **Sophia** (`personalize`) — "Personalization Strategy Manager".
- **Alex** (`account`) — "Audience Accounts Director".
- **Jordan** (`contact`) — "Audience Contacts Director".
- **James** (`ai-bidding`) — "Bidding Strategy Expert".
- Chat backend: `ai/conversations` REST endpoints. Messages support `msgType`: text / **thinking** / **tool_call** / **tool_result** (agent "thinking" + tool steps render inline in `ChatWindow.tsx`). **Voice mode** exists (`VoiceMode.tsx`, `VoiceCommunication.tsx`, OpenAI WebRTC + text-to-speech).
- Co-pilot is reachable via `?ai-agent-help=<conversationId>` query param (opens `ChatSidebar`), and via the **AgentFAB** floating button.

> Note for docs: there are TWO distinct agent surfaces. (1) The full-page `/ai-agents/:agent` SDR (Alex) / ABM (Clara) product, and (2) the in-app co-pilot with the larger named roster. Don't conflate them.

### /oracle/goals — Oracle Goals (NEW, flag-gated)
Component: `src/components/oracle/Goals.tsx`. Nav label **"Goals"** (flag `autonomous_agent.goals`).
- Page title **"Oracle Goals"**, **"New Goal"** button.
- Goal card shows title, description, success metric, current/target value, **% progress bar**, target date.
- **New Goal dialog** fields: Title (required), Description, "Success metric (e.g. demos_booked)", Target value (number), Target date.
- **Checkpoints dialog** ("<title> — Checkpoints"): weekly checkpoints with Week of <date>, Progress, agent notes, and **Actions taken** list. Copy: "The Oracle appends one after each weekly review."
- Empty/disabled state copy: "Goals aren't enabled for your account yet. Reach out to your Abmatic rep to turn on the autonomous agent goal tracker."
- API: `GET/POST {baseURL}oracle/goals`.

### /oracle/inbox — Oracle Approvals (NEW, flag-gated)
Component: `src/components/oracle/ApprovalInbox.tsx`. Nav label **"Oracle Inbox"** (flag `autonomous_agent.approval_inbox`, helper `useHasApprovalInbox`).
- Topbar title **"Oracle Approvals"** + Refresh button.
- Each pending approval card shows: **action_type**, **Risk: low/medium/high** chip (color-coded), **Est. spend $X** chip, "Proposed <datetime>", a **rationale** line, and a JSON **payload preview** (truncated to ~400 chars).
- Actions: **Deny** / **Approve** (each opens a dialog with optional **Notes** "Add context for the agent or audit log.").
- API: `GET {baseURL}oracle/approvals`, `POST oracle/approvals/{id}/approve|deny`.
- Disabled state copy: "Oracle is not enabled for your account. Contact your account admin or support@abmatic.ai to request access to the autonomous agent approval inbox."
- Empty state: "No pending approvals. When the Oracle queues a high-impact action, it will show up here."

### Admin: AI Agent (Oracle) config — NEW
Component: `src/admin/components/singleAccount/aiAgent/AIAgentContainer.tsx`. Panel header **"AI Agent (Oracle)"** on a single account in admin.
- **LLM Model** select (per-account override or "Platform default (<model>)"; shows effective model chip).
- **Trust Tier** select. Helper text defines tiers verbatim:
  - **supervised** = approve all
  - **standard** = auto-small / approve-large
  - **autonomous** = just notify
- **Feature Flags** checklist (server returns `available_flags`; includes `autonomous_agent.goals`, `autonomous_agent.approval_inbox`).
- API: `GET/PUT {adminBaseURL}account/{accountId}/ai-agent` (fields: model, trust_tier, feature_flags).

### /settings/ai-agents — AI Agents settings
Component: `src/components/account/AIAgentsSettings.tsx`. (This is the customer-facing AI context config, NOT Oracle.)
- Two sub-tabs (buttons): **Agentic Chat** and **Agentic Sequence**.
- **Agentic Chat**: large context textarea ("Provide information about your company, products, services… helps the AI assistant answer visitor questions"); **"Refresh Context"** button = "Regenerate context from your scraped website pages using AI"; **"Save Context"**.
- **Agentic Sequence**: context textarea for AI email sequences (value props, tone, follow-up cadence).
- Stored on `account.aiAgents.agenticChat.context` / `agenticSequence.context`.

---

## New / changed since ~2026-03-01 (with commit refs)

Oracle (all post-March, the entire product):
- `83afa02b` **Oracle foundation: admin AI agent config UI** (#1350) — model / trust tier / feature flags panel.
- `bc06d8ee` **Oracle approval inbox UI** (#1351) — `/oracle/inbox`.
- `2d0921c9` **Oracle goals UI** (#1352) — `/oracle/goals`.
- `637e52ac` / `4e3b5341` — config import path fixes for AIAgentContainer.

AI Agent chat UX (mostly Apr–Jun):
- `71935171` **AI Agent chat UI with thinking/tool steps, auto-greeting, and direct nav** (#1301) — the inline thinking/tool-step rendering + proactive auto-greeting (`__auto_greeting__`).
- `4f1f3b9d` **Dark mode support for agent thinking/tool UI components**.

Agentic Chat (campaign/widget) — large set of post-March changes:
- `8899ae40` **Rename Banner & Popup campaign → "Widget"; "Advanced" category → "Agentic"** (terminology change — docs likely still say "Banner & Popup"/"Advanced").
- `55819c87` **campaign editor UI for email handoff modes** — "When the visitor shares their work email" radio: **book_meeting / thank_you / hubspot_form**, contextual fields per mode (custom thank-you line; HubSpot form picker). Refined by `d91bb988`, `4e825f9b`, `c00898a1`, `5d654e3a`, `d1b5c605` (handoff moved to widget side panel, dedicated HubspotFormSelect, explicit Save).
- `47891b9d` **"AI Conversation Summary" tab in agentic-chat performance view** (#1414) — `ChatTopicSummaryTable` AgGrid: **Topic / Description / Visitors with Chat / Converted / Sentiment** columns + headline counts + last-processed timestamp + **"Refresh insights"** button (on-demand classification endpoint). 5th tab, gated to `campaign.type === 'agentic-chat'`.
- `c85dd653` **Demo booking columns in agentic-chat performance table** — **Demo Booked / Demo AE / Demo Time**, color-coded status (Booked / Rescheduled / Cancelled).
- `ce2887db`, `dae95e46`/`dda1a217` (editor preview alignment + CSS isolation), background-color picker added then reverted (`73d137d7`→`ab0e1576`), avatar/talk-button tweaks (`b2cb624c`).

Global nav:
- The left ICON sidebar (`SideNavContainer.tsx`) is the current global nav; AI Agent is the top item, Goals + Oracle Inbox appear conditionally on flags.

---

## Exact current UI labels / terminology

- Sidebar: **AI Agent**, **Goals**, **Home**, **Accounts**, **Contacts**, **Campaigns**, **Conversions**, **Visitor Reveal**, **Analytics**, **Oracle Inbox**.
- Topbar on chat page: **"AI Agent"** (singular). Landing heading: **"Meet Your AI Partner"**.
- Agents: **Alex — "AI SDR"**; **Clara — "AI ABM"**. Co-pilot card chip label: **"Co-Pilot"**.
- Oracle Goals page: **"Oracle Goals"**, **"New Goal"**, success-metric example **"demos_booked"**, **"… — Checkpoints"**, **"Actions taken"**.
- Oracle Inbox page: **"Oracle Approvals"**, chips **"Risk: low/medium/high"**, **"Est. spend $X"**, buttons **Approve** / **Deny**, optional **Notes**.
- Admin: **"AI Agent (Oracle)"**, **LLM Model**, **Trust Tier** (supervised / standard / autonomous), **Feature Flags**.
- Settings/ai-agents tabs: **Agentic Chat** / **Agentic Sequence**; buttons **Refresh Context**, **Save Context**.
- Campaigns: campaign type **"Widget"** (was Banner & Popup); category **"Agentic"** (was Advanced); handoff modes **book_meeting / thank_you / hubspot_form**.
- Agentic chat analytics tab: **"AI Conversation Summary"** with **Topic / Description / Visitors with Chat / Converted / Sentiment**; **"Refresh insights"**. Demo columns: **Demo Booked / Demo AE / Demo Time** (Booked/Rescheduled/Cancelled).

---

## Doc-impact notes (what docs must add/fix)

1. **ADD an entire "Oracle (autonomous agent)" doc set** — currently undocumented:
   - Oracle Goals (creating goals, success metrics, weekly checkpoints).
   - Oracle Approvals / Inbox (risk tiers, est. spend, approve/deny with notes, audit log).
   - Concept of **trust tiers** (supervised / standard / autonomous) and how they govern auto-execution vs approval.
   - Both are **feature-flag gated** (`autonomous_agent.goals`, `autonomous_agent.approval_inbox`) — note they only appear for enabled accounts; default empty/disabled states tell users to contact their Abmatic rep / support@abmatic.ai.
2. **Verify Alex/Clara naming** (asked): CONFIRMED still current. Alex = AI SDR, Clara = AI ABM at the page level. But docs should add the broader **co-pilot roster** (Rachel/Joey/Marcus/Sophia/Jordan/James) if they document the in-app conversational agent. Clara appears in BOTH surfaces (page-level ABM agent AND co-pilot "Insights & Analytics Director") — disambiguate.
3. **Update the navigation doc** to the new left icon sidebar and the AI Agent / Goals / Oracle Inbox entries (the last two are flag-conditional).
4. **Agentic Chat docs need refresh**: campaign type renamed **Banner & Popup → Widget**, category **Advanced → Agentic**; document **email handoff modes** (book meeting / thank-you / HubSpot form), the **AI Conversation Summary** analytics tab, and **demo-booking columns** (Demo Booked / AE / Time). Also the thinking/tool-step chat UI + auto-greeting + voice mode if user-facing.
5. **Settings → AI Agents**: document the two tabs (Agentic Chat / Agentic Sequence) and **Refresh Context** (regenerate from scraped website pages).
6. Admin-only **"AI Agent (Oracle)"** per-account config (model override, trust tier, flags) — internal/admin doc, not customer-facing.

## Key files
- `/Users/jimabmatic.ai/abmatic/app-frontend/src/components/oracle/Goals.tsx`
- `/Users/jimabmatic.ai/abmatic/app-frontend/src/components/oracle/ApprovalInbox.tsx`
- `/Users/jimabmatic.ai/abmatic/app-frontend/src/components/oracle/useOracleFlags.ts`
- `/Users/jimabmatic.ai/abmatic/app-frontend/src/admin/components/singleAccount/aiAgent/AIAgentContainer.tsx`
- `/Users/jimabmatic.ai/abmatic/app-frontend/src/components/chat/Container.tsx` (Alex/Clara) + `ABMAgent.tsx`, `SDRAgent.tsx`, `ChatWindow.tsx`, `VoiceMode.tsx`
- `/Users/jimabmatic.ai/abmatic/app-frontend/src/contexts/ChatContext.tsx` (agent roster)
- `/Users/jimabmatic.ai/abmatic/app-frontend/src/components/account/AIAgentsSettings.tsx`
- `/Users/jimabmatic.ai/abmatic/app-frontend/src/components/common/SideNavContainer.tsx` (nav)
