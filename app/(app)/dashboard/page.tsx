"use client"

import { useWalletAuth } from "@/hooks/useWalletAuth";
import { PositonPerformance } from "./_components/performance-overview";
import { PortfolioInfoCard } from "./_components/portfolio-info-card";
import { TransactionHistory } from "./_components/transactions/transaction-history";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { DashboardSkeleton } from "./_components/skeleton";

export default function Dashboard() {
    const { isLoading, shouldRedirect } = useWalletAuth()
    const router = useRouter();

    useEffect(() => {
        if (shouldRedirect) {
            router.replace("/sign-in")
        }
    }, [shouldRedirect])

    if (isLoading) {
        return <DashboardSkeleton />
    }

    return (
        <div className="relative font-[family-name:var(--font-geist-sans)] text-foreground">
            <div className="pt-4 px-4 mx-auto max-w-6xl space-y-6">
                <div className="space-y-1">
                    <p className="text-3xl font-semibold">Dashboard</p>
                    <p className="text-[#363F72]">View and monitor your active portfolio strategies</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4">
                    <PortfolioInfoCard title={"Total Portfolio Value"} value={"$5,187.50"} status={"+3.75%"} statusColor={"#039855"} footerText={"Initial investment: $5,000.00"} />
                    <PortfolioInfoCard title={"Current Yield (APY)"} value={"16.5%"} status={"+0.3%"} statusColor={"#039855"} footerText={"vs. 16.2% last week"} />
                    <PortfolioInfoCard title={"Total Profit"} value={"$187.50"} status={"+12 USDT today"} statusColor={"#039855"} footerText={"Expected monthly: ~$187.00"} />
                    <PortfolioInfoCard title={"Lock Period"} value={"62 days"} status={"Remaining"} statusColor={"#FB6514"} footerText={"Unlocks on: July 15, 2025"} />
                </div>

                <PositonPerformance />

                <TransactionHistory />
            </div>
        </div>
    )
}