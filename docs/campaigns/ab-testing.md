---
id: ab-testing
title: A/B Testing
sidebar_label: A/B Testing
sidebar_position: 4
---

# A/B Testing

A/B testing lets you compare different versions of a page and measure which one performs better with real visitor behavior—so you can make changes based on evidence instead of opinions.

## Why A/B Testing Matters

| Without A/B Testing | With Abmatic AI A/B Testing |
|---------------------|--------------------------|
| Guessing what works | Data-driven decisions |
| Risk of hurting conversions | Safe, controlled experiments |
| No way to prove ROI | Clear lift metrics and attribution |
| Changes based on opinions | Evidence-based optimization |

## Two Ways to Test

Abmatic AI offers two testing approaches:

| Type | Best For | How It Works |
|------|----------|--------------|
| **Built-in Control Groups** | Testing whether personalization helps | Every personalization campaign automatically holds back a control group and compares against it |
| **URL-based A/B Tests** | Testing two entirely different page designs | Compare two distinct page URLs against each other |

## Built-in Control Groups

Every website personalization campaign (Inbound, Outbound, and Widget) includes automatic A/B testing—no extra setup required.

When you run a personalization campaign, Abmatic AI automatically:

1. **Splits traffic** between the personalized version and the original page
2. **Tracks performance** for both groups separately
3. **Calculates lift** so you can see exactly how much personalization improves results
4. **Keeps visitors consistent**—a returning visitor always stays in the same group

### Setting Your Control Group Size

The split between personalized visitors and the control group is set by the campaign's **status**, which you change from the **Status** menu in the Campaigns list. Each status maps to the share of matching visitors who see the personalized experience—the rest go into the control group.

![A/B test status options control how traffic is split between the personalized version and the control group](/img/screenshots/ab-status-dropdown.png)

| Status | Personalized share | Control group | When to use it |
|--------|--------------------|---------------|----------------|
| **Full personalization** | 100% | 0% | You're confident in the experience and want everyone to see it (no live comparison) |
| **Ongoing** | 90% | 10% | Keep most visitors personalized while still measuring against a small holdout |
| **Experiment** | 50% | 50% | An even split for the cleanest, fastest A/B comparison |
| **Inactive** | 0% | 100% | The campaign is paused—nobody sees personalization |

**To change the split:**

1. Go to the **Campaigns** list.
2. Find your campaign and open the **Status** menu in its row.
3. Choose **Full personalization**, **Ongoing**, **Experiment**, or **Inactive**.

Changes take effect immediately for new visitors.

![The Campaigns list, where each campaign's Status controls its personalization-vs-control split](/img/screenshots/campaigns-list.png)

:::tip Pick Experiment to test, Full personalization to ship
Run **Experiment** (50/50) while you're gathering data and proving lift. Once a campaign is clearly winning, move it to **Full personalization** so every matching visitor benefits.
:::

### Consistent Visitor Experience

Abmatic AI keeps each visitor's experience stable:

- **Persistent assignment** – returning visitors see the same version
- **Cookie-based tracking** – assignment survives across browser sessions
- **Deterministic assignment** – fair, reproducible group selection

## URL-based A/B Testing

Use a URL A/B test when you want to compare two completely different page designs that live at two different URLs.

### When to Use URL Tests

| Scenario | Example |
|----------|---------|
| **Major redesigns** | New pricing page vs. current pricing page |
| **Different approaches** | Long-form landing page vs. short-form |
| **Template testing** | Different page layouts or structures |
| **Pre-launch validation** | New page vs. existing before full rollout |

### Creating a URL A/B Test

1. Go to **Campaigns** and click **+ Campaign**.
2. In the **Personalization** column, choose **A/B Testing**.
3. Configure your test pairs:

| Field | Description | Example |
|-------|-------------|---------|
| **URL A (Control)** | Your current page | `https://yoursite.com/pricing` |
| **URL B (Variant)** | The alternative to test | `https://yoursite.com/pricing-new` |
| **Probability B** | Share of traffic sent to the variant | `50` for an even split |

### Testing Multiple Page Pairs

You can run several pairs inside a single campaign, each with its own analytics:

```
Test 1: /pricing → /pricing-new (50% to variant)
Test 2: /features → /features-v2 (30% to variant)
Test 3: /demo → /book-demo (50% to variant)
```

Each pair operates independently.

## Measuring Results

### Key Performance Metrics

Both test types track the same core metrics:

| Metric | What It Tells You |
|--------|-------------------|
| **Visitors** | Sample size for each group |
| **CTA Clicks** | Engagement with calls-to-action |
| **CTR** | Share of visitors who clicked a CTA |
| **Conversions** | Goal completions |
| **CVR** | Share of visitors who converted |
| **Lift** | How much better (or worse) the personalized version did vs. control |

### Reading the Insights Tab

Open your campaign and go to the **Insights** tab to compare the personalized group against the control group side by side. The stat cards at the top show:

- **CTA Clicks** and **Conversions** for the campaign
- **CVRL** – the conversion rate for the **personalized** group
- **CTRL** – the conversion rate for the **control** group
- **Total Visitors** across both groups

![A/B test Insights showing CTA Clicks, Conversions, CVRL (personalized group) and CTRL (control group), with a Total / Personalized / Control trend chart](/img/screenshots/ab-insights.png)

The chart below the cards plots three lines over your selected date range—**Total** (blue), **Personalized** (green), and **Control** (red)—so you can watch the two groups diverge. Use the sub-tabs (**Visitors**, **CTA**, **CTR**, **Conversion**, **CVR**) to switch which metric the chart shows. The table at the bottom breaks the same numbers out by **Variation**, **Personalized**, **Control**, and **Total**.

:::note Comparing CVRL and CTRL
**CVRL** is the personalized group's conversion rate; **CTRL** is the control group's conversion rate. When CVRL is higher than CTRL, personalization is winning. In the example above, CTRL is higher than CVRL—a signal to revisit the content or keep gathering data before declaring a winner.
:::

### Understanding Lift

**Lift** shows how much better (or worse) the personalized version performs compared to control:

```
Lift = ((Personalized Rate - Control Rate) / Control Rate) × 100
```

| Lift Value | Meaning |
|------------|---------|
| **+25%** | Personalized converts 25% better than control |
| **-10%** | Control is winning by 10%—iterate or revert |
| **~0%** | No meaningful difference detected |

## Reaching a Reliable Result

### Sample Size Guidelines

Gather enough data before you trust a result. These are rules of thumb, not product limits:

| Baseline Conversion Rate | Minimum Detectable Lift | Approx. Visitors Needed (per group) |
|-------------------------|------------------------|-------------------------------|
| 3% | 30% | ~1,200 |
| 5% | 20% | ~1,500 |
| 10% | 15% | ~2,000 |

### Test Duration Best Practices

| Guideline | Why It Matters |
|-----------|----------------|
| **Run at least 2 weeks** | Capture a full cycle of visitor behavior |
| **Cover weekdays + weekends** | Account for weekly variation |
| **Avoid holidays** | Atypical behavior skews results |
| **Don't peek early** | Early results often reverse |

### When to Declare a Winner

Call it when:

- You've reached a reasonable sample size
- You have at least two weeks of data
- The result is consistent across multiple days
- There's a clear lift in your primary metric

Hold off when the sample is small, results swing day to day, you have less than two weeks of data, or the lift is under about 5%.

## Best Practices

### Start with a Hypothesis

Write this down before you test:

1. **What** you're changing (a specific element)
2. **Why** you expect it to help (the reasoning)
3. **How much** lift you expect (your success bar)
4. **Which metric** you'll judge it by

**Example:**
> "Changing the CTA from 'Learn More' to 'Start Free Trial' will increase demo requests because it states the offer clearly and adds urgency."

### Test High-Impact Elements

| Element | Why It's High-Impact |
|---------|---------------------|
| **Headlines** | The first thing visitors read |
| **CTAs** | The direct driver of conversions |
| **Hero images** | Set the tone and create connection |
| **Value propositions** | Explain why to choose you |
| **Social proof** | Builds trust |

### Avoid Common Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| Ending too early | Results may be noise | Wait for a reasonable sample |
| Testing many things at once | Can't attribute the result | Change one thing per test |
| No hypothesis | You learn nothing | Write the expected outcome first |
| Ignoring segments | An overall winner can lose in a key segment | Check segment performance |
| Changing mid-test | Invalidates your data | Start a fresh test instead |

## Segment Analysis

Sometimes the overall winner isn't the winner for every segment:

| Segment | Result |
|---------|---------|
| **Overall** | Personalized wins (+15% CVR) |
| **Enterprise** | Personalized wins (+22% CVR) |
| **SMB** | Control wins (+5% CVR) |

When that happens, the move is to create separate personalization campaigns—one tuned for Enterprise and one for SMB.

To analyze by segment, open the campaign's **Performance** tab and review the **Accounts** and **Visitors** sub-tabs to see how different companies and audiences responded.

## From Testing to Personalization

A/B testing and personalization work as a loop:

```
1. Run a test → find the winning content
2. Analyze segments → learn who it works best for
3. Build personalization → target winners to the right segments
4. Keep testing → iterate on the personalized version
```

**Example workflow:**

1. **Test:** "ROI Calculator" CTA vs. "Free Demo" CTA
2. **Result:** ROI Calculator wins overall
3. **Segment insight:** Enterprise loves it; SMB prefers Free Demo
4. **Action:** Personalize Enterprise → ROI Calculator, SMB → Free Demo
5. **Next test:** Iterate on each segment's winning version

## Troubleshooting

### Inconclusive Results

| Cause | Solution |
|-------|----------|
| Difference too small to detect | Test a more dramatic change |
| High variance in visitor behavior | Gather more data |
| Too many factors changing at once | Simplify the test |

A "no significant difference" outcome is still useful—it tells you that change doesn't move the needle.

### Control Unexpectedly Winning

1. Check the personalized version for bugs or display issues.
2. Look at it by segment—it may still win for some audiences.
3. Revisit the hypothesis.
4. Document what you learned for next time.

### Traffic Split Not Working

1. Confirm the campaign status (Full personalization / Ongoing / Experiment) is set as you intended.
2. Check for caching issues (CDN or browser).
3. Make sure the campaign isn't **Inactive**.
4. Give it 24–48 hours for the split to even out.

## Related Resources

- [Website Personalization](/campaigns/website-personalization) – Apply winning content to segments
- [Page Editor](/campaigns/page-editor) – Build variant content
- [Analytics Overview](/analytics/overview) – Deeper performance data
- [Conversions Setup](/conversions/overview) – Set up goal tracking
