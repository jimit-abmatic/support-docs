---
id: hubspot
title: HubSpot Integration
sidebar_label: HubSpot
sidebar_position: 2
---

# HubSpot Integration

Connect Abmatic AI with HubSpot to sync accounts, contacts, and companies between platforms.

## Overview

The HubSpot integration enables:

- **Two-way sync** - Sync companies, contacts, and deals
- **Field mapping** - Map custom fields between systems
- **Import from HubSpot** - Import lists and views from HubSpot

## Connecting HubSpot

1. Navigate to **Integrations** in the left sidebar
2. Find **HubSpot** and click **Connect**
3. You'll be redirected to HubSpot to authorize access
4. Grant Abmatic the requested permissions
5. You'll be returned to Abmatic with the connection active

## Sync Configuration

### What Syncs

| HubSpot Object | Abmatic Object |
|----------------|----------------|
| Companies | Accounts |
| Contacts | Contacts |
| Deals | (Opportunity data) |

### Sync Direction

Choose your sync direction:

- **HubSpot to Abmatic** - Import data from HubSpot
- **Abmatic to HubSpot** - Push data to HubSpot
- **Two-way** - Sync in both directions

### Field Mapping

Map HubSpot properties to Abmatic fields:

1. Go to integration settings
2. Click **Field Mapping**
3. Map HubSpot properties to Abmatic fields
4. Save mappings

## Importing from HubSpot

Import accounts or contacts from HubSpot:

1. Go to **Audiences** > **Accounts** or **Contacts**
2. Click **Create New** > **From CRM**
3. Select **HubSpot**
4. Choose a list or view to import
5. Review and import

## Pushing to HubSpot

Push Abmatic data to HubSpot:

1. Select accounts or contacts
2. Click **Push to CRM**
3. Select **HubSpot**
4. Map fields and confirm
5. Data will sync to HubSpot

## Troubleshooting

### Connection Issues

- Ensure you have admin access in HubSpot
- Try disconnecting and reconnecting
- Check HubSpot API limits

### Sync Not Working

- Verify field mappings are correct
- Check sync direction settings
- Review sync logs for errors

## Related

- [Integrations Overview](/integrations/overview)
- [Salesforce Integration](/integrations/crm/salesforce)
- [Audiences Overview](/audiences/overview)
