import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { formatNumber } from "@/lib/utils"
import { PortfolioSummary } from "@/types/strategy"
import { ViewState } from "@/types/view-state";

interface DeploymentSummaryProps {
    portfolioSummary: PortfolioSummary;
    setView: React.Dispatch<React.SetStateAction<ViewState>>
}

export const DeploymentSummary = ({ portfolioSummary, setView }: DeploymentSummaryProps) => {

    const onConfirm = () => {
        setView("confirm")
    }

    return (
        <div className="relative rounded-2xl w-xl bg-[url('/orange-bg.jpeg')]">
            {/* background layer */}
            {/* <div className="absolute rounded-2xl inset-0 bg-[#FF5A1352] bg-cover bg-center z-0" /> */}
            <div className="px-6 py-3">
                <div className="text-accent text-md font-medium">Portfolio Deployment Summary</div>
            </div>

            <div className="py-3 px-6 bg-white rounded-b-xl text-[#293056] space-y-2">
                <div className="flex items-center justify-between text-md">
                    <p>Total amount</p>
                    <p className="font-semibold">{portfolioSummary.totalCapital} USDT</p>
                </div>

                <Separator orientation="horizontal" />


                <div className="flex items-center justify-between text-md text-[#293056]">
                    <p>Strategies</p>
                    <p className="font-semibold">{portfolioSummary.strategies.length}</p>
                </div>

                <div className="space-y-3">
                    {portfolioSummary.strategies.map((s) => (
                        <div key={s.id} className="grid grid-cols-3">
                            <div className="flex items-center gap-1.5 text-sm font-medium">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
                                <p className="text-md font-medium">{s.name}</p>
                            </div>

                            <div className="flex items-center gap-1.5 justify-end text-sm font-medium">
                                <p>{formatNumber(s.allocatedAmount, 0)} USDT</p>
                                <p>({s.allocationPercentage})%</p>
                            </div>

                            <p className="flex justify-end text-sm items-center">Est. APY: {formatNumber(s.estimatedAPY)}%</p>
                        </div>
                    ))}
                </div>

                <Separator orientation="horizontal" />


                <div className="flex items-center justify-between text-md text-[#293056]">
                    <p>Lock Period</p>
                    <p className="font-semibold">{portfolioSummary.lockPeriod}</p>
                </div>

                <Separator orientation="horizontal" />

                <div className="flex items-center justify-between text-md text-[#293056]">
                    <p>Estimated APY</p>
                    <p className="font-semibold text-[#039855]">{formatNumber(portfolioSummary.expectedAPR)}%</p>
                </div>

                <div className="bg-[#FFF8E4] px-4 py-2 text-[#93370D] mt-4 rounded-2xl">
                    This will execute via our vault smart contract. You'll need to sign this transaction with your wallet.
                </div>

                <Button onClick={onConfirm} className="bg-[#363F72] w-full rounded-3xl hover:bg-[#363F72]/90 cursor-pointer">
                    Confirm
                </Button>
            </div>
        </div>
    )
}