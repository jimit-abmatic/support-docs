---
id: slack
title: Slack Integration
sidebar_label: Slack
sidebar_position: 3
---

# Slack Integration

Your sales team can't respond to opportunities they don't know about. The Slack integration delivers real-time intelligence about website visitors, identified contacts, and engagement signals directly where your team already works.

## Why Connect Slack?

| Without Slack Integration | With Slack Integration |
|---------------------------|------------------------|
| Check dashboard manually for visitor activity | Get instant alerts when target accounts visit |
| Miss high-intent visitors during busy periods | Never miss a hot prospect browsing pricing |
| Delayed response to engaged contacts | Reach out while interest is peak |
| No visibility into which accounts are active | Real-time awareness across the entire team |
| Disconnected from sales workflow | Actionable insights in your daily workflow |

## What You Can Do

| Capability | Business Impact |
|------------|-----------------|
| **Real-time visitor alerts** | Respond to prospects within minutes, not hours |
| **Smart filtering** | Only get notified about accounts that matter |
| **Channel routing** | Send enterprise alerts to sales, form fills to SDRs |
| **Personal DMs** | Sales reps get alerts for their assigned accounts |
| **Custom message formats** | See exactly the info you need at a glance |
| **Engagement summaries** | Leadership gets daily digests without noise |

![Slack workspace settings page](/img/screenshots/slack-page.png)

*The Slack settings page (Settings > Integrations > Slack). The left rail lists your channels and Active Members; the right panel shows the selected channel's tabs: Filters, Notification Settings, Messages, Members, and Message Customization.*

## Getting Started

### Prerequisites

Before connecting:
- Slack workspace admin or the ability to approve apps
- Channels created for your notification routing strategy
- Understanding of which accounts/visitors are highest priority

### Step 1: Connect to Slack

1. Navigate to **Settings > Integrations** in Abmatic AI
2. Find the **Slack** card under the **Communications** section
3. Click **Authorize**
4. Select your workspace on the Slack authorization page
5. Review permissions and click **Allow**
6. You'll be redirected back to Abmatic AI

Once connected, click the Slack card (or its **Settings** gear) to open the full Slack workspace page at **Settings > Slack**.

### Step 2: Initial Setup

After connecting, Abmatic AI will:
- Sync the Slack channels the bot can see
- Create default notification settings
- Add the Abmatic AI bot to your workspace

The integration is now active and ready to configure.

:::note Members sync automatically
Your workspace members are synced automatically each time you open the Slack settings page, so the **Active Members** list stays current without a manual step. You can also click **Sync Users** to refresh on demand.
:::

## Understanding the Interface

The Slack settings page has two main areas:

### Left Sidebar

| Section | What It Shows |
|---------|---------------|
| **Channels** | All workspace channels with filter indicators |
| **Create Channel** / **Browse Channel** | Create a new Slack channel, or browse and join an existing one, directly from Abmatic AI |
| **Active Members** | Team members who can receive DM notifications |

### Channel Detail Panel

When you select a channel, you'll see these tabs across the top, in order:

| Tab | Purpose |
|-----|---------|
| **Filters** | Configure which visitors trigger notifications |
| **Notification Settings** | Toggle notification types on/off |
| **Messages** | View notification history for this channel |
| **Members** | See who's in the channel |
| **Message Customization** | Choose what info appears in notifications |

:::note Per-user tabs differ slightly
When you select a team member under **Active Members** instead of a channel, the tabs are **Filters, Message Customization, Channels, Messages** — there is no Notification Settings or Members tab for individual users.
:::

## Configuring Channel Filters

Filters determine which visitors trigger notifications. This is where the magic happens—the difference between useful alerts and noise.

### Setting Up Filters

1. Click on a channel name
2. Select the **Filters** tab
3. Add filter rules using Selector + Operator + Value
4. Click **Save**

### Available Filter Categories

#### Company Firmographics

Target by company attributes:

| Filter | Best For | Example |
|--------|----------|---------|
| **Company Name** | Named accounts | Target specific companies |
| **Domain** | Known company websites | Filter by domain list |
| **Employee Count** | Size-based routing | Enterprise: 1K+ employees |
| **Annual Revenue** | Value-based prioritization | $50M+ revenue accounts |
| **Industry** | Vertical teams | Healthcare, Finance, Tech |
| **Company Type** | Segment by structure | Public companies only |

#### Geographic Location

Route to regional teams:

| Filter | Use Case |
|--------|----------|
| **Country** | Route US visitors to US sales |
| **Region** | State-based territory assignment |
| **City** | Local account management |
| **Time Zone** | Route by working hours |

#### Behavioral Signals

Filter by engagement:

| Filter | Why It Matters |
|--------|----------------|
| **Total Page Views** | Higher views = higher interest |
| **Total Sessions** | Multiple visits = active evaluation |
| **Visited Pages** | Pricing/demo pages = high intent |
| **Referrer** | Track traffic source quality |

#### UTM Parameters

Filter by campaign attribution:

| Parameter | Use Case |
|-----------|----------|
| **utm_source** | Alerts for specific traffic sources |
| **utm_medium** | Paid vs organic notifications |
| **utm_campaign** | Specific campaign performance |
| **utm_content** | Ad variation tracking |

#### Contact Attributes

Filter by identified contact properties:

| Filter | Why It Matters |
|--------|----------------|
| **Job Title** | Route by role (e.g., "CTO") |
| **Job Title Level** | C-Level, VP, Director alerts |
| **Job Title Role** | Engineering, Marketing, Sales |
| **Company Name** | Contact's employer |

### Combining Filters with AND/OR Logic

Create precise targeting with filter groups:

**Example: Enterprise + High Intent**
```
(Employee Count is any of [1K-5K, 5K-10K, 10K+])
AND
(
  (Visited Pages contains /pricing)
  OR
  (Visited Pages contains /demo)
)
```

This alerts you to large companies looking at key decision pages.

## Notification Types

Control what triggers alerts in each channel. On the **Notification Settings** tab you'll find these toggles:

| Toggle | When It Fires | Best Channel For |
|--------|---------------|------------------|
| **All Notifications** | Master on/off switch for the channel | — |
| **Account Visitors** | Target account visits your site | Sales team channels |
| **Contact Visitors** | Identified contact browses | Account owner DMs |
| **Account Engagement** | Significant account activity | Leadership summaries |
| **Contact Engagement** | Individual engagement spikes | SDR follow-up |
| **Form Filled** | Visitor submits a tracked form | Inbound lead channel |
| **Summary Info** | Periodic summary and digest notifications | Leadership, marketing |

### Configuring Notifications

1. Click on a channel
2. Select the **Notification Settings** tab
3. Toggle each notification type on or off
4. Use **All Notifications** as the master toggle

![Notification Settings tab with toggles for All Notifications, Account Visitors, Contact Visitors, Account Engagement, Contact Engagement, Form Filled, and Summary Info](/img/screenshots/slack-notif-settings.png)
*The Notification Settings tab. Each notification type has its own toggle, with All Notifications acting as a master switch for the channel.*

### Example Channel Setups

**#sales-hot-leads** (Sales Team):
- Account Visitors: ON
- Contact Visitors: ON
- Form Filled: ON
- Summary: OFF

**#leadership-abm** (Leadership):
- All Notifications: OFF
- Summary: ON (daily digest only)

**#sdrs-inbound** (SDRs):
- Account Visitors: OFF
- Contact Visitors: OFF
- Form Filled: ON
- Summary: OFF

## Message Customization

On the **Message Customization** tab you choose exactly which properties appear in your Slack notifications, so each team sees only what it needs. Toggle properties on or off, or click **Reset to Defaults** to start over. There are two groups: a **Contact Notification Message** list and an **Account Notification Message** list.

![Message Customization tab listing the contact and account properties that can be toggled into notifications](/img/screenshots/slack-msg-custom.png)
*The Message Customization tab. Each contact and account property has a toggle; "Reset to Defaults" restores the standard set.*

### Contact Notification Properties

| Property | When to Include |
|----------|-----------------|
| **Full Name** | Always — it's who you're reaching out to |
| **Job Title** | Always — determines conversation approach |
| **Company Name** | Always — account context |
| **Company Industry** | Conversation context |
| **Location** | Regional context |
| **LinkedIn URL** | For quick research before outreach |
| **Profile Image** | Visual context |
| **Work Email** | For immediate follow-up |
| **Campaigns (Text)** / **Campaigns (List)** | See which campaigns reached them |
| **Visited Page** / **Visited Pages (Legacy)** | Conversation starter context |
| **UTM Parameters** | Attribution context |
| **Confidence** | The reveal confidence for this contact |
| **Associated AE** | The account executive assigned to the account |
| **Abmatic Link** | Quick access to the full profile in Abmatic AI |

### Account Notification Properties

| Property | When to Include |
|----------|-----------------|
| **Company Name** | Always — identifies the account |
| **Website** | Quick access to their site |
| **Industry** | Conversation context |
| **Company Size** | Prioritization signal |
| **Revenue** | Value-based routing |
| **LinkedIn URL** | Company research |
| **Technologies** | Technical fit assessment |
| **Visited Pages** | Intent signals |
| **Abmatic Link** | Full account details in Abmatic AI |

### Setting Team-Specific Defaults

**Sales Team Configuration:**
- Name, Title, Company, LinkedIn, Visited Page, Abmatic Link
- Enables quick outreach with full context

**Marketing Team Configuration:**
- Company, Industry, Size, Campaigns, UTM Parameters
- Focus on attribution and segmentation insights

**Leadership Configuration:**
- Company, Size, Revenue, Visited Page
- High-level engagement visibility

## User-Level DM Notifications

Individual team members can receive personalized notifications via direct messages.

### Setting Up Personal Alerts

1. Go to **Settings > Slack**
2. Look at the **Active Members** section in the left sidebar
3. Click on a team member's name
4. Configure their personal filters

### Use Case: Sales Rep Territory Alerts

A sales rep wants notifications only for their assigned accounts:
- Filter: Associated AE `is` [rep name]
- Result: Only their accounts trigger DMs

### Use Case: Executive Alerts

An exec wants alerts only for enterprise target accounts:
- Filter: Employee Count `is any of` [5K-10K, 10K+]
- Filter: Account List `is any of` [Target Accounts Q1]
- Result: Only high-value targets trigger DMs

## Channel Management

### Creating Channels from Abmatic

You can create new Slack channels directly:

1. Click **Create Channel** in the sidebar
2. Enter a channel name (e.g., #abmatic-enterprise)
3. Choose public or private
4. Add description
5. Click **Create**

The Abmatic AI bot is automatically added to channels you create.

### Joining Existing Channels

For the bot to post to a channel:

1. Find the channel in the list
2. Click **Join Channel**
3. Configure filters and notification settings

### Syncing Channels

If channels are missing after workspace changes:

1. Click **Sync Channels**
2. Wait for the sync to complete
3. New channels will appear in the list

## Global Settings

Open the **Settings** gear at the top of the Slack page for account-wide options that apply to all channels:

| Setting | What It Does | Recommendation |
|---------|--------------|----------------|
| **Suppress Account Notifications When Contact Revealed** | When a contact is revealed in the same event, skip the duplicate account-level alert | Turn ON to reduce duplicate alerts |

## Best Practices

### Channel Organization Strategy

| Channel Name | Purpose | Key Filters |
|--------------|---------|-------------|
| #abmatic-enterprise | Large accounts | Employee Count: 1K+ |
| #abmatic-target-accounts | Strategic accounts | Account list membership |
| #abmatic-inbound | Form submissions | Notification: Forms only |
| #abmatic-high-intent | Engaged visitors | Page views > 5, pricing pages |
| #abmatic-[region] | Regional teams | Country/Region filters |

### Reducing Notification Noise

| Strategy | How to Implement |
|----------|------------------|
| Use aggressive filters | Only notify for ICP-matching visitors |
| Enable the suppress-duplicate setting | Suppress duplicate account/contact alerts |
| Separate by purpose | Don't mix all alerts in one channel |
| Use summaries for leadership | Digest instead of real-time for execs |
| Filter by page views | Require 2+ page views minimum |

### Maximizing Sales Response

| Practice | Why It Matters |
|----------|----------------|
| Include Abmatic Link | One click to full details |
| Show visited pages | Know what they're interested in |
| Display company size/revenue | Prioritize responses |
| Add LinkedIn URL | Research before reaching out |
| Enable contact DMs | Account owners get personal alerts |

## Troubleshooting

### Bot Not Posting

| Symptom | Check This |
|---------|------------|
| No messages appearing | Verify bot has joined the channel |
| Missing some notifications | Check filter rules aren't too restrictive |
| Only some types work | Ensure notification type is toggled ON |
| Nothing works | Confirm integration is active |

### Missing Channels

| Issue | Solution |
|-------|----------|
| New channels don't appear | Click **Sync Channels** to refresh |
| Private channel not listed | Invite the Abmatic AI bot to the channel first |
| Channel disappeared | Check if it was archived in Slack |

### Notification Delays

- Notifications are near real-time (within seconds)
- High volumes during peak traffic may cause slight delays
- Check Slack workspace rate limits if persistent

### Disconnection Issues

If the integration disconnects, reconnect it from the Slack card:

1. Go to **Settings > Integrations** and find the **Slack** card under Communications
2. Click **Authorize** and re-authorize in Slack
3. Your previous channel and notification settings are preserved

## Disconnecting

To remove the Slack integration:

1. Go to **Settings > Integrations** and find the **Slack** card under Communications
2. Click **Disable**
3. Confirm the action

Your filter and notification configurations are preserved in case you reconnect later.

## Related Documentation

| Topic | Link |
|-------|------|
| Building audience filters | [Filters Guide](/audiences/filters) |
| All integrations | [Integrations Overview](/integrations/overview) |
| Email notifications | [Notification Settings](/settings/notifications) |
| Visitor identification | [Company Identification](/visitor-tracking/company-identification) |
| Contact reveal | [Contact Reveal](/visitor-tracking/contact-reveal) |
