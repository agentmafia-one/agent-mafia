# 🤖 AGENT MAFIA — AUTONOMOUS BUILD SESSION

## 🎯 MISSION
**Ship BookBot in 14 days: Shopify → QuickBooks sync + weekly P&L emails**

```
SUCCESS METRIC: 3 paying customers ($297 MRR) by Day 14
KILL METRIC: 0 interested prospects by Day 7 → pivot
```

---

## 🏗️ EXISTING INFRASTRUCTURE (Use This!)

**Domain & Hosting:**
- Domain: agentmafia.one (DNS → Vercel)
- Vercel: Already connected
- Frontend: Next.js 14 + Tailwind + wagmi/viem

**Social:**
- X/Twitter: @MafiaAgent83484
  - Consumer Key: ITZS3lfBYCSzPfn9k99jla3B8
  - Access Token: 2017633981076848640-n1reGLg3w7svWIB23ihExDA28OlPP7

**Smart Contracts (Base Mainnet) — NOT NEEDED FOR MVP:**
- AgentRegistry: 0x9E39d2ac18b1C1d0644D77a68C1B76A9CB54Aa25
- BountyBoard: 0xFA4Db70667FDffBc5F53C838DF70E190F197be2c
- SwarmBounty: 0xcF7C1c63b141F14abdD21BEE42b237A42Ea81E98
- ⚠️ Deployer wallet compromised — don't use for new deploys
- 📌 These are for future marketplace, NOT for BookBot MVP

**Payments — USE STRIPE:**
- Stripe API: sk_live_51RnbVDHOV9bn2GeT... (see TOOLS.md)
- Simple checkout, no crypto complexity
- Target customers (Shopify sellers) expect Stripe

**Project Files:**
- ~/clawd/projects/agent-mafia/frontend/ — Next.js app
- ~/clawd/projects/agent-mafia/contracts/ — Deployed contracts
- ~/clawd/projects/agent-mafia/500K-PLAYBOOK.md — Full strategy

---

## 📍 BEFORE YOU DO ANYTHING

1. **Read the state:**
   ```
   ~/clawd/projects/agent-mafia/standup-log.md    # What's been done
   ~/clawd/projects/agent-mafia/BLOCKERS.md       # Current blockers
   ~/clawd/projects/agent-mafia/METRICS.md        # Users, signups, revenue
   ~/clawd/projects/agent-mafia/500K-PLAYBOOK.md  # Strategy doc
   ```

2. **Calculate day number:**
   - Start date: 2026-02-03
   - Today: [auto-calculate]
   - Days remaining: [14 - day number]

3. **Check the scoreboard:**
   | Metric | Target | Current |
   |--------|--------|---------|
   | Landing page | Live at agentmafia.one | ? |
   | Email signups | 20 | ? |
   | Shopify auth working | Yes | ? |
   | QuickBooks sync working | Yes | ? |
   | Beta users | 3 | ? |
   | Paying users | 3 | ? |

---

## 🔨 EXECUTION RULES

### The ONE Thing
Each session, pick **exactly ONE task** from this priority stack:

```
IF no landing page live     → Build & deploy landing page
ELIF no email capture       → Add email signup + lead magnet
ELIF signups < 10           → Cold outreach (10 DMs minimum)  
ELIF no Shopify auth        → Implement OAuth flow
ELIF no QuickBooks sync     → Build sync integration
ELIF no beta users          → Convert signups to beta
ELIF beta but no payment    → Add Stripe checkout ($99/mo) + convert to paid
ELSE                        → Ask Jarod what's next
```

### Time Box
- **Max 45 minutes** per session
- If task isn't done in 45 min → log state, hand off to next session
- **No rabbit holes.** Ship ugly, iterate later.

### Definition of Done
A task is DONE when:
- [ ] Code is committed (if applicable)
- [ ] It's deployed/live (if applicable)  
- [ ] You can show a URL or screenshot
- [ ] standup-log.md is updated

---

## 🚨 BLOCKER PROTOCOL

If stuck for >10 minutes:

1. **Can you ship something smaller?** Do that instead.
2. **Is it a technical blocker?** Log to BLOCKERS.md, move on.
3. **Is it waiting on external?** (API approval, customer response) → Do outreach instead.
4. **Truly stuck?** Ping Jarod on Telegram with specific question.

**Never end a session with "I couldn't do anything."** Always ship SOMETHING.

---

## 📤 SESSION OUTPUT (Required)

### 1. Update standup-log.md
```markdown
## [DATE] - Session [N]

**Objective:** [What you tried to do]
**Shipped:** [What actually got done - with URLs/proof]
**Blocked:** [What's stuck and why]
**Next:** [Exactly what the next session should do]
**Day [X]/14 — [Users: N] [MRR: $N]**
```

### 2. Update METRICS.md
```markdown
| Date | Signups | Beta Users | Paying | MRR |
|------|---------|------------|--------|-----|
```

### 3. Telegram Jarod (brief)
```
📦 BookBot Day [X]/14

Shipped: [one line]
Metrics: [signups/users/mrr]
Next: [one line]
Blocker: [if any]
```

---

## 🏁 PHASE COMPLETE CHECK

**At the START of every session, check METRICS.md:**

```
IF paying_users >= 3:
   → 🎉 PHASE 1 COMPLETE!
   → DO NOT continue normal tasks
   → Send Telegram to Jarod:
     "🎉 PHASE 1 COMPLETE: 3 paying customers achieved!
      MRR: $[X]
      What worked: [summary from standup-log]
      Awaiting Phase 2 instructions."
   → Update HANDOFF.md: "PAUSED — Awaiting Phase 2 mission from Jarod"
   → STOP
```

**Kill criteria check:**
```
IF day >= 7 AND signups < 5:
   → ⚠️ KILL CRITERIA MET
   → Send Telegram to Jarod:
     "⚠️ Day 7 kill criteria triggered.
      Signups: [X] (target was 10+)
      Recommend: Pivot or double down?
      Awaiting decision."
   → STOP
```

---

## 🧠 MINDSET

```
"If it's not shipped, it doesn't exist."
"Ugly and live beats perfect and local."
"When in doubt, talk to customers."
"The goal is 3 paying users, not a beautiful codebase."
```

---

## 🔄 NEXT SESSION HANDOFF

End every session by writing a **15-second brief** for the next agent:

```
HANDOFF: [Exactly what to do next, with file paths and context]
```

This is the first thing the next session reads.

---

## 📁 PROJECT STRUCTURE

```
~/clawd/projects/agent-mafia/
├── STANDUP-CRON-PROMPT.md   # This file
├── standup-log.md           # Running log of all sessions
├── BLOCKERS.md              # Current blockers
├── METRICS.md               # Scoreboard
├── HANDOFF.md               # Next session's instructions
├── 500K-PLAYBOOK.md         # Full strategy document
├── DEBATE-SUMMARY-*.md      # Strategic debate outputs
├── frontend/                # Next.js app (EXISTING)
│   ├── src/app/             # Pages
│   ├── src/components/      # React components
│   └── src/lib/             # Utilities
├── contracts/               # Smart contracts (DEPLOYED)
├── docs/                    # Documentation
└── outreach/                # DM templates, responses
```

---

**START EVERY SESSION BY READING HANDOFF.md**
