---
id: salesforce
title: Salesforce Integration
sidebar_label: Salesforce
sidebar_position: 1
---

# Salesforce Integration

Connect Abmatic AI with Salesforce to sync accounts, contacts, and opportunities between platforms.

## Overview

The Salesforce integration enables:

- **Two-way sync** - Sync accounts, contacts, and opportunities
- **Field mapping** - Map custom fields between systems
- **Import from Salesforce** - Import lists and reports from Salesforce
- **Campaign attribution** - Track campaign influence in Salesforce

## Connecting Salesforce

1. Navigate to **Integrations** in the left sidebar
2. Find **Salesforce** and click **Connect**
3. You'll be redirected to Salesforce to authorize access
4. Log in and grant Abmatic the requested permissions
5. You'll be returned to Abmatic with the connection active

## Sync Configuration

### What Syncs

| Salesforce Object | Abmatic Object |
|-------------------|----------------|
| Accounts | Accounts |
| Contacts | Contacts |
| Leads | Contacts |
| Opportunities | (Opportunity data) |

### Sync Direction

Choose your sync direction:

- **Salesforce to Abmatic** - Import data from Salesforce
- **Abmatic to Salesforce** - Push data to Salesforce
- **Two-way** - Sync in both directions

### Field Mapping

Map Salesforce fields to Abmatic fields:

1. Go to integration settings
2. Click **Field Mapping**
3. Map Salesforce fields to Abmatic fields
4. Save mappings

## Importing from Salesforce

Import accounts or contacts from Salesforce:

1. Go to **Audiences** > **Accounts** or **Contacts**
2. Click **Create New** > **From CRM**
3. Select **Salesforce**
4. Choose a list, view, or report to import
5. Review and import

## Pushing to Salesforce

Push Abmatic data to Salesforce:

1. Select accounts or contacts
2. Click **Push to CRM**
3. Select **Salesforce**
4. Map fields and confirm
5. Data will sync to Salesforce

## Troubleshooting

### Connection Issues

- Ensure you have admin access in Salesforce
- Check that API access is enabled
- Try disconnecting and reconnecting

### Sync Not Working

- Verify field mappings are correct
- Check sync direction settings
- Review sync logs for errors

## Related

- [Integrations Overview](/integrations/overview)
- [HubSpot Integration](/integrations/crm/hubspot)
- [Audiences Overview](/audiences/overview)
