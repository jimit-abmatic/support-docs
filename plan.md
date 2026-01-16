# Screenshot Quality Plan

ONE page at a time. ALL 4 checks per page. Fix everything before moving on.

## App Paths

| Page | Path |
|------|------|
| Dashboard | /home-dashboard |
| Campaigns | /campaigns |
| AI Agents | /ai-agents |
| Alex | /ai-agents/alex |
| Clara | /ai-agents/clara |
| Accounts | /accounts |
| Contacts | /contacts |
| Reveal | /reveal/accounts |
| Conversions | /conversions |
| Integrations | /integrations |
| Analytics | /analytics/reports |
| Settings | /settings/* |
| Install | /installation |

## Tasks

```json
{
  "tasks": [
    {"id": 1, "docPath": "docs/intro.md", "appPath": "/home-dashboard", "passes": true},
    {"id": 2, "docPath": "docs/getting-started/quick-start.md", "appPath": "/home-dashboard", "passes": true},
    {"id": 3, "docPath": "docs/getting-started/install-script.md", "appPath": "/installation", "passes": true},
    {"id": 4, "docPath": "docs/getting-started/first-campaign.md", "appPath": "/campaigns", "passes": true},
    {"id": 5, "docPath": "docs/getting-started/use-cases.md", "appPath": "/home-dashboard", "passes": true},
    {"id": 6, "docPath": "docs/getting-started/playbooks.md", "appPath": "/campaigns", "passes": true},
    {"id": 7, "docPath": "docs/getting-started/glossary.md", "appPath": "none", "passes": true},
    {"id": 10, "docPath": "docs/campaigns/overview.md", "appPath": "/campaigns", "passes": true},
    {"id": 11, "docPath": "docs/campaigns/website-personalization.md", "appPath": "/campaigns", "passes": true},
    {"id": 12, "docPath": "docs/campaigns/page-editor.md", "appPath": "/campaigns", "passes": true},
    {"id": 13, "docPath": "docs/campaigns/ab-testing.md", "appPath": "/campaigns", "passes": true},
    {"id": 14, "docPath": "docs/campaigns/dynamic-content.md", "appPath": "/campaigns", "passes": true},
    {"id": 15, "docPath": "docs/campaigns/linkedin-ads.md", "appPath": "/campaigns", "passes": true},
    {"id": 16, "docPath": "docs/campaigns/google-ads.md", "appPath": "/campaigns", "passes": true},
    {"id": 17, "docPath": "docs/campaigns/crm-campaigns.md", "appPath": "/campaigns", "passes": true},
    {"id": 18, "docPath": "docs/campaigns/email-campaigns.md", "appPath": "/campaigns", "passes": true},
    {"id": 20, "docPath": "docs/ai-agents/overview.md", "appPath": "/ai-agents", "passes": true},
    {"id": 21, "docPath": "docs/ai-agents/sdr-agent.md", "appPath": "/ai-agents/alex", "passes": true},
    {"id": 22, "docPath": "docs/ai-agents/abm-agent.md", "appPath": "/ai-agents/clara", "passes": true},
    {"id": 23, "docPath": "docs/ai-agents/configuration.md", "appPath": "/settings/ai-agents", "passes": true},
    {"id": 30, "docPath": "docs/audiences/overview.md", "appPath": "/accounts", "passes": true},
    {"id": 31, "docPath": "docs/audiences/accounts.md", "appPath": "/accounts", "passes": true},
    {"id": 32, "docPath": "docs/audiences/contacts.md", "appPath": "/contacts", "passes": true},
    {"id": 33, "docPath": "docs/audiences/target-groups.md", "appPath": "/accounts", "passes": true},
    {"id": 34, "docPath": "docs/audiences/filters.md", "appPath": "/accounts", "passes": true},
    {"id": 35, "docPath": "docs/audiences/csv-import.md", "appPath": "/accounts", "passes": true},
    {"id": 36, "docPath": "docs/audiences/crm-sync.md", "appPath": "/accounts", "passes": true},
    {"id": 37, "docPath": "docs/audiences/linkedin-dmp.md", "appPath": "/accounts", "passes": true},
    {"id": 38, "docPath": "docs/audiences/google-customer-match.md", "appPath": "/accounts", "passes": true},
    {"id": 40, "docPath": "docs/visitor-tracking/overview.md", "appPath": "/reveal/accounts", "passes": true},
    {"id": 41, "docPath": "docs/visitor-tracking/company-identification.md", "appPath": "/reveal/accounts", "passes": true},
    {"id": 42, "docPath": "docs/visitor-tracking/contact-reveal.md", "appPath": "/reveal/contacts", "passes": true},
    {"id": 43, "docPath": "docs/visitor-tracking/page-views.md", "appPath": "/reveal/accounts", "passes": true},
    {"id": 44, "docPath": "docs/visitor-tracking/form-tracking.md", "appPath": "/conversions", "passes": true},
    {"id": 50, "docPath": "docs/conversions/overview.md", "appPath": "/conversions", "passes": true},
    {"id": 51, "docPath": "docs/conversions/create-goals.md", "appPath": "/conversions", "passes": true},
    {"id": 52, "docPath": "docs/conversions/event-tracking.md", "appPath": "/conversions", "passes": true},
    {"id": 53, "docPath": "docs/conversions/form-tracking.md", "appPath": "/conversions", "passes": true},
    {"id": 54, "docPath": "docs/conversions/analytics.md", "appPath": "/conversions", "passes": true},
    {"id": 60, "docPath": "docs/integrations/overview.md", "appPath": "/integrations", "passes": true},
    {"id": 61, "docPath": "docs/integrations/crm/hubspot.md", "appPath": "/integrations", "passes": true},
    {"id": 62, "docPath": "docs/integrations/crm/hubspot-setup.md", "appPath": "/integrations", "passes": true},
    {"id": 63, "docPath": "docs/integrations/crm/salesforce.md", "appPath": "/integrations", "passes": true},
    {"id": 64, "docPath": "docs/integrations/crm/salesforce-setup.md", "appPath": "/integrations", "passes": true},
    {"id": 65, "docPath": "docs/integrations/crm/pipedrive.md", "appPath": "/integrations", "passes": true},
    {"id": 66, "docPath": "docs/integrations/crm/outreach.md", "appPath": "/integrations", "passes": true},
    {"id": 67, "docPath": "docs/integrations/crm/activecampaign.md", "appPath": "/integrations", "passes": true},
    {"id": 68, "docPath": "docs/integrations/crm/sync-behavior.md", "appPath": "/integrations", "passes": true},
    {"id": 69, "docPath": "docs/integrations/slack.md", "appPath": "/integrations", "passes": true},
    {"id": 70, "docPath": "docs/integrations/google-analytics.md", "appPath": "/integrations", "passes": true},
    {"id": 71, "docPath": "docs/integrations/segment.md", "appPath": "/integrations", "passes": true},
    {"id": 72, "docPath": "docs/integrations/advertising/linkedin-ads.md", "appPath": "/integrations", "passes": true},
    {"id": 73, "docPath": "docs/integrations/advertising/google-ads.md", "appPath": "/integrations", "passes": true},
    {"id": 80, "docPath": "docs/analytics/overview.md", "appPath": "/analytics/reports", "passes": true},
    {"id": 81, "docPath": "docs/analytics/reports.md", "appPath": "/analytics/reports", "passes": true},
    {"id": 82, "docPath": "docs/analytics/dashboards.md", "appPath": "/analytics/dashboards", "passes": true},
    {"id": 83, "docPath": "docs/analytics/campaign-performance.md", "appPath": "/analytics/reports", "passes": true},
    {"id": 84, "docPath": "docs/analytics/audience-insights.md", "appPath": "/analytics/reports", "passes": true},
    {"id": 90, "docPath": "docs/settings/account.md", "appPath": "/settings/account-info", "passes": true},
    {"id": 91, "docPath": "docs/settings/users.md", "appPath": "/settings/users", "passes": true},
    {"id": 92, "docPath": "docs/settings/billing.md", "appPath": "/settings/usage", "passes": true},
    {"id": 93, "docPath": "docs/settings/custom-fields.md", "appPath": "/settings/custom-fields", "passes": true},
    {"id": 94, "docPath": "docs/settings/notifications.md", "appPath": "/settings/notifications", "passes": true},
    {"id": 95, "docPath": "docs/settings/script-installation.md", "appPath": "/installation", "passes": true},
    {"id": 96, "docPath": "docs/settings/contact-reveal.md", "appPath": "/settings/contact-reveal", "passes": true},
    {"id": 97, "docPath": "docs/settings/data-export.md", "appPath": "/settings/export", "passes": true},
    {"id": 100, "docPath": "docs/troubleshooting/troubleshooting-overview.md", "appPath": "none", "passes": true},
    {"id": 101, "docPath": "docs/troubleshooting/script-issues.md", "appPath": "/installation", "passes": true},
    {"id": 102, "docPath": "docs/troubleshooting/crm-sync.md", "appPath": "/integrations", "passes": true},
    {"id": 103, "docPath": "docs/troubleshooting/campaign-issues.md", "appPath": "/campaigns", "passes": false},
    {"id": 104, "docPath": "docs/troubleshooting/common-errors.md", "appPath": "none", "passes": false},
    {"id": 110, "docPath": "docs/faq/general.md", "appPath": "various", "passes": false},
    {"id": 111, "docPath": "docs/faq/billing.md", "appPath": "/settings/usage", "passes": false},
    {"id": 112, "docPath": "docs/faq/campaigns.md", "appPath": "/campaigns", "passes": false},
    {"id": 113, "docPath": "docs/faq/integrations.md", "appPath": "/integrations", "passes": false},
    {"id": 120, "docPath": "docs/api/overview.md", "appPath": "none", "passes": false},
    {"id": 121, "docPath": "docs/api/javascript-sdk.md", "appPath": "none", "passes": false},
    {"id": 122, "docPath": "docs/changelog.md", "appPath": "various", "passes": false},
    {"id": 200, "docPath": "DEPLOY", "appPath": "all", "passes": false}
  ]
}
```

## Deploy Task (ID 200)

When all pages done:
1. `npm run build`
2. `aws s3 sync build s3://support-abmatic-ai --delete`
3. `aws cloudfront create-invalidation --distribution-id EWO3Z3VNLFUQ2 --paths "/*"`
4. Verify https://support.abmatic.ai
