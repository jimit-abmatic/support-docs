---
id: first-campaign
title: Create Your First Campaign
sidebar_label: First Campaign
sidebar_position: 3
---

# Create Your First Campaign

This guide walks you through creating your first personalized campaign in Abmatic AI. We'll create a website personalization campaign that shows custom content to your target accounts.

## Prerequisites

Before creating a campaign, ensure you have:
- [Installed the tracking script](/getting-started/install-script)
- Created at least one [target audience](/audiences/overview)

## Step 1: Navigate to Campaigns

1. Log in to [app.abmatic.ai](https://app.abmatic.ai)
2. Click **Campaigns** in the left sidebar

![Campaigns List](/img/screenshots/campaigns-list.png)

## Step 2: Create New Campaign

1. Click the **Create Campaign** button
2. Select your campaign type:

| Campaign Type | Best For |
|--------------|----------|
| **Website Personalization** | Dynamic banners, CTAs, and content on your website |
| **Email Campaign** | Personalized email sequences |
| **LinkedIn Ads** | Account-targeted LinkedIn advertising |
| **Google Ads** | Customer Match and display advertising |
| **CRM Campaign** | Triggered actions in your CRM |

For this guide, we'll select **Website Personalization**.

## Step 3: Configure Campaign Settings

### Basic Information

- **Campaign Name**: Enter a descriptive name (e.g., "Enterprise Homepage Personalization")
- **Status**: Leave as "Draft" for now

### Target Audience

1. Click **Select Audience**
2. Choose from your existing audiences or create a new one
3. You can target:
   - **Account Lists** - Specific companies
   - **Segments** - Dynamic groups based on criteria
   - **All Visitors** - Everyone (for A/B testing)

### Campaign Content

1. Click **Add Page** to create personalized content
2. Enter the URL where personalization should appear
3. Use the **Visual Editor** to modify page elements:
   - Change headlines, text, and images
   - Show/hide sections
   - Add personalized CTAs
   - Insert dynamic values (company name, industry, etc.)

![Page Editor](/img/screenshots/campaign-create.png)

## Step 4: Add Dynamic Personalization

Make your content truly personal with dynamic values:

1. In the Visual Editor, select a text element
2. Click the **Dynamic Value** button
3. Choose from available variables:
   - `{{company_name}}` - Visitor's company name
   - `{{industry}}` - Company industry
   - `{{employee_count}}` - Company size
   - `{{location}}` - Company location

Example:
```
Welcome, {{company_name}}! See how leading {{industry}} companies use our platform.
```

## Step 5: Set Up Conversion Tracking

Track how your campaign performs:

1. Go to the **Conversions** tab
2. Click **Add Conversion Goal**
3. Define what counts as a conversion:
   - Form submission
   - Button click
   - Page visit
   - Custom event

## Step 6: Preview and Test

Before launching:

1. Click **Preview**
2. Enter a test company name or IP
3. View how the personalization will appear
4. Test on different pages and scenarios

## Step 7: Activate Your Campaign

When you're satisfied:

1. Review all settings
2. Change status to **Active**
3. Click **Save and Activate**

Your campaign is now live!

## Monitoring Performance

After activation:

1. Go to **Campaigns** → select your campaign
2. View the **Performance** tab for:
   - Impressions (visitors who saw personalization)
   - Conversions
   - Conversion rate
   - Lift compared to baseline

## Best Practices

### Content Tips
- Keep personalization subtle but impactful
- Focus on value proposition relevant to the account
- Test different approaches with A/B testing

### Targeting Tips
- Start with your highest-value accounts
- Create segments for different industries or company sizes
- Use multiple campaigns for different stages of the buyer journey

### Performance Tips
- Let campaigns run for at least 2 weeks before judging results
- Aim for statistical significance before making changes
- Iterate based on conversion data

## Next Steps

- [Explore the Visual Page Editor](/campaigns/page-editor)
- [Set Up A/B Testing](/campaigns/ab-testing)
- [Create Email Campaigns](/campaigns/email-campaigns)
- [Connect LinkedIn Ads](/campaigns/linkedin-ads)
