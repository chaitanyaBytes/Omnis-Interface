export const CoboWaas2 = require('@cobo/cobo-waas2');
// Initial default API client
export const apiClient = CoboWaas2.ApiClient.instance
// Use the development environment
apiClient.setEnv(CoboWaas2.Env.DEV);
// Set the API secret
apiClient.setPrivateKey(process.env.COBO_API_SECRET);
// Call the API
const apiInstance = new CoboWaas2.WalletsApi();

export async function listSupportedChains() {
    const opts = {
        'wallet_type': CoboWaas2.WalletType.Custodial,
        'wallet_subtype': CoboWaas2.WalletSubtype.Asset,
        'chain_ids': "BSC,ETH",
        'limit': 10,
        'before': "",
        'after': ""
    };

    return await apiInstance.listSupportedChains(opts).then((data: any) => {
        console.log('API called successfully. Returned data: ' + data);
    }, (error: any) => {
        console.error(error);
    });
}

export async function createWallet() {
    const walletName = "My Wallet"
    const walletType = "Custodial"
    const walletSubtype = "Asset"
    const opts = {
        'CreateWalletParams': new CoboWaas2.CreateWalletParams(
            new CoboWaas2.CreateCustodialWalletParams(
                walletName,
                walletType,
                walletSubtype
            )
        )
    };
    apiInstance.createWallet(opts).then((data: any) => {
        console.log('API called successfully. Returned data: ' + data);
    }, (error: any) => {
        console.error(error);
    });
}


