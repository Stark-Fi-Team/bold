import '../src/styles/global.css' // adjust if needed
import { ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'

import { wagmiConfig } from './src/wagmi-config'

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>

                <WagmiProvider config={wagmiConfig}>
                    {children}
                </WagmiProvider>
            </body>
        </html>
    )
}