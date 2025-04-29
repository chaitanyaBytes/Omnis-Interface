'use client'

import { useState, useEffect } from "react"
import { useAccount } from "wagmi"

export function useWalletAuth() {
    const { isDisconnected, isConnecting, isConnected } = useAccount()
    const [isHydrated, setIsHydrated] = useState(false)
    const [isConnectionChecked, setIsConnectionChecked] = useState(false)

    useEffect(() => {
        setIsHydrated(true)
    }, [])

    // Wait for connection status to be fully resolved
    useEffect(() => {
        if (isHydrated && !isConnecting) {
            // Small delay to ensure wagmi has fully resolved the connection
            const timer = setTimeout(() => {
                setIsConnectionChecked(true)
            }, 100) // 100ms delay to stabilize wagmi state
            return () => clearTimeout(timer)
        }
    }, [isHydrated, isConnecting])

    // Only redirect if fully hydrated, connection checked, and explicitly disconnected
    const shouldRedirect = isHydrated && isConnectionChecked && !isConnecting && isDisconnected
    const isLoading = !isHydrated || isConnecting || !isConnectionChecked

    return { isLoading, shouldRedirect }
}