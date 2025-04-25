import { PositonPerformance } from "./position-performance"
import { PositionSummary } from "./position-summary"
import { TransactionHistory } from "./transactions/transaction-history"

export const Postion = () => {
    return (
        <div className="space-y-8">
            <PositionSummary />

            <PositonPerformance />

            <TransactionHistory />
        </div>
    )
}