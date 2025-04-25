import { CircleCheck, Info } from "lucide-react"

export const DepositRules = () => {
    return (
        <div className="text-muted-foreground text-sm space-y-1">
            <div className="flex gap-2 items-baseline">
                <CircleCheck size={16} />
                <p>Deposit available immediately</p>
            </div>
            <div className="flex gap-2 items-center2">
                <CircleCheck size={16} />
                <p>Daily auto compounding</p>
            </div>
            <div className="flex gap-2 items-center">
                <Info size={16} />
                <p>1-day lock for withdrawls</p>
            </div>
            <div className="flex gap-2 items-center">
                <Info size={16} />
                <p>20% performance fee on exit</p>
            </div>
        </div>
    )
}