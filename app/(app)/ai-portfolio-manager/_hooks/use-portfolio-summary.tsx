"use client"

import { PortfolioStrategy, PortfolioSummary } from "@/types/strategy";
import { FormValues } from "../_components/portfolio-form";
import { useState } from "react";
import { ViewState } from "@/types/view-state";


export const usePortfolioSummary = (setView: React.Dispatch<React.SetStateAction<ViewState>>) => {
    const [portfolioSummary, setPortfolioSummary] = useState<PortfolioSummary | null>(null)

    function onSubmit(values: FormValues) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        const recommendedPortfolio = generateRecommendedPortfolio(values);
        setPortfolioSummary(recommendedPortfolio); // show the result card
        // todo: fix this later
        setView("loading")
    }

    return { portfolioSummary, setPortfolioSummary, onSubmit }
}

function getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateRecommendedPortfolio(values: FormValues): PortfolioSummary {
    const { capitalAmount, lockPeriod } = values;

    // Example hardcoded strategy pool (you'd later make this dynamic)
    let strategyPool: PortfolioStrategy[] = [
        {
            id: "fra",
            name: "Funding Rate Arbitrage",
            tag: "HOT",
            token: "USDT",
            allocatedAmount: 0,
            allocationPercentage: 35,
            estimatedAPY: 13.85,
            color: getRandomColor(),
        },
        {
            id: "vh",
            name: "Volatility Harvesting",
            token: "USDT",
            allocatedAmount: 0,
            allocationPercentage: 50,
            estimatedAPY: 17.3,
            color: getRandomColor(),
        },
        {
            id: "mt",
            name: "Momentum Trading",
            tag: "NEW",
            token: "FUEL",
            platform: "FUEL Strategy",
            allocatedAmount: 0,
            allocationPercentage: 15,
            estimatedAPY: 22.5,
            color: getRandomColor(),
        },
    ];

    strategyPool = strategyPool.map((s) => ({
        ...s,
        allocatedAmount: (capitalAmount * s.allocationPercentage) / 100
    }))

    const expectedAPR = strategyPool.reduce((acc, s) => {
        return acc + (s.estimatedAPY * s.allocationPercentage) / 100;
    }, 0);

    const expectedMonthlyReturn = ((capitalAmount * expectedAPR) / 100) / 12;

    return {
        expectedAPR,
        expectedMonthlyReturn,
        totalCapital: capitalAmount,
        strategies: strategyPool,
        lockPeriod
    };
}
