---
id: activecampaign
title: ActiveCampaign Integration
sidebar_label: ActiveCampaign
sidebar_position: 4
---

# ActiveCampaign Integration

Connect Abmatic AI with ActiveCampaign to supercharge your marketing automation with account-based intelligence and real-time visitor data.

## Why Connect ActiveCampaign?

| Without Integration | With Integration |
|---------------------|------------------|
| Manual contact list management | Automatic audience sync keeps lists current |
| Generic email sequences | Trigger automations based on website engagement |
| No visibility into account activity | Real-time visitor data enriches your contacts |
| Separate systems to manage | Unified view of marketing and ABM efforts |

## What You Can Do

| Capability | Business Impact |
|------------|-----------------|
| **Sync contacts bidirectionally** | Keep both systems updated automatically |
| **Map custom fields** | Preserve all your data across platforms |
| **Trigger automations** | Start sequences when visitors engage |
| **Import contact lists** | Build ABM audiences from ActiveCampaign lists |
| **Push enriched contacts** | Send website visitors to nurture campaigns |

## Getting Started

### Prerequisites

Before connecting, ensure you have:

| Requirement | Why It's Needed |
|-------------|-----------------|
| ActiveCampaign account | Access to your marketing automation platform |
| API URL | Your unique ActiveCampaign domain |
| API key | Authentication for secure data sync |
| Admin access in Abmatic | Required to configure integrations |

### Step 1: Find Your API Credentials

1. Log in to your ActiveCampaign account
2. Navigate to **Settings** → **Developer** → **API Access**
3. Or go directly to: `https://YOUR-DOMAIN.activehosted.com/app/settings/developer`
4. Copy your **API URL** (e.g., `https://yourcompany.api-us1.com`)
5. Copy your **API Key**

:::tip Keep Your API Key Secure
Your API key provides full access to your ActiveCampaign account. Never share it publicly or commit it to code repositories.
:::

### Step 2: Connect in Abmatic

1. Navigate to **Integrations** in the left sidebar
2. Find the **ActiveCampaign** card in the CRM section
3. Click **Authorize**
4. Enter your **API URL** in the URL field
5. Enter your **API Key** in the API key field
6. Click **Integrate** to complete the connection

![ActiveCampaign on the Integrations page](/img/screenshots/integrations-hub.png)
*Find ActiveCampaign in the CRM integrations section*

### Step 3: Configure Your Sync Settings

Once connected, click **Settings** on the ActiveCampaign card to configure sync behavior.

## Understanding What Syncs

### Object Mapping

| ActiveCampaign Object | Abmatic Object | Match Key |
|-----------------------|----------------|-----------|
| Contacts | Contacts | Email |
| Accounts (Organizations) | Accounts | Website/Domain |
| Deals | Opportunities | N/A |

### Contact Fields

| ActiveCampaign Field | Abmatic Field | Notes |
|---------------------|---------------|-------|
| Email | Work Email | Primary key for matching |
| First Name | First Name | |
| Last Name | Last Name | |
| Phone | Phone | |
| Account | Company Name | Via organization link |
| Custom Fields | Custom Fields | Map in settings |

### Account Fields

| ActiveCampaign Field | Abmatic Field | Notes |
|---------------------|---------------|-------|
| Account Name | Company Name | |
| Website | Website | Primary key for matching |
| Phone | Phone | |
| Custom Fields | Custom Fields | Map in settings |

## Configuring Sync Settings

### Sync Direction Options

Configure how data flows between systems:

| Direction | What It Does | Best For |
|-----------|--------------|----------|
| **Don't sync** | No automatic data transfer | Fields you manage separately |
| **Fill** | Only sync if destination is empty | Enriching without overwriting |
| **Overwrite** | Always sync latest value | Keeping data in sync |

### Available Tabs

| Tab | What You Configure |
|-----|-------------------|
| **Accounts** | Organization sync settings and field mapping |
| **Contacts** | Contact sync settings and field mapping |
| **Opportunities** | Deal sync settings (read from ActiveCampaign) |
| **Activity Log** | View sync history and troubleshoot issues |

### Sync Operations

For each object type, choose whether to:

| Operation | Abmatic → ActiveCampaign | ActiveCampaign → Abmatic |
|-----------|-------------------------|-------------------------|
| **Create** | Create new records in AC | Create new records in Abmatic |
| **Update** | Update existing AC records | Update existing Abmatic records |

### Sync Frequency

| Option | How It Works | Best For |
|--------|--------------|----------|
| **Manual** | Only syncs when you trigger it | Full control, low API usage |
| **Automatic** | Syncs at set intervals | Keeping data fresh automatically |

**Recommended frequencies:**

| Database Size | Suggested Frequency | API Impact |
|---------------|---------------------|------------|
| < 10,000 contacts | Every 2-4 hours | Low |
| 10,000-50,000 contacts | Every 6-12 hours | Medium |
| > 50,000 contacts | Every 24 hours | Managed |

### Auto-Push Settings

Enable automatic pushing to send new Abmatic contacts to ActiveCampaign:

1. In sync settings, find the **Pushing** section
2. Check **Automatically push changes to ActiveCampaign**
3. Save your settings

This ensures revealed website visitors automatically enter your ActiveCampaign workflows.

## Importing from ActiveCampaign

### Import Sources

| Source | What Gets Imported |
|--------|-------------------|
| All Contacts | Your complete contact database |
| Lists | Specific ActiveCampaign lists |
| Tags | Contacts with specific tags |
| Segments | Dynamic segments you've created |

### How to Import

1. Go to **Audiences** → **Contacts** or **Accounts**
2. Click **Create New**
3. Select **Import from CRM**
4. Choose **ActiveCampaign**
5. Select a list, tag, or segment to import
6. Review the import preview
7. Click **Import** to start

:::tip Start with Key Lists
Import your most engaged lists first to immediately start personalizing their website experience.
:::

## Pushing to ActiveCampaign

### Manual Push

Push selected contacts or accounts:

1. Select records in Abmatic
2. Click **Push to CRM**
3. Select **ActiveCampaign**
4. Choose a list or leave blank for default
5. Confirm the push

### Automatic Push

With auto-push enabled, these records automatically sync:

| Record Type | When It Pushes |
|-------------|----------------|
| Revealed contacts | When identified on your website |
| Enriched contacts | After data enrichment completes |
| Updated contacts | When engagement scores change |

### Required Fields for Pushing

| Object | Required Field |
|--------|---------------|
| Contacts | Email address |
| Accounts | Website domain |

## Sync Logs and Monitoring

### Viewing Activity

1. Go to **Integrations** → **ActiveCampaign** → **Settings**
2. Click the **Activity Log** tab
3. Review recent sync operations

### Log Information

| Field | Description |
|-------|-------------|
| Timestamp | When the sync occurred |
| Type | Success, warning, or error |
| Message | Details about what happened |

### Common Status Messages

| Status | Meaning |
|--------|---------|
| `Synced successfully` | Records transferred without issues |
| `Created new record` | New contact/account added |
| `Updated record` | Existing record modified |
| `Error: duplicate` | Record already exists (check matching) |

## Best Practices

### Initial Setup

| Do | Don't |
|----|-------|
| Start with a test sync of limited records | Sync your entire database at once |
| Map essential fields first | Try to map every field immediately |
| Verify field types match | Assume data types are compatible |
| Set up duplicate handling | Skip duplicate configuration |

### Ongoing Management

| Best Practice | Why It Matters |
|---------------|----------------|
| Review sync logs weekly | Catch issues before they compound |
| Clean up bounced emails | Maintain list health in both systems |
| Update field mappings as needed | Keep data flowing correctly |
| Monitor API usage | Avoid hitting rate limits |

### Data Quality Tips

| Tip | Benefit |
|-----|---------|
| Standardize email formats | Better matching between systems |
| Keep company domains consistent | Accurate account association |
| Use tags for sync status | Track what's been processed |
| Regular deduplication | Cleaner data in both systems |

## Use Cases

### 1. Website Visitor Nurturing

**Goal:** Automatically nurture website visitors through ActiveCampaign

**Workflow:**
1. Abmatic identifies visitors on your website
2. Contact Reveal finds business emails
3. Auto-push sends contacts to ActiveCampaign
4. ActiveCampaign triggers a welcome/nurture sequence

**Setup:**
- Enable auto-push to ActiveCampaign
- Create an automation triggered on new contact creation
- Design nurture content based on visitor behavior

### 2. ABM List Activation

**Goal:** Use ActiveCampaign lists for website personalization

**Workflow:**
1. Import target account lists from ActiveCampaign
2. Create personalized website experiences for these accounts
3. Track engagement and sync back to ActiveCampaign
4. Trigger sales alerts when accounts engage

**Setup:**
- Import lists from ActiveCampaign
- Create website personalization campaigns targeting those lists
- Enable bidirectional sync for engagement data

### 3. Event Follow-Up

**Goal:** Personalize website for event attendees

**Workflow:**
1. Import event registrant list from ActiveCampaign
2. Create personalized landing pages for attendees
3. Track post-event engagement
4. Sync engagement data back for follow-up sequences

**Setup:**
- Import event list before the event
- Create event-specific website personalization
- Configure contact sync to capture engagement

## Troubleshooting

### Connection Issues

| Problem | Possible Cause | Solution |
|---------|----------------|----------|
| "Invalid API key" error | Incorrect credentials | Verify API key from ActiveCampaign settings |
| "Connection failed" | API URL incorrect | Check URL format (include https://) |
| Timeout errors | Network issues | Retry connection, check firewall settings |

### Sync Issues

| Problem | Possible Cause | Solution |
|---------|----------------|----------|
| Contacts not syncing | Sync direction not set | Check sync direction settings |
| Duplicate contacts | Different email formats | Standardize email addresses |
| Fields not mapping | Field type mismatch | Verify field types match |
| Slow sync | Large data volume | Reduce sync frequency, sync in batches |

### Data Quality Issues

| Problem | Possible Cause | Solution |
|---------|----------------|----------|
| Missing data | Field not mapped | Add field mapping in settings |
| Incorrect data | Overwrite mode on | Switch to Fill mode for sensitive fields |
| Bounce increases | Outdated emails synced | Validate emails before sync |

## Related Documentation

| Topic | Description |
|-------|-------------|
| [Integrations Overview](/integrations/overview) | All available integrations |
| [CRM Sync Behavior](/integrations/crm/sync-behavior) | How sync works across CRMs |
| [Audiences Overview](/audiences/overview) | Managing your account and contact lists |
| [Contact Reveal](/visitor-tracking/contact-reveal) | Finding visitor contact information |
| [Email Campaigns](/campaigns/email-campaigns) | Creating outbound sequences |
