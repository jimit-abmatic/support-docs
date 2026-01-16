---
sidebar_position: 7
---

# Data Export

Export your Abmatic AI data to CSV files for offline analysis, reporting, or integration with other tools. The Data Export page provides a centralized view of all your exports and easy access to download completed files.

## Why Export Your Data?

Exporting data from Abmatic AI enables you to:

- **Create custom reports** - Build tailored analyses in Excel, Google Sheets, or BI tools
- **Share with stakeholders** - Distribute account and contact data to team members without platform access
- **Backup important data** - Maintain offline copies of your target account lists
- **Feed other systems** - Import data into tools that don't have direct integrations
- **Compliance requirements** - Export data for audits or regulatory needs

## Accessing Data Export

Navigate to **Settings > Data Export** to view all your export history.

![Data Export page showing export history](/img/screenshots/settings-data-export.png)

## Understanding the Export History

The Data Export page displays a table with all your exports:

| Column | Description |
|--------|-------------|
| **File Name** | The name you assigned when creating the export |
| **No. of Records** | Total number of accounts or contacts included |
| **Exported At** | Date and time when the export was created |
| **Action** | Download link or processing status |

### Export Statuses

- **Download** - Export is complete and ready to download
- **Processing** - Export is being generated (usually takes a few minutes)
- **Pushed** - Data was exported directly to Salesforce

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

1. Go to **Settings > Data Export**
2. Find your export in the table
3. Click the **Download** button
4. The CSV file will open in a new tab for download

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
- Large exports may take several minutes
- Refresh the page to check for updates
- Contact support if processing exceeds 30 minutes

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
