# Campaigns Area — Current State Discovery (from live frontend source)

Source: `/Users/jimabmatic.ai/abmatic/app-frontend` (React/TS). Scanned 2026-06-12. Docs baseline ~Jan–Mar 2026.

---

## 1. Campaign list + create flow (CURRENT)

**Routes**
- `/campaigns` → list (`components/campaigns/Container.tsx`). Single tab labeled **Table**; top-right **+ Campaign** button. Empty state: "Create your first campaign".
- `/campaigns/first-party`, `/campaigns/third-party` → Intent campaign builders.
- `/campaigns/:campaignType/:campaignId/:action` → campaign detail (tabs).
- `/campaigns/:type/:id/pages/:pageId/editor` → visual personalization page editor.
- `/campaigns/:type/:id/creatives/:creativeId/editor` → ad creative editor (`AdEditor`).
- `/campaigns/:type/:id/conversions` → conversions.

**Create Campaign modal** (`CreateCampaign.tsx`) — full-screen stepper, cards grouped into THREE categories (NOTE: category names changed — see §3):

- **Personalization**
  - **Inbound** — "Personalized web experiences using visual editor."
  - **Outbound** — "Hyper-personalized landing page experiences."
  - **A/B Testing** — "Continuously improve your website's messaging."
  - **Widget** (internal type `banner_popup`) — "Nudge your audience to convert faster." (RENAMED from "Banner & Popup")
- **Advertising**
  - **Display Advertising** (`display-ads`)
  - **LinkedIn**
  - **OpenAI Ads** (`openai`) — "Reach buyers in ChatGPT conversations." (NEW; replaced the Meta tile)
  - **Retargeting**
  - (Google tile is commented out / hidden)
- **Agentic** (RENAMED from "Advanced")
  - **Agentic Flow** (`agentic-flow`) — "Agents craft 1:1 personalized messages."
  - **Sequence** (internal type `email`) — "Create a personalized sequence campaign." (display label is "Sequence", type stays `email`)
  - **Intent** (`first-party`) — "Find hot in-market accounts." (leads into First/Third-party intent picker)
  - **Agentic Chat** (`agentic-chat`) — "AI-powered chat widget for visitor engagement."
- (Nurture / Meta / Google: commented out, not user-visible.)

Creation behavior: `inbound`, `banner_popup` (Widget), `ab_test`, `openai`, `agentic-flow`, `agentic-chat` create immediately and jump to editor. `email` (Sequence) and `outbound`/others go through account/contact + collection selection. **Intent** → "Select Intent Type" step (First Party = own-website visitors; Third Party = third-party data sources). **OpenAI Ads is gated**: if the OpenAI Ads API key isn't connected, the user is redirected to `/integrations` with a snackbar.

**Campaign type → display label map** (`campaignTypeUtils.ts`, single source of truth):
`inbound`=Inbound, `outbound`=Outbound, `ab_test`=A/B Test, `banner_popup`=**Widget**, `linkedin`=LinkedIn, `google`=Google, `display-ads`=Display ADs, `meta`=Meta, `openai`=**OpenAI Ads**, `salesforce_campaign`=Salesforce Campaign, `first-party`=1st Party, `third-party`=3rd Party, `nurture`=Nurture, `email`=Email, `retargeting`=Retargeting, `agentic-flow`=Agentic Flow, `agentic-chat`=Agentic Chat.

**URL-slug landmine for docs**: `banner_popup` campaigns now use the URL slug `widget` (`/campaigns/widget/...`). Old `/campaigns/banner_popup/...` URLs still resolve (back-compat mapping in `campaignTypeUtils.ts`).

---

## 2. Campaign Detail tabs (CURRENT, by type) — `CampaignDetail.tsx`

Tabs are conditionally rendered per `campaignType`:

- **Insights** — always. (Email → `EmailInsights`; LinkedIn SPONSORED_INMAILS → `LinkedinMessagingInsights`; else `Insights`.) Has a date-range selector with **compare date ranges** support.
- **Audience** (internal value `edit`) — for inbound/outbound/email/agentic-flow/agentic-chat/banner_popup/ab_test → `EditDefinition`; openai → `OpenAIDefinition`; else `DSPDefinition`.
- **Instructions** — **agentic-chat ONLY** (NEW; see §4).
- **Pages** — inbound/outbound (`Pages`); ab_test shows "Pages" via `ABMappings`; banner_popup + **agentic-chat** show "Pages" via `Patterns`.
- **Sequence** — email + **agentic-flow**.
- **Tasks** — email only.
- **Creatives** (labeled **"Ads"** for OpenAI) — ad-network types (linkedin/openai/display-ads/retargeting).
- **Engagement** — always (EngagementHistory; OpenAI clicks attribute via `utm_campaign`).
- **Performance** — all except email (see §5 for new AI Conversation Summary sub-tab).

Per-tab **+ Add** button: Pages→"Page", Creatives→"Creative" (OpenAI→**"Ad"** opens inline `OpenAIAdDialog`), Patterns→"Page", Mappings→"Pages", Sequence→"Step".

**Campaign status menu** (`StatusCellMenu.tsx`): personalization statuses = Full personalization (1.0), Ongoing (0.9), Experiment (0.5), Inactive (0), plus "No Active Page". **Ad-network (OpenAI) campaigns** get a simplified live/inactive toggle ("Set the campaign live on OpenAI Ads" / "Pause the campaign on OpenAI Ads") — no A/B weights.

---

## 3. NEW / CHANGED SINCE ~2026-03-01 (with commit refs)

### Agentic Chat (HEAVILY improved — priority)
- **`47891b9d` / `363e3665`** — NEW **"AI Conversation Summary"** Performance sub-tab for agentic-chat (`ChatTopicSummaryTable.tsx`). Auto-clusters visitor conversations into topics with columns: Topic, Description, **Visitors with Chat**, **Converted**, **Sentiment** (Positive/Negative pill). Endpoint `campaigns/<id>/chat-topic-summary` (also `accounts/<id>` and `contacts/<id>`). **`f8955058`** removed header row, full-height table. **`07e291b0`** chat-topic entity backlink: "Show visitors (N)" jumps to Visitors tab filtered to the topic's visitor_ids.
- **`55819c87` + `d91bb988` + `4e825f9b` + `d1b5c605` + `5d654e3a` + `c00898a1` + `cc6cff9a`** — NEW **email-handoff modes** for agentic chat. In the **Instructions** tab (`InstructionsTab.tsx`), section "When the visitor shares their work email" with a radio:
  - **Book a meeting** (`book_meeting`) — "Show live calendar slots from the routed AE's Google Calendar."
  - **Send a thank-you** (`thank_you`) — optional custom thank-you line.
  - **Show a HubSpot form** (`hubspot_form`) — embed a HubSpot form in chat + Slack notify on submit (uses `HubspotFormSelect`/`HubspotFormPicker`).
  Requires explicit **Save** click. Campaign fields: `agenticChatHandoffMode`, `agenticChatThankYouMessage`, `agenticChatHubspotForm`.
- **Instructions tab** itself = "AI Instructions" textarea (`agenticChatContext`): company/product context for the chat assistant. (agentic-chat only)
- **`c85dd653`** — demo booking columns added to agentic-chat performance table.
- Agentic-chat widget editor: numerous CSS-isolation/style fixes (`ce2887db`, `dae95e46`, `d3470cb0`, `07155244`); background-color picker was added then **reverted** (`ab0e1576` removed it); chat message font size increased (`ea1abc0a`); avatars removed, "talk" button moved beside "Book demo" (`b2cb624c`); pill-button standardization (`2f05cda9`).
- **`f03b6c5d`** — NEW segmentation filter **"AI Conversations"** (`totalAIConversations`, integer, Behavior category, is above/is below) — segment audiences by number of AI chat conversations.

### OpenAI Ads (NET-NEW campaign type, replaces Meta)
- **`13bd50bc` / `63abda3d`** — OpenAI Ads campaign type added (swapped out Meta tile), with `OpenAIDefinition` audience editor.
- **`a1f4518d`** — OpenAI Ads card added to `/integrations` (ad-network section); needs API key connected.
- **`3b79e54e`** — **Ads grid + `OpenAIAdDialog`** (inline ad editor: Ad Name, Title, Description, Link, Image; **+ Ad** button; image click-to-enlarge lightbox).
- **`7ec86314`** — Insights tab for OpenAI: impressions / clicks / spend / CTR / CPC / CPM.
- **`aa47d469`** — **AI Strategy** button (`AIStrategyDialog.tsx`): customer describes strategy in a modal; backend agent reads brand+website and auto-builds the whole campaign (objective, bids, context hints, **5 ad copies + 5 brand-aware images**), syncs to OpenAI Ads **PAUSED** for review. Also enabled Engagement + Performance tabs for OpenAI; gating to /integrations.
- **`1aaeeab0`** — "Import Campaigns" button (Settings) wired to real import; **`d90ed1b2`** ad-level stats/status + async import polling; **`9437c681`** campaign-list live/inactive toggle for OpenAI.
- **`5a042dc1`** — Locations restricted to fixed US/CA/AU/NZ select.

### Widget + sidebar personalization (page-editor widgets)
- **`8899ae40`** — **"Banner & Popup" campaign RENAMED to "Widget"**; create-category **"Advanced" RENAMED to "Agentic"**. Internal type `banner_popup` unchanged; URL slug now `widget`.
- **`2592cca3`** — NEW **Sidebar personalization widget** in campaign editor — a 5th widget alongside banner / popup / exit-intent modal / agentic chat. 4 anchor positions (mid/bottom × left/right), trigger = Always / After-Delay / On-Scroll, inline card image/link/title + CTA editing via preview iframe (`editor/widgets/sidebar.ts`). **`ad0f882a`** hides anchor-target selector, sidebar links open same page.
- **`c5d5879c` / `e2d4b9e4`** — HubSpot form picker added to popup/exit-intent widget editor (`HubspotFormPicker.tsx`).
- **`0be9a486` / `6c755edf`** — "Open in" dropdown (anchor target attribute) in personalization editor.
- **`8258cf44`** — Banner & Popup widget gained a **Contact List** audience option.

### Google Ads (Customer Match)
- **`461f38b2`** — Customer Match upload shows enrichment step + match-status feedback in popup.
- **`b0f344f9`** — Google Ads popup back to 3 steps (Preparing → Creating → Uploading), dropped inline Enriching; success reads "Uploaded N of M contacts" + skipped-records warning. (Note: Google tile is currently HIDDEN in Create Campaign even though Google-ads upload flow exists.)
- **`f7bdc132` / `f186f152`** — datamanager OAuth scope for Google Ads Customer Match.

### Demo-booked surfacing across campaigns (NEW)
- **`8a6a1e37` / `1fcc213c` / `c85dd653`** — Performance/account/contact tables gained **Demo Booked At / Demo Scheduled At / demoAE / demoTime** columns (agentic-chat & account/contact rollups). Demo Booked *badge/chip* was tried then reverted; columns kept.

### Campaign-card logos refreshed
- **`fa2e9246` / `40064862` / `5a957a52` / `8451ddd0`** — OpenAI + lighter-purple LinkedIn campaign-card logos; hover-gif variants.

### Performance tab misc
- **`e7f7ad35`** — fixed Performance-tab search.

---

## 4. ORACLE — NEW autonomous-agent product (LIKELY UNDOCUMENTED)

Commits: `83afa02b` (foundation/admin config), `bc06d8ee` (approval inbox), `2d0921c9` (goals).

- **Oracle Goals** — route `/oracle/goals` (`components/oracle/Goals.tsx`). Heading "Oracle Goals". **New Goal** dialog: Title, Description, Success metric (e.g. demos_booked), Target value, Target date. Goal cards show progress bar (`current/target`, %). Clicking a goal → **Checkpoints** dialog ("The Oracle appends one after each weekly review" — week, progress, agent notes, actions taken). Gated by feature flag **`autonomous_agent.goals`**; off → "Goals aren't enabled… Reach out to your Abmatic rep." Sidebar nav shows **Goals** (flag icon) only when flag on.
- **Oracle Inbox / Approvals** — route `/oracle/inbox` (`components/oracle/ApprovalInbox.tsx`). "Oracle Approvals" — cards with action_type, **Risk tier** chip (low/medium/high), **Est. spend** chip, rationale, JSON payload preview; **Approve / Deny** with optional notes. Endpoints `oracle/approvals`, `.../{id}/approve|deny`. Gated by **`autonomous_agent.approval_inbox`**; 403 → "Oracle is not enabled for your account." Sidebar nav item **Oracle Inbox** (inbox icon) only when flag on.
- NOTE: App.tsx in scope only wires `/oracle/goals` and `/oracle/inbox` exists as a sidebar nav target; both are flag-gated and won't appear for non-enabled accounts.

---

## 5. AI Agents (chat) — current naming

Route `/ai-agents/:agent?` (`components/chat/Container.tsx`). Topbar "AI Agent". Two agents defined:
- **Clara** — "AI ABM" — "Campaigns That Convert, Powered by AI." (ABMAgent)
- **Alex** — "AI SDR" — multichannel outreach / ICP qualification. (SDRAgent)

Landing currently shows **only Clara** (`agents.slice(1)`), i.e. Alex/SDR tile is hidden on the picker though the agent still exists at `/ai-agents/sdr`. ABMAgent has auto-greeting, **New Chat**, sample prompts, and a **Voice Mode** (`?mode=voice`). Sidebar nav top item = **AI Agent** (`ai-agents/abm`, AutoAwesome icon).

---

## 6. Left ICON SIDEBAR (new global nav) — `SideNavContainer.tsx`

Top items (in order): **AI Agent**, *(Goals — flag-gated)*, **Home**, **Accounts**, **Contacts**, **Campaigns**, **Conversions**, **Visitor Reveal** (`/reveal`), **Analytics**, *(Oracle Inbox — flag-gated)*. Bottom: **Installation**, settings, etc. Collapsed 54px / expanded 200px. There is a floating ABM-agent help panel (`?ai-agent-help`).

---

## 7. First-party vs Third-party (Intent)

`Create Campaign → Agentic → Intent` → "Select Intent Type":
- **First Party** → `/campaigns/first-party` (`FirstParty.tsx`) — "Track intent from your own website visitors." Slider-based intent scoring/config.
- **Third Party** → `/campaigns/third-party` (`ThirdParty.tsx`) — "Track intent from third-party data sources."

---

## 8. DOC-IMPACT NOTES (what docs must add/fix)

1. **RENAME**: "Banner & Popup" campaign → **"Widget"** everywhere. URL slug is now `/campaigns/widget/...` (old `banner_popup` URLs still work). Update screenshots/labels.
2. **RENAME**: Create-campaign category "Advanced" → **"Agentic"**. Categories are now exactly: Personalization, Advertising, Agentic.
3. **NEW campaign type: OpenAI Ads** (replaced Meta in the tile grid). Document: requires OpenAI Ads API key in Integrations; Ads grid + inline Ad editor; **AI Strategy** one-click campaign builder (5 ads + 5 images, publishes PAUSED); Insights metrics (impr/clicks/spend/CTR/CPC/CPM); live/inactive toggle; Locations limited to US/CA/AU/NZ; "Import Campaigns".
4. **Agentic Chat overhaul** — docs must add: **Instructions** tab (AI Instructions context + **email-handoff modes**: Book a meeting / Send a thank-you / Show a HubSpot form); **AI Conversation Summary** Performance sub-tab (topic clustering, sentiment, converted, "Show visitors" backlink); demo-booking columns; new **"AI Conversations"** audience filter.
5. **NEW Sidebar personalization widget** in the page/widget editor (5th widget: banner / popup / exit-intent modal / sidebar / agentic chat). Document anchor positions + triggers + HubSpot-form picker in popup/exit-intent.
6. **NEW Oracle product** (autonomous agent): **Oracle Goals** (`/oracle/goals`) and **Oracle Approvals/Inbox** (`/oracle/inbox`) — both feature-flagged (`autonomous_agent.goals`, `autonomous_agent.approval_inbox`). Likely entirely undocumented. Risk-tier/est-spend approval workflow; weekly goal checkpoints.
7. **AI Agent naming**: agents are **Clara** (AI ABM) and **Alex** (AI SDR); picker currently surfaces only Clara. Voice Mode exists.
8. **New left icon sidebar** is the global nav — replaces any older top-nav docs. Note flag-gated items (Goals, Oracle Inbox) won't appear for all accounts.
9. **Campaign type labels** for tabs: OpenAI calls Creatives → **"Ads"**; agentic-chat & banner_popup "Pages" tab is the **Patterns/widget** editor, not the visual page editor.
10. **Demo Booked** columns now appear in account/contact/campaign Performance tables (demo booked at, scheduled at, AE, time) — driven by calendar/meeting-router integration.
11. **Google Ads** tile is currently HIDDEN in Create Campaign, but Google Ads **Customer Match** upload flow still exists (3-step popup, skipped-records summary). Clarify in docs that Google ad campaigns are created via the Customer Match/upload path, not the campaign tile.
12. **Sequence** campaign: internal type is `email` but the user-facing label is **"Sequence"**. **Agentic Flow** shares the Sequence editor + Audience tab ("Agents craft 1:1 personalized messages").
