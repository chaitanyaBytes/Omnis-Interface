// Vault deposit request payload
export interface CreateDepositTxRequest {
    wallet: string;
    amount: string; // Keeping it as a string as per API docs
    usdcAccount: string;
}

// Vault depodit response 
export interface CreateDepositTxResponse {
    transaction: string; // Base64 encoded transaction
    id: string; // Transaction ID
}

// Drift Deposit request payload
export interface CreateDriftDepositRequest {
    wallet: string;
    amount: number;
    usdcAccount: string;
}

// Drift Deposit response from backend
export interface CreateDriftDepositResponse {
    success: boolean;
    transaction: string; // Base64 transaction
    message: string;
}

// Submit signed transaction payload
export interface SubmitDepositRequest {
    id: string;
    signedTransaction: string;
}

// Submit signed transaction response
export interface SubmitDepositResponse {
    success: boolean;
    signature: string;
}

export interface Transaction {
    id: string;
    type: string;
    strategy: string;
    date: string;
    amount?: number;
    status: string;
    network: string;
    gas: number;
}
