---
id: security-review
title: Security Review Pack
sidebar_label: Security Review Pack
sidebar_position: 5
---

# Security Review Pack

This page exists so a security team can review and approve the Abmatic AI MCP server without a call. It answers standard vendor questionnaire items, gives you commands to verify the answers yourself, and ends with an approval checklist.

The supporting detail is on the [Security and Architecture](/mcp/security) page. If your process needs a PDF, print this page from your browser.

---

## Summary for your ticket

Copy this into your review record:

```text
Vendor:            Abmatic AI
Service:           Abmatic AI MCP Server (custom MCP connector)
Endpoint:          https://mcp.abmatic.ai/mcp  (TCP 443, HTTPS, outbound only)
Protocol:          Model Context Protocol, Streamable HTTP transport
Operations:        Read only. 28 tools, all GET. No create, update or delete.
Authentication:    Static bearer token (Abmatic AI account API key, abm_...)
Authorization:     Scoped to one Abmatic AI account. Account level, not per user.
Data accessed:     The customer's own Abmatic AI data: companies, business contacts,
                   website sessions, campaigns, meetings, conversions, pipeline, reporting.
PII in scope:      Business contact data (work email, name, job title, employer,
                   LinkedIn URL, city/country) and meeting booker name and email.
                   No IP addresses, no personal phone numbers or personal emails,
                   no person level de-anonymization fields.
Data stored by
the connector:     None. Stateless pass through, no database, no customer secret at rest.
Hosting:           AWS us-east-1, ECS Fargate in private subnets behind an ALB.
Transport:         TLS 1.2 minimum, TLS 1.3 supported, HTTP redirected to HTTPS.
Onward transfer:   None added by Abmatic AI. Retrieved data enters the customer's own
                   AI provider context under the customer's agreement with that provider.
Revocation:        Customer self service, immediate, at app.abmatic.ai/settings/api-keys
Compliance:        SOC 2 Type II program. DPA available. Report on request from sales@abmatic.ai.
```

---

## A. Service and vendor

| Question | Answer |
|----------|--------|
| What is the service? | A remote Model Context Protocol server that lets a customer's AI assistant read that customer's own Abmatic AI data. |
| Is software installed in our environment? | No. The connection is outbound HTTPS from your AI client to `mcp.abmatic.ai`. Nothing is installed, and nothing connects inbound to your network. |
| What is the endpoint and port? | `https://mcp.abmatic.ai/mcp`, TCP 443. |
| Are static IPs available for allowlisting? | No. The service sits behind an AWS load balancer, so allowlist the hostname. |
| Who operates the service? | Abmatic AI, in its own AWS account. |
| Is this a new data processor? | No. It exposes data Abmatic AI already processes for you, through a new read interface. |

---

## B. Authentication

| Question | Answer |
|----------|--------|
| How does the connector authenticate? | Static bearer token: an Abmatic AI account API key (`abm_...`) sent as `Authorization: Bearer`. |
| Is OAuth supported? | Not today. API key only. |
| Is MFA involved? | The dashboard user who mints the key authenticates to Abmatic AI. The connector itself presents only the key. |
| How is the key stored by Abmatic AI? | As a SHA-256 hash on the account record. The plaintext is shown once at creation and is not recoverable afterwards. |
| Does the MCP service store the key? | No. It forwards the caller's bearer per request and holds nothing at rest. |
| Is the key ever logged? | No. It is never written to application logs or error messages. Load balancer access logs do not capture request headers. The rate limiter stores a SHA-256 digest, not the key. |
| How many keys can we have? | One active key per Abmatic AI account. |
| How do we revoke? | Self service and immediate, at **Settings, API Keys** in the dashboard. Regenerate replaces, Revoke removes. Effective on the next request. |
| Does the key expire automatically? | No. It is valid until regenerated or revoked. |

---

## C. Authorization and least privilege

| Question | Answer |
|----------|--------|
| What can the connector do? | Read only. 28 tools, every one a `GET`. No write, update, delete, billing, or user management operation is reachable. |
| What is the scope of a key? | One Abmatic AI account, full read of the exposed objects. |
| Does it honor per-user roles? | **No.** The key is an account level credential and does not apply dashboard user permissions. This is documented and deliberate. Anyone holding the key reads the whole account's exposed data. |
| Can we issue a limited key (for example analytics only)? | Not today. Per-key object and field scoping is designed but not shipped. Tell us if it gates your approval. |
| Can the connector reach other customers' data? | No. The account identity is derived from the credential, never from a request parameter, and every query is filtered to that account. A cross tenant identifier returns `404`. |
| Is there a rate limit? | Yes, 100 requests per minute per key, keyed on the hash of the key rather than the source IP. Paging is capped at 100 records per request. |

---

## D. Data

| Question | Answer |
|----------|--------|
| What data can be retrieved? | The customer's own Abmatic AI data: company records and scores, business contacts, website sessions and company level reveal, campaigns and target groups, opportunities, meetings, conversions, saved reports and dashboards, website context, and CRM sync status. |
| Does it include personal data? | Yes, business contact data: work email, name, job title and level, department, employer, LinkedIn URL, city and country, engagement scores. Meetings include the booker's name and email. |
| What personal data is excluded? | IP addresses, internal visitor identifiers, person level de-anonymization fields (person name, person work email, person LinkedIn URL), mobile phone numbers, personal email addresses, birth date, and sex. |
| Can it return credentials? | No. Integration OAuth and refresh tokens, meeting reschedule and cancel tokens, calendar event ids, and video conference links are excluded by allowlist, and a response middleware strips token shaped fields as a backstop. |
| Can it return other customers' enrichment data? | No. Shared enrichment caches (IP to company, Apollo, PDL, BuiltWith, ZoomInfo, technology scraper) are never exposed. Company data returned is what your account de-anonymized. |
| How is field level exposure controlled? | Each object has an explicit allowlist of output fields. A field outside the allowlist cannot be projected, including through the `fields` argument. |
| Can we see the full field list? | Yes, on the [Tool Reference](/mcp/tools) page. |

---

## E. Storage, retention, residency

| Question | Answer |
|----------|--------|
| What does the connector store? | Nothing. It is stateless: no database, no cache of results, no persistence of prompts, requests, or responses. |
| Where is data hosted? | AWS, us-east-1, for the MCP service. Abmatic AI platform data remains in United States AWS regions. |
| Does this feature create a new data store? | No. |
| What is retained in logs? | Container application logs and load balancer access logs holding request metadata (timestamp, source address, path, status, latency, user agent), retained under Abmatic AI's standard platform log retention. |
| What happens to data after the assistant retrieves it? | It becomes context in your AI assistant and is handled by your AI provider under your agreement with them. Abmatic AI has no visibility into or control over that. |
| Are there sub-processors specific to this feature? | No new sub-processor is introduced by Abmatic AI. AWS is the hosting provider, consistent with the rest of the platform. |

---

## F. Encryption and network

| Question | Answer |
|----------|--------|
| Is traffic encrypted in transit? | Yes, HTTPS only. TLS 1.2 minimum, TLS 1.3 supported (`ELBSecurityPolicy-TLS13-1-2-2021-06`). Plain HTTP returns a 301 redirect to HTTPS. |
| Who issues the certificate? | AWS Certificate Manager, for `*.abmatic.ai`. |
| Is data encrypted at rest? | The connector stores nothing. Platform data is encrypted at rest in the existing Abmatic AI storage. The API key is stored as a SHA-256 hash. |
| Is the compute publicly exposed? | No. Tasks run in private subnets with no public IP, reachable only through the load balancer on 443. |
| What egress does the service make? | HTTPS to the Abmatic AI API. It makes no other outbound calls. |
| Does the service hold cloud or database credentials? | No. Its only configuration value is the API base URL, injected from AWS Systems Manager Parameter Store. |

---

## G. Logging, monitoring, incident response

| Question | Answer |
|----------|--------|
| What is logged? | Application logs to Amazon CloudWatch, load balancer access logs to Amazon S3, and platform API logs. Every API response also carries a `request_id` for support correlation. |
| Is a customer facing audit trail available? | Not self serve today. Contact [support@abmatic.ai](mailto:support@abmatic.ai) for an access review of a specific window. A per-key audit log in the dashboard is roadmap work. |
| Is a third party error monitoring service in use? | The service supports Sentry with PII scrubbing enabled and never sends the bearer token. The current production deployment runs without a Sentry DSN configured, so no error data is sent to a third party. |
| How do we report a security issue? | Email [support@abmatic.ai](mailto:support@abmatic.ai) with "security" in the subject, or contact your Abmatic AI representative. |
| How do we contain an exposed key? | Revoke or regenerate it yourself at [app.abmatic.ai/settings/api-keys](https://app.abmatic.ai/settings/api-keys). It takes effect on the next request and needs no Abmatic AI involvement. |

---

## H. Application security and change management

| Question | Answer |
|----------|--------|
| How are changes reviewed? | Pull request against a protected branch with human review. Direct pushes to protected branches are not permitted. |
| How are changes deployed? | An automated pipeline builds a container image and performs a rolling deployment. A deployment circuit breaker rolls back automatically on failed health checks. |
| Is tenant isolation tested? | Yes. Every endpoint backing a tool ships with a mandatory two tenant isolation test as a merge requirement, in addition to its functional tests. |
| Is static analysis used? | Yes. CodeQL code scanning runs on the repository. |
| Are tests enforced before release? | Yes. The MCP server's test suite runs on every pull request that touches it, and again in the build that produces the deployed image, so a red suite blocks the release. |
| Does the service accept user supplied identifiers? | Yes, as tool arguments. They are always queried together with the tenant predicate, never resolved first and checked afterwards, and unknown sort or filter keys are rejected with a `400` rather than silently ignored. |

---

## I. Availability

| Question | Answer |
|----------|--------|
| Is the service redundant? | Two tasks run behind the load balancer with automated health checks. Unhealthy tasks are replaced. |
| Is there a health endpoint we can monitor? | Yes, `https://mcp.abmatic.ai/healthz` returns `200 ok`. |
| What happens under load or failure? | Requests over the per-key limit receive `429` with a `Retry-After` hint. Upstream failures surface as a clean tool error rather than a hang or a stack trace. |

---

## J. AI specific questions

| Question | Answer |
|----------|--------|
| Can the assistant change our Abmatic AI data? | No. There are no write tools. The credential cannot perform a write through this interface. |
| Does Abmatic AI see our prompts? | No. The MCP server receives tool calls with their arguments (for example a search term or a date range), not your conversation. |
| Does Abmatic AI train models on this data? | This feature returns your data to your client. It introduces no new model training on your data by Abmatic AI. |
| Could prompt injection cause a data leak? | The surface is read only and single tenant, so an injected instruction cannot reach another customer's data or modify anything. The residual risk is an assistant being steered into surfacing your own data to the wrong person inside your own workspace, which you control by deciding who the connector is granted to. |
| Where does retrieved data end up? | In your AI provider's context. Confirm that provider's retention and training settings for the workspace where the connector is enabled. |
| Can we restrict which employees use it? | Yes, in your AI platform. Add it as an admin managed connector and grant it to a defined group rather than distributing the key. |

---

## K. Compliance

| Question | Answer |
|----------|--------|
| SOC 2 | Abmatic AI maintains a SOC 2 Type II program. Request the report from [sales@abmatic.ai](mailto:sales@abmatic.ai). |
| GDPR | Data Processing Agreements are available. Data subject access and deletion requests are supported. Personal data is not sold. |
| Data residency | United States AWS regions. |
| Existing agreement | This feature is served under your existing Abmatic AI agreement and DPA. It creates no separate contract. |

---

## Verify the answers yourself

Every check below is safe, read only, and needs no API key except the last one.

**1. The service is up and TLS terminates correctly:**

```bash
curl -sI https://mcp.abmatic.ai/healthz
```

**2. Plain HTTP is redirected, not served:**

```bash
curl -sI http://mcp.abmatic.ai/healthz | head -3
```

**3. TLS version and certificate issuer:**

```bash
openssl s_client -connect mcp.abmatic.ai:443 -servername mcp.abmatic.ai </dev/null 2>/dev/null | openssl x509 -noout -subject -issuer -dates
```

**4. The data API rejects unauthenticated requests:**

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://api.abmatic.ai/v1/me
```

Expect `401`.

**5. Enumerate every tool the server publishes, without a key.** Tool discovery is unauthenticated by design, so you can inspect the entire surface before granting anything:

```bash
SID=$(curl -s -D - -o /dev/null -X POST https://mcp.abmatic.ai/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"review","version":"1"}}}' \
  | awk '/^mcp-session-id/{print $2}' | tr -d '\r')

curl -s -X POST https://mcp.abmatic.ai/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "mcp-session-id: $SID" \
  -d '{"jsonrpc":"2.0","method":"notifications/initialized"}' > /dev/null

curl -s -X POST https://mcp.abmatic.ai/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "mcp-session-id: $SID" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/list"}'
```

You will see 28 tools, all read oriented, with their full input schemas. There is no tool whose name or schema performs a write.

**6. With a key, confirm the scope of what it can see:**

```bash
curl -s https://api.abmatic.ai/v1/me -H "Authorization: Bearer abm_your_key_here"
```

Returns the single account the key maps to, plus the key prefix. Any object id from another account returns `404`.

---

## Approval checklist

Use this as the record of decision:

- [ ] Endpoint `https://mcp.abmatic.ai/mcp` allowed for outbound HTTPS from the AI client environment
- [ ] Confirmed the connector is read only (verification step 5 above)
- [ ] Accepted the documented risk that the API key is account scoped and does not honor per-user dashboard roles
- [ ] Decided who may use the connector, and configured it as an admin managed connector where the AI platform supports it
- [ ] API key stored in the approved secret manager or the AI platform's credential vault
- [ ] Key rotation owner and schedule assigned, including rotation on offboarding
- [ ] Reviewed the data categories retrieved, including business contact PII and meeting booker details
- [ ] Confirmed your AI provider's retention and training settings for the workspace where the connector is enabled
- [ ] Noted the current limitations (no per-user scoping, no per-key scoping, no self serve audit report, no OAuth, no IP allowlisting)
- [ ] Connector recorded in the vendor or integration register as read only, account scoped, US hosted
- [ ] SOC 2 report and DPA requested from [sales@abmatic.ai](mailto:sales@abmatic.ai) if required by policy

Anything unanswered, send it to [support@abmatic.ai](mailto:support@abmatic.ai) and we will answer in writing, including items that are honest gaps rather than shipped controls.
