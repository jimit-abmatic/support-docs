---
id: contacts
title: Contact Lists
sidebar_label: Contact Lists
sidebar_position: 3
---

# Contact Lists

Turn anonymous website visitors into qualified prospects. Abmatic AI's contact management gives you rich professional data on every person engaging with your brand -- job titles, seniority levels, direct phone numbers, and engagement scores -- so your sales team always knows who to call and what to say.

![Contacts Collections](/img/screenshots/contacts-collections-final.png)

## Why Contact Intelligence Matters

| Without Contact Data | With Abmatic AI |
|---------------------|-----------------|
| Generic outreach to unknown visitors | Personalized messages to named individuals |
| Guessing who the decision-makers are | Know exact titles, seniority, and departments |
| Manual research wastes hours per prospect | Instant enrichment with 50+ data fields |
| Disconnected from account context | Every contact linked to their company |
| No visibility into engagement | See who is hot and ready to buy |

## Understanding Your Contact Views

### Collections Tab

Your saved contact lists, organized by source and purpose. The summary cards at the top show your total collections broken down by type:

| Collection Type | Description | Best For |
|----------------|-------------|----------|
| **Dynamic** | Auto-updating lists based on filter rules | Always-current segments for ongoing campaigns |
| **HubSpot** | Synced from HubSpot CRM | Keeping CRM contacts in sync |
| **Salesforce** | Synced from Salesforce CRM | Lead and contact synchronization |
| **Salesforce Campaign Imports** | Imported from Salesforce campaign membership | Campaign-specific contact groups |
| **CSV** | Imported from spreadsheet files | Event attendee lists, purchased data, manual imports |
| **Abmatic Filters** | Built using the filter builder | Custom segments based on any contact attribute |
| **Abmatic** | Created within Abmatic | Platform-native contact lists |
| **Auto Generated** | System-created for special purposes | Campaign audience groups, form submissions, inbound segments |

### All Contacts Tab

View your complete contact database with powerful search and filtering:

- Total contacts in database
- Quick-click filters by department (Marketing, Sales, Executive, etc.)
- Full data grid with sorting by any column

**The contact grid displays:**
- Work email and full name
- Temperature (Hot, Warm, Cold) for prioritization
- Website engagement score
- Job title and seniority
- Location and phone number

---

## Static vs. Dynamic Contact Lists: Which Should You Use?

Just like account lists, you choose between Static and Dynamic when creating a contact list:

| Feature | Static List | Dynamic List |
|---------|-------------|--------------|
| **How it works** | Captures a fixed snapshot of contacts matching your filters | Continuously adds new contacts that match your filter rules |
| **Updates automatically?** | No -- the list stays frozen after creation | Yes -- new matching contacts are added over time |
| **When to use** | One-time AI Sequences, event follow-ups, hand-curated outreach lists | Ongoing nurture sequences, always-on sales alerts, growing prospect pools |
| **Duplicate handling** | You choose: Skip, Overwrite, or Update Missing | Managed automatically |
| **Can you manually add/remove?** | Yes | No -- membership is controlled by filter rules |
| **Estimated count shown?** | Yes -- see "Estimated Contacts" before saving | No preview (filters apply after save) |
| **Best example** | "Webinar Attendees - March 2026" | "All Directors and VPs at Enterprise Tech Companies" |

:::tip Rule of thumb
Use Dynamic for anything related to ongoing outreach or nurture campaigns. Use Static when you have a specific, one-time list that should not change (like event attendees or a hand-picked outreach list).
:::

---

## Creating Contact Lists

Click the **+ Contact List** button in the top right corner of the Contacts page to see your options:

![Contact Create Modal](/img/screenshots/contact-create-options.png)

The modal gives you four methods, organized into two sections:

**Import** -- bring in existing contact data:
- Upload from CSV
- Import from CRM

**Create** -- build a new list from scratch:
- Static Collection
- Dynamic Collection

### Method 1: Static Collection (Filter Once, Fixed List)

A static collection creates a one-time snapshot of contacts matching your filter criteria. The list does not change after you save it.

![Contact Static Collection](/img/screenshots/contacts-static-list.png)

**Step-by-step:**

1. Click **+ Contact List** on the Contacts page
2. Select **Static Collection** under the Create section
3. Enter a descriptive name in the **Name** field
4. Build your filter conditions in the **Select Filters** panel:
   - Choose a **Selector** (the field to filter on)
   - Choose an **Operator** (how to match)
   - Enter a **Value** (what to match against)
   - Click the checkmark to confirm the rule
5. Click **+ Rule** to add more conditions
6. Click **Preview** (top right) to see the estimated contact count
7. Choose your **duplicate handling** option:
   - **Skip and keep existing fields** -- preserve existing contact data
   - **Overwrite existing fields** -- replace with new data
   - **Update only missing fields** -- fill in blanks only
8. Click **Save** to create your list

**Example: Build a Decision-Maker Outreach List**
```
Selector: Person Job Title Levels  Operator: isAny  Value: "Director", "VP", "C-Level"
Selector: Company Name             Operator: is     Value: "Target Company Inc."
```

### Method 2: Dynamic Collection (Auto-Updating List)

A dynamic collection uses the same filter builder but keeps the list current as new contacts are identified.

![Contact Dynamic Collection](/img/screenshots/contacts-dynamic-list.png)

**Step-by-step:**

1. Click **+ Contact List** on the Contacts page
2. Select **Dynamic Collection** under the Create section
3. Enter a meaningful name (replace the auto-generated one)
4. Build your filter conditions (same Selector / Operator / Value workflow)
5. Click **+ Rule** to add more conditions
6. Click **Save Dynamic Collection** (top right) to activate

:::info How it works
"New visitors that match your filters will automatically be added to this collection." Your list grows organically as Abmatic identifies new contacts from website visits, CRM syncs, or enrichment.
:::

**Example: Always-Current Hot Prospects**
```
Selector: Temperature         Operator: is     Value: "Hot"
Selector: Person Job Title Levels  Operator: isAny  Value: "Director", "VP", "C-Level"
```

### Method 3: CSV Import

Import contacts from spreadsheets, event lists, or purchased data:

1. Click **+ Contact List** on the Contacts page
2. Select **Upload from CSV** under the Import section
3. Upload your .csv file (max 1,000 rows per import)
4. Map your columns to Abmatic fields:
   - **Work Email** (required) OR **LinkedIn URL** (required) -- at least one identifier is needed
   - Map additional fields for better enrichment (Name, Title, Company, etc.)
5. Choose duplicate handling (Skip, Overwrite, or Update Missing)
6. Name your list and click **Import**

**CSV Best Practices:**
- Include work email whenever possible (higher match rates and better enrichment)
- Use UTF-8 encoding for international characters
- Put headers in the first row
- Remove any personal email addresses (Gmail, Yahoo, etc.)

### Method 4: CRM Import

Pull contacts directly from your connected CRM:

1. Click **+ Contact List** on the Contacts page
2. Select **Import from CRM** under the Import section
3. Choose your CRM (Salesforce, HubSpot, or Pipedrive)
4. Build filters using CRM-native fields
5. Preview the matched contacts
6. Click **Import**

**What Gets Imported:**

| CRM | Record Types |
|-----|-------------|
| **Salesforce** | Contacts and Leads |
| **HubSpot** | Contacts |
| **Pipedrive** | Persons |

---

## Available Contact Filter Fields

When building Static or Dynamic contact lists, the Selector dropdown organizes filters into categories. Here are the main groups:

### Geolocation Filters

| Filter Field | What It Does | Example Use |
|-------------|-------------|-------------|
| **Country** | Match by country | Target contacts in North America |
| **City** | Match by specific city | Run local event promotions |

### IP Lookup Filters (Company-Level)

| Filter Field | What It Does | Example Use |
|-------------|-------------|-------------|
| **Company Name** | Filter by the contact's employer | Target contacts at specific companies |
| **Company Size** | Filter by company headcount ranges | Focus on mid-market (50-500 employees) |
| **Person Job Title Role** | Standardized job function | Filter for "Marketing" or "Sales" roles |
| **Person Job Title Sub Role** | More specific job function | Filter for "Content Marketing" or "SDR" |
| **Person Job Title Levels** | Seniority level | Target "Director", "VP", or "C-Level" |
| **Country** | Company country from IP lookup | Geographic targeting |

### CRM Filters (Salesforce)

| Filter Field | What It Does | Example Use |
|-------------|-------------|-------------|
| **Account Name** | Salesforce account name | Match specific CRM accounts |
| **Account Phone** | Account phone number | Filter by phone availability |
| **Billing City / Country** | Billing address fields | Target by billing location |
| **Shipping City / Country** | Shipping address fields | Target by shipping location |
| **Temperature** | Abmatic engagement temperature | Focus on Hot or Warm contacts |
| **Total Engagement Score** | Combined engagement metric | Target highly engaged contacts |
| **Website Engagement Score** | Website-specific activity level | Find contacts who visit your site |
| **LinkedIn Engagement Score** | LinkedIn activity metric | Find socially active contacts |
| **Jigsaw Company ID** | Salesforce data.com identifier | Cross-reference with Jigsaw data |

### CRM Filters (HubSpot)

| Filter Field | What It Does | Example Use |
|-------------|-------------|-------------|
| **Company Domain Name** | HubSpot company domain | Match by website domain |
| **Company Name** | HubSpot company name | Target specific companies |
| **Deal Name** | Associated deal name | Filter by deal involvement |

### Custom Fields (Account)

| Filter Field | What It Does | Example Use |
|-------------|-------------|-------------|
| **Natural name** | Custom account field | Filter by custom naming conventions |
| **Company Logo** | Logo availability | Target enriched accounts |

---

## Contact Data at Your Fingertips

Every contact record is enriched with comprehensive professional data:

### Identity Information

| Field | What It Tells You |
|-------|------------------|
| **Work Email** | Primary contact method and company identifier |
| **Full Name** | Personalize outreach with correct spelling |
| **LinkedIn URL** | Research their background and connections |
| **Mobile Phone** | Direct dial for sales follow-up |

### Professional Details

| Field | Why It Matters |
|-------|---------------|
| **Job Title** | Understand their role and responsibilities |
| **Title Level** | Know if they are a decision-maker (VP, Director, C-Level) |
| **Department** | Match messaging to their function |
| **Job Start Date** | New roles = higher likelihood to buy |

### Company Context

| Field | How To Use It |
|-------|--------------|
| **Company Name** | Coordinate with account-level campaigns |
| **Company Size** | Tailor messaging to company maturity |
| **Industry** | Use industry-specific value propositions |
| **Company LinkedIn** | Research company news and updates |

### Engagement Signals

| Field | Action To Take |
|-------|---------------|
| **Temperature** | Hot = call now, Warm = nurture, Cold = re-engage |
| **Engagement Score** | Higher scores = more interested |
| **Website Score** | Track page views and time on site |
| **Last Hot Date** | Strike while the iron is hot |

---

## Real-World Use Cases for Marketers

Here are practical examples of contact lists you can build for common marketing scenarios:

| Marketing Goal | List Type | Filter Setup |
|----------------|-----------|--------------|
| **Executive Outreach** | Static | Person Job Title Levels is "C-Level" AND Company Size > 500 |
| **Nurture Campaign** | Dynamic | Temperature is "Warm" AND Person Job Title Role is "Marketing" |
| **Event Follow-Up** | Static (CSV) | Upload attendee list from conference or webinar |
| **New Hire Outreach** | Dynamic | Job Start Date within last 90 days AND Title Level is "Director" or above |
| **Hot Lead Alerts** | Dynamic | Temperature is "Hot" -- send to sales immediately |
| **Account Penetration** | Static | Company Name is "Target Account" -- find all contacts at a specific company |
| **Re-Engagement** | Dynamic | Website Engagement Score above 50 AND Temperature is "Cold" |

---

## Contact-Account Linking

Every contact is connected to their company account for coordinated ABM:

### Automatic Linking

Contacts link to accounts automatically through:

| Method | How It Works |
|--------|-------------|
| **Email Domain** | john@acme.com links to the Acme Inc. account |
| **Company Name** | Fuzzy matching to existing accounts |
| **CRM Association** | Preserves Salesforce/HubSpot relationships |

### View Account Contacts

See everyone at a target account:

1. Go to **Audiences > Accounts**
2. Click on an account
3. Select the **Contacts** tab
4. View all people at that company with engagement data

---

## Automatic Contact Enrichment

Every contact is automatically enriched with professional data:

### What Gets Enriched

When you add a contact (via import, CRM sync, or website reveal):

- **Professional history** filled in from public sources
- **Social profiles** linked (LinkedIn, Twitter)
- **Company data** matched to account records
- **Location** normalized to standard format
- **Phone numbers** added when available

### LinkedIn-Only Contacts

Do not have an email? Import with a LinkedIn URL as the primary identifier:

1. Import with LinkedIn URL as the primary identifier
2. Abmatic fetches profile data automatically
3. Work email discovered if publicly available
4. Contact linked to the matching company account

---

## Managing Your Contact Lists

### Collection Status

| Status | What It Means |
|--------|---------------|
| **Draft** | Created but not yet processed |
| **Preview** | Sample data fetched (showing estimated count) |
| **Processing** | Currently building the list |
| **Done** | Complete and ready to use |
| **Error** | Something went wrong |

### Quick Actions

| Action | How To |
|--------|--------|
| **Search** | Type name, email, or company in the search bar |
| **Filter by type** | Click a summary card (Dynamic, CSV, etc.) to narrow the list |
| **Sort** | Use the Sort By dropdown |
| **Export** | Click the download icon for CSV export |
| **Delete** | Select collection(s) and click Delete |

:::note
Deleting a collection does not delete the underlying contacts. They remain in your database and can be added to other collections.
:::

---

## CRM Synchronization

Keep your CRM and Abmatic in sync:

### Sync Directions

| Direction | What Happens |
|-----------|-------------|
| **CRM to Abmatic** | Import contacts to enrich and target |
| **Abmatic to CRM** | Push revealed contacts back to CRM |
| **Two-Way** | Keep both systems updated |

### Push to CRM

Send new contacts to your CRM:

1. Select contacts to push
2. Click **Push to CRM**
3. Choose record type:
   - **Create as Contact** (requires LastName, AccountId recommended)
   - **Create as Lead** (requires LastName, Company)
4. Map any additional fields
5. Push to CRM

### Handling Leads vs. Contacts

| Source Type | Description |
|------------|-------------|
| **Contact** | Associated with an Account in CRM |
| **Lead** | Standalone record, not yet qualified |

Both sync seamlessly and can be pushed back as either type.

---

## Person Reveal Integration

Contacts discovered through Person Reveal appear automatically:

1. Visitor fills out a form on your website
2. Abmatic captures the email/identity
3. Contact is created and enriched
4. Linked to their company account
5. Available for targeting and sync

### Access Revealed Contacts

1. Go to **Reveal > Contacts**
2. View identified website visitors
3. Filter by date, company, or engagement
4. Export or add to campaigns

---

## Best Practices

### Do's

| Practice | Why It Works |
|----------|-------------|
| Use work emails over personal | Higher match rates, better enrichment |
| Create role-based segments | Target decision-makers effectively |
| Use Dynamic lists for ongoing nurture | Keep your prospect pool growing automatically |
| Sync regularly with CRM | Keep data fresh in both systems |
| Monitor engagement scores | Prioritize hot contacts for sales |
| Link contacts to accounts | Enable coordinated ABM campaigns |

### Don'ts

| Avoid | Why |
|-------|-----|
| Importing personal emails (Gmail, Yahoo) | Poor enrichment, wrong audience |
| Ignoring duplicates | Creates sync confusion across systems |
| Letting contact lists go stale | Outdated data hurts email deliverability |
| Skipping job title filters | Wastes outreach time on wrong contacts |
| Creating one huge list for all campaigns | Harder to personalize and measure |

### Data Quality Tips

1. **Verify emails** before import for better deliverability
2. **Clean bounces** regularly to maintain sender reputation
3. **Update job changes** as contacts move companies
4. **Remove opt-outs** promptly for compliance

---

## Troubleshooting

### Contacts Not Importing

| Issue | Solution |
|-------|----------|
| Invalid email format | Check for typos, use standard format |
| Missing required fields | Ensure email OR LinkedIn URL is present |
| Over row limit | Split into multiple files (1,000 max per import) |
| Encoding errors | Save as UTF-8 CSV |

### Collection Shows 0 Records

| Issue | Solution |
|-------|----------|
| Filters too restrictive | Remove filters one by one to find the blocker |
| No matching data | Check if contacts exist in the All Contacts tab |
| Dynamic collection just created | Give it time to populate with new matches |

### Missing Enrichment Data

| Issue | Solution |
|-------|----------|
| Personal email used | Re-import with work email instead |
| LinkedIn URL incorrect | Verify the URL points to a public profile |
| Recently imported | Allow 24 hours for enrichment to complete |
| No public data available | Contact may have limited online presence |

### CRM Sync Issues

| Issue | Solution |
|-------|----------|
| Connection error | Re-authenticate CRM integration in Settings |
| Fields not mapping | Check field permissions in CRM |
| Duplicates created | Enable duplicate detection in CRM settings |
| Sync delayed | Check sync schedule in Integrations |

---

## Related Documentation

- [Account Lists](/audiences/accounts) -- Manage company-level targeting
- [Target Groups](/audiences/target-groups) -- Combine accounts and contacts for campaigns
- [Filters](/audiences/filters) -- Complete guide to all available filters
- [CSV Import](/audiences/csv-import) -- Detailed import guide
- [Contact Reveal](/visitor-tracking/contact-reveal) -- Identify website visitors
- [CRM Sync](/audiences/crm-sync) -- Configure synchronization
