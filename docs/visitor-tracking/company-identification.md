---
id: company-identification
title: Company Identification
sidebar_label: Company Identification
sidebar_position: 2
---

# Company Identification

**Turn anonymous website traffic into actionable account intelligence.** Abmatic AI identifies which companies are visiting your website — even when visitors never fill out a form — giving you the foundation for effective account-based marketing.

<div style={{position:'relative',paddingBottom:'56.25%',height:0,borderRadius:'12px',overflow:'hidden',margin:'1.5rem 0'}}>
  <video controls preload="metadata" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} src="https://cdn.abmatic.ai/training/06-visitor-reveal.mp4"></video>
</div>

🖱️ Prefer to click through it yourself? **[Open the interactive walkthrough →](https://cdn.abmatic.ai/training/06-visitor-reveal/interactive/index.html)**

> 🎓 **[Browse every video tutorial in the Training Center → training.abmatic.ai](https://training.abmatic.ai)**


:::tip Why This Matters
Most of your website visitors leave without identifying themselves. Company identification reveals who they are, so your sales team can prioritize outreach based on real intent signals rather than guesswork.
:::

---

## The Business Impact

| Before Abmatic AI | With Abmatic AI |
|-------------------|-----------------|
| "Someone visited our site" | "A target account visited our pricing page three times this week" |
| React to form fills only | Proactively engage high-intent accounts |
| Unknown visitor intent | Clear buying signals by company |
| Spray-and-pray outreach | Targeted sales follow-up |

---

## How Company Identification Works

When someone visits your website, Abmatic AI runs an identification process in milliseconds:

```
Visitor lands on your site
        ↓
Abmatic AI script captures visit data
        ↓
IP address matched against company database
        ↓
Company enriched with firmographic data
        ↓
Visit logged to the company profile
```

### What Gets Captured

| Data Type | Examples | Why It Matters |
|-----------|----------|----------------|
| **Company identity** | Name, domain, logo | Know exactly who is visiting |
| **Firmographics** | Industry, size, revenue | Qualify fit instantly |
| **Location** | Country, city, time zone | Target by geography |
| **Visit behavior** | Pages, time, sessions | Gauge buying intent |
| **Reveal Confidence** | Very High → None | Prioritize reliable data |

---

## Viewing Identified Companies

### Open Visitor Reveal

1. Click **Visitor Reveal** in the left sidebar.
2. Select the **Accounts** tab (it opens here by default).

You will see every company that has visited your website, with firmographic data and engagement metrics.

![Visitor Reveal Accounts tab with confidence tiles and a grid of identified companies](/img/screenshots/ci-accounts.png)

*The Accounts tab. The tiles across the top break your identified companies down by Reveal Confidence and act as one-click filters. The grid shows Domain, Name, Industry, LinkedIn URL, Inferred Revenue, a Visited Pages link, and an AI-generated Summary.*

### The Confidence Tiles

The row of tiles at the top of the page shows your identification metrics at a glance. Click any tile to filter the list to that confidence bucket instantly.

![Reveal Confidence tiles across the top of the Accounts tab acting as filters](/img/screenshots/ci-confidence-tiles.png)

*The tiles — All Accounts, Very High, High, Moderate, Low, Very Low — show how many companies fall into each Reveal Confidence bucket. Clicking a tile filters the grid to just those accounts.*

| Tile | What It Shows | How to Use It |
|------|---------------|---------------|
| **All Accounts** | Total companies identified | Track growth over time |
| **Very High** | Highest-confidence matches | Prioritize for direct sales outreach |
| **High** | Strong matches | Add to target account lists and sequences |
| **Moderate** | Good matches | Include in personalization and ad campaigns |
| **Low** | Possible matches | Verify before acting |
| **Very Low** | Needs verification | Monitor for repeat visits |

### Account List Columns

| Column | What It Shows | Why It Is Useful |
|--------|---------------|------------------|
| **Domain** | Company website URL | Quick identification and CRM matching |
| **Name** | Company name | Match to your CRM records |
| **Industry** | Business sector | Filter by vertical to find ICP accounts |
| **LinkedIn URL** | Company LinkedIn page | One-click research |
| **Inferred Revenue** | Estimated annual revenue range | Qualify by company size at a glance |
| **Visited Pages** | A "View (N)" link to every URL the company hit | See exactly what they researched |
| **Summary** | AI-generated company description | Quick context without leaving the page |
| **Reveal Confidence** | Very High → None bucket (colored chip) | Prioritize reliable matches |
| **Reveal Source** | Internal source label, **Abmatic 1–4** | Understand how the match was made |
| **Reveal Last Seen** | Date of the most recent visit | Find recent visitors and sort by recency |
| **Total Sessions** | Distinct visit sessions | Gauge repeat engagement |

:::info Reveal Source — what "Abmatic 1–4" means
The **Reveal Source** column tells you how a company was identified, shown as an internal label rather than a raw provider name. The labels run **Abmatic 1** through **Abmatic 4** (Abmatic 1 is the strongest, first-party signal). Abmatic 2 is a legacy source kept only for older historical rows. You will never see an external data-provider name in this column.
:::

### Reveal Source labels

| Label | Roughly means |
|-------|---------------|
| **Abmatic 1** | First-party signal (strongest) |
| **Abmatic 2** | Legacy source — historical rows only (deprecated) |
| **Abmatic 3** | Standard enrichment match |
| **Abmatic 4** | Additional enrichment match |

### Account Detail View

Click any company name to open its full profile — engagement score, visit history, social links, and associated contacts.

![Account detail Overview tab with an engagement-score gauge and a 90-day trend chart](/img/screenshots/reveal-account-quantum.png)

*An account Overview tab shows firmographics (company type, employee range, headquarters), an engagement-score gauge, a 90-day engagement trend, and links to LinkedIn, Facebook, X, and the linked CRM record.*

The account detail page has **seven tabs**:

| Tab | What It Shows | When to Use It |
|-----|--------------|----------------|
| **Overview** | Company profile, engagement-score gauge, trend chart, social links | Get a quick read on account health and fit |
| **Collections** | Which lists and segments include this account | See how you are already targeting them |
| **Campaigns** | Active campaigns targeting this account | Coordinate your ABM efforts |
| **Opportunities** | CRM opportunities linked to this account | Connect website activity to pipeline |
| **Engagement** | Individual page-visit sessions with locations | See exactly what they are researching |
| **Performance** | Detailed visitor analytics over time | Measure engagement depth and trends |
| **Contacts** | All identified contacts at that company | Map the buying committee |

### Engagement History

The **Engagement** tab reveals the complete story of how a company has interacted with your website.

![Account Engagement tab showing visit sessions with per-session page-view and engagement metrics](/img/screenshots/reveal-account-engagement.png)

*The Engagement tab lists individual visit sessions with timestamps and locations. Each session shows Total Form Submission, Total Page Views, Total Page Views Unique, Total Scroll Depth Percentage, Total Time On Page, and an Engagement Score. Click "Visited Pages" to see exactly which URLs they viewed.*

### Visited Pages

In the grid and on the Engagement tab, the **Visited Pages** link opens a popup listing every URL the visitor hit. The dialog is titled **"Visited Pages (N)"** and the links are clickable.

![Visited Pages popup listing every URL a visitor viewed](/img/screenshots/ci-visited-pages.png)

*The Visited Pages dialog: "These are all the pages visited by this visitor," followed by a clickable list of every URL. It shows "No Pages" when a visitor has no recorded page views.*

### Contacts Within an Account

The **Contacts** tab shows every individual Abmatic AI has identified at a company — your buying committee, mapped automatically.

![Account Contacts tab listing revealed contacts grouped by department](/img/screenshots/reveal-account-contacts.png)

*The Contacts tab groups revealed people by department and shows each person's work email, full name, job title, LinkedIn URL, and company industry.*

---

## Reveal Confidence Explained

Each company gets a numeric confidence value that maps to one of six buckets, shown as a colored chip:

| Reveal Confidence | Score Range | What It Means | Recommended Action |
|-------------------|-------------|---------------|--------------------|
| **Very High** | 71–100 | Highly reliable identification | Prioritize for immediate sales outreach |
| **High** | 51–70 | Strong identification | Add to target account lists |
| **Moderate** | 31–50 | Good match, some uncertainty | Include in personalization campaigns |
| **Low** | 21–30 | Possible match | Verify before sales contact |
| **Very Low** | 6–20 | Needs verification | Review manually or monitor |
| **None** | 0–5 | No reliable signal yet | Wait for more activity |

:::tip Focus on Quality
Start with High and Very High confidence companies for sales outreach. Use Moderate confidence for broader marketing campaigns where false positives matter less.
:::

---

## Filtering, Sorting, and Searching

The Accounts grid loads data from the server as you scroll, so filters and sorts apply to your entire list of identified companies — not just the rows on screen.

### Search and quick filters

- **Search** by company name, domain, or industry keyword.
- Use the **confidence tiles** for a one-click confidence filter.
- Sort any column, including **Reveal Last Seen**, to surface the most recent visitors first.

### Advanced filtering

Click **FILTERS** for column- and field-level criteria, including:

| Filter | Example |
|--------|---------|
| **Industry / Revenue / Location** | Healthcare companies, $1B+ revenue, US-based |
| **Reveal Confidence** | Very High and High only |
| **Reveal Last Seen** | Visited in the last 7 days |
| **Pages Visited** | Companies who visited `/pricing` |
| **Total Sessions / Total Page Views** | Companies with 3+ visits or 10+ page views |

:::note Saved filters and infinite scroll
Your filter and column choices persist between visits — reopen the page and your view comes back. As you scroll, more rows load automatically (infinite scroll), and a live count tells you how many companies match your current filter.
:::

---

## Understanding Identification Rates

Your identification rate depends on your traffic sources. Corporate-network traffic (for example, visitors arriving from LinkedIn campaigns, or browsing during office hours on company devices) tends to identify well, because those visitors use IP ranges that map cleanly to a company.

| Traffic Source | Tends to identify | Why |
|----------------|-------------------|-----|
| **Corporate networks** | Well | Static IP ranges map to companies |
| **LinkedIn ad traffic** | Well | Users are typically on corporate networks |
| **Small business** | Moderately | May use shared IPs |
| **Home / remote** | Poorly | Residential IPs are hard to map |
| **Mobile** | Poorly | Carrier IPs are shared |
| **VPN traffic** | Poorly | Masks the original IP |

### Why some visitors can't be identified

| Reason | Explanation | Workaround |
|--------|-------------|------------|
| **Residential IP** | Working from home on personal internet | Use Contact Reveal for known visitors |
| **VPN / proxy** | Company VPN or privacy tools | Identify via form fills |
| **Mobile network** | Cellular data uses carrier IPs | Focus on desktop traffic |
| **Small company** | May not have registered IP space | Enrich via CRM data |
| **Bot traffic** | Search engines, monitoring tools | Auto-filtered by Abmatic AI |

---

## Taking Action on Identified Companies

Select companies with the row checkboxes (or select everything that matches your current filter, then deselect a few with select-all-except), then use the bulk actions.

### Add to a list

1. **Select** companies using checkboxes.
2. Click **Add to List**.
3. Choose an existing list or create a new one.

These lists power website personalization, LinkedIn Matched Audiences, Google Customer Match, and CRM campaigns.

### Push to CRM

1. **Select** companies to push.
2. Click **Push to CRM**.
3. Choose to create new account records, update existing ones, or add to a campaign (Salesforce or HubSpot).

The sync includes company name and domain, industry and revenue, location, first/last visit dates, and page-view counts.

### Export

1. **Select** companies (or select all that match the filter).
2. Click **Export**.
3. Download a CSV with all visible columns plus additional firmographic data.

### Exclude

1. **Select** companies to exclude.
2. Click **Exclude** and confirm.

Use exclusions for competitors, existing customers, partners, and internal traffic.

---

## Best Practices

### Daily review process

Identification data decays fast. A company visiting your pricing page today is far more likely to engage than one that visited two weeks ago. Build a daily habit:

| Time | Action | Goal |
|------|--------|------|
| **Morning** | Check High/Very High confidence visitors from the past 24 hours | Catch active buyers while intent is fresh |
| **Review** | Look at target accounts that visited | Prioritize sales follow-up |
| **Action** | Push top accounts to CRM and alert reps | Enable same-day outreach |
| **Build** | Add good-fit companies to lists | Grow campaign audiences continuously |

### Common workflows

**"See which companies are visiting your pricing page right now"**
1. Open Visitor Reveal → Accounts.
2. Click **FILTERS** and add: Pages Visited contains `/pricing`.
3. Sort by **Reveal Last Seen** (most recent first).
4. Push High and Very High matches to CRM for immediate follow-up.

**"Which target accounts are engaged this week?"**
1. Open Visitor Reveal → Accounts.
2. Click the **Very High** or **High** confidence tile.
3. Sort by **Reveal Last Seen** to find recent visitors.
4. Click into each account to see engagement history and contacts.

**"Find enterprise companies in my territory"**
1. Open Visitor Reveal → Accounts.
2. Filter by Revenue and Location to match your territory.
3. Add matching companies to a target list for personalization and retargeting.

---

## Troubleshooting

### No companies appearing

| Issue | Cause | Solution |
|-------|-------|----------|
| Empty list | Script not installed | Check the [Install Script guide](/getting-started/install-script) |
| No new data | Low traffic volume | Allow 24–48 hours for data |
| All filtered out | Filters too restrictive | Clear filters and try again |

### Low identification rate

| Issue | Cause | Solution |
|-------|-------|----------|
| Mostly low confidence | Mixed traffic sources | Filter to High confidence only |
| Declining rate | Traffic mix changing | Review your traffic sources |

### Wrong company showing

| Issue | Cause | Solution |
|-------|-------|----------|
| Incorrect match | IP database limitation | Use the report/flag option to mark it incorrect |
| Old company name | Company rebranded | Updates on the next data refresh |
| ISP showing | Shared IP address | Filter by confidence level |

---

## Related Features

| Feature | What It Does | Link |
|---------|--------------|------|
| **Contact Reveal** | Identify specific people, not just companies | [Contact Reveal](/visitor-tracking/contact-reveal) |
| **Page Views** | See detailed page-level activity | [Page Views](/visitor-tracking/page-views) |
| **Audiences** | Build targeted lists from identified companies | [Audiences Overview](/audiences/overview) |
| **Slack Alerts** | Get notified when key accounts visit | [Slack Integration](/integrations/slack) |
