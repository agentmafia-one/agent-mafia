# WatchBot — Build Handoff

**Last Updated:** 2026-02-05 11:05 UTC
**Phase:** MVP Build
**Status:** 🟢 CORE MONITORING WORKING

---

## Current Status

✅ **Twitter/X + Web monitoring WORKING**
- DuckDuckGo search integration complete
- Deduplication logic implemented
- Results saved to JSON

## Completed This Session

1. ✅ Created `src/monitor.py` — main monitoring script
2. ✅ Created `src/config.json` — keyword configuration
3. ✅ Installed `ddgs` package for search
4. ✅ Tested with SwissChain keywords — found 21 mentions
5. ✅ Deduplication working (hash-based)
6. ✅ Results saving to `data/results.json`
7. ✅ Created `src/cron_runner.sh` for 24/7 operation

## MVP Progress

- [x] Twitter/X monitoring working ✅
- [x] Google/Web mentions tracking ✅
- [ ] Telegram bot sends alerts (next)
- [x] Keyword config (3 terms) ✅
- [x] Deduplication logic ✅
- [ ] Daily digest compilation
- [ ] Running 24/7 on VPS

**Progress: 5/7 MVP items**

## Next Session Should

1. **Add Telegram alerting** — Send new mentions to chat
2. **Create daily digest** — Summary of all mentions
3. **Set up cron job** — Run every 30 minutes
4. **Test full flow** — End-to-end verification

## Files Created

```
watchbot/
├── src/
│   ├── monitor.py       # Main monitoring script ✅
│   ├── config.json      # Keyword configuration ✅
│   └── cron_runner.sh   # Cron wrapper script ✅
├── data/
│   ├── seen.json        # Dedup hashes ✅
│   └── results.json     # Found mentions ✅
├── README.md            # Project spec
└── HANDOFF.md           # This file
```

## Technical Notes

- Using `ddgs` package (DuckDuckGo search) instead of snscrape
- snscrape is broken due to Twitter API changes
- DDG works reliably for both Twitter/X and web results
- Found @SwissChainSA Twitter account in first run!

## Test Results

```
🔍 Searching for: SwissChain Holding
  Twitter: 5 results
  Web: 10 results
🔍 Searching for: SwissChain
  Twitter: 4 results
  Web: 0 results
🔍 Searching for: swisschainholding.ch
  Twitter: 0 results
  Web: 7 results

✅ Found 21 NEW mentions
```

---

## Outreach Template (for when ready)

**To:** contact@swisschainholding.ch
**From:** noreply@agentmafia.one
**Subject:** WatchBot — Surveillez vos mentions en temps réel (30 jours offerts)

```
Bonjour Loic,

Nous lançons WatchBot — un service de veille de marque hébergé en Suisse qui surveille les mentions de votre entreprise sur X/Twitter et Google en temps réel.

En tant que partenaire pilote, nous vous offrons :
• 30 jours GRATUITS sur le plan Pro (10 mots-clés)
• Code promo : SWISSCHAIN-PILOT
• Alertes Telegram en moins de 15 minutes

Mots-clés que nous surveillerions :
• SwissChain Holding
• SwissChain
• + 8 mots-clés de votre choix

Le coupon active un essai gratuit de 30 jours. La facturation automatique démarre ensuite à CHF 49/mois — annulable à tout moment.

Répondez pour activer votre pilote, ou visitez agentmafia.one/watchbot

Cordialement,
L'équipe Agent Mafia
```

**Stripe Coupon:** SWISSCHAIN-PILOT (to be created)
