---
id: oracle-goals
title: Oracle Goals
sidebar_label: Oracle Goals
sidebar_position: 7
---

# Oracle Goals

**Oracle Goals is where you tell the autonomous agent what to pursue.** You set an outcome and a deadline, and Oracle works toward it — recording its progress in a weekly checkpoint each time it reviews the goal.

You'll find it at **Goals** in the left sidebar (`/oracle/goals`).

:::info Gated feature
Oracle Goals is turned on per account. If it isn't enabled for you, the page shows: *"Goals aren't enabled for your account yet. Reach out to your Abmatic rep to turn on the autonomous agent goal tracker."* See [Oracle Overview](/ai-agents/oracle-overview#requesting-access) for how to request access.
:::

![The Oracle Goals page in its gated state, showing the heading and a message that goals aren't enabled yet](/img/screenshots/oracle-goals-gated-empty.png)

*Until Oracle is enabled, the Goals page explains how to turn it on.*

---

## Creating a goal

On the **Oracle Goals** page, click **New Goal** and fill in the dialog:

| Field | What to enter |
|-------|---------------|
| **Title** *(required)* | A short name for the goal, e.g. "Book more demos this quarter." |
| **Description** | Optional context that helps Oracle understand what you mean and how to pursue it. |
| **Success metric** | The thing Oracle should move — for example, `demos_booked`. |
| **Target value** | The number you're aiming for (e.g. 25). |
| **Target date** | The date you want to hit the target by. |

Save the goal and it appears as a card on the page.

:::tip Pick a metric Oracle can measure
The success metric is how Oracle (and you) track progress, so choose something concrete and countable. `demos_booked` is the built-in example. Your Abmatic AI rep can confirm which metrics are available for your account.
:::

---

## Reading a goal card

Each goal shows up as a card with:

- The **title** and **description**.
- The **success metric** and the **current value out of the target value** (for example, 12 / 25).
- A **progress bar** showing how far along the goal is as a percentage.
- The **target date**.

This gives you an at-a-glance read on whether Oracle is on track for each goal.

---

## Weekly checkpoints

Oracle reviews each goal on a weekly cadence and appends a **checkpoint** with what changed. Open a goal's **Checkpoints** dialog (titled *"&lt;goal title&gt; — Checkpoints"*) to see the history.

Each checkpoint includes:

| Part | What it tells you |
|------|-------------------|
| **Week of &lt;date&gt;** | Which week the checkpoint covers. |
| **Progress** | Where the metric stood at that review. |
| **Agent notes** | Oracle's own summary of what it observed and decided. |
| **Actions taken** | The concrete steps Oracle ran that week. |

As the in-app copy puts it: *"The Oracle appends one after each weekly review."* So checkpoints accumulate over time into a running log of how Oracle pursued the goal.

---

## How goals connect to approvals

When Oracle decides on a higher-impact action to advance a goal — depending on your [trust tier](/ai-agents/oracle-overview#trust-tiers) — it queues that action in the **[Oracle Approvals](/ai-agents/oracle-approvals)** inbox for your sign-off before running it. Lower-risk actions may run automatically and simply show up in the next checkpoint's **Actions taken**.

---

## Related

- **[Oracle Overview](/ai-agents/oracle-overview)** — what the autonomous agent is and how trust tiers work.
- **[Oracle Approvals](/ai-agents/oracle-approvals)** — review and approve Oracle's proposed actions.
