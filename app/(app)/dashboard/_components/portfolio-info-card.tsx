import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface PortfolioInfoCardProps {
    title: string,
    value: string | number,
    status: string | number,
    statusColor: string,
    footerText: string,
}

export function PortfolioInfoCard({ title, value, status, statusColor, footerText, ...props }: PortfolioInfoCardProps) {
    return (
        <Card className={cn("w-64 gap-1")} {...props}>
            <CardHeader>
                <CardTitle className="text-[#363F72] text-sm font-medium">{title}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-0.5">
                <p className="text-[#00093A] text-2xl font-semibold">{value}</p>
                <p className="text-sm font-medium" style={{ color: statusColor }}>{status}</p>
                <p className="text-[#293056] text-sm mt-1">{footerText}</p>
            </CardContent>
        </Card>
    )
}
