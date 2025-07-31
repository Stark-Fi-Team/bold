import { Chain } from 'viem'

export const incentivTestnet: Chain = {
  id: 28802,
  name: 'Incentiv Testnet',
  nativeCurrency: {
    name: 'TCENT',
    symbol: 'TCENT',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['http://rpc2.testnet.incentiv.io/'],
    },
    public: {
      http: ['http://rpc2.testnet.incentiv.io/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Incentiv Explorer',
      url: 'https://explorer.incentiv.network/',
    },
  },
  testnet: true,
}