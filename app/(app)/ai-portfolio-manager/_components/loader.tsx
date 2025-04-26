"use client";

import React from "react";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";

const loadingStates = [
    {
        text: "Analyzing current market trends...",
    },
    {
        text: "Identifying weights for strategy..."
    },
    {
        text: "Forecasting risk-adjusted returns...",
    },
];

export const Loader = () => {
    const loading = true;

    return (
        <div className="rounded-2xl w-xl bg-white">
            <div className="px-6 py-3">
                <div className="text-md font-medium">Generating Porftolio Strategy</div>
            </div>

            <div className="">
                <video
                    src={"/loader.mp4"}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-60 object-cover"
                />
            </div>

            <div className="space-y-1 text-center flex flex-col items-center">
                <p className="text-md">Analyzing market conditions</p>
                <p className="text-[13px] text-[#7a7db3] w-md">We're optimizing your portfolio based on current market data, risk parameters, and your investment preferences.</p>
            </div>

            <div className="flex justify-center my-8 overflow-y-hidden pt-2">
                <MultiStepLoader loadingStates={loadingStates} loading={loading} duration={3000} />
            </div>
        </div>
    )
}
