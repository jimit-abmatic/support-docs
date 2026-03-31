---
id: banner-popup
title: Banner & Popup Campaigns
sidebar_label: Banner & Popup
sidebar_position: 8
---

# Banner & Popup Campaigns

Nudge your audience to convert faster with targeted overlay messages. Banner & Popup campaigns let you display personalized banners, notifications, and popup messages to specific visitor segments—driving urgency, promoting offers, and capturing attention at the right moment without modifying your underlying website pages.

## Why Banners & Popups Drive Results

| Static Website | With Banners & Popups |
|---------------|----------------------|
| Same experience for all visitors | Targeted messages for specific segments |
| No urgency or time-sensitivity | Limited-time offers and countdown messaging |
| Visitors leave without converting | Capture attention before exit |
| No way to test overlay messaging | Data-driven A/B testing built in |
| Generic CTAs on every page | Personalized CTAs based on visitor profile |

:::tip Quick wins
Banner & Popup campaigns are one of the fastest ways to test new messaging without touching your website code. Launch a targeted popup in minutes, measure results, and iterate.
:::

## How Banners & Popups Work

Banner & Popup campaigns use **URL patterns** to control where your overlays appear:

1. **Define your audience** — Who should see the banner/popup
2. **Set URL patterns** — Which pages should display the overlay
3. **Configure the overlay** — Banner at top/bottom, popup in center, or slide-in
4. **Monitor performance** — Track impressions, clicks, and conversions

Unlike page personalization campaigns that modify existing content, banners and popups add an overlay layer on top of your existing pages.

![Campaigns list showing campaign types and their status](/img/screenshots/campaigns-main-list.png)

## Getting Started

### Step 1: Create a Banner & Popup Campaign

1. Navigate to **Campaigns**
2. Click **+ Campaign**
3. Under **Personalization**, select **Banner & Popup**

![Create Campaign modal showing Banner & Popup under the Personalization category](/img/screenshots/campaign-create-wizard.png)

4. Select a **target collection** (account or contact list)
5. Click **Create**

### Step 2: Define Your Audience

The **Audience** tab controls who sees your banners and popups.

![Banner & Popup campaign Audience tab showing campaign rules and filter builder](/img/screenshots/banner-popup-audience-tab.png)

1. Click the **Audience** tab
2. Configure targeting rules using filters:
   - **Account List** — Show to specific named accounts
   - **Industry** — Target specific verticals
   - **Company Size** — Different messaging by company scale
   - **Location** — Regional promotions or compliance messages
   - **Behavior** — Visitors with specific engagement patterns
3. Click **Save**

:::info Precision targeting
Combine audience rules with URL patterns for maximum precision. For example: show a "Book a Demo" popup only to enterprise visitors browsing your pricing page.
:::

### Step 3: Set URL Patterns

The **Pages** tab uses URL patterns to control where overlays appear. Unlike page personalization campaigns that target specific URLs, Banner & Popup campaigns use pattern matching to apply across multiple pages at once.

![Banner & Popup Pages tab showing the pattern grid with Include Patterns, Exclude Patterns, and Sample URL columns](/img/screenshots/banner-popup-pages-tab.png)

1. Click the **Pages** tab
2. Add **include patterns** — URLs where banners should appear
3. Optionally add **exclude patterns** — URLs where banners should NOT appear
4. Patterns support regex for flexible matching

**Pattern examples:**

| Pattern | Matches |
|---------|---------|
| `https://yoursite.com/pricing` | Exact pricing page |
| `https://yoursite.com/blog/*` | All blog posts |
| `https://yoursite.com/products/.*` | All product pages |
| `https://yoursite.com/(?!admin).*` | All pages except admin |

:::tip Start broad, then narrow
Begin with a broad pattern like your homepage, measure results, then expand to more pages or narrow to high-intent pages for better conversion rates.
:::

### Step 4: Monitor Performance

Use the **Insights**, **Engagement**, and **Performance** tabs to track how your banners and popups are performing.

**Key metrics:**

| Metric | What It Measures |
|--------|------------------|
| **Impressions** | How many times the overlay was shown |
| **CTA Clicks** | Clicks on your banner/popup CTA |
| **Click-Through Rate** | Percentage of impressions that clicked |
| **Conversions** | Goal completions attributed to the overlay |
| **Conversion Rate** | Percentage of viewers who converted |

## Campaign Tabs

### Insights

View aggregate performance data comparing your overlay campaign against the control group. Use date range selectors to analyze specific periods and measure lift.

### Audience

Configure targeting rules and filters. Visitors must match all rules to see your overlays. Rules are applied in combination with your URL patterns.

### Pages (Patterns)

Manage URL patterns that determine where your banners and popups display. Add include patterns for pages that should show overlays and exclude patterns for pages that should not.

### Engagement

View individual visitor interactions with your overlays—who saw them, who clicked, and what they did afterward on your site.

### Performance

Detailed analytics with visitor-level data. Sub-tabs let you drill into visitors, CTA clicks, accounts, and conversions.

## High-Impact Banner & Popup Ideas

| Campaign | Target Audience | Overlay Message |
|----------|----------------|-----------------|
| **Limited-Time Offer** | All visitors | "Book a demo this week — get 20% off your first year" |
| **Enterprise Welcome** | 1000+ employee companies | "Enterprise plans include dedicated support — let's talk" |
| **Return Visitor** | 3+ sessions | "Welcome back! Ready to see a personalized demo?" |
| **Pricing Page Exit** | Visitors leaving pricing | "Questions about pricing? Chat with our team" |
| **Industry-Specific** | Healthcare, Finance, etc. | "See how [industry] companies use Abmatic AI" |
| **Event Promotion** | Target accounts | "Join us at [Event] — exclusive session for [Company]" |

## Best Practices

### Do's

| Practice | Why It Works |
|----------|--------------|
| Keep messages short and direct | Overlays are interruptions—respect visitor attention |
| Use one clear CTA | Single action drives higher conversion |
| Match URL patterns to intent | Pricing page visitors need different messaging than blog readers |
| Set frequency limits | Don't show the same popup on every page load |
| Test different placements | Banners, popups, and slide-ins perform differently |
| Coordinate with other campaigns | Don't run overlays on pages already personalized |

### Don'ts

| Avoid | Why |
|-------|-----|
| Showing popups immediately on page load | Let visitors orient themselves first |
| Using overly broad URL patterns | Irrelevant overlays annoy visitors |
| Running too many overlays simultaneously | Multiple popups create a poor experience |
| Generic "Subscribe" messages | Personalized CTAs convert significantly better |
| Ignoring mobile visitors | Ensure overlays work well on small screens |

## Troubleshooting

### Banner Not Appearing

| Check | Solution |
|-------|----------|
| **URL patterns** | Does the current page URL match an include pattern? |
| **Exclude patterns** | Is the page accidentally excluded by a pattern? |
| **Audience rules** | Does the visitor match all targeting criteria? |
| **Campaign status** | Is the campaign set to 100% active? |
| **Script installed** | Verify the Abmatic tracking script is on the page |
| **Control group** | Visitor may be randomly assigned to control |

### Low Click-Through Rate

| Issue | Solution |
|-------|----------|
| Message too generic | Personalize with company name, industry, or role |
| Weak CTA | Use specific action-oriented language |
| Poor timing | Adjust when the overlay appears (scroll depth, time on page) |
| Wrong audience | Narrow targeting to higher-intent segments |

### Overlay Conflicts

If your banner or popup interferes with page content or other overlays:

1. Check for multiple active campaigns targeting the same pages
2. Use the **Preference** system to prioritize campaigns
3. Add exclude patterns to avoid overlap with personalized pages

---

## Real-World Use Cases

These three scenarios show how marketing teams use Banner & Popup campaigns to drive measurable conversions. Use them as starting points for your own campaigns.

### Use Case 1: Pricing Page Exit-Intent Popup

**Scenario:** Your analytics show that 68% of visitors who land on your pricing page leave without taking action. Many of these are qualified accounts evaluating your product against competitors. A well-timed popup can recover a significant percentage of these lost opportunities.

**Campaign Setup:**

| Setting | Configuration |
|---------|--------------|
| **Campaign Type** | Banner & Popup |
| **Audience** | All identified companies with `Employee Count > 50` |
| **URL Pattern (Include)** | `https://yoursite.com/pricing` |
| **URL Pattern (Exclude)** | `https://yoursite.com/pricing/thank-you` |
| **Trigger** | Exit-intent (cursor moves toward browser close/back) |

**Popup Content:**
```
Headline: "Questions about the right plan for {{mt_companyName}}?"
Body: "Our team can walk you through pricing options built for
{{mt_industry}} companies your size. No pressure, just clarity."
CTA: "Chat with Our Team" → links to /demo-request
Secondary: "Compare Plans" → links to /pricing/comparison
```

**Results teams typically see:**

| Metric | Before Popup | After Popup | Lift |
|--------|-------------|-------------|------|
| Pricing page demo requests | 2.1% conversion | 4.8% conversion | **+129%** |
| Pricing page bounce rate | 68% | 52% | **-24%** |
| Monthly demo requests from pricing | 34 | 78 | **+129%** |

:::tip Personalization makes the difference
A generic "Wait, don't go!" popup converts at roughly 1-2%. Adding the visitor's company name and industry in the headline increases conversion to 4-5% because it signals that the offer is relevant to them specifically.
:::

---

### Use Case 2: Industry-Specific Welcome Banner

**Scenario:** You serve multiple verticals, but your homepage speaks to all of them generically. Healthcare visitors should see healthcare proof points immediately. Financial services visitors should see compliance credentials. Technology visitors should see integration logos.

**Campaign Setup (create one per vertical):**

**Healthcare Banner:**

| Setting | Configuration |
|---------|--------------|
| **Campaign Name** | "Welcome Banner - Healthcare" |
| **Audience** | `Industry = Health Care` AND `Employee Count > 200` |
| **URL Pattern** | `https://yoursite.com/` (homepage) |
| **Placement** | Top banner, full width |
| **Priority (Preference)** | #1 (industry banners win over generic) |

**Banner Content:**
```
"Trusted by 150+ healthcare organizations | HIPAA compliant | See how
Memorial Health reduced patient acquisition cost by 34% →"
```

**Financial Services Banner:**

| Setting | Configuration |
|---------|--------------|
| **Campaign Name** | "Welcome Banner - Financial Services" |
| **Audience** | `Industry = Financials` AND `Employee Count > 200` |
| **URL Pattern** | `https://yoursite.com/` |
| **Placement** | Top banner, full width |
| **Priority (Preference)** | #2 |

**Banner Content:**
```
"SOC 2 Type II Certified | Built for financial compliance | See how
First National improved lead quality by 41% →"
```

**Why this targeting works:**

| Visitor Type | What They See | Why It Converts |
|-------------|---------------|-----------------|
| Healthcare company (500 employees) | Healthcare banner with HIPAA mention | Immediately addresses their #1 concern |
| Financial services firm | Compliance-first messaging | Removes the biggest objection upfront |
| Technology company | Integration logos and API mention | Shows it fits their existing stack |
| Unidentified visitor | No banner (standard homepage) | No false personalization for unknown visitors |

**Results:**
- 22% higher engagement rate from targeted industries vs. unidentified visitors
- 18% more time on site for visitors who see an industry-relevant banner
- 3x higher click-through on industry case study links in the banner

---

### Use Case 3: Limited-Time Event Promotion with Urgency Messaging

**Scenario:** Your company is hosting a virtual summit in 6 weeks. You want to promote it to target accounts visiting your site, with messaging that escalates in urgency as the event approaches. The popup should feel like a natural invitation, not an interruption.

**Campaign Setup (create three phases):**

**Phase 1: Early Bird (6-4 weeks before event)**

| Setting | Configuration |
|---------|--------------|
| **Campaign Name** | "Summit Promo - Early Bird" |
| **Audience** | Target account list AND `Employee Count > 100` |
| **URL Pattern** | `https://yoursite.com/*` (all pages) |
| **Exclude Pattern** | `https://yoursite.com/summit*` (already on event page) |
| **Display** | Slide-in from bottom-right, after 15 seconds on page |

**Popup Content:**
```
Headline: "Exclusive: ABM Summit 2026"
Body: "Join 500+ B2B marketing leaders on April 15.
Early bird pricing ends March 1."
CTA: "Reserve Your Spot - $99" → /summit/register
Dismiss: "Maybe later"
```

**Phase 2: Standard Registration (4-2 weeks before event)**

Swap the popup content (update the same campaign or create a new one at higher priority):
```
Headline: "ABM Summit 2026 — Seats Filling Fast"
Body: "200 of 500 seats remaining. {{mt_companyName}}, your team
won't want to miss this."
CTA: "Register Now - $149" → /summit/register
```

**Phase 3: Final Push (last 2 weeks)**
```
Headline: "Last Chance: ABM Summit in {{daysUntilEvent}} Days"
Body: "Only 50 seats left. Companies like {{mt_companyName}} are
already registered."
CTA: "Grab Your Seat Before It's Gone" → /summit/register
```

**Phase-by-phase results:**

| Phase | Impressions | Registrations | Conversion Rate |
|-------|-----------|---------------|-----------------|
| Early Bird (6-4 weeks) | 3,200 | 64 | 2.0% |
| Standard (4-2 weeks) | 2,800 | 84 | 3.0% |
| Final Push (last 2 weeks) | 1,900 | 95 | 5.0% |
| **Total** | **7,900** | **243** | **3.1% avg** |

:::info Urgency escalation works
Notice how conversion rate increases as the event approaches, even though impressions decrease. Urgency messaging ("50 seats left," countdown language) creates real motivation to act now rather than later.
:::

---

## Related

- [Website Personalization](/campaigns/website-personalization) — Modify page content directly
- [A/B Testing](/campaigns/ab-testing) — Test overlay variations
- [Dynamic Content](/campaigns/dynamic-content) — Personalization variables
- [Audiences Overview](/audiences/overview) — Build target segments
- [Campaign Troubleshooting](/troubleshooting/campaign-issues) — Fix common issues
