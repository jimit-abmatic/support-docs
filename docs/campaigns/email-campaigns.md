---
id: email-campaigns
title: AI Sequences
sidebar_label: AI Sequences
sidebar_position: 6
---

# AI Sequences

AI Sequences are multi-step, multi-channel outreach campaigns where you supply the templates and Abmatic AI personalizes every message for each contact based on their company, role, and behavior.

:::note Where to find it
In the **Create Campaign** dialog, this campaign type appears under the **Agentic** category and is labeled **Sequence**. (Internally the type is `email`.) The docs call the feature "AI Sequences," but the tile you click in the app is **Sequence**.
:::

## What makes it an "AI Sequence"

A traditional email sequence sends the same template to everyone. An AI Sequence uses your template as a starting point and **rewrites each touch per contact** — the subject line, the body, the call talking points — using the contact's company, industry, role, and engagement signals. You stay in control of the structure and message; the AI handles the per-contact tailoring.

| Traditional outreach | Abmatic AI Sequences |
|---------------------|----------------------|
| One template sent to everyone | AI personalizes each message per contact |
| Single channel | Email + Call + LinkedIn in one sequence |
| Manual follow-up tracking | Automated steps with timed delays |
| Static templates | AI re-generates content when you change templates or context |

## AI Sequences vs. Agentic Flow

Both campaign types share the same sequence editor, the same step types, and the same grid. The difference is **how much the AI writes**:

| | AI Sequence (Sequence) | [Agentic Flow](/campaigns/agentic-flow) |
|---|------------------------|-----------------------------------------|
| You provide | A template for each step | Goals and context |
| AI's role | Personalizes your template per contact | Crafts each message 1:1 from scratch |
| Best when | You want consistent messaging with light personalization | You want fully AI-written, unique outreach |

Choose **Sequence** when you want to keep tight control of the wording and let the AI fill in the personalized details. Choose **Agentic Flow** when you want agents to write each message end-to-end.

## How AI Sequences work

An AI Sequence chains together steps of different types, each with a delay after the previous one:

```
Day 0: Automatic Email (personalized intro)
    ↓ 3 days
Day 3: Manual Email (value-add with case study)
    ↓ 2 days
Day 5: LinkedIn Message (connection request)
    ↓ 4 days
Day 9: Call Script (discovery conversation)
    ↓ 3 days
Day 12: Automatic Email (next steps)
```

Each step is personalized by the AI for every contact in your target collection.

## Sequence step types

| Step Type | Best For | Description |
|-----------|----------|-------------|
| **Automatic Email** | Initial outreach, follow-ups | Sends automatically at the scheduled time |
| **Manual Email** | High-touch prospects | Creates a draft for a rep to review and send |
| **Call Script** | Discovery conversations | Talking points with the prospect's context |
| **LinkedIn Message** | Social selling | Personalized connection requests and messages |

## Getting started

### Step 1: Create a Sequence campaign

1. Open **Campaigns** from the left sidebar.
2. Click **+ Campaign** (top right).
3. Under the **Agentic** category, select **Sequence**.

![Campaigns page with the + Campaign button used to open the create dialog](/img/screenshots/seq-create.png)

4. Choose a **Contact Collection** to target.
5. Click **Create** — the AI begins analyzing your contacts for personalization.

### Step 2: Add sequence steps

In the campaign's **Sequence** tab, click **+ Step** to open the **Create Sequence Step** wizard. It has three stages:

1. **Select Type** — choose Automatic Email, Manual Email, Call Script, or LinkedIn Message.
2. **Create Template** — enter a **Title** (subject line) and **Body**, then click **Save Template**.
3. **Set Trigger Delay** — choose how long to wait after the previous step (days/hours/minutes).

![Create Sequence Step wizard showing the Select Type, Create Template, and Set Trigger Delay stages with Title and Body fields](/img/screenshots/seq-step-editor.png)

### Step 3: Write your templates

Write each template as a framework. The AI personalizes it per contact using **bare variable syntax** (see below).

**Title / subject line:**
```
{{firstName}}, quick question about {{company}}'s growth plans
```

**Body:**
```
Hi {{firstName}},

I noticed {{company}} has been exploring personalization
solutions for your {{industry}} team.

Given your role as {{jobTitle}}, you're likely evaluating
ways to improve conversion rates across your campaigns.

Would you have 15 minutes this week to talk?
```

### Step 4: Activate the sequence

1. Review all steps in the sequence grid.
2. Click **Activate** to start the campaign.
3. The AI personalizes each message and sending begins based on your delays.

## Personalization variables

AI Sequences use **bare variable syntax** — a plain field name wrapped in double curly braces, with **no prefix**. This is different from the `{{mt_*}}` syntax used for website personalization. See [Dynamic Content](/campaigns/dynamic-content) for the full picture of which syntax applies where.

### Contact variables

| Variable | Description | Example |
|----------|-------------|---------|
| `{{firstName}}` | Contact's first name | "Sarah" |
| `{{lastName}}` | Contact's last name | "Johnson" |
| `{{jobTitle}}` | Job title | "VP of Marketing" |
| `{{email}}` | Email address | "sarah@company.com" |

### Company variables

| Variable | Description | Example |
|----------|-------------|---------|
| `{{company}}` | Company name | "Acme Corp" |
| `{{industry}}` | Industry vertical | "Technology" |
| `{{employeeCount}}` | Company size | "500-1000" |
| `{{website}}` | Company website | "acme.com" |

### Behavioral variables

| Variable | Description | Example |
|----------|-------------|---------|
| `{{visitedPages}}` | Pages they've viewed | "Pricing, Features" |
| `{{lastVisit}}` | Last site visit date | "January 15, 2026" |
| `{{engagementScore}}` | Activity level | "High" |

:::tip Bare syntax only
In sequence templates, use plain field names like `{{firstName}}` and `{{company}}` — **not** the `{{mt_companyName}}` form used for web pages. The two syntaxes are not interchangeable.
:::

## Managing sequences

### The sequence grid

The Sequence tab shows every step in a table:

| Column | Description |
|--------|-------------|
| **Step** | Order in the sequence (sortable) |
| **Step Type** | Email, Call, or LinkedIn |
| **Step Template** | Preview of the subject/content |
| **Created At** | When the step was added |
| **Updated At** | Last modification |

### Editing steps

1. Find the step in the grid.
2. Click the **menu icon** (three dots).
3. Choose **Update Sequence Step**.
4. Modify the template and timing, then save.

### Clearing personalizations

If you change your templates or AI context and want fresh personalized content for everyone:

1. Open the sequence campaign.
2. Click the **menu icon** (three dots).
3. Select **Clear Personalizations**.
4. The AI re-analyzes each contact and regenerates the personalized messages.

:::tip When to clear personalizations
Clear personalizations after changing your value proposition, updating templates, or adding new company data.
:::

## Tracking performance

Open your sequence campaign and go to the **Insights** tab to view delivery and engagement. Drill into individual steps to spot where contacts drop off, then refine those touches.

## CRM integration

When your account is connected to Salesforce or HubSpot, sequence activity (sends, opens, clicks, replies) is logged against the matching contact records, and campaign membership is kept in sync. See [CRM Campaigns](/campaigns/crm-campaigns) for how to link a campaign to a CRM campaign and configure member-status mapping.

:::note CRM-triggered sending
Whether a sequence can be *started* automatically from a CRM event (such as a new lead or a deal-stage change) depends on your CRM integration setup. Confirm the available triggers with your Abmatic AI rep before relying on them — the sequence editor itself controls the steps and delays, not the CRM trigger.
:::

## Best practices

| Practice | Why it works |
|----------|--------------|
| Keep emails short | Higher read and response rates |
| One clear CTA per email | Reduces decision paralysis |
| Personalize subject lines | Better open rates |
| Space steps a few days apart | Builds familiarity without annoying |
| Mix channels | Multi-touch increases reach |

## Troubleshooting

### Low open rates

| Issue | Solution |
|-------|----------|
| Generic subject lines | Add personalization and curiosity |
| Wrong send time | Use the recipient's timezone and business hours |
| Sender reputation | Warm up your domain, watch bounce rates |
| Spam placement | Check SPF/DKIM/DMARC configuration |

### Low response rates

| Issue | Solution |
|-------|----------|
| Weak value proposition | Lead with their pain points, not your features |
| Unclear CTA | Ask one specific question |
| Too many emails too fast | Increase the delay between steps |
| Wrong persona | Refine your contact collection criteria |

## Related

- [Agentic Flow](/campaigns/agentic-flow) — fully AI-written outreach
- [Dynamic Content](/campaigns/dynamic-content) — variable syntax guide
- [CRM Campaigns](/campaigns/crm-campaigns) — sync sequences to Salesforce/HubSpot
- [Intent Campaigns](/campaigns/intent) — trigger outreach from buying signals
