export type TransactionStatus = "Pending" | "Confirmed" | "Failed";

export interface Transaction {
    hash: string;
    status: TransactionStatus;
    gasPaid: number; // you could make this a number if you prefer
    strategiesActivated: number;
    totalStrategies: number;
    chain: "BSC" | string;
}
