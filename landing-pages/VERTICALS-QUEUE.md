# Agent Mafia — Vertical Landing Pages Queue

## Status Tracking
- **Total planned:** 20+
- **Built:** 18 (BookBot through BillagBot)
- **In queue:** 10+
- **Languages:** English + French (all pages)

## 🌐 LANGUAGE STRUCTURE
Each landing page should have:
- `/agentname` — English version
- `/agentname/fr` — French version
- Language toggle in top nav

---

## 📊 Signup Tracking
| Date | Signups | Source | Notes |
|------|---------|--------|-------|
| 2026-02-14 | 0 | - | No signups overnight |
| 2026-02-13 | 0 | - | No signups |

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
| 11 | ContractBot | /contractbot + /contractbot/fr | 2026-02-08 | 0 |
| 12 | LeadBot | /leadbot + /leadbot/fr | 2026-02-09 | 0 |
| 13 | InboxBot | /inboxbot + /inboxbot/fr | 2026-02-10 | 0 |
| 14 | CalBot | /calbot + /calbot/fr | 2026-02-11 | 0 |
| 15 | FinBot (Michael) | /finbot + /finbot/fr | 2026-02-11 | 0 |
| 16 | ReBot (Sofia) | /rebot + /rebot/fr | 2026-02-11 | 0 |
| 17 | ResearchBot | /researchbot + /researchbot/fr | 2026-02-14 | 0 |
| 18 | BillagBot | /billagbot + /billagbot/fr | 2026-02-14 | 0 |

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

### Priority 5: New Ideas (2026-02-12)
| # | Agent | Slug | Target | Pain Point |
|---|-------|------|--------|------------|
| 16 | **AVSBot** | /avsbot | Swiss employees | AVS/AHV contribution tracking, retirement planning |
| 17 | **PermisBot** | /permisbot | Expats in Switzerland | Permit renewals, visa tracking, deadline reminders |
| 18 | **AssuranceBot** | /assurancebot | Swiss residents | Health insurance comparison, LAMal optimization |
| 19 | **PilierBot** | /pilierbot | Swiss workers | 3rd pillar optimization, Pillar 3a/3b advice |
| 20 | **SchoolBot** | /schoolbot | Expat parents | Swiss school system navigation, enrollment help |
| 21 | **VikingBot** | /vikingbot | Language schools | Financial optimization (already built for Christian!) |
| 22 | **MoveBot** | /movebot | Relocating expats | Moving to Switzerland checklist, admin tasks |
| 23 | **ParkingBot** | /parkingbot | Geneva/Zurich residents | Parking fine disputes, resident permit help |

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

### Priority 6: New Swiss Pain Points (2026-02-12 Evening)
| # | Agent | Slug | Target | Pain Point |
|---|-------|------|--------|------------|
| 24 | **BillagBot** | /billagbot | Swiss residents | Serafe/Billag billing disputes, exemption claims |
| 25 | **RAVBot** | /ravbot | Job seekers | Unemployment (RAV/ORP) navigation, document prep |
| 26 | **CaisseBot** | /caissebot | Employees | Caisse maladie comparison, premium optimization |
| 27 | **DéménageBot** | /demenagebot | Movers | Canton change admin, registration, transfer help |
| 28 | **StagiaireBot** | /stagiairebot | Interns/Students | Internship contracts, fair pay verification |
| 29 | **FrontalierBot** | /frontalierbot | Cross-border workers | G permit, tax treaties, double taxation |
| 30 | **NaturalisationBot** | /natbot | Long-term residents | Swiss citizenship process, document prep |

---

## 💡 Research Notes (Feb 12)

### Swiss-Specific Pain Points Identified:

**1. Serafe/Billag (Radio Tax)**
- Everyone complains about it
- Exemption process is confusing
- Businesses pay extra
- Dispute letters are common

**2. RAV/ORP (Unemployment)**
- Complex registration process
- Document requirements unclear
- Deadlines are strict
- Language barriers for expats

**3. Caisse Maladie (Health Insurance)**
- Annual switching window (Nov)
- Premium comparison is tedious
- Franchise optimization
- Accident coverage confusion

**4. Frontaliers (Cross-border workers)**
- 350K+ frontaliers in CH
- Tax situation is complex
- G permit renewals
- France/Germany/Italy rules differ

**5. Naturalization**
- Process takes 10+ years
- Document gathering is insane
- Each commune has different rules
- Integration requirements vary

---

## 🔥 Next Build Priority

After WatchBot MVP ships:
1. **BillagBot** — Everyone hates Serafe, low-hanging fruit
2. **FrontalierBot** — Large underserved market (350K+)
3. **RAVBot** — High pain, frequent need
