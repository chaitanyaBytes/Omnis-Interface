"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { Skeleton } from "@/components/ui/skeleton"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from 'wagmi'

export const WalletStatus = () => {
    // const router = useRouter()
    // const { isDisconnected, isConnecting } = useAccount()
    // const [isHydrated, setIsHydrated] = useState(false)

    // useEffect(() => {
    //     // Set true only on client after mount
    //     setIsHydrated(true)
    // }, [])

    // useEffect(() => {
    //     if (!isHydrated) return

    //     if (isDisconnected) {
    //         router.replace("/sign-in")
    //     }
    // }, [isDisconnected, isHydrated, router])

    // if (!isHydrated || isConnecting) {
    //     return <Skeleton className="h-10 w-40 rounded-full" />
    // }

    return (
        <ConnectButton />
    )
}