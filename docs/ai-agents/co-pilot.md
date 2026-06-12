---
id: co-pilot
title: In-App Co-Pilot
sidebar_label: In-App Co-Pilot
sidebar_position: 9
---

# In-App Co-Pilot

**The Co-Pilot is a conversational assistant that helps you while you work inside Abmatic AI.** It opens in a panel right where you are — on Campaigns, Accounts, Analytics, and other pages — so you can ask for help, get analysis, or kick off work without leaving the screen.

:::note Co-Pilot vs. the AI Agent page
This is a different surface from the full-page **AI Agent** product (Clara and Alex) at `/ai-agents`. The Co-Pilot is the in-app helper that pops up over your current page; the AI Agent page is a dedicated chat workspace. See [How it relates to Clara and Alex](#how-it-relates-to-clara-and-alex) below.
:::

---

## Opening the Co-Pilot

There are a few ways to open it:

- **The Co-Pilot card.** Many pages show a **Co-Pilot** card (with an agent avatar) you can click to start a conversation in context.
- **The floating AgentFAB button.** A floating action button on the page opens the assistant.
- **A direct link.** Opening a page with the `?ai-agent-help=<conversationId>` parameter brings up the Co-Pilot with that conversation.

![The Campaigns page with the Co-Pilot card in the top-left, the entry point for the in-app assistant](/img/screenshots/copilot-fab.png)

*The Co-Pilot card on the Campaigns page. Clicking it opens the assistant in context.*

When it opens, it slides out as an **AI Conversation** drawer on the right side of the screen, with a message box at the bottom ("Ask me anything…").

![The AI Conversation drawer open on the right side of the Campaigns page, showing an auto-greeting from the assistant](/img/screenshots/copilot-drawer.png)

*The AI Conversation drawer. It greets you automatically and is ready to help create campaigns, analyze performance, or build audiences.*

---

## The Co-Pilot roster

The Co-Pilot can route your request to the right specialist. Behind the scenes it's a small team of named "directors," each focused on a different area:

| Agent | Role |
|-------|------|
| **Abmatic AI** | The AI Agent — the autonomous ABM assistant that coordinates the others. |
| **Rachel** | Super Agent. |
| **Clara** | Insights & Analytics Director. |
| **Joey** | Website Content Strategist. |
| **Marcus** | Campaign Operations. |
| **Sophia** | Personalization Strategy Manager. |
| **Alex** | Audience Accounts Director. |
| **Jordan** | Audience Contacts Director. |
| **James** | Bidding Strategy Expert. |

You don't have to pick a specialist — just describe what you need, and the conversation routes to whoever is the best fit.

:::note Clara and Alex appear in both places
Clara and Alex are also the page-level agents on the **AI Agent** page. In the Co-Pilot roster, **Clara** is the *Insights & Analytics Director* and **Alex** is the *Audience Accounts Director*. Same names, different focus depending on where you're working.
:::

---

## Auto-greeting

When you open the Co-Pilot, it greets you proactively instead of sitting silent. For example, it may say hello and offer to create campaigns, analyze performance, or build audiences — so you have a starting point even before you type.

---

## Thinking and tool steps

As the Co-Pilot works on a request, it shows its progress inline in the chat rather than making you wait on a blank screen. Messages can include:

- **Thinking** — the agent's reasoning as it works through your request.
- **Tool steps** — the actions it's running (such as pulling data or building a list), shown as **tool call** and **tool result** entries.

This makes it clear what the Co-Pilot is doing and why, instead of just returning a final answer with no context.

---

## Voice Mode

The Co-Pilot supports **Voice Mode**, so you can talk to it instead of typing. Start voice mode to speak your request and hear the response read back. This is handy when you're multitasking or want to work hands-free. Voice conversations are still captured as text in the chat.

---

## How it relates to Clara and Alex {#how-it-relates-to-clara-and-alex}

Abmatic AI has a few agent surfaces. Here's how the Co-Pilot fits:

| Surface | What it is |
|---------|-----------|
| **In-App Co-Pilot** *(this page)* | A helper that opens over your current page with a roster of specialists (Rachel, Joey, Marcus, Sophia, Jordan, James, plus Clara and Alex). |
| **AI Agent (Clara & Alex)** | The full-page chat workspace at `/ai-agents`. **Clara** is the AI ABM agent; **Alex** is the AI SDR agent. See [AI Agents Overview](/ai-agents/ai-agents-overview). |
| **Oracle** | The autonomous agent that pursues goals on its own. See [Oracle Overview](/ai-agents/oracle-overview). |

The Co-Pilot and the AI Agent page both wait for you to ask. Oracle is the one that acts on its own.

---

## Related

- **[AI Agents Overview](/ai-agents/ai-agents-overview)** — Clara, Alex, and how the agents fit together.
- **[Oracle Overview](/ai-agents/oracle-overview)** — the autonomous agent.
