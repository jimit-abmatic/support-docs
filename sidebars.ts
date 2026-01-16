import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/quick-start',
        'getting-started/install-script',
        'getting-started/first-campaign',
        'getting-started/use-cases',
        'getting-started/playbooks',
        'getting-started/glossary',
      ],
    },
    {
      type: 'category',
      label: 'Campaigns',
      items: [
        'campaigns/overview',
        'campaigns/website-personalization',
        'campaigns/email-campaigns',
        'campaigns/linkedin-ads',
        'campaigns/google-ads',
        'campaigns/crm-campaigns',
        'campaigns/page-editor',
        'campaigns/dynamic-content',
        'campaigns/ab-testing',
      ],
    },
    {
      type: 'category',
      label: 'Audiences',
      items: [
        'audiences/overview',
        'audiences/accounts',
        'audiences/contacts',
        'audiences/target-groups',
        'audiences/filters',
        'audiences/csv-import',
        'audiences/crm-sync',
        'audiences/linkedin-dmp',
        'audiences/google-customer-match',
      ],
    },
    {
      type: 'category',
      label: 'Visitor Tracking',
      items: [
        'visitor-tracking/overview',
        'visitor-tracking/company-identification',
        'visitor-tracking/contact-reveal',
        'visitor-tracking/page-views',
        'visitor-tracking/form-tracking',
      ],
    },
    {
      type: 'category',
      label: 'Conversions',
      items: [
        'conversions/overview',
        'conversions/create-goals',
        'conversions/form-tracking',
        'conversions/event-tracking',
        'conversions/analytics',
      ],
    },
    {
      type: 'category',
      label: 'AI Agents',
      items: [
        'ai-agents/ai-agents-overview',
        'ai-agents/ai-agents-configuration',
        'ai-agents/sdr-agent',
        'ai-agents/abm-agent',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/overview',
        {
          type: 'category',
          label: 'CRM',
          items: [
            'integrations/crm/salesforce-setup',
            'integrations/crm/salesforce',
            'integrations/crm/hubspot-setup',
            'integrations/crm/hubspot',
            'integrations/crm/pipedrive',
            'integrations/crm/activecampaign',
            'integrations/crm/outreach',
            'integrations/crm/sync-behavior',
          ],
        },
        {
          type: 'category',
          label: 'Advertising',
          items: [
            'integrations/advertising/linkedin-ads',
            'integrations/advertising/google-ads',
          ],
        },
        'integrations/slack',
        'integrations/google-analytics',
        'integrations/segment',
      ],
    },
    {
      type: 'category',
      label: 'Analytics & Reporting',
      items: [
        'analytics/overview',
        'analytics/dashboards',
        'analytics/reports',
        'analytics/campaign-performance',
        'analytics/audience-insights',
      ],
    },
    {
      type: 'category',
      label: 'Settings',
      items: [
        'settings/account',
        'settings/users',
        'settings/script-installation',
        'settings/custom-fields',
        'settings/notifications',
        'settings/billing',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/troubleshooting-overview',
        'troubleshooting/script-issues',
        'troubleshooting/crm-sync',
        'troubleshooting/campaign-issues',
        'troubleshooting/common-errors',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/api-overview',
        'api/javascript-sdk',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/general',
        'faq/campaigns',
        'faq/integrations',
        'faq/billing',
      ],
    },
    {
      type: 'doc',
      id: 'changelog',
      label: "What's New",
    },
  ],
};

export default sidebars;
