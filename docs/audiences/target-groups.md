---
id: target-groups
title: Target Groups
sidebar_label: Target Groups
sidebar_position: 4
---

# Target Groups

In Abmatic AI, a "target group" is simply a **Collection** — a saved group of accounts or contacts that powers your campaigns. The product calls these **Collections** (and the lists themselves **Account Lists** and **Contact Lists**). This page is the conceptual guide to organizing your audiences into reusable segments.

![The Collections view — the live "target groups" in Abmatic AI](/img/screenshots/tg-collections.png)

## Why Collections Matter

| Before Collections | With Collections |
|---------------------|-------------------|
| Broad campaigns targeting everyone | Precision targeting per segment |
| Manual list management in spreadsheets | Dynamic lists that update automatically |
| Disconnected data across platforms | One audience synced everywhere |
| Hours building campaign audiences | Reusable groups ready to activate |

A Collection is a container for an audience. Once created, it can power website personalization, ad campaigns, sequences, and CRM sync.

---

## Static vs. Dynamic: The Key Decision

Every time you create a Collection, you choose between Static and Dynamic.

| Feature | Static | Dynamic |
|---------|-------------|---------------|
| **Membership** | Fixed at creation | Continuously updated |
| **New matches added?** | No | Yes, automatically |
| **Manual edits** | You can add/remove records | Controlled by filters only |
| **Preview before save?** | Yes — estimated count | Saves immediately, then populates |
| **Ideal for** | One-time campaigns, fixed ABM tiers, event attendees | Ongoing campaigns, always-on targeting |

:::tip Best practice for most teams
Start with Dynamic Collections for your core ICP segments — they need zero maintenance. Reserve Static for hand-curated, fixed lists.
:::

---

## Collection Types at a Glance

| Type | Best For | Example |
|------|----------|---------|
| **Dynamic** | Audiences that change based on criteria | "All Software companies with 50+ employees" |
| **Static** (Abmatic Filters) | Fixed, manually curated lists | "Q1 ABM Target List" |
| **CSV** | Existing lists from spreadsheets | Event attendees, purchased lists |
| **CRM** (Salesforce / HubSpot / Pipedrive / ActiveCampaign) | Lists pulled from your CRM | Synced opportunities, campaign members |
| **Auto Generated** | System-created lists | Visitor Reveal companies, campaign audiences |

---

## Creating a Collection

### Step 1: Choose your approach

Open **Accounts** (or **Contacts**) and click **+ Account List** (or **+ Contact List**).

![The create/import dialog with Import and Create options](/img/screenshots/aud-create-modal.png)

The dialog has two sections:

**Import**
- **Upload from CSV** — you have a spreadsheet of accounts or contacts
- **Import from CRM** — pull lists from Salesforce, HubSpot, Pipedrive, or ActiveCampaign

**Create**
- **Static Collection** — a fixed list from filters applied once
- **Dynamic Collection** — an auto-updating list from filters that run continuously

### Step 2: Define your audience with filters

Both Static and Dynamic Collections use the same filter builder. Each rule has three parts:

1. **Selector** — the data field (e.g. Industry, Employee Count, Country)
2. **Operator** — how to match (e.g. *is*, *is above*, *contains*)
3. **Value** — what to match against (e.g. *Software*, *500*, *United States*)

To add a rule: choose the **Selector**, choose the **Operator**, enter the **Value**, then click the **checkmark** to confirm. Click **+ RULE** for more conditions (combined with AND), then **Save** (Static) or **Save Dynamic Collection** (Dynamic).

For the complete operator and field reference, see [Filters](/audiences/filters).

### Step 3: Name and activate

Give your Collection a descriptive name that captures its purpose, criteria, and (optionally) date:

- `2026-Q1-ABM-Enterprise-Tech`
- `Inbound-Mid-Market-USA`
- `Event-Attendees-SaaStr-2026`

Avoid names like `List 1`, `Test`, or `New list`.

---

## Filter Operators (Quick Reference)

These are the operator labels shown in the builder. See [Filters](/audiences/filters) for the full reference with examples.

**Text:** is · is not · contains · does not contain · begins with · ends with

**Numeric:** is · is above · is below · is between

**List / multi-value:** is any of · is none of

### Combining conditions

Use **AND** for stricter targeting and **OR** for broader reach. The builder also supports **Groups** — nested AND/OR blocks for complex logic.

![A campaign audience filter using nested AND/OR groups](/img/screenshots/filt-groups.png)

This example from the "Inbound Enterprise" campaign shows:

1. **Country** is any of: Canada, US, UK, Germany, France, Spain, Italy
2. **AND Account List** is none of: Abmatic AI Customer List (excludes existing customers)
3. **AND** a grouped OR condition:
   - **Employee Count** is above 501
   - **OR Company Size** is any of: 501-1000, 1001-5000, 5001-10000, 10001+

---

## Real-World Use Cases

### For ABM Marketers

| Use Case | Type | How to Build It |
|----------|------|-----------------|
| **Tier-1 Named Accounts** | Static | Hand-pick your top 50 companies |
| **ICP-Matching Companies** | Dynamic | Industry + Employee Count + Country filters |
| **Competitor Customers** | Static (CSV) | Upload a list of known competitor users |

### For Demand Gen

| Use Case | Type | How to Build It |
|----------|------|-----------------|
| **High-Intent Visitors** | Dynamic | Temperature is "Hot" |
| **Webinar Follow-Up** | Static (CSV) | Upload the attendee list |
| **Retargeting Pool** | Dynamic | Use the Visitor Reveal collection |

### For Sales

| Use Case | Type | How to Build It |
|----------|------|-----------------|
| **My Territory** | Dynamic | Country + Region matching your territory |
| **Stalled Deals** | CRM Import | Opportunities stuck in a stage for 30+ days |
| **New Logo Prospects** | Dynamic | Accounts NOT in your CRM customer list |

---

## Collection Status

After you create or import a Collection, it processes in the background:

| Status | What It Means |
|--------|---------------|
| **Draft** | Created, not yet processed |
| **Preview** | Sample data fetched (estimated count shown) |
| **Processing** | Currently building the list |
| **Done** | Complete and ready to use |
| **Error** | Something went wrong — check filters or contact support |

---

## Using Collections in Campaigns

| Channel | How It Works |
|---------|--------------|
| **Website Personalization** | In a campaign's **Audience** tab, add an **Account List** condition and choose your Collection |
| **Ads (LinkedIn, Google)** | Push a Collection to the ad platform as a matched audience |
| **Sequences / Agentic** | Select a contact Collection for AI-personalized outreach |
| **CRM Sync** | Enable auto-push so new members sync to your CRM automatically |

---

## Auto-Generated Collections

Abmatic AI creates some Collections for you automatically:

### Visitor Reveal

![An auto-generated collection populated by Visitor Reveal](/img/screenshots/tg-auto-generated.png)

- Created when Visitor Reveal is active
- Contains all identified visitor companies
- Updates in real time and can't be deleted

### Campaign Audience Groups

- Auto-generated for each campaign you create
- Track which accounts/contacts are in each campaign's audience

### User Associated Lists & Form Submission Groups

- **User Associated Lists** show accounts a user is associated with (recent activity), useful for territory targeting.
- **Form Submission** groups are generated for tracked forms on your website.

:::note
Auto-generated naming patterns can change as the product evolves. The summary cards let you filter to **Auto Generated** collections regardless of their exact names.
:::

---

## Managing Collections

| Action | How To |
|--------|--------|
| **Search** | Use the search bar above the grid |
| **Filter by type** | Click a summary card (Dynamic, CSV, Auto Generated, etc.) |
| **Sort** | Use the **Sort By** dropdown (default: Last Updated At) |
| **Rename** | Click the name to edit inline |
| **Edit filters** | Open the Collection, change conditions, save |
| **Delete** | Select with checkboxes, then Delete (records remain, just unlinked) |

### Duplicate Handling for Imports

| Option | When to Use |
|--------|-------------|
| **Skip and keep existing fields** | Preserve manual updates; don't overwrite |
| **Overwrite existing fields** | Complete refresh with new data |
| **Update only missing fields** | Fill in blanks, keep existing values |

---

## Best Practices

- **Smaller, focused Collections** process faster and target better than large, generic ones.
- **Use Dynamic Collections** for always-current audiences — they remove manual maintenance.
- **Use consistent naming**: `[Purpose]-[Criteria]-[Region/Date]`, e.g. `ABM-Enterprise-Tech-USA`.
- **Review group sizes weekly** and archive completed-campaign collections.

---

## Troubleshooting

### Stuck in Processing

| Cause | Solution |
|-------|----------|
| Very large group | Wait longer — large groups take time |
| Complex filters | Simplify or split into multiple collections |
| System backlog | Wait, then contact support |

### Records Not Appearing

| Cause | Solution |
|-------|----------|
| Filters match nothing | Adjust criteria; use Preview to check |
| Invalid identifier (website/email) | Check data format |
| Dynamic collection just created | Give it time to populate |

### CRM Sync Not Working

| Cause | Solution |
|-------|----------|
| CRM disconnected | Reconnect in Integrations |
| Auto-push disabled | Enable it in CRM settings |
| Field mapping errors | Review and fix the mappings |

---

## Next Steps

- [Account Lists](/audiences/accounts) — Deep dive into account management
- [Contact Lists](/audiences/contacts) — Contact-specific features
- [Filters](/audiences/filters) — Master the filter builder
- [CSV Import](/audiences/csv-import) — Import best practices
- [CRM Sync](/audiences/crm-sync) — Sync configuration
