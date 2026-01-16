/**
 * Agent 5: Documentation Writer Agent
 *
 * Purpose: Write documentation using screenshots and narratives
 * - Generates markdown files for each flow
 * - Includes screenshots with proper captions
 * - Written from a B2B marketer's perspective
 *
 * Input: narratives.json from Agent 4
 * Output: Documentation markdown files
 */

const fs = require('fs');
const path = require('path');

const config = {
  outputDir: path.join(__dirname, '../output'),
  docsDir: path.join(__dirname, '../output/docs-draft'),
  verifiedDir: path.join(__dirname, '../../../static/img/screenshots/verified'),
};

// Documentation structure
const DOC_STRUCTURE = {
  'getting-started/quick-start': {
    title: 'Quick Start Guide',
    description: 'Get started with Abmatic AI in 15 minutes',
    flows: ['onboarding', 'installation', 'dashboard'],
    order: ['sign-up', 'sign-in', 'home-dashboard', 'installation-script']
  },
  'audiences/overview': {
    title: 'Audiences Overview',
    description: 'Learn how to build and manage target audiences',
    flows: ['accounts', 'contacts', 'groups'],
    order: ['accounts-list', 'account-create-modal', 'accounts-all', 'contacts-list', 'contact-create-modal', 'contacts-all', 'groups-list']
  },
  // NEW: Detailed account management with AG Grid
  'audiences/accounts': {
    title: 'Account Management',
    description: 'Master the powerful AG Grid interface for managing your target accounts. Learn to filter, sort, create charts, and build targeted account lists.',
    flows: ['account-lists'],
    order: ['accounts-list', 'accounts-all-grid', 'account-add-manual', 'account-create-modal']
  },
  // NEW: Detailed contact management with AG Grid
  'audiences/contacts': {
    title: 'Contact Management',
    description: 'Manage contacts with the AG Grid interface. Use filters to find the right people, create targeted lists, and leverage auto-enrichment.',
    flows: ['contact-lists'],
    order: ['contacts-list', 'contacts-all-grid', 'contact-add-manual', 'contact-create-modal']
  },
  // NEW: Filters guide for AG Grid
  'audiences/filters': {
    title: 'Using Filters',
    description: 'Learn to use AG Grid\'s powerful filtering capabilities to segment accounts and contacts by any attribute. Build precise target lists with multi-condition filters.',
    flows: ['account-lists', 'contact-lists'],
    order: ['accounts-all-grid', 'contacts-all-grid']
  },
  // NEW: Target groups and lists
  'audiences/target-groups': {
    title: 'Target Groups & Lists',
    description: 'Create, manage, and update account and contact lists. Learn about manual lists, filter-based dynamic lists, and auto-generated Associated Lists.',
    flows: ['accounts', 'contacts', 'groups'],
    order: ['groups-list', 'accounts-all-grid', 'contacts-all-grid', 'account-create-modal', 'contact-create-modal']
  },
  'campaigns/website-personalization': {
    title: 'Website Personalization',
    description: 'Personalize your website for target accounts',
    flows: ['campaigns'],
    order: ['campaigns-list', 'campaign-create-modal']
  },
  'visitor-tracking/company-identification': {
    title: 'Company Identification',
    description: 'See which companies visit your website',
    flows: ['reveal'],
    order: ['reveal-accounts', 'reveal-contacts']
  },
  'analytics/overview': {
    title: 'Analytics Overview',
    description: 'Track and measure your ABM performance',
    flows: ['analytics', 'conversions'],
    order: ['analytics-dashboards', 'analytics-reports', 'conversions-overview', 'conversions-manage']
  },
  'integrations/overview': {
    title: 'Integrations Overview',
    description: 'Connect Abmatic AI with your other tools',
    flows: ['integrations'],
    order: ['integrations-hub']
  },
  // NEW: Salesforce integration detailed guide
  'integrations/crm/salesforce': {
    title: 'Salesforce Integration',
    description: 'Connect Salesforce to sync accounts, contacts, and opportunities. Set up bi-directional sync, field mapping, and import your existing CRM data.',
    flows: ['crm-integrations'],
    order: ['integrations-hub', 'integration-salesforce']
  },
  // NEW: HubSpot integration detailed guide
  'integrations/crm/hubspot': {
    title: 'HubSpot Integration',
    description: 'Connect HubSpot CRM to sync companies, contacts, and deals. Configure sync settings and leverage HubSpot data for ABM campaigns.',
    flows: ['crm-integrations'],
    order: ['integrations-hub', 'integration-hubspot']
  },
  // NEW: Pipedrive integration detailed guide
  'integrations/crm/pipedrive': {
    title: 'Pipedrive Integration',
    description: 'Connect Pipedrive to sync organizations, people, and deals. Import your sales data and enrich it with website visitor intelligence.',
    flows: ['crm-integrations'],
    order: ['integrations-hub', 'integration-pipedrive']
  },
  'ai-agents/overview': {
    title: 'AI Agents Overview',
    description: 'Use AI to power your ABM program',
    flows: ['ai-agents'],
    order: ['ai-agents-hub', 'settings-ai-agents']
  },
  'settings/overview': {
    title: 'Settings Overview',
    description: 'Configure your Abmatic AI account',
    flows: ['settings'],
    order: ['settings-account', 'settings-users', 'settings-usage', 'settings-custom-fields', 'settings-notifications', 'settings-slack', 'settings-export']
  }
};

class WriterAgent {
  constructor() {
    this.narratives = null;
    this.report = {
      generatedDate: new Date().toISOString(),
      docsGenerated: [],
      errors: [],
      summary: { total: 0, success: 0, failed: 0 }
    };
  }

  async run() {
    console.log('========================================');
    console.log('AGENT 5: DOCUMENTATION WRITER AGENT');
    console.log('========================================\n');

    // Load narratives
    const narrativesPath = path.join(config.outputDir, 'narratives.json');
    if (!fs.existsSync(narrativesPath)) {
      console.error('ERROR: narratives.json not found');
      console.error('Run Agent 4 first: node scripts/screenshots/pipeline/agent4-narrate.js');
      process.exit(1);
    }

    this.narratives = JSON.parse(fs.readFileSync(narrativesPath, 'utf8'));
    console.log(`Loaded ${this.narratives.screenshots.length} narratives\n`);

    // Ensure docs directory exists
    if (!fs.existsSync(config.docsDir)) {
      fs.mkdirSync(config.docsDir, { recursive: true });
    }

    // Generate each documentation file
    for (const [docPath, docConfig] of Object.entries(DOC_STRUCTURE)) {
      this.generateDoc(docPath, docConfig);
    }

    // Save report
    this.saveReport();

    // Print summary
    this.printSummary();
  }

  generateDoc(docPath, docConfig) {
    const { title, description, flows, order } = docConfig;
    this.report.summary.total++;

    console.log(`Generating: ${docPath}`);

    try {
      // Get relevant screenshots in order
      const screenshots = order
        .map(id => this.narratives.screenshots.find(s => s.id === id))
        .filter(s => s);

      if (screenshots.length === 0) {
        console.log(`  WARNING: No screenshots found for ${docPath}\n`);
        this.report.errors.push({ doc: docPath, error: 'No screenshots found' });
        return;
      }

      // Generate markdown
      const markdown = this.generateMarkdown(docPath, docConfig, screenshots);

      // Write file
      const outputPath = path.join(config.docsDir, `${docPath.replace(/\//g, '-')}.md`);
      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(outputPath, markdown);

      this.report.docsGenerated.push({
        path: docPath,
        outputPath,
        title,
        screenshotCount: screenshots.length
      });

      this.report.summary.success++;
      console.log(`  Generated: ${outputPath} (${screenshots.length} screenshots)\n`);

    } catch (error) {
      this.report.summary.failed++;
      this.report.errors.push({ doc: docPath, error: error.message });
      console.log(`  FAILED: ${error.message}\n`);
    }
  }

  generateMarkdown(docPath, docConfig, screenshots) {
    const { title, description } = docConfig;
    const parts = docPath.split('/');
    const id = parts[parts.length - 1];
    const category = parts[0];

    let md = '';

    // Frontmatter
    md += '---\n';
    md += `id: ${id}\n`;
    md += `title: ${title}\n`;
    md += `sidebar_label: ${title}\n`;
    md += `sidebar_position: 1\n`;
    md += '---\n\n';

    // Title and description
    md += `# ${title}\n\n`;
    md += `${description}\n\n`;

    // Table of contents hint
    md += `This guide walks you through the ${title.toLowerCase()} with screenshots at every step.\n\n`;
    md += '---\n\n';

    // Generate sections for each screenshot
    let stepNumber = 1;
    for (const screenshot of screenshots) {
      md += this.generateSection(screenshot, stepNumber);
      stepNumber++;
    }

    // Summary section
    md += '## Summary\n\n';
    md += `You\'ve completed the ${title.toLowerCase()} guide. `;
    md += `Key steps covered:\n\n`;

    for (const screenshot of screenshots) {
      md += `- ${screenshot.title}\n`;
    }

    md += '\n---\n\n';

    // Next steps
    md += '## What\'s Next?\n\n';
    md += this.generateNextSteps(category);

    return md;
  }

  generateSection(screenshot, stepNumber) {
    const { id, title, imagePath, narrative } = screenshot;
    let section = '';

    // Section header
    section += `## Step ${stepNumber}: ${title}\n\n`;

    // What they're seeing
    section += `${narrative.what}\n\n`;

    // Screenshot
    section += `![${title}](${imagePath})\n\n`;
    section += `*${title} - ${narrative.where}*\n\n`;

    // How to get here
    section += `### How to Get Here\n\n`;
    section += `${narrative.howToGetHere}\n\n`;

    // What you can do
    section += `### What You Can Do\n\n`;
    if (Array.isArray(narrative.whatCanDo)) {
      for (const action of narrative.whatCanDo) {
        section += `- ${action}\n`;
      }
    } else {
      section += `${narrative.whatCanDo}\n`;
    }
    section += '\n';

    // Data shown
    section += `### Understanding the Data\n\n`;
    section += `${narrative.dataShown}\n\n`;

    // Next step
    section += `### Next Step\n\n`;
    section += `${narrative.nextStep}\n\n`;

    // Marketing context (as a tip)
    section += `:::tip Marketing Context\n`;
    section += `${narrative.marketingContext}\n`;
    section += `:::\n\n`;

    section += '---\n\n';

    return section;
  }

  generateNextSteps(category) {
    const nextSteps = {
      'getting-started': `
- [Build your first audience](/audiences/overview) - Create target account lists
- [Create your first campaign](/campaigns/website-personalization) - Personalize your website
- [Connect your CRM](/integrations/overview) - Sync with Salesforce or HubSpot
`,
      'audiences': `
- [Master account management](/audiences/accounts) - Use AG Grid filters and charts
- [Learn to use filters](/audiences/filters) - Build precise target lists
- [Create target groups](/audiences/target-groups) - Organize accounts into lists
- [Create a personalization campaign](/campaigns/website-personalization) - Use your audiences for targeting
- [View visitor data](/visitor-tracking/company-identification) - See which accounts are visiting
- [Connect your CRM](/integrations/crm/salesforce) - Import and sync CRM data
`,
      'campaigns': `
- [Monitor campaign performance](/analytics/overview) - Track results
- [Set up conversions](/conversions/overview) - Measure campaign impact
- [A/B test your campaigns](/campaigns/ab-testing) - Optimize for better results
`,
      'visitor-tracking': `
- [Build audiences from visitors](/audiences/overview) - Create lists from engaged accounts
- [Set up alerts](/settings/notifications) - Get notified when target accounts visit
- [Connect your CRM](/integrations/overview) - Sync visitor data to sales
`,
      'analytics': `
- [Create custom reports](/analytics/reports) - Build the metrics you need
- [Set up dashboards](/analytics/dashboards) - Monitor at a glance
- [Export your data](/settings/export) - Analyze in other tools
`,
      'integrations': `
- [Set up Salesforce](/integrations/crm/salesforce) - Bi-directional sync with Salesforce
- [Set up HubSpot](/integrations/crm/hubspot) - Sync companies and contacts
- [Set up Pipedrive](/integrations/crm/pipedrive) - Import deals and organizations
- [Set up Slack notifications](/settings/slack) - Get real-time alerts
- [Map custom fields](/settings/custom-fields) - Align with your CRM
`,
      'ai-agents': `
- [Get account recommendations](/ai-agents/abm-agent) - Find new target accounts
- [Generate content](/ai-agents/content-agent) - Create personalization copy
- [Analyze your data](/analytics/overview) - Understand AI insights
`,
      'settings': `
- [Invite team members](/settings/users) - Add your marketing team
- [Set up integrations](/integrations/overview) - Connect your tools
- [Configure notifications](/settings/notifications) - Stay informed
`,
    };

    return nextSteps[category] || `
- Explore more features in the sidebar
- Check out our [API documentation](/api/overview)
- Contact support if you need help
`;
  }

  saveReport() {
    const reportPath = path.join(config.outputDir, 'writer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.report, null, 2));
    console.log(`Report saved to: ${reportPath}\n`);
  }

  printSummary() {
    console.log('========================================');
    console.log('DOCUMENTATION WRITER SUMMARY');
    console.log('========================================');
    console.log(`Total docs attempted: ${this.report.summary.total}`);
    console.log(`Successfully generated: ${this.report.summary.success}`);
    console.log(`Failed: ${this.report.summary.failed}`);

    if (this.report.docsGenerated.length > 0) {
      console.log('\nDocs generated:');
      this.report.docsGenerated.forEach(doc => {
        console.log(`  - ${doc.path}: ${doc.title} (${doc.screenshotCount} screenshots)`);
      });
    }

    if (this.report.errors.length > 0) {
      console.log('\nErrors:');
      this.report.errors.forEach(err => {
        console.log(`  - ${err.doc}: ${err.error}`);
      });
    }

    console.log('\nDocs saved to:', config.docsDir);
    console.log('\nNext step: Run Agent 6 (Final Verification)');
    console.log('Command: node scripts/screenshots/pipeline/agent6-final-verify.js');
  }
}

// Run
if (require.main === module) {
  const agent = new WriterAgent();
  agent.run().catch(console.error);
}

module.exports = { WriterAgent, DOC_STRUCTURE };
