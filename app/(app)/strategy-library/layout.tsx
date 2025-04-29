"use client"

import { useWalletAuth } from "@/hooks/useWalletAuth";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { StrategyLibrarySkeleton } from "./_components/skeleton";
import { AsterAPIProvider } from "./vaults/[vaultId]/_context/aster-api-context";
// import { ChatProvider } from "./ai-portfolio-manager/_contexts/chat";

const Layout = ({ children }: { children: ReactNode }) => {
    const { isLoading, shouldRedirect } = useWalletAuth()
    const router = useRouter();
    const pathname = usePathname()

    useEffect(() => {
        if (shouldRedirect && pathname !== "/sign-in") {
            router.replace("/sign-in")
        }
    }, [shouldRedirect, router, pathname])

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