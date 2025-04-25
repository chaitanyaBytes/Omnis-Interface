import VaultMetrics from "./vault-metrics"
import VaultChart from "./vault-chart"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export type TimeRange = "1D" | "7D" | "30D" | "6M" | "Max";

export const VaultPerformance = () => {

    const [selectedTimeRange, setSelectedTimeRange] = useState<TimeRange>("30D");
    const timeRanges: TimeRange[] = ["1D", "7D", "30D", "6M", "Max"];

    return (
        <div className="rounded-lg py-3 space-y-8">
            <VaultMetrics />

            <Tabs defaultValue="30D" onValueChange={(value) => setSelectedTimeRange(value as TimeRange)}>
                <div className="flex flex-row flex-wrap items-center justify-between gap-6">
                    <p>Vault Price</p>

                    <div>
                        <TabsList className="grid grid-cols-5">
                            {timeRanges.map((tr) => <TabsTrigger value={tr} key={tr} >{tr}</TabsTrigger>)}
                        </TabsList>
                    </div>
                </div>

                <TabsContent value={selectedTimeRange}>
                    <div className="mt-4 h-[300px]">
                        <VaultChart timeRange={selectedTimeRange} />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}