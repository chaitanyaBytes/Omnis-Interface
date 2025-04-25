import { Skeleton } from "@/components/ui/skeleton"

export function DashboardSkeleton() {
    return (
        <div className="space-y-4 pt-4 px-4 mx-auto max-w-6xl">
            <Skeleton className="h-20 w-full rounded-2xl" />

            <Skeleton className="rounded-2xl w-full h-[550px]" />
        </div>
    )
}
