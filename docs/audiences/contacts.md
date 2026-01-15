---
id: contacts
title: Contact Lists
sidebar_label: Contact Lists
sidebar_position: 3
---

# Contact Lists

Turn anonymous website visitors into qualified prospects. Abmatic AI's contact management gives you rich professional data on every person engaging with your brand—job titles, seniority levels, direct phone numbers, and engagement scores—so your sales team always knows who to call and what to say.

![Contacts Collections](/img/screenshots/contacts-list.png)

## Why Contact Intelligence Matters

| Without Contact Data | With Abmatic AI |
|---------------------|-----------------|
| Generic outreach to unknown visitors | Personalized messages to named individuals |
| Guessing who the decision-makers are | Know exact titles, seniority, and departments |
| Manual research wastes hours per prospect | Instant enrichment with 50+ data fields |
| Disconnected from account context | Every contact linked to their company |
| No visibility into engagement | See who's hot and ready to buy |

## Understanding Your Contact Views

### Collections Tab

Your saved contact lists organized by source and purpose:

| Collection Type | Description | Best For |
|----------------|-------------|----------|
| **Campaign Groups** | Auto-generated from campaign targeting | Tracking who saw your personalization |
| **HubSpot** | Synced from HubSpot CRM | Keeping CRM contacts in sync |
| **Salesforce** | Synced from Salesforce | Lead and contact synchronization |
| **CSV** | Imported from spreadsheets | Event lists, purchased data |
| **Abmatic** | Created with filters | Dynamic segments that auto-update |

### All Contacts Tab

View your complete contact database with powerful filtering:

![All Contacts Grid](/img/screenshots/contacts-all-grid.png)

**Quick filters at the top show:**
- Total contacts in database
- Breakdown by department (Marketing, Sales, Executive, etc.)
- Quick-click to filter by any segment

**The contact grid displays:**
- Work email and full name
- Temperature (Hot, Warm, Cold) for prioritization
- Website engagement score
- Job title and seniority
- Location and phone number

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
| **Title Level** | Know if they're a decision-maker (VP, Director, C-Level) |
| **Department** | Match messaging to their function |
| **Job Start Date** | New roles = higher likelihood to buy |

### Company Context

| Field | How To Use It |
|-------|--------------|
| **Company Name** | Coordinate with account-level campaigns |
| **Company Size** | Tailor messaging to company maturity |
| **Industry** | Use industry-specific value props |
| **Company LinkedIn** | Research company news and updates |

### Engagement Signals

| Field | Action To Take |
|-------|---------------|
| **Temperature** | Hot = call now, Warm = nurture, Cold = re-engage |
| **Engagement Score** | Higher scores = more interested |
| **Website Score** | Track page views and time on site |
| **Last Hot Date** | Strike while the iron is hot |

## Creating Contact Lists

### Method 1: Build with Filters (Dynamic)

Create lists that automatically update as contacts match your criteria:

1. Navigate to **Audiences > Contacts**
2. Click **+ Contact List**
3. Select **Build from Filters**
4. Add conditions using the filter builder:
   - Choose a field (e.g., "Job Title Level")
   - Select operator (e.g., "is any of")
   - Enter values (e.g., "Director", "VP", "C-Level")
5. Add more conditions with AND/OR logic
6. Click **Preview** to see matching contacts
7. Name your list and **Save**

**High-Impact Filter Examples:**

| Use Case | Filter Logic |
|----------|-------------|
| **Decision Makers** | Job Title Level is "Director" OR "VP" OR "C-Level" |
| **Marketing Contacts** | Department is "Marketing" |
| **Enterprise Companies** | Job Company Size is above 1,000 |
| **Engaged Prospects** | Temperature is "Hot" OR "Warm" |
| **Recent Job Changes** | Job Start Date is within last 90 days |

### Method 2: CSV Import

Import contacts from spreadsheets, event lists, or purchased data:

1. Click **+ Contact List**
2. Select **Upload CSV**
3. Upload your file (max 1,000 rows per import)
4. Map your columns to Abmatic fields:
   - **Work Email** (required) OR **LinkedIn URL** (required)
   - Map additional fields for better enrichment
5. Choose duplicate handling (skip, update, or create new)
6. Name your list and **Import**

**CSV Best Practices:**
- Include work email when possible (better match rates)
- Use UTF-8 encoding for international characters
- Headers must be in the first row
- Remove any personal email addresses

### Method 3: CRM Import

Pull contacts directly from your connected CRM:

1. Click **+ Contact List**
2. Select **Import from CRM**
3. Choose your CRM (Salesforce, HubSpot, or Pipedrive)
4. Build filters using CRM-native fields
5. Preview the matched contacts
6. Import to Abmatic

**What Gets Imported:**

| CRM | Record Types |
|-----|-------------|
| **Salesforce** | Contacts and Leads |
| **HubSpot** | Contacts |
| **Pipedrive** | Persons |

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

Don't have an email? No problem:

1. Import with LinkedIn URL as the primary identifier
2. Abmatic fetches profile data automatically
3. Work email discovered if publicly available
4. Contact linked to the matching company account

## Contact-Account Linking

Every contact is connected to their company account for coordinated ABM:

### Automatic Linking

Contacts link to accounts automatically by:

| Method | How It Works |
|--------|-------------|
| **Email Domain** | john@acme.com → Acme Inc. account |
| **Company Name** | Fuzzy matching to existing accounts |
| **CRM Association** | Preserves Salesforce/HubSpot relationships |

### View Account Contacts

See everyone at a target account:

1. Go to **Audiences > Accounts**
2. Click on an account
3. Select the **Contacts** tab
4. View all people at that company with engagement data

## Managing Your Contact Lists

### Quick Actions

| Action | How To |
|--------|--------|
| **Search** | Type name, email, or company in search bar |
| **Filter** | Click FILTERS to add conditions |
| **Sort** | Click any column header |
| **Export** | Click the download icon for CSV export |
| **Edit List** | Click the edit icon on a collection |

### Working with Collections

**Edit a collection:**
1. Open the collection
2. Click the edit icon
3. Modify filters or settings
4. Save changes

**Add contacts manually:**
1. Open a static collection
2. Click **Add Contacts**
3. Search or upload additional contacts

**Delete a collection:**
1. Select the collection(s)
2. Click **Delete**
3. Note: Contacts remain in database, only the list is removed

## CRM Synchronization

Keep your CRM and Abmatic in sync:

### Sync Directions

| Direction | What Happens |
|-----------|-------------|
| **CRM → Abmatic** | Import contacts to enrich and target |
| **Abmatic → CRM** | Push revealed contacts back to CRM |
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

Abmatic handles both CRM record types:

| Source Type | Description |
|------------|-------------|
| **Contact** | Associated with an Account in CRM |
| **Lead** | Standalone record, not yet qualified |

Both sync seamlessly and can be pushed back as either type.

## Person Reveal Integration

Contacts discovered through Person Reveal appear automatically:

### How It Works

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

## Best Practices

### Do's

| Practice | Why It Works |
|----------|-------------|
| Use work emails over personal | Higher match rates, better enrichment |
| Create role-based segments | Target decision-makers effectively |
| Sync regularly with CRM | Keep data fresh in both systems |
| Monitor engagement scores | Prioritize hot contacts for sales |
| Link contacts to accounts | Enable coordinated ABM campaigns |

### Don'ts

| Avoid | Why |
|-------|-----|
| Importing personal emails | Poor enrichment, wrong audience |
| Ignoring duplicates | Creates sync confusion |
| Stale contact lists | Outdated data hurts deliverability |
| Missing job title filters | Wastes time on wrong contacts |

### Data Quality Tips

1. **Verify emails** before import for better deliverability
2. **Clean bounces** regularly to maintain sender reputation
3. **Update job changes** as contacts move companies
4. **Remove opt-outs** promptly for compliance

## Troubleshooting

### Contacts Not Importing

| Issue | Solution |
|-------|----------|
| Invalid email format | Check for typos, use standard format |
| Missing required fields | Ensure email OR LinkedIn URL present |
| Over row limit | Split into multiple files (1,000 max) |
| Encoding errors | Save as UTF-8 CSV |

### Missing Enrichment Data

| Issue | Solution |
|-------|----------|
| Personal email used | Re-import with work email |
| LinkedIn URL incorrect | Verify URL is public profile |
| Too recent | Allow 24 hours for enrichment |
| No public data available | Contact may have limited online presence |

### CRM Sync Issues

| Issue | Solution |
|-------|----------|
| Connection error | Re-authenticate CRM integration |
| Fields not mapping | Check field permissions in CRM |
| Duplicates created | Enable duplicate detection in CRM |
| Sync delayed | Check sync schedule in Settings |

## Related Documentation

- [Account Lists](/audiences/accounts) - Manage company-level targeting
- [Target Groups](/audiences/target-groups) - Combine accounts and contacts
- [CSV Import](/audiences/csv-import) - Detailed import guide
- [Contact Reveal](/visitor-tracking/contact-reveal) - Identify website visitors
- [CRM Sync](/audiences/crm-sync) - Configure synchronization
