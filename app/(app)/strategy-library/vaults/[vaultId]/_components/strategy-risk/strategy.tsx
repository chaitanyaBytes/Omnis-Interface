import { useVaultStore } from "@/store/useVaultStore"

export const Strategy = () => {
    const vault = useVaultStore((state) => state.vault)

    return (
        <div className="space-y-10">
            <div className="bg-[#F4F7FF] space-y-4 rounded-lg py-4 px-5">
                <div className="space-y-1">
                    <h1 className="font-medium text-2xl">Leveraged JLP Yield Generation</h1>
                    <p className="text-muted-foreground">The xJLP Vault employs an AI-driven strategy to optimize yields by leveraging JLP positions at 2x-3x. Jupiter Liquidity Provider (JLP) tokens.</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4">
                    <div>
                        <p className="text-muted-foreground">Target Leverage</p>
                        <p className="text-xl font-medium">2x-3x</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">Rebalancing Frequency</p>
                        <p className="text-xl font-medium">Daily</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">Compounding</p>
                        <p className="text-xl font-medium">Automatic</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">Strategy Type</p>
                        <p className="text-xl font-medium">Delta Neutral</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-6">
                <div className="">
                    <div className="flex flex-row items-start gap-2">
                        <div>
                            <h3 className="text-sm text-gray-400">Max Daily Drawdwon</h3>
                            <p className={`text-2xl font-semibold ${vault?.dailyDrawdown && vault.dailyDrawdown > 0 ? "text-[var(--vault-page-primary)]" : "text-destructive"}`}>{vault?.dailyDrawdown}%</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-row items-start gap-2">
                        <div>
                            <h3 className="text-sm text-gray-400">Risk Level</h3>
                            <p className=" text-2xl font-semibold text-orange-400">Medium-High</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-row items-start gap-2">
                        <div>
                            <h3 className="text-sm text-gray-400">Volatility (30D)</h3>
                            <p className=" text-2xl font-semibold">5.3%</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-row items-start gap-2">
                        <div>
                            <h3 className="text-sm text-gray-400">Sharpe Ratio (7D)</h3>
                            <p className={`text-2xl font-semibold ${true ? "text-[var(--vault-page-primary)]" : "text-destructive"}`}>2.17%</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row items-start gap-2">
                        <div>
                            <h3 className="text-sm text-gray-400">Liquidation Buffer</h3>
                            <p className=" text-2xl font-semibold mt-1">40%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}