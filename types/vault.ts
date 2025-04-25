// Define the Vault type with more structured data
export interface Vault {
    id: string;
    name: string;
    description: string;
    imageUrl: string; // Vault logo or banner image

    // Performance Metrics
    apy: number; // % as a number (e.g., 18.5 for 18.5% APY)
    tvl: number; // Total Value Locked in USD
    capacity: number;
    maxCap: number; // Max capacity for deposits (if applicable)
    totalTvl: number; // Total Value Locked in USD
    highestApy: number; // Highest APY in the last 30 days
    dailyDrawdown: number;
    volume: number;

    // Investment Details
    chain: "Solana" | "Ethereum" | "Arbitrum" | "Polygon"; // Blockchain name
    collateral: string; // Collateral type (e.g., "JLP", "USDC", "ETH")
    leverage: number; // Target leverage (e.g., 2x, 3x)

    // Risk & Management
    riskLevel: 1 | 2 | 3 | 4 | 5; // 1 = Low, 5 = High
    liquidationThreshold: number; // LTV % at which auto-unwind happens

    // Time & History
    age: string; // Vault age (e.g., "6 months")
    createdAt: string; // ISO date for historical tracking

    // Strategy & Fees
    protocols: string[]; // Protocols used (e.g., ["Drift", "Jupiter"])
    performanceFee: number; // % Performance fee (e.g., 20 for 20%)
    withdrawalFee: number; // % Withdrawal fee (if applicable)
    earlyExitPenalty: boolean; // True if early withdrawals lose profits

    // Status
    isActive: boolean; // Whether deposits are open or paused
    isNew?: boolean; // Mark if it's a new vault

    // Interactive Data (Optional)
    priceHistory?: { date: string; value: number }[]; // For charts
    recentTransactions?: { type: "deposit" | "withdrawal"; amount: number; date: string }[]; // Recent vault actions
}
