---
id: custom-fields
title: Custom Fields
sidebar_label: Custom Fields
sidebar_position: 4
---

# Custom Fields

Extend your account and contact data with custom fields to capture business-specific information that matters to your organization. Use custom fields for precise targeting, personalized messaging, and detailed reporting.

![Custom Fields settings showing the Accounts and Contacts accordions with the subtitle "Configure the custom fields for Accounts and Contacts"](/img/screenshots/set-custom-fields.png)

## Why Use Custom Fields?

Every business has unique data points that standard fields don't capture. Custom fields let you:

- **Target with precision** - Filter campaigns by account tier, product interest, customer status, or any custom attribute
- **Personalize at scale** - Insert custom field values into website content and AI Sequences
- **Sync your CRM data** - Map Salesforce and HubSpot custom fields to Abmatic AI for a unified view
- **Build better reports** - Segment and analyze performance by your custom dimensions

## Getting Started

### Access Custom Fields

1. Open **Settings** from the left icon sidebar
2. Click the **Custom Fields** tab in the top navigation
3. You'll see two expandable sections (accordions):
   - **Accounts** - Custom fields for company-level data
   - **Contacts** - Custom fields for person-level data

The page header reads "Configure the custom fields for Accounts and Contacts."

### Configure a Custom Field

1. Click the **Accounts** or **Contacts** accordion to expand it
2. Find the custom field slot you want to name (Custom Field 1, 2, 3, etc.)
3. Type a descriptive name for the field (e.g., "Account Tier", "Product Interest")
4. Changes save automatically as you type — there's no separate Save button

You can configure up to **30 custom fields** for accounts and **30 custom fields** for contacts.

## Common Use Cases

### Account Custom Fields

| Field Name | Example Values | Use Case |
|-----------|----------------|----------|
| Account Tier | Enterprise, Mid-Market, SMB | Personalize messaging by segment |
| Customer Status | Prospect, Customer, Churned | Target expansion campaigns |
| Industry Vertical | Healthcare, Finance, Tech | Industry-specific content |
| Account Owner | Sales rep name | Route leads appropriately |
| Contract Value | $50K, $100K, $500K | Prioritize high-value accounts |

### Contact Custom Fields

| Field Name | Example Values | Use Case |
|-----------|----------------|----------|
| Persona Type | Decision Maker, Influencer, User | Role-based messaging |
| Product Interest | Analytics, Automation, Integration | Relevant content delivery |
| Engagement Level | Hot, Warm, Cold | Prioritize outreach |
| Event Attended | Webinar, Conference, Demo | Follow-up campaigns |

## Using Custom Fields in Campaigns

### Target by Custom Field

When creating campaign audiences, custom fields appear as filter options:

1. Create or edit a campaign
2. In the targeting section, click **Add Filter**
3. Find your custom field under "Custom Fields (Account)" or "Custom Fields (Contact)"
4. Set your condition:
   - **is** / **is not** - Exact match
   - **contains** / **does not contain** - Partial match
   - **begins with** - Prefix match

**Example:** Target all Enterprise accounts interested in Analytics:
```
Account Tier is "Enterprise"
AND Product Interest contains "Analytics"
```

### Personalize Content

Insert custom field values in your website personalization:

```
{{account.field_01}}
```

**Example headline:**
```html
<h1>Solutions for {{account.field_01}} Companies</h1>
```

This displays "Solutions for Enterprise Companies" when an Enterprise account visits.

## Syncing with Your CRM

### Map CRM Custom Fields

Connect your CRM custom fields to Abmatic AI for automatic synchronization:

**Salesforce:**
1. Open the **Integrations** tab in Settings
2. Open your **Salesforce** integration settings
3. Go to field mapping
4. Map your Salesforce custom fields (e.g., `Account.Customer_Tier__c`) to Abmatic AI field slots

**HubSpot:**
1. Open the **Integrations** tab in Settings
2. Open your **HubSpot** integration settings
3. Go to property mapping
4. Map your HubSpot custom properties to Abmatic AI field slots

### Sync Direction

Configure how data flows between systems:

| Direction | What Happens |
|-----------|--------------|
| CRM → Abmatic AI | Import values from your CRM into Abmatic AI |
| Abmatic AI → CRM | Push Abmatic AI values back to your CRM |
| Two-way | Keep both systems in sync |

## Importing Custom Field Data

### Via CSV Import

Include custom fields when importing accounts or contacts:

1. Add columns named `field_01`, `field_02`, etc. to your CSV
2. Upload the CSV via **Accounts > Import from CSV**
3. Map the columns during import

**CSV Example:**
```csv
website,name,field_01,field_02
acme.com,Acme Inc,Enterprise,High Priority
techcorp.com,TechCorp,Mid-Market,Standard
```

### Via API

Update custom fields programmatically:

```json
{
  "website": "acme.com",
  "field_01": "Enterprise",
  "field_02": "High Priority"
}
```

## Best Practices

### Choose Clear Names

Use descriptive names that anyone on your team will understand:

| Instead of | Use |
|-----------|-----|
| Field 1 | Account Tier |
| Custom Data | Customer Success Manager |
| Status | Lifecycle Stage |

### Standardize Values

Consistent values make filtering reliable:

| Inconsistent | Standardized |
|--------------|--------------|
| enterprise, Enterprise, ENTERPRISE | Enterprise |
| SMB, Small, small-business | SMB |

### Document Your Fields

Keep a reference of which field slots contain what data, especially when syncing with your CRM.

### Plan for Growth

Reserve some field slots for future needs—you can always add more fields later.

## Troubleshooting

### Custom Field Not Appearing in Filters

1. Verify the field has a name configured in **Settings > Custom Fields**
2. Refresh your browser
3. Check that accounts/contacts have values in that field

### CRM Sync Not Working

1. Confirm the field mapping is saved in integration settings
2. Check that the CRM field has the correct permissions
3. Review sync logs for any errors
4. Verify sync direction allows import

### Wrong Values After Import

1. Check your CSV column headers match `field_01`, `field_02`, etc.
2. Verify the import mapping was correct
3. Ensure you didn't have duplicate mappings

## Related Documentation

- [Target Accounts](/audiences/accounts) - Use custom fields for account targeting
- [Contacts](/audiences/contacts) - Use custom fields for contact data
- [Salesforce Integration](/integrations/crm/salesforce) - Set up Salesforce field mapping
- [HubSpot Integration](/integrations/crm/hubspot) - Set up HubSpot property mapping
- [CSV Import](/audiences/csv-import) - Import accounts with custom field data
