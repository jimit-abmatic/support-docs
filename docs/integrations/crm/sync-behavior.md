---
id: sync-behavior
title: "CRM Sync Behavior: Fill vs Overwrite"
sidebar_label: Fill vs Overwrite
sidebar_position: 5
---

# CRM Sync Behavior: Fill vs Overwrite

Keep your CRM and Abmatic AI data in perfect harmony with intelligent sync settings that protect your existing data while enriching empty fields.

## Why Understanding Sync Behavior Matters

| Without Proper Configuration | With Smart Sync Settings |
|------------------------------|--------------------------|
| Sales rep corrections get overwritten | Manual edits are preserved |
| Data conflicts cause confusion | Clear source of truth for each field |
| Enrichment data goes stale | Fresh data flows automatically |
| Manual data cleanup required | Set it once, runs automatically |

## The Core Question

> "If I have data in Salesforce and data in Abmatic, what happens when they conflict?"

This is the most common question from RevOps teams. The answer depends on your **sync mode setting** for each field—giving you complete control over data precedence.

## Sync Modes Explained

Abmatic offers three sync modes for each field, letting you control exactly how data flows:

| Mode | What It Does | Best For |
|------|--------------|----------|
| **Don't Sync** | Field is not synced | Protected fields, manual-only data |
| **Fill** | Only fills empty fields | CRM is source of truth |
| **Overwrite** | Always replaces with Abmatic data | Abmatic owns the data |

### Fill Mode (Recommended Default)

**Fill mode** only updates empty fields. Your existing CRM data is never overwritten.

| Scenario | CRM Value | Abmatic Value | Result |
|----------|-----------|---------------|--------|
| Both have data | "Technology" | "Software" | "Technology" (unchanged) |
| CRM empty, Abmatic has data | (empty) | "Software" | "Software" (filled) |
| CRM has data, Abmatic empty | "Technology" | (empty) | "Technology" (unchanged) |

**When to use Fill mode:**
- Your CRM is the system of record
- You want to enrich empty fields without touching existing data
- You don't want to risk overwriting sales rep notes or manual edits
- You're unsure which system should take precedence

### Overwrite Mode

**Overwrite mode** always updates fields with Abmatic data, replacing existing values.

| Scenario | CRM Value | Abmatic Value | Result |
|----------|-----------|---------------|--------|
| Both have data | "Technology" | "Software" | "Software" (overwritten) |
| CRM empty, Abmatic has data | (empty) | "Software" | "Software" |
| CRM has data, Abmatic empty | "Technology" | (empty) | (empty) (cleared!) |

**When to use Overwrite mode:**
- Abmatic is your source of truth for specific fields (like enrichment data)
- You have automated data pipelines that should take precedence
- You're doing bulk data cleanup or standardization
- You need always-fresh firmographic data

:::warning Be Careful with Overwrite
Overwrite mode can clear existing data if the Abmatic field is empty. Only enable this for fields where Abmatic should always win.
:::

## Configuring Sync Behavior

### Accessing Sync Settings

1. Go to **Settings** > **Integrations**
2. Click **Settings** on your connected CRM (Salesforce, HubSpot, Pipedrive, or ActiveCampaign)
3. Select the object tab (Accounts, Contacts, Leads, Opportunities)
4. Configure field-level sync modes in the mapping table

### Per-Field Configuration

Each mapped field has its own sync settings:

| Column | Description |
|--------|-------------|
| **CRM Field** | The field in your CRM to map |
| **Sync to CRM** | Choose Don't sync, Fill, or Overwrite |
| **Sync Direction** | Visual indicator of data flow |
| **Sync to Abmatic** | Checkbox to sync CRM data into Abmatic |
| **Abmatic Field** | The corresponding Abmatic field |

### Recommended Settings by Field Type

| Field Type | Recommended Mode | Reason |
|------------|------------------|--------|
| Industry | Fill | Preserve sales rep corrections |
| Employee Count | Overwrite | Abmatic has fresher enrichment data |
| Website/Domain | Fill | Often set correctly in CRM already |
| Revenue | Fill | Finance may have accurate data |
| LinkedIn URL | Overwrite | Abmatic enrichment is current |
| Lead Score | Overwrite | Calculated by Abmatic |
| Custom enrichment fields | Overwrite | Abmatic owns these fields |
| Account Owner | Fill | CRM assignment rules apply |
| Notes/Description | Don't Sync | Protect manual entries |

## Sync Direction + Behavior Matrix

The sync direction and fill/overwrite setting combine to determine behavior:

| Direction | Mode | What Happens |
|-----------|------|--------------|
| CRM → Abmatic | Fill | CRM data fills empty Abmatic fields |
| CRM → Abmatic | Overwrite | CRM data always wins |
| Abmatic → CRM | Fill | Abmatic fills empty CRM fields |
| Abmatic → CRM | Overwrite | Abmatic data always wins |
| Two-way | Fill | Most recent non-empty value wins |
| Two-way | Overwrite | Most recent timestamp wins |

## Two-Way Sync Conflict Resolution

When two-way sync is enabled and both systems have data:

1. **Timestamp comparison** - The more recently modified record wins
2. **Per-field granularity** - Each field is evaluated independently
3. **Audit trail** - All changes are logged in Activity Log

### Example Two-Way Scenario

```
Monday 9:00 AM - Sales rep updates Industry to "Fintech" in Salesforce
Monday 2:00 PM - Abmatic identifies company as "Financial Services"

Result: Salesforce keeps "Fintech" (more recent human edit)
```

## Object-Level Sync Settings

Beyond field-level settings, you can control sync at the object level:

### Sync Direction Options

| Setting | Description |
|---------|-------------|
| **Create (to CRM)** | Abmatic can create new records in CRM |
| **Update (to CRM)** | Abmatic can update existing CRM records |
| **Create (to Abmatic)** | CRM can create new records in Abmatic |
| **Update (to Abmatic)** | CRM can update existing Abmatic records |

### Sync Frequency

| Mode | Description | Best For |
|------|-------------|----------|
| **Manual Only** | Sync only when you click "Sync Now" | Testing, controlled updates |
| **Automatic** | Sync on a schedule (1-24+ hours) | Production use |

### Auto-Push Setting

Enable **Automatically push changes to [CRM]** to have Abmatic push updates immediately when:
- New accounts/contacts are created in Abmatic
- Existing records are updated
- Revealed companies or contacts are enriched

## Best Practices for RevOps

### 1. Start Conservative

Begin with **Fill mode** for all fields. You can always switch to Overwrite later, but you can't easily undo overwritten data.

### 2. Document Your Source of Truth

Create a simple reference table for your team:

| Field | Source of Truth | Sync Mode | Notes |
|-------|-----------------|-----------|-------|
| Industry | Salesforce | Fill | Sales reps correct classifications |
| Employee Count | Abmatic | Overwrite | Enrichment is authoritative |
| Lead Score | Abmatic | Overwrite | Calculated field |
| Account Owner | Salesforce | Fill | Assignment rules apply |
| LinkedIn URL | Abmatic | Overwrite | Always current |

### 3. Test Before Full Sync

1. Create a test account in your CRM
2. Set up field mapping with your desired modes
3. Run a manual sync for just that account
4. Verify the behavior matches expectations
5. Roll out to production

### 4. Monitor Sync Logs

Check **Settings** > **Integrations** > **Activity Log** regularly for:
- Unexpected overwrites
- Failed updates
- Field mapping errors
- Sync conflicts

## Common Scenarios and Solutions

### Scenario 1: Sales Rep Corrections

**Problem:** Sales reps manually correct industry data, but Abmatic keeps changing it back.

**Solution:** Set the Industry field to **Fill mode** so Abmatic only fills empty values.

### Scenario 2: Stale Enrichment Data

**Problem:** Abmatic has fresher employee count data than your CRM.

**Solution:** Set Employee Count to **Overwrite mode** for Abmatic → CRM direction.

### Scenario 3: Protecting Manual Notes

**Problem:** You added a custom "Notes" field and don't want it touched.

**Solution:** Set the field to **Don't sync** or simply don't map that field. Unmapped fields are never synced.

### Scenario 4: New Enrichment Field

**Problem:** You want Abmatic to own a new enrichment field entirely.

**Solution:** Create the field in your CRM, map it in Abmatic, and set to **Overwrite** mode.

## Frequently Asked Questions

### Can I have different settings per direction?

Yes! You can set Fill mode for CRM → Abmatic and Overwrite for Abmatic → CRM on the same field. This is useful when you want to:
- Accept all CRM data into Abmatic
- But only fill empty CRM fields from Abmatic

### What if I accidentally overwrote important data?

Check the **Activity Log** for the specific record's sync history. If within 30 days, contact [support@abmatic.ai](mailto:support@abmatic.ai) for potential recovery from backups.

### Does Fill mode work with picklists?

Yes, but ensure the Abmatic value matches a valid picklist option in your CRM, or the sync will fail. Check Activity Log for mapping errors.

### How do I completely prevent a field from syncing?

Remove the field from your field mapping entirely, or set both directions to "Don't sync." Unmapped fields are never touched by sync.

### What fields are required for sync?

- **Accounts:** Website/Domain must be mapped (used as the matching key)
- **Contacts/Leads:** Work Email must be mapped (used as the matching key)
- **Salesforce:** CRM primary key fields must be mapped when creating records

### How often does automatic sync run?

You configure the frequency (in hours) when you enable automatic sync. Most teams use:
- **Every 1 hour** for high-velocity sales teams
- **Every 4-6 hours** for standard operations
- **Every 24 hours** for lower-volume environments

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Data not syncing | Sync mode set to "Don't sync" | Change mode to Fill or Overwrite |
| Wrong data appearing | Overwrite mode enabled | Change to Fill mode |
| Sync fails silently | Invalid picklist values | Check Activity Log for errors |
| Duplicate records | Missing matching key | Ensure Website or Email is mapped |

## Related Documentation

- [Salesforce Integration](/integrations/crm/salesforce)
- [HubSpot Integration](/integrations/crm/hubspot)
- [Pipedrive Integration](/integrations/crm/pipedrive)
- [ActiveCampaign Integration](/integrations/crm/activecampaign)
- [CRM Sync Overview](/audiences/crm-sync)
