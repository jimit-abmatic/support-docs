---
id: overview
title: Integrations Overview
sidebar_label: Overview
sidebar_position: 1
---

# Integrations Overview

Connect your marketing and sales stack to Abmatic AI so your tools work together. Instead of exporting CSVs and copying data by hand, your CRM, ad networks, calendar, and analytics stay in sync — and your sales team sees buyer-intent signals where they already work.

---

## The Integrations Hub

Access all integrations from **Settings > Integrations**. Each integration appears as a card, grouped into sections, with a clear status chip showing whether it's connected.

![The Integrations hub showing the CRM and Communications sections with status chips](/img/screenshots/int-hub.png)
*The Integrations hub. Cards are grouped into sections, each with an Active or Inactive status chip.*

Each card uses the same simple controls:

| Element | What It Means |
|---------|---------------|
| **Active** (green chip) | Connected and working |
| **Inactive** (grey chip) | Not connected |
| **Authorize** | Connect the integration |
| **Disable** | Disconnect the integration |
| **Settings** (gear) | Open the integration's configuration |

---

## The Seven Sections

The Integrations hub is organized into seven sections, in this order:

1. Customer Relationship Management (CRM)
2. Communications
3. Conversion tracking
4. Abmatic IP Data Providers
5. Ad Networks
6. Accounts & Contacts Data
7. Marketing & Sales Automation

### 1. Customer Relationship Management (CRM)

> *"Set the order of CRMs by moving the integrations."*

Sync accounts and contacts both ways with your CRM. The CRM cards are **draggable** — drag them to set the priority order Abmatic AI uses when resolving data conflicts between connected CRMs.

| Platform | Connect With | Setup Guide |
|----------|--------------|-------------|
| **Salesforce** | OAuth | [Setup Guide](/integrations/crm/salesforce-setup) |
| **HubSpot** | OAuth | [Setup Guide](/integrations/crm/hubspot-setup) |
| **Pipedrive** | OAuth | [Learn more](/integrations/crm/pipedrive) |
| **ActiveCampaign** | API URL + key | [Learn more](/integrations/crm/activecampaign) |

:::tip CRM Priority Order
When more than one CRM is connected, drag the cards to set priority. The first CRM in the order wins when the same field has conflicting values.
:::

### 2. Communications

> *"Connect all your communication sources and alert mechanisms."*

Get alerts and book meetings where your team already works.

![Communications section with Gmail, Slack, Google Calendar, and Zoom cards](/img/screenshots/int-communications.png)
*The Communications section now includes Gmail, Slack, Google Calendar, and Zoom.*

| Platform | What It Does | Learn More |
|----------|--------------|------------|
| **Gmail** | Send AI Sequence emails from your real Gmail | [Learn more](/integrations/gmail) |
| **Slack** | Real-time alerts for visits, conversions, and high-intent signals | [Setup Guide](/integrations/slack) |
| **Google Calendar** | Meeting booking and availability for Agentic Chat | [Learn more](/integrations/calendar) |
| **Zoom** | Generate Zoom meeting links | [Learn more](/integrations/zoom) |

### 3. Conversion tracking

> *"With conversion tracking, you can only integrate to one service at a time."*

Connect your analytics so Abmatic AI can measure conversions and personalization performance.

| Platform | What It Does | Setup Guide |
|----------|--------------|-------------|
| **Google Analytics** (GA4) | Import conversion goals and measure lift | [Setup Guide](/integrations/google-analytics) |
| **Segment** | Stream events into Abmatic AI as conversion goals | [Setup Guide](/integrations/segment) |

:::note One at a Time
You can have only **one** conversion tracking integration active at a time. Disable one before activating the other.
:::

### 4. Abmatic IP Data Providers

> *"5 integrated data providers working in a waterfall to maximize visitor identification."*

Abmatic AI identifies website visitors using a fixed **5-provider waterfall**. When a visitor arrives, Abmatic AI runs through each provider in order, enriching company data at every step. You don't configure individual providers — the whole pool is managed by Abmatic AI and turned on or off with a single switch.

![Abmatic IP Data Providers — five Abmatic-branded waterfall providers, all Active](/img/screenshots/int-ip-providers.png)
*The five fixed providers in the Abmatic IP waterfall, each shown with an Active status.*

| Provider | What It Does |
|----------|--------------|
| **Abmatic IP Primary** | Primary reverse IP lookup with the highest match rates |
| **Abmatic IP Enhanced** | Enhanced firmographic data with company details |
| **Abmatic IP Extended** | Extended coverage for smaller companies |
| **Abmatic AI Enrichment** | AI-powered company matching and enrichment |
| **Abmatic IP Fallback** | Fallback provider for maximum coverage |

:::info No separate setup
These five providers are built in and require no separate subscriptions or per-provider configuration. There is a single on/off control for the whole waterfall.
:::

### 5. Ad Networks

Push your target account and contact lists to ad platforms.

![Ad Networks section with LinkedIn, Google Ads, OpenAI, and Meta (Coming Soon)](/img/screenshots/int-ad-networks.png)
*The Ad Networks section. OpenAI Ads connects with an API key; Meta is shown as Coming Soon (its Authorize button is disabled).*

| Platform | Connect With | Status | Learn More |
|----------|--------------|--------|------------|
| **LinkedIn** | OAuth | Live | [Setup Guide](/integrations/advertising/linkedin-ads) |
| **Google Ads** | OAuth | Live | [Setup Guide](/integrations/advertising/google-ads) |
| **OpenAI** | API key | Live | [Learn more](/integrations/openai-ads-integration) |
| **Meta** | — | **Coming Soon** (disabled) | — |

:::note Meta is not yet available
The Meta card appears in the Ad Networks section but is currently **Coming Soon** — the Authorize button is disabled. Don't plan workflows around Meta ads until it's live.
:::

### 6. Accounts & Contacts Data

> *"Set the order of fetching target data by moving the sources."*

Import and enrich target accounts and contacts. These cards are **draggable** — drag them to set the order Abmatic AI uses when fetching data.

| Source | What It Provides |
|--------|------------------|
| **Abmatic** | Built-in data source for fetching target accounts and contacts. Always available. |
| **Apollo.io** | Contact data enrichment and email discovery |

### 7. Marketing & Sales Automation

> *"Integrate your automation tools for increased productivity."*

| Platform | What It Does | Status | Learn More |
|----------|--------------|--------|------------|
| **Outreach** | Sync accounts and prospects for go-to-market teams | Live | [Learn more](/integrations/crm/outreach) |
| **Marketo** | Marketing automation | **Not yet functional** (placeholder) | — |

:::caution Marketo is a placeholder
The Marketo card is present but its connect action does nothing yet. It is not a working integration today.
:::

---

## Connecting an Integration

Most integrations take a couple of minutes to connect. The flow depends on how the integration authenticates:

### OAuth integrations

Salesforce, HubSpot, Pipedrive, Gmail, Google Calendar, Zoom, Google Analytics, LinkedIn, and Google Ads use OAuth:

1. Click **Authorize** on the card.
2. Sign in to the platform in the popup.
3. Review the requested permissions and click **Allow**.
4. The card returns to **Active**.

### API-key integrations

ActiveCampaign and OpenAI Ads use a key instead of a sign-in popup:

1. Click **Authorize** (or the **Settings** gear) on the card.
2. Enter the API key (ActiveCampaign also needs the API URL).
3. Save. The card shows **Active**.

:::tip Use a dedicated integration account
For CRMs, connect with an admin account whose credentials won't change. A dedicated "Abmatic Integration" user keeps the sync running even if a team member leaves.
:::

---

## CRM Sync Settings

For CRM integrations, click the **Settings** gear on the card to open the sync configuration. It has tabs for each object type (Accounts, Contacts, Opportunities, and — for Salesforce — Leads and Campaigns), plus an Activity Log.

### Object syncing

For each object, choose what syncs in each direction with **Create** and **Update** checkboxes. A directional chip summarizes the result:

| Chip | Meaning |
|------|---------|
| **Sync both ways** | Records sync to and from the CRM |
| **Sync into [CRM]** | Abmatic AI pushes to the CRM only |
| **Sync into Abmatic** | Abmatic AI pulls from the CRM only |
| **Not syncing** | This object is not synced |

### Field mapping modes

Each mapped field has a **Sync to CRM** mode and a **Sync to Abmatic** checkbox:

| Mode | Behavior | Best For |
|------|----------|----------|
| **Don't sync** | The field is not pushed to the CRM | Read-only or sensitive fields |
| **Fill** | Only fills the field when it's empty in the CRM | Enriching without overwriting work your team did |
| **Overwrite** | Always updates the field with the Abmatic AI value | Keeping Abmatic AI as the source of truth |

Click **Add Mapping** to map additional or custom fields.

:::warning Be careful with Overwrite
"Overwrite" replaces existing CRM values. If your sales team edits a field by hand, use **Fill** for that field so their work isn't lost.
:::

### Push filters

Each Accounts and Contacts tab has a **"Set up filters for pushing records"** section. Only records that match these filters are pushed to the CRM. Leave the filters empty to push all records. An active filter shows a "*N* filter(s) active" chip.

### Sync frequency

| Setting | Options |
|---------|---------|
| **Polling** (pulling from the CRM) | **Only when synced manually**, or **Automatically** every *N* hours |
| **Pushing** (sending to the CRM) | Turn on **Automatically push changes to [CRM]** |

Each object tab also has a **Sync [Object]s Manually** button and shows **Last Sync with [CRM]** and **Last Sync with Abmatic** timestamps.

---

## Pushing and Importing Records

| Action | Where | What It Does |
|--------|-------|--------------|
| **Push to CRM** | The **Push to [CRM]** dialog, or the **Push to CRM** action on an account/contact Overview page | Sends selected accounts/contacts to the CRM |
| **Import from CRM** | **Audiences > Accounts/Contacts > Create > Import from CRM** | Pulls accounts/contacts from the CRM into a list |

---

## Integration Status

Every card shows one of two states:

| Status | Chip | What It Means |
|--------|------|---------------|
| **Active** | Green | Connected and working |
| **Inactive** | Grey | Not connected |

---

## Troubleshooting

### Connection Issues

| Problem | Solution |
|---------|----------|
| Card stays Inactive after Authorize | Re-open the card and Authorize again; allow popups for OAuth |
| "Invalid credentials" / "Token expired" | Disconnect and reconnect the integration |
| "Insufficient permissions" | Connect with an admin account that has API access |

### Sync Issues

| Problem | Solution |
|---------|----------|
| Records not syncing | Check the object's Create/Update settings and the directional chip |
| No data appearing | Confirm field mapping is set and push filters aren't too restrictive |
| Stale data | Check Polling frequency, or click **Sync [Object]s Manually** |

---

## Related Documentation

### CRM
- [Salesforce Setup](/integrations/crm/salesforce-setup)
- [HubSpot Setup](/integrations/crm/hubspot-setup)
- [Pipedrive](/integrations/crm/pipedrive)
- [ActiveCampaign](/integrations/crm/activecampaign)
- [Sync Behavior Guide](/integrations/crm/sync-behavior)

### Communications
- [Slack](/integrations/slack)
- [Google Calendar](/integrations/calendar)
- [Zoom](/integrations/zoom)

### Conversion Tracking
- [Google Analytics](/integrations/google-analytics)
- [Segment](/integrations/segment)

### Ad Networks
- [LinkedIn Ads](/integrations/advertising/linkedin-ads)
- [Google Ads](/integrations/advertising/google-ads)
- [OpenAI Ads](/integrations/openai-ads-integration)

### Automation
- [Outreach](/integrations/crm/outreach)
