---
id: target-groups
title: Target Groups
sidebar_label: Target Groups
sidebar_position: 4
---

# Target Groups

**Stop guessing who to target. Start knowing.** Target Groups (Collections) let you organize your accounts and contacts into laser-focused segments that power every campaign, from website personalization to ad retargeting to CRM sync.

![Target Groups - Collections View](/img/screenshots/accounts-collections-final.png)

## Why Target Groups Matter

| Before Target Groups | With Target Groups |
|---------------------|-------------------|
| Broad campaigns targeting everyone | Precision targeting for each segment |
| Manual list management in spreadsheets | Dynamic lists that update automatically |
| Disconnected data across platforms | Unified audiences synced everywhere |
| Hours building campaign audiences | Reusable groups ready in seconds |

## Understanding Target Groups

Target Groups serve as containers for your audiences. Once created, they power everything -- website personalization, ad campaigns, email sequences, and CRM sync.

---

## Static vs. Dynamic: The Key Decision

Every time you create a target group, you choose between Static and Dynamic. This decision shapes how the group behaves over its lifetime:

| Feature | Static Group | Dynamic Group |
|---------|-------------|---------------|
| **Membership** | Fixed at creation time | Continuously updated |
| **New matches added?** | No -- only accounts/contacts matching at save time | Yes -- new matches added automatically |
| **Filter rules** | Applied once to build the list | Applied continuously to keep the list current |
| **Manual edits** | You can add/remove individual records | Membership is controlled by filter rules only |
| **Duplicate handling** | You choose how to handle (Skip, Overwrite, Update Missing) | Managed automatically |
| **Preview available?** | Yes -- see estimated count before saving | Saves immediately, populates over time |
| **Ideal for** | One-time campaigns, fixed ABM tier lists, event attendees | Ongoing campaigns, always-on targeting, growing prospect pools |
| **Stays fresh?** | Only if you manually update it | Always current without any effort |

### When to Use Static

- You have a hand-picked list of named accounts for a specific ABM program
- You uploaded an event attendee list that should not change
- You want a fixed snapshot for reporting purposes
- You need precise control over who is included

### When to Use Dynamic

- You want your targeting to grow as Abmatic identifies new companies
- You are running always-on website personalization campaigns
- You want to automatically capture high-intent visitors
- You need lists that reflect your current ICP without manual maintenance

:::tip Best practice for most marketers
Start with Dynamic collections for your core ICP segments. They require zero maintenance and automatically include new prospects. Reserve Static collections for specific, hand-curated lists.
:::

---

## All Group Types at a Glance

| Group Type | Best For | Example |
|------------|----------|---------|
| **Dynamic** | Audiences that change based on criteria | "All accounts in Software industry with 50+ employees" |
| **Static** | Fixed lists you manually curate | "Q1 ABM Target List" hand-picked by sales |
| **CSV Import** | Existing lists from spreadsheets | Event attendees, purchased lists |
| **CRM Sync** | Lists from Salesforce, HubSpot, Pipedrive | Synced opportunities, campaign members |
| **Auto Generated** | System-created for special purposes | Company Reveal identified accounts, campaign audience groups |
| **Abmatic Filters** | Built using the filter builder | Custom segments based on any attribute |

---

## Creating Target Groups

### Step 1: Choose Your Approach

Navigate to **Audiences > Accounts** (or **Contacts**) and click **+ Account List** (or **+ Contact List**) to see your options:

![Create Target Group Modal](/img/screenshots/account-create-modal.png)

The creation modal has two sections:

**Import section:**

| Option | When to Use |
|--------|-------------|
| **Upload from CSV** | You have a spreadsheet with accounts or contacts |
| **Import from CRM** | Pull lists directly from Salesforce, HubSpot, or Pipedrive |

**Create section:**

| Option | When to Use |
|--------|-------------|
| **Static Collection** | Manually curate a fixed list using filter rules applied once |
| **Dynamic Collection** | Build an auto-updating list based on filter criteria that runs continuously |

### Step 2: Define Your Audience with Filters

Both Static and Dynamic collections use the same filter builder interface:

![Filter Builder](/img/screenshots/accounts-static-list.png)

The filter builder has three components per rule:

1. **Selector** -- the data field to filter on (e.g., Industry, Employee Count, Country)
2. **Operator** -- how to match (e.g., "is", "isAbove", "contains")
3. **Value** -- what to match against (e.g., "Software", "500", "United States")

**To add a filter rule:**
1. Click the **Selector** dropdown and search for your field
2. Choose an **Operator** from the dropdown
3. Enter your **Value**
4. Click the checkmark to confirm the rule
5. Click **+ Rule** to add additional conditions (combined with AND logic)
6. Click **Save** (Static) or **Save Dynamic Collection** (Dynamic)

### Step 3: Name and Activate

Give your group a descriptive name that includes:
- **Purpose**: What campaign or program it supports
- **Criteria**: Key characteristics of the audience
- **Date** (optional): When created or when it expires

**Good naming examples:**
- `2026-Q1-ABM-Enterprise-Tech`
- `Inbound-Mid-Market-USA`
- `Event-Attendees-SaaStr-2026`
- `Dynamic-Hot-Accounts-Software`

**Avoid these names:**
- `List 1`, `Test`, `Accounts`, `New list`

---

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

The filter builder also supports **Groups** -- nested AND/OR blocks for complex logic. The screenshot below shows a real campaign filter:

![Filter Groups in Action](/img/screenshots/wp-audience-tab.png)

This example from the "Inbound Enterprise" campaign shows:
1. **Country** is any of: Canada, US, UK, Germany, France, Spain, Italy
2. **AND Account List** is none of: Abmatic AI Customer List (excludes existing customers)
3. **AND** a grouped OR condition:
   - **Employee Count** is above 501
   - **OR Company Size** is any of: 501-1000, 1001-5000, 5001-10000, 10001+

---

## Real-World Use Cases

### For ABM Marketers

| Use Case | Group Type | How to Build It |
|----------|-----------|-----------------|
| **Tier-1 Named Accounts** | Static | Hand-pick your top 50 target companies |
| **ICP-Matching Companies** | Dynamic | Filter by Industry + Employee Count + Country |
| **Competitor Customers** | Static (CSV) | Upload a list of known competitor users |
| **Expansion Targets** | Dynamic | Filter by existing customers with high engagement |

### For Demand Gen Marketers

| Use Case | Group Type | How to Build It |
|----------|-----------|-----------------|
| **High-Intent Visitors** | Dynamic | Filter by Temperature = "Hot" |
| **Webinar Follow-Up** | Static (CSV) | Upload attendee list after the event |
| **Content Syndication** | Static (CSV) | Import leads from content syndication partners |
| **Retargeting Pool** | Dynamic | Use the Company Reveal auto-generated collection |

### For Sales Teams

| Use Case | Group Type | How to Build It |
|----------|-----------|-----------------|
| **My Territory** | Dynamic | Filter by Country + Region matching your territory |
| **Stalled Deals** | CRM Import | Import opportunities stuck in a stage for 30+ days |
| **New Logo Prospects** | Dynamic | Filter by accounts NOT in your CRM customer list |

---

## Group Processing Status

After creating or importing a group, it processes in the background:

| Status | What It Means |
|--------|---------------|
| **Draft** | Initial creation, not yet processed |
| **Preview** | Sample data fetched (estimated count shown) |
| **In Queue** | Waiting to be processed |
| **Processing** | Currently building the list |
| **Done** | Complete and ready to use in campaigns |
| **Error** | Something went wrong (check filters or contact support) |

Large imports may take several minutes. You will see the record count update in real-time.

---

## Using Target Groups in Campaigns

Once created, target groups power all your campaigns:

### Website Personalization
Target visitors from specific accounts to see personalized experiences:
1. Create/edit a campaign
2. Go to the **Audience** tab
3. Select **Account List** as a filter condition
4. Choose your target group
5. Visitors from those accounts see your personalized content

### Ad Campaigns (LinkedIn, Google)
Push target groups to ad platforms:
1. Create a LinkedIn or Google Ads campaign
2. Select your account or contact group
3. Sync to the ad platform
4. Your audience appears as a matched audience

### AI Sequences
Target contacts for AI-personalized outreach:
1. Create an AI Sequence campaign
2. Select your contact group
3. AI dynamically personalizes and sends messages to each contact

### CRM Sync
Keep your CRM updated with target accounts:
1. Enable auto-push in **Integrations**
2. New group members automatically sync to CRM
3. Field mappings apply during sync

---

## Managing Target Groups

### Quick Actions

| Action | How To |
|--------|--------|
| **Search** | Use the search bar above the collections grid |
| **Filter by type** | Click a summary card (Dynamic, CSV, Auto Generated, etc.) |
| **Sort** | Use the Sort By dropdown (Last Updated At is the default) |
| **Rename** | Click group name to edit inline, auto-saves |
| **Edit Filters** | Open group, modify conditions, save |
| **Delete Group** | Select groups with checkboxes, click Delete (records remain, just unlinked) |

### Duplicate Handling for Imports

| Option | When to Use |
|--------|-------------|
| **Skip and keep existing fields** | Preserve manual updates, do not overwrite |
| **Overwrite existing fields** | Complete refresh with new data |
| **Update only missing fields** | Fill in blanks, keep existing data |

---

## Auto-Generated Groups

Abmatic automatically creates special groups that you do not need to build yourself:

### Company Reveal Group
- Created when Company Reveal is enabled
- Contains all identified visitor companies
- Updates in real-time as new companies are identified
- Read-only (cannot delete)

### Campaign Audience Groups
- Auto-generated for each campaign you create (e.g., "Inbound: Inbound Enterprise")
- Tracks which accounts/contacts are in each campaign's audience
- Named with the pattern: "Campaign Type: Campaign Name"

### User Associated Lists
- Created per user showing accounts they are associated with
- Shows accounts from the last 90 days
- Useful for territory-based targeting
- Named with the pattern: "User Name: Associated Account List (Last 90 Days)"

### Form Submission Groups
- Auto-generated for tracked forms on your website
- Named with the pattern: "Form Group: form-name"

---

## Best Practices

### Group Organization

| Strategy | Description | When to Use |
|----------|-------------|-------------|
| **By Campaign** | Groups tied to specific campaigns | Short-term, focused initiatives |
| **By Tier** | Priority levels (Tier 1, 2, 3) | ABM programs with account prioritization |
| **By Stage** | Funnel stages (Prospect, Engaged, Customer) | Full-funnel marketing programs |
| **By Vertical** | Industry segments | Industry-specific campaigns |

### Naming Conventions

Use a consistent format:
```
[Purpose]-[Criteria]-[Region/Date]
```

**Examples:**
- `ABM-Enterprise-Tech-USA`
- `Retarget-Website-Visitors-Q1`
- `Event-Dreamforce-Attendees-2026`

### Keep Groups Fresh

| Task | Frequency |
|------|-----------|
| Review group sizes | Weekly |
| Update filter criteria | Monthly or as market changes |
| Archive completed campaign groups | After campaign ends |
| Monitor processing for errors | Daily for active imports |

### Performance Tips

- **Smaller, focused groups** process faster and target better than large, generic ones
- **Specific filters** give faster results than broad criteria
- **Use Dynamic collections** for always-current audiences -- they eliminate manual maintenance
- **Schedule large imports** during off-peak hours

---

## Troubleshooting

### Group Stuck in Processing

| Possible Cause | Solution |
|----------------|----------|
| Very large group (100K+ records) | Wait longer -- large groups take time |
| Complex filter conditions | Simplify filters or split into multiple groups |
| System backlog | Wait 30 minutes, then contact support |

### Records Not Appearing

| Possible Cause | Solution |
|----------------|----------|
| Filter does not match any records | Adjust filter criteria, use Preview to check |
| Invalid primary key (website/email) | Check data format requirements |
| Still processing | Wait for "Done" status |
| Dynamic collection just created | Give it time -- it populates as new matches arrive |

### Duplicate Records

| Possible Cause | Solution |
|----------------|----------|
| Wrong duplicate handling setting | Re-import with the correct setting |
| Non-unique identifiers in source | Clean source data before import |
| Multiple imports without deduplication | Merge duplicates in source system |

### CRM Sync Not Working

| Possible Cause | Solution |
|----------------|----------|
| CRM disconnected | Reconnect in Integrations settings |
| Auto-push disabled | Enable in CRM settings |
| Field mapping errors | Review and fix field mappings |
| CRM permission issues | Check API permissions in your CRM |

---

## Next Steps

- [Account Lists](/audiences/accounts) -- Deep dive into account management
- [Contact Lists](/audiences/contacts) -- Learn contact-specific features
- [Audience Filters](/audiences/filters) -- Master the filter builder
- [CSV Import](/audiences/csv-import) -- Import best practices
- [CRM Sync](/audiences/crm-sync) -- Sync configuration guide
