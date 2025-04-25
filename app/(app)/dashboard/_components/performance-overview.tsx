"use client"

import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TimeRange } from "./time-range";
import PositionChart from "./position-chart";

export const PositonPerformance = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState<TimeRange>("30D");
    const timeRanges: TimeRange[] = ["1D", "7D", "30D", "6M", "Max"];

    return (
        <div className="bg-white p-4 rounded-2xl shadow-lg">
            <Tabs defaultValue="30D" onValueChange={(value) => setSelectedTimeRange(value as TimeRange)}>
                <h2 className="text-xl font-medium mb-1">Performance Overview</h2>

                <div className="flex flex-row flex-wrap items-center justify-between gap-6">
                    <p className="text-[#4E5BA6F] text-sm">Total Portfolio Value</p>

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