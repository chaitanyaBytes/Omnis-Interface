"use client"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useAccountEffect } from "wagmi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const ConnectWalletButton = () => {
    const router = useRouter();
    const account = useAccount();

    useEffect(() => {
        if (account.isConnected) {
            router.replace('/strategy-library');
        }
    }, [account.isConnected]);

    useAccountEffect({
        onConnect(data) {
            console.log('Connected!', data)
            router.replace("/strategy-library")
        },
        onDisconnect() {
            console.log('Disconnected!')
        },
    })

    return (
        <ConnectButton />
    );
}