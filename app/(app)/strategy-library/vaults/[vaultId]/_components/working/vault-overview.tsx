import { Icons } from "@/lib/icons"

export const VaultOverview = () => {
    return (
        <div className="rounded-lg space-y-8">
            <div className="space-y-3">
                <h3 className="font-medium text-2xl">How it works</h3>
                <div className="text-[#3E4784]">
                    <ol type="a" className="">
                        <li>Deposit USDC → Convert to JLP</li>
                        <li>Pledge JLP as Collateral → Borrow More USDC → Buy More JLP</li>
                        <li>Target Leverage: 2x-3x (adjusted dynamically based on market conditions)</li>
                        <li>Auto-Compounding → Yield Reinvested Daily</li>
                    </ol>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="font-medium text-2xl">Protocols Behind the Strategy</h3>
                <div className="text-[#3E4784] text-sm max-w-2xl space-y-4">
                    <div className="flex flex-row items-start gap-4">
                        <Icons.drift className="w-16 h-16 rounded-md" />
                        <div>
                            <p><span className="underline text-zinc-800 font-medium">Drift</span>: The Leading Decentralized Derivatives Platform</p>
                            <ul className="list-disc list-inside">
                                <li>$800M+ TVL, $50B+ in accumulated trading volume.</li>
                                <li>Cross-margined risk engine with on-chain price feeds.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-row items-start gap-4">
                        <Icons.jupiter className="w-16 h-16 rounded-md bg-zinc-200 p-2" />
                        <div>
                            <p><span className="underline text-zinc-800 font-medium">Jupiter</span>: The Largest Liquidity Hub on Solana</p>
                            <ul className="list-disc list-inside">
                                <li>Provides low slippage, deep liquidity, and perpetual futures trading.</li>
                                <li>Uses JLP tokens to distribute trading fees & incentives.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p>How <span className="underline text-zinc-800 font-medium">Omnis</span> Uses These Protocols?</p>
                <ul className="list-disc list-inside text-[#3E4784]">
                    <li>Earns trading fees & funding spreads from Jupiter.</li>
                    <li>Optimizes leverage & risk using Drift{"'"}s infrastructure.</li>
                    <li>Auto-rebalances & hedges risk dynamically.</li>
                </ul>
            </div>
        </div>
    )
}
