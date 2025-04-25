import { Skeleton } from "@/components/ui/skeleton"

export function AiPortfolioManagerSkeleton() {
    return (
        <div className="space-y-4 pt-4 px-4 mx-auto max-w-xl">
            <Skeleton className="h-20 w-full" />

            <Skeleton className="rounded-2xl w-xl h-[550px]" />
        </div>
    )
}
