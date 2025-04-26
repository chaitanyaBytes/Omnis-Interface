"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit"

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
        <ConnectButton showBalance={false} chainStatus={"icon"} />
    )
}