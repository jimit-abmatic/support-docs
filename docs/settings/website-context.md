---
id: website-context
title: Website Context
sidebar_label: Website Context
---

# Website Context

Give your AI-powered Agentic Chat the deep knowledge it needs to have meaningful conversations with your website visitors. Website Context automatically scrapes your site's pages, generates summaries, and extracts FAQs -- so your AI assistant can answer questions accurately and confidently, using your own content.

## Why Website Context Matters

Your Agentic Chat is only as good as the information it has access to. Without Website Context, your AI assistant relies solely on the manual instructions you provide. With Website Context, it gains a comprehensive understanding of your entire website.

| Without Website Context | With Website Context |
|------------------------|---------------------|
| AI relies only on manual instructions | AI understands your full website content |
| Limited knowledge of products and services | Accurate answers about every page on your site |
| Generic, surface-level responses | Detailed, page-specific answers with real information |
| Frequent "I don't know" moments | Confident responses backed by your own content |

**The result**: Visitors get faster, more accurate answers, which means higher engagement and more qualified leads.

## Accessing Website Context

1. Go to **Settings** in the left sidebar
2. Click the **Website Context** tab in the top navigation

You will see two sub-tabs:
- **Pages Scraped** -- View and manage all scraped pages
- **Settings** -- Build context, add URLs, and configure URL filters

![Website Context - Pages Scraped](/img/screenshots/settings-website-context-pages.png)

---

## Pages Scraped

The **Pages Scraped** tab shows every page that has been scraped and is available as context for your AI assistant. For each page, you can see:

| Column | Description |
|--------|-------------|
| **Page URL** | The page title and URL path |
| **Summary** | View the AI-generated summary of the page |
| **FAQs** | View automatically extracted question-and-answer pairs |
| **Preview** | View the full scraped content of the page |
| **Rescrape** | Re-fetch and update the content for a single page |
| **Delete** | Remove a page from your website context |

### Viewing Page Summaries

Click the **Summary** button on any row to see a concise, AI-generated summary of what that page covers. This is the information your Agentic Chat uses to understand the page at a glance.

![Page Summary Dialog](/img/screenshots/settings-website-context-summary-dialog.png)

### Viewing Page FAQs

Click the **FAQs** button to see the question-and-answer pairs that were automatically extracted from the page. These FAQs help your AI assistant handle common visitor questions with precise, page-specific answers.

![Page FAQs Dialog](/img/screenshots/settings-website-context-faqs-dialog.png)

### Previewing Scraped Content

Click the **Preview** button to see the full content that was scraped from the page. This lets you verify that the scraper captured the right information.

![Page Preview Dialog](/img/screenshots/settings-website-context-preview-dialog.png)

### Searching and Filtering Pages

Use the **Search** bar at the top of the grid to find specific pages by URL or title. You can also use the **Filters** dropdown to narrow down the list.

### Deleting Pages

- **Delete a single page**: Click the trash icon on the row you want to remove.
- **Delete all pages**: Click the three-dot menu (top-right of the grid) and select **Delete All Pages**. You will be asked to confirm before anything is removed.

:::caution
Deleting pages removes them from your AI assistant's knowledge base immediately. The AI will no longer be able to reference that content in conversations.
:::

---

## Settings Tab

Switch to the **Settings** tab to build your website context, add individual URLs, and configure URL filtering rules.

![Website Context Settings](/img/screenshots/settings-website-context-settings.png)

### Building Website Context

The **Build Website Context** button kicks off an automated scrape of your website. The scraper will:

1. Crawl your website starting from your domain
2. Follow links to discover pages
3. Scrape the content of each page
4. Generate AI summaries and extract FAQs for every page
5. Make everything available to your Agentic Chat

**To build your context:**

1. (Optional) Configure your URL filters first (see below) to control which pages are included
2. Click the **Build Website Context** button
3. Wait for the scrape to complete -- you will see a progress indicator showing how many pages have been scraped so far
4. Once finished, switch to the **Pages Scraped** tab to review the results

:::info
While a scrape is running, a progress bar shows the number of pages processed. You can click **Stop** at any time to halt the scrape and keep whatever pages have been scraped so far.
:::

### Adding Individual URLs

If you need to add a specific page that was missed during the automatic scrape, you can add it manually:

1. In the **Add URL** field, paste the full URL (e.g., `https://yoursite.com/pricing`)
2. Click **Add URL** (or press Enter)
3. The page will be scraped and added to your context

This is useful for:
- Pages behind navigation menus that the crawler might not discover
- Recently published pages
- Specific landing pages you want the AI to know about

---

## URL Filtering

URL filtering lets you control exactly which pages get included when you build your website context. There are two types of filters:

### Include URL Prefixes

By default, certain URL patterns (like `/blog`, `/news`) may be skipped during scraping. **Include URL Prefixes** override those defaults -- any URL that starts with a prefix you add here will always be scraped.

**Example**: If you add `https://yoursite.com/resources`, then all pages under `/resources` will be included even if they would normally be skipped.

**To add an include prefix:**
1. Type the URL prefix in the text field
2. Click **Add** (or press Enter)
3. The prefix appears as a chip below the field

To remove an include prefix, click the **X** on its chip.

### Exclude URL Prefixes

**Exclude URL Prefixes** tell the scraper to always skip URLs that match. This is helpful for filtering out pages that are not useful for your AI assistant.

**Example**: If you add `https://yoursite.com/careers`, then no pages under `/careers` will be scraped.

**To add an exclude prefix:**
1. Type the URL prefix in the text field
2. Click **Add** (or press Enter)
3. If any already-scraped pages match the new prefix, you will be asked whether to delete them

:::tip
When you add an exclude prefix that matches existing pages, Abmatic AI shows you exactly which pages will be deleted and asks for confirmation. This prevents accidental removal of content.
:::

To remove an exclude prefix, click the **X** on its chip.

---

## Rescraping and Updating Context

Website content changes over time. There are two ways to keep your context up to date:

### Rescrape a Single Page

Click the **refresh icon** on any row in the Pages Scraped grid. The page will be re-fetched and its summary and FAQs will be regenerated. This takes about 15 seconds.

Use this when:
- A specific page has been updated
- You notice the summary or FAQs are outdated
- You want to verify the latest content is captured

### Rebuild All Context

Click **Build Website Context** on the Settings tab to re-scrape your entire website. This will discover any new pages and update existing ones based on your current URL filter settings.

Use this when:
- You have made significant changes across your website
- You have added or changed URL filter rules
- You want a complete refresh of all context

---

## Best Practices

### Pages to Include

| Include | Why |
|---------|-----|
| **Product/service pages** | So the AI can accurately describe what you offer |
| **Pricing pages** | So the AI can answer pricing questions confidently |
| **Features and comparison pages** | So the AI can articulate your differentiators |
| **FAQ and help pages** | These are already in Q&A format -- perfect for the AI |
| **About and company pages** | So the AI can represent your brand story |
| **Case studies and testimonials** | So the AI can share proof points and customer success stories |

### Pages to Exclude

| Exclude | Why |
|---------|-----|
| **Blog posts and news** | High volume, low relevance for sales conversations |
| **Career and job listing pages** | Not relevant to customer conversations |
| **Legal and policy pages** | Lengthy, rarely helpful in visitor chats |
| **Event and webinar archives** | Outdated content can confuse the AI |
| **Internal or staging pages** | May contain inaccurate or draft content |

### General Tips

- **Start with URL filters before building** -- Set up your include and exclude prefixes first, then build. This saves time and keeps your context clean.
- **Review summaries after building** -- Spot-check a few page summaries to make sure the AI is capturing the right information.
- **Update quarterly** -- Re-scrape your website context at least once a quarter to keep the AI current with your latest messaging and offerings.
- **Use individual URL adds for quick fixes** -- If a single page changed, add or rescrape just that URL instead of rebuilding everything.

---

## Troubleshooting

### No pages appear after building

- **Check your URL filters**: If you have exclude prefixes that are too broad (e.g., your entire domain), they may block all pages. Review your exclude list and remove overly broad entries.
- **Verify your domain**: Make sure the scraper is pointed at the correct website domain.
- **Check for JavaScript-rendered content**: Some pages load content dynamically. If critical pages are missing, try adding them individually using the Add URL feature.

### Summaries or FAQs are missing for some pages

- Not all pages generate useful summaries or FAQs. Pages with very little text content (e.g., image-heavy pages) may not produce them.
- Try rescraping the page -- sometimes a re-fetch resolves the issue.

### A scrape is stuck or taking too long

- Click the **Stop** button to halt the scrape.
- Review your URL filters to ensure you are not accidentally scraping a very large section of your site.
- Try building again after narrowing your include/exclude prefixes.

### Deleted pages still seem to appear in chat responses

- After deleting pages, it may take a few minutes for the changes to propagate to your live Agentic Chat.
- If the issue persists, try rebuilding your website context entirely.

### The AI gives outdated information

- Rescrape the specific page that contains outdated content.
- If multiple pages are outdated, rebuild your full website context.

---

## Related

- [Configuring AI Agents](/ai-agents/ai-agents-configuration) -- Set up manual instructions and context for your AI agents
- [Agentic Chat Campaigns](/campaigns/agentic-chat) -- Create and manage chat campaigns that use your website context
- [AI Agents Overview](/ai-agents/ai-agents-overview) -- Learn about Clara and Alex
