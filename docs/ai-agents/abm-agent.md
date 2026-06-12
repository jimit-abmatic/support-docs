---
id: abm-agent
title: Clara - AI ABM Agent
sidebar_label: AI ABM (Clara)
sidebar_position: 4
---

# Clara - AI ABM Agent

Clara is the AI ABM (account-based marketing) agent in Abmatic AI. Instead of clicking through filters and setup screens, you tell Clara what you want in plain language and she does the work — building account lists, building contact lists, launching campaigns, and pulling reports.

<video class="support-video" controls preload="metadata" src="https://cdn.abmatic.ai/training/04-clara.mp4"></video>

🖱️ Prefer to click through it yourself? **[Open the interactive walkthrough →](https://cdn.abmatic.ai/training/04-clara/interactive/index.html)**

> 🎓 **[Browse every video tutorial in the Training Center → training.abmatic.ai](https://training.abmatic.ai)**


Clara is one of the two page-level AI agents in the platform. The other is **[Alex, the AI SDR agent](/ai-agents/sdr-agent)**. Both live under the **AI Agent** item at the top of the left icon sidebar.

:::info Clara also appears in the in-app Co-Pilot
The Clara on this page is the **page-level ABM agent** you chat with directly. Separately, Abmatic AI has an in-app **Co-Pilot** — a roster of specialist assistants the conversation can route to (for example a Campaign Operations specialist, a Personalization Strategy Manager, and a Website Content Strategist). Within that Co-Pilot roster, Clara appears as the **Insights & Analytics Director**. Same name, two surfaces — both are about ABM, just in different parts of the app.
:::

## Getting Started

### 1. Open Clara

Click **AI Agent** at the top of the left icon sidebar and go to the Clara page (the AI ABM agent). The top bar reads **"AI Agent."**

When you arrive, Clara greets you automatically — you'll briefly see **"Starting your AI Agent…"** and then a friendly opening message from Clara with a quick status update on your account.

![Clara, the AI ABM agent, with an auto-greeting message and the chat input at the bottom](/img/screenshots/clara-abm.png)

### 2. Tell Clara what you need

Type your request into the box at the bottom. The placeholder hints at what Clara can do:

> *"Tell me what to do — create campaigns, analyze data, manage audiences…"*

To start a fresh conversation at any time, click **New Chat** in the top right.

### 3. Use the quick-start categories

Clara offers quick-start prompt categories so you don't have to think of the wording yourself. Pick a category, then choose a ready-made prompt to run (or use it as a starting point and edit it):

| Category | Example prompts |
|----------|-----------------|
| **Accounts** | "Create an account list of technology companies with over 500 employees in the United States." · "Show me a platform overview — how many accounts, contacts, and campaigns do I have?" |
| **Contacts** | "Create a contact list of VP and Director level marketing leaders at SaaS companies." · "Search for contacts at companies in the healthcare industry." |
| **Campaigns** | "Create an inbound campaign targeting enterprise accounts from the US with 1000+ employees." · "Show me all my active campaigns and analyze which ones are performing best." |
| **Reports** | "Create a report showing campaign performance by type with visitor and conversion metrics." · "Analyze my campaign analytics — what's working and what needs improvement?" |
| **Strategy** | "Build me a full ABM campaign: create a target account list, then an outbound campaign for it." · "Check my integrations status and give me a summary of my platform health." |

:::note Label note
The fifth category is labeled **Strategy** in the current app. Earlier versions called it "Personalization."
:::

## What Clara Can Do

Clara handles common ABM tasks through conversation:

### Build account lists
Describe your ideal accounts and Clara turns the description into the right filters and creates the list.

> *"Create an account list of technology companies with over 500 employees in the United States."*

### Build contact lists
Target people by role, seniority, industry, and company criteria.

> *"Create a contact list of VP and Director level marketing leaders at SaaS companies."*

### Launch campaigns
Spin up campaigns without walking through the full setup flow.

> *"Create an inbound campaign targeting enterprise accounts from the US with 1000+ employees."*

### Generate reports and analysis
Ask for performance breakdowns and have Clara summarize what's working.

> *"Create a report showing campaign performance by type with visitor and conversion metrics."*

### Plan and check your setup
Clara can chain steps into a plan and check the health of your account.

> *"Build me a full ABM campaign: create a target account list, then an outbound campaign for it."*

As Clara works, the chat shows her **thinking** and the **steps/tools** she runs inline, so you can follow what she's doing.

## Voice Mode

Clara supports voice — you can speak your requests instead of typing. Start voice mode from the microphone control next to the chat input. It's handy for hands-free use, quick questions while you're reviewing other work, or accessibility preferences. You can switch back to typing at any time.

## Tips for Better Results

| Do | Why it helps |
|----|--------------|
| **Be specific** | "Technology companies with 500+ employees in the US" works better than "big tech companies." |
| **Include geography** | Naming a region (e.g. "United Kingdom", "US") lets Clara target precisely. |
| **Mention engagement** | Phrases like "viewed the pricing page" or "high engagement" add behavioral targeting. |
| **One task at a time** | Focused requests get cleaner results than several unrelated asks at once. |
| **Always review output** | Check the list or campaign Clara built before you activate it. |

## Configuration

Clara works better when she understands your business. To give the AI agents company context, go to **Settings → AI Agents**. That page has two context tabs — **Agentic Chat** (context the AI uses to answer questions) and **Agentic Sequence** (context for AI email sequences) — each with a **Refresh Context** button (to regenerate context from your scraped website pages) and a **Save Context** button.

:::caution "Agentic Chat" tab ≠ the website chat widget
The **Agentic Chat** tab in **Settings → AI Agents** stores company context for the AI assistant. That's different from the **Agentic Chat campaign** (the live chat **widget** that talks to visitors on your website). Clara is your internal ABM agent; the website widget is a separate, customer-facing feature configured per campaign. See [Configuring AI Agents](/ai-agents/ai-agents-configuration) for details on the settings tabs.
:::

## Troubleshooting

**Clara doesn't understand my request**
- Break a complex ask into smaller steps.
- Add specific criteria (industry, size, location).
- Start from a quick-start category, then edit the prompt.

**Results don't match what I expected**
- Review the filters Clara applied and adjust your wording.
- Make sure your data actually has the attributes you're filtering on.

**A campaign or list wasn't created**
- Confirm you have permission to create campaigns/lists.
- Check that the target audience actually contains accounts or contacts.

---

## Related

- [AI Agents Overview](/ai-agents/ai-agents-overview)
- [Configuring AI Agents](/ai-agents/ai-agents-configuration)
- [Alex - AI SDR Agent](/ai-agents/sdr-agent)
- [Website Personalization](/campaigns/website-personalization)
