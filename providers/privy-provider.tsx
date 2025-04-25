'use client';

import React from 'react';

import { PrivyProvider as PrivyAuthProvider } from '@privy-io/react-auth';
import { bsc } from 'viem/chains';


export function PrivyProvider({ children, ...props }: { children: React.ReactNode }) {
    return (
        <PrivyAuthProvider
            {...props}
            appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
            config={{
                // Customize Privy's appearance in your app
                appearance: {
                    theme: 'light',
                    accentColor: '#676FFF',
                    walletChainType: "ethereum-only",
                    logo: "/logos/omnis-logo-full-1.svg",
                    showWalletLoginFirst: true,
                    walletList: ['metamask', 'coinbase_wallet', 'rainbow'], // only EVM wallets
                },

                // Only allow wallet login
                loginMethods: ["wallet"],

                embeddedWallets: {
                    solana: {
                        createOnLogin: "off",
                    },
                },

                supportedChains: [bsc],
                defaultChain: bsc,
            }}
        >
            {children}
        </PrivyAuthProvider>
    );
}