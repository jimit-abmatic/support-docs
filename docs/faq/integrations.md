---
id: integrations
title: Integrations FAQ
sidebar_label: Integrations
---

# Integrations FAQ

Get quick answers to common questions about connecting Abmatic AI with your CRM, ad platforms, and other marketing tools. Can't find what you're looking for? [Contact support](mailto:support@abmatic.ai).

:::tip Quick Navigation
Use **Ctrl+F** (Windows) or **Cmd+F** (Mac) to search this page for specific topics.
:::

---

## CRM Integrations

### Which CRMs does Abmatic support?

Abmatic connects with the most popular CRM platforms through native, one-click integrations:

| CRM | Connection Type | What You Get |
|-----|-----------------|--------------|
| **Salesforce** | Native OAuth | Full bi-directional sync, custom objects support |
| **HubSpot** | Native OAuth | Two-way sync with workflows and lists |
| **Pipedrive** | Native OAuth | Deal and contact sync |
| **Outreach** | Native OAuth | Sequence enrollment, activity sync |
| **ActiveCampaign** | Native OAuth | Contact sync, automation triggers |

:::info Unified Data, No Manual Work
Once connected, your CRM stays in sync automatically. No more exporting CSVs or manually updating records.
:::

![Integrations Hub](/img/screenshots/integrations-hub.png)
*Connect all your tools from the central Integrations hub*

### How often does data sync with my CRM?

Choose the sync frequency that matches your workflow:

| Sync Frequency | Best For | Why Choose This |
|----------------|----------|-----------------|
| **Every 15 minutes** | Real-time campaigns, hot leads | Fastest response to buyer signals |
| **Every hour** | Most teams (default) | Balance between freshness and API usage |
| **Every 12 hours** | Large databases (100K+ records) | Avoid API limits, still up-to-date |
| **Manual** | Controlled syncs, testing | Full control over when data flows |

:::tip Match Your Sales Velocity
Running time-sensitive campaigns? Set sync to 15 minutes so sales gets alerts within minutes of key engagement.
:::

### What happens if a sync fails?

Sync issues are handled automatically—you'll rarely need to intervene:

| What Happens | Automatic Recovery | Your Action |
|--------------|-------------------|-------------|
| Temporary network issue | Retries every 5 minutes for 1 hour | None needed |
| Expired OAuth token | Email alert sent | Click **Reconnect** in Integrations |
| API rate limit hit | Waits and retries automatically | Consider reducing sync frequency |
| Missing required field | Error logged with details | Update field mapping |

Check **Integrations > [Your CRM] > Sync Logs** for detailed error information if needed.

### Can I sync custom fields?

Yes! Custom field mapping is one of Abmatic's most powerful features:

| Capability | What You Can Do | Business Value |
|------------|-----------------|----------------|
| **Map up to 30 fields** | Per object type (Account, Contact) | Bring all your important data |
| **Bi-directional sync** | Push Abmatic data to CRM or pull CRM data | Single source of truth |
| **Enrichment fields** | Firmographics, intent signals, engagement scores | Enhance CRM with Abmatic insights |
| **Trigger automation** | CRM workflows based on Abmatic data | Automate follow-up actions |

Go to **Integrations > [Your CRM] > Field Mapping** to configure.

![CRM Sync Settings](/img/screenshots/crm-sync-settings.png)
*Configure exactly which fields sync between Abmatic and your CRM*

### What's the difference between Fill and Overwrite mode?

These modes control how Abmatic handles existing CRM data:

| Mode | Behavior | When to Use |
|------|----------|-------------|
| **Fill** | Only updates empty fields | Preserves manual CRM updates, respects sales notes |
| **Overwrite** | Always replaces with Abmatic data | Ensures freshest data, best for firmographics |

:::info Best Practice
Use **Fill** for fields sales might update (like notes, custom qualifications) and **Overwrite** for enrichment data (company size, industry, revenue) that should always be current.
:::

See [CRM Sync Behavior](/integrations/crm/sync-behavior) for detailed guidance on configuring sync modes.

### Can I sync only specific records?

Yes—you have full control over which records sync:

| Import Method | How It Works | Best For |
|---------------|--------------|----------|
| **Field filters** | Import based on any CRM field value | Focus on specific segments |
| **List views** | Import from saved CRM views | Reuse existing segmentation |
| **Saved reports** | Import from Salesforce reports | Complex criteria |
| **Manual selection** | Pick specific accounts | Small, targeted lists |

This prevents CRM clutter and ensures you're only working with relevant accounts.

---

## Advertising Platform Integrations

### Which ad platforms can I connect?

Abmatic integrates with the major B2B advertising platforms:

| Platform | What You Can Do | Why It Matters |
|----------|-----------------|----------------|
| **LinkedIn Ads** | Push company lists for targeting | Reach decision-makers at target accounts |
| **Google Ads** | Customer Match audience sync | Retarget engaged accounts across Google |

![LinkedIn Ads Integration](/img/screenshots/linkedin-ads-integration.png)
*Connect LinkedIn Ads to target your accounts with precision*

### How do I push audiences to LinkedIn?

Sending account lists to LinkedIn takes just a few clicks:

1. Create or select an account list in Abmatic
2. Go to **Audiences > [Your List] > Actions**
3. Select **Push to LinkedIn**
4. Choose your LinkedIn Ad Account
5. Audiences sync automatically going forward

:::info Automatic Updates
Once connected, your LinkedIn audience updates automatically as accounts move in and out of your Abmatic list. No manual re-uploads needed.
:::

### How often do LinkedIn audiences update?

| Sync Component | Update Frequency | Why |
|----------------|------------------|-----|
| Abmatic → LinkedIn push | Every 24 hours | Automatic, no action needed |
| LinkedIn audience matching | 24-48 hours | LinkedIn's internal processing time |
| **Total time to live ads** | 48-72 hours | Plan campaigns accordingly |

:::tip Campaign Planning
When launching a new LinkedIn campaign, push your audience 2-3 days before you need it live. This ensures full matching before ad start.
:::

### Why is my LinkedIn match rate low?

LinkedIn matches on company name and domain. Here's how to improve match rates:

| Common Issue | Impact on Match Rate | How to Fix |
|--------------|---------------------|------------|
| Company names don't match LinkedIn format | 10-30% loss | Standardize names (e.g., "IBM" not "International Business Machines") |
| Missing domains | 5-15% loss | Ensure all accounts have website domains |
| Companies not on LinkedIn | 5-10% loss | Normal—some companies aren't on LinkedIn |
| Small company size | Variable | LinkedIn better matches larger companies |

:::tip Typical Match Rates
Most B2B target account lists see **50-70% match rates** on LinkedIn. If yours is below 40%, review company name formatting.
:::

### How does Google Customer Match work?

Push contact emails from Abmatic to Google Ads for cross-platform retargeting:

| What Gets Synced | How It Works | Requirements |
|------------------|--------------|--------------|
| Contact email addresses | Hashed and uploaded to Google | Contact Reveal or form-captured emails |
| Company domain contacts | All known contacts at account | Active Google Ads account |
| Engagement-based lists | Contacts showing buying intent | Meet Google's eligibility requirements |

:::info Google Eligibility
Google Customer Match requires your Google Ads account to have good standing, sufficient spend history, and compliance with Google's policies. [Check your eligibility](https://support.google.com/google-ads/answer/6379332) in Google Ads.
:::

![Google Ads Integration](/img/screenshots/google-ads-integration.png)
*Connect Google Ads for Customer Match audience syncing*

---

## Slack Integration

### What Slack notifications can I set up?

Get instant alerts for the engagement signals that matter most:

| Notification Type | What Triggers It | Why You Need It |
|-------------------|-----------------|-----------------|
| **Target account visit** | Any account on your list visits | Know when prospects are active |
| **High-intent behavior** | Multiple pages, pricing/demo views | Prioritize hot accounts |
| **Form submission** | Any tracked form completed | Respond to leads instantly |
| **Campaign goal achieved** | Conversion or engagement milestone | Celebrate wins, optimize further |

![Slack Integration](/img/screenshots/settings-slack.png)
*Configure real-time alerts for your sales team*

### Can I customize which accounts trigger notifications?

Yes! You have full control over notification criteria:

| Customization | How to Set Up | Example Use Case |
|---------------|---------------|------------------|
| **Saved filters** | Apply any filter criteria | "Enterprise accounts in Tech industry" |
| **Account lists** | Notify only for specific lists | "Q1 Target Accounts" |
| **Engagement thresholds** | Minimum page views or time | "Only if 3+ pages viewed" |
| **Channel routing** | Different channels for different triggers | Sales channel for demos, marketing for content |

:::tip Reduce Noise
Start with notifications for your **top 50-100 accounts only**. You can expand once your team has a response workflow in place.
:::

### How do I set up Slack notifications?

1. Go to **Settings > Slack**
2. Click **Connect to Slack**
3. Authorize Abmatic in your workspace
4. Select the channel for notifications
5. Configure which events trigger alerts

---

## Analytics & Tracking Integrations

### Does Abmatic work with Google Analytics?

Yes! Abmatic integrates with Google Analytics to enrich your existing analytics:

| Integration Capability | What It Does | Business Value |
|-----------------------|--------------|----------------|
| **Event forwarding** | Send Abmatic events to GA | See engagement in existing dashboards |
| **Company data layer** | Push identified company info | Segment GA reports by account |
| **Conversion tracking** | Share conversion data | Unified attribution |

See [Google Analytics Integration](/integrations/google-analytics) for setup instructions.

### Can I use Abmatic with Segment?

Yes! Abmatic supports Segment as both a source and destination:

| Direction | What Syncs | Use Case |
|-----------|-----------|----------|
| **Segment → Abmatic** | Events and user traits | Enrich Abmatic with product usage data |
| **Abmatic → Segment** | Company identification, engagement | Push data to all your Segment destinations |

This makes Abmatic part of your broader data infrastructure without custom development.

---

## Troubleshooting Integrations

### "Authorization Failed" error

Your OAuth token has expired. This is normal and happens periodically:

| Step | Action | Why |
|------|--------|-----|
| 1 | Go to **Integrations > [Tool]** | Find the disconnected integration |
| 2 | Click **Reconnect** | Initiates new OAuth flow |
| 3 | Authorize in popup | Grants fresh access token |
| 4 | Verify green status | Confirms successful reconnection |

:::info Dedicated Integration Users
For CRM integrations, consider using a dedicated "integration" user account rather than a personal account. This prevents disconnections when team members leave or change passwords.
:::

### "Rate Limited" error

You're hitting the platform's API limits. Here's how to resolve:

| Solution | How to Implement | Impact |
|----------|-----------------|--------|
| **Reduce sync frequency** | Integrations > Settings > Sync Frequency | Fewer API calls per hour |
| **Limit field count** | Remove non-essential fields from mapping | Smaller data payload |
| **Upgrade API tier** | Contact your CRM vendor | Higher rate limits |
| **Enable incremental sync** | Only sync changed records | Dramatically fewer calls |

### Data isn't syncing

Work through this checklist to diagnose sync issues:

| Check | How to Verify | Fix If Needed |
|-------|---------------|---------------|
| **Integration connected** | Green status badge in Integrations | Click Reconnect |
| **Sync enabled** | Toggle is ON for object type | Enable for Accounts/Contacts |
| **Field mappings exist** | At least one field mapped | Add field mappings |
| **No sync errors** | Check Sync Logs tab | Review and resolve errors |
| **Account meets criteria** | Check import filters | Adjust filter or add account |

:::tip Still Stuck?
Screenshot your Sync Logs error and email **support@abmatic.ai**. Include your account ID from Settings > Account—we'll diagnose within 24 hours.
:::

---

## Related Resources

- [Integrations Overview](/integrations/overview) - All available integrations
- [HubSpot Setup Guide](/integrations/crm/hubspot-setup) - Step-by-step HubSpot connection
- [Salesforce Setup Guide](/integrations/crm/salesforce-setup) - Step-by-step Salesforce connection
- [CRM Sync Behavior](/integrations/crm/sync-behavior) - Fill vs Overwrite explained
- [Troubleshooting CRM Sync](/troubleshooting/crm-sync) - Resolve sync issues
