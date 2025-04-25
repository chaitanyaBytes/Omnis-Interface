"use client"

import { PortfolioForm } from "./_components/portfolio-form"
import { RecommendedPortfolio } from "./_components/recommended-portfolio"
import { useEffect, useState } from "react"
import { usePortfolioSummary } from "./_hooks/use-portfolio-summary"
import { DeploymentSummary } from "./_components/deployment-summary"
import { ViewState } from "@/types/view-state"
import { TransactionResult } from "./_components/transaction-result"
import { dummyTransaction } from "@/data/dummy-transaction"
import { useWalletAuth } from "@/hooks/useWalletAuth"
import { useRouter } from "next/navigation"
import { AiPortfolioManagerSkeleton } from "./_components/skeleton"

// export default function AiPortfolioManager() {
//     return (
//         <div className="relative font-[family-name:var(--font-geist-sans)] text-foreground">
//             <div className="pt-4 px-4 mx-auto max-w-4xl h-[90vh]">
//                 <div className="flex flex-col bg-white rounded-4xl w-full h-full overflow-y-auto">
//                     <div>
//                         <div className="py-4 px-4 flex justify-between items-center border-b">
//                             <div className="flex gap-4 items-center">
//                                 <Image src="/ui/sparkles.svg" alt="sparkles" width={30} height={30} />
//                                 <div className="-space-y-1">
//                                     <p className="text-lg text-[#293056 font-medium]">AI Portfolio Manager</p>
//                                     <p className="text-sm text-muted-foreground">Powered by Omnis Labs</p>
//                                 </div>
//                             </div>

//                             <div>
//                                 <RotateCcw size={20} stroke="#334155" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex-1 h-0 overflow-y-hidden w-full">
//                         <Chat />
//                         {/* <NotLoggedInAlert /> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default function AiPortfolioManager() {
    const [view, setView] = useState<ViewState>("form")
    const { portfolioSummary, onSubmit } = usePortfolioSummary(setView);
    const { isLoading, shouldRedirect } = useWalletAuth()
    const router = useRouter();

    useEffect(() => {
        if (shouldRedirect) {
            router.replace("/sign-in")
        }
    }, [shouldRedirect])

    if (isLoading) {
        return <AiPortfolioManagerSkeleton />
    }

    return (
        <div className="relative font-[family-name:var(--font-geist-sans)] text-foreground">
            <div className="pt-4 px-4 mx-auto max-w-xl space-y-3">
                <div className="space-y-1">
                    <p className="text-3xl font-semibold">AI Portfolio Manager</p>
                    <p className="text-[#363F72]">Build optimized DeFi portfolios tailored to your risk profile, investment goals, and preferred assets.</p>
                </div>

                <div className="flex items-center justify-center">
                    {view === "form" && <PortfolioForm onSubmit={onSubmit} />}
                    {view === "recommended" && portfolioSummary && (
                        <RecommendedPortfolio
                            portfolioSummary={portfolioSummary}
                            setView={setView}
                        />
                    )}
                    {view === "summary" && portfolioSummary && (
                        <DeploymentSummary
                            portfolioSummary={portfolioSummary}
                            setView={setView}
                        />
                    )}

                    {view === "confirm" && portfolioSummary && (
                        <TransactionResult
                            transactionResult={dummyTransaction}
                            straegiesNum={portfolioSummary.strategies.length}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}