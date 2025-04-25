"use client"

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLogin, usePrivy } from "@privy-io/react-auth";
import { useAccount, useAccountEffect } from 'wagmi'
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { Skeleton } from "./skeleton";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const ConnectWalletButton = () => {
    const { authenticated, ready } = usePrivy();
    const router = useRouter()
    // const { address, isConnected, isConnecting, isDisconnected, status } = useAccount()

    const walletIcons = [
        {
            src: "./wallets/Phantom_SVG_Icon.svg",
            alt: "Phantom",
        },
        {
            src: "./wallets/MetaMask.svg",
            alt: "MetaMask",
        },
        {
            src: "./wallets/WalletConnect-icon.svg",
            alt: "WalletConnect",
        },
    ];

    useAccountEffect({
        onConnect(data) {
            console.log('Connected!', data)
        },
        onDisconnect() {
            console.log('Disconnected!')
        },
    })

    useEffect(() => {
        if (authenticated) {
            router.replace('/strategy-library');
        }
    }, [authenticated, router]);

    if (!ready || authenticated) return (
        <Skeleton className="w-24 h-10" />
    );

    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openChainModal,
                openConnectModal,
                openAccountModal,
                mounted,
            }) => {
                const ready = mounted
                const connected = ready && account && chain

                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            style: {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            return (
                                <button
                                    onClick={openConnectModal}
                                    className={cn("py-3 px-4 text-xl text-white rounded-full cursor-pointer text-center relative overflow-hidden bg-gradient-to-r from-[#000A3F] via-[#000A3F] to-[#6FB1FC] flex justify-center group/modal-btn")}                                            >
                                    Connect Wallet
                                </button>
                            )
                        })()}
                    </div>
                )
            }}
        </ConnectButton.Custom>
    );
}