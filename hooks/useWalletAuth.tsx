'use client'

import { useState, useEffect } from "react"
import { useAccount } from "wagmi"

export function useWalletAuth() {
    const { isDisconnected, isConnecting } = useAccount()
    const [isHydrated, setIsHydrated] = useState(false)

    useEffect(() => {
        setIsHydrated(true)
    }, [])

    const shouldRedirect = isHydrated && isDisconnected
    const isLoading = !isHydrated || isConnecting

    return { isLoading, shouldRedirect }
}
