"use client"

import { SearchBar } from "./_components/search-bar";
import { StrategyCard } from "./_components/strategy-card";
import { StrategyFilter } from "./_components/strategy-filter";
import { StrategySort } from "./_components/strategy-sort";
import { useStrategies } from "@/hooks/useStrategies"

export default function StrategyLibrary() {
    const { strategies } = useStrategies();
    const strategy_num = strategies.length;


    return (
        <div className="relative font-[family-name:var(--font-geist-sans)] text-foreground">
            <div className="pt-4 px-4 mx-auto max-w-7xl space-y-8">
                <div className="space-y-[6px]">
                    <p className="text-3xl font-semibold">
                        Strategy Library
                    </p>
                    <p className="text-muted-foreground">
                        Explore and compare available DeFi strategies, their yields, and capacities before investing your assets for optimal returns.
                    </p>
                </div>

                <div className="flex justify-between items-center flex-wrap space-y-2">
                    <SearchBar />

                    <div className="flex items-center gap-4">
                        <StrategyFilter />
                        <StrategySort />
                    </div>
                </div>

                <div className="text-md space-y-4">
                    <p>
                        <span className="font-bold">{strategy_num}{" "}</span>
                        active strategies available
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {strategies.map(strategy => <StrategyCard key={strategy.name} strategy={strategy} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}