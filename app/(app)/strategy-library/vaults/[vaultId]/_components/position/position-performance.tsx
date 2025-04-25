"use client"

import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TimeRange } from "../performance/vault-performance"
import PositionChart from "./position-chart";

export const PositonPerformance = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState<TimeRange>("30D");
    const timeRanges: TimeRange[] = ["1D", "7D", "30D", "6M", "Max"];

    return (
        <div>
            <Tabs defaultValue="30D" onValueChange={(value) => setSelectedTimeRange(value as TimeRange)}>
                <h2 className="text-2xl mb-1">Position Performance</h2>

                <div className="flex flex-row flex-wrap items-center justify-between gap-6">
                    <p>Value</p>

                    <div>
                        <TabsList className="grid grid-cols-5">
                            {timeRanges.map((tr) => <TabsTrigger value={tr} key={tr} >{tr}</TabsTrigger>)}
                        </TabsList>
                    </div>
                </div>

                <TabsContent value={selectedTimeRange}>
                    <div className="mt-4 h-[300px]">
                        <PositionChart timeRange={selectedTimeRange} />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}