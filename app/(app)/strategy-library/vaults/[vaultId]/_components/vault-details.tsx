"use client"

import { useEffect, useState } from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VaultHeader from "./vault-header"
import { DepositWaithrawlCard } from "./deposit-withdraw/deposit-withdrawl-card"
import { VaultPerformance } from "./performance/vault-performance"
import { VaultOverview } from "./working/vault-overview"
import { useStrategyStore } from "@/store/useStrategyStore"
import { StrategyRisk } from "./strategy-risk/strategy-and-risk"
import { Postion } from "./position/position"
import { AsterApiInput } from "./aster-api-input/aster-key-input"
import { useAccount } from "wagmi"
import { UserInstrctions } from "./user-instructions"

interface VaultDetailProps {
    vaultId: string
}

export default function VaultDetail({ vaultId }: VaultDetailProps) {
    const vault = useStrategyStore((state) => state.strategy);
    const loading = useStrategyStore((state) => state.loading);
    const fetchVault = useStrategyStore((state) => state.fetchStrategy);
    const [, setSelectedTab] = useState("vault-performance");

    const { address } = useAccount()
    const [hasRegisteredKeys, setHasRegisteredKeys] = useState<boolean | null>(null);

    useEffect(() => {
        fetchVault(vaultId);
    }, [vaultId, fetchVault]);

    useEffect(() => {
        const checkKeys = async () => {
            try {
                const res = await fetch("/api/check-aster-keys", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ wallet_address: address }), // replace this properly
                });
                const data = await res.json();
                setHasRegisteredKeys(data.registered);
            } catch (err) {
                console.error("Failed to check keys", err);
                setHasRegisteredKeys(false);
            }
        };

        checkKeys();
    }, []);

    if (loading) return <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</p>;
    if (!vault) return <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Vault not found.</p>;

    return (
        <div className="py-6 grid grid-cols-3 gap-6">
            <div className="col-span-3 lg:col-span-2 space-y-6">
                <VaultHeader vaultName={vault.name} highestApy={vault.highestApy} totalTvl={vault.maxCapacity} capacity={vault.capacity} />

                <div className="space-y-6">
                    <Tabs defaultValue="vault-performance" className="w-full" onValueChange={setSelectedTab}>
                        <TabsList className="bg-transparent flex flex-row gap-2 max-w-[38rem] w-full rounded-none justify-start h-auto p-0 overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none]">
                            <TabsTrigger
                                value="vault-performance"
                                className="px-4 py-2 text-lg data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-muted/40 cursor-pointer rounded-none"
                            >
                                Performance
                            </TabsTrigger>

                            <TabsTrigger
                                value="strategy-risk"
                                className="px-4 py-2 text-lg data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-muted/40 cursor-pointer rounded-none"
                            >
                                Strategy & risk
                            </TabsTrigger>

                            <TabsTrigger
                                value="your-position"
                                className="px-4 py-2 text-lg data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-muted/40 cursor-pointer rounded-none"
                            >
                                Your Position
                            </TabsTrigger>

                            <TabsTrigger
                                value="how-it-works"
                                className="px-4 py-2 text-lg data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-muted/40 cursor-pointer rounded-none"
                            >
                                How it works
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="vault-performance" className="">
                            <VaultPerformance />
                        </TabsContent>

                        <TabsContent value="strategy-risk">
                            <StrategyRisk />
                        </TabsContent>

                        <TabsContent value="your-position">
                            <Postion />
                        </TabsContent>

                        <TabsContent value="how-it-works">
                            <VaultOverview />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>

            <div className="col-span-3 lg:col-span-1 space-y-2">
                {!hasRegisteredKeys && <AsterApiInput />}

                {hasRegisteredKeys && <DepositWaithrawlCard />}

                {<UserInstrctions />}
            </div>
        </div>
    )
}

