---
id: ai-agents-settings
title: AI Agents (Context)
sidebar_label: AI Agents
sidebar_position: 8
---

# AI Agents (Context)

The **AI Agents** settings page is where you give your agents the background knowledge they use to talk about your company. You paste in details about your business, products, tone, and how you want the agents to communicate, and Abmatic AI feeds that context to the right agent.

There are two separate context areas on this page, one for each agent surface:

- **Agentic Chat** — context for the on-site chat assistant that talks to visitors on your website
- **Agentic Sequence** — context for the outbound email/sequence agent

## Accessing AI Agents settings

1. Click **Settings** in the left sidebar
2. Open the **AI Agents** tab in the top navigation (`/settings/ai-agents`)

At the top of the page you'll see two buttons — **Agentic Chat** and **Agentic Sequence** — that switch between the two context areas.

## Agentic Chat context

The **Agentic Chat** tab holds the knowledge your website chat assistant uses to answer visitor questions. This is where you describe your company, your products and capabilities, your value proposition, and the tone you want the chat to use.

![Agentic Chat context tab in AI Agents settings, showing a large context document describing the company and a Refresh Context button](/img/screenshots/settings-ai-agents-chat.png)

Type or paste your context into the large text area, then click **Save Context** to store it.

### Refresh Context

The Agentic Chat tab includes a **Refresh Context** button. Click it to **regenerate the context from your scraped website pages using AI**. Abmatic AI reads the pages you have captured in [Website Context](/settings/website-context) and writes a fresh, structured context document for you.

This is the fastest way to get a strong starting point:

1. Make sure your site has been scraped (see [Website Context](/settings/website-context))
2. Open the **Agentic Chat** tab
3. Click **Refresh Context**
4. Review the generated text, edit anything you want to adjust, and click **Save Context**

:::tip Refresh, then refine
**Refresh Context** is a great first draft. After generating it, read through and tighten anything that's off — add your strongest talking points, remove anything you don't want the assistant to say, and save.
:::

## Agentic Sequence context

The **Agentic Sequence** tab holds the context for the outbound sequence agent. Use it to capture your value proposition, the tone and style you want in outreach, cadence guidance, and anything else that should shape the emails the agent writes.

![Agentic Sequence context tab in AI Agents settings, with an empty context text area and a Save Context button](/img/screenshots/settings-ai-agents-sequence.png)

Enter your guidance in the text area and click **Save Context** to save it.

:::note
The **Refresh Context** button is specific to **Agentic Chat** (it regenerates from your scraped website pages). The **Agentic Sequence** context is written and maintained by you.
:::

## How this relates to Website Context and campaign Instructions

It helps to understand the three layers of context and how they fit together:

| Layer | Where | What it does |
|-------|-------|--------------|
| **Website Context** | Settings → [Website Context](/settings/website-context) | The raw knowledge base — page summaries and FAQs scraped from your site. Source material. |
| **AI Agents context** (this page) | Settings → AI Agents | The account-wide context document for each agent. **Refresh Context** turns your scraped pages into a clean Agentic Chat context here. |
| **Campaign Instructions** | On each Agentic Chat campaign (the **Instructions** tab) | Per-campaign guidance that fine-tunes how the agent behaves for that specific campaign. |

In practice:

- **Website Context** is the underlying source the AI can draw on.
- The **AI Agents** page gives each agent its account-level context — the default knowledge it carries everywhere.
- **Campaign-level Instructions** sit on top for a specific campaign and take precedence for that campaign, letting you tailor behavior without changing your account-wide context.

So the account-wide context here applies broadly, and any per-campaign Instructions you set override or refine it for that one campaign.

## Related

- [Website Context](/settings/website-context) — Scrape your site so the AI has accurate, up-to-date knowledge to draw from
- [Configuring AI Agents](/ai-agents/ai-agents-configuration) — Set up and tune your AI agents
- [AI Agents Overview](/ai-agents/ai-agents-overview) — Learn about Clara (AI ABM) and Alex (AI SDR)
- [Agentic Chat Campaigns](/campaigns/agentic-chat) — Create chat campaigns that use this context
