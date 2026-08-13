---
id: security
title: Security and Architecture
sidebar_label: Security and Architecture
sidebar_position: 4
---

# MCP Server Security and Architecture

This page is written for security, IT, and compliance reviewers evaluating the Abmatic AI MCP server before approving it as a custom connector. It describes what the service is, what it can and cannot reach, how it is deployed, and the limitations we are explicit about.

If you want the same material as questionnaire answers, see the [Security Review Pack](/mcp/security-review).

---

## 1. At a glance

| Property | Answer |
|----------|--------|
| Service endpoint | `https://mcp.abmatic.ai/mcp` |
| Protocol | Model Context Protocol over Streamable HTTP |
| Operations exposed | Read only. 28 tools, all mapping to `GET` requests. No create, update, or delete. |
| Authentication | Abmatic AI account API key (`abm_...`) sent as `Authorization: Bearer` |
| Authorization scope | The single Abmatic AI account the key belongs to |
| Data stored by the MCP service | None. It is stateless and holds no database, cloud, or customer credential. |
| Direction of connection | Outbound from your AI client to Abmatic AI. No inbound access to your network, no agent or software installed on your systems. |
| Transport security | TLS 1.2 minimum, TLS 1.3 supported. HTTP is redirected to HTTPS. |
| Hosting | AWS, us-east-1, ECS Fargate behind an Application Load Balancer |
| Third party data sharing introduced by this feature | None by Abmatic AI. Data the assistant retrieves flows to the AI provider **you** chose, under your agreement with them. |

---

## 2. Architecture and data flow

```text
 +--------------------------+      +----------------------------+      +--------------------------+
 | Your AI client           |      | Abmatic AI MCP server      |      | Abmatic AI API           |
 | claude.ai, Claude Code,  |      | mcp.abmatic.ai             |      | api.abmatic.ai           |
 | Cursor, Codex, agent SDK |      | ECS Fargate, us-east-1     |      | (existing platform API)  |
 +------------+-------------+      +-------------+--------------+      +------------+-------------+
              |                                  |                                  |
              | 1. MCP tool call over HTTPS      |                                  |
              |    Authorization: Bearer abm_... |                                  |
              |--------------------------------->|                                  |
              |                                  | 2. HTTPS GET /v1/<resource>      |
              |                                  |    same bearer, forwarded as is  |
              |                                  |--------------------------------->|
              |                                  |                                  | 3. Key hashed,
              |                                  |                                  |    matched to one
              |                                  |                                  |    account, every
              |                                  |                                  |    query filtered
              |                                  |                                  |    to that account
              |                                  | 4. JSON, allowlisted fields only |
              |                                  |<---------------------------------|
              | 5. Tool result returned          |                                  |
              |<---------------------------------|                                  |
```

**Component responsibilities**

| Component | Responsibility | Holds customer data? | Holds credentials? |
|-----------|----------------|----------------------|--------------------|
| MCP server (`mcp.abmatic.ai`) | Translates MCP tool calls into `GET` requests, forwards the caller's bearer, returns the JSON response | No. Stateless, nothing persisted. | No. Its only configuration is the API base URL. |
| Abmatic AI API (`api.abmatic.ai`) | Authenticates the key, resolves it to one account, applies tenant filters and field allowlists | Yes, the same data the dashboard serves | Yes, in the existing platform's managed secret storage |
| Abmatic AI data stores | The platform database, unchanged by this feature | Yes | Not reachable from the MCP service |

The MCP service has **no database connection, no AWS data plane credentials, and no ability to reach the platform's data stores directly**. Every read goes through the same authenticated API path the product already uses. That is the structural reason a compromise of the MCP service cannot read anything a valid API key could not already read.

---

## 3. Authentication

- The credential is an account scoped API key of the form `abm_<token>`, minted by a signed in dashboard user at **Settings, API Keys**.
- The key is stored as a **SHA-256 hash** on the account record. The plaintext value exists only in the response to the creation call and is never recoverable from Abmatic AI afterwards. The dashboard displays only the prefix.
- Every request carries `Authorization: Bearer abm_...`. The MCP server reads that header from the client and forwards it unchanged. It never mints, stores, caches, or inspects the key beyond forwarding it, and never writes it to a log or an error message.
- A fresh outbound client is constructed per tool call and bound to that call's bearer, so one caller's credential is never reused for another caller's request.
- Enforcement at the API:

| Condition | Response |
|-----------|----------|
| Missing or blank key | `401` |
| Unknown or revoked key | `401` |
| Valid key, account not on a paid plan | `403` |
| Valid key | Request proceeds, scoped to that key's account |

- **OAuth is not supported today.** API key is the only authentication path. Any documentation or client UI that offers OAuth for this server does not apply.
- Key lifecycle is customer controlled: **Regenerate** issues a new key and invalidates the previous one immediately, **Revoke** invalidates without replacement. Both take effect on the next request. There is one active key per account.

---

## 4. Authorization and the scope of a key

**An Abmatic AI API key grants full read access to the exposed data of the one account it belongs to. It does not honor the per-user roles and permissions configured in the dashboard.**

This is a deliberate, documented property of the credential, not a defect. It matches how the existing Abmatic AI public API key already behaves, and how account level API keys behave in comparable tools. State it plainly in your own risk write up:

:::warning Accepted risk, stated plainly
Anyone who holds the key, or who connects an agent with it, can read that account's companies, contacts, campaigns, visitor and reveal data, meetings, conversions, opportunities, and reporting, regardless of what that person could see when signed in to the dashboard. Treat the key like a password.
:::

Controls that make this manageable:

| Control | Detail |
|---------|--------|
| Immediate revocation | Regenerate or revoke from the dashboard, effective on the next request |
| Rate limiting | 100 requests per minute per key. The limiter keys on the SHA-256 of the bearer, not the source IP, so one customer's usage cannot be diluted or amplified by shared corporate egress addresses, and the limiter store never contains a usable key. |
| Read only surface | No tool can write, update, or delete anything |
| Field allowlists | Each object exposes an explicit allowlist. Credentials, tenant keys, internal ids, and sensitive personal fields are excluded by construction. |
| Response backstop | A response middleware strips token shaped fields (`access_token`, `refresh_token`, `api_key`, and similar) from any API response as a second line of defense |
| Plan gating | API access requires a paid Enterprise plan |

Not available today, and on the roadmap rather than silently missing: per-user scoped tokens that mirror an individual's dashboard permissions, and per-key object or field scoping (for example an analytics only key). If least privilege agent access is a requirement for your approval, tell us at [support@abmatic.ai](mailto:support@abmatic.ai) so we can prioritize it.

---

## 5. Multi-tenant isolation

Isolation is enforced in the Abmatic AI API, in the same code path the dashboard uses, not in the MCP layer.

- The authenticated key resolves to exactly one account. The account identity comes from the credential, never from a request parameter.
- Every query carries a tenant predicate using the correct tenant key for that object type. Object identifiers taken from a request are always queried **together with** the tenant predicate, never fetched first and checked afterwards.
- A request for an object belonging to another account returns `404`, the same response as an object that does not exist, so the API does not confirm the existence of other tenants' records.
- Shared enrichment caches (IP to company tables and third party data caches) are not tenant scoped and are never exposed through the API at all. Company information returned is what your account de-anonymized, not the global enrichment graph.
- Every public API endpoint ships with a two tenant isolation test as a merge requirement: given two accounts, a request authenticated as one must return only that account's records and must not retrieve the other's records by id, website, or filter.

---

## 6. Data the tools can return

| Data category | Contains personal data? | Examples |
|---------------|------------------------|----------|
| Company (account) records | No | Website, company name, industry, size, location, fit and engagement scores |
| Contact records | Yes, business contact data | Work email, name, job title and level, department, employer, LinkedIn URL, city and country, engagement scores |
| Visitor sessions | Pseudonymous, company level | Session id, timestamps, source, pages viewed, time on page, scroll depth, form counts, and the company level reveal for the session |
| Reveal (de-anonymized companies) | No, company level | Company name, website, industry, size, city, country, score |
| Meetings | Yes | Booker name and email, timezone, meeting time, duration, status, meeting type, assigned calendar owner |
| Campaigns, target groups, opportunities | Generally no | Configuration, status, stage, metrics |
| Conversions | No | Event id and label, type, timestamp, campaign, variation |
| Reports, dashboards, website context | No | Saved report and dashboard configuration, site knowledge |

Explicitly **not** retrievable through any tool:

- IP addresses and internal visitor identifiers
- Person level de-anonymization fields on visitor sessions (person name, person work email, person LinkedIn URL and related fields)
- Personal, non business contact data: mobile phone, personal email addresses, phone numbers, birth date, sex
- Your own team's user and role records, owner user ids, owner emails and names, admin surfaces
- Integration OAuth and refresh tokens, meeting reschedule and cancel tokens, calendar event ids, video conference links
- Shared enrichment caches (IP to company, Apollo, PDL, BuiltWith, ZoomInfo, technology scraper) and global settings
- Raw session data, runtime analytics, and scoring internals

The full list is on the [Tool Reference](/mcp/tools#what-is-never-exposed) page.

---

## 7. Encryption

| Layer | Control |
|-------|---------|
| Client to MCP server | HTTPS only. TLS 1.2 minimum with TLS 1.3 supported (AWS load balancer policy `ELBSecurityPolicy-TLS13-1-2-2021-06`). Plain HTTP requests receive a 301 redirect to HTTPS. Certificate issued by AWS Certificate Manager for `*.abmatic.ai`. |
| MCP server to Abmatic AI API | HTTPS to `https://api.abmatic.ai`. The call leaves the load balancer, not an unauthenticated internal channel, and carries the same bearer. |
| Credential at rest | The API key is stored only as a SHA-256 hash on the account record. The MCP service stores nothing at all. |
| Platform data at rest | Encrypted at rest in the existing Abmatic AI platform storage. This feature introduces no new data store. |
| Service configuration | Held in AWS Systems Manager Parameter Store and injected as container environment at task start. The only configured value is the API base URL. No customer secret is stored. |

---

## 8. Hosting and infrastructure

| Property | Value |
|----------|-------|
| Cloud provider and region | AWS, us-east-1 |
| Compute | Amazon ECS on Fargate, two tasks running behind a load balancer |
| Network placement | Private subnets. Tasks have no public IP address and are not directly reachable from the internet. |
| Ingress | Application Load Balancer, HTTPS on 443 only for this host, forwarding to the container on port 8080 |
| Egress from the service | To the Abmatic AI API over HTTPS |
| Configuration source | AWS Systems Manager Parameter Store, injected by the task definition |
| Runtime | Python 3.11 container image built by the CI pipeline and stored in a private Amazon ECR repository |
| Health checking | `GET /healthz` at the container and target group level, returning 200 independently of API reachability |

The MCP service runs in Abmatic AI's existing AWS account and inherits the platform's account level controls. Data residency is unchanged by this feature: Abmatic AI stores customer data in United States AWS regions.

---

## 9. Logging and monitoring

| Log | Contents | Where |
|-----|----------|-------|
| Container logs | Application log lines: startup, request handling outcomes, errors. The bearer token is never logged, in full or in part, and is never placed in an error message. | Amazon CloudWatch Logs, `/ecs/abmatic-mcp` |
| Load balancer access logs | Request metadata: timestamp, source address, request path, status code, latency, user agent. Request bodies and headers are not included, so the bearer does not appear. | Amazon S3, enabled on the load balancer |
| Platform API logs | Application logs for the API that serves the data | Amazon CloudWatch Logs |
| Response correlation id | Every API response carries a `request_id` in `meta`, which support can use to correlate a specific call with server side logs | Returned to the caller |

Error monitoring: the service supports Sentry and, when enabled, runs with default PII scrubbing on and never attaches the bearer to an event. The current production deployment runs **without** a Sentry DSN configured, so no error data is sent to a third party monitoring service.

**What is not available today:** a self serve, customer facing access report showing every call made with your key. Infrastructure logs record request metadata as described above, and you can contact [support@abmatic.ai](mailto:support@abmatic.ai) for an access review of a specific window. A per-key audit log surfaced in the dashboard is roadmap work, and we would rather tell you that than imply a control we do not yet ship.

---

## 10. Data retention

| Item | Retention |
|------|-----------|
| Data held by the MCP service | None. It is stateless, it does not persist requests, responses, prompts, or results. |
| Infrastructure logs | Retained under Abmatic AI's standard platform log retention |
| Your Abmatic AI data | Unchanged by this feature. It follows the retention terms of your existing agreement and Data Processing Agreement. |
| Data your assistant retains | Governed by your AI provider. Tool results become part of that conversation's context under your agreement with that provider. |

---

## 11. Availability and change management

- Two tasks run behind the load balancer, so a single task failure does not take the endpoint down. Health checks remove unhealthy tasks from rotation automatically.
- Code changes require a pull request against a protected branch with human review before merge. Direct pushes to the protected branches are not permitted.
- Merges trigger an automated build and a rolling container deployment. A deployment circuit breaker rolls the service back automatically if the new version fails its health checks.
- Every public API endpoint that backs a tool ships with automated tests, including a mandatory two tenant isolation test.
- Abmatic AI maintains a SOC 2 Type II program. Request the report, the Data Processing Agreement, and completed security questionnaires from [sales@abmatic.ai](mailto:sales@abmatic.ai).

---

## 12. Where your data goes when you use this

This matters more than the transport details for most reviews, so it is stated directly.

1. Your AI client requests data from the MCP server using your API key.
2. Abmatic AI returns your own account's data.
3. **That data then becomes context in your AI assistant**, which means it is processed by the AI provider you selected (for example Anthropic, if you use Claude), under your agreement and data retention settings with that provider.

Abmatic AI does not choose your AI provider, does not receive your prompts, and does not send your Abmatic AI data anywhere other than back to the client that authenticated with your key. This feature adds no new sub-processor on the Abmatic AI side. Whether your assistant's provider may retain or train on the returned data is a property of your contract with that provider, and is worth confirming as part of the same review.

---

## 13. Threat model

| Threat | Mitigation |
|--------|------------|
| Leaked or stolen API key | Full account read is possible, which is why the key is documented as password grade. Mitigated by immediate revocation and regeneration, per-key rate limiting, plan gating, and the read only surface. No write, delete, billing, or user management action is reachable with the key. |
| Cross tenant data access | Structural. The MCP service never touches a data store. The account identity comes from the credential, never a parameter. Every query is tenant filtered with a mandatory two tenant test per endpoint, and cross tenant ids return `404`. |
| Compromise of the MCP service | Blast radius limited by design: it holds no database credential, no cloud data plane credential, and no customer key at rest. It cannot read anything a valid API key could not already read. |
| Prompt injection causing exfiltration | The surface is read only, the data returned is the customer's own, and there are no write tools to abuse. An injected instruction cannot make the connector reach another tenant or modify data. The residual risk, that an assistant is manipulated into showing your own data to the wrong person in your own workspace, is controlled on your side by who you grant the connector to. |
| Credential leakage through logs | The bearer is never logged and never included in error messages. Load balancer access logs do not capture headers. Rate limiter storage holds a SHA-256 digest, not the key. |
| Secret leakage in responses | Explicit per-object field allowlists, plus a response middleware that strips token shaped fields as a backstop. |
| Abuse or bulk scraping with a valid key | 100 requests per minute per key, paging capped at 100 records per request, plus revocation. |
| Exposure of shared enrichment data | Shared caches are never exposed through the API and are never account filtered into a response. |
| Man in the middle | HTTPS only, TLS 1.2 minimum, HTTP redirected to HTTPS, certificate issued by AWS Certificate Manager. |

---

## 14. Limitations we are explicit about

These are current facts, not planned reassurances. Reviewers should weigh them:

1. **The key is account scoped, not user scoped.** It does not honor dashboard roles. Anyone using the connector reads everything the account exposes.
2. **One active key per account.** Rotation is a coordinated change across every agent using it, and there is no per-integration key to revoke in isolation.
3. **No per-key object or field scoping yet.** You cannot issue an analytics only key today.
4. **No customer facing audit report yet.** Access review is available through support, not self serve.
5. **No IP allowlisting** on API key use, and no static egress IPs to allowlist on your side.
6. **No OAuth.** Static bearer only, so credential hygiene rests on your secret storage.
7. **Rate limiting is fixed** at 100 requests per minute per key and is not tunable per customer today.

If any of these blocks approval on your side, tell us which one. Several are already designed and prioritizable.

---

## 15. Recommended controls on your side

A short checklist most security teams will want to apply:

- Store the key in your secret manager or your AI platform's credential vault. Never in a prompt, a repository, or a shared document.
- Prefer an **admin managed** connector in your AI workspace over per-user connectors, so the key is entered once by an administrator and the connector is granted to a defined group rather than pasted around.
- Decide deliberately who gets the connector. Anyone with it reads the whole Abmatic AI account.
- Rotate on offboarding of anyone who could see the key, on any suspected exposure, and on your standard periodic schedule.
- Confirm your AI provider's retention and training settings for the workspace where the connector is used.
- Allow outbound HTTPS to `mcp.abmatic.ai` on 443 by hostname. Nothing inbound is required.
- Record the connector in your vendor or integration register as read only, account scoped, US hosted.

---

## 16. Reporting a security issue

Email [support@abmatic.ai](mailto:support@abmatic.ai) with "security" in the subject line, or contact your Abmatic AI representative directly. For SOC 2 reports, the Data Processing Agreement, or a completed security questionnaire, contact [sales@abmatic.ai](mailto:sales@abmatic.ai).

If you believe a key has been exposed, revoke or regenerate it immediately at [app.abmatic.ai/settings/api-keys](https://app.abmatic.ai/settings/api-keys). Revocation is effective on the next request and does not require Abmatic AI involvement.
