"use client"

import { useWalletAuth } from "@/hooks/useWalletAuth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { StrategyLibrarySkeleton } from "./_components/skeleton";
import { AsterAPIProvider } from "./vaults/[vaultId]/_context/aster-api-context";
// import { ChatProvider } from "./ai-portfolio-manager/_contexts/chat";

const Layout = ({ children }: { children: ReactNode }) => {
    const { isLoading, shouldRedirect } = useWalletAuth()
    const router = useRouter();

    useEffect(() => {
        if (shouldRedirect) {
            router.replace("/sign-in")
        }
    }, [shouldRedirect])

    if (isLoading) {
        return <StrategyLibrarySkeleton />
    }

    return (
        <div>
            <AsterAPIProvider>
                {/* <ChatProvider> */}
                {children}
                {/* </ChatProvider> */}
            </AsterAPIProvider>
        </div>
    );
};

export default Layout;