export interface StrategyInterface {
    id: string,
    name: string;
    strategy: string | null;
    apy: string;
    currentTVL: number;
    maxCapacity: number;
    network: string;
    status: "HOT" | "NEW" | "EXCLUSIVE";

    // Performance Metrics
    capacity: number;
    maxCap: number; // Max capacity for deposits (if applicable)
    highestApy: number; // Highest APY in the last 30 days
    dailyDrawdown: number;
    volume: number;

    // Investment Details
    chain: "BSC"; // Blockchain name
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
};

export interface PortfolioStrategy {
    id: string; // Unique identifier
    name: string; // e.g., "Funding Rate Arbitrage"
    tag?: 'HOT' | 'NEW'; // Optional status badge
    token: string; // e.g., 'USDC'
    platform?: string; // Optional, e.g., "FUEL Strategy"
    allocatedAmount: number; // e.g., 1750
    allocationPercentage: number; // e.g., 35
    estimatedAPY: number; // e.g., 13.85
    color: string; // e.g., "#509CFF" for dot color
};

export interface PortfolioSummary {
    expectedAPR: number; // e.g., 16.5
    expectedMonthlyReturn: number; // e.g., 187
    totalCapital: number; // e.g., 5000
    strategies: PortfolioStrategy[]; // Array of the strategies above
    lockPeriod: string
};