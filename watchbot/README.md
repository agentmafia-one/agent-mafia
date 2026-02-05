# WatchBot — Brand & Mention Monitoring Agent

**Status:** 🚧 Building MVP
**Target Launch:** First client ready → outreach to SwissChain

## What It Does

Monitors X/Twitter + Google for keywords and sends instant Telegram alerts.

- Real-time mention detection
- AI-powered relevance filtering (GLM = cheap)
- Telegram notifications (instant + daily digest)
- Swiss-hosted, EU data residency

## Use Cases

| Customer | Monitors | Why |
|----------|----------|-----|
| Startups | Brand name, founders | PR, catch complaints early |
| HR/Companies | Employee names | Reputation risk |
| Crypto projects | Token name, FUD | React to market sentiment |
| Agencies | Client brands | Client service |
| Individuals | Own name | Personal brand |

## Pricing

| Plan | Keywords | Price |
|------|----------|-------|
| Starter | 3 keywords | $19/mo |
| Pro | 10 keywords | $49/mo |
| Agency | 50 keywords | $149/mo |

## Tech Stack

```
Twitter API / Scraping (Nitter, snscrape)
         ↓
    Google Alerts API / SerpAPI
         ↓
    Keyword Matching + Dedup
         ↓
    AI Summary (GLM-4-Flash = $0)
         ↓
    Telegram Bot Notification
         ↓
    PostgreSQL (mention history)
```

## MVP Scope (Phase 1)

**Track 3-5 keywords for SwissChain as pilot:**
- "SwissChain Holding"
- "SwissChain"
- "Jarod Koopman" (optional)
- Token/project names (TBD)

**MVP Features:**
- [ ] X/Twitter monitoring (API or scraping)
- [ ] Google mention tracking (SerpAPI or alerts)
- [ ] Telegram bot for notifications
- [ ] Simple keyword config (JSON or DB)
- [ ] Deduplication (don't alert same mention twice)
- [ ] Daily digest summary

**NOT in MVP:**
- Web dashboard
- Stripe billing
- Multi-tenant auth
- Sentiment analysis (v2)

## First Client Outreach

When MVP is operational:
1. Send email from `noreply@agentmafia.one` to `contact@swisschainholding.ch`
2. Include coupon code: `SWISSCHAIN-PILOT`
3. Offer: 1 month free Pro plan (10 keywords)
4. Track: SwissChain + related names

## API Options

### Twitter/X
- **Official API:** $100/mo Basic, limited search
- **Nitter scraping:** Free but fragile
- **RapidAPI Twitter:** ~$10/mo for search
- **snscrape:** Free Python library (may break)

### Google Mentions
- **SerpAPI:** $50/mo, 5000 searches
- **Google Alerts:** Free but no API (email parsing)
- **Serper.dev:** $50/mo, good for news

**Recommendation:** Start with snscrape + Google Alerts email parsing (free), upgrade to paid APIs when revenue justifies.

## File Structure

```
watchbot/
├── README.md          # This file
├── HANDOFF.md         # Build session status
├── src/
│   ├── twitter.py     # X monitoring
│   ├── google.py      # Google mentions
│   ├── bot.py         # Telegram bot
│   ├── config.py      # Keyword configs
│   └── db.py          # PostgreSQL storage
├── data/
│   └── keywords.json  # Active monitoring configs
└── tests/
```

## Success Criteria

- [ ] Can monitor 5 keywords across X + Google
- [ ] Sends Telegram alert within 15 min of mention
- [ ] Daily digest at configured time
- [ ] No duplicate alerts
- [ ] Runs autonomously 24/7
- [ ] SwissChain pilot activated
