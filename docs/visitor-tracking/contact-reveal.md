---
id: contact-reveal
title: Contact Reveal
sidebar_label: Contact Reveal
sidebar_position: 3
---

# Contact Reveal

Stop wondering *who* is visiting your website. Contact Reveal identifies the actual people behind anonymous website visits, giving you verified contact information for real decision-makers at companies researching your solution.

## The Business Impact

Company identification tells you that "someone from a target account visited your pricing page." Contact Reveal goes further — it tells you, for example, that a Senior Manager of Web Experience at that account visited your pricing page with a high engagement score. That is the difference between knowing a company is interested and knowing exactly who to call.

| Before Contact Reveal | With Contact Reveal |
|-----------------------|---------------------|
| "A company visited our pricing page" | "A Senior Manager at that company visited pricing" |
| Cold outreach to generic contacts | Warm outreach to engaged individuals |
| Guessing who to contact | Knowing exactly who to reach |
| Days to build prospect lists | Instant access to verified contacts |

## How Contact Reveal Works

Contact Reveal uses multiple data sources to identify individual visitors:

```
Website Visit → IP Identification → Contact Database Match → Verified Contact
```

When a visitor arrives, Abmatic AI first identifies their company (via IP matching), then cross-references the company data with professional contact data, form-submission history, and email click-through data to determine the specific individual.

### Identification methods

| Method | How It Works | Confidence | Example |
|--------|-------------|------------|---------|
| **Form submissions** | A visitor fills out any form on your site | Very High | A demo request connects their email and name to all browsing history |
| **Email link clicks** | A visitor clicks a link in your marketing email | Very High | The click-through URL identifies them and connects to their session |
| **IP + database match** | IP identification combined with professional contact data | High to Moderate | A company IP matched to known employees in that role |
| **Behavioral signals** | Session patterns matched to known visitor profiles | Moderate | Repeat visit patterns consistent with a known professional |

:::tip Why This Matters for Sales
A contact identified through a form submission or email click has already engaged with your brand. A contact identified through IP + database matching is someone whose company is showing interest. Both are valuable — tailor your outreach accordingly. The first group expects to hear from you; the second needs a softer approach.
:::

## Viewing Revealed Contacts

Open **Visitor Reveal** and select the **Contacts** tab.

![Visitor Reveal Contacts tab listing revealed people with temperature, engagement score, job title, and company](/img/screenshots/cr-contacts.png)

*The Contacts tab. Confidence tiles at the top break revealed contacts down by Reveal Confidence and act as filters. The grid shows Work Email, Full Name, Temperature, Website Engagement Score, Job Title Role, Job Title, and Job Company Name.*

### Dashboard summary tiles

The tiles at the top group contacts by Reveal Confidence — click any tile to filter the grid:

| Tile | What It Means | Action |
|------|---------------|--------|
| **All Contacts** | Total revealed contacts | Your prospect pool size |
| **Very High** | Highest-confidence, most-engaged | Priority for immediate outreach |
| **High** | Strong engagement signals | Add to active sequences |
| **Moderate** | Good engagement signals | Nurture with content |
| **Low** | Some indicators | Verify before outreach |
| **Very Low** | Minimal signals | Monitor for more activity |

### Contact columns

| Column | Description | Why It Matters |
|--------|-------------|----------------|
| **Work Email** | Verified business email | Direct outreach channel — no guessing |
| **Full Name** | First and last name | Personalized communication |
| **Temperature** | Hot, Warm, Cold, or None | At-a-glance engagement readiness |
| **Website Engagement Score** | Numeric score based on activity | Prioritization metric — higher is hotter |
| **Job Title Role** | Department / function (e.g., Engineering, Marketing) | Align messaging to their department |
| **Job Title** | Specific role (e.g., Senior Manager, VP, Director) | Understand decision-making authority |
| **Job Company Name** | Company they work for | Full account context |
| **Reveal Confidence** | Per-contact bucket (Very High → None) | Trust the match accordingly |

### Temperature indicators

| Temperature | Meaning | Recommended Action |
|-------------|---------|--------------------|
| **Hot** | Highly active, frequent recent visits, deep engagement | Reach out now |
| **Warm** | Active engagement, recent visits | Prioritize this week |
| **Cold** | Past engagement, not recently active | Re-engagement or nurture sequence |
| **None** | New or limited data | Monitor and add to awareness campaigns |

## Taking Action on Revealed Contacts

Select contacts with the row checkboxes (or select everything that matches your filter and deselect a few), then use the bulk actions.

### Add to Contacts

1. Select contacts using checkboxes.
2. Click **Add to Contacts**.
3. Choose an existing list or create a new one.

**Pro tip:** create lists by engagement level — keep "Hot Leads" separate from "Nurture" contacts.

### Push to CRM

1. Select contacts to sync.
2. Click **Push to CRM**.
3. Map fields to your CRM schema and complete the sync.

Synced data includes contact information (name, email, title), company association, engagement score, and activity.

### Export

1. Select contacts (or export all that match the filter).
2. Click **Export**.
3. Download a CSV.

## Configuring Contact Reveal

Tune Contact Reveal in **Settings → Contact Reveal**.

![Contact Reveal settings page with the accuracy slider and a filter builder](/img/screenshots/cr-settings.png)

*The Contact Reveal settings tab. The **Accuracy** slider runs from "High Volume / Low Accuracy" (10%) to "Low Volume / High Accuracy" (100%), defaulting to 50%. Below it, the **Filters** builder ("Set up filters to only reveal the contacts that matter to you") lets you add Selector / Operator / Value rules, then Save.*

### Accuracy vs. volume

The accuracy slider is the most important Contact Reveal setting. It controls the confidence threshold for revealing contacts — the greater the accuracy, the lower the volume. It runs from **10% to 100% in steps of 10**, and the default is **50%**.

| Setting | Accuracy | Volume | Best For |
|---------|----------|--------|----------|
| **10–30%** | Lower | Higher | Maximum coverage, broad outreach, awareness lists |
| **40–60%** | Balanced | Balanced | General B2B use (recommended for most companies) |
| **70–100%** | Higher | Lower | High-value accounts, precision targeting, direct sales |

:::tip Finding Your Sweet Spot
Start at the 50% default and watch the quality of revealed contacts for a week. Seeing too many irrelevant contacts? Raise the slider. Need more volume for advertising audiences? Lower it. You can adjust any time without losing existing data.
:::

### Reveal filters

The **Filters** builder lets you reveal only contacts that match your ideal customer profile. Each rule has a **Selector**, an **Operator**, and a **Value**.

**Example rules:**
- Company size greater than 100 employees (skip very small businesses)
- Industry is Technology or Finance (your target verticals)
- Country is United States (your primary market)

Click **+ RULE** to add another rule, then **Save** to apply. Filters take effect immediately for new reveals. Use the trash icon or "Clear all" to remove rules.

## Best Practices

### Do's

| Practice | Why |
|----------|-----|
| **Prioritize by temperature** | Hot and Warm contacts are actively engaged — reach out within 24 hours |
| **Cross-reference with accounts** | Connect a contact to the broader buying committee at their company |
| **Personalize outreach** | Reference the pages they viewed: "I noticed your team has been researching our enterprise features..." |
| **Sync to CRM quickly** | Push Hot/Warm contacts to your CRM the same day they are revealed |
| **Set up reveal filters** | Only reveal contacts that match your ICP, so your team sees relevant prospects |

### Don'ts

| Avoid | Why |
|-------|-----|
| **Contacting every revealed contact** | Prioritization beats volume — focus on quality |
| **Generic outreach** | You have behavior data; use it to be relevant |
| **Ignoring engagement scores** | A high score means something very different from a low one |
| **Letting contacts go stale** | Act within days, not weeks — intent decays fast |
| **Hard-selling Very Low confidence contacts** | Use softer approaches for lower-confidence matches |

## High-Impact Workflows

### 1. Identify the people behind anonymous visits

```
Anonymous visitor
    → Abmatic AI identifies the company via IP
    → Contact database match reveals the individual
    → Contact appears in Visitor Reveal with email, title, and engagement score
    → Sales reaches out with personalized context
```

### 2. Build a target list from your most engaged visitors

1. Open Visitor Reveal → Contacts.
2. Sort by Website Engagement Score (highest first).
3. Filter Temperature to Warm or Hot.
4. Select the top contacts and **Add to Contacts**.
5. Export to your CRM or use as a LinkedIn audience.

### 3. ABM account penetration (map the buying committee)

```
Target account visits → open the account → Contacts tab
    → See all identified contacts by department
    → Add to an account-based campaign
    → Multi-threaded outreach to the full buying committee
```

## Credit Usage

Contact Reveal uses credits from your plan:

| Activity | Credit Cost |
|----------|-------------|
| New contact revealed | 1 credit |
| Same contact returning | No additional cost |

**Monitor usage:** go to **Settings → Usage** to track credit consumption.

**Stretch your credits:**
- Use reveal filters to target your ICP only.
- Set a higher accuracy threshold if you are credit-constrained.
- Focus on visitors to high-value pages.

## Troubleshooting

### Low reveal volume

| Issue | Cause | Solution |
|-------|-------|----------|
| Few contacts revealed | Accuracy too high | Lower the slider to 40–50% |
| Wrong contacts | No reveal filters | Add ICP filters |
| Missing contacts | Traffic from VPNs | Normal — some traffic is unidentifiable |

### Data quality issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Outdated job titles | Database lag | Verify on LinkedIn before outreach |
| Wrong company | Multi-company IPs | Cross-reference with page behavior |
| Missing engagement | New visitor | Wait for more activity |

### CRM sync problems

| Issue | Cause | Solution |
|-------|-------|----------|
| Push fails | Field mapping issue | Check required fields in your CRM |
| Duplicates created | No matching rule | Enable duplicate detection |
| Data not syncing | Integration disconnected | Reconnect in Settings → Integrations |

## Related Features

| Feature | Use With Contact Reveal |
|---------|-------------------------|
| [Company Identification](/visitor-tracking/company-identification) | See the full company picture |
| [Page Views](/visitor-tracking/page-views) | Understand what contacts browsed |
| [Contact Lists](/audiences/contacts) | Organize revealed contacts |
| [CRM Sync](/audiences/crm-sync) | Automate contact transfer |
| [AI Sequences](/campaigns/email-campaigns) | Engage revealed contacts |
