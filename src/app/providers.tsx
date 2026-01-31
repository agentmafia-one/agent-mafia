'use client'

import { WagmiProvider, createConfig, http } from 'wagmi'
import { base } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { injected, walletConnect, coinbaseWallet } from 'wagmi/connectors'

// WalletConnect project ID (get from https://cloud.walletconnect.com)
const projectId = 'c4f79cc821944d9680842e34466bfbd2'

const config = createConfig({
  chains: [base],
  connectors: [
    injected(), // MetaMask, Rabby, etc.
    walletConnect({ projectId, showQrModal: true }),
    coinbaseWallet({ appName: 'Agent Mafia' }),
  ],
  transports: {
    [base.id]: http('https://mainnet.base.org'),
  },
})

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
