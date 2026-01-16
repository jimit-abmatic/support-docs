/**
 * Agent 4: Narration Agent
 *
 * Purpose: Create detailed narrative descriptions for each screenshot
 * From a B2B marketer's perspective, answering:
 * 1. What is the user seeing on this screen?
 * 2. Where is this in the app (navigation path)?
 * 3. How did the user get here?
 * 4. What can the user do on this screen?
 * 5. What is the data/information shown?
 * 6. What should the user do next?
 *
 * Input: reverification-report.json + capture metadata
 * Output: narratives.json
 */

const fs = require('fs');
const path = require('path');

const config = {
  outputDir: path.join(__dirname, '../output'),
  verifiedDir: path.join(__dirname, '../../../static/img/screenshots/verified'),
};

// Detailed narrative templates for each screen
// Written from a B2B marketer's perspective
const SCREEN_NARRATIVES = {
  // AUTHENTICATION
  'sign-in': {
    title: 'Sign In Page',
    what: 'This is the Abmatic AI login page where existing users authenticate to access their account. You\'ll see the Abmatic AI logo, email and password fields, and a "Sign In" button.',
    where: 'This is the entry point at app.abmatic.ai/sign-in',
    howToGetHere: 'Navigate directly to app.abmatic.ai or click "Sign In" from the marketing website.',
    whatCanDo: [
      'Enter your email address and password to log in',
      'Click "Forgot Password?" if you need to reset your credentials',
      'Click "Sign Up" to create a new account if you don\'t have one'
    ],
    dataShown: 'No data shown - this is an authentication form.',
    nextStep: 'After entering valid credentials and clicking "Sign In", you\'ll be taken to your home dashboard (or the Welcome page if you\'re a new user who hasn\'t completed setup).',
    marketingContext: 'This is where your marketing team members will start their daily workflow in Abmatic AI.'
  },

  'sign-up': {
    title: 'Sign Up Page',
    what: 'The registration page where new users create an Abmatic AI account. You\'ll see fields for email, password, and company information.',
    where: 'This is at app.abmatic.ai/sign-up',
    howToGetHere: 'Click "Sign Up" from the login page or navigate directly from the Abmatic AI marketing website.',
    whatCanDo: [
      'Enter your work email address',
      'Create a secure password',
      'Provide your company name',
      'Accept terms and conditions',
      'Complete registration'
    ],
    dataShown: 'Registration form fields - no existing data.',
    nextStep: 'After signing up, you\'ll receive a verification email. Click the link to verify your account, then you\'ll be taken to the Welcome page to complete your company setup.',
    marketingContext: 'This is the first step for any B2B marketing team looking to implement account-based marketing with Abmatic AI.'
  },

  'forgot-password': {
    title: 'Password Recovery Page',
    what: 'A simple form to reset your password if you\'ve forgotten it. Enter your email and receive a reset link.',
    where: 'This is at app.abmatic.ai/forgot-password',
    howToGetHere: 'Click "Forgot Password?" on the sign-in page.',
    whatCanDo: [
      'Enter the email address associated with your account',
      'Submit to receive a password reset email',
      'Return to sign-in page'
    ],
    dataShown: 'Email input field only.',
    nextStep: 'Check your email for the reset link. Click it to create a new password, then sign in with your new credentials.',
    marketingContext: 'Useful for team members who need to regain access to the platform.'
  },

  // DASHBOARD
  'home-dashboard': {
    title: 'Home Dashboard',
    what: 'Your central command center showing an overview of your account-based marketing performance. You\'ll see key metrics, recent activity, and quick actions to common tasks.',
    where: 'This is your main dashboard at app.abmatic.ai/ (home)',
    howToGetHere: 'After signing in, you\'re automatically taken here. You can also click the Abmatic AI logo or "Home" in the left sidebar anytime.',
    whatCanDo: [
      'View your overall visitor and engagement metrics',
      'See recently identified companies visiting your website',
      'Check active campaign performance at a glance',
      'Access quick shortcuts to create campaigns, view accounts, or check analytics',
      'Monitor recent form submissions and conversions'
    ],
    dataShown: 'Key metrics include: total visitors, identified companies, campaign engagement rates, recent company reveals, and form submission counts.',
    nextStep: 'From here, most users proceed to install the tracking script (if not done), review identified companies in Reveal, or create their first campaign.',
    marketingContext: 'This dashboard gives marketing leaders a quick pulse on their ABM program. Check it daily to monitor pipeline activity.'
  },

  'home-dashboard-alt': {
    title: 'Home Dashboard (Alternative View)',
    what: 'Same as the home dashboard - your central overview of ABM performance.',
    where: 'This is at app.abmatic.ai/home-dashboard (alternative route)',
    howToGetHere: 'Accessed via direct URL or internal navigation.',
    whatCanDo: ['Same functionality as the main home dashboard'],
    dataShown: 'Same metrics as the main dashboard.',
    nextStep: 'Continue to Reveal, Campaigns, or Analytics based on your priorities.',
    marketingContext: 'Alternative access point to the same dashboard view.'
  },

  // INSTALLATION
  'installation-script': {
    title: 'Script Installation Page',
    what: 'This critical page shows your unique Abmatic AI tracking script. This JavaScript snippet must be added to your website to enable visitor identification, personalization, and all Abmatic AI features.',
    where: 'This is at Settings > Installation (app.abmatic.ai/installation)',
    howToGetHere: 'Click "Installation" in the bottom of the left sidebar, or navigate to Settings > Script.',
    whatCanDo: [
      'View your unique tracking script code',
      'Copy the script with one click',
      'See installation instructions for different methods (direct HTML, Google Tag Manager)',
      'Check if the script is properly installed (verification status)',
      'View advanced configuration options'
    ],
    dataShown: 'Your unique script tag containing your account ID, installation status, and verification timestamp.',
    nextStep: 'Copy the script and add it to your website\'s <head> section on all pages. After installation, return here to verify it\'s working properly.',
    marketingContext: 'THIS IS THE MOST CRITICAL STEP. Without this script, Abmatic AI cannot identify visitors or enable any personalization. Make sure your web developer adds this to all pages of your website.'
  },

  // ACCOUNTS
  'accounts-list': {
    title: 'Target Accounts List',
    what: 'The accounts hub where you manage your target account lists. You\'ll see all your account collections/lists, their sizes, and options to create new ones.',
    where: 'This is at Audiences > Accounts (app.abmatic.ai/accounts)',
    howToGetHere: 'Click "Accounts" in the left sidebar under the Audiences section.',
    whatCanDo: [
      'View all your target account lists/collections',
      'Create new account lists (from filters, CSV upload, CRM import, or AI recommendations)',
      'Edit existing account lists',
      'Delete lists you no longer need',
      'See the number of accounts in each list',
      'Check list status (active, processing, etc.)'
    ],
    dataShown: 'List of account collections with names, account counts, creation dates, and status.',
    nextStep: 'Create your first account list by clicking "Create Collection" and choosing a method (filters, CSV, CRM, or AI). These lists will be used for campaign targeting.',
    marketingContext: 'Account lists are the foundation of ABM. Build lists based on your ICP (Ideal Customer Profile) - by industry, company size, technology used, or import your target account list from your CRM.'
  },

  'accounts-all': {
    title: 'All Accounts View',
    what: 'A comprehensive data view showing all accounts in your database with detailed company information and filtering capabilities.',
    where: 'This is at Accounts > All (app.abmatic.ai/accounts/all)',
    howToGetHere: 'From the Accounts page, click "View All Accounts" or navigate directly.',
    whatCanDo: [
      'Browse all accounts in your database',
      'Search for specific companies',
      'Filter by industry, size, location, and custom fields',
      'Sort by various attributes',
      'View detailed company information',
      'Add accounts to lists'
    ],
    dataShown: 'Company data including: name, website, industry, employee count, location, technologies used, and engagement data.',
    nextStep: 'Use filters to find accounts matching your ICP, then add them to target lists for campaigns.',
    marketingContext: 'This is your account intelligence hub. Use it to research companies, build segments, and identify high-value targets.'
  },

  // CONTACTS
  'contacts-list': {
    title: 'Target Contacts List',
    what: 'The contacts hub where you manage your target contact lists. Similar to accounts, you\'ll see all your contact collections and options to create new ones.',
    where: 'This is at Audiences > Contacts (app.abmatic.ai/contacts)',
    howToGetHere: 'Click "Contacts" in the left sidebar under the Audiences section.',
    whatCanDo: [
      'View all your target contact lists',
      'Create new contact lists (from filters, CSV upload, CRM import)',
      'Edit existing contact lists',
      'See the number of contacts in each list',
      'Manage contact collection settings'
    ],
    dataShown: 'List of contact collections with names, contact counts, creation dates, and status.',
    nextStep: 'Create contact lists to target specific personas within your target accounts. Useful for personalized messaging.',
    marketingContext: 'Contact lists help you reach the right people at target accounts. Build lists by job title, seniority, department, or import from your CRM.'
  },

  'contacts-all': {
    title: 'All Contacts View',
    what: 'A comprehensive data view showing all contacts in your database with detailed professional information.',
    where: 'This is at Contacts > All (app.abmatic.ai/contacts/all)',
    howToGetHere: 'From the Contacts page, click "View All Contacts" or navigate directly.',
    whatCanDo: [
      'Browse all contacts in your database',
      'Search for specific people',
      'Filter by job title, company, seniority',
      'View LinkedIn profiles and contact details',
      'Add contacts to lists'
    ],
    dataShown: 'Contact data including: name, email, job title, company, LinkedIn URL, and engagement history.',
    nextStep: 'Filter to find key decision-makers at target accounts and add them to contact lists.',
    marketingContext: 'Find and track the buying committee at target accounts. Useful for sales enablement and personalized outreach.'
  },

  // GROUPS
  'groups-list': {
    title: 'Target Groups',
    what: 'Target groups combine accounts and contacts for advanced segmentation. You can create groups with specific criteria for campaign targeting.',
    where: 'This is at Audiences > Groups (app.abmatic.ai/groups)',
    howToGetHere: 'Click "Groups" in the left sidebar under the Audiences section.',
    whatCanDo: [
      'View all target groups',
      'Create new groups with combined account and contact criteria',
      'Edit group definitions',
      'Use groups for campaign targeting'
    ],
    dataShown: 'List of target groups with names, member counts, and creation dates.',
    nextStep: 'Create groups to define complex targeting criteria that combine account and contact attributes.',
    marketingContext: 'Groups are powerful for advanced ABM. Example: "VP+ at Enterprise Tech Companies" combines account size with contact seniority.'
  },

  // CAMPAIGNS
  'campaigns-list': {
    title: 'Campaigns List',
    what: 'Your campaign management hub showing all your personalization and advertising campaigns. You\'ll see campaign names, types, status, and performance metrics.',
    where: 'This is at Campaigns (app.abmatic.ai/campaigns)',
    howToGetHere: 'Click "Campaigns" in the left sidebar.',
    whatCanDo: [
      'View all your campaigns (inbound website personalization, outbound ads)',
      'Create new campaigns',
      'Edit existing campaigns',
      'Activate or pause campaigns',
      'View campaign performance metrics',
      'Duplicate successful campaigns'
    ],
    dataShown: 'Campaign list with: name, type (inbound/outbound), status (active/paused), visitor counts, and engagement metrics.',
    nextStep: 'Create your first campaign by clicking "Create Campaign" and selecting the campaign type.',
    marketingContext: 'This is where ABM comes to life. Create website personalization campaigns to show targeted content to your ideal customers when they visit your site.'
  },

  'campaign-create-modal': {
    title: 'Create Campaign Modal',
    what: 'The campaign creation dialog where you choose the type of campaign to create. Options include Inbound (website personalization) and Outbound (advertising).',
    where: 'This modal appears over the Campaigns page',
    howToGetHere: 'Click the "Create Campaign" button on the Campaigns page.',
    whatCanDo: [
      'Select campaign type: Inbound (website personalization) or Outbound (ads)',
      'Start the campaign creation wizard',
      'Cancel and return to campaigns list'
    ],
    dataShown: 'Campaign type options with descriptions.',
    nextStep: 'Select "Inbound" for website personalization or "Outbound" for LinkedIn/display ads, then proceed through the setup wizard.',
    marketingContext: 'Choose Inbound to personalize your website for target accounts. This is the core of website ABM - showing relevant content to the right visitors.'
  },

  // CONVERSIONS
  'conversions-overview': {
    title: 'Conversions Overview',
    what: 'Track and analyze your conversion events. See which accounts and contacts are converting, and measure campaign attribution.',
    where: 'This is at Conversions (app.abmatic.ai/conversions)',
    howToGetHere: 'Click "Conversions" in the left sidebar.',
    whatCanDo: [
      'View conversion metrics and trends',
      'See which campaigns drive conversions',
      'Analyze conversion by account and contact',
      'Set up new conversion tracking',
      'View conversion attribution'
    ],
    dataShown: 'Conversion counts, trends over time, attribution by campaign, and account/contact breakdown.',
    nextStep: 'Set up conversion tracking for key actions like form submissions, demo requests, or purchases.',
    marketingContext: 'Crucial for measuring ABM ROI. Track which target accounts are taking action and attribute conversions to specific campaigns.'
  },

  'conversions-manage': {
    title: 'Manage Conversions',
    what: 'Define and manage your conversion events. Create conversion definitions for different actions you want to track.',
    where: 'This is at Conversions > Manage (app.abmatic.ai/conversions/manage)',
    howToGetHere: 'Click "Manage" on the Conversions page or navigate directly.',
    whatCanDo: [
      'Create new conversion definitions',
      'Edit existing conversion tracking',
      'Set conversion values and priorities',
      'Delete conversions you no longer need',
      'View conversion code for implementation'
    ],
    dataShown: 'List of conversion definitions with names, types, and event counts.',
    nextStep: 'Create conversions for key funnel stages: lead, MQL, demo request, opportunity, closed-won.',
    marketingContext: 'Map your entire funnel with conversions to measure ABM impact at every stage of the buyer journey.'
  },

  // REVEAL
  'reveal-accounts': {
    title: 'Company Reveal (Identified Accounts)',
    what: 'See which companies are visiting your website in real-time. Abmatic AI identifies anonymous visitors and shows you the companies behind the traffic.',
    where: 'This is at Reveal > Accounts (app.abmatic.ai/reveal/accounts)',
    howToGetHere: 'Click "Reveal" in the left sidebar, then select "Accounts" (or it defaults here).',
    whatCanDo: [
      'View companies visiting your website',
      'See visit details: pages viewed, time on site, visit frequency',
      'Filter by industry, size, location',
      'Add visiting companies to target lists',
      'View company profiles and intelligence',
      'Export visitor data'
    ],
    dataShown: 'Identified companies with: company name, industry, size, location, pages visited, visit time, and engagement score.',
    nextStep: 'Review visiting companies daily to identify high-intent accounts. Add engaged visitors to target lists for personalization.',
    marketingContext: 'This is ABM intelligence gold. See which target accounts are researching you, which pages they view, and how engaged they are - even before they fill out a form.'
  },

  'reveal-contacts': {
    title: 'Contact Reveal (Identified Contacts)',
    what: 'See individual contacts visiting your website. When enabled, Abmatic AI can identify specific people from target accounts.',
    where: 'This is at Reveal > Contacts (app.abmatic.ai/reveal/contacts)',
    howToGetHere: 'Click "Reveal" in the left sidebar, then select "Contacts".',
    whatCanDo: [
      'View identified contacts visiting your site',
      'See their job title, company, and engagement',
      'View their visit history and pages viewed',
      'Add to contact lists',
      'Sync with your CRM'
    ],
    dataShown: 'Identified contacts with: name, title, company, email (if available), LinkedIn, and visit details.',
    nextStep: 'Review high-value visitors and pass hot leads to sales. Use this data for personalized outreach.',
    marketingContext: 'Know exactly WHO from your target accounts is visiting. This enables sales to reach out at the perfect moment with relevant context.'
  },

  // ANALYTICS
  'analytics-reports': {
    title: 'Analytics Reports',
    what: 'Create and view custom reports on your ABM performance. Build reports on visitors, campaigns, accounts, and conversions.',
    where: 'This is at Analytics > Reports (app.abmatic.ai/analytics/reports)',
    howToGetHere: 'Click "Analytics" in the left sidebar, then select "Reports".',
    whatCanDo: [
      'View existing reports',
      'Create new custom reports',
      'Filter and segment data',
      'Export reports to CSV/Excel',
      'Schedule automated reports',
      'Share reports with team members'
    ],
    dataShown: 'List of available reports with names, types, and last updated dates.',
    nextStep: 'Create reports for key metrics: target account engagement, campaign performance, conversion rates.',
    marketingContext: 'Build the reports you need to prove ABM ROI and optimize campaigns. Track engagement trends over time.'
  },

  'analytics-dashboards': {
    title: 'Analytics Dashboards',
    what: 'Visual dashboards showing your ABM metrics. Combine multiple reports into a single view for monitoring.',
    where: 'This is at Analytics > Dashboards (app.abmatic.ai/analytics/dashboards)',
    howToGetHere: 'Click "Analytics" in the left sidebar, then select "Dashboards".',
    whatCanDo: [
      'View dashboards with multiple metrics',
      'Create custom dashboards',
      'Add widgets and charts',
      'Share dashboards with stakeholders',
      'Set as home dashboard'
    ],
    dataShown: 'Dashboard cards with names, widget counts, and last updated dates.',
    nextStep: 'Create a dashboard for executive reporting with key ABM metrics.',
    marketingContext: 'Perfect for stakeholder reporting. Build dashboards that show ABM impact at a glance.'
  },

  // INTEGRATIONS
  'integrations-hub': {
    title: 'Integrations Hub',
    what: 'Connect Abmatic AI with your other marketing and sales tools. Available integrations include CRMs (Salesforce, HubSpot), ad platforms, and more.',
    where: 'This is at Integrations (app.abmatic.ai/integrations)',
    howToGetHere: 'Click "Integrations" in the left sidebar (under Settings area).',
    whatCanDo: [
      'View all available integrations',
      'Connect your CRM (Salesforce or HubSpot)',
      'Set up ad platform integrations (LinkedIn, Google)',
      'Configure Slack notifications',
      'Manage existing connections',
      'View sync status and logs'
    ],
    dataShown: 'Available integrations with connection status (connected/not connected) and configuration options.',
    nextStep: 'Connect your CRM first - this enables bi-directional sync of accounts, contacts, and activity data.',
    marketingContext: 'CRM integration is essential for ABM. Sync your target accounts, push visitor data to sales, and close the loop on attribution.'
  },

  // AI AGENTS
  'ai-agents-hub': {
    title: 'AI Agents Hub',
    what: 'Interact with Abmatic AI\'s intelligent agents. These AI assistants can help with account research, campaign recommendations, and more.',
    where: 'This is at AI Agents (app.abmatic.ai/ai-agents)',
    howToGetHere: 'Click "AI Agents" in the left sidebar (at the top, with the sparkle icon).',
    whatCanDo: [
      'Chat with ABM Agent for account research and recommendations',
      'Get AI-powered campaign suggestions',
      'Research target accounts with AI assistance',
      'Generate personalization copy',
      'Ask questions about your data'
    ],
    dataShown: 'AI agent selection with available capabilities.',
    nextStep: 'Start a conversation with the ABM Agent to get account recommendations or campaign ideas.',
    marketingContext: 'Your AI-powered ABM assistant. Use it to scale your account research and get data-driven recommendations.'
  },

  // SETTINGS
  'settings-account': {
    title: 'Account Settings',
    what: 'Manage your Abmatic AI account information including company details, domain settings, and preferences.',
    where: 'This is at Settings > Account (app.abmatic.ai/settings/account)',
    howToGetHere: 'Click the gear icon or "Settings" in the sidebar, then select "Account".',
    whatCanDo: [
      'Update company name and website',
      'Manage account domain settings',
      'Configure data collection preferences',
      'View account ID and API credentials',
      'Update notification preferences'
    ],
    dataShown: 'Account information: company name, domain, account ID, and configuration options.',
    nextStep: 'Ensure your company details are accurate for proper visitor matching.',
    marketingContext: 'Keep your account settings current, especially the domain settings for accurate company identification.'
  },

  'settings-users': {
    title: 'User Management',
    what: 'Manage team members who have access to your Abmatic AI account. Invite new users and manage permissions.',
    where: 'This is at Settings > Users (app.abmatic.ai/settings/users)',
    howToGetHere: 'Click "Settings" then select "Users".',
    whatCanDo: [
      'View all users on your account',
      'Invite new team members',
      'Set user roles and permissions',
      'Remove users',
      'Resend invitations'
    ],
    dataShown: 'User list with: name, email, role, status (active/pending), and last login.',
    nextStep: 'Invite your marketing team members and sales stakeholders who need access.',
    marketingContext: 'Give your whole ABM team access. Consider inviting sales for Reveal access and executives for dashboard viewing.'
  },

  'settings-usage': {
    title: 'Usage & Billing',
    what: 'View your account usage metrics and billing information. Track API credits, visitor limits, and subscription details.',
    where: 'This is at Settings > Usage (app.abmatic.ai/settings/usage)',
    howToGetHere: 'Click "Settings" then select "Usage".',
    whatCanDo: [
      'View current usage vs. limits',
      'Check API credit consumption',
      'See billing history',
      'Upgrade plan if needed',
      'Download invoices'
    ],
    dataShown: 'Usage metrics: visitors tracked, API calls, reveals used, and remaining credits.',
    nextStep: 'Monitor usage to ensure you don\'t exceed limits. Upgrade if approaching thresholds.',
    marketingContext: 'Keep an eye on usage, especially visitor reveals and API credits, to plan for scaling.'
  },

  'settings-custom-fields': {
    title: 'Custom Fields',
    what: 'Define custom fields for accounts and contacts to track data specific to your business needs.',
    where: 'This is at Settings > Custom Fields (app.abmatic.ai/settings/custom-fields)',
    howToGetHere: 'Click "Settings" then select "Custom Fields".',
    whatCanDo: [
      'Create custom account fields',
      'Create custom contact fields',
      'Edit field names and types',
      'Map to CRM custom fields',
      'Delete unused fields'
    ],
    dataShown: 'List of custom fields for accounts and contacts with names and types.',
    nextStep: 'Add custom fields that match your CRM structure for seamless data sync.',
    marketingContext: 'Align your Abmatic data model with your CRM. Add fields like "Account Tier", "ICP Score", or "Target Persona".'
  },

  'settings-notifications': {
    title: 'Notification Settings',
    what: 'Configure how and when you receive notifications about account activity, conversions, and system events.',
    where: 'This is at Settings > Notifications (app.abmatic.ai/settings/notifications)',
    howToGetHere: 'Click "Settings" then select "Notifications".',
    whatCanDo: [
      'Enable/disable email notifications',
      'Configure Slack notifications',
      'Set notification frequency',
      'Choose which events trigger notifications',
      'Set up alerts for specific accounts'
    ],
    dataShown: 'Notification preferences and current settings.',
    nextStep: 'Set up Slack notifications to get real-time alerts when target accounts visit.',
    marketingContext: 'Get instant alerts when hot accounts visit. Perfect for sales follow-up at the right moment.'
  },

  'settings-export': {
    title: 'Data Export',
    what: 'Export your Abmatic AI data for analysis or backup. Download accounts, contacts, and activity data.',
    where: 'This is at Settings > Export (app.abmatic.ai/settings/export)',
    howToGetHere: 'Click "Settings" then select "Export".',
    whatCanDo: [
      'Export account data to CSV',
      'Export contact data',
      'Export activity and engagement data',
      'Schedule recurring exports',
      'Download previous exports'
    ],
    dataShown: 'Export options and history of previous exports.',
    nextStep: 'Export data periodically for backup or for analysis in other tools.',
    marketingContext: 'Use exports for advanced analysis in Excel or for data warehouse integration.'
  },

  'settings-ai-agents': {
    title: 'AI Agents Settings',
    what: 'Configure the behavior of AI agents. Set context, preferences, and constraints for AI-powered features.',
    where: 'This is at Settings > AI Agents (app.abmatic.ai/settings/ai-agents)',
    howToGetHere: 'Click "Settings" then select "AI Agents".',
    whatCanDo: [
      'Set AI context and company information',
      'Configure agent behavior',
      'Set guardrails and constraints',
      'Enable/disable specific AI features'
    ],
    dataShown: 'AI configuration options and current settings.',
    nextStep: 'Add company context to help AI provide more relevant recommendations.',
    marketingContext: 'Customize AI to understand your ICP, messaging, and ABM strategy for better recommendations.'
  },

  'settings-slack': {
    title: 'Slack Integration Settings',
    what: 'Configure Slack integration for real-time notifications. Get alerts in Slack when target accounts visit or convert.',
    where: 'This is at Settings > Slack (app.abmatic.ai/settings/slack)',
    howToGetHere: 'Click "Settings" then select "Slack".',
    whatCanDo: [
      'Connect your Slack workspace',
      'Choose notification channels',
      'Configure which events trigger Slack messages',
      'Set up account-specific alerts',
      'Disconnect Slack'
    ],
    dataShown: 'Slack connection status, configured channels, and notification settings.',
    nextStep: 'Connect Slack and set up a channel for target account visit notifications.',
    marketingContext: 'Essential for real-time ABM. Sales can get instant Slack alerts when target accounts are on your site.'
  },

  // MODALS
  'account-create-modal': {
    title: 'Create Account List Modal',
    what: 'The modal for creating new account lists. Choose how you want to build your list: from filters, CSV upload, CRM import, or AI recommendations.',
    where: 'This modal appears over the Accounts page',
    howToGetHere: 'Click "Create Collection" or the "+" button on the Accounts page.',
    whatCanDo: [
      'Build from Filters - Create dynamic lists based on account criteria',
      'Upload CSV - Import accounts from a spreadsheet',
      'Import from CRM - Pull accounts from Salesforce or HubSpot',
      'AI Recommendations - Get AI-suggested accounts based on your ICP'
    ],
    dataShown: 'List creation options with descriptions.',
    nextStep: 'Choose the method that fits your needs. CSV for existing lists, Filters for dynamic segments, CRM for synced lists.',
    marketingContext: 'This is where ABM targeting starts. Most teams start with a CSV of target accounts, then graduate to CRM sync and AI recommendations.'
  },

  'contact-create-modal': {
    title: 'Create Contact List Modal',
    what: 'The modal for creating new contact lists. Similar to accounts, choose how to build your list.',
    where: 'This modal appears over the Contacts page',
    howToGetHere: 'Click "Create Collection" or the "+" button on the Contacts page.',
    whatCanDo: [
      'Build from Filters - Create lists based on contact criteria',
      'Upload CSV - Import contacts from a spreadsheet',
      'Import from CRM - Pull contacts from Salesforce or HubSpot'
    ],
    dataShown: 'List creation options with descriptions.',
    nextStep: 'Choose your method. CSV for existing contact lists, CRM for synced contacts.',
    marketingContext: 'Build persona-based lists (e.g., "CMOs at Target Accounts") for personalized campaigns.'
  },

  // NEW: AG Grid detailed views
  'accounts-all-grid': {
    title: 'All Accounts AG Grid View',
    what: 'A powerful data grid showing all accounts in your database. This uses AG Grid with advanced filtering, sorting, column customization, and charting capabilities.',
    where: 'This is at Accounts > All (app.abmatic.ai/accounts/all)',
    howToGetHere: 'Navigate to Accounts and click "All Accounts" or go directly via URL.',
    whatCanDo: [
      'Use column filters to search by any attribute (click the filter icon on any column)',
      'Multi-select accounts using checkboxes to bulk add to lists',
      'Sort by clicking column headers',
      'Drag columns to rearrange layout',
      'Right-click for context menu options',
      'Create charts from selected data',
      'Export filtered data to CSV',
      'Save filter presets for quick access'
    ],
    dataShown: 'Account data in rows with columns for: Company Name, Website, Industry, Employee Count, Location, Engagement Score, Last Visit Date, Technologies, and custom fields.',
    nextStep: 'Use filters to find accounts matching your ICP criteria. Select accounts and add them to a target list, or export for further analysis.',
    marketingContext: 'This is your account intelligence powerhouse. Use filters like "Industry = SaaS AND Employees > 100 AND Visited Last 30 Days" to find your hottest target accounts.'
  },

  'contacts-all-grid': {
    title: 'All Contacts AG Grid View',
    what: 'A powerful data grid showing all contacts in your database with professional information, engagement data, and filtering capabilities.',
    where: 'This is at Contacts > All (app.abmatic.ai/contacts/all)',
    howToGetHere: 'Navigate to Contacts and click "All Contacts" or go directly via URL.',
    whatCanDo: [
      'Filter contacts by job title, seniority, company, department',
      'Multi-select contacts for bulk actions',
      'Sort by name, company, title, or engagement',
      'View LinkedIn profiles directly',
      'Add selected contacts to lists',
      'Export filtered data',
      'Create charts showing distribution by title/department'
    ],
    dataShown: 'Contact data with: Name, Email, Job Title, Company, Department, Seniority, LinkedIn URL, Last Activity Date, and engagement metrics.',
    nextStep: 'Filter to find decision-makers at target accounts (e.g., "Title contains VP AND Company in Target List"). Add to contact lists for personalized campaigns.',
    marketingContext: 'Find and track the buying committee at target accounts. Filter by seniority (VP+) and department (Marketing, IT) to focus on decision-makers.'
  },

  // NEW: CRM Integrations
  'integration-salesforce': {
    title: 'Salesforce Integration',
    what: 'Configure your Salesforce integration. Connect Abmatic AI to your Salesforce org for bi-directional data sync of accounts, contacts, and activities.',
    where: 'This is at Integrations > Salesforce (app.abmatic.ai/integrations/salesforce)',
    howToGetHere: 'Go to Integrations and click on the Salesforce card, or navigate directly.',
    whatCanDo: [
      'Connect to your Salesforce org via OAuth',
      'Configure which objects to sync (Accounts, Contacts, Leads)',
      'Map Abmatic fields to Salesforce fields',
      'Set sync direction (one-way or bi-directional)',
      'Configure sync frequency',
      'View sync logs and troubleshoot issues',
      'Import accounts/contacts from Salesforce campaigns'
    ],
    dataShown: 'Connection status, field mappings, sync settings, and recent sync history.',
    nextStep: 'Connect using OAuth, then configure field mappings. Start with Accounts to sync your target account list.',
    marketingContext: 'Essential for ABM. Sync target accounts from Salesforce, push visitor intelligence back to sales, and ensure data consistency.'
  },

  'integration-hubspot': {
    title: 'HubSpot Integration',
    what: 'Configure your HubSpot integration. Connect Abmatic AI to HubSpot for syncing companies, contacts, and deal data.',
    where: 'This is at Integrations > HubSpot (app.abmatic.ai/integrations/hubspot)',
    howToGetHere: 'Go to Integrations and click on the HubSpot card, or navigate directly.',
    whatCanDo: [
      'Connect to HubSpot via OAuth',
      'Sync Companies and Contacts',
      'Map properties between systems',
      'Import from HubSpot lists',
      'Push visitor data to HubSpot timeline',
      'Sync custom properties',
      'View sync status and logs'
    ],
    dataShown: 'Connection status, property mappings, sync configuration, and history.',
    nextStep: 'Connect via OAuth, configure property mappings, and import your target account list from HubSpot.',
    marketingContext: 'HubSpot users: sync your companies and contacts for unified ABM data. Push website visitor intelligence directly into HubSpot timelines.'
  },

  'integration-pipedrive': {
    title: 'Pipedrive Integration',
    what: 'Configure your Pipedrive integration. Connect Abmatic AI to Pipedrive for syncing organizations and contacts.',
    where: 'This is at Integrations > Pipedrive (app.abmatic.ai/integrations/pipedrive)',
    howToGetHere: 'Go to Integrations and click on the Pipedrive card, or navigate directly.',
    whatCanDo: [
      'Connect to Pipedrive',
      'Sync Organizations and Persons',
      'Configure field mappings',
      'Import deals and pipelines',
      'Push visitor activity to Pipedrive'
    ],
    dataShown: 'Connection status, field mappings, and sync settings.',
    nextStep: 'Connect your Pipedrive account and map fields for Organizations and Persons.',
    marketingContext: 'Pipedrive users: keep your sales pipeline in sync with ABM visitor data.'
  },

  // NEW: Manual add dialogs
  'account-add-manual': {
    title: 'Add Account Manually',
    what: 'Dialog for manually adding a new account to your database. Enter the company website URL and Abmatic AI will enrich the company information.',
    where: 'This modal appears over the All Accounts view',
    howToGetHere: 'On the All Accounts page, click the "Add" or "+" button.',
    whatCanDo: [
      'Enter a company website URL',
      'Abmatic AI auto-enriches company data (industry, size, location, etc.)',
      'Add to a specific target list immediately',
      'Add notes or tags'
    ],
    dataShown: 'Input form for website URL with enrichment preview.',
    nextStep: 'Enter the website URL of the company you want to add. Abmatic AI will automatically pull company information.',
    marketingContext: 'Quick way to add accounts you discover outside your normal sources. Found a great prospect on LinkedIn? Add them here.'
  },

  'contact-add-manual': {
    title: 'Add Contact Manually',
    what: 'Dialog for manually adding a new contact to your database. Enter work email or LinkedIn profile URL for auto-enrichment.',
    where: 'This modal appears over the All Contacts view',
    howToGetHere: 'On the All Contacts page, click the "Add" or "+" button.',
    whatCanDo: [
      'Enter work email address',
      'Or enter LinkedIn profile URL',
      'Abmatic AI auto-enriches contact data (name, title, company, etc.)',
      'Add to a contact list immediately'
    ],
    dataShown: 'Input form for email or LinkedIn URL with enrichment preview.',
    nextStep: 'Enter the email or LinkedIn URL of the contact. Abmatic AI will enrich their professional information.',
    marketingContext: 'Quick way to add key contacts you want to track. Found a decision-maker on LinkedIn? Add them to start tracking their engagement.'
  },
};

class NarrationAgent {
  constructor() {
    this.narratives = {
      generatedDate: new Date().toISOString(),
      screenshots: [],
      summary: { total: 0, narrated: 0, missing: 0 }
    };
  }

  async run() {
    console.log('========================================');
    console.log('AGENT 4: NARRATION AGENT');
    console.log('========================================\n');

    // Load reverification report
    const reverifyPath = path.join(config.outputDir, 'reverification-report.json');
    if (!fs.existsSync(reverifyPath)) {
      console.error('ERROR: reverification-report.json not found');
      console.error('Run Agent 3 first: node scripts/screenshots/pipeline/agent3-reverify.js');
      process.exit(1);
    }

    const reverifyReport = JSON.parse(fs.readFileSync(reverifyPath, 'utf8'));

    // Check if we're approved to proceed
    if (!reverifyReport.decision.status.startsWith('approved')) {
      console.error('ERROR: Screenshots not approved by Agent 3');
      console.error(`Status: ${reverifyReport.decision.status}`);
      console.error('Fix issues and re-run the verification pipeline.');
      process.exit(1);
    }

    // Load capture metadata for additional context
    const metadataPath = path.join(config.outputDir, 'capture-metadata.json');
    const captureMetadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));

    console.log(`Creating narratives for ${captureMetadata.screenshots.length} screenshots\n`);

    // Generate narratives
    for (const screenshot of captureMetadata.screenshots) {
      this.narrate(screenshot);
    }

    // Save narratives
    this.saveNarratives();

    // Print summary
    this.printSummary();
  }

  narrate(screenshot) {
    const { id, description, path: urlPath, flow } = screenshot;
    this.narratives.summary.total++;

    console.log(`Narrating: ${id}`);

    const template = SCREEN_NARRATIVES[id];

    if (!template) {
      console.log(`  WARNING: No narrative template for ${id}\n`);
      this.narratives.summary.missing++;

      // Create basic narrative from metadata
      this.narratives.screenshots.push({
        id,
        title: this.formatTitle(id),
        imagePath: `/img/screenshots/verified/${id}.png`,
        narrative: {
          what: description || `This is the ${this.formatTitle(id)} screen.`,
          where: urlPath ? `This is at ${urlPath}` : 'Part of the Abmatic AI interface',
          howToGetHere: 'Navigate using the sidebar or direct URL.',
          whatCanDo: ['View and interact with this feature'],
          dataShown: 'Various data and controls for this feature.',
          nextStep: 'Explore the options available on this screen.',
          marketingContext: 'Use this feature as part of your ABM workflow.'
        },
        flow,
        hasTemplate: false
      });
      return;
    }

    this.narratives.summary.narrated++;

    this.narratives.screenshots.push({
      id,
      title: template.title,
      imagePath: `/img/screenshots/verified/${id}.png`,
      narrative: {
        what: template.what,
        where: template.where,
        howToGetHere: template.howToGetHere,
        whatCanDo: template.whatCanDo,
        dataShown: template.dataShown,
        nextStep: template.nextStep,
        marketingContext: template.marketingContext
      },
      flow,
      hasTemplate: true
    });

    console.log(`  Narrated: ${template.title}\n`);
  }

  formatTitle(id) {
    return id
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  saveNarratives() {
    const narrativesPath = path.join(config.outputDir, 'narratives.json');
    fs.writeFileSync(narrativesPath, JSON.stringify(this.narratives, null, 2));
    console.log(`Narratives saved to: ${narrativesPath}\n`);
  }

  printSummary() {
    console.log('========================================');
    console.log('NARRATION SUMMARY');
    console.log('========================================');
    console.log(`Total screenshots: ${this.narratives.summary.total}`);
    console.log(`With narratives: ${this.narratives.summary.narrated}`);
    console.log(`Missing templates: ${this.narratives.summary.missing}`);

    console.log('\nNext step: Run Agent 5 (Documentation Writer)');
    console.log('Command: node scripts/screenshots/pipeline/agent5-write.js');
  }
}

// Run
if (require.main === module) {
  const agent = new NarrationAgent();
  agent.run().catch(console.error);
}

module.exports = { NarrationAgent, SCREEN_NARRATIVES };
