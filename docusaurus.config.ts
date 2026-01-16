import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Abmatic AI Support',
  tagline: 'Account-Based Marketing Platform Documentation',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Production URL
  url: 'https://support.abmatic.ai',
  baseUrl: '/',

  // GitHub config
  organizationName: 'abmatic',
  projectName: 'support-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    format: 'detect',
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Docs at root instead of /docs
          editUrl: 'https://github.com/abmatic/support-docs/tree/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/',
        indexBlog: false,
      },
    ],
  ],

  themeConfig: {
    image: 'img/abmatic-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    // Algolia DocSearch - will be configured after approval
    // algolia: {
    //   appId: 'YOUR_APP_ID',
    //   apiKey: 'YOUR_SEARCH_API_KEY',
    //   indexName: 'abmatic_support',
    //   contextualSearch: true,
    // },
    navbar: {
      title: 'Abmatic AI',
      logo: {
        alt: 'Abmatic AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://app.abmatic.ai',
          label: 'Login',
          position: 'right',
        },
        {
          href: 'https://abmatic.ai',
          label: 'Website',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started/quick-start',
            },
            {
              label: 'Campaigns',
              to: '/campaigns/overview',
            },
            {
              label: 'Integrations',
              to: '/integrations/overview',
            },
            {
              label: 'AI Agents',
              to: '/ai-agents/ai-agents-overview',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Troubleshooting',
              to: '/troubleshooting/troubleshooting-overview',
            },
            {
              label: 'API Reference',
              to: '/api/api-overview',
            },
            {
              label: "What's New",
              to: '/changelog',
            },
            {
              label: 'FAQ',
              to: '/faq/general',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Abmatic AI Platform',
              href: 'https://abmatic.ai',
            },
            {
              label: 'Login',
              href: 'https://app.abmatic.ai',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Contact Support',
              href: 'mailto:support@abmatic.ai',
            },
            {
              label: 'Feature Request',
              href: 'mailto:feedback@abmatic.ai',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Abmatic AI. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
