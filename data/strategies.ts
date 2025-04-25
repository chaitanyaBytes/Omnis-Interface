import { StrategyInterface } from "@/types/strategy";

export const dummyStrategies: StrategyInterface[] = [
    {
        name: "USDC Staking",
        strategy: "JLP Delta Neutral",
        apy: "17.30%",
        ntPoints: "1x NT Points",
        currentTVL: 11317930.10,
        maxCapacity: 26000000,
        network: "Binance",
        status: "HOT"
    },
    {
        name: "USDC Basis",
        strategy: "Sanctum-INF",
        apy: "13.85%",
        ntPoints: "1.25x NT Points",
        currentTVL: 738342.05,
        maxCapacity: 1000000,
        network: "Binance",
        status: "HOT"
    },
    {
        name: "FUEL Maxi",
        strategy: null, // No sub-strategy shown
        apy: "7.5x FUEL Boost",
        ntPoints: "2x NT Points",
        currentTVL: 395112.36,
        maxCapacity: 500000,
        network: "Binance",
        status: "NEW"
    }
];
