# Screenshot Quality Improvement Plan

## Overview

This plan addresses 4 critical screenshot quality issues:
1. **INSUFFICIENT** - Pages need more screenshots
2. **INCORRECT** - Screenshots captured too early (blank/loading)
3. **INCOMPLETE** - Screenshots show login page
4. **NON-CONTEXTUAL** - Screenshots don't match text

## Phase Structure

- **Phase 1**: Audit (tasks 1-5) - Identify all issues
- **Phase 2**: Insufficient (tasks 10-39) - Add missing screenshots
- **Phase 3**: Incorrect (tasks 40-59) - Fix timing issues
- **Phase 4**: Incomplete (tasks 60-79) - Fix login page issues
- **Phase 5**: Contextual (tasks 80-99) - Match screenshots to text
- **Phase 6**: Deploy (task 100) - Deploy and verify

## App Paths Reference

| Feature | App Path |
|---------|----------|
| Dashboard | /home-dashboard |
| AI Agents Hub | /ai-agents |
| Alex (SDR Agent) | /ai-agents/alex |
| Clara (ABM Agent) | /ai-agents/clara |
| Campaigns List | /campaigns |
| Accounts | /accounts |
| Contacts | /contacts |
| Groups | /groups |
| Visitor Reveal | /reveal/accounts |
| Contact Reveal | /reveal/contacts |
| Conversions | /conversions |
| Integrations | /integrations |
| Analytics Reports | /analytics/reports |
| Analytics Dashboards | /analytics/dashboards |
| Settings Account | /settings/account-info |
| Settings Users | /settings/users |
| Settings Billing | /settings/usage |
| Installation | /installation |

## Tasks

```json
{
  "tasks": [
    {
      "id": 1,
      "phase": 1,
      "type": "audit",
      "description": "AUDIT: Run full screenshot quality audit",
      "docPath": "all",
      "appPath": "all",
      "steps": [
        "Run: npx ts-node scripts/screenshots/multi-capture.ts audit",
        "Document all files with issues in activity.md",
        "List files with score < 50",
        "List files < 50KB (likely blank)",
        "Create prioritized fix list"
      ],
      "passes": true
    },
    {
      "id": 2,
      "phase": 1,
      "type": "audit",
      "description": "AUDIT: Check Getting Started docs for screenshot gaps",
      "docPath": "docs/getting-started/",
      "appPath": "various",
      "steps": [
        "Read all files in docs/getting-started/",
        "Count screenshots per doc",
        "Identify steps without screenshots",
        "List missing screenshots in activity.md"
      ],
      "passes": false
    },
    {
      "id": 3,
      "phase": 1,
      "type": "audit",
      "description": "AUDIT: Check Campaigns docs for screenshot gaps",
      "docPath": "docs/campaigns/",
      "appPath": "various",
      "steps": [
        "Read all files in docs/campaigns/",
        "Count screenshots per doc",
        "Identify steps without screenshots",
        "List missing screenshots in activity.md"
      ],
      "passes": false
    },
    {
      "id": 4,
      "phase": 1,
      "type": "audit",
      "description": "AUDIT: Check Integrations docs for screenshot gaps",
      "docPath": "docs/integrations/",
      "appPath": "various",
      "steps": [
        "Read all files in docs/integrations/",
        "Count screenshots per doc",
        "Identify steps without screenshots",
        "List missing screenshots in activity.md"
      ],
      "passes": false
    },
    {
      "id": 5,
      "phase": 1,
      "type": "audit",
      "description": "AUDIT: Check all other docs for screenshot gaps",
      "docPath": "docs/",
      "appPath": "various",
      "steps": [
        "Read remaining docs (audiences, analytics, settings, etc.)",
        "Count screenshots per doc",
        "Identify steps without screenshots",
        "Create master list of all gaps"
      ],
      "passes": false
    },
    {
      "id": 10,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Quick Start guide needs step-by-step screenshots",
      "docPath": "docs/getting-started/quick-start.md",
      "appPath": "/home-dashboard",
      "screenshots_needed": [
        "quick-start-dashboard-overview",
        "quick-start-navigation",
        "quick-start-first-steps",
        "quick-start-script-install",
        "quick-start-verification"
      ],
      "passes": false
    },
    {
      "id": 11,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Script Installation needs visual guide",
      "docPath": "docs/getting-started/install-script.md",
      "appPath": "/installation",
      "screenshots_needed": [
        "install-script-page",
        "install-script-code-block",
        "install-script-copy-button",
        "install-script-verification-pending",
        "install-script-verification-success"
      ],
      "passes": false
    },
    {
      "id": 12,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: First Campaign needs complete workflow screenshots",
      "docPath": "docs/getting-started/first-campaign.md",
      "appPath": "/campaigns",
      "screenshots_needed": [
        "first-campaign-list",
        "first-campaign-create-button",
        "first-campaign-wizard-step1",
        "first-campaign-wizard-step2",
        "first-campaign-wizard-step3",
        "first-campaign-editor",
        "first-campaign-publish",
        "first-campaign-live"
      ],
      "passes": false
    },
    {
      "id": 13,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: AI Agents Overview needs hub screenshots",
      "docPath": "docs/ai-agents/overview.md",
      "appPath": "/ai-agents",
      "screenshots_needed": [
        "ai-agents-hub-full",
        "ai-agents-alex-card",
        "ai-agents-clara-card",
        "ai-agents-selection"
      ],
      "passes": false
    },
    {
      "id": 14,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Alex SDR Agent needs conversation screenshots",
      "docPath": "docs/ai-agents/sdr-agent.md",
      "appPath": "/ai-agents/alex",
      "screenshots_needed": [
        "alex-chat-interface",
        "alex-account-research",
        "alex-response-example",
        "alex-suggested-actions",
        "alex-export-options"
      ],
      "passes": false
    },
    {
      "id": 15,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Clara ABM Agent needs campaign screenshots",
      "docPath": "docs/ai-agents/abm-agent.md",
      "appPath": "/ai-agents/clara",
      "screenshots_needed": [
        "clara-chat-interface",
        "clara-campaign-analysis",
        "clara-recommendations",
        "clara-insights"
      ],
      "passes": false
    },
    {
      "id": 16,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Campaigns Overview needs list and filter screenshots",
      "docPath": "docs/campaigns/overview.md",
      "appPath": "/campaigns",
      "screenshots_needed": [
        "campaigns-list-full",
        "campaigns-filter-options",
        "campaigns-status-indicators",
        "campaigns-actions-menu"
      ],
      "passes": false
    },
    {
      "id": 17,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Website Personalization needs editor screenshots",
      "docPath": "docs/campaigns/website-personalization.md",
      "appPath": "/campaigns",
      "screenshots_needed": [
        "wp-campaign-create",
        "wp-target-selection",
        "wp-page-editor-overview",
        "wp-element-selection",
        "wp-content-edit",
        "wp-preview-mode",
        "wp-publish-flow"
      ],
      "passes": false
    },
    {
      "id": 18,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Page Editor needs detailed tool screenshots",
      "docPath": "docs/campaigns/page-editor.md",
      "appPath": "/campaigns",
      "screenshots_needed": [
        "editor-toolbar",
        "editor-element-panel",
        "editor-style-options",
        "editor-dynamic-tokens",
        "editor-preview-desktop",
        "editor-preview-mobile"
      ],
      "passes": false
    },
    {
      "id": 19,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: A/B Testing needs variation screenshots",
      "docPath": "docs/campaigns/ab-testing.md",
      "appPath": "/campaigns",
      "screenshots_needed": [
        "ab-create-variation",
        "ab-variation-list",
        "ab-traffic-split",
        "ab-results-comparison"
      ],
      "passes": false
    },
    {
      "id": 20,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Dynamic Content needs token screenshots",
      "docPath": "docs/campaigns/dynamic-content.md",
      "appPath": "/campaigns",
      "screenshots_needed": [
        "dynamic-token-picker",
        "dynamic-token-inserted",
        "dynamic-fallback-value",
        "dynamic-preview-personalized"
      ],
      "passes": false
    },
    {
      "id": 21,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: LinkedIn Ads Campaign screenshots",
      "docPath": "docs/campaigns/linkedin-ads.md",
      "appPath": "/campaigns",
      "screenshots_needed": [
        "linkedin-campaign-create",
        "linkedin-audience-sync",
        "linkedin-campaign-active"
      ],
      "passes": false
    },
    {
      "id": 22,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Google Ads Campaign screenshots",
      "docPath": "docs/campaigns/google-ads.md",
      "appPath": "/campaigns",
      "screenshots_needed": [
        "google-ads-campaign-create",
        "google-ads-audience-sync",
        "google-ads-campaign-active"
      ],
      "passes": false
    },
    {
      "id": 23,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Accounts page needs data screenshots",
      "docPath": "docs/audiences/accounts.md",
      "appPath": "/accounts",
      "screenshots_needed": [
        "accounts-list-full",
        "accounts-detail-view",
        "accounts-engagement-score",
        "accounts-activity-timeline"
      ],
      "passes": false
    },
    {
      "id": 24,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Contacts page needs list screenshots",
      "docPath": "docs/audiences/contacts.md",
      "appPath": "/contacts",
      "screenshots_needed": [
        "contacts-list-full",
        "contacts-detail-view",
        "contacts-filters"
      ],
      "passes": false
    },
    {
      "id": 25,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Target Groups needs filter builder screenshots",
      "docPath": "docs/audiences/target-groups.md",
      "appPath": "/accounts",
      "screenshots_needed": [
        "groups-list",
        "groups-create-wizard",
        "groups-filter-builder",
        "groups-preview"
      ],
      "passes": false
    },
    {
      "id": 26,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: CSV Import needs step-by-step screenshots",
      "docPath": "docs/audiences/csv-import.md",
      "appPath": "/accounts/upload-from-csv",
      "screenshots_needed": [
        "csv-upload-page",
        "csv-file-selected",
        "csv-column-mapping",
        "csv-import-progress",
        "csv-import-complete"
      ],
      "passes": false
    },
    {
      "id": 27,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Visitor Tracking needs reveal screenshots",
      "docPath": "docs/visitor-tracking/overview.md",
      "appPath": "/reveal/accounts",
      "screenshots_needed": [
        "reveal-accounts-list",
        "reveal-account-detail",
        "reveal-page-views",
        "reveal-timeline"
      ],
      "passes": false
    },
    {
      "id": 28,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Contact Reveal needs contact screenshots",
      "docPath": "docs/visitor-tracking/contact-reveal.md",
      "appPath": "/reveal/contacts",
      "screenshots_needed": [
        "contact-reveal-list",
        "contact-reveal-detail",
        "contact-reveal-settings"
      ],
      "passes": false
    },
    {
      "id": 29,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Conversions needs goal screenshots",
      "docPath": "docs/conversions/overview.md",
      "appPath": "/conversions",
      "screenshots_needed": [
        "conversions-dashboard",
        "conversions-goal-list",
        "conversions-metrics"
      ],
      "passes": false
    },
    {
      "id": 30,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Create Goals needs wizard screenshots",
      "docPath": "docs/conversions/create-goals.md",
      "appPath": "/conversions/manage",
      "screenshots_needed": [
        "goals-create-button",
        "goals-type-selection",
        "goals-configuration",
        "goals-save-confirmation"
      ],
      "passes": false
    },
    {
      "id": 31,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: HubSpot Integration needs setup flow",
      "docPath": "docs/integrations/crm/hubspot.md",
      "appPath": "/integrations",
      "screenshots_needed": [
        "hubspot-integration-card",
        "hubspot-connect-button",
        "hubspot-oauth-flow",
        "hubspot-connected-status",
        "hubspot-sync-settings"
      ],
      "passes": false
    },
    {
      "id": 32,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Salesforce Integration needs setup flow",
      "docPath": "docs/integrations/crm/salesforce.md",
      "appPath": "/integrations",
      "screenshots_needed": [
        "salesforce-integration-card",
        "salesforce-connect-button",
        "salesforce-oauth-flow",
        "salesforce-connected-status"
      ],
      "passes": false
    },
    {
      "id": 33,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Slack Integration needs notification screenshots",
      "docPath": "docs/integrations/slack.md",
      "appPath": "/settings/slack",
      "screenshots_needed": [
        "slack-connect-button",
        "slack-channel-selection",
        "slack-notification-settings",
        "slack-example-notification"
      ],
      "passes": false
    },
    {
      "id": 34,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Analytics Reports needs data screenshots",
      "docPath": "docs/analytics/reports.md",
      "appPath": "/analytics/reports",
      "screenshots_needed": [
        "reports-list-view",
        "reports-create-new",
        "reports-chart-example",
        "reports-export-options"
      ],
      "passes": false
    },
    {
      "id": 35,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Analytics Dashboards needs widget screenshots",
      "docPath": "docs/analytics/dashboards.md",
      "appPath": "/analytics/dashboards",
      "screenshots_needed": [
        "dashboards-overview",
        "dashboards-add-widget",
        "dashboards-widget-types",
        "dashboards-customize"
      ],
      "passes": false
    },
    {
      "id": 36,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Settings Account needs profile screenshots",
      "docPath": "docs/settings/account.md",
      "appPath": "/settings/account-info",
      "screenshots_needed": [
        "settings-account-overview",
        "settings-profile-edit",
        "settings-company-info"
      ],
      "passes": false
    },
    {
      "id": 37,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: User Management needs team screenshots",
      "docPath": "docs/settings/users.md",
      "appPath": "/settings/users",
      "screenshots_needed": [
        "users-list-view",
        "users-invite-modal",
        "users-role-selection",
        "users-permissions"
      ],
      "passes": false
    },
    {
      "id": 38,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Billing needs usage screenshots",
      "docPath": "docs/settings/billing.md",
      "appPath": "/settings/usage",
      "screenshots_needed": [
        "billing-overview",
        "billing-usage-metrics",
        "billing-plan-details"
      ],
      "passes": false
    },
    {
      "id": 39,
      "phase": 2,
      "type": "insufficient",
      "description": "INSUFFICIENT: Intro/Home Dashboard needs overview screenshots",
      "docPath": "docs/intro.md",
      "appPath": "/home-dashboard",
      "screenshots_needed": [
        "intro-dashboard-full",
        "intro-key-metrics",
        "intro-navigation-sidebar"
      ],
      "passes": false
    },
    {
      "id": 40,
      "phase": 3,
      "type": "incorrect",
      "description": "INCORRECT: Recapture Dashboard with proper data loading",
      "docPath": "docs/intro.md",
      "appPath": "/home-dashboard",
      "existing_screenshots": ["dashboard-overview.png"],
      "action": "Recapture with multi-delay to ensure data loads",
      "passes": false
    },
    {
      "id": 41,
      "phase": 3,
      "type": "incorrect",
      "description": "INCORRECT: Recapture Campaigns list with loaded data",
      "docPath": "docs/campaigns/overview.md",
      "appPath": "/campaigns",
      "existing_screenshots": ["campaigns-list.png"],
      "action": "Recapture with multi-delay to ensure campaigns load",
      "passes": false
    },
    {
      "id": 42,
      "phase": 3,
      "type": "incorrect",
      "description": "INCORRECT: Recapture Accounts list with engagement data",
      "docPath": "docs/audiences/accounts.md",
      "appPath": "/accounts",
      "existing_screenshots": ["accounts-list.png"],
      "action": "Recapture with multi-delay to ensure accounts load",
      "passes": false
    },
    {
      "id": 43,
      "phase": 3,
      "type": "incorrect",
      "description": "INCORRECT: Recapture Analytics Reports with chart data",
      "docPath": "docs/analytics/reports.md",
      "appPath": "/analytics/reports",
      "existing_screenshots": ["analytics-reports.png"],
      "action": "Recapture with multi-delay to ensure charts render",
      "passes": false
    },
    {
      "id": 44,
      "phase": 3,
      "type": "incorrect",
      "description": "INCORRECT: Recapture Integrations hub with status",
      "docPath": "docs/integrations/overview.md",
      "appPath": "/integrations",
      "existing_screenshots": ["integrations-hub.png"],
      "action": "Recapture with multi-delay to show connection status",
      "passes": false
    },
    {
      "id": 45,
      "phase": 3,
      "type": "incorrect",
      "description": "INCORRECT: Recapture AI Agents with loaded state",
      "docPath": "docs/ai-agents/overview.md",
      "appPath": "/ai-agents",
      "existing_screenshots": ["ai-agents-hub.png"],
      "action": "Recapture with multi-delay to ensure cards load",
      "passes": false
    },
    {
      "id": 46,
      "phase": 3,
      "type": "incorrect",
      "description": "INCORRECT: Recapture Visitor Reveal with company data",
      "docPath": "docs/visitor-tracking/overview.md",
      "appPath": "/reveal/accounts",
      "existing_screenshots": ["reveal-accounts.png"],
      "action": "Recapture with multi-delay to show identified companies",
      "passes": false
    },
    {
      "id": 47,
      "phase": 3,
      "type": "incorrect",
      "description": "INCORRECT: Recapture Conversions with goal data",
      "docPath": "docs/conversions/overview.md",
      "appPath": "/conversions",
      "existing_screenshots": ["conversions-overview.png"],
      "action": "Recapture with multi-delay to show conversion data",
      "passes": false
    },
    {
      "id": 60,
      "phase": 4,
      "type": "incomplete",
      "description": "INCOMPLETE: Verify and fix any login page screenshots - Batch 1",
      "docPath": "docs/getting-started/",
      "appPath": "various",
      "action": "Check all screenshots in getting-started for login page issues",
      "passes": false
    },
    {
      "id": 61,
      "phase": 4,
      "type": "incomplete",
      "description": "INCOMPLETE: Verify and fix any login page screenshots - Batch 2",
      "docPath": "docs/campaigns/",
      "appPath": "various",
      "action": "Check all screenshots in campaigns for login page issues",
      "passes": false
    },
    {
      "id": 62,
      "phase": 4,
      "type": "incomplete",
      "description": "INCOMPLETE: Verify and fix any login page screenshots - Batch 3",
      "docPath": "docs/integrations/",
      "appPath": "various",
      "action": "Check all screenshots in integrations for login page issues",
      "passes": false
    },
    {
      "id": 63,
      "phase": 4,
      "type": "incomplete",
      "description": "INCOMPLETE: Verify and fix any login page screenshots - Batch 4",
      "docPath": "docs/audiences/",
      "appPath": "various",
      "action": "Check all screenshots in audiences for login page issues",
      "passes": false
    },
    {
      "id": 64,
      "phase": 4,
      "type": "incomplete",
      "description": "INCOMPLETE: Verify and fix any login page screenshots - Batch 5",
      "docPath": "docs/analytics/",
      "appPath": "various",
      "action": "Check all screenshots in analytics for login page issues",
      "passes": false
    },
    {
      "id": 65,
      "phase": 4,
      "type": "incomplete",
      "description": "INCOMPLETE: Verify and fix any login page screenshots - Batch 6",
      "docPath": "docs/settings/",
      "appPath": "various",
      "action": "Check all screenshots in settings for login page issues",
      "passes": false
    },
    {
      "id": 80,
      "phase": 5,
      "type": "contextual",
      "description": "CONTEXTUAL: Verify Quick Start screenshots match text",
      "docPath": "docs/getting-started/quick-start.md",
      "appPath": "various",
      "action": "Read doc, verify each screenshot matches surrounding text",
      "passes": false
    },
    {
      "id": 81,
      "phase": 5,
      "type": "contextual",
      "description": "CONTEXTUAL: Verify First Campaign screenshots match workflow",
      "docPath": "docs/getting-started/first-campaign.md",
      "appPath": "/campaigns",
      "action": "Ensure screenshots show the exact steps described",
      "passes": false
    },
    {
      "id": 82,
      "phase": 5,
      "type": "contextual",
      "description": "CONTEXTUAL: Verify Campaigns Overview screenshots match features",
      "docPath": "docs/campaigns/overview.md",
      "appPath": "/campaigns",
      "action": "Ensure screenshots show features mentioned in text",
      "passes": false
    },
    {
      "id": 83,
      "phase": 5,
      "type": "contextual",
      "description": "CONTEXTUAL: Verify Page Editor screenshots match tools described",
      "docPath": "docs/campaigns/page-editor.md",
      "appPath": "/campaigns",
      "action": "Ensure editor tool screenshots match descriptions",
      "passes": false
    },
    {
      "id": 84,
      "phase": 5,
      "type": "contextual",
      "description": "CONTEXTUAL: Verify HubSpot Integration screenshots match setup steps",
      "docPath": "docs/integrations/crm/hubspot.md",
      "appPath": "/integrations",
      "action": "Ensure OAuth and setup screenshots match instructions",
      "passes": false
    },
    {
      "id": 85,
      "phase": 5,
      "type": "contextual",
      "description": "CONTEXTUAL: Verify Salesforce Integration screenshots match setup",
      "docPath": "docs/integrations/crm/salesforce.md",
      "appPath": "/integrations",
      "action": "Ensure OAuth and setup screenshots match instructions",
      "passes": false
    },
    {
      "id": 86,
      "phase": 5,
      "type": "contextual",
      "description": "CONTEXTUAL: Verify AI Agents screenshots match described capabilities",
      "docPath": "docs/ai-agents/",
      "appPath": "/ai-agents",
      "action": "Ensure agent screenshots show features mentioned",
      "passes": false
    },
    {
      "id": 87,
      "phase": 5,
      "type": "contextual",
      "description": "CONTEXTUAL: Verify Analytics screenshots match reported metrics",
      "docPath": "docs/analytics/",
      "appPath": "/analytics/reports",
      "action": "Ensure charts and reports match what text describes",
      "passes": false
    },
    {
      "id": 88,
      "phase": 5,
      "type": "contextual",
      "description": "CONTEXTUAL: Verify Settings screenshots match configuration options",
      "docPath": "docs/settings/",
      "appPath": "/settings",
      "action": "Ensure settings screenshots show options mentioned",
      "passes": false
    },
    {
      "id": 89,
      "phase": 5,
      "type": "contextual",
      "description": "CONTEXTUAL: Update all alt text to be descriptive",
      "docPath": "all",
      "appPath": "none",
      "action": "Review all image alt text and make it descriptive",
      "passes": false
    },
    {
      "id": 100,
      "phase": 6,
      "type": "deploy",
      "description": "DEPLOY: Build, deploy to production, invalidate cache, verify",
      "docPath": "all",
      "appPath": "all",
      "steps": [
        "Run: npm run build (must pass)",
        "Run: aws s3 sync build s3://support-abmatic-ai --delete",
        "Run: aws cloudfront create-invalidation --distribution-id EWO3Z3VNLFUQ2 --paths '/*'",
        "Wait for invalidation to complete",
        "Verify: https://support.abmatic.ai loads",
        "Verify: Navigation works",
        "Verify: Images load (check browser network tab)",
        "Verify: Search works",
        "Create completion summary in activity.md"
      ],
      "passes": false
    }
  ]
}
```

## Notes

- Tasks are ordered by phase for logical progression
- Phase 1 (Audit) identifies all issues before fixing
- Phase 2 (Insufficient) adds missing screenshots
- Phase 3 (Incorrect) fixes timing issues with multi-capture
- Phase 4 (Incomplete) fixes login page issues
- Phase 5 (Contextual) ensures text-screenshot alignment
- Phase 6 (Deploy) publishes and verifies

## Multi-Capture Command Reference

```bash
# Standard capture with all delays (5s, 10s, 15s, 20s, 30s)
cd /Users/jimabmatic.ai/abmatic/support-docs
ABMATIC_EMAIL="jimit@abmatic.ai" ABMATIC_PASSWORD="WallyZoey123" npx ts-node scripts/screenshots/multi-capture.ts multi <name> <appPath>

# Examples:
npx ts-node scripts/screenshots/multi-capture.ts multi dashboard /home-dashboard
npx ts-node scripts/screenshots/multi-capture.ts multi campaigns-list /campaigns
npx ts-node scripts/screenshots/multi-capture.ts multi integrations-hub /integrations
```

## Success Criteria

A screenshot passes quality check if:
- Score >= 50 (from multi-capture)
- No login page visible
- No loading spinners
- Real data visible (not empty states)
- Alt text is descriptive (10+ characters)
- Placement matches surrounding text context
