---
id: crm-campaigns
title: CRM Campaigns
sidebar_label: CRM Campaigns
sidebar_position: 9
---

# CRM Campaigns

**Unite your marketing efforts with sales execution.** Sync your Abmatic AI campaigns directly to Salesforce and HubSpot to create seamless handoffs, unified reporting, and complete revenue attribution—all without manual data entry.

## Why CRM Campaign Sync Matters

| Without CRM Sync | With CRM Sync |
|------------------|---------------|
| Sales can't see marketing engagement | Every touchpoint visible in CRM |
| Manual list uploads and updates | Automatic member sync in real-time |
| Disconnected attribution data | Full pipeline influence reporting |
| Marketing and sales work in silos | Unified view of the customer journey |
| Hours spent on spreadsheet exports | Zero manual data transfer |

## How It Works

CRM campaign sync creates a two-way connection between Abmatic and your CRM:

1. **Campaign Link** - Connect an Abmatic campaign to a new or existing CRM campaign
2. **Automatic Membership** - Contacts matching your targeting are added as campaign members
3. **Engagement Sync** - Website visits, personalizations, and conversions flow to your CRM
4. **Revenue Attribution** - Track pipeline and closed-won revenue influenced by your campaigns

![Campaigns list showing Salesforce Campaigns filter](/img/screenshots/crm-campaign-overview.png)

## Getting Started

### Prerequisites

Before setting up CRM sync, ensure you have:

| Requirement | Why It Matters |
|-------------|----------------|
| CRM integration connected | Enables data flow between systems |
| Campaign creation permissions | Needed to create/link CRM campaigns |
| Contacts/leads in your CRM | Members must exist to be synced |

![CRM integrations available in Abmatic](/img/screenshots/integrations-hub.png)

### Creating a Synced Campaign

**Step 1: Open Campaign Settings**

Navigate to your Abmatic campaign and click **Settings > CRM Sync**.

**Step 2: Choose Your CRM**

Select either **Salesforce** or **HubSpot** based on your integration.

**Step 3: Link or Create**

- **Create New**: Abmatic automatically creates a matching campaign in your CRM
- **Link Existing**: Connect to a campaign you've already created

**Step 4: Configure Sync Settings**

Choose which engagement events should update member status and how often to sync.

**Step 5: Enable Sync**

Click **Enable Sync** to start the connection. Members begin syncing immediately.

## Salesforce Campaign Sync

### Synced Fields

Abmatic keeps your Salesforce campaign in sync with these fields:

| Abmatic Field | Salesforce Field | Description |
|---------------|------------------|-------------|
| Campaign Name | Campaign Name | Auto-updates when you rename |
| Start Date | Start Date | Campaign launch date |
| End Date | End Date | Campaign end date |
| Campaign Status | Status | Active, Paused, Complete |
| Description | Description | Campaign details |
| Campaign Type | Type | ABM, Nurture, etc. |

### Member Status Mapping

Configure how Abmatic engagement translates to Salesforce campaign member status:

| Abmatic Event | Suggested Status | What It Means |
|---------------|------------------|---------------|
| Added to campaign | Sent | Contact is targeted |
| Page personalized | Responded | Saw personalized content |
| Form submitted | Converted | Completed a conversion goal |
| Meeting booked | Qualified | High-intent engagement |

**Pro Tip**: Customize these mappings to match your existing Salesforce status values for seamless adoption.

### Metrics That Sync

Track campaign performance directly in Salesforce:

| Metric | What It Shows | Why It Matters |
|--------|---------------|----------------|
| Number Sent | Total members targeted | Campaign reach |
| Number of Leads | Lead campaign members | Pipeline potential |
| Number of Contacts | Contact members | Customer engagement |
| Number of Responses | Members who engaged | Campaign effectiveness |
| Number of Opportunities | Opps influenced | Sales impact |
| Amount Won | Revenue attributed | ROI measurement |

### Sync Timing

- **Initial Sync**: All matching contacts/leads added within minutes
- **Ongoing Sync**: New matches added in near real-time
- **Status Updates**: Pushed as engagement happens
- **Full Resync**: Trigger manually if needed

## HubSpot Campaign Sync

### How HubSpot Campaigns Work

HubSpot campaigns track marketing activities and their impact:

1. **Campaign Creation** - Create or link to a HubSpot marketing campaign
2. **Timeline Activities** - Engagement logged on contact timelines
3. **Attribution Tracking** - Revenue credit flows through HubSpot reporting
4. **Unified Analytics** - View Abmatic performance alongside other channels

### Synced Properties

| Abmatic Field | HubSpot Field |
|---------------|---------------|
| Campaign Name | Campaign Name |
| Start Date | Start Date |
| End Date | End Date |
| Budget | Budget |
| Goals | Goals |

### Activity Tracking

HubSpot contact timelines show Abmatic activities:

- **Page Personalization Events** - When a contact sees personalized content
- **Website Visits** - Pages viewed during the campaign
- **Form Submissions** - Conversions tracked by Abmatic
- **Conversion Events** - Goal completions and key actions

## Campaign Member Management

### Automatic Membership

Contacts are automatically added to CRM campaigns based on:

| Trigger | How It Works |
|---------|--------------|
| **Targeting Rules** | Matches your campaign filters (industry, size, etc.) |
| **List Membership** | Part of your target account or contact list |
| **Website Visits** | Visited a page personalized by the campaign |
| **Engagement** | Interacted with campaign content |

### Manual Additions

For targeted outreach, add specific contacts manually:

1. Open your campaign
2. Navigate to **Members**
3. Click **Add Members**
4. Search for contacts or upload a list
5. Assign the appropriate member status

### Member Removal

Members are removed when:

- They no longer match targeting criteria
- Manually removed by a user
- They opt out or unsubscribe
- Their CRM record is deleted

## Attribution and Reporting

### Multi-Touch Attribution

Understand the full customer journey with multiple attribution models:

| Model | How Credit Is Assigned | Best For |
|-------|------------------------|----------|
| **First Touch** | 100% to first campaign interaction | Understanding awareness drivers |
| **Last Touch** | 100% to final campaign before conversion | Identifying closers |
| **Linear** | Equal credit to all campaigns | Balanced view of the journey |
| **Custom** | Weighted by your business logic | Complex buying cycles |

### Pipeline Influence

See exactly how your campaigns impact revenue:

- **Opportunities Touched** - Deals influenced by campaign members
- **Pipeline Value** - Total revenue potential from campaign
- **Deal Velocity** - How fast campaign members move through stages
- **Win Rate Comparison** - Campaign members vs. non-members

### ROI Calculation

Measure return on your campaign investment:

```
ROI = (Revenue Attributed - Campaign Cost) / Campaign Cost × 100
```

Access this data in both Abmatic analytics and your CRM's native reporting.

## Best Practices

### Do's

| Practice | Why It Works |
|----------|--------------|
| Use consistent naming conventions | Makes reporting and filtering easier |
| Define clear status progression | Helps sales understand engagement level |
| Enable real-time sync for active campaigns | Ensures sales has current data |
| Share campaign lists with sales | Enables coordinated outreach |
| Set up alerts for high-intent activities | Faster response = higher conversion |

### Don'ts

| Avoid | Why It Hurts |
|-------|--------------|
| Creating duplicate CRM campaigns | Fragments your data and attribution |
| Ignoring sync errors | Leads to data gaps and missed opportunities |
| Overcomplicating status mappings | Confuses sales and slows adoption |
| Forgetting to clean up old campaigns | Clutters your CRM and skews reports |

### Campaign Naming Convention

Use a consistent format for easy filtering and reporting:

```
[Year]-[Quarter]-[Type]-[Segment]
```

Examples:
- `2024-Q1-ABM-Enterprise-Tech`
- `2024-Q2-Nurture-Mid-Market`
- `2024-Q3-Event-Dreamforce`

### Status Progression

Define clear stages that align with your sales process:

| Stage | Status | Meaning |
|-------|--------|---------|
| 1 | Sent/Targeted | Added to campaign |
| 2 | Responded | First engagement |
| 3 | Engaged | Multiple interactions |
| 4 | Qualified | High intent signals |
| 5 | Converted | Completed goal |

## Use Cases

### ABM Campaign Tracking

Measure account-based marketing effectiveness:

1. Create ABM campaign targeting key accounts
2. Sync to Salesforce/HubSpot campaign
3. Run personalized experiences
4. Track engagement in your CRM
5. Measure pipeline influence by account

**Result**: Full visibility into which accounts are engaging and how they progress through the funnel.

### Event Follow-Up

Coordinate post-event outreach seamlessly:

1. Import event attendees to Abmatic
2. Create a personalized follow-up campaign
3. Sync to your CRM campaign
4. Personalize website for attendees
5. Track meeting bookings and conversions
6. Attribute revenue to the event

**Result**: Sales knows exactly who attended and how they're engaging with follow-up content.

### Lead Nurture

Manage multi-touch nurture programs:

1. Define nurture segments (by stage, interest, etc.)
2. Create campaigns for each segment
3. Sync to CRM for visibility
4. Deliver personalized content journeys
5. Progress leads through qualification stages
6. Report on conversion by nurture track

**Result**: Understand which nurture tracks drive pipeline and optimize accordingly.

## Troubleshooting

### Members Not Syncing

| Issue | Solution |
|-------|----------|
| CRM integration disconnected | Reconnect in Settings > Integrations |
| Contact doesn't exist in CRM | Create the contact first, then resync |
| Email mismatch | Ensure email addresses match between systems |
| Sync errors in logs | Review error details and fix field issues |

### Status Not Updating

| Issue | Solution |
|-------|----------|
| Field mapping incorrect | Review and update mapping configuration |
| CRM field not writable | Check field permissions in your CRM |
| Picklist values don't match | Add matching values to your CRM picklist |
| Workflow conflict | Check for CRM workflows overwriting values |

### Duplicate Members

| Issue | Solution |
|-------|----------|
| Multiple matches | Tighten matching rules (email + company) |
| Duplicate CRM records | Deduplicate contacts in your CRM |
| Multiple syncs | Enable deduplication setting |

### Attribution Discrepancies

| Issue | Solution |
|-------|----------|
| Numbers don't match | Compare date ranges between systems |
| Missing attribution | Check attribution model settings |
| Wrong opportunities | Verify opportunity-contact associations |
| Hierarchy issues | Review parent-child campaign relationships |

## Related Resources

- [Salesforce Integration](/integrations/crm/salesforce) - Connect your Salesforce instance
- [HubSpot Integration](/integrations/crm/hubspot) - Set up HubSpot sync
- [Campaign Analytics](/analytics/campaign-performance) - Deep-dive into performance data
- [Audiences](/audiences/overview) - Build targeted account and contact lists
