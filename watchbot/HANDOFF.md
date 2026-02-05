# WatchBot — Build Handoff

**Last Updated:** 2026-02-05 02:55 UTC
**Phase:** MVP Build
**Next Session:** Start core infrastructure

---

## Current Status

🟡 **STARTING** — Project initialized, ready to build

## Immediate Priority

**Build Twitter/X monitoring first:**
1. Set up snscrape or Twitter API connection
2. Create keyword search function
3. Test with "SwissChain" keyword
4. Store results in JSON (upgrade to PostgreSQL later)

## Build Order

### Week 1: Core Monitoring
- [ ] Twitter/X search working
- [ ] Basic Telegram bot (can receive /status, send alerts)
- [ ] Keyword config file
- [ ] Dedup logic (hash-based)

### Week 2: Google + Polish
- [ ] Google Alerts email parsing OR SerpAPI
- [ ] Daily digest compilation
- [ ] Notification formatting (clean, actionable)
- [ ] 24/7 cron runner

### Week 3: Pilot Launch
- [ ] Deploy to VPS (ifc-vps-01)
- [ ] Configure SwissChain keywords
- [ ] Send outreach email with coupon
- [ ] Monitor and iterate

## Technical Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Twitter API | snscrape (start) | Free, upgrade if breaks |
| Google | Alerts email parse | Free, good enough for MVP |
| Database | JSON → PostgreSQL | Start simple |
| AI Summary | GLM-4-Flash | Free via API |
| Hosting | ifc-vps-01 | Already running |

## Blockers

None currently.

## Files Created

- `README.md` — Full project spec
- `HANDOFF.md` — This file

## Next Session Should

1. Create `src/` folder structure
2. Implement Twitter search with snscrape
3. Test keyword matching
4. Set up basic Telegram bot

---

## Outreach Template (for when ready)

**To:** contact@swisschainholding.ch
**From:** noreply@agentmafia.one
**Subject:** [Pilot Invite] WatchBot — Monitor Your Brand Mentions

```
Hi,

We're launching WatchBot — a Swiss-hosted brand monitoring service that tracks mentions of your company across X/Twitter and Google in real-time.

As a pilot partner, we're offering you:
- 1 month FREE Pro plan (10 keywords)
- Coupon code: SWISSCHAIN-PILOT
- Telegram alerts within 15 minutes of any mention

Keywords we'd track:
- SwissChain Holding
- SwissChain
- [Your choice of 8 more]

Reply to activate your pilot, or visit agentmafia.one/watchbot

— Agent Mafia Team
```
