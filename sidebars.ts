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
      ],
    },
    {
      type: 'category',
      label: 'AI Agents',
      items: [
        'ai-agents/overview',
        'ai-agents/clara-executive',
        'ai-agents/clara-insights',
        'ai-agents/joey-content',
        'ai-agents/marcus-campaigns',
        'ai-agents/sophia-personalization',
        'ai-agents/alex-accounts',
        'ai-agents/jordan-contacts',
        'ai-agents/james-bidding',
        'ai-agents/voice-commands',
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
      label: 'Integrations',
      items: [
        'integrations/overview',
        {
          type: 'category',
          label: 'CRM',
          items: [
            'integrations/crm/salesforce',
            'integrations/crm/hubspot',
            'integrations/crm/pipedrive',
            'integrations/crm/activecampaign',
            'integrations/crm/outreach',
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
      label: 'FAQ',
      items: [
        'faq/general',
        'faq/campaigns',
        'faq/integrations',
        'faq/billing',
      ],
    },
  ],
};

export default sidebars;
