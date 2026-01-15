---
id: target-groups
title: Target Groups
sidebar_label: Target Groups
sidebar_position: 4
---

# Target Groups

**Stop guessing who to target. Start knowing.** Target Groups (Collections) let you organize your accounts and contacts into laser-focused segments that power every campaign, from website personalization to ad retargeting to CRM sync.

![Target Groups - Collections View](/img/screenshots/groups-list.png)

## Why Target Groups Matter

| Before Target Groups | With Target Groups |
|---------------------|-------------------|
| Broad campaigns targeting everyone | Precision targeting for each segment |
| Manual list management in spreadsheets | Dynamic lists that update automatically |
| Disconnected data across platforms | Unified audiences synced everywhere |
| Hours building campaign audiences | Reusable groups ready in seconds |

## Understanding Target Groups

Target Groups serve as containers for your audiences. Once created, they power everything—website personalization, ad campaigns, email sequences, and CRM sync.

| Group Type | Best For | Example |
|------------|----------|---------|
| **Dynamic** | Audiences that change based on criteria | "All accounts in Software industry with 50+ employees" |
| **Static** | Fixed lists you manually curate | "Q1 ABM Target List" hand-picked by sales |
| **CSV Import** | Existing lists from spreadsheets | Event attendees, purchased lists |
| **CRM Sync** | Lists from Salesforce, HubSpot, Pipedrive | Synced opportunities, campaign members |
| **Auto Generated** | System-created for special purposes | Company Reveal identified accounts |

## Creating Target Groups

### Step 1: Choose Your Approach

Navigate to **Audiences > Accounts** (or **Contacts**) and click **+ Account List** to see your options:

![Create Target Group Modal](/img/screenshots/account-create-modal.png)

| Option | When to Use |
|--------|-------------|
| **Upload from CSV** | You have a spreadsheet with accounts or contacts |
| **Import from CRM** | Pull lists directly from Salesforce, HubSpot, or Pipedrive |
| **Static Collection** | Manually curate a fixed list |
| **Dynamic Collection** | Build an auto-updating list based on filter criteria |

### Step 2: Define Your Audience

**For Dynamic Collections (Recommended for ongoing campaigns):**

1. Click **Dynamic Collection**
2. Select field to filter on (Industry, Employee Count, Country, etc.)
3. Choose operator (is, contains, isAbove, etc.)
4. Enter your filter value(s)
5. Add more conditions with **AND** / **OR** logic
6. Click **Preview** to see sample matches
7. Name your collection and save

**For CSV Imports:**

1. Click **Upload from CSV**
2. Drag or select your file
3. Map columns to Abmatic fields
4. Choose duplicate handling (Overwrite All, Skip, or Overwrite Missing)
5. Click **Import**

**For CRM Imports:**

1. Click **Import from CRM**
2. Select your connected CRM
3. Build filters using CRM fields
4. Preview matching records
5. Import to Abmatic

### Step 3: Name and Activate

Give your group a descriptive name that includes:
- **Purpose**: What campaign or program it's for
- **Criteria**: Key characteristics of the audience
- **Date** (optional): When created or expires

**Good Examples:**
- `2025-Q1-ABM-Enterprise-Tech`
- `Inbound-Mid-Market-USA`
- `Event-Attendees-SaaStr-2025`

## Filter Operators Reference

Build precise audiences with these filter conditions:

### Text Filters

| Operator | Use When | Example |
|----------|----------|---------|
| **is** | Exact match needed | Industry is "Software" |
| **isNot** | Exclude specific values | Country isNot "Canada" |
| **contains** | Partial match | Name contains "Tech" |
| **doesNotContain** | Exclude partial matches | Email doesNotContain "gmail" |
| **beginsWith** | Starts with pattern | Website beginsWith "www" |
| **endsWith** | Ends with pattern | Domain endsWith ".io" |

### Numeric Filters

| Operator | Use When | Example |
|----------|----------|---------|
| **isAbove** | Greater than threshold | Employees isAbove 100 |
| **isBelow** | Less than threshold | Revenue isBelow 1M |
| **isBetween** | Within a range | Founded isBetween 2015, 2023 |

### List Filters

| Operator | Use When | Example |
|----------|----------|---------|
| **isAny** | Match any in list | Industry isAny ["Software", "SaaS", "Tech"] |
| **isNone** | Exclude all in list | State isNone ["CA", "NY", "TX"] |
| **isAll** | Must have all tags | Tags isAll ["ICP", "Engaged"] |

### Combining Conditions

Use **AND** for stricter targeting, **OR** for broader reach:

```
(Industry is "Software" OR Industry is "Technology")
AND
(Employee Count isAbove 50)
AND
(Country is "United States")
```

This targets US-based software or technology companies with 50+ employees.

## Group Processing Status

After creating or importing a group, it processes in the background:

| Status | What It Means |
|--------|---------------|
| **Draft** | Initial creation, not yet started |
| **Preview** | Sample data fetched (10 records shown) |
| **In Queue** | Waiting to be processed |
| **Processing** | Currently building the list |
| **Done** | Complete and ready to use in campaigns |
| **Error** | Something went wrong (check logs or contact support) |

Large imports may take several minutes. You'll see the record count update in real-time.

## Using Target Groups in Campaigns

Once created, target groups power all your campaigns:

### Website Personalization
Target visitors from specific accounts to see personalized experiences:
1. Create/edit a campaign
2. Go to **Audience** tab
3. Select **Account List** condition
4. Choose your target group
5. Visitors from those accounts see your personalization

### Ad Campaigns (LinkedIn, Google)
Push target groups to ad platforms:
1. Create a LinkedIn or Google Ads campaign
2. Select your account or contact group
3. Sync to the ad platform
4. Your audience appears as a matched audience

### Email Sequences
Target contacts for outreach:
1. Create a sequence campaign
2. Select your contact group
3. Contacts receive your email sequence

### CRM Sync
Keep your CRM updated with target accounts:
1. Enable auto-push in **Integrations**
2. New group members automatically sync to CRM
3. Field mappings apply during sync

## Managing Target Groups

### Quick Actions

| Action | How To |
|--------|--------|
| **Rename** | Click group name, edit, auto-saves |
| **Edit Filters** | Open group → Edit → Modify conditions → Save |
| **Add Records** | Open group → Add button → Search or upload |
| **Remove Records** | Select records → Remove from Collection |
| **Delete Group** | Select groups → Delete (records remain, just unlinked) |
| **Duplicate** | Open group → Duplicate → Modify as needed |

### Duplicate Handling for Imports

| Option | When to Use |
|--------|-------------|
| **Skip** | Preserve manual updates, don't overwrite |
| **Overwrite All** | Complete refresh with new data |
| **Overwrite Missing** | Fill in blanks, keep existing data |

## Auto-Generated Groups

Abmatic automatically creates special groups:

### Company Reveal Group
- Created when Company Reveal is enabled
- Contains all identified visitor companies
- Updates in real-time as new companies are identified
- Read-only (cannot delete)
- Find it by looking for "Company Reveal" in your collections

### User Associated Lists
- Created per user showing accounts they're associated with
- Shows accounts from the last 90 days
- Useful for territory-based targeting

## Best Practices

### Naming Conventions

Use a consistent format:
```
[Purpose]-[Criteria]-[Region/Date]
```

**Examples:**
- `ABM-Enterprise-Tech-USA`
- `Retarget-Website-Visitors-Q1`
- `Event-Dreamforce-Attendees-2025`

### Group Organization

| Strategy | Description | When to Use |
|----------|-------------|-------------|
| **By Campaign** | Groups tied to specific campaigns | Short-term, focused initiatives |
| **By Tier** | Priority levels (Tier 1, 2, 3) | ABM programs with account prioritization |
| **By Stage** | Funnel stages (Prospect, Engaged, Customer) | Full-funnel marketing programs |
| **By Vertical** | Industry segments | Industry-specific campaigns |

### Keep Groups Fresh

| Task | Frequency |
|------|-----------|
| Review group sizes | Weekly |
| Update filter criteria | Monthly or as market changes |
| Archive completed campaign groups | After campaign ends |
| Monitor processing for errors | Daily for active imports |

### Performance Tips

- **Smaller, focused groups** process faster and target better
- **Specific filters** give faster results than broad criteria
- **Schedule large imports** during off-peak hours
- **Use Dynamic collections** for always-current audiences

## Troubleshooting

### Group Stuck in Processing

| Possible Cause | Solution |
|----------------|----------|
| Very large group (100K+ records) | Wait longer—large groups take time |
| Complex filter conditions | Simplify filters or split into multiple groups |
| System backlog | Wait 30 minutes, then contact support |

### Records Not Appearing

| Possible Cause | Solution |
|----------------|----------|
| Filter doesn't match any records | Adjust filter criteria, preview results |
| Invalid primary key (website/email) | Check data format requirements |
| Still processing | Wait for "Done" status |

### Duplicate Records

| Possible Cause | Solution |
|----------------|----------|
| Wrong duplicate handling setting | Re-import with correct setting |
| Non-unique identifiers in source | Clean source data before import |
| Multiple imports without deduplication | Merge duplicates in source system |

### CRM Sync Not Working

| Possible Cause | Solution |
|----------------|----------|
| CRM disconnected | Reconnect in Integrations |
| Auto-push disabled | Enable in CRM settings |
| Field mapping errors | Review and fix field mappings |
| CRM permission issues | Check API permissions |

## Next Steps

- [Account Lists](/audiences/accounts) - Deep dive into account management
- [Contact Lists](/audiences/contacts) - Learn contact-specific features
- [Audience Filters](/audiences/filters) - Master the filter builder
- [CSV Import](/audiences/csv-import) - Import best practices
- [CRM Sync](/audiences/crm-sync) - Sync configuration guide
