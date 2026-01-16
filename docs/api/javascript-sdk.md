---
id: javascript-sdk
title: JavaScript Tracking SDK
sidebar_label: JavaScript SDK
sidebar_position: 2
---

# JavaScript Tracking SDK

The Abmatic JavaScript SDK gives you full control over visitor identification, event tracking, and personalization on your website. Use it to identify visitors the moment they convert, track high-intent behaviors, and build personalized experiences that increase conversion rates.

:::tip Why Use the JavaScript SDK?
- **Identify visitors instantly**: Connect anonymous visitors to known contacts after form fills or logins
- **Track buying signals**: Capture high-intent events like pricing views, demo requests, and content downloads
- **Personalize in real-time**: Access visitor company data to customize content dynamically
- **Measure what matters**: Track custom conversions that align with your business goals
:::

## Installation

The SDK loads automatically when you install the Abmatic tracking script—no npm packages or build steps required.

```html
<script async src="https://clients.abmatic.ai/YOUR_ACCOUNT_ID.js"></script>
```

Once loaded, the SDK is available as `window.abmatic`.

:::note Finding Your Account ID
Your account ID is available in **Settings** > **Script Installation**. It's the alphanumeric string in your script URL.
:::

---

## Core Methods

### abmatic.identify()

Connect anonymous visitors to known contacts. Call this after form submissions, logins, or whenever you learn who the visitor is. Once identified, Abmatic links all their past activity to their profile and enables contact-level personalization.

```javascript
window.abmatic.identify({
  email: 'john@acme.com',
  firstName: 'John',
  lastName: 'Doe',
  company: 'Acme Corp',
  title: 'VP of Marketing'
});
```

**Parameters:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string | Yes | Visitor's email address (primary identifier) |
| `firstName` | string | No | First name |
| `lastName` | string | No | Last name |
| `company` | string | No | Company name |
| `title` | string | No | Job title |
| `phone` | string | No | Phone number |
| `*` | any | No | Any custom attributes you need |

**When to Call identify():**

| Trigger | Why It Matters |
|---------|----------------|
| After form submission | Capture leads the moment they convert |
| After user login | Link authenticated users to their visitor history |
| From marketing automation | Sync data from email click-throughs |
| From CRM integration | Enrich visitors with known contact data |

**Example: Capture leads from a demo request form**

```javascript
document.getElementById('demo-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  // Identify the visitor immediately
  window.abmatic.identify({
    email: formData.get('email'),
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    company: formData.get('company'),
    title: formData.get('title')
  });

  // Then submit the form
  e.target.submit();
});
```

---

### abmatic.track()

Track custom events that indicate buying intent or conversion. Use this to capture actions that matter to your business—demo requests, pricing views, feature exploration, and content engagement.

```javascript
window.abmatic.track('event_name', {
  property1: 'value1',
  property2: 'value2'
});
```

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `eventName` | string | Yes | Name of the event (use snake_case for consistency) |
| `properties` | object | No | Additional context about the event |

**High-Intent Events to Track:**

```javascript
// Button/CTA clicks - know which CTAs drive engagement
window.abmatic.track('cta_clicked', {
  button: 'Request Demo',
  page: '/pricing',
  variant: 'enterprise'
});

// Video engagement - measure content consumption
window.abmatic.track('video_watched', {
  video: 'Product Overview',
  duration: 120,
  completed: true,
  percentWatched: 100
});

// Content downloads - capture high-intent signals
window.abmatic.track('content_downloaded', {
  asset: 'ROI Calculator',
  type: 'pdf',
  page: '/resources'
});

// Pricing page engagement - identify serious buyers
window.abmatic.track('pricing_viewed', {
  plan: 'enterprise',
  timeOnPage: 45
});

// Feature exploration - understand interests
window.abmatic.track('feature_explored', {
  feature: 'API Integration',
  section: 'developers'
});
```

:::tip Event Naming Best Practices
Use consistent naming conventions across your site:
- `cta_clicked`, `form_submitted`, `content_downloaded` (verb in past tense)
- Include context like page, variant, and category in properties
- Keep event names stable—changing them breaks historical reporting
:::

---

### abmatic.page()

Track page views for single-page applications (SPAs). The SDK automatically tracks page views on initial load, but you need to call this manually when routes change in SPAs.

```javascript
window.abmatic.page('Page Name', {
  category: 'Product',
  url: '/products/enterprise'
});
```

**For Single Page Applications:**

```javascript
// React Router integration
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Track page view on every route change
    if (window.abmatic) {
      window.abmatic.page();
    }
  }, [location]);

  return <YourApp />;
}
```

---

## Personalization Methods

### abmatic.getVisitor()

Access real-time company and contact data to build personalized experiences. Use this to customize headlines, CTAs, case studies, and pricing based on who's visiting.

```javascript
const visitor = await window.abmatic.getVisitor();

console.log(visitor);
// {
//   identified: true,
//   company: {
//     name: 'Acme Corp',
//     industry: 'Technology',
//     size: '1000-5000',
//     website: 'acme.com'
//   },
//   contact: {
//     email: 'john@acme.com',
//     firstName: 'John'
//   }
// }
```

**What You Can Do With Visitor Data:**

| Use Case | Example |
|----------|---------|
| Personalize headlines | Show "Built for {industry}" on your homepage |
| Customize CTAs | Show "Talk to Sales" for enterprise, "Start Free Trial" for SMB |
| Display relevant case studies | Show tech case studies to tech companies |
| Pre-fill forms | Speed up conversions with known data |
| Adjust pricing display | Show enterprise pricing to large companies |

**Example: Personalize content based on company size**

```javascript
const visitor = await window.abmatic.getVisitor();

if (visitor.company?.size === '1000-5000' || visitor.company?.size === '5000+') {
  // Show enterprise messaging
  document.getElementById('hero-headline').textContent =
    'Enterprise ABM Platform for Revenue Teams';
  document.getElementById('cta-button').textContent = 'Talk to Sales';
} else {
  // Show SMB messaging
  document.getElementById('hero-headline').textContent =
    'Start Personalizing Your Website Today';
  document.getElementById('cta-button').textContent = 'Start Free Trial';
}
```

### abmatic.onReady()

Wait for the SDK to fully initialize before accessing visitor data. Use this to ensure visitor data is available before personalizing content.

```javascript
window.abmatic.onReady(function(visitor) {
  console.log('SDK ready, visitor data:', visitor);

  // Safe to personalize now
  if (visitor.company?.industry === 'Technology') {
    showTechContent();
  } else if (visitor.company?.industry === 'Healthcare') {
    showHealthcareContent();
  }
});
```

:::tip Avoid Flash of Unpersonalized Content
Call `onReady()` early in your page load and use CSS to hide personalized sections until data is ready. This prevents visitors from seeing default content before personalization kicks in.
:::

---

## Conversion Tracking

### Automatic Form Tracking

Abmatic automatically tracks forms that contain email fields—no code required. This captures:
- Contact information from the form
- The page where the form was submitted
- Time to conversion from first visit

### Manual Conversion Tracking

For custom conversion goals (button clicks, purchases, sign-ups), track them explicitly:

```javascript
// Track when someone requests a demo
document.getElementById('demo-btn').addEventListener('click', function() {
  window.abmatic.track('demo_requested', {
    page: window.location.pathname,
    source: 'hero_cta'
  });
});

// Track purchases with value
window.abmatic.track('purchase_completed', {
  value: 5000,
  plan: 'enterprise',
  term: 'annual'
});

// Track sign-ups
window.abmatic.track('signup_completed', {
  plan: 'free_trial',
  source: 'pricing_page'
});
```

### Connecting Events to Conversion Goals

Events you track become available in Abmatic's conversion goal builder. This lets you:
1. Track any event with `abmatic.track()`
2. Create a conversion goal in Abmatic that matches the event name
3. See conversion rates, attribution, and lift in your campaign analytics

---

## Advanced Usage

### Custom Attributes

Add any custom attributes to enrich visitor profiles. These sync to your CRM and power advanced segmentation:

```javascript
window.abmatic.identify({
  email: 'john@acme.com',

  // Standard fields
  firstName: 'John',
  lastName: 'Doe',

  // Custom attributes - add anything you need
  plan: 'enterprise',
  accountManager: 'Sarah',
  contractValue: 50000,
  renewalDate: '2026-12-31',
  tags: ['strategic', 'expansion'],
  productInterest: ['API', 'Analytics']
});
```

### Checking SDK Availability

Always check if the SDK is loaded before calling methods, especially in environments where the script might be blocked:

```javascript
// Simple check
if (window.abmatic) {
  window.abmatic.track('event', { data: 'value' });
}

// With fallback for critical events
function trackEvent(name, properties) {
  if (window.abmatic) {
    window.abmatic.track(name, properties);
  } else {
    // Queue for later or log to backup system
    console.warn('Abmatic SDK not loaded, event not tracked:', name);
  }
}
```

### Debug Mode

Enable debug mode to see all SDK activity in the browser console—useful for development and troubleshooting:

```javascript
window.abmatic.debug(true);
```

This logs:
- Visitor identification calls and responses
- Event tracking with all properties
- API calls to Abmatic servers
- Personalization decisions and matched campaigns
- Any errors or warnings

:::tip Development Workflow
Enable debug mode in development environments by checking the hostname:
```javascript
if (window.location.hostname === 'localhost') {
  window.abmatic?.debug(true);
}
```
:::

---

## Framework Integration Examples

### React

Create a custom hook for clean integration:

```jsx
import { useEffect } from 'react';

// Hook for identifying users
function useAbmaticIdentify(user) {
  useEffect(() => {
    if (user && window.abmatic) {
      window.abmatic.identify({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        company: user.company
      });
    }
  }, [user]);
}

// Hook for tracking events
function useAbmaticTrack() {
  return (eventName, properties) => {
    if (window.abmatic) {
      window.abmatic.track(eventName, properties);
    }
  };
}

// Usage in your app
function App({ user }) {
  useAbmaticIdentify(user);
  const track = useAbmaticTrack();

  return (
    <button onClick={() => track('cta_clicked', { button: 'hero' })}>
      Get Started
    </button>
  );
}
```

### Vue.js

Use lifecycle hooks or the Composition API:

```javascript
// Options API
export default {
  mounted() {
    if (this.$store.state.user && window.abmatic) {
      window.abmatic.identify({
        email: this.$store.state.user.email,
        firstName: this.$store.state.user.firstName
      });
    }
  },
  methods: {
    trackEvent(name, properties) {
      window.abmatic?.track(name, properties);
    }
  }
}

// Composition API
import { onMounted } from 'vue';
import { useStore } from 'vuex';

export function useAbmatic() {
  const store = useStore();

  onMounted(() => {
    if (store.state.user && window.abmatic) {
      window.abmatic.identify({
        email: store.state.user.email
      });
    }
  });

  const track = (name, props) => window.abmatic?.track(name, props);

  return { track };
}
```

### Next.js

Handle page tracking and identification with App Router or Pages Router:

```jsx
// app/layout.js (App Router)
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views on route change
    if (window.abmatic) {
      window.abmatic.page();
    }
  }, [pathname]);

  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

// pages/_app.js (Pages Router)
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.abmatic?.page();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
```

### Angular

Use a service for centralized tracking:

```typescript
// abmatic.service.ts
import { Injectable } from '@angular/core';

declare global {
  interface Window {
    abmatic: any;
  }
}

@Injectable({ providedIn: 'root' })
export class AbmaticService {

  identify(user: { email: string; firstName?: string; lastName?: string }) {
    if (window.abmatic) {
      window.abmatic.identify(user);
    }
  }

  track(eventName: string, properties?: Record<string, any>) {
    if (window.abmatic) {
      window.abmatic.track(eventName, properties);
    }
  }

  page() {
    if (window.abmatic) {
      window.abmatic.page();
    }
  }
}

// app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AbmaticService } from './abmatic.service';

@Component({ selector: 'app-root', template: '<router-outlet></router-outlet>' })
export class AppComponent implements OnInit {
  constructor(private router: Router, private abmatic: AbmaticService) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.abmatic.page();
      }
    });
  }
}
```

---

## Troubleshooting

### SDK Not Loading

| Symptom | Cause | Solution |
|---------|-------|----------|
| `window.abmatic` is undefined | Script blocked by ad blocker | Test in incognito without extensions |
| Script 404 error | Wrong account ID | Check Settings > Script Installation for correct ID |
| Script loads but no data | CSP blocking requests | Add `*.abmatic.ai` to your Content Security Policy |

See [Script Troubleshooting](/troubleshooting/script-issues) for detailed solutions.

### Events Not Tracking

| Symptom | Cause | Solution |
|---------|-------|----------|
| Events don't appear in Abmatic | SDK not loaded when called | Wrap calls in `if (window.abmatic)` |
| Events tracked but no conversions | Event name doesn't match goal | Verify event name matches exactly in conversion goals |
| Sporadic tracking | Race condition | Use `onReady()` before tracking |

**Debug checklist:**
1. Check SDK is loaded: `console.log(window.abmatic)`
2. Enable debug mode: `window.abmatic.debug(true)`
3. Look for errors in browser console
4. Verify event properties are valid (no circular references)

### Visitor Not Identified

| Symptom | Cause | Solution |
|---------|-------|----------|
| Contact not created | Missing email | Email is required for identification |
| Old data showing | Caching | Clear cookies and test in incognito |
| Identify called but no data | Called before SDK ready | Use `onReady()` callback |

---

## Next Steps

| Resource | Description |
|----------|-------------|
| [Install Tracking Script](/getting-started/install-script) | Get the tracking script installed on your site |
| [Conversion Tracking](/conversions/event-tracking) | Set up conversion goals to measure campaign success |
| [Dynamic Content](/campaigns/dynamic-content) | Use visitor data to personalize content automatically |
| [Script Troubleshooting](/troubleshooting/script-issues) | Fix common script installation issues |
| [API Overview](/api/api-overview) | Use the REST API for server-side integrations |
