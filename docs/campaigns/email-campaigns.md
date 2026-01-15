---
id: email-campaigns
title: Email Campaigns (Sequences)
sidebar_label: Email Campaigns
sidebar_position: 6
---

# Email Campaigns (Sequences)

Turn your sales outreach into a competitive advantage. Abmatic AI's Sequence campaigns combine multi-channel touchpoints—emails, calls, and LinkedIn messages—with AI-powered personalization to engage prospects at scale while maintaining the human touch that drives responses.

## Why Sequence Campaigns Drive Results

| Traditional Outreach | With Abmatic Sequences |
|---------------------|----------------------|
| Generic templates sent to everyone | AI-personalized messages for each prospect |
| Single-channel approach | Multi-channel orchestration (Email + Call + LinkedIn) |
| Manual follow-up tracking | Automated sequences with smart timing |
| Disconnected from website activity | Triggered by visitor behavior |
| Hours per prospect | Minutes to launch, scales infinitely |

## How Sequences Work

Sequence campaigns orchestrate multi-step outreach that combines different touchpoint types:

```
Day 0: Automatic Email (personalized intro)
    ↓ 3 days
Day 3: Manual Email (value-add with case study)
    ↓ 2 days
Day 5: LinkedIn Connection Request
    ↓ 4 days
Day 9: Call Script (discovery conversation)
    ↓ 3 days
Day 12: Final Email (next steps)
```

Each step is customizable with AI-generated personalization based on the prospect's company, role, and behavior.

![Campaigns list showing various campaign types](/img/screenshots/sequence-campaigns-list.png)

## Sequence Step Types

| Step Type | Best For | Description |
|-----------|----------|-------------|
| **Automatic Email** | Initial outreach, follow-ups | Sends automatically at scheduled time |
| **Manual Email** | High-touch prospects | Creates draft for rep to review and send |
| **Call Script** | Discovery conversations | Provides talking points with prospect context |
| **LinkedIn Message** | Social selling | Personalized connection requests and messages |

## Getting Started

### Step 1: Create a Sequence Campaign

1. Navigate to **Campaigns**
2. Click **Create Campaign**
3. Under **Advanced**, select **Sequence**

![Create Campaign modal showing Sequence option under Advanced](/img/screenshots/sequence-create-modal.png)

4. Choose a **Contact Collection** to target
5. Click **Create Campaign**

### Step 2: Add Sequence Steps

1. In the sequence editor, click the **+** button or menu
2. Select the step type:
   - **Manual Email** - Draft for review before sending
   - **Automatic Email** - Sends automatically
   - **Call Script** - Phone conversation guide
   - **LinkedIn Message** - Social outreach
3. Create your template with personalization variables
4. Set the **trigger delay** (days/hours/minutes after previous step)
5. Save the step

### Step 3: Configure Your Templates

For email steps, create compelling templates:

**Title/Subject Line:**
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

Would you have 15 minutes this week to discuss how we've
helped companies like {{company}} see 2-3x improvements?

Best,
[Your name]
```

### Step 4: Activate the Sequence

1. Review all steps in the sequence grid
2. Click **Activate** to start the campaign
3. Prospects will begin receiving outreach based on your timing

## Personalization Variables

### Contact Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `{{firstName}}` | Contact's first name | "Sarah" |
| `{{lastName}}` | Contact's last name | "Johnson" |
| `{{jobTitle}}` | Job title | "VP of Marketing" |
| `{{email}}` | Email address | "sarah@company.com" |

### Company Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `{{company}}` | Company name | "Acme Corp" |
| `{{industry}}` | Industry vertical | "Technology" |
| `{{employeeCount}}` | Company size | "500-1000" |
| `{{website}}` | Company website | "acme.com" |

### Behavioral Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `{{visitedPages}}` | Pages they've viewed | "Pricing, Features" |
| `{{lastVisit}}` | Last site visit date | "January 15, 2026" |
| `{{engagementScore}}` | Activity level | "High" |

## High-Impact Sequence Templates

### Cold Outreach Sequence (5 Steps)

**Step 1: Automatic Email (Day 0)**
- Subject: `{{company}} + [Your Company]`
- Hook with relevant industry pain point
- One clear question

**Step 2: LinkedIn Connection (Day 3)**
- Personalized connection request
- Reference their company/role

**Step 3: Value-Add Email (Day 5)**
- Share relevant case study or resource
- No ask—pure value

**Step 4: Call Script (Day 8)**
- Discovery questions prepared
- Talking points based on their profile

**Step 5: Final Email (Day 12)**
- Create urgency with time-limited offer
- Clear next step

### Re-engagement Sequence (3 Steps)

For contacts who visited your site but didn't convert:

**Step 1: Awareness Email (Day 0)**
```
Subject: Saw you checking us out, {{firstName}}

I noticed you visited our {{visitedPages}} recently.
Is there something specific you're trying to solve?
```

**Step 2: Value Email (Day 4)**
```
Subject: Thought this might help

Based on what you were exploring, here's a resource
that companies in {{industry}} have found valuable...
```

**Step 3: Direct Ask (Day 8)**
```
Subject: Quick question

Would a 15-minute call be helpful to discuss
{{company}}'s personalization strategy?
```

### Account-Based Sequence

For high-value target accounts with multiple contacts:

1. **Executive sponsor** - Strategic value prop
2. **Technical evaluator** - Product capabilities
3. **End user** - Day-to-day benefits
4. Coordinate timing across all contacts

## Managing Sequences

### The Sequence Grid

The sequence editor shows all steps in a table:

| Column | Description |
|--------|-------------|
| **Step** | Order in the sequence (sortable) |
| **Step Type** | Email, Call, or LinkedIn |
| **Step Template** | Preview of subject/content |
| **Created At** | When step was added |
| **Updated At** | Last modification |

### Editing Steps

1. Select a step in the grid
2. Click the **menu icon** (three dots)
3. Choose **Update Sequence Step**
4. Modify template and timing
5. Save changes

### Clearing Personalizations

If you need to regenerate AI personalizations:

1. Open the sequence campaign
2. Click the **menu icon**
3. Select **Clear Personalizations**
4. AI will regenerate fresh content for all contacts

## Best Practices

### Do's

| Practice | Why It Works |
|----------|--------------|
| Keep emails under 150 words | Higher read and response rates |
| Use one clear CTA per email | Reduces decision paralysis |
| Personalize subject lines | 2x higher open rates |
| Space steps 2-5 days apart | Builds familiarity without annoying |
| Mix channels strategically | Multi-touch increases conversion |
| Include value in every touch | Builds trust before asking |

### Don'ts

| Avoid | Why |
|-------|-----|
| Sending more than 5 steps | Diminishing returns after 5 touches |
| Same message across channels | Each channel needs unique approach |
| Ignoring timezone | Poor timing kills open rates |
| Generic templates | Prospects can spot mass emails |
| Skipping the call step | Voice humanizes the relationship |

## Tracking Performance

### Sequence Metrics

| Metric | What It Measures | Good Benchmark |
|--------|------------------|----------------|
| **Sent** | Emails delivered | 95%+ delivery rate |
| **Opens** | Unique opens | 25-35% for cold outreach |
| **Clicks** | Link clicks | 3-5% of opens |
| **Replies** | Detected responses | 5-10% reply rate |
| **Meetings** | Booked calls | 2-5% of sequence |

### Viewing Results

1. Open your sequence campaign
2. Navigate to **Insights**
3. View overall campaign metrics
4. Drill into individual step performance
5. Identify drop-off points to optimize

## CRM Integration

### Synced Activities

When connected to Salesforce or HubSpot:

- **Emails logged** as activities on contact records
- **Opens and clicks** tracked for engagement scoring
- **Replies** create tasks for sales follow-up
- **Campaign membership** updated automatically

### Triggering Sequences

Start sequences based on CRM events:

| Trigger | Use Case |
|---------|----------|
| New lead created | Immediate outreach to fresh leads |
| Deal stage change | Re-engage stalled opportunities |
| Property update | React to new information |
| Task completed | Follow up on rep activities |

## Troubleshooting

### Low Open Rates

| Issue | Solution |
|-------|----------|
| Generic subject lines | Add personalization and curiosity |
| Wrong send time | Use recipient's timezone, business hours |
| Poor sender reputation | Warm up domain, monitor bounce rates |
| Spam folder placement | Check SPF/DKIM/DMARC configuration |

### Low Response Rates

| Issue | Solution |
|-------|----------|
| Weak value proposition | Lead with their pain points, not your features |
| Unclear CTA | Ask one specific question |
| Too many emails too fast | Increase spacing between steps |
| Wrong persona targeting | Refine your contact list criteria |

### Delivery Issues

| Issue | Solution |
|-------|----------|
| High bounce rate | Clean your contact list regularly |
| Authentication errors | Verify SPF, DKIM, DMARC records |
| Blacklisted domain | Check blacklist status, request removal |
| Content triggers | Avoid spam words, excessive links |

## Related

- [Website Personalization](/campaigns/website-personalization) - Coordinate web + email
- [Dynamic Content](/campaigns/dynamic-content) - Variable syntax guide
- [CRM Integrations](/integrations/overview) - Connect Salesforce/HubSpot
- [Contacts Management](/audiences/contacts) - Build your target lists
- [AI Agents](/ai-agents/ai-agents-overview) - AI-powered personalization
