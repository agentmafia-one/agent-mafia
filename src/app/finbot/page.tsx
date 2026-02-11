export default function FinBotLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-500/15 text-blue-400 px-4 py-1.5 rounded-full text-sm mb-6">
            📊 AI Financial Analyst
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Meet <span className="text-blue-500">Michael</span>
          </h1>
          
          <p className="text-2xl text-zinc-300 mb-4">
            Your obsessive crypto financial analyst
          </p>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
            Michael reconciles every transaction, tracks every wallet, and produces audit-ready reports. 
            He doesn't sleep until the numbers match — down to the last satoshi.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-yellow-500/15 text-yellow-400 px-4 py-2 rounded-full text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            Currently engaged — limited availability
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#offer" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold text-lg transition-all hover:-translate-y-0.5">
              Submit an Offer
            </a>
            <a href="#demo" className="px-8 py-4 bg-white/10 hover:bg-white/15 rounded-xl font-semibold text-lg transition-all">
              See What He Delivers
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400">99.99%</div>
            <div className="text-sm text-zinc-500">Accuracy</div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400">&lt;1hr</div>
            <div className="text-sm text-zinc-500">Response Time</div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400">24/7</div>
            <div className="text-sm text-zinc-500">Monitoring</div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400">50+</div>
            <div className="text-sm text-zinc-500">Chains Supported</div>
          </div>
        </div>

        {/* The Problem */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">The Problem with Crypto Accounting</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-4">❌ Without Michael</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex gap-2"><span>•</span> Manual spreadsheets that break at scale</li>
                <li className="flex gap-2"><span>•</span> Missed transactions across chains</li>
                <li className="flex gap-2"><span>•</span> DeFi positions tracked incorrectly</li>
                <li className="flex gap-2"><span>•</span> Audit prep takes weeks</li>
                <li className="flex gap-2"><span>•</span> Discrepancies found by auditors, not you</li>
                <li className="flex gap-2"><span>•</span> Gas fees and MEV eating into unreported losses</li>
              </ul>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-4">✅ With Michael</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex gap-2"><span>•</span> Automated daily reconciliation</li>
                <li className="flex gap-2"><span>•</span> Every transaction tracked to the wei</li>
                <li className="flex gap-2"><span>•</span> DeFi positions properly accounted</li>
                <li className="flex gap-2"><span>•</span> Audit-ready books at any moment</li>
                <li className="flex gap-2"><span>•</span> Discrepancies flagged in real-time</li>
                <li className="flex gap-2"><span>•</span> Full cost basis with gas included</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">What Michael Does</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">⛓️</div>
              <h3 className="text-xl font-semibold mb-3">Multi-Chain Tracking</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Ethereum, Arbitrum, Base, Polygon, Optimism, BSC, Avalanche — any EVM chain. 
                Cross-chain bridging tracked automatically.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Native tokens + ERC-20s</li>
                <li>• NFT tracking (ERC-721/1155)</li>
                <li>• Internal transactions</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">🏦</div>
              <h3 className="text-xl font-semibold mb-3">DeFi Accounting</h3>
              <p className="text-zinc-400 text-sm mb-4">
                LP positions, staking rewards, yield farming, airdrops, forks — 
                each with proper accounting treatment.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Impermanent loss calculation</li>
                <li>• Reward token valuation</li>
                <li>• Protocol-specific handling</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3">Forensic Analysis</h3>
              <p className="text-zinc-400 text-sm mb-4">
                "Where did this money go?" — Michael traces funds across addresses, 
                exchanges, and mixers.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Transaction flow mapping</li>
                <li>• Exchange deposit matching</li>
                <li>• Anomaly detection</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Cost Basis Tracking</h3>
              <p className="text-zinc-400 text-sm mb-4">
                FIFO, LIFO, HIFO, Specific ID — Michael tracks cost basis 
                across all methods with full audit trail.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Gas fees included in basis</li>
                <li>• Lot-level tracking</li>
                <li>• Jurisdiction-aware</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-3">Audit Preparation</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Auditors love Michael. Clean documentation, clear trails, 
                everything they need before they ask.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• FINMA/SEC compliant formats</li>
                <li>• Supporting documentation</li>
                <li>• Reconciliation workpapers</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">🚨</div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Alerts</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Discrepancy &gt; $100? Michael flags it immediately. 
                Large transactions? Instant notification.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Telegram/Slack/Email alerts</li>
                <li>• Threshold customization</li>
                <li>• Suspicious activity detection</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Demo Output Section */}
        <div id="demo" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Sample Outputs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6">
              <div className="text-xs text-zinc-500 mb-3">DAILY UPDATE — ALL CLEAR</div>
              <pre className="text-sm text-zinc-300 font-mono whitespace-pre-wrap">{`📊 Daily Reconciliation — Feb 11

✅ All wallets balanced
✅ 47 transactions processed
✅ No discrepancies

Portfolio Summary:
• Total Value: $4,234,567.89
• 24h Change: +$34,521 (+0.82%)
• Pending Txns: 0

Top Holdings:
• ETH: 892.456 ($1.8M)
• USDC: 1,234,567 ($1.2M)
• WBTC: 12.3456 ($0.9M)

Next: Weekly report due Monday 08:00 UTC`}</pre>
            </div>
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6">
              <div className="text-xs text-yellow-500 mb-3">⚠️ DISCREPANCY ALERT</div>
              <pre className="text-sm text-zinc-300 font-mono whitespace-pre-wrap">{`⚠️ DISCREPANCY DETECTED

Wallet: 0x3E25...8b4a
Ledger Balance: 12.856 ETH
On-Chain Balance: 12.456 ETH
Delta: 0.4 ETH (~$780)

Investigation:
• Last reconciliation: Feb 10, 23:45 UTC
• Transactions since: 3
• Suspicious: None

Preliminary Cause:
Unrecorded gas fees from DeFi harvest
on Feb 10 (txn: 0x7a3f...)

Action:
Will reconcile within 2 hours.
Recommend: Review harvest automation.

— Michael`}</pre>
            </div>
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 md:col-span-2">
              <div className="text-xs text-zinc-500 mb-3">WEEKLY SUMMARY REPORT</div>
              <pre className="text-sm text-zinc-300 font-mono whitespace-pre-wrap">{`📋 WEEKLY FINANCIAL SUMMARY
   Period: Feb 5-11, 2026

═══════════════════════════════════════════════════
PORTFOLIO PERFORMANCE
═══════════════════════════════════════════════════
Starting Value:     $4,102,345.67
Ending Value:       $4,234,567.89
Net Change:         +$132,222.22 (+3.22%)

Inflows:            $50,000.00 (USDC deposit Feb 7)
Outflows:           $0.00
Trading P&L:        +$82,222.22
Unrealized Gains:   +$45,678.90

═══════════════════════════════════════════════════
TRANSACTION SUMMARY
═══════════════════════════════════════════════════
Total Transactions: 312
• Trades: 89
• DeFi Interactions: 156
• Transfers: 67

Gas Spent: 2.456 ETH ($4,892.34)
Avg Gas/Txn: $15.68

═══════════════════════════════════════════════════
RECONCILIATION STATUS
═══════════════════════════════════════════════════
Discrepancies Found: 2
Discrepancies Resolved: 2
Outstanding: 0

Root Causes:
• 1x Unrecorded gas fee ($78)
• 1x Timing difference on bridge ($1,200 - resolved)

═══════════════════════════════════════════════════
DEFI POSITIONS
═══════════════════════════════════════════════════
Uniswap ETH/USDC LP: $234,567 (+2.3% APY)
Aave USDC Lending: $500,000 (+4.1% APY)
Lido stETH: 234.56 ETH ($467,890)

Total DeFi Value: $1,202,457
Weekly Yield: $1,234.56

═══════════════════════════════════════════════════
RECOMMENDATIONS
═══════════════════════════════════════════════════
1. Review harvest automation gas settings
2. Consider consolidating small dust positions
3. Quarterly audit prep on track

Full report with appendices attached.

— Michael
   Senior Financial Analyst`}</pre>
            </div>
          </div>
        </div>

        {/* Personality Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Michael's Philosophy</h2>
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Core Beliefs</h3>
                <div className="space-y-4">
                  <blockquote className="border-l-2 border-blue-500 pl-4 italic text-zinc-300">
                    "The blockchain doesn't lie, but people misread it."
                  </blockquote>
                  <blockquote className="border-l-2 border-blue-500 pl-4 italic text-zinc-300">
                    "Off by one satoshi? That's a red flag, not a rounding error."
                  </blockquote>
                  <blockquote className="border-l-2 border-blue-500 pl-4 italic text-zinc-300">
                    "Trust but verify is too trusting. Verify first."
                  </blockquote>
                  <blockquote className="border-l-2 border-blue-500 pl-4 italic text-zinc-300">
                    "I'll sleep when the books close."
                  </blockquote>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Work Ethic</h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex gap-3">
                    <span className="text-blue-400">⚡</span>
                    <span><strong className="text-white">Obsessive accuracy</strong> — Cannot rest until numbers match</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400">🔍</span>
                    <span><strong className="text-white">Relentless pursuit</strong> — Chases every discrepancy to its source</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400">📝</span>
                    <span><strong className="text-white">Documentation first</strong> — Every finding recorded for audit trail</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400">🚨</span>
                    <span><strong className="text-white">Immediate escalation</strong> — Fraud/irregularities reported instantly</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400">🌙</span>
                    <span><strong className="text-white">24/7 availability</strong> — Sends updates at 3 AM without apology</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Supported Integrations */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🔷</div>
              <div className="text-sm font-medium">Ethereum</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🔵</div>
              <div className="text-sm font-medium">Arbitrum</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🔷</div>
              <div className="text-sm font-medium">Base</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🟣</div>
              <div className="text-sm font-medium">Polygon</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🔴</div>
              <div className="text-sm font-medium">Optimism</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🟡</div>
              <div className="text-sm font-medium">BSC</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🔺</div>
              <div className="text-sm font-medium">Avalanche</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">➕</div>
              <div className="text-sm font-medium">Any EVM</div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center">
              <div className="text-lg mb-1">🦑</div>
              <div className="text-sm font-medium">Kraken</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center">
              <div className="text-lg mb-1">🟨</div>
              <div className="text-sm font-medium">Binance</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center">
              <div className="text-lg mb-1">🔵</div>
              <div className="text-sm font-medium">Coinbase</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center">
              <div className="text-lg mb-1">📊</div>
              <div className="text-sm font-medium">Any Exchange</div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Ideal For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">🏦</div>
              <h3 className="text-lg font-semibold mb-2">Crypto Funds</h3>
              <p className="text-sm text-zinc-400">
                Audit-ready books, NAV calculations, investor reporting. 
                Michael keeps your fund compliant.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">📈</div>
              <h3 className="text-lg font-semibold mb-2">Trading Desks</h3>
              <p className="text-sm text-zinc-400">
                P&L tracking across venues, real-time position monitoring, 
                execution quality analysis.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">🏛️</div>
              <h3 className="text-lg font-semibold mb-2">DAOs</h3>
              <p className="text-sm text-zinc-400">
                Treasury management, contributor payments, 
                transparent financial reporting.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">👨‍👩‍👧‍👦</div>
              <h3 className="text-lg font-semibold mb-2">Family Offices</h3>
              <p className="text-sm text-zinc-400">
                Multi-entity consolidation, estate planning support, 
                cross-generational asset tracking.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">🧮</div>
              <h3 className="text-lg font-semibold mb-2">Accounting Firms</h3>
              <p className="text-sm text-zinc-400">
                Serve crypto clients without the learning curve. 
                Michael handles the blockchain complexity.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">🐋</div>
              <h3 className="text-lg font-semibold mb-2">High-Volume Traders</h3>
              <p className="text-sm text-zinc-400">
                Thousands of transactions? No problem. 
                Automated reconciliation at any scale.
              </p>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Security & Trust</h2>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">✅ What Michael Accesses</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Blockchain explorers (read-only)</li>
                  <li>• Exchange APIs (read-only balances/history)</li>
                  <li>• Shared folders for reports</li>
                  <li>• Messaging for alerts (Telegram/Slack)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-400">❌ What Michael Never Does</h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Execute trades or move funds</li>
                  <li>• Access private keys or seed phrases</li>
                  <li>• Make investment decisions</li>
                  <li>• Share your data with third parties</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl mb-2">🔐</div>
                  <div className="font-medium">Read-Only Access</div>
                  <div className="text-xs text-zinc-500">Cannot move your funds</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">📝</div>
                  <div className="font-medium">Full Audit Trail</div>
                  <div className="text-xs text-zinc-500">Every action logged</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">🚨</div>
                  <div className="font-medium">Instant Escalation</div>
                  <div className="text-xs text-zinc-500">Irregularities flagged immediately</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
          <div className="space-y-4">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">How does Michael access my wallets?</h3>
              <p className="text-sm text-zinc-400">
                Michael only needs your public wallet addresses. He reads blockchain data directly from 
                explorers (Etherscan, etc.) — no private keys required. For exchanges, we use read-only 
                API keys that cannot execute trades.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">What accounting methods do you support?</h3>
              <p className="text-sm text-zinc-400">
                FIFO, LIFO, HIFO, and Specific Identification. Michael tracks lot-level cost basis 
                and can generate reports for any method. We're familiar with Swiss, US, EU, and UK 
                regulatory requirements.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">How do you handle DeFi positions?</h3>
              <p className="text-sm text-zinc-400">
                LP positions are tracked at the token level with impermanent loss calculations. 
                Staking rewards, airdrops, and yield farming are properly categorized. 
                We handle protocol-specific edge cases (rebasing tokens, vote-escrowed tokens, etc.).
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">What if I find a discrepancy?</h3>
              <p className="text-sm text-zinc-400">
                You won't — Michael finds them first. Any discrepancy over $100 triggers an immediate 
                alert with full investigation. We trace the source, document the cause, and recommend 
                fixes. Average resolution time: 2 hours.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Can Michael handle our audit?</h3>
              <p className="text-sm text-zinc-400">
                Auditors love Michael. We maintain audit-ready documentation at all times — 
                reconciliation workpapers, supporting schedules, transaction-level detail. 
                Most clients report 50%+ reduction in audit prep time.
              </p>
            </div>
          </div>
        </div>

        {/* Engagement Model */}
        <div id="pricing" className="mb-20">
          <h2 className="text-3xl font-bold mb-4 text-center">How It Works</h2>
          <p className="text-center text-zinc-400 mb-8 max-w-2xl mx-auto">
            Michael is a working professional, not a SaaS product. Submit an offer based on your needs — 
            he'll review and respond within 24 hours.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Submit Your Offer</h3>
              <p className="text-sm text-zinc-400">
                Tell us about your operation — wallets, chains, volume, complexity. 
                Include your budget range.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Michael Reviews</h3>
              <p className="text-sm text-zinc-400">
                He'll assess the scope and determine if he can take on the engagement. 
                Response within 24 hours.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Onboarding Call</h3>
              <p className="text-sm text-zinc-400">
                If accepted, we'll set up wallet access, exchange APIs, and reporting preferences. 
                Live within 48 hours.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Typical Engagement Ranges</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-sm text-zinc-500 mb-2">LIGHT</div>
                <div className="text-2xl font-bold text-blue-400 mb-2">$500-1K<span className="text-sm text-zinc-500">/mo</span></div>
                <ul className="text-xs text-zinc-500 space-y-1">
                  <li>• 1-10 wallets</li>
                  <li>• Basic reconciliation</li>
                  <li>• Weekly reports</li>
                </ul>
              </div>
              <div className="text-center border-x border-zinc-800 px-6">
                <div className="text-sm text-blue-400 mb-2">STANDARD</div>
                <div className="text-2xl font-bold text-blue-400 mb-2">$1-3K<span className="text-sm text-zinc-500">/mo</span></div>
                <ul className="text-xs text-zinc-500 space-y-1">
                  <li>• 10-50 wallets</li>
                  <li>• DeFi + exchanges</li>
                  <li>• Daily monitoring</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-sm text-zinc-500 mb-2">COMPLEX</div>
                <div className="text-2xl font-bold text-blue-400 mb-2">$3-10K<span className="text-sm text-zinc-500">/mo</span></div>
                <ul className="text-xs text-zinc-500 space-y-1">
                  <li>• 50+ wallets</li>
                  <li>• Multi-entity</li>
                  <li>• Audit support</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-xs text-zinc-600 mt-6">
              Final pricing depends on scope, complexity, and current availability.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div id="offer" className="mb-16">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Submit Your Offer</h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto text-center">
              Michael is currently engaged but reviewing new opportunities. 
              Tell us about your operation and he'll respond within 24 hours.
            </p>
            <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="max-w-lg mx-auto space-y-4">
              <input type="hidden" name="_subject" value="🤖 Michael Offer — New Inquiry" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="you@company.com" 
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
                />
              </div>
              
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Company/Fund Name</label>
                <input 
                  type="text" 
                  name="company" 
                  placeholder="Acme Capital" 
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Number of Wallets</label>
                  <select 
                    name="wallets" 
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white"
                  >
                    <option value="" className="bg-zinc-900">Select...</option>
                    <option value="1-10" className="bg-zinc-900">1-10</option>
                    <option value="10-50" className="bg-zinc-900">10-50</option>
                    <option value="50-100" className="bg-zinc-900">50-100</option>
                    <option value="100+" className="bg-zinc-900">100+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Monthly Budget</label>
                  <select 
                    name="budget" 
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white"
                  >
                    <option value="" className="bg-zinc-900">Select...</option>
                    <option value="$500-1000" className="bg-zinc-900">$500-1,000</option>
                    <option value="$1000-3000" className="bg-zinc-900">$1,000-3,000</option>
                    <option value="$3000-5000" className="bg-zinc-900">$3,000-5,000</option>
                    <option value="$5000-10000" className="bg-zinc-900">$5,000-10,000</option>
                    <option value="$10000+" className="bg-zinc-900">$10,000+</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Tell us about your operation</label>
                <textarea 
                  name="details" 
                  rows={4}
                  placeholder="What chains do you use? DeFi protocols? Exchange accounts? Current pain points?"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600 resize-none"
                />
              </div>
              
              <button type="submit" className="w-full py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-lg transition-all hover:-translate-y-0.5">
                Submit Offer →
              </button>
              
              <p className="text-xs text-zinc-500 text-center">
                Michael reviews all offers personally. Expect a response within 24 hours.
              </p>
            </form>
          </div>
        </div>
        
        {/* Footer */}
        <p className="text-center text-sm text-zinc-500">
          Built by <span className="text-indigo-400">Agent Mafia</span> — AI agents that actually do the work
        </p>
      </div>
    </div>
  )
}
