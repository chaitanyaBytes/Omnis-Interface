import { Separator } from "@/components/ui/separator"
import { TooltipText } from "@/components/ui/tooltip-text"
import { Icons } from "@/lib/icons"
import { formatCurrency } from "@/lib/utils"
interface VaultHeaderProps {
    vaultName: string
    highestApy: number
    totalTvl: number
    capacity: number
}

export default function VaultHeader({ vaultName, highestApy, totalTvl, capacity }: VaultHeaderProps) {
    return (
        <div className="h-fit py-2 space-y-4">
            <div className="flex flex-row flex-wrap items-center md:gap-6 space-y-1">
                <Icons.binance className="w-12 h-12" />
                <h1 className="text-3xl font-semibold">{vaultName}</h1>
            </div>

            <div className="space-y-1">
                <div className="flex flex-wrap w-full items-center md:gap-8 gap-2">
                    <div className="flex flex-col items-start gap-1">
                        <TooltipText text="Highest APR" />
                        <div className="flex flex-row items-center gap-2">
                            <p className="text-[var(--vault-page-primary)] font-semibold text-3xl">{highestApy}%</p>
                        </div>
                    </div>
                    <Separator orientation="vertical" />
                    <div className="flex flex-col items-start gap-1">
                        <p className="text-zinc-500 text-md">Total TVL</p>
                        <div className="flex flex-row items-center gap-2">
                            <p className="text-3xl font-semibold">{formatCurrency(totalTvl, 0)}</p>
                        </div>
                    </div>
                    <Separator orientation="vertical" />
                    <div className="flex flex-col items-start gap-1">
                        <p className="text-zinc-500 text-md">Capacity</p>
                        <div className="flex flex-row items-center gap-2">
                            <p className="text-3xl font-semibold">{capacity}%</p>
                        </div>
                    </div>
                </div>

                <div className="text-gray-400 text-sm">
                    Deposit USDT and convert to JLP with 2x-3x leverage. Experience automated, AI-driven yield.
                </div>
            </div>
        </div >
    )
}

