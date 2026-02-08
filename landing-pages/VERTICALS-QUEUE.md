# Agent Mafia — Vertical Landing Pages Queue

## Status Tracking
- **Total planned:** 20+
- **Built:** 10 (BookBot through InvoiceBot)
- **In queue:** 10+
- **Languages:** English + French (all pages)

## 🌐 LANGUAGE STRUCTURE
Each landing page should have:
- `/agentname` — English version
- `/agentname/fr` — French version
- Language toggle in top nav

---

## ✅ COMPLETED

| # | Agent | URL | Date | Signups |
|---|-------|-----|------|---------|
| 1 | BookBot | /bookbot + /bookbot/fr | 2026-02-02 | 0 |
| 2 | RégieBot | /regiebot + /regiebot/fr | 2026-02-03 | 0 |
| 3 | VoiceWeb | /voiceweb + /voiceweb/fr | 2026-02-03 | 0 |
| 4 | VoiceNote | /voicenote + /voicenote/fr | 2026-02-03 | 0 |
| 5 | PenTestBot | /pentestbot + /pentestbot/fr | 2026-02-03 | 0 |
| 6 | IntrusionBot | /intrusionbot + /intrusionbot/fr | 2026-02-03 | 0 |
| 7 | VoisinBot | /voisinbot + /voisinbot/fr | 2026-02-04 | 0 |
| 8 | BailBot | /bailbot + /bailbot/fr | 2026-02-05 | 0 |
| 9 | TaxBot | /taxbot + /taxbot/fr | 2026-02-06 | 0 |
| 10 | InvoiceBot | /invoicebot + /invoicebot/fr | 2026-02-07 | 0 |

---

## 🔄 IN QUEUE (Daily cron picks next)

### 🔥 PRIORITY 0: Active Build (Dedicated Cron)
| # | Agent | Slug | Target | Pain Point | Status |
|---|-------|------|--------|------------|--------|
| 1 | **WatchBot** | /watchbot | Startups, HR, Crypto | Brand/name monitoring across X + Google | 🚧 Building MVP |

> WatchBot has dedicated daily cron (12PM Geneva). First client: SwissChain pilot with coupon SWISSCHAIN-PILOT.

### Priority 1: Swiss Legal (High pain, differentiated)
| # | Agent | Slug | Target | Pain Point |
|---|-------|------|--------|------------|
| 2 | **RégieBot** | /regiebot | Swiss renters | Fight property managers, get deposits back |
| 3 | **IntrusionBot** | /intrusionbot | Debt targets | Dispute Intrum/Inkasso claims, know your rights |
| 4 | **VoisinBot** | /voisinbot | Apartment dwellers | Neighbor disputes, noise complaints, mediation |
| 5 | **BailBot** | /bailbot | Tenants | Lease issues, rent increases, termination notices |

### Priority 2: Swiss Services (High value)
| # | Agent | Slug | Target | Pain Point |
|---|-------|------|--------|------------|
| 6 | **TaxBot** | /taxbot | Swiss residents | Track expenses for tax deductions, optimize filings |
| 7 | **VoiceWeb** | /voiceweb | Non-technical owners | Build/manage websites via voice (Telegram + Plesk) |

### Priority 3: Business/Freelance
| # | Agent | Slug | Target | Pain Point |
|---|-------|------|--------|------------|
| 8 | **InvoiceBot** | /invoicebot | Freelancers | Auto-invoicing, payment reminders, late fees |
| 9 | **ContractBot** | /contractbot | SMBs | Contract review, red flag detection |
| 10 | **LeadBot** | /leadbot | Sales teams | Lead qualification, CRM automation |

### Priority 3: Productivity
| # | Agent | Slug | Target | Pain Point |
|---|-------|------|--------|------------|
| 9 | **InboxBot** | /inboxbot | Executives | Email triage, auto-replies, summaries |
| 10 | **CalBot** | /calbot | Busy professionals | Calendar management, meeting prep |
| 11 | **ResearchBot** | /researchbot | Analysts | Deep research, report generation |

### Priority 4: Niche
| # | Agent | Slug | Target | Pain Point |
|---|-------|------|--------|------------|
| 12 | **PropertyBot** | /propertybot | Real estate agents | Listing management, buyer matching |
| 13 | **SocialBot** | /socialbot | Marketers | Content scheduling, engagement |
| 14 | **ReportBot** | /reportbot | Managers | Daily briefings, KPI dashboards |
| 15 | **TaxBot** | /taxbot | Swiss expats | Tax optimization, filing help |

---

## 📋 LANDING PAGE TEMPLATE

Each page needs:
1. **Hero:** Pain-focused headline + subhead
2. **Problem:** 3 bullets on why this sucks
3. **Solution:** What the agent does
4. **How it works:** 3-step process
5. **Pricing hint:** "Starting at $49/mo"
6. **CTA:** Email capture → FormSubmit.co
7. **Footer:** "Part of Agent Mafia — AI agents that work for you"

---

## 📊 WEEKLY REVIEW

Every Sunday, check:
- [ ] Signups per page
- [ ] Which vertical has most interest
- [ ] Adjust priority queue based on data
- [ ] Report to Jarod
