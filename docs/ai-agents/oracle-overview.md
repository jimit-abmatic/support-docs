---
id: oracle-overview
title: Oracle (Autonomous Agent)
sidebar_label: Oracle Overview
sidebar_position: 6
---

# Oracle (Autonomous Agent)

**Oracle is Abmatic AI's autonomous agent.** Instead of waiting for you to ask it to do something, Oracle works toward goals you set, takes action on its own, and checks in with you on its progress. You tell it what outcome you want — for example, "book more demos" — and it plans and runs the work behind the scenes.

Oracle is made up of two surfaces in the app:

- **[Oracle Goals](/ai-agents/oracle-goals)** (`/oracle/goals`) — where you tell Oracle what to pursue and watch its weekly progress.
- **[Oracle Approvals](/ai-agents/oracle-approvals)** (`/oracle/inbox`) — where Oracle queues higher-impact actions for you to approve or deny before it runs them.

:::info Oracle is a gated feature
Oracle is turned on per account and may be off for yours. If you don't see **Goals** or **Oracle Inbox** in the left sidebar, Oracle isn't enabled yet. See [Requesting access](#requesting-access) below.
:::

---

## How Oracle works

Oracle runs on a loop:

1. **You set goals.** Each goal has a target (such as a number of demos booked) and a target date.
2. **Oracle plans and acts.** It decides what work moves the goal forward — building audiences, launching or adjusting campaigns, and so on.
3. **It asks before high-impact actions.** Depending on your trust tier (below), bigger or costlier actions wait in the **Oracle Approvals** inbox for your go-ahead.
4. **It records checkpoints.** After each weekly review, Oracle appends a checkpoint to the goal with its progress and the actions it took.

---

## Trust tiers

Trust tiers decide how much Oracle can do on its own versus what it has to run by you first. Your Abmatic AI rep sets your account's tier; it can be changed as you get comfortable with Oracle.

| Trust tier | What Oracle does | Best for |
|------------|------------------|----------|
| **Supervised** | Approve all — every action Oracle proposes waits for your approval first. | Getting started, or high-caution accounts. |
| **Standard** | Auto-small / approve-large — Oracle runs low-risk actions automatically and queues larger or costlier ones for approval. | Most teams. |
| **Autonomous** | Just notify — Oracle acts on its own and tells you what it did. | Teams that fully trust the agent and want hands-off operation. |

Whatever the tier, actions that need your sign-off appear in the **[Oracle Approvals](/ai-agents/oracle-approvals)** inbox, each with a risk level and an estimated spend.

---

## Oracle vs. Clara, Alex, and the Co-Pilot

Abmatic AI has several "agent" surfaces. They are easy to mix up, so here's how they differ:

| Surface | What it is | How you use it |
|---------|-----------|----------------|
| **Oracle** | The autonomous agent. Pursues goals and acts on its own (within your trust tier). | Set goals in **Goals**; approve/deny actions in **Oracle Inbox**. |
| **Clara (AI ABM)** and **Alex (AI SDR)** | Page-level conversational agents under **AI Agent**. You ask, they do. | Open **AI Agent** and chat — see [AI Agents Overview](/ai-agents/ai-agents-overview). |
| **Co-Pilot** | An in-app conversational assistant with a roster of specialists (Rachel, Joey, Marcus, and more) that helps you while you work in the dashboard. | Open the **Co-Pilot** card or the **AI Conversation** drawer — see [In-App Co-Pilot](/ai-agents/co-pilot). |

The short version: **Clara, Alex, and the Co-Pilot wait for you to ask. Oracle works on its own toward goals you've set.**

---

## Requesting access {#requesting-access}

Oracle is enabled per account. If it isn't turned on for you, you'll see messages like:

- On **Goals**: *"Goals aren't enabled for your account yet. Reach out to your Abmatic rep to turn on the autonomous agent goal tracker."*
- On **Oracle Inbox**: *"Oracle is not enabled for your account. Contact your account admin or support@abmatic.ai to request access to the autonomous agent approval inbox."*

![Oracle Goals shown in its gated state — the heading "Oracle Goals" with a message that goals aren't enabled for your account yet](/img/screenshots/oracle-goals-gated-empty.png)

*The gated state of Oracle Goals. When Oracle isn't enabled, the page explains how to turn it on.*

To request Oracle for your account, contact your Abmatic AI rep or email **support@abmatic.ai**. Once it's enabled, **Goals** and **Oracle Inbox** appear in the left sidebar and your rep configures your trust tier.

---

## Next steps

- **[Oracle Goals](/ai-agents/oracle-goals)** — set targets and read weekly checkpoints.
- **[Oracle Approvals](/ai-agents/oracle-approvals)** — approve or deny Oracle's high-impact actions.
- **[AI Agents Overview](/ai-agents/ai-agents-overview)** — how Oracle fits with Clara, Alex, and the Co-Pilot.
