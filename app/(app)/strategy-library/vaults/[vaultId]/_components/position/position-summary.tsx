import { formatCurrency, formatNumber } from "@/lib/utils"

export const PositionSummary = () => {
    return (
        <div>
            <div className="bg-[#F4F7FF] space-y-4 rounded-lg py-4 px-5">
                <h1 className="font-medium text-2xl">Position Summary</h1>

                <div className="grid grid-cols-2 lg:grid-cols-4 space-y-4">
                    <div>
                        <p className="text-muted-foreground">Deposit Value</p>
                        <p className="text-2xl">{formatCurrency(10000, 2)}</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">Current Value</p>
                        <p className="text-2xl">{formatCurrency(10356.69, 2)}</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">Profit/Loss</p>
                        <div className="flex gap-2">
                            <p className={`text-2xl ${true ? "text-[var(--vault-page-primary)]" : "text-destructive"}`}>{formatCurrency(245.46, 2)}</p>
                            <p className={`text-2xl font-medium ${true ? "text-[var(--vault-page-primary)]" : "text-destructive"}`}>({formatNumber(2.88, 2)}%)</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-muted-foreground">Current APY</p>
                        <p className="text-2xl text-[var(--vault-page-primary)]">{formatNumber(14.95, 2)}%</p>
                    </div>


                    <div>
                        <p className="text-muted-foreground">Deposit Date</p>
                        <p className="text-xl">March 1, 2025</p>
                    </div>


                    <div>
                        <p className="text-muted-foreground">Time invested</p>
                        <p className="text-xl">22 days</p>
                    </div>


                    <div>
                        <p className="text-muted-foreground">Next Compoundind</p>
                        <p className="text-xl">Today at 16:00 UTC</p>
                    </div>


                    <div>
                        <p className="text-muted-foreground">Yearly Projection</p>
                        <p className={`text-2xl ${true ? "text-[var(--vault-page-primary)]" : "text-destructive"}`}>({formatCurrency(2345, 2)}%)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}