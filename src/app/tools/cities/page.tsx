"use client";

import { useState } from "react";

const cities = [
  {
    city: "Singapore",
    country: "Singapore",
    region: "Asia",
    avgTemp: "25–31°C",
    coastal: true,
    scores: {
      climate: 6,
      laborResilience: 8,
      techEcosystem: 10,
      costOfLiving: 2,
      politicalStability: 10,
      remoteInfra: 10,
      economicDiversity: 9,
      aiReadiness: 10,
      personalFreedom: 3,
    },
    notes:
      "The undisputed AI/robotics powerhouse of Asia. S$25B RIE2025 plan for AI, robotics & deep tech. Google, TCS, Schaeffler, Hyundai all building AI R&D hubs here. S$23B in investment commitments in 2025 alone. Boston Dynamics partnerships, robotaxi pilots, humanoid robotics labs at NTU. The government IS the AI strategy — Smart Nation initiative is arguably the most coherent national AI policy globally. Downsides: brutal cost of living, equatorial heat (consistently 25–31°C but humid, not 'spring-like'), and tiny land area. Per Roemmele's framework, Singapore is the ultimate 'builder' city — positioned to create the AI future, not just survive it. The talent gap (2,800 ICT grads vs 60,000 demand) actually creates opportunity for skilled immigrants.",
  },
  {
    city: "San Diego",
    country: "USA",
    region: "North America",
    avgTemp: "15–25°C",
    coastal: true,
    scores: {
      climate: 8,
      laborResilience: 8,
      techEcosystem: 9,
      costOfLiving: 3,
      politicalStability: 6,
      remoteInfra: 9,
      economicDiversity: 9,
      aiReadiness: 9,
      personalFreedom: 4,
    },
    notes:
      "Major biotech/defense/tech hub. Qualcomm HQ, huge military-industrial R&D. BUT: California = heavy regulations, ideological conformity pressure, emerging smart city surveillance infrastructure. 'Woke' culture limits free expression. High taxes, housing crisis, homelessness. Great for building AI, questionable for living freely.",
  },
  {
    city: "Miami",
    country: "USA (Florida)",
    region: "North America",
    avgTemp: "20–32°C",
    coastal: true,
    scores: {
      climate: 7,
      laborResilience: 7,
      techEcosystem: 8,
      costOfLiving: 4,
      politicalStability: 7,
      remoteInfra: 9,
      economicDiversity: 8,
      aiReadiness: 8,
      personalFreedom: 7,
    },
    notes:
      "Florida = no state income tax, crypto-friendly, Latin American gateway. Growing tech scene post-COVID migration from SF/NYC. Hurricane risk. More freedom-oriented than California. Strong for Web3/crypto businesses. Five Flag Theory: great for US business presence without CA baggage.",
  },
  {
    city: "Houston",
    country: "USA (Texas)",
    region: "North America",
    avgTemp: "15–34°C",
    coastal: true,
    scores: {
      climate: 5,
      laborResilience: 8,
      techEcosystem: 7,
      costOfLiving: 7,
      politicalStability: 7,
      remoteInfra: 8,
      economicDiversity: 9,
      aiReadiness: 7,
      personalFreedom: 8,
    },
    notes:
      "Texas = no state income tax, business-friendly, energy capital. Extremely affordable for US. Hot humid summers but mild winters. Space industry (NASA), medical center, energy tech. Less 'woke' than coastal cities. Five Flag Theory: excellent for US business/banking without CA overreach.",
  },
  {
    city: "Montevideo",
    country: "Uruguay",
    region: "South America",
    avgTemp: "12–28°C",
    coastal: true,
    scores: {
      climate: 7,
      laborResilience: 6,
      techEcosystem: 5,
      costOfLiving: 6,
      politicalStability: 8,
      remoteInfra: 7,
      economicDiversity: 6,
      aiReadiness: 5,
      personalFreedom: 9,
    },
    notes:
      "The 'Switzerland of South America'. Most stable democracy in SA, strong property rights, no extradition treaties with most countries. Territorial tax system = foreign income not taxed. Growing tech scene. Five Flag Theory: excellent for residency/banking, maximum personal freedom in SA.",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    region: "South America",
    avgTemp: "12–30°C",
    coastal: false,
    scores: {
      climate: 7,
      laborResilience: 5,
      techEcosystem: 6,
      costOfLiving: 9,
      politicalStability: 4,
      remoteInfra: 7,
      economicDiversity: 6,
      aiReadiness: 5,
      personalFreedom: 7,
    },
    notes:
      "European feel in SA, incredible culture, ultra-cheap due to currency crisis. Strong tech talent pool. BUT: economic instability, inflation, capital controls. Milei government shifting toward more freedom. Five Flag Theory: great 'playground' flag, questionable for business/banking.",
  },
  {
    city: "Santiago",
    country: "Chile",
    region: "South America",
    avgTemp: "8–30°C",
    coastal: false,
    scores: {
      climate: 6,
      laborResilience: 6,
      techEcosystem: 6,
      costOfLiving: 6,
      politicalStability: 6,
      remoteInfra: 8,
      economicDiversity: 7,
      aiReadiness: 6,
      personalFreedom: 7,
    },
    notes:
      "Most developed economy in SA, strong institutions historically. Recent political shifts toward left. Good infrastructure, growing startup scene. Mountains + wine country nearby. More seasonal than coastal cities. Five Flag Theory: decent all-rounder for SA presence.",
  },
  {
    city: "Málaga",
    country: "Spain",
    region: "Europe",
    avgTemp: "18–30°C",
    coastal: true,
    scores: {
      climate: 7,
      laborResilience: 7,
      techEcosystem: 8,
      costOfLiving: 6,
      politicalStability: 8,
      remoteInfra: 9,
      economicDiversity: 7,
      aiReadiness: 8,
      personalFreedom: 8,
    },
    notes:
      "Emerging as Spain's tech hub. Google, Vodafone R&D centers. Strong positioning for AI transition at fraction of San Diego cost. Summers get hot (30°C+). In Roemmele's terms: a city transitioning from service economy to builder economy.",
  },
  {
    city: "Las Palmas",
    country: "Canary Islands, Spain",
    region: "Europe/Africa",
    avgTemp: "21–26°C",
    coastal: true,
    scores: {
      climate: 9,
      laborResilience: 7,
      techEcosystem: 6,
      costOfLiving: 7,
      politicalStability: 8,
      remoteInfra: 8,
      economicDiversity: 7,
      aiReadiness: 6,
      personalFreedom: 8,
    },
    notes:
      "Strong digital nomad hub, EU regulatory framework, growing tech scene. Tourism-dependent economy is a risk but diversifying rapidly. EU social safety nets buffer labor displacement. Near-perfect climate consistency.",
  },
  {
    city: "Lisbon",
    country: "Portugal",
    region: "Europe",
    avgTemp: "15–28°C",
    coastal: true,
    scores: {
      climate: 7,
      laborResilience: 7,
      techEcosystem: 8,
      costOfLiving: 6,
      politicalStability: 8,
      remoteInfra: 9,
      economicDiversity: 7,
      aiReadiness: 7,
      personalFreedom: 9,
    },
    notes:
      "Web Summit city, booming startup scene, NHR tax regime. More seasonal variation than ideal but mild year-round. Strong EU positioning for digital economy. Increasingly expensive.",
  },
  {
    city: "Limassol",
    country: "Cyprus",
    region: "Europe",
    avgTemp: "17–32°C",
    coastal: true,
    scores: {
      climate: 7,
      laborResilience: 7,
      techEcosystem: 7,
      costOfLiving: 5,
      politicalStability: 7,
      remoteInfra: 8,
      economicDiversity: 7,
      aiReadiness: 7,
      personalFreedom: 7,
    },
    notes:
      "EU member, major fintech/crypto hub, favorable tax regime. Wider seasonal temperature swing than ideal. Strong positioning for digital economy transition. Relevant for blockchain/Web3 positioning.",
  },
  {
    city: "Da Nang",
    country: "Vietnam",
    region: "Asia",
    avgTemp: "23–33°C",
    coastal: true,
    scores: {
      climate: 7,
      laborResilience: 6,
      techEcosystem: 6,
      costOfLiving: 9,
      politicalStability: 6,
      remoteInfra: 7,
      economicDiversity: 7,
      aiReadiness: 6,
      personalFreedom: 4,
    },
    notes:
      "Fast-growing tech hub, Samsung/Intel nearby. Ultra-low cost. Manufacturing base will face AI/robotics disruption but tech sector growing rapidly. Vietnam is the 'next factory' but per Roemmele, factories will be robotic — the question is whether Da Nang pivots to managing robots or being replaced by them.",
  },
  {
    city: "Honolulu",
    country: "Hawaii, USA",
    region: "Oceania",
    avgTemp: "24–30°C",
    coastal: true,
    scores: {
      climate: 9,
      laborResilience: 7,
      techEcosystem: 5,
      costOfLiving: 2,
      politicalStability: 9,
      remoteInfra: 8,
      economicDiversity: 5,
      aiReadiness: 6,
      personalFreedom: 8,
    },
    notes:
      "Perfect climate, US legal/financial system. Extremely expensive. Tourism/military dependent economy. Remote location limits economic diversification. Beautiful but economically fragile.",
  },
  {
    city: "Madeira (Funchal)",
    country: "Portugal",
    region: "Europe",
    avgTemp: "18–25°C",
    coastal: true,
    scores: {
      climate: 8,
      laborResilience: 6,
      techEcosystem: 5,
      costOfLiving: 8,
      politicalStability: 8,
      remoteInfra: 7,
      economicDiversity: 5,
      aiReadiness: 5,
      personalFreedom: 9,
    },
    notes:
      "Digital Nomad Village initiative, very affordable EU base. Small economy heavily reliant on tourism — vulnerable in Roemmele's framework as AI replaces travel agents, booking systems, and eventually service roles. Great quality of life for remote workers.",
  },
  {
    city: "Tenerife",
    country: "Canary Islands, Spain",
    region: "Europe/Africa",
    avgTemp: "20–26°C",
    coastal: true,
    scores: {
      climate: 9,
      laborResilience: 6,
      techEcosystem: 5,
      costOfLiving: 7,
      politicalStability: 8,
      remoteInfra: 7,
      economicDiversity: 5,
      aiReadiness: 5,
      personalFreedom: 8,
    },
    notes:
      "Same perfect climate as Las Palmas. Growing remote worker community. Tourism-heavy economy is the main vulnerability. Ideal if you're building remotely but consuming locally.",
  },
  {
    city: "Cartagena",
    country: "Colombia",
    region: "South America",
    avgTemp: "25–32°C",
    coastal: true,
    scores: {
      climate: 7,
      laborResilience: 5,
      techEcosystem: 4,
      costOfLiving: 8,
      politicalStability: 5,
      remoteInfra: 6,
      economicDiversity: 6,
      aiReadiness: 4,
      personalFreedom: 6,
    },
    notes:
      "UNESCO World Heritage colonial city. Growing digital nomad scene, better infrastructure than Santa Marta. Tourism-heavy but more economically diverse. Warm and humid year-round. Strong expat community, good coworking options. Per Roemmele: tourist economy vulnerable but remote work positioning improving.",
  },
  {
    city: "Santa Marta",
    country: "Colombia",
    region: "South America",
    avgTemp: "24–32°C",
    coastal: true,
    scores: {
      climate: 7,
      laborResilience: 5,
      techEcosystem: 3,
      costOfLiving: 9,
      politicalStability: 5,
      remoteInfra: 5,
      economicDiversity: 4,
      aiReadiness: 3,
      personalFreedom: 6,
    },
    notes:
      "Beautiful Caribbean coast, extremely affordable. Economy largely informal/tourism-based — the most vulnerable category in any AI disruption scenario. Limited infrastructure but maximum runway due to ultra-low cost.",
  },
  {
    city: "Barranquilla",
    country: "Colombia",
    region: "South America",
    avgTemp: "26–33°C",
    coastal: true,
    scores: {
      climate: 6,
      laborResilience: 5,
      techEcosystem: 4,
      costOfLiving: 9,
      politicalStability: 5,
      remoteInfra: 6,
      economicDiversity: 6,
      aiReadiness: 4,
      personalFreedom: 6,
    },
    notes:
      "Major port city with industrial base. More economic diversity than Santa Marta but heavily labor-dependent industries. Hotter than ideal. Port operations will be among the first to see robotic automation.",
  },
  {
    city: "Mombasa",
    country: "Kenya",
    region: "Africa",
    avgTemp: "24–31°C",
    coastal: true,
    scores: {
      climate: 7,
      laborResilience: 4,
      techEcosystem: 4,
      costOfLiving: 8,
      politicalStability: 5,
      remoteInfra: 5,
      economicDiversity: 5,
      aiReadiness: 4,
      personalFreedom: 5,
    },
    notes:
      "Major port city, warm year-round. Kenya's tech scene (Nairobi) is Africa's strongest but Mombasa lags. M-Pesa shows leapfrog innovation capacity. High labor-dependency makes it vulnerable but also means potential for dramatic robotic productivity gains.",
  },
  {
    city: "Noumea",
    country: "New Caledonia",
    region: "Oceania",
    avgTemp: "22–28°C",
    coastal: true,
    scores: {
      climate: 9,
      laborResilience: 5,
      techEcosystem: 3,
      costOfLiving: 3,
      politicalStability: 6,
      remoteInfra: 5,
      economicDiversity: 3,
      aiReadiness: 3,
      personalFreedom: 7,
    },
    notes:
      "Stunning Pacific climate, French territory benefits. Nickel mining dependent — one of the first industries to see full robotic automation. Very expensive, limited economic diversity. Political uncertainty around independence.",
  },
  {
    city: "Medellín",
    country: "Colombia",
    region: "South America",
    avgTemp: "22–28°C",
    coastal: false,
    scores: {
      climate: 10,
      laborResilience: 5,
      techEcosystem: 6,
      costOfLiving: 9,
      politicalStability: 5,
      remoteInfra: 7,
      economicDiversity: 6,
      aiReadiness: 5,
      personalFreedom: 6,
    },
    notes:
      "REFERENCE (not coastal). Gold standard for eternal spring climate. Growing tech/startup scene (Ruta N innovation district). Very affordable. Per Roemmele's framework: maximum personal runway, decent builder ecosystem, but institutional/political risk limits upside.",
  },
];

const factorDescriptions: Record<string, string> = {
  climate: "Temperature consistency year-round (target ~25°C, low humidity preferred)",
  laborResilience: "Economy NOT dependent on easily-automated human labor",
  techEcosystem: "Tech companies, AI labs, R&D centers, startup density",
  costOfLiving: "Affordability = runway during economic transition",
  politicalStability: "Regulatory predictability, rule of law, property rights",
  remoteInfra: "Internet speed, coworking, digital banking, global connectivity",
  economicDiversity: "Not dependent on single industry vulnerable to disruption",
  aiReadiness: "Positioned to BUILD with AI — per Roemmele: 'moonshot-era zeal'",
  personalFreedom: "Privacy, low surveillance, ideological diversity, personal autonomy — no woke conformity or dystopian smart city",
};

const factorLabels: Record<string, string> = {
  climate: "Climate",
  laborResilience: "Labor Resilience",
  techEcosystem: "Tech Ecosystem",
  costOfLiving: "Cost of Living",
  politicalStability: "Political Stability",
  remoteInfra: "Remote Infra",
  economicDiversity: "Econ. Diversity",
  aiReadiness: "AI Readiness",
  personalFreedom: "Freedom",
};

const weightProfiles: Record<string, Record<string, number>> = {
  balanced: {
    climate: 1,
    laborResilience: 1.2,
    techEcosystem: 1.2,
    costOfLiving: 1,
    politicalStability: 1.1,
    remoteInfra: 1,
    economicDiversity: 1.1,
    aiReadiness: 1.3,
    personalFreedom: 1,
  },
  survivalMode: {
    climate: 0.8,
    laborResilience: 1.5,
    techEcosystem: 0.8,
    costOfLiving: 1.5,
    politicalStability: 1.3,
    remoteInfra: 0.8,
    economicDiversity: 1.3,
    aiReadiness: 1,
    personalFreedom: 1.2,
  },
  roemmeleBuilder: {
    climate: 0.6,
    laborResilience: 0.8,
    techEcosystem: 1.5,
    costOfLiving: 0.5,
    politicalStability: 1.2,
    remoteInfra: 1.3,
    economicDiversity: 1,
    aiReadiness: 1.8,
    personalFreedom: 0.5,
  },
  freedomBuilder: {
    climate: 1,
    laborResilience: 1,
    techEcosystem: 1.3,
    costOfLiving: 1,
    politicalStability: 1,
    remoteInfra: 1.2,
    economicDiversity: 0.8,
    aiReadiness: 1.4,
    personalFreedom: 1.8,
  },
};

function getWeightedScore(scores: Record<string, number>, weights: Record<string, number>) {
  let total = 0;
  let weightSum = 0;
  for (const key of Object.keys(scores)) {
    total += scores[key] * (weights[key] || 1);
    weightSum += weights[key] || 1;
  }
  return (total / weightSum).toFixed(1);
}

function getScoreColor(score: number) {
  if (score >= 8) return "#059669";
  if (score >= 6) return "#d97706";
  if (score >= 4) return "#ea580c";
  return "#dc2626";
}

function getBarWidth(score: number) {
  return `${(score / 10) * 100}%`;
}

function getRankBadge(idx: number) {
  if (idx === 0) return { bg: "bg-yellow-500/20", text: "text-yellow-400" };
  if (idx === 1) return { bg: "bg-gray-400/20", text: "text-gray-300" };
  if (idx === 2) return { bg: "bg-orange-500/20", text: "text-orange-400" };
  return { bg: "bg-gray-800", text: "text-gray-500" };
}

export default function EternalSpringDashboard() {
  const [selectedProfile, setSelectedProfile] = useState("balanced");
  const [sortBy, setSortBy] = useState("score");
  const [coastalOnly, setCoastalOnly] = useState(true);
  const [expandedCity, setExpandedCity] = useState<string | null>(null);
  const [highlightSingapore, setHighlightSingapore] = useState(false);

  const weights = weightProfiles[selectedProfile];

  const filteredCities = cities
    .filter((c) => !coastalOnly || c.coastal)
    .map((c) => ({
      ...c,
      totalScore: parseFloat(getWeightedScore(c.scores, weights)),
    }))
    .sort((a, b) => {
      if (sortBy === "score") return b.totalScore - a.totalScore;
      if (sortBy === "climate") return b.scores.climate - a.scores.climate;
      if (sortBy === "aiReadiness") return b.scores.aiReadiness - a.scores.aiReadiness;
      if (sortBy === "costOfLiving") return b.scores.costOfLiving - a.scores.costOfLiving;
      return b.totalScore - a.totalScore;
    });

  const sgCity = filteredCities.find((c) => c.city === "Singapore");
  const sgRank = filteredCities.findIndex((c) => c.city === "Singapore") + 1;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-1 text-white">
          Eternal Spring × AI Resilience Index
        </h1>
        <p className="text-gray-400 mb-2 text-sm">
          Coastal cities with year-round mild climate, scored on resilience to
          AI/robotics economic disruption
        </p>
        <p className="text-gray-600 mb-6 text-xs italic">
          Framework inspired by Brian Roemmele&apos;s thesis: AI creates a renaissance
          for builders, but devastates economies built on automatable human labor.
        </p>

        {/* Singapore Spotlight */}
        {sgCity && (
          <div
            className={`mb-6 rounded-lg border-2 p-4 transition-all cursor-pointer ${
              highlightSingapore
                ? "border-emerald-500 bg-emerald-950/30"
                : "border-emerald-800/50 bg-gray-900"
            }`}
            onClick={() => setHighlightSingapore(!highlightSingapore)}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇸🇬</span>
                <div>
                  <h2 className="font-bold text-emerald-400">
                    Singapore Deep Dive
                  </h2>
                  <p className="text-xs text-gray-500">
                    Rank #{sgRank} under &quot;{selectedProfile}&quot; weighting · Score:{" "}
                    <span style={{ color: getScoreColor(sgCity.totalScore) }}>
                      {sgCity.totalScore}/10
                    </span>
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-600">
                {highlightSingapore ? "▲ collapse" : "▼ expand"}
              </span>
            </div>

            {highlightSingapore && (
              <div className="mt-3 space-y-3">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {Object.keys(sgCity.scores).map((key) => (
                    <div key={key} className="bg-gray-800/60 rounded p-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-400">
                          {factorLabels[key]}
                        </span>
                        <span
                          className="text-sm font-bold"
                          style={{ color: getScoreColor(sgCity.scores[key as keyof typeof sgCity.scores]) }}
                        >
                          {sgCity.scores[key as keyof typeof sgCity.scores]}
                        </span>
                      </div>
                      <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: getBarWidth(sgCity.scores[key as keyof typeof sgCity.scores]),
                            backgroundColor: getScoreColor(sgCity.scores[key as keyof typeof sgCity.scores]),
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-800/40 rounded p-3 text-sm text-gray-300 leading-relaxed">
                  <p>{sgCity.notes}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Controls */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-3 flex-1 min-w-56">
            <label className="text-xs text-gray-500 uppercase tracking-wide block mb-1.5">
              Weighting Profile
            </label>
            <div className="flex gap-2 flex-wrap">
              {Object.keys(weightProfiles).map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedProfile(p)}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                    selectedProfile === p
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  {p === "balanced"
                    ? "Balanced"
                    : p === "survivalMode"
                    ? "Survival"
                    : p === "freedomBuilder"
                    ? "Freedom Builder"
                    : "Roemmele Builder"}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-3 min-w-36">
            <label className="text-xs text-gray-500 uppercase tracking-wide block mb-1.5">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 text-gray-200 rounded px-2 py-1.5 text-xs w-full"
            >
              <option value="score">Overall Score</option>
              <option value="climate">Climate</option>
              <option value="aiReadiness">AI Readiness</option>
              <option value="costOfLiving">Affordability</option>
            </select>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-3 flex items-end">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={coastalOnly}
                onChange={(e) => setCoastalOnly(e.target.checked)}
                className="rounded"
              />
              <span className="text-xs text-gray-400">Coastal only</span>
            </label>
          </div>
        </div>

        {/* City Cards */}
        <div className="space-y-3">
          {filteredCities.map((city, idx) => {
            const badge = getRankBadge(idx);
            const isSG = city.city === "Singapore";
            return (
              <div
                key={city.city}
                className={`bg-gray-900 border rounded-lg overflow-hidden transition-all cursor-pointer ${
                  expandedCity === city.city
                    ? "border-blue-600"
                    : isSG
                    ? "border-emerald-800/50 hover:border-emerald-700"
                    : "border-gray-800 hover:border-gray-700"
                } ${!city.coastal ? "opacity-70 border-dashed" : ""}`}
                onClick={() =>
                  setExpandedCity(
                    expandedCity === city.city ? null : city.city
                  )
                }
              >
                <div className="p-4 flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${badge.bg} ${badge.text}`}
                  >
                    {idx + 1}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white truncate">
                        {city.city}
                      </h3>
                      {!city.coastal && (
                        <span className="text-xs px-1.5 py-0.5 rounded bg-gray-800 text-gray-500">
                          inland
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">
                      {city.country} · {city.avgTemp} · {city.region}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <div
                      className="text-2xl font-bold"
                      style={{ color: getScoreColor(city.totalScore) }}
                    >
                      {city.totalScore}
                    </div>
                    <p className="text-xs text-gray-500">/10</p>
                  </div>
                </div>

                <div className="px-4 pb-3">
                  <div className="flex gap-1">
                    {Object.keys(city.scores).map((key) => (
                      <div
                        key={key}
                        className="flex-1"
                        title={`${factorLabels[key]}: ${city.scores[key as keyof typeof city.scores]}/10`}
                      >
                        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: getBarWidth(city.scores[key as keyof typeof city.scores]),
                              backgroundColor: getScoreColor(city.scores[key as keyof typeof city.scores]),
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {expandedCity === city.city && (
                  <div className="border-t border-gray-800 p-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      {Object.keys(city.scores).map((key) => (
                        <div key={key} className="bg-gray-800/50 rounded p-2">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs text-gray-400">
                              {factorLabels[key]}
                            </span>
                            <span
                              className="text-sm font-bold"
                              style={{
                                color: getScoreColor(city.scores[key as keyof typeof city.scores]),
                              }}
                            >
                              {city.scores[key as keyof typeof city.scores]}
                            </span>
                          </div>
                          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: getBarWidth(city.scores[key as keyof typeof city.scores]),
                                backgroundColor: getScoreColor(city.scores[key as keyof typeof city.scores]),
                              }}
                            />
                          </div>
                          <p
                            className="text-gray-600 mt-1"
                            style={{ fontSize: "9px" }}
                          >
                            {factorDescriptions[key]}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {city.notes}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 bg-gray-900 border border-gray-800 rounded-lg p-4">
          <h3 className="text-xs text-gray-500 uppercase tracking-wide mb-2">
            Scoring Framework — Roemmele AI Disruption Lens
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-400">
            {Object.entries(factorDescriptions).map(([key, desc]) => (
              <div key={key}>
                <strong className="text-gray-300">{factorLabels[key]}:</strong>{" "}
                {desc}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
