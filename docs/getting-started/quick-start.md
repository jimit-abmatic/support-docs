---
id: quick-start
title: Quick Start Guide
sidebar_label: Quick Start
sidebar_position: 1
---

# Quick Start Guide

Transform your website into a personalized ABM engine in under 20 minutes. By the end of this guide, you'll be identifying anonymous visitors, syncing with your CRM, and delivering personalized experiences to your target accounts.

**What you'll achieve:**
- Identify the companies visiting your website in real-time
- Connect your CRM to sync accounts and contacts automatically
- Launch your first personalized campaign to target accounts
- Start measuring engagement and conversions immediately

---

## What You'll Need

| Requirement | Description |
|-------------|-------------|
| Abmatic AI account | [Sign up here](https://app.abmatic.ai/signup) if you don't have one |
| Website access | Ability to edit your site's HTML or access to Google Tag Manager |
| (Optional) CRM credentials | Salesforce or HubSpot admin access for integration |

---

## Step 1: Sign Up for Abmatic AI

If you don't have an account yet:

1. Go to [app.abmatic.ai/signup](https://app.abmatic.ai/signup)
2. Enter your email and create a password
3. Fill in your company details
4. Verify your email address

![Sign Up](/img/screenshots/sign-up.png)

*Enter your details and click Sign Up to create your account.*

---

## Step 2: Log Into Your Account

1. Go to [app.abmatic.ai](https://app.abmatic.ai)
2. Enter your email and password
3. Click **Sign In**

![Sign In](/img/screenshots/sign-in.png)

*Enter your credentials and click Sign In.*

### Forgot Password?

If you can't remember your password:

1. Click **Forgot Password?** on the login page
2. Enter your email
3. Check for the reset link
4. Create a new password

![Forgot Password](/img/screenshots/forgot-password.png)

*Click "Forgot Password" to reset your credentials.*

---

## Step 3: Complete Your Company Setup

**First-time users:** After logging in for the first time, you'll see the Welcome page where you need to enter your company details.

![Welcome Page](/img/screenshots/welcome-page.png)

*Enter your company website and name to get started.*

1. Enter your **Website** (e.g., yourcompany.com)
2. Enter your **Company Name**
3. Click **Submit**

After completing this step, you'll be taken to the home dashboard.

---

## Step 4: Install the Tracking Script (Critical!)

:::caution This Step is Required
**The tracking script must be installed before Abmatic AI can work.** Without it, no visitors will be identified and no personalization will function.
:::

The tracking script is what powers Abmatic AI's core capabilities:
- **Company identification** - Reveal which businesses visit your site
- **Contact enrichment** - Match visitors to known contacts in your CRM
- **Behavior tracking** - Understand engagement patterns and intent signals
- **Real-time personalization** - Deliver dynamic content to target accounts

### Navigate to Installation

1. Click **Settings** in the left sidebar
2. Click **Installation** or **Script Installation**

![Installation Script](/img/screenshots/installation-script.png)

*Your unique tracking script is displayed here.*

### Copy Your Script

Your script looks like this:

```html
<script async src="https://clients.abmatic.ai/YOUR_ID.js"></script>
```

1. Click **Copy Script** or select and copy
2. Save it somewhere - you'll add it to your site next

![Installation Script](/img/screenshots/installation-script.png)

*Click Copy Script to copy your unique tracking code.*

### Add to Your Website

**Option A: Direct HTML**

Add the script to every page's `<head>` section:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Your Site</title>
    <!-- Other head content -->
    <script async src="https://clients.abmatic.ai/YOUR_ID.js"></script>
</head>
<body>
    <!-- Your site content -->
</body>
</html>
```

**Option B: Google Tag Manager (Recommended)**

1. Open Google Tag Manager
2. Click **New Tag**
3. Choose **Custom HTML**
4. Paste your Abmatic script
5. Set trigger to **All Pages**
6. Publish

![Installation Script](/img/screenshots/installation-script.png)

*Add the script as a Custom HTML tag in Google Tag Manager.*

### Verify Installation

After adding the script:

1. Return to **Settings** > **Installation**
2. Look for the green **Verified** status
3. Takes up to 5 minutes to detect

![Settings Script](/img/screenshots/settings-script.png)

*A green checkmark confirms your script is working.*

:::tip Verification Not Working?
- Check script is in `<head>`, not `<body>`
- Disable any adblockers and test
- Clear your browser cache
- See [Script Troubleshooting](/troubleshooting/script-issues)
:::

---

## Step 5: Explore the Home Dashboard

Now that your script is installed, take a moment to explore the home dashboard.

![Home Dashboard](/img/screenshots/home-dashboard.png)

*The home dashboard shows your account overview and key metrics.*

### Dashboard Sections

| Section | What It Shows |
|---------|---------------|
| **Visitors Overview** | Total visitors, identified companies |
| **Recent Activity** | Latest visitor activity |
| **Campaign Performance** | Active campaign metrics |
| **Quick Actions** | Shortcuts to common tasks |

---

## Step 6: Connect Your CRM (Recommended)

Connecting your CRM creates a powerful two-way data flow that supercharges your ABM strategy:

| Benefit | What It Means For You |
|---------|----------------------|
| **Bi-directional sync** | Accounts and contacts stay current in both systems automatically |
| **Enhanced targeting** | Use CRM fields like deal stage, owner, and custom properties for precision targeting |
| **Visitor enrichment** | See CRM context when anonymous visitors are identified on your site |
| **Campaign attribution** | Track which personalization campaigns influence pipeline and revenue |

### Navigate to Integrations

1. Click **Integrations** in the left sidebar

![Integrations Hub](/img/screenshots/integrations-hub.png)

*The Integrations Hub shows all available connections.*

### Connect Salesforce

1. Find **Salesforce** and click it
2. Click **Connect**
3. Log in with your Salesforce credentials
4. Approve the permissions

![Integrations Hub](/img/screenshots/integrations-hub.png)

*Approve the permissions to allow Abmatic to connect to Salesforce.*

### Connect HubSpot

1. Find **HubSpot** and click it
2. Click **Connect**
3. Log in with your HubSpot credentials
4. Approve the permissions

![Integrations Hub](/img/screenshots/integrations-hub.png)

*Approve the permissions to allow Abmatic to connect to HubSpot.*

### Verify Connection

After connecting, you'll see:

- Green **Connected** status
- Last sync time
- Option to configure settings

![Integrations Hub](/img/screenshots/integrations-hub.png)

*A green status indicates your CRM is connected and syncing.*

**Full setup guides:**
- [Salesforce Setup](/integrations/crm/salesforce-setup)
- [HubSpot Setup](/integrations/crm/hubspot-setup)

---

## Step 7: View Your First Visitors

This is where the magic happens. Within minutes of installing the script, you'll start seeing which companies are visiting your website—even if they never fill out a form.

### Check Reveal > Accounts

1. Click **Reveal** in the left sidebar
2. Click **Accounts**

![Reveal Accounts](/img/screenshots/reveal-accounts.png)

*Identified companies appear here within minutes of your first visitor.*

### What You'll See

| Column | Description |
|--------|-------------|
| **Company** | Company name and logo |
| **Industry** | Business sector |
| **Size** | Employee count |
| **Location** | Headquarters |
| **Last Visit** | Most recent visit |
| **Page Views** | Total pages viewed |

:::info No Visitors Yet?
- Visit your own site to test
- Data appears within 5 minutes
- Check script installation if nothing shows
:::

---

## Step 8: Create Your First Audience

Target the right accounts with precision. Abmatic AI lets you build dynamic audiences that automatically update as accounts meet your criteria—no manual list management required.

### Navigate to Audiences

1. Click **Audiences** in the left sidebar
2. Click **Accounts**

![Accounts List](/img/screenshots/accounts-list.png)

*View and manage your target account lists here.*

### Create a New List

1. Click **Create Collection**
2. Choose a method:

| Method | Best For |
|--------|----------|
| **Build from Filters** | Dynamic lists that auto-update |
| **Upload CSV** | Existing spreadsheet lists |
| **Import from CRM** | CRM account lists |

![Account Create Modal](/img/screenshots/account-create-modal.png)

*The collection creation modal shows options for building your audience.*

### Example: Create Industry-Based List

1. Choose **Build from Filters**
2. Add condition: **Industry** is **Technology**
3. Name: "Technology Companies"
4. Click **Save**

![Accounts List](/img/screenshots/accounts-list.png)

*Add filter conditions to define your target audience.*

---

## Step 9: Launch Your First Campaign

Here's where ABM gets real. You're about to create a personalized experience that speaks directly to your target accounts—turning generic website visits into tailored journeys that convert.

### Navigate to Campaigns

1. Click **Campaigns** in the left sidebar

![Campaigns List](/img/screenshots/campaigns-list.png)

*Your campaigns will appear here.*

### Create a Campaign

1. Click **Create Campaign**
2. Select **Inbound** (Website Personalization)

![Campaign Create](/img/screenshots/campaign-create.png)

*Choose Inbound to personalize for visitors matching criteria.*

![Campaign Create Modal](/img/screenshots/campaign-create-modal.png)

*Select your campaign type from the available options.*

### Set Up Targeting

1. Click the **Audience** tab
2. Add a filter: **Industry** is **Technology**
3. Click **Save**

![Accounts List](/img/screenshots/accounts-list.png)

*Set up targeting rules to define who sees your personalization.*

### Add a Page to Personalize

1. Click the **Pages** tab
2. Click **Add Page**
3. Enter your homepage URL
4. Click **Add**

![Campaign Create Modal](/img/screenshots/campaign-create-modal.png)

*Enter your page URL to add it to the campaign.*

### Edit in the Visual Editor

1. Click on your page to open the editor
2. Click on your headline
3. Change it to: `Welcome, {{mt_industry}} leader!`
4. Click **Publish**

![Campaigns List](/img/screenshots/campaigns-list.png)

*Edit your headline in the visual editor and publish when ready.*

### Your Campaign is Live!

Visitors from technology companies will now see personalized content tailored to their industry. Every visitor matching your criteria receives a unique, relevant experience—automatically.

---

## What's Next?

You've laid the foundation for account-based marketing success. Here's how to amplify your results:

### Immediate Next Steps

| Task | Why | Guide |
|------|-----|-------|
| Add more pages to personalize | Scale your impact | [Website Personalization](/campaigns/website-personalization) |
| Set up conversion tracking | Measure results | [Conversions Overview](/conversions/overview) |
| Create more audiences | Better targeting | [Audiences Guide](/audiences/overview) |

### Coming Soon

| Task | When | Guide |
|------|------|-------|
| Review analytics | After 24-48 hours | [Analytics Overview](/analytics/overview) |
| Optimize campaigns | After 1-2 weeks | [A/B Testing](/campaigns/ab-testing) |
| Add LinkedIn ads | When ready to expand | [LinkedIn Ads](/campaigns/linkedin-ads) |

---

## Common Setup Issues

### Script Not Detected

| Issue | Solution |
|-------|----------|
| Status says "Not Detected" | Wait 5 minutes, refresh page |
| Still not working | Check script is in `<head>` |
| Using tag manager | Verify tag is published |
| See full guide | [Script Troubleshooting](/troubleshooting/script-issues) |

### CRM Connection Failed

| Issue | Solution |
|-------|----------|
| Auth error | Use admin account |
| Permissions denied | Approve all requested scopes |
| Connection dropped | Reconnect integration |
| See full guide | [CRM Troubleshooting](/troubleshooting/crm-sync) |

### No Visitors Showing

| Issue | Solution |
|-------|----------|
| Just installed | Wait 5-10 minutes |
| Low traffic site | Test by visiting yourself |
| Remote workers | Office traffic identifies better |
| See full guide | [Company Identification](/visitor-tracking/company-identification) |

---

## Get Help

If you're stuck:

- **Documentation**: You're here! Use the sidebar to explore.
- **Email**: support@abmatic.ai (response within 24 hours)
- **Enterprise**: Your dedicated CSM is available via Slack

---

## Summary Checklist

- [ ] Account created and verified
- [ ] Script installed on website
- [ ] Script status shows "Verified"
- [ ] (Optional) CRM connected
- [ ] Can see visitors in Reveal
- [ ] First audience created
- [ ] First campaign launched

**Congratulations!** You're now running account-based marketing with Abmatic AI. Your website is no longer a static brochure—it's a dynamic, personalized experience engine that identifies, engages, and converts your target accounts.

:::tip What Successful Teams Do Next
The highest-performing Abmatic AI users typically:
1. Add personalization to their top 3-5 landing pages within the first week
2. Set up Slack notifications to alert sales when target accounts visit
3. Create industry-specific content variations for their key verticals
4. Connect conversion tracking to measure real business impact
:::
