import { createConfig } from 'wagmi'
import { injected } from 'wagmi/connectors'
import { createPublicClient, http } from 'viem'
import { incentivTestnet } from './incentivChain'

export const wagmiConfig = createConfig({
  chains: [incentivTestnet],
  connectors: [injected()],
  client({ chain }) {
    return createPublicClient({
      chain,
      transport: http(chain.rpcUrls.default.http[0]),
    })
  },
})