"use client"

import { Button } from "@/components/ui/button"
import { cn, formatNumber } from "@/lib/utils"
import { PortfolioSummary } from "@/types/strategy"
import { ViewState } from "@/types/view-state"
import { ChartArea } from "lucide-react"
import Link from "next/link"
import * as React from "react"

interface RecommendedPortfolioProps {
    portfolioSummary: PortfolioSummary;
    setView: React.Dispatch<React.SetStateAction<ViewState>>
}

export function RecommendedPortfolio({ portfolioSummary, setView }: RecommendedPortfolioProps) {

    const onDeploy = () => {
        setView("summary")
    }

    return (
        <div className="rounded-2xl w-xl bg-[url('/navy-bg.jpeg')] bg-bottom-right">
            <div className="px-6 py-3">
                <div className="text-accent text-md font-medium">Recommended Portfolio</div>
            </div>
            <div className="py-3 px-6 bg-white rounded-b-xl">
                <div className="space-y-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[#039855]">
                            <ChartArea size={20} />
                            <p className="text-md font-semibold">Expected APR: 16.5%</p>
                        </div>
                        <p className="text-[#717BBC] text-sm">Based on your medium risk profile and ${portfolioSummary.totalCapital} investment</p>
                    </div>

                    {portfolioSummary.strategies.map((s) => (
                        <div key={s.id}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex items-start gap-1.5">
                                        <div className="w-4 h-4 mt-1 rounded-full" style={{ backgroundColor: s.color }} />
                                        <div>
                                            <p className="text-md font-medium">{s.name}</p>
                                            <p className="text-[#293056]">USDT Strategy</p>
                                        </div>
                                        <p className={cn("rounded-full text-sm font-medium py-1 px-2", s.tag == "HOT" ? "text-[#D92D20] bg-[#FEE4E2]" : "text-[#027A48] bg-[#D1FADF]")}>{s.tag ? s.tag : ""}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-1.5 text-md text-[#293056] font-semibold">
                                        <p>{s.allocatedAmount} USD </p>
                                        <p>({s.allocationPercentage}%)</p>
                                    </div>
                                    <p className="text-[#293056] text-sm">Est. APY: {s.estimatedAPY}%</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* unified share bar for all strategies */}
                    <div className="flex h-2 w-full overflow-hidden rounded-full bg-[#E0E7FF]">
                        {portfolioSummary.strategies.map((s) => (
                            <div
                                key={s.id}
                                className="h-full"
                                style={{
                                    width: `${s.allocationPercentage}%`,
                                    backgroundColor: s.color,
                                }}
                            />
                        ))}
                    </div>

                    {/* expected monthly return */}
                    <div className="bg-[#F4F7FF] px-4 py-3 rounded-2xl space-y-1">
                        <div className="flex justify-between items-center">
                            <p className="text-[#293056] text-sm">Expected Monthly Return</p>
                            <p className="text-[#039855] font-medium text-md">~{formatNumber(portfolioSummary.expectedMonthlyReturn)} USD</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="text-[#293056] text-sm">Total Capital</p>
                            <p className="font-medium text-md">{formatNumber(portfolioSummary.totalCapital)} USD</p>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <Button disabled onClick={onDeploy} className="bg-[#363F72] w-full rounded-3xl hover:bg-[#363F72]/90 cursor-pointer">
                            Deploy Portfolio
                        </Button>
                        <Link href={"#"} className="text-sm text-[#717BBC] underline">learn more about these strategies</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
