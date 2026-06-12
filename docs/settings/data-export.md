---
id: data-export
title: Data Export
sidebar_label: Exports
sidebar_position: 7
---

# Data Export

Export your Abmatic AI data to CSV files for offline analysis, reporting, or integration with other tools. The **Exports** page provides a centralized view of all your exports and easy access to download completed files.

## Why Export Your Data?

Exporting data from Abmatic AI enables you to:

- **Create custom reports** - Build tailored analyses in Excel, Google Sheets, or BI tools
- **Share with stakeholders** - Distribute account and contact data to team members without platform access
- **Backup important data** - Maintain offline copies of your target account lists
- **Feed other systems** - Import data into tools that don't have direct integrations
- **Compliance requirements** - Export data for audits or regulatory needs

## Accessing Data Export

1. Open **Settings** from the left icon sidebar
2. Click the **Exports** tab in the top navigation (`/settings/export`)

![Exports page showing the export history table with File Name, No. of Records, Exported At, and Action columns, plus a Search box, Filters dropdown, and Sort By control](/img/screenshots/set-export.png)

## Understanding the Export History

The Exports page shows a table of all your past exports. Above the table you'll find a **Search** box, a **Filters** dropdown, a row-count selector (for example, "Rows: 25"), and a **Sort By** control with a refresh button.

| Column | Description |
|--------|-------------|
| **File Name** | The name you assigned when creating the export |
| **No. of Records** | Total number of accounts or contacts included |
| **Exported At** | Date and time when the export was created |
| **Action** | A **Download** link, or the export's current status |

### Export Statuses

The **Action** column reflects where each export is in its lifecycle:

- **Download** - The export is complete and ready to download
- **Processing** - The export is still being generated (usually takes a few minutes)
- **Pushed** - The data was sent directly to Salesforce instead of producing a downloadable file (only appears when you export straight to a connected Salesforce org)

## How to Export Data

You can export data from several places in Abmatic AI:

### Export from Accounts

1. Go to **Audiences > Accounts**
2. Optionally apply filters to narrow down your selection
3. Select specific accounts using checkboxes, or leave unselected to export all
4. Click the **Export** button in the toolbar
5. Enter a file name (letters, numbers, underscores, and hyphens only)
6. Click **Export** to start the process

### Export from Contacts

1. Go to **Audiences > Contacts**
2. Apply any desired filters
3. Select specific contacts or leave unselected for all
4. Click **Export** and name your file
5. Click **Export** to begin

### Export from Target Groups

When viewing a specific target group:
1. The export will include only accounts in that group
2. Any active filters will be applied to the export

## Downloading Your Export

Once processing is complete:

1. Open **Settings → Exports**
2. Find your export in the table
3. Click the **Download** link in the **Action** column
4. The CSV file downloads (it may open in a new browser tab first)

You'll also receive an email with a download link when your export is ready.

## Export File Contents

### Account Exports Include:
- Company name and domain
- Industry and employee count
- Location information
- Engagement scores
- Custom field values
- CRM sync status

### Contact Exports Include:
- Name and email
- Job title and department
- Company association
- Contact source
- Custom field values

## Best Practices

### For Sales Teams
- Export accounts assigned to your territory for offline access
- Create weekly exports to track pipeline changes
- Export high-intent accounts for focused outreach lists

### For Marketing Teams
- Export campaign audiences for external email platforms
- Generate lists for direct mail campaigns
- Create segments for event invitations

### For Operations Teams
- Regular exports for data quality audits
- Backup exports before major data changes
- Generate compliance reports as needed

## Tips for Managing Exports

1. **Use descriptive file names** - Include date and purpose (e.g., "enterprise-accounts-jan-2026")
2. **Export incrementally** - Filter by date ranges for manageable file sizes
3. **Clean up regularly** - Old exports remain available but keep your list organized

## Troubleshooting

### Export stuck on "Processing"
- Large exports (tens of thousands of records) can take several minutes
- Refresh the page to check for updates
- If a large export has been processing for a long time, contact support

### Download link not working
- Links may expire after extended periods
- Re-export the data if needed
- Check your browser's popup blocker settings

### Missing data in export
- Verify your filter settings before exporting
- Ensure you have permission to access all requested records
- Contact support if data appears incomplete

## Related Topics

- [Target Accounts](/audiences/accounts) - Managing your account lists
- [Contacts](/audiences/contacts) - Working with contact data
- [Custom Fields](/settings/custom-fields) - Adding custom data fields
