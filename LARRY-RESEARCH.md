# Larry Research — AI Marketing Agent & Skills Marketplace

**Saved:** 2026-03-14
**Source:** Greg Isenberg + Oliver Henry transcript (Put.io)

---

## What is Larry?

**Larry** = AI Marketing Employee built by Oliver Henry using OpenClaw
- Automates TikTok marketing
- Generates $300-400/month MRR from apps he doesn't touch
- Ernesto Lopez scaled to $70K MRR using this approach

### The Larry Loop:
1. Agent creates TikTok slideshows
2. Analyzes which posts perform best (hooks, CTAs)
3. Iterates autonomously based on analytics
4. Posts as drafts → human adds sound + posts (avoids bot detection)

### What Worked:
- Curiosity + AI reveal hooks ("I showed my mom what AI thinks...")
- Nan/mom hooks got 200K-400K views
- Mistakes = engagement (boomers comment)
- Let the agent loose — "bad" posts got 400K views

---

## LarryBrain.com — Skills Marketplace

**URL:** https://larrybrain.com
**Model:** Free skills with paid dependencies

### The Arbitrage:
```
FREE skill on LarryBrain
        ↓
Requires PAID dependency
        ↓
You earn affiliate $ from the dependency
```

### Examples:
| Skill | Dependency | Revenue |
|-------|------------|---------|
| Larry Marketing (free) | PostNitro ($) | Affiliate commission |
| Tailscale skill (free) | Tailscale Teams ($6/user) | Partner program |
| Analytics skill (free) | Plausible/Fathom ($) | Affiliate |

### Revenue Streams:
| Source | How |
|--------|-----|
| LarryBrain referrals | 50% of $29.99 |
| Dependency affiliates | Commission from service |
| Consulting/setup | "Need help? $X" |

---

## Agent Mafia Integration

### The Play:
```
Agent Mafia (Platform)
│
├── Marketplace (per-install revenue)
│   │
│   └── Tailscale VPN Skill ← First flagship skill
│
└── Managed Services (premium upsell)
    └── "Done for you" VPN setup
```

### Tailscale VPN Product Tiers:
| Tier | What They Get | Price | Cost | Margin |
|------|---------------|-------|------|--------|
| Solo | 1 Hetzner VPS | $25/mo | ~$5 | 5x |
| Pro | 3 VPS (EU + US) | $60/mo | ~$15 | 4x |
| Global | 5 VPS multi-region | $100/mo | ~$25 | 4x |
| Swiss Premium | + Swiss mobile exit | $150/mo | ~$30 | 5x |

### Automation Script:
```bash
# Client provides: Hetzner API key, Tailscale auth key
# Script does:
1. Spin up VPS via Hetzner API
2. Install Tailscale
3. Configure as exit node
4. Join client's tailnet
5. Harden (firewall, fail2ban)
6. Done in 5 minutes
```

### The Flywheel:
1. Launch Tailscale skill on Agent Mafia
2. Free tier: DIY setup instructions
3. Paid tier: Automated deployment ($25-100/mo)
4. Use Larry's marketing skill to promote
5. Revenue funds more skills
6. More skills → more users → platform grows

---

## Key Insight

> "Skills > multi-agent complexity"

One well-built skill that solves a real problem beats complex multi-agent architectures.

---

## Next Steps

- [ ] Check Tailscale partner/affiliate program
- [ ] Draft Hetzner + Tailscale deployment script
- [ ] Publish skill on LarryBrain (free)
- [ ] Build Agent Mafia marketplace around this model
- [ ] Use existing US VPS (5.161.44.91) as proof of concept
