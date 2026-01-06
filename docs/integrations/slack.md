---
id: slack
title: Slack Integration
sidebar_label: Slack
sidebar_position: 2
---

# Slack Integration

Get real-time notifications about website visitors, contacts, and engagement directly in your Slack workspace. This guide covers setup, channel configuration, filters, message customization, and best practices.

## Overview

The Slack integration allows you to:
- Receive instant notifications when target accounts visit your website
- Get alerts when identified contacts engage with your content
- Filter notifications by company attributes, behavior, and campaigns
- Customize message formats to show the information you need
- Route different notification types to specific channels
- Enable individual team members to receive personalized DMs

![Slack Settings](/img/screenshots/settings-slack.png)

## Setting Up the Integration

### Step 1: Connect to Slack

1. Navigate to **Settings > Slack** in Abmatic AI
2. Click **Connect to Slack**
3. You'll be redirected to Slack's authorization page
4. Select the workspace you want to connect
5. Review the permissions and click **Allow**
6. You'll be redirected back to Abmatic AI

### Step 2: Initial Configuration

After connecting, Abmatic AI will:
- Sync your Slack channels and users
- Create default notification settings
- Set up the bot in your workspace

The integration is now active and ready to configure.

## Channel Management

### Viewing Channels

The Slack settings page displays all channels in your workspace. You can:
- See which channels the Abmatic bot has joined
- View member counts for each channel
- Check if filters are configured (indicated by a filter icon)
- Search for specific channels

### Joining Channels

For the bot to send notifications to a channel:

1. Find the channel in the list
2. Click **Join Channel**
3. The bot will be added to the channel
4. Configure filters and settings for that channel

### Creating Channels

You can create new Slack channels directly from Abmatic AI:

1. Click **Create Channel**
2. Enter a channel name
3. Choose public or private
4. Add a description (optional)
5. Click **Create**

The bot is automatically added to channels you create.

## Setting Up Filters

Filters determine which visitors and accounts trigger notifications in each channel. This allows you to route relevant notifications to the right teams.

### Accessing Channel Filters

1. Click on a channel name
2. Select the **Filters** tab
3. Configure filter rules

### Filter Categories

#### Company Firmographics

Target by company attributes:

| Filter | Description | Conditions |
|--------|-------------|------------|
| **Company Name** | Organization name | is, is not, contains, begins with |
| **Domain** | Company website | is, is not, contains |
| **Employee Count** | Company size ranges | is, is not |
| **Annual Revenue** | Revenue ranges | is, is not |
| **Industry** | Business sector | is any of, is not any of |
| **Company Type** | Public, Private, etc. | is any of, is not any of |

**Example**: Notify #enterprise-team for large companies
- Employee Count `is any of` [1K-5K, 5K-10K, 10K+]
- AND Industry `is any of` [Information Technology, Financial Services]

#### Geographic Location

Filter by visitor location:

| Filter | Description | Conditions |
|--------|-------------|------------|
| **Country** | Visitor's country | is any of, is not any of |
| **Region** | State/Province | is, contains |
| **City** | Visitor's city | is, contains |
| **Time Zone** | UTC offset | is any of |

**Example**: Route to regional teams
- Country `is` United States
- AND Region `is any of` [California, Washington, Oregon]

#### Behavioral Signals

Filter by engagement:

| Filter | Description | Conditions |
|--------|-------------|------------|
| **Total Page Views** | Pages viewed | is above, is below, is between |
| **Total Sessions** | Visit sessions | is above, is below |
| **Visited Pages** | Specific URLs | contains, begins with |
| **Referrer** | Traffic source | contains, is |

**Example**: High-intent visitors only
- Total Page Views `is above` 3
- AND Visited Pages `contains` /pricing

#### UTM Parameters

Filter by campaign attribution:

| Filter | Description |
|--------|-------------|
| **utm_source** | Traffic source (google, linkedin) |
| **utm_medium** | Channel (cpc, email, social) |
| **utm_campaign** | Campaign name |
| **utm_term** | Paid search keywords |
| **utm_content** | Ad variation |

**Example**: LinkedIn campaign notifications
- utm_source `is` linkedin
- utm_medium `is` cpc

#### Contact Attributes

Filter by identified contact properties:

| Filter | Description | Conditions |
|--------|-------------|------------|
| **Job Title** | Contact's title | contains, is |
| **Job Title Role** | Standardized role | is any of |
| **Job Title Level** | Seniority level | is any of |
| **Company Name** | Contact's company | is, contains |

**Example**: Decision maker alerts
- Job Title Level `is any of` [C-Level, VP Level, Director Level]

#### Campaigns and Segments

| Filter | Description |
|--------|-------------|
| **Campaigns** | Active campaign membership |
| **Associated AE** | Assigned account executive |

### Combining Filters

Use AND/OR logic to create precise targeting:

- **AND** - All conditions must match (narrower)
- **OR** - Any condition can match (broader)

**Example**: Enterprise + High Intent
```
(Employee Count is any of [1K-5K, 5K-10K, 10K+])
AND
(
  (Visited Pages contains /pricing)
  OR
  (Visited Pages contains /demo)
)
```

### Saving Filters

1. Configure your filter rules
2. Click **Save Filters**
3. The channel will show a filter indicator

Filters are applied in real-time to all incoming notifications.

## Notification Settings

Control which types of notifications each channel receives.

### Notification Types

| Type | Description |
|------|-------------|
| **Account Visitors** | When a target account visits your site |
| **Contact Visitors** | When an identified contact visits |
| **Account Engagement** | Significant account engagement activities |
| **Contact Engagement** | Significant contact engagement |
| **Form Submissions** | When visitors submit tracked forms |
| **Summary/Digest** | Periodic summary notifications |

### Configuring Notifications

1. Click on a channel
2. Select the **Notification Settings** tab
3. Toggle each notification type on/off
4. Use **All Notifications** as a master toggle

**Example Setup for Sales Team**:
- Account Visitors: ON
- Contact Visitors: ON
- Form Submissions: ON
- Summary: OFF (prefer real-time)

**Example Setup for Leadership**:
- All Notifications: OFF
- Summary: ON (daily digest only)

### Account-Level Settings

Global settings that apply across all channels:

1. Navigate to **Settings > Slack**
2. Find **Global Settings**
3. Configure:
   - **Disable form notifications**: Turn off form submission alerts globally
   - **Smart account notifications**: Suppress account notification when contact is revealed in same event (reduces noise)

## Message Customization

Customize what information appears in Slack notifications.

### Accessing Customization

1. Click on a channel
2. Select the **Message Customization** tab
3. Configure properties to display

### Contact Properties

Choose which contact details appear in notifications:

| Property | Description |
|----------|-------------|
| **Full Name** | Contact's full name |
| **Job Title** | Position/role |
| **Company Name** | Current employer |
| **Company Industry** | Industry sector |
| **Location** | Geographic location |
| **LinkedIn URL** | Profile link |
| **Work Email** | Business email |
| **Profile Image** | Photo/avatar |
| **Campaigns** | Campaign membership (text or list format) |
| **Visited Page** | Current page title |
| **UTM Parameters** | Campaign attribution |
| **Confidence** | Identification confidence score |
| **Associated AE** | Assigned sales rep |
| **Abmatic Link** | Direct link to record in Abmatic |

### Account Properties

Choose which company details appear:

| Property | Description |
|----------|-------------|
| **Company Name** | Organization name |
| **Website** | Company URL |
| **Industry** | Business sector |
| **Location** | Headquarters location |
| **Company Size** | Employee count range |
| **Revenue** | Estimated annual revenue |
| **LinkedIn URL** | Company page link |
| **Company Logo** | Organization logo |
| **Technologies** | Tech stack information |
| **Campaigns** | Campaign membership |
| **Visited Pages** | Browsing history |
| **UTM Parameters** | Attribution data |
| **Confidence** | Match confidence |
| **Associated AE** | Assigned rep |
| **Abmatic Link** | Quick access to Abmatic |

### Setting Defaults

Set account-wide defaults that apply to all channels:

1. Go to **Settings > Slack**
2. Click **Default Message Customization**
3. Select properties for contacts and accounts
4. Click **Save**

Individual channels can override these defaults.

### Customization Tips

**For Sales Teams**:
- Include: Name, Title, Company, LinkedIn, Visited Page, Abmatic Link
- Enables quick outreach with context

**For Marketing Teams**:
- Include: Company, Industry, Size, Campaigns, UTM Parameters
- Focus on attribution and segmentation

**For Leadership**:
- Include: Company, Size, Revenue, Visited Page
- High-level engagement visibility

## Previewing Messages

View historical notifications to verify your setup.

### Channel Message History

1. Click on a channel
2. Select the **Messages** tab
3. Browse notification history

Messages are grouped by date:
- Today
- Yesterday
- Specific dates

You can scroll to load older messages.

### User Message History

For direct message notifications:

1. Switch to the **Users** tab
2. Click on a user
3. Select **Messages**
4. View their DM notification history

## User-Level Settings

Configure notifications for individual team members via direct messages.

### Enabling User DMs

1. Go to **Settings > Slack**
2. Switch to the **Users** tab
3. Find the team member
4. Configure their settings

### User Configuration Options

Each user can have:

**Filters**: Personal filter criteria
- Useful for sales reps who want alerts for their accounts only
- Example: Associated AE `is` [their name]

**Message Customization**: Personalized message format
- Different from channel notifications
- Tailored to individual preferences

**Channels**: View which channels the user belongs to

### Syncing Users

To update the user list from Slack:

1. Click **Sync Users**
2. Wait for the sync to complete
3. New team members will appear

## Channel Members

View and manage who receives notifications.

### Viewing Members

1. Click on a channel
2. Select the **Members** tab
3. See all channel members

### Member Information

For each member you can see:
- Display name
- Email address
- Profile avatar

## Best Practices

### Channel Organization

Create purpose-specific channels:

| Channel | Purpose | Filter Example |
|---------|---------|----------------|
| #abmatic-enterprise | Large accounts | Employee Count: 1K+ |
| #abmatic-inbound | Form submissions | Notification: Form only |
| #abmatic-west-coast | Regional team | Region: CA, WA, OR |
| #abmatic-target-accounts | Key accounts | Account list membership |
| #abmatic-high-intent | Engaged visitors | Page views > 5 |

### Reducing Noise

1. **Use filters aggressively** - Only notify for relevant visitors
2. **Enable smart notifications** - Suppress duplicate account/contact alerts
3. **Separate channels by purpose** - Don't mix all notifications
4. **Use summaries for leadership** - Digest vs real-time

### Maximizing Value

1. **Include Abmatic Link** - Quick access to full details
2. **Show visited pages** - Provides conversation context
3. **Display company size/revenue** - Helps prioritization
4. **Add UTM parameters** - Track campaign effectiveness

### Team Alignment

1. **Sales**: Real-time contact + account alerts with quick-action links
2. **Marketing**: Campaign attribution and engagement patterns
3. **SDRs**: Form submissions and high-intent signals
4. **Leadership**: Daily/weekly summaries

## Troubleshooting

### Bot Not Posting

1. Verify the bot has joined the channel
2. Check that filters aren't too restrictive
3. Ensure notification type is enabled
4. Confirm the integration is active

### Missing Channels

1. Click **Sync Channels** to refresh
2. For private channels, invite the bot first
3. Check channel archival status

### Notification Delays

- Notifications are sent in near real-time
- Large volumes may cause slight delays
- Check Slack workspace limits

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

This removes the bot from your workspace but preserves your filter configurations for future reconnection.

## Related

- [Filters Guide](/audiences/filters)
- [Integrations Overview](/integrations/overview)
- [Notification Settings](/settings/notifications)
