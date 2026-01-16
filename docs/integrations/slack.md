---
id: slack
title: Slack Integration
sidebar_label: Slack
sidebar_position: 2
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

![Slack Settings](/img/screenshots/settings-slack.png)

*The Slack settings page showing channel list, filter configuration, and notification settings tabs.*

## Getting Started

### Prerequisites

Before connecting:
- Slack workspace admin or the ability to approve apps
- Channels created for your notification routing strategy
- Understanding of which accounts/visitors are highest priority

### Step 1: Connect to Slack

1. Navigate to **Settings > Integrations** in Abmatic AI
2. Find **Slack** under Communications
3. Click **Connect**
4. Select your workspace in the Slack authorization page
5. Review permissions and click **Allow**
6. You'll be redirected back to Abmatic AI

### Step 2: Initial Setup

After connecting, Abmatic AI will:
- Sync your Slack channels and users
- Create default notification settings
- Add the Abmatic bot to your workspace

The integration is now active and ready to configure.

## Understanding the Interface

The Slack settings page has two main areas:

### Left Sidebar

| Section | What It Shows |
|---------|---------------|
| **Channels** | All workspace channels with filter indicators |
| **+ CREATE CHANNEL** | Create new channels directly from Abmatic |
| **Active Members** | Team members who can receive DM notifications |

### Channel Detail Panel

When you select a channel, you'll see tabs for:

| Tab | Purpose |
|-----|---------|
| **Filters** | Configure which visitors trigger notifications |
| **Notification Settings** | Toggle notification types on/off |
| **Messages** | View notification history for this channel |
| **Members** | See who's in the channel |
| **Message Customization** | Choose what info appears in notifications |

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

Control what triggers alerts in each channel:

| Type | When It Fires | Best Channel For |
|------|---------------|------------------|
| **Account Visitors** | Target account visits your site | Sales team channels |
| **Contact Visitors** | Identified contact browses | Account owner DMs |
| **Account Engagement** | Significant account activity | Leadership summaries |
| **Contact Engagement** | Individual engagement spikes | SDR follow-up |
| **Form Submissions** | Visitor submits a tracked form | Inbound lead channel |
| **Summary/Digest** | Periodic activity roundup | Leadership, marketing |

### Configuring Notifications

1. Click on a channel
2. Select **Notification Settings** tab
3. Toggle each notification type on/off
4. Use **All Notifications** as a master toggle

### Example Channel Setups

**#sales-hot-leads** (Sales Team):
- Account Visitors: ON
- Contact Visitors: ON
- Form Submissions: ON
- Summary: OFF

**#leadership-abm** (Leadership):
- All Notifications: OFF
- Summary: ON (daily digest only)

**#sdrs-inbound** (SDRs):
- Account Visitors: OFF
- Contact Visitors: OFF
- Form Submissions: ON
- Summary: OFF

## Message Customization

Customize what information appears in notifications to match how each team works.

### Contact Properties

| Property | When to Include |
|----------|-----------------|
| **Full Name** | Always—it's who you're reaching out to |
| **Job Title** | Always—determines conversation approach |
| **Company Name** | Always—account context |
| **LinkedIn URL** | For quick research before outreach |
| **Work Email** | For immediate follow-up |
| **Visited Page** | Conversation starter context |
| **Campaigns** | See which campaigns reached them |
| **Confidence** | Trust the identification |
| **Abmatic Link** | Quick access to full profile |

### Account Properties

| Property | When to Include |
|----------|-----------------|
| **Company Name** | Always—identifies the account |
| **Website** | Quick access to their site |
| **Industry** | Conversation context |
| **Company Size** | Prioritization signal |
| **Revenue** | Value-based routing |
| **LinkedIn URL** | Company research |
| **Technologies** | Technical fit assessment |
| **Visited Pages** | Intent signals |
| **Abmatic Link** | Full account details |

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

1. Click **+ CREATE CHANNEL** in the sidebar
2. Enter a channel name (e.g., #abmatic-enterprise)
3. Choose public or private
4. Add description
5. Click **Create**

The Abmatic bot is automatically added to channels you create.

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

Account-wide settings that apply to all channels:

| Setting | What It Does | Recommendation |
|---------|--------------|----------------|
| **Disable form notifications** | Turn off form alerts globally | Leave ON unless noisy |
| **Smart account notifications** | Suppress account alert when contact is revealed in same event | Turn ON to reduce duplicates |

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
| Enable smart notifications | Suppress duplicate account/contact alerts |
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
| Private channel not listed | Invite @abmatic-bot to the channel first |
| Channel disappeared | Check if it was archived in Slack |

### Notification Delays

- Notifications are near real-time (within seconds)
- High volumes during peak traffic may cause slight delays
- Check Slack workspace rate limits if persistent

### Disconnection Issues

If the integration disconnects:

1. Go to **Settings > Slack**
2. Click **Reconnect**
3. Re-authorize in Slack
4. Previous settings are preserved

## Disconnecting

To remove the Slack integration:

1. Go to **Settings > Slack**
2. Click **Disconnect**
3. Confirm the action

Your filter configurations are preserved for future reconnection.

## Related Documentation

| Topic | Link |
|-------|------|
| Building audience filters | [Filters Guide](/audiences/filters) |
| All integrations | [Integrations Overview](/integrations/overview) |
| Email notifications | [Notification Settings](/settings/notifications) |
| Visitor identification | [Company Identification](/visitor-tracking/company-identification) |
| Contact reveal | [Contact Reveal](/visitor-tracking/contact-reveal) |
