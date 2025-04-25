export interface StrategyInterface {
    name: string;
    strategy: string | null;
    apy: string;
    ntPoints: string;
    currentTVL: number;
    maxCapacity: number;
    network: string;
    status: "HOT" | "NEW" | null;
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