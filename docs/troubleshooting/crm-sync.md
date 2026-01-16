---
id: crm-sync
title: CRM Sync Troubleshooting
sidebar_label: CRM Sync Issues
sidebar_position: 3
---

# CRM Sync Troubleshooting

Keep your sales and marketing data flowing smoothly. This guide helps you quickly diagnose and resolve sync issues with Salesforce, HubSpot, Pipedrive, and other CRM integrations.

:::tip Quick Fix: 80% of Sync Issues
Most CRM sync problems are solved by **reconnecting your CRM**. If you're seeing errors, try [reconnecting first](#reconnecting-your-crm)—it takes 30 seconds and preserves all your settings.
:::

![CRM Integration Status](/img/screenshots/integrations-crm-status.png)

## Quick Diagnostic

Find your symptom below and jump directly to the solution:

| Symptom | Likely Cause | Quick Fix | Time to Fix |
|---------|--------------|-----------|-------------|
| "Invalid Grant" error | OAuth token expired | [Reconnect CRM](#reconnecting-your-crm) | 1 minute |
| "Insufficient Privileges" | Missing permissions | [Check permissions](#insufficient-privileges-errors) | 5 minutes |
| Records not syncing | Filter too restrictive | [Review sync settings](#records-not-syncing) | 2-10 minutes |
| Duplicate records | Matching rules misconfigured | [Configure matching](#duplicate-records) | 5 minutes |
| Sync running slowly | Large database or API limits | [Optimize sync](#slow-sync-performance) | Varies |

---

## Salesforce Issues

### "Invalid Grant" Error

**What it means:** Your OAuth connection token has expired or been revoked—this is one of the most common issues and is easily fixed.

**Why this happens:**

| Cause | How to Prevent |
|-------|----------------|
| User changed their Salesforce password | Use a dedicated integration user |
| Salesforce admin revoked the connected app | Coordinate with your admin on connected apps |
| Token exceeded Salesforce's expiration policy | Reconnect periodically if using strict security policies |
| User account was deactivated | Use a service account that doesn't belong to an individual |

**Solution:**

1. Go to **Integrations** in Abmatic
2. Find Salesforce and click **Disconnect**
3. Click **Connect** to re-authorize
4. Log in with a user who has API access and appropriate permissions

:::tip Best Practice: Use a Dedicated Integration User
Create a dedicated "Abmatic Integration" user in Salesforce instead of using a personal account. Benefits:
- **No disruption** when employees change passwords or leave
- **Clear audit trail** of integration activities
- **Granular permissions** tailored for integration needs
- **Easier troubleshooting** with isolated logs
:::

### Insufficient Privileges Errors

**What it means:** The connected Salesforce user doesn't have the required permissions to read or write the data Abmatic needs.

**Required Salesforce Permissions:**

| Permission | What It Allows | Required? |
|------------|----------------|-----------|
| API Enabled | Access Salesforce via API | **Yes** (always) |
| View All Data | Read all records | Yes for full sync |
| Modify All Data | Create/update records | Yes for two-way sync |
| Object-level CRUD | Access specific objects | Alternative to "All Data" |

**Solution:**

1. In Salesforce Setup, go to **Users** > select your integration user
2. Click **Profile** to view permission settings
3. Ensure **API Enabled** is checked (most common issue)
4. Verify access to required objects: Accounts, Contacts, Leads, Opportunities
5. For custom objects, add explicit CRUD permissions
6. Save changes and [reconnect](#reconnecting-your-crm) in Abmatic

### Salesforce API Limits

**Symptoms:**
- Sync stops partway through
- "API_LIMIT_EXCEEDED" errors in sync logs
- Intermittent sync failures during business hours

**Understanding Salesforce API Limits:**

| Salesforce Edition | Daily API Calls | Best For |
|-------------------|-----------------|----------|
| Professional | 15,000 + (users × 1,000) | Small teams |
| Enterprise | 15,000 + (users × 1,000) | Mid-market |
| Unlimited | 15,000 + (users × 5,000) | Large organizations |

**How to check your API usage:**

1. In Salesforce Setup, go to **System Overview**
2. View "API Requests, Last 24 Hours"
3. If you're consistently at 80%+, you may need to optimize

**Solutions:**

| Approach | Impact | Implementation |
|----------|--------|----------------|
| Reduce sync frequency | Low | Change from real-time to hourly in Abmatic settings |
| Limit synced objects | Medium | Sync only Accounts and Contacts, skip Activities |
| Schedule off-peak syncs | Medium | Run large syncs outside business hours |
| Request API limit increase | High | Contact Salesforce to purchase additional API calls |

---

## HubSpot Issues

### "You Do Not Have Permissions" Error

**What it means:** The HubSpot user or OAuth connection lacks required scopes to access CRM data.

**Required HubSpot Scopes:**

| Scope | Purpose |
|-------|---------|
| `crm.objects.contacts.read` | Read contact data |
| `crm.objects.contacts.write` | Create/update contacts |
| `crm.objects.companies.read` | Read company data |
| `crm.objects.companies.write` | Create/update companies |
| `crm.objects.deals.read` | Read deal data (optional) |

**Solution:**

1. Go to **Integrations** in Abmatic
2. Click **Disconnect** on HubSpot
3. Click **Connect** and log in with a **Super Admin** user
4. **Grant all requested permissions** during the OAuth flow—don't skip any
5. Verify connection shows "Connected" status

:::info Why Super Admin?
HubSpot's OAuth inherits permissions from the connecting user. A Super Admin ensures all scopes are available. You can later manage access with HubSpot's Connected Apps settings.
:::

### HubSpot Rate Limits

**Symptoms:**
- Sync significantly slows down
- "429 Too Many Requests" errors in logs
- Some records sync while others are skipped

**HubSpot Rate Limits:**

| Limit Type | Threshold | What Happens |
|------------|-----------|--------------|
| Burst limit | 100 requests per 10 seconds | Requests queued |
| Daily limit | 250,000 requests per day | Sync paused until reset |
| Secondly limit | 10 requests per second (some endpoints) | Automatic retry |

**Solutions:**

1. **Reduce sync frequency** - Switch from real-time to every 15 or 60 minutes
2. **Prioritize objects** - Sync Companies and Contacts only; add Deals later
3. **Check other integrations** - Other HubSpot apps may be consuming your limit
4. **Upgrade HubSpot plan** - Higher tiers get increased API limits

---

## Records Not Syncing

### No Records Importing at All

**Quick Checklist:**

| Check | Where to Verify | Common Fix |
|-------|-----------------|------------|
| CRM connected? | Integrations page shows "Connected" | Reconnect CRM |
| Objects selected? | Integrations > Sync Settings | Enable desired objects |
| First sync complete? | Check "Last Synced" timestamp | Wait for initial sync |
| Records exist? | Verify data in CRM | Add records to CRM first |

**How to Diagnose:**

1. Go to **Integrations** > your CRM > **Sync Logs**
2. Check the "Last Synced" timestamp—if it's old, the sync may be stuck
3. Look for error messages (red text or warning icons)
4. Verify sync status shows "Active" not "Paused"

### Specific Records Are Missing

If most records sync but some are missing:

**Common causes and solutions:**

| Issue | How to Check | Fix |
|-------|--------------|-----|
| Required field empty | View record in CRM | Populate required fields (e.g., email, company name) |
| Filtered by sync rules | Check filter criteria | Adjust sync filters to include record |
| User lacks access | Verify sharing settings | Share record with integration user |
| Record type excluded | Check object settings | Add the record type to sync |
| Recently created | Check creation date | Wait for next sync cycle |

### One-Way Sync Issues

**CRM to Abmatic Not Working:**

| Symptom | Cause | Solution |
|---------|-------|----------|
| New CRM records not appearing | Import disabled | Enable "Import from CRM" in sync settings |
| Field values not updating | Field mapping missing | Add mapping for the field |
| Changes not reflected | Sync not triggered | Trigger manual sync or wait for schedule |

**Abmatic to CRM Not Working:**

| Symptom | Cause | Solution |
|---------|-------|----------|
| Records not created in CRM | Export disabled | Enable "Export to CRM" in sync settings |
| Updates not saving | Write permission missing | Verify CRM user has Modify/Write access |
| Validation errors | Required fields missing | Map all required CRM fields |

---

## Duplicate Records

### Why Duplicates Happen

Duplicates occur when Abmatic can't match incoming data to existing records. This typically means:

- **No unique identifier** is mapped (like website domain or email)
- **Data inconsistency** between systems (e.g., "IBM" vs "IBM Corporation")
- **Multiple sync sources** creating the same record

### Preventing Duplicates

**1. Configure Strong Matching Rules**

In **Integrations** > **Sync Settings** > **Matching Rules**, set primary and secondary match fields:

| Object | Primary Match | Secondary Match | Why These Fields |
|--------|--------------|-----------------|------------------|
| Accounts/Companies | Website domain | Company name | Domain is unique; name catches variations |
| Contacts | Email address | Full name + company | Email is most reliable identifier |
| Leads | Email address | Phone number | Covers both B2B and B2C scenarios |

**2. Use Smart Sync Behavior**

| Field Behavior | Use When | Example |
|----------------|----------|---------|
| **Fill** | For identifiers | Only populate empty email fields |
| **Overwrite** | For updateable data | Always update job title from CRM |
| **Ignore** | For system fields | Never overwrite CRM record owner |

**3. Clean Data Before Initial Sync**

Before your first sync, deduplicate your CRM data:
- Run duplicate reports in your CRM
- Merge obvious duplicates
- Standardize company names and domains

:::tip Duplicate Recovery
If duplicates have already been created, use your CRM's merge functionality to combine them. Abmatic will respect the merged record going forward.
:::

---

## Slow Sync Performance

### Initial Sync Time Expectations

Your first sync imports your entire CRM database—here's what to expect:

| CRM Record Count | Expected Initial Sync Time | Tip |
|------------------|---------------------------|-----|
| Under 1,000 | 5-15 minutes | Standard sync works great |
| 1,000-10,000 | 30-60 minutes | Schedule during low-activity time |
| 10,000-50,000 | 2-4 hours | Start with priority objects only |
| 50,000-100,000 | 4-8 hours | Consider overnight sync |
| 100,000+ | 8-24 hours | Contact support for optimized setup |

**Speed up initial sync:**
1. Start with essential objects only (Accounts, Contacts)
2. Add secondary objects after initial sync completes
3. Temporarily reduce field mappings to essentials
4. Schedule sync during off-peak hours

### Ongoing Sync Is Slow

If regular syncs are taking too long:

**Optimization Checklist:**

| Check | Ideal State | How to Optimize |
|-------|-------------|-----------------|
| Sync frequency | Every 15-60 min for most teams | Reduce from real-time if not needed |
| Objects syncing | 2-4 essential objects | Remove low-value objects |
| Field mappings | 10-20 key fields | Remove unused mappings |
| Sync type | Incremental (changed only) | Avoid full sync unless necessary |

---

## Field Mapping Issues

### Common Mapping Problems

| Problem | What You See | Cause | Solution |
|---------|--------------|-------|----------|
| Empty fields | Blank values in Abmatic | Wrong source field selected | Verify exact field name in CRM |
| Truncated data | Text cut off | Field length mismatch | Use a longer text field or shorten source |
| Wrong format | Dates or numbers display incorrectly | Data type mismatch | Match types (text→text, date→date) |
| Null errors | Sync fails for specific records | Required field is empty in source | Add validation or default values |

### Setting Up Field Mappings

1. Go to **Integrations** > your CRM > **Field Mapping**
2. Click **Add Field Mapping**
3. Select:
   - **Source field** (from your CRM)
   - **Destination field** (in Abmatic)
   - **Sync direction** (CRM→Abmatic, Abmatic→CRM, or both)
   - **Behavior** (Fill, Overwrite, or Ignore)
4. Save and trigger a test sync

:::tip Testing Field Mappings
After adding a new mapping, sync a single test record first. Verify the data appears correctly before running a full sync.
:::

---

## Reconnecting Your CRM

When in doubt, reconnecting often resolves issues. Here's how to do it safely:

**Step-by-step:**

1. Go to **Integrations**
2. Click **Disconnect** on your CRM
3. **Wait 30 seconds** (this clears cached tokens)
4. Click **Connect** and complete the OAuth flow
5. Review sync settings (they're preserved automatically)
6. Click **Sync Now** to verify everything works

:::warning Your Data Is Safe
Disconnecting does **not** delete any data. All previously synced records remain in both systems. Only the connection token is removed.
:::

---

## Viewing Sync Logs

Sync logs are your best diagnostic tool for understanding what's happening:

**How to access:**

1. Go to **Integrations** > click your CRM card
2. Click **Sync Logs** or **View History**
3. Filter by date range or status (Success, Error, Warning)

**What to look for:**

| Log Entry | What It Means | Action |
|-----------|---------------|--------|
| Green/Success | Record synced correctly | No action needed |
| Yellow/Warning | Synced with issues | Review field mapping |
| Red/Error | Sync failed | Check error message for cause |
| "Skipped" | Record excluded by filter | Verify sync criteria if unexpected |

---

## Getting Help

If you've tried the solutions above and still have issues:

**Email support@abmatic.ai with:**
1. Which CRM you're using (Salesforce, HubSpot, etc.)
2. Screenshot of the error or sync logs
3. What you've already tried from this guide
4. Your current sync settings configuration

**Response times:**
- Critical issues (no sync at all): Same business day
- Standard issues: Within 24 hours
- Configuration questions: Within 48 hours

:::tip Before Contacting Support
Take a screenshot of your **Integrations** page showing the connection status and any error messages—this speeds up troubleshooting significantly.
:::
