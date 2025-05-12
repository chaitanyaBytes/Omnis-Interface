import { useStrategyStore } from "@/store/useStrategyStore"

export const Strategy = () => {
    const vault = useStrategyStore((state) => state.strategy)

    return (
        <div className="space-y-10">
            <div className="bg-[#F4F7FF] space-y-4 rounded-lg p-4">
                <div className="space-y-1">
                    <h1 className="font-medium text-lg md:text-2xl"> Strategy Profile </h1>
                    {/* <p className="text-muted-foreground">The xUSDT Vault employs an AI-driven strategy to optimize yields by grid strategies.</p> */}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 space-y-2">
                    <div>
                        <p className="text-muted-foreground text-sm md:text-base">Target Leverage</p>
                        <p className="text-lg md:text-xl font-medium">1x</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground text-sm md:text-base">Rebalancing Frequency</p>
                        <p className="text-lg md:text-xl font-medium">Daily</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground text-sm md:text-base">Compounding</p>
                        <p className="text-lg md:text-xl font-medium">Automatic</p>
                    </div>

                    {/* <div>
                        <p className="text-muted-foreground">Strategy Type</p>
                        <p className="text-xl font-medium">Grid Trading</p>
                    </div> */}
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4 px-2">
                <div className="">
                    <div className="flex flex-row items-start gap-2">
                        <div>
                            <h3 className="text-sm text-gray-400">Max Daily Drawdwon</h3>
                            <p className={`text-xl md:text-2xl font-semibold ${vault?.dailyDrawdown && vault.dailyDrawdown > 0 ? "text-[var(--vault-page-primary)]" : "text-destructive"}`}>{vault?.dailyDrawdown}%</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-row items-start gap-2 justify-end sm:justify-start">
                        <div className="text-right sm:text-left">
                            <h3 className="text-sm text-gray-400">Risk Level</h3>
                            <p className=" text-xl md:text-2xl font-semibold text-orange-400">Medium-High</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-row items-start gap-2">
                        <div>
                            <h3 className="text-sm text-gray-400">Volatility (30D)</h3>
                            <p className=" text-xl md:text-2xl font-semibold">5.3%</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-row items-start gap-2 justify-end sm:justify-start">
                        <div className="text-right sm:text-left">
                            <h3 className="text-sm text-gray-400">Sharpe Ratio (7D)</h3>
                            <p className={`text-xl md:text-2xl font-semibold ${true ? "text-[var(--vault-page-primary)]" : "text-destructive"}`}>2.17%</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row items-start gap-2">
                        <div>
                            <h3 className="text-sm text-gray-400">Liquidation Buffer</h3>
                            <p className=" text-xl md:text-2xl font-semibold mt-1">40%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
