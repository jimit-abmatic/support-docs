---
id: quick-start
title: Quick Start Guide
sidebar_label: Quick Start
sidebar_position: 1
---

# Quick Start Guide

Set up your website as a personalized ABM engine in a single sitting. By the end of this guide, you'll be identifying anonymous visitors, syncing with your CRM, and delivering personalized experiences to your target accounts.

:::tip New to the app?
If you'd like a quick tour of the sidebar, top bar, search, and dark mode first, see [Navigating Abmatic AI](/getting-started/navigation).
:::

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

Click the **Installation** icon at the **bottom** of the left icon sidebar.

![The Installation page with your script and a live status indicator](/img/screenshots/qs-installation.png)

*The Installation page shows your unique tracking script and its current status.*

### Copy Your Script

Your script looks like this:

```html
<script async src="https://clients.abmatic.ai/YOUR_ID.js"></script>
```

Click directly on the script code to copy it to your clipboard, then save it somewhere — you'll add it to your site next.

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
4. Paste your Abmatic AI script
5. Set trigger to **All Pages**
6. Publish

### Verify Installation

After adding the script:

1. Return to the **Installation** page (bottom of the left sidebar)
2. Look at the **Status** indicator near the bottom of the page — it turns **Active** once Abmatic AI detects the script and your first visitor
3. It can take a few minutes for the first visitor to register

![Installation page showing an Active status indicator](/img/screenshots/install-status-verified.png)

*An "Active" status confirms your script is working and visitor data is flowing.*

:::tip Verification Not Working?
- Check script is in `<head>`, not `<body>`
- Disable any adblockers and test
- Clear your browser cache
- See [Script Troubleshooting](/troubleshooting/script-issues)
:::

---

## Step 5: Explore the Home Page

Now that your script is installed, take a moment to explore your Home page. It's the first thing you see when you log in (click the Abmatic AI logo at any time to return to it).

The Home page has **two tabs**:

| Tab | What It Shows |
|-----|---------------|
| **Overview** | Five summary cards (Accounts, Contacts, Reports, Campaigns, Collections) plus "Recently Viewed" panels for quick access |
| **Dashboard** | A customizable grid of analytics report widgets you can build for yourself |

The **Overview** tab loads by default.

![Home page Overview tab with five summary cards and recently viewed panels](/img/screenshots/qs-home-overview.png)

*The Overview tab gives you live counts and quick links to your recent work.*

| Summary Card | Counts | Clicking It Goes To |
|--------------|--------|---------------------|
| **Accounts** | Total accounts in your database | All Accounts |
| **Contacts** | Total contacts | All Contacts |
| **Reports** | Saved analytics reports | Analytics Reports |
| **Campaigns** | All campaigns (active + inactive) | Campaigns list |
| **Collections** | Saved account and contact collections | Accounts |

:::tip Learn more
For a full tour of the Home page, including building your own Dashboard tab, see [Home Dashboard](/getting-started/home-dashboard).
:::

---

## Step 6: Connect Your CRM (Recommended)

Connecting your CRM creates a powerful two-way data flow that supercharges your ABM strategy:

| Benefit | What It Means For You |
|---------|----------------------|
| **Bi-directional sync** | Accounts and contacts stay current in both systems automatically |
| **Enhanced targeting** | Use CRM fields like deal stage, owner, and custom properties for precision targeting |
| **Visitor enrichment** | See CRM context when anonymous visitors are identified on your site |
| **Campaign attribution** | Track which personalization campaigns influence pipeline and revenue |

### Open Integrations

1. Click the **Settings / account** icon in the top-right toolbar
2. Open the **Integrations** section

![The Integrations hub showing all available connections](/img/screenshots/integrations-hub.png)

*The Integrations hub shows every connection you can set up — CRMs, ad networks, calendars, and more.*

### Connect Salesforce or HubSpot

1. Find **Salesforce** or **HubSpot** in the hub and click it
2. Click **Connect**
3. Log in with your CRM credentials
4. Approve the requested permissions

### Verify the Connection

After connecting, you'll see a **Connected** status, the last sync time, and an option to configure field mapping and sync settings.

**Full setup guides:**
- [Salesforce Setup](/integrations/crm/salesforce-setup)
- [HubSpot Setup](/integrations/crm/hubspot-setup)

---

## Step 7: View Your First Visitors

This is where the magic happens. Within minutes of installing the script, you'll start seeing which companies are visiting your website—even if they never fill out a form.

### Check Visitor Reveal

1. Click **Visitor Reveal** in the left icon sidebar
2. Use the **Accounts** and **Contacts** tabs at the top to switch between identified companies and identified people

![Visitor Reveal with the Accounts and Contacts tabs](/img/screenshots/qs-reveal-accounts.png)

*Identified companies and contacts appear here as visitors arrive. Until your first visitor is detected, you'll see a friendly "no visiting companies yet" message.*

### What You'll See

For each identified account, Visitor Reveal shows firmographic details (such as industry, company size, and location), recent visit activity, and a **Reveal Confidence** level (from Very High down to Very Low) so you can judge how certain the match is.

:::info No Visitors Yet?
- Visit your own site to test
- It can take a few minutes for the first visitor to register
- If nothing shows after a while, re-check your script installation
:::

---

## Step 8: Create Your First Collection

A **Collection** is a saved list of accounts (or contacts) you want to target. Collections come in two flavors:

- **Dynamic Collection** — built from filters; it updates automatically as accounts start or stop matching your criteria.
- **Static Collection** — a fixed list you build by uploading a CSV or importing from your CRM.

### Open Accounts

1. Click **Accounts** in the left icon sidebar
2. Open the **Collections** view

![The Accounts area where you create and manage collections](/img/screenshots/accounts-list.png)

*View and manage your account collections here.*

### Create a New Collection

When you create a collection, you choose how to build it:

| Method | Creates | Best For |
|--------|---------|----------|
| **Build from Filters** | A Dynamic Collection | Lists that auto-update as accounts match |
| **Upload CSV** | A Static Collection | Existing spreadsheet lists |
| **Import from CRM** | A Static Collection | Lists already in your CRM |

![Choosing how to build a new collection](/img/screenshots/account-create-modal.png)

*The create dialog lets you pick filters, a CSV upload, or a CRM import.*

### Example: Industry-Based Dynamic Collection

1. Choose **Build from Filters**
2. Add the condition: **Industry** is **Technology**
3. Name it "Technology Companies"
4. Click **Save**

Your new collection appears in the Collections list and keeps itself up to date as new technology accounts are identified.

---

## Step 9: Launch Your First Campaign

Here's where ABM gets real. You're about to create a personalized experience that speaks directly to your target accounts—turning generic website visits into tailored journeys that convert.

### Navigate to Campaigns

1. Click **Campaigns** in the left icon sidebar
2. Click **+ CAMPAIGN** to open the create dialog

### Choose a Campaign Type

The create dialog shows every campaign type, organized into three columns:

| Column | Campaign Types |
|--------|----------------|
| **Personalization** | Inbound, Outbound, A/B Testing, Widget |
| **Advertising** | Display Advertising, LinkedIn, OpenAI Ads, Retargeting |
| **Agentic** | Agentic Flow, Sequence, Intent, Agentic Chat |

For your first campaign, choose **Inbound** under **Personalization** — it personalizes your website for any visitor who matches your rules.

![The Create Campaign dialog with Personalization, Advertising, and Agentic columns](/img/screenshots/qs-create-campaign.png)

*Pick a type from one of the three columns. Inbound is the quickest way to see personalization in action.*

### Set Up Targeting

1. Open your new campaign and click the **Audience** tab
2. Add a filter, such as **Industry** is **Technology**
3. Save your rule

### Add a Page to Personalize

1. Click the **Pages** tab
2. Click **Add Page**
3. Enter your homepage URL (wildcards like `/products/*` are supported)
4. Add the page

### Edit in the Visual Editor

1. Click your page to open the **Visual Editor** — your live page loads with an editing panel on the right
2. Click your headline to select it
3. Insert a personalization variable, e.g. `Welcome, {{mt_industry}} leader!`
4. Click **Publish**

Your campaign goes live immediately, and matching visitors see your personalized content right away.

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

### As Your Data Grows

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
- [ ] Installation status shows **Active**
- [ ] (Optional) CRM connected
- [ ] Can see visitors in **Visitor Reveal**
- [ ] First collection created
- [ ] First campaign launched

**Congratulations!** You're now running account-based marketing with Abmatic AI. Your website is no longer a static brochure—it's a dynamic, personalized experience engine that identifies, engages, and converts your target accounts.

:::tip What Successful Teams Do Next
The highest-performing Abmatic AI users typically:
1. Add personalization to their top 3-5 landing pages within the first week
2. Set up Slack notifications to alert sales when target accounts visit
3. Create industry-specific content variations for their key verticals
4. Connect conversion tracking to measure real business impact
:::
