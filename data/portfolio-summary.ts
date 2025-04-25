import { PortfolioSummary } from "@/types/strategy";

export const mockPortfolioSummary: PortfolioSummary = {
    expectedAPR: 16.5,
    expectedMonthlyReturn: 187,
    totalCapital: 5000,
    strategies: [
        {
            id: "fra",
            name: "Funding Rate Arbitrage",
            tag: "HOT",
            token: "USDT",
            allocatedAmount: 1750,
            allocationPercentage: 35,
            estimatedAPY: 13.85,
            color: "#509CFF",
        },
        {
            id: "vh",
            name: "Volatility Harvesting",
            token: "USDT",
            allocatedAmount: 2500,
            allocationPercentage: 50,
            estimatedAPY: 17.3,
            color: "#F083BE",
        },
        {
            id: "mt",
            name: "Momentum Trading",
            tag: "NEW",
            token: "FUEL",
            platform: "FUEL Strategy",
            allocatedAmount: 750,
            allocationPercentage: 15,
            estimatedAPY: 22.5,
            color: "#BB9CFD",
        },
    ],
    lockPeriod: "180 days"
};
