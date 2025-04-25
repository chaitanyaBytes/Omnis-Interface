import { Vault } from "@/types/vault";

export const sampleVaults: Vault[] = [
    {
        id: "1",
        name: "xJLP Vault (coming soon)",
        description: "Optimize your ETH holdings with our automated yield strategy that rotates between the highest performing protocols.",
        imageUrl: "/images/eth-vault.jpg", // Replace with your actual image path
        apy: 41.26,
        tvl: 21600,
        totalTvl: 21600,
        highestApy: 41.26,
        capacity: 85.46,
        dailyDrawdown: -1.48,
        volume: 36.4,
        age: "N/A",
        chain: "Solana",
        maxCap: 100,
        collateral: "USDC",
        leverage: 2,
        riskLevel: 1,
        liquidationThreshold: 0.5,
        protocols: ["Jupiter", "Drift"],
        performanceFee: 20,
        withdrawalFee: 0,
        earlyExitPenalty: false,
        createdAt: "2024-01-01",
        isActive: true,
    },
];