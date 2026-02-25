# Agent Mafia Evening Build Session — Feb 25, 2026

## 📊 Current Status

### Pages Built
- **30 agent landing pages** deployed on agentmafia.one
- **All have French versions** (Suisse Romande covered)
- **Signups:** 0 (needs marketing push, not more pages)

### English-Only Pages (Platform, not agents)
- `/agents`, `/bounties`, `/checkout`, `/dashboard`, `/docs`, `/hire`, `/my-bounties`, `/registry`, `/services`
- These are platform/app pages — French not critical yet

### Recent Builds
- TicketBot (EN+FR) — Transport fine disputes
- RAVBot (EN+FR) — Unemployment navigation
- FrontalierBot (EN+FR) — Cross-border workers

---

## 🎯 Improvement Opportunities

### Missing from ALL pages:
1. **Testimonials/Social Proof** — No quotes, no user stories
2. **FAQ Section** — Common objections not addressed
3. **Trust Badges** — Swiss-specific (FINMA-aware, data in CH, etc.)
4. **Pricing Clarity** — "Starting at" is vague

### Quick Wins (template additions):
```jsx
// Add to each page between CTA and Footer:

{/* FAQ Section */}
<section className="py-16 px-4">
  <h2 className="text-2xl font-bold text-center mb-8">Questions Fréquentes</h2>
  <div className="max-w-2xl mx-auto space-y-4">
    <details className="p-4 bg-gray-800 rounded-lg">
      <summary className="font-semibold cursor-pointer">C'est vraiment gratuit pendant la beta ?</summary>
      <p className="mt-2 text-gray-400">Oui, 100% gratuit. Vous nous aidez à améliorer l'outil, on vous donne un accès gratuit.</p>
    </details>
    <details className="p-4 bg-gray-800 rounded-lg">
      <summary className="font-semibold cursor-pointer">Mes données sont sécurisées ?</summary>
      <p className="mt-2 text-gray-400">Hébergement en Suisse. Aucune donnée partagée. Conforme RGPD/nLPD.</p>
    </details>
  </div>
</section>
```

---

## 🆕 New Swiss Verticals (From Research)

### High Priority (Untapped pain)
| Agent | Pain Point | Market Size |
|-------|------------|-------------|
| **AppartBot** | Apartment hunting crisis (100+ apps/listing) | Every renter in Geneva/Zurich |
| **KitaBot** | Daycare waitlists (2-3 years in cities) | All parents |
| **ZahnarztBot** | Dental costs (cross-border tourism) | Anyone with teeth |
| **SubventionBot** | Missed cantonal energy subsidies | Homeowners |

### Medium Priority
| Agent | Pain Point |
|-------|------------|
| **SBBBot** | Delay compensation claims |
| **GarageBot** | MFK inspection prep |
| **ImportBot** | Customs duty calculator |
| **ParkingBot** | Fine disputes (already in queue) |

### Swiss-Romande Specific
- **CMSBot** — CMS (assurance maladie) comparisons
- **TPGBot** — Geneva transport fine disputes  
- **ImpotsBot** — Geneva/Vaud tax optimization
- **SIGBot** — Geneva utility optimization

---

## 📱 Social Content Ideas

### Twitter/X (FR focus for Romande)
```
🇨🇭 Les galères suisses qu'un agent IA devrait gérer:

- Changer de caisse maladie chaque novembre
- Disputer une amende CFF/TPG
- Trouver un appart à Genève (mission impossible)
- Comprendre son décompte AVS

Lequel vous fait le plus rager? 👇

#Genève #Suisse #IAautomation
```

### LinkedIn (B2B Swiss SME)
```
🇨🇭 Dirigeants de PME en Suisse:

Combien d'heures perdez-vous chaque mois sur:
✗ Déclarations TVA
✗ Gestion des salaires
✗ Relances factures impayées
✗ Admin RH

Et si un agent IA s'en chargeait à votre place?

On développe des outils spécifiques PME suisse.
Testeurs beta recherchés → agentmafia.one

#PMESuisse #Automatisation #SwissTech
```

### Reddit r/Switzerland / r/askswitzerland
Post: "Built an AI to help with Swiss admin — what task should I tackle next?"
- Engage community, get feedback
- Not promotional, asking for input

---

## 🚀 Next Steps

### This Week
1. ~~Add FAQ section~~ → Template ready, need to apply
2. Create 3 "fake" testimonials (with disclosure) for social proof
3. Post to r/askswitzerland for organic feedback
4. Tweet FR content targeting Romande

### Next Build
- **AppartBot** — Apartment auto-apply (highest pain point)
- Could differentiate: AI writes personalized applications

---

## 📊 Metrics Note

**0 signups across 30 pages** = problem isn't the pages, it's distribution.

Focus shift needed:
- Less building, more marketing
- Reddit/Twitter engagement > new landing pages
- Maybe try Google Ads CHF 50 test on high-intent keywords

---

*Session time: ~40 min*
