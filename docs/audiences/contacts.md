---
id: contacts
title: Contact Lists
sidebar_label: Contact Lists
sidebar_position: 3
---

# Contact Lists

Contact Lists (Collections) organize the *people* you want to reach. Each contact is enriched with professional data — job title, seniority, location, phone, engagement scores — so your team always knows who to reach and what to say.

![Contact Collections list with summary cards by source](/img/screenshots/con-collections.png)

## Why Contact Intelligence Matters

| Without Contact Data | With Abmatic AI |
|---------------------|-----------------|
| Generic outreach to unknown visitors | Personalized messages to named people |
| Guessing who the decision-makers are | Know exact titles, seniority, and departments |
| Manual research per prospect | Automatic enrichment |
| Disconnected from account context | Every contact linked to their company |

## Understanding Your Contact Views

### Collections Tab

Your saved contact lists, organized by source. The summary cards show your totals broken down by type:

| Collection Type | Description |
|----------------|-------------|
| **Dynamic** | Auto-updating lists built from filters |
| **Salesforce** | Synced from Salesforce |
| **Salesforce Campaign Imports** | Imported from Salesforce campaign membership |
| **HubSpot** | Synced from HubSpot |
| **CSV** | Imported from a spreadsheet |
| **Abmatic** / **Abmatic Filters** | Built with the Abmatic filter builder |
| **Auto Generated** | System-created (campaign audiences, form submissions, Visitor Reveal) |

### All Contacts Tab

Your complete contact database in a fast, server-side data grid.

![The All Contacts grid showing columns such as Work Email, Total Engagement Score, Job Title Role, Job Title, Full Name and LinkedIn URL](/img/screenshots/con-all-ssrm.png)

**The grid columns include:**
- Work Email and Full Name
- Job Title, Job Title Role, and seniority
- Temperature (Hot / Warm / Cold / None) for prioritization
- Total Engagement Score, with **LinkedIn / Website / Agentic Chat** sub-scores
- LinkedIn URL, location, and phone
- **recommended_personal_email** — a suggested personal email when available
- **Reveal Confidence** and **Demo Booked** / Demo Booked At / Demo Scheduled At

#### How the grid works (server-side)

Like the Accounts grid, the Contacts grid loads data **server-side**:

- Filtering and sorting run on the server, so it stays fast at any size.
- **Infinite scroll** loads more rows as you scroll.
- A **live row count** shows how many contacts match the current view.
- **Select all / select all-except** works across pages, so bulk actions can apply to records that haven't loaded yet.

You can quick-filter the database by department (Marketing, Sales, Executive, and more) and create a single contact by LinkedIn URL with **+ Create Contact**.

---

## Static vs. Dynamic Contact Lists

| Feature | Static List | Dynamic List |
|---------|-------------|--------------|
| **How it works** | Fixed snapshot of matching contacts | Continuously adds new matching contacts |
| **Updates automatically?** | No | Yes |
| **When to use** | One-time outreach, event follow-ups | Ongoing nurture, always-on alerts |
| **Manually add/remove?** | Yes | No — controlled by filters |
| **Estimated count shown?** | Yes, before saving | No preview; populates after save |

:::tip Rule of thumb
Use Dynamic for ongoing outreach and nurture. Use Static for a specific, one-time list (like event attendees).
:::

---

## Creating Contact Lists

Click **+ Contact List** in the top right of the Contacts page.

![The Target Contacts dialog with Import and Create options](/img/screenshots/aud-create-modal.png)

The dialog has two sections:

**Import** — bring in existing contact data:
- Upload from CSV
- Import from CRM

**Create** — build a new list from scratch:
- Static Collection
- Dynamic Collection

### Method 1: Static Collection (Filter Once, Fixed List)

![Contact Static Collection filter builder](/img/screenshots/contacts-static-list.png)

1. Click **+ Contact List** → **Static Collection**.
2. Enter a descriptive name.
3. Build filter conditions in the **Select Filters** panel:
   - **Selector** (the field) → **Operator** (e.g. *is*, *is any of*) → **Value**
   - Click the **checkmark** to confirm the rule
4. Click **+ RULE** to add more conditions.
5. Click **PREVIEW** to see the estimated contact count.
6. Choose duplicate handling:
   - **Skip and keep existing fields**
   - **Overwrite existing fields**
   - **Update only missing fields**
7. Click **SAVE**.

**Example: a decision-maker outreach list**

```
Selector: Person Job Title Levels  Operator: is any of  Value: Director, VP, C-Level
Selector: Company Name             Operator: is         Value: Target Company Inc.
```

### Method 2: Dynamic Collection (Auto-Updating List)

![Contact Dynamic Collection filter builder](/img/screenshots/contacts-dynamic-list.png)

1. Click **+ Contact List** → **Dynamic Collection**.
2. Enter a meaningful name (replace the auto-generated one).
3. Build your filter conditions.
4. Click **+ RULE** to add more conditions.
5. Click **Save Dynamic Collection**.

:::info How it works
*"New visitors that match your filters will automatically be added to this collection."* Your list grows as Abmatic AI identifies new contacts from website visits, CRM syncs, or enrichment.
:::

### Method 3: Upload from CSV

1. Click **+ Contact List** → **Upload from CSV**.
2. Upload your `.csv` file. Limits: **100 MB** and **10,000 records** per import.
3. Abmatic AI auto-maps your columns; review and adjust on the **Map Fields** screen:
   - **Work Email** OR **LinkedIn URL** is required — at least one identifier per row.
4. Choose duplicate handling, then click **CREATE MAPPING**.

**CSV tips:** include work email when possible (better match rates), use UTF-8, and put headers in the first row. See the full [CSV Import guide](/audiences/csv-import).

### Method 4: Import from CRM

1. Click **+ Contact List** → **Import from CRM**.
2. Choose your connected CRM (Salesforce, HubSpot, Pipedrive, or ActiveCampaign).
3. Build filters using CRM-native fields.
4. Preview the matched contacts and pull them in.

| CRM | Record Types |
|-----|-------------|
| **Salesforce** | Contacts and Leads |
| **HubSpot** | Contacts |
| **Pipedrive** | Persons |
| **ActiveCampaign** | Contacts |

---

## Available Contact Filter Fields

When building Static or Dynamic contact lists, the **Selector** dropdown groups filters into categories.

### Geolocation

| Field | What It Does |
|-------|-------------|
| **Country** | Match by country |
| **City** | Match by specific city |

### Company-Level (IP Lookup)

| Field | What It Does |
|-------|-------------|
| **Company Name** | The contact's employer |
| **Company Size** | Employer headcount range |
| **Person Job Title Role** | Standardized job function (e.g. Marketing, Sales) |
| **Person Job Title Sub Role** | More specific function (e.g. Content Marketing, SDR) |
| **Person Job Title Levels** | Seniority (Director, VP, C-Level, etc.) |

### CRM Filters (Salesforce)

| Field | What It Does |
|-------|-------------|
| **Account Name** | Salesforce account name |
| **Account Phone** | Account phone number |
| **Billing / Shipping City / Country** | Address fields |
| **Temperature** | Engagement temperature |
| **Total / Website / LinkedIn Engagement Score** | Engagement metrics |

### CRM Filters (HubSpot)

| Field | What It Does |
|-------|-------------|
| **Company Domain Name** | HubSpot company domain |
| **Company Name** | HubSpot company name |
| **Deal Name** | Associated deal |

### Custom Fields

Any custom account or contact fields you've defined in **Settings → Custom Fields** also appear in the Selector.

---

## Contact Data at Your Fingertips

| Category | Fields |
|----------|--------|
| **Identity** | Work Email, recommended personal email, Full Name, LinkedIn URL, Mobile Phone |
| **Professional** | Job Title, Title Level, Department / Role, Job Start Date |
| **Company** | Company Name, Company Size, Industry, Company LinkedIn |
| **Engagement** | Temperature, Total / Website / LinkedIn / Agentic Chat Engagement Score, Last Hot Date |

:::note Email fields
A contact can have multiple emails (work and personal). Where available, Abmatic AI surfaces a **recommended personal email** so you can choose the right channel.
:::

---

## Real-World Use Cases

| Marketing Goal | List Type | Filter Setup |
|----------------|-----------|--------------|
| **Executive Outreach** | Static | Person Job Title Levels is "C-Level" AND Company Size is above 500 |
| **Nurture Campaign** | Dynamic | Temperature is "Warm" AND Person Job Title Role is "Marketing" |
| **Event Follow-Up** | Static (CSV) | Upload the attendee list |
| **Hot Lead Alerts** | Dynamic | Temperature is "Hot" — route to sales immediately |
| **Account Penetration** | Static | Company Name is "Target Account" — find everyone there |

---

## Contact-Account Linking

Every contact links to their company account for coordinated ABM:

| Method | How It Works |
|--------|-------------|
| **Email Domain** | `john@acme.com` links to the Acme Inc. account |
| **Company Name** | Fuzzy matching to existing accounts |
| **CRM Association** | Preserves Salesforce/HubSpot relationships |

To see everyone at a target account, open the account and select its **Contacts** tab.

---

## Managing Your Contact Lists

### Collection Status

| Status | What It Means |
|--------|---------------|
| **Draft** | Created but not yet processed |
| **Preview** | Sample data fetched (estimated count shown) |
| **Processing** | Currently building the list |
| **Done** | Complete and ready to use |
| **Error** | Something went wrong |

### Quick Actions

| Action | How To |
|--------|--------|
| **Search** | Type name, email, or company in the search bar |
| **Filter by type** | Click a summary card |
| **Sort** | Use the **Sort By** dropdown |
| **Export** | Use the bulk-actions menu → Export to CSV |
| **Delete** | Select collection(s), then Delete |

---

## Push to CRM

Send contacts to your CRM, either in bulk from the grid or from an individual contact's **Overview** tab `...` menu.

1. Select the contacts to push (or open one contact).
2. Click **Push to CRM**.
3. Choose the record type:
   - **Create as Contact** — requires LastName (AccountId recommended)
   - **Create as Lead** — requires LastName and Company
4. Review the field mappings and push.

| Record Type | Description |
|------------|-------------|
| **Contact** | Associated with an Account in the CRM |
| **Lead** | Standalone record, not yet qualified |

If the **Outreach** integration is active, you can also **Push to Outreach** from the same menus.

---

## Visitor Reveal Integration

Contacts identified from website visits appear automatically:

1. A visitor fills out a tracked form (or is otherwise identified).
2. Abmatic AI captures and enriches the contact.
3. The contact is linked to their company account.
4. It's available for targeting and CRM sync.

Revealed contacts live under **Visitor Reveal → Contacts** in the app. Each carries a **Reveal Confidence** value. For details, see [Contact Reveal](/visitor-tracking/contact-reveal).

---

## Best Practices

| Do | Don't |
|----|-------|
| Use work emails over personal | Import personal emails (Gmail, Yahoo) for the primary identifier |
| Create role-based segments | Skip job-title filters |
| Use Dynamic lists for ongoing nurture | Let lists go stale |
| Sync regularly with your CRM | Ignore duplicates |
| Link contacts to accounts | Create one huge list for all campaigns |

---

## Troubleshooting

### Contacts Not Importing

| Issue | Solution |
|-------|----------|
| Invalid email format | Check for typos; use standard format |
| Missing required fields | Ensure Work Email OR LinkedIn URL is present |
| Over the row limit | Keep imports under 10,000 rows |
| Encoding errors | Save as UTF-8 CSV |

### Collection Shows 0 Records

| Issue | Solution |
|-------|----------|
| Filters too restrictive | Remove filters one at a time |
| No matching data | Check the All Contacts tab |
| Dynamic collection just created | Give it time to populate |

### CRM Sync Issues

| Issue | Solution |
|-------|----------|
| Connection error | Re-authenticate the CRM integration in Settings |
| Fields not mapping | Check field permissions in your CRM |
| Sync delayed | Review the sync schedule and logs in Integrations |

---

## Related Documentation

- [Account Lists](/audiences/accounts) — Company-level targeting
- [Filters](/audiences/filters) — Complete guide to all available filters
- [CSV Import](/audiences/csv-import) — Detailed import guide
- [Contact Reveal](/visitor-tracking/contact-reveal) — Identify website visitors
- [CRM Sync](/audiences/crm-sync) — Configure synchronization
