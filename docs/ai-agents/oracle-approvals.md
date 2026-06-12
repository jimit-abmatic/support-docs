---
id: oracle-approvals
title: Oracle Approvals
sidebar_label: Oracle Approvals
sidebar_position: 8
---

# Oracle Approvals

**Oracle Approvals is your control point for the autonomous agent.** When Oracle plans a higher-impact action — one that could cost money or carry more risk — it pauses and queues that action here for you to **approve** or **deny** before it runs. You stay in control of the big moves while Oracle handles the rest.

You'll find it at **Oracle Inbox** in the left sidebar (`/oracle/inbox`). The page is titled **Oracle Approvals** and has a **Refresh** button to pull the latest queue.

:::info Gated feature
Oracle Approvals is turned on per account. If it isn't enabled for you, the page shows: *"Oracle is not enabled for your account. Contact your account admin or support@abmatic.ai to request access to the autonomous agent approval inbox."* See [Oracle Overview](/ai-agents/oracle-overview#requesting-access) for how to request access.
:::

---

## The approval queue

Each pending action Oracle wants to run appears as a card. A card shows everything you need to make a decision:

| On the card | What it means |
|-------------|---------------|
| **Action type** | What Oracle wants to do (for example, launch or adjust a campaign). |
| **Risk chip** | A color-coded **Risk: low / medium / high** label so you can triage at a glance. |
| **Est. spend chip** | **Est. spend $X** — the estimated cost of the action, if any. |
| **Proposed &lt;datetime&gt;** | When Oracle proposed the action. |
| **Rationale** | A one-line explanation of *why* Oracle wants to take this action. |
| **Payload preview** | A preview of the action's underlying details (a truncated JSON payload) so you can inspect exactly what would run. |

The risk and estimated-spend chips make it easy to spot the actions that deserve a closer look before you approve them.

---

## Approving or denying

Every card has two buttons: **Approve** and **Deny**.

1. Click **Approve** to let Oracle run the action, or **Deny** to stop it.
2. Each opens a dialog with an optional **Notes** field. The prompt reads: *"Add context for the agent or audit log."*
3. Confirm.

:::tip Notes become an audit trail
Anything you type in **Notes** is saved for the agent and recorded in the audit log. Use it to tell Oracle *why* you denied something (so it can adjust) or to document a decision for your team.
:::

---

## What lands here vs. what runs automatically

What shows up in this inbox depends on your account's [trust tier](/ai-agents/oracle-overview#trust-tiers):

| Trust tier | What you'll see in the inbox |
|------------|------------------------------|
| **Supervised** | Everything — Oracle queues *all* of its actions for approval. |
| **Standard** | Larger or costlier actions only — low-risk actions run automatically. |
| **Autonomous** | Little to nothing — Oracle acts on its own and notifies you afterward. |

So if your inbox is quiet, that may simply mean Oracle is operating within the limits your trust tier allows it to handle on its own.

---

## Empty state

When there's nothing waiting, the inbox shows: *"No pending approvals. When the Oracle queues a high-impact action, it will show up here."*

![The Oracle Approvals inbox with no pending approvals, showing the empty-state message](/img/screenshots/oracle-inbox-empty.png)

*The Oracle Approvals inbox when there is nothing to review.*

---

## Related

- **[Oracle Overview](/ai-agents/oracle-overview)** — what the autonomous agent is and how trust tiers govern approvals.
- **[Oracle Goals](/ai-agents/oracle-goals)** — set the goals that drive the actions Oracle proposes.
