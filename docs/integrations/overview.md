---
id: overview
title: Integrations Overview
sidebar_label: Overview
sidebar_position: 1
---

# Integrations Overview

Abmatic AI connects with your existing marketing and sales tools to create a unified ABM ecosystem. Sync data, activate audiences, and measure results across all your platforms.

![Integrations Hub](/img/screenshots/integrations-hub.png)

## Available Integrations

### CRM Platforms

| Platform | Features |
|----------|----------|
| **Salesforce** | Two-way sync of accounts, contacts, and opportunities. Campaign attribution tracking. |
| **HubSpot** | Sync companies, contacts, and deals. Custom field mapping. |
| **Pipedrive** | Account and contact synchronization. |
| **ActiveCampaign** | Contact sync and automation triggers. |
| **Outreach** | Sequence integration and activity tracking. |

### Advertising Platforms

| Platform | Features |
|----------|----------|
| **LinkedIn Ads** | DMP segment creation. Account-targeted campaigns. |
| **Google Ads** | Customer Match audiences. Conversion tracking. |

### Communication

| Platform | Features |
|----------|----------|
| **Slack** | Real-time notifications. Account alerts. Campaign updates. |

### Analytics

| Platform | Features |
|----------|----------|
| **Google Analytics** | Custom dimension tracking. Event forwarding. |
| **Segment** | Event streaming. Webhook integration. |

## Connecting an Integration

### Step 1: Navigate to Integrations

1. Click **Integrations** in the left sidebar
2. Browse available integrations
3. Click on the integration you want to connect

### Step 2: Authenticate

Most integrations use OAuth for secure authentication:

1. Click **Connect**
2. You'll be redirected to the platform's login
3. Grant Abmatic access permissions
4. You'll be returned to Abmatic

### Step 3: Configure Settings

After connecting, configure the integration:

- **Sync Direction** - One-way or two-way
- **Sync Frequency** - Real-time, hourly, or daily
- **Field Mapping** - Map Abmatic fields to platform fields
- **Filters** - Limit what data syncs

### Step 4: Initial Sync

For CRM integrations:

1. Review sync settings
2. Click **Start Sync**
3. Monitor sync progress
4. Verify data in both systems

## Integration Status

Each integration displays:

- **Connection Status** - Connected, Disconnected, Error
- **Last Sync** - When data was last synchronized
- **Records Synced** - Number of accounts/contacts synced
- **Sync Health** - Any errors or warnings

## Common Integration Workflows

### CRM → Abmatic
1. CRM account lists → Abmatic audiences
2. CRM custom fields → Audience filters
3. CRM opportunities → Campaign targeting

### Abmatic → CRM
1. Website visitors → CRM leads
2. Engagement scores → CRM fields
3. Campaign attribution → CRM campaigns

### Abmatic → Ad Platforms
1. Target accounts → LinkedIn DMP segments
2. Contact emails → Google Customer Match
3. Engagement signals → Retargeting audiences

### Notifications
1. High-value visitor → Slack alert
2. Campaign conversion → Slack notification
3. Account activity → Team updates

## Troubleshooting

### Connection Failed
- Re-authenticate the integration
- Check that you have admin permissions in the connected platform
- Verify API access is enabled

### Sync Not Working
- Check sync schedule settings
- Review sync logs for errors
- Verify field mappings are correct

### Data Missing
- Confirm filter settings aren't too restrictive
- Check that records exist in the source system
- Verify field mapping includes all required fields

## Next Steps

- [Connect Salesforce](/integrations/crm/salesforce)
- [Connect HubSpot](/integrations/crm/hubspot)
- [Set Up LinkedIn Ads](/integrations/advertising/linkedin-ads)
- [Configure Slack Notifications](/integrations/slack)
