---
id: contact-reveal
title: Contact Reveal
sidebar_label: Contact Reveal
sidebar_position: 3
---

# Contact Reveal

Stop wondering "who" is visiting your website. Contact Reveal identifies the actual people behind anonymous website visits, giving you verified contact information for real decision-makers at companies researching your solution.

## The Business Impact

| Before Contact Reveal | With Contact Reveal |
|----------------------|---------------------|
| "A company visited our pricing page" | "Sarah Chen, VP of Engineering at Nike, visited pricing" |
| Cold outreach to generic contacts | Warm outreach to engaged individuals |
| Guessing who to contact | Knowing exactly who to reach |
| Days to build prospect lists | Instant access to verified contacts |
| Low response rates | Higher engagement from informed outreach |

## How Contact Reveal Works

Contact Reveal uses multiple data sources to identify individual visitors:

```
Website Visit → IP Identification → Contact Database Match → Verified Contact
```

**Identification Methods:**

| Method | Description | Confidence |
|--------|-------------|------------|
| **Form Submissions** | Visitor fills out a form on your site | Very High |
| **Email Link Clicks** | Visitor clicks link in your marketing email | Very High |
| **IP + Database Match** | IP identification combined with contact databases | High to Moderate |
| **Behavioral Signals** | Session patterns matched to known profiles | Moderate |

## Viewing Revealed Contacts

Navigate to **Reveal** > **Contacts** to see identified individuals.

![Revealed Contacts - 943 contacts identified with engagement data](/img/screenshots/reveal-contacts.png)
*Contact Reveal showing 943 identified contacts with engagement scores and company information*

### Dashboard Summary

At the top, you'll see contacts grouped by engagement level:

| Metric | What It Means | Action |
|--------|---------------|--------|
| **All Contacts** | Total revealed contacts | Your prospect pool size |
| **Very High** | Multiple visits, high engagement | Priority for immediate outreach |
| **High** | Strong engagement signals | Add to active sequences |
| **Moderate** | Some engagement activity | Nurture with content |
| **Low/Very Low** | Minimal engagement | Monitor for re-engagement |

### Contact Information

For each revealed contact, you'll see:

| Field | Description | Why It Matters |
|-------|-------------|----------------|
| **Work Email** | Verified business email | Direct outreach channel |
| **Full Name** | First and last name | Personalized communication |
| **Temperature** | Cold, Warm, or None | Engagement readiness |
| **Website Engagement Score** | Numeric score based on activity | Prioritization metric |
| **Job Title Role** | Department/function (Marketing, Engineering) | Messaging alignment |
| **Job Title** | Specific role | Decision-making authority |
| **Job Company Name** | Company they work for | Account context |

### Temperature Indicators

| Temperature | Meaning | Recommended Action |
|-------------|---------|-------------------|
| **Warm** | Active engagement, recent visits | Prioritize for outreach |
| **Cold** | Past engagement, not recent | Re-engagement campaign |
| **None** | New or limited data | Monitor and nurture |

## Taking Action on Revealed Contacts

### Add to Contact Lists

Build targeted lists for campaigns:

1. Select contacts using checkboxes
2. Click **Add to Contacts**
3. Choose an existing list or create new

**Pro tip:** Create lists by engagement level—separate "Hot Leads" from "Nurture" contacts.

### Push to CRM

Sync valuable contacts to your CRM automatically:

1. Select contacts to sync
2. Click **Push to CRM**
3. Map fields to your CRM schema
4. Complete the sync

**Synced data includes:**
- Contact information (name, email, title)
- Company association
- Engagement score
- Page views and activity

### Export Data

Download contacts for use in other tools:

1. Select contacts (or export all)
2. Click **Export**
3. Download CSV file

## Configuring Contact Reveal

Optimize Contact Reveal for your needs in **Settings** > **Contact Reveal**.

### Accuracy vs. Volume

| Setting | Accuracy | Volume | Best For |
|---------|----------|--------|----------|
| **10-30%** | Lower | Higher | Maximum coverage, broad outreach |
| **40-60%** | Balanced | Balanced | General B2B use (recommended) |
| **70-100%** | Higher | Lower | High-value accounts, precision targeting |

The default is **50%** which provides a good balance of volume and accuracy for most B2B companies.

### Reveal Filters

Focus reveals on contacts that matter most:

**Example filters:**
- Company size > 100 employees
- Industry = Technology or Finance
- Country = United States

This saves credits and ensures you only see relevant contacts.

## Best Practices

### Do's

| Practice | Why |
|----------|-----|
| **Prioritize by engagement** | Contact "Warm" prospects first |
| **Cross-reference with accounts** | Connect contacts to company context |
| **Personalize outreach** | Reference pages they viewed |
| **Sync to CRM quickly** | Strike while interest is high |
| **Set up reveal filters** | Focus on ICP contacts only |

### Don'ts

| Avoid | Why |
|-------|-----|
| **Contacting everyone at once** | Prioritization beats volume |
| **Generic outreach** | You have behavior data—use it |
| **Ignoring engagement scores** | They indicate buying intent |
| **Letting contacts go stale** | Act within days, not weeks |

## High-Impact Workflows

### 1. Sales Pipeline Acceleration

```
Revealed Contact (Pricing Page + High Engagement)
    ↓
Push to CRM as Lead → Assign to Sales Rep
    ↓
Personalized Outreach: "I noticed you were researching [feature]..."
```

### 2. ABM Account Penetration

```
Target Account visits → Identify specific contacts
    ↓
Add to Account-Based Campaign
    ↓
Multi-threaded outreach to buying committee
```

### 3. Event Follow-Up

```
Webinar registration page visitors
    ↓
Reveal attendee contacts → Add to event list
    ↓
Pre-event: "Looking forward to seeing you..."
Post-event: "Thanks for joining..."
```

## Credit Usage

Contact Reveal uses credits from your plan:

| Activity | Credit Cost |
|----------|-------------|
| New contact revealed | 1 credit |
| Same contact returning | No additional cost |

**Monitor usage:** Go to **Settings** > **Usage** to track credit consumption.

**Optimize credits:**
- Use reveal filters to target ICP only
- Set higher accuracy thresholds if credit-constrained
- Focus on high-value page visitors

## Troubleshooting

### Low Reveal Volume

| Issue | Cause | Solution |
|-------|-------|----------|
| Few contacts revealed | Accuracy too high | Lower accuracy setting to 40-50% |
| Wrong contacts | No reveal filters | Add ICP filters |
| Missing contacts | Traffic from VPNs | Normal—some traffic unidentifiable |

### Data Quality Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Outdated job titles | Database lag | Verify on LinkedIn before outreach |
| Wrong company | Multi-company IPs | Cross-reference with page behavior |
| Missing engagement | New visitor | Wait for more activity |

### CRM Sync Problems

| Issue | Cause | Solution |
|-------|-------|----------|
| Push fails | Field mapping issue | Check required fields in CRM |
| Duplicates created | No matching rule | Enable duplicate detection |
| Data not syncing | Integration disconnected | Reconnect in Settings |

## Related Features

| Feature | Use With Contact Reveal |
|---------|------------------------|
| [Company Identification](/visitor-tracking/company-identification) | See the full company picture |
| [Page Views](/visitor-tracking/page-views) | Understand what contacts browsed |
| [Contact Lists](/audiences/contacts) | Organize revealed contacts |
| [CRM Sync](/audiences/crm-sync) | Automate contact transfer |
| [Email Sequences](/campaigns/email-campaigns) | Engage revealed contacts |
