---
id: changelog
title: What's New
sidebar_label: What's New
sidebar_position: 100
---

# What's New in Abmatic AI

Stay up to date with the latest features, improvements, and fixes in Abmatic AI. We ship updates regularly to help you turn more website visitors into pipeline.

:::tip Quick Navigation
Use **Ctrl+F** (Windows) or **Cmd+F** (Mac) to search this page for a specific feature or date.
:::

![Home overview in Abmatic AI](/img/screenshots/cl-whatsnew.png)
*The Home dashboard is the best place to see what's new — the OVERVIEW tab shows your Accounts, Contacts, Reports, Campaigns, and Collections at a glance, with Recently Viewed panels below.*

---

## June 2026

### Oracle — Autonomous Agents

**Released:** June 2026

Oracle is the autonomous-agent layer in Abmatic AI. Instead of running individual campaigns by hand, you give Oracle a goal and it works toward it, checking in with you along the way.

| Feature | What It Does |
|---------|--------------|
| **Oracle Goals** | Set a goal and Oracle plans the work and reports progress with **weekly checkpoints** (`/oracle/goals`) |
| **Oracle Approvals / Inbox** | Review and approve or deny high-impact actions before Oracle takes them (`/oracle/inbox`) |
| **Trust tiers** | Choose how much independence Oracle has — **supervised**, **standard**, or **autonomous** |

![Oracle Goals page](/img/screenshots/oracle-goals-page.png)
*Oracle Goals lets you set a goal and track Oracle's progress with weekly checkpoints.*

:::info Availability
Oracle is rolled out per account. If you see a "not enabled for your account" message on the Oracle pages, that's expected — Oracle is gated and turned on by request. To enable it, contact your Abmatic AI representative or email **support@abmatic.ai**.
:::

---

### Agentic Chat — Email Handoff & AI Conversation Summary

**Released:** June 2026

Agentic Chat, our website chat agent, got several upgrades that make conversations more useful and easier to follow up on.

| Feature | What It Does |
|---------|--------------|
| **Instructions tab** | Give the chat agent custom guidance for how it should behave and what to say |
| **Email-handoff modes** | When a visitor is ready, the agent can **book a meeting**, **send a thank-you email**, or **show a HubSpot form** |
| **AI Conversation Summary** | A Performance sub-tab that summarizes conversations by **Topic**, **Sentiment**, and **Converted**, with a "Show visitors" link to jump to the underlying sessions |
| **Demo Booked columns** | See which conversations resulted in a booked demo |
| **Voice mode** | Visitors can talk to the agent by voice, not just text |

**Learn More:** [Agentic Chat](/campaigns/agentic-chat)

---

### OpenAI Ads Campaigns

**Released:** June 2026

You can now create and manage **OpenAI Ads** campaigns directly in Abmatic AI. OpenAI Ads is available as an Advertising campaign type alongside Display, LinkedIn, and Retargeting.

:::note
Meta / Facebook ads are currently marked **Coming Soon** and cannot be created yet.
:::

**Learn More:** [Campaigns Overview](/campaigns/overview)

---

## May 2026

### Google Calendar, Zoom & Meeting Types

**Released:** May 2026

Connect your calendar so the AI agents and Agentic Chat can book real meetings on your behalf.

| Feature | What It Does |
|---------|--------------|
| **Google Calendar** | Connect Google Calendar, define **meeting types**, and set a **default AE** to assign bookings to |
| **Zoom** | Connect Zoom so booked meetings automatically include a video link |
| **Meeting Types** | Configure the meeting lengths and details visitors can choose from |

![Meeting types configuration](/img/screenshots/calendar-meeting-types.png)
*Define the meeting types visitors can book through Abmatic AI.*

**Learn More:** [Integrations](/integrations/overview)

---

### Demo Booked Tracking

**Released:** May 2026

When a visitor books a demo through Abmatic AI, we now track it end to end. New fields and report columns include **Demo Booked**, **Demo Booked At**, **Demo Scheduled At**, **Demo AE**, and **Demo Time**, so you can connect engagement to real meetings.

**Learn More:** [Analytics Reports](/analytics/reports)

---

## April 2026

### "Banner & Popup" is now "Widget"

**Released:** April 2026

The Banner & Popup campaign type has been renamed to **Widget** and expanded. There are now **five widget types**:

| Widget Type | Use It For |
|-------------|------------|
| **Banner** | A bar across the top or bottom of the page |
| **Popup** | A centered overlay |
| **Exit-intent modal** | A message shown when a visitor is about to leave |
| **Sidebar widget** *(new)* | A panel anchored to the side of the page |
| **Agentic chat** | An AI chat experience embedded on the page |

Widgets also include a **HubSpot-form picker**, so you can drop an existing HubSpot form straight into a widget.

![Widget editor showing the available widget types](/img/screenshots/widget-editor-types.png)
*Choose from five widget types when building a Widget campaign.*

**Learn More:** [Widget Campaigns](/campaigns/widget)

---

### API Keys in Settings

**Released:** April 2026

You can now generate and manage your API key from **Settings**. A new **API Keys** tab lets you create a key, copy it, and revoke it. There's also a new **AI Agents** settings tab for configuring your agents.

![API Keys settings tab](/img/screenshots/settings-api-keys.png)
*Generate and manage your API key from the API Keys tab in Settings.*

:::note
The **Privacy** settings page has been removed, and the old Billing page is now a **Usage** (credits) page.
:::

**Learn More:** [API Keys](/api/api-keys)

---

## March 2026

### Faster Analytics Grids

**Released:** March 2026

Reports and analytics grids now use **server-side row models (SSRM)**, so large reports load and scroll faster and handle much bigger result sets without slowing down your browser.

**Learn More:** [Analytics Reports](/analytics/reports)

---

### Visitor Reveal Rebrand & Confidence Buckets

**Released:** March 2026

"Company Reveal" is now **Visitor Reveal**, with dedicated views for accounts (`/reveal/accounts`) and contacts (`/reveal/contacts`).

| Change | Detail |
|--------|--------|
| **Reveal Source** | Shown as **Abmatic**, with an internal confidence value of **1–4** |
| **Reveal Confidence buckets** | Identified visitors are now grouped into clear buckets: **Very High → Very Low** |

:::tip
Use the Reveal Confidence buckets to prioritize follow-up — start with **Very High** and **High** confidence accounts.
:::

**Learn More:** [Visitor Reveal](/visitor-tracking/overview)

---

### Sales Role

**Released:** March 2026

A new **Sales** user role focuses the app on the views a rep needs — identified accounts and contacts, and the activity that matters for follow-up — without the full marketing configuration surface.

**Learn More:** [Team & Roles](/settings/users)

---

## February 2026

### Dark Mode

**Released:** February 2026

Abmatic AI now has a **dark mode**. Use the **dark/light toggle** in the top bar to switch at any time.

![Dark mode toggle in the top navigation](/img/screenshots/nav-dark-mode.png)
*Switch between light and dark themes from the toggle in the top bar.*

---

## January 2026

### AI Agents — Now Generally Available

**Released:** January 2026

Abmatic AI's AI Agents help automate prospecting, research, and campaign work so your team can focus on closing deals.

The page-level agent personas are **Clara (AI ABM)** and **Alex (AI SDR)**:

| Agent | What It Does | Best For |
|-------|--------------|----------|
| **Clara (AI ABM)** | Campaign recommendations and ABM execution | Marketing teams managing multiple account segments |
| **Alex (AI SDR)** | Prospecting, account research, and voice outreach | Sales teams scaling outreach without adding headcount |

There is also a separate in-app **Co-Pilot** roster of assistants, and **Agentic Chat** — the AI chat agent that engages visitors on your website. These are distinct products: Clara and Alex are the page-level personas, and Agentic Chat is the website chat agent.

![AI Agents Hub](/img/screenshots/ai-agents-hub.png)
*Specialized AI agents to help automate your ABM workflows.*

**Get Started:**
1. Open **AI Agent** at the top of the left sidebar.
2. Configure your business context under **Settings** > **AI Agents**.
3. See the [AI Agents documentation](/ai-agents/ai-agents-overview) for full setup.

---

### Enhanced Analytics Dashboards

**Released:** January 2026

Build custom dashboards that show your ABM program's impact, using drag-and-drop widgets bound to your saved reports.

| Feature | What You Get |
|---------|--------------|
| **Custom Widgets** | Build chart and table widgets for the metrics that matter to your team |
| **Home Dashboard** | Set a default dashboard that loads first |
| **Multiple Dashboards** | Organize different views for different audiences |

![Analytics Dashboards](/img/screenshots/analytics-dashboards.png)
*Custom dashboards with drag-and-drop widgets.*

:::note
Dashboards are part of your account and visible to your team based on user permissions. Sharing follows your account's roles and permissions.
:::

**Learn More:** [Analytics Dashboards](/analytics/dashboards)

---

## December 2025

### Google Customer Match Integration

**Released:** December 2025

Sync your target accounts directly to Google Ads Customer Match for precise ad targeting, without manual list uploads or stale audiences.

| Benefit | What It Means for You |
|---------|----------------------|
| **Automatic Sync** | Audiences update as accounts enter or exit segments |
| **Real-Time Updates** | Changes reflect in Google Ads within hours |
| **Match Rate Reporting** | See how many accounts Google can match |

![Settings > Integrations page](/img/screenshots/integrations-hub.png)
*Open Settings > Integrations and scroll to the Advertising section to find Google Ads / Customer Match.*

:::tip Pro Tip
Combine Google Customer Match with LinkedIn DMP for multi-channel ABM advertising that follows accounts across platforms.
:::

**Learn More:** [Google Customer Match](/audiences/google-customer-match)

---

### LinkedIn DMP Segment Support

**Released:** December 2025

Push your Abmatic AI audiences directly to LinkedIn for precise B2B advertising.

| Feature | Impact |
|---------|--------|
| **Direct Audience Push** | No more manual CSV uploads to LinkedIn |
| **Segment Analytics** | Track audience size and match rates over time |
| **Lookalike Support** | Create lookalike audiences from your best customers |

![Settings > Integrations page](/img/screenshots/integrations-hub.png)
*Open Settings > Integrations and scroll to the Advertising section to find LinkedIn Ads.*

**Learn More:** [LinkedIn DMP](/audiences/linkedin-dmp)

---

### CRM Sync Performance Improvements

**Released:** December 2025

We improved CRM sync speed and reliability so you can sync more data, faster, with fewer errors.

| Improvement | Result |
|-------------|--------|
| **Faster Initial Sync** | Get up and running sooner |
| **Reduced API Usage** | Stay within Salesforce / HubSpot limits |
| **Smart Retry Logic** | Automatic recovery from temporary failures |
| **Better Duplicate Detection** | Cleaner data with fewer duplicates |

---

## November 2025

### Contact Reveal Accuracy Improvements

**Released:** November 2025

We enhanced contact data accuracy with new verification methods, so your sales team gets contacts they can actually reach.

| Enhancement | Your Benefit |
|-------------|--------------|
| **Higher Email Deliverability** | More emails reach the inbox, fewer bounces |
| **Accurate Job Titles** | Target the right decision-makers |
| **Verified Phone Numbers** | Direct-dial numbers you can trust |
| **Data Freshness Indicators** | Know when contact data was last verified |

---

### Slack Integration Enhancements

**Released:** November 2025

More control over your Slack notifications, so you get the alerts that matter where you need them.

| Feature | How It Helps |
|---------|--------------|
| **Channel-Specific Rules** | Route enterprise accounts to one channel, others elsewhere |
| **Custom Templates** | Include the fields your team cares about |
| **Visitor Digests** | Daily or weekly summaries instead of individual alerts |
| **@mention Support** | Tag account owners when high-priority accounts visit |

**Learn More:** [Slack Integration](/integrations/slack)

---

## October 2025

### A/B Testing Improvements

**Released:** October 2025

More powerful experimentation tools to optimize your personalization with confidence.

| Feature | What It Enables |
|---------|-----------------|
| **Multi-Variant Testing** | Test A/B/C/D variations simultaneously |
| **Statistical Significance** | Clear indicators when results are reliable |
| **Automatic Winner Selection** | Promote the best performer automatically |
| **Segment-Level Results** | See how different audiences respond |

:::tip Experiment Smarter
Start with bold variations to see clear results faster. Small tweaks often fail to reach statistical significance.
:::

**Learn More:** [A/B Testing](/campaigns/ab-testing)

---

### Export Enhancements

**Released:** October 2025

More flexible data export options for reporting, compliance, and integration.

| Feature | Use Case |
|---------|----------|
| **Custom Field Selection** | Export only the data you need |
| **Direct CRM Push** | Push exports directly to Salesforce / HubSpot campaigns |

**Learn More:** [Data Export](/settings/data-export)

---

## Feature Requests

Have an idea that would make Abmatic AI even better? We build based on customer feedback.

| How to Submit | Response Time |
|---------------|---------------|
| **Email**: feedback@abmatic.ai | We review submissions regularly |
| **Your Account Manager** | Share directly during your check-ins |
| **In-App Feedback** | Use the feedback button in the app |

:::info We Listen
Many of our best features started as customer requests. Don't hesitate to share your ideas.
:::

---

## Older Releases

For detailed release notes prior to October 2025, contact **support@abmatic.ai** or ask your account manager.
