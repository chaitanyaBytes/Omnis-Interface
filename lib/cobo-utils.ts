import { CoboWaas2, apiClient } from './cobo-client';

export async function listSupportedChains() {
    const apiInstance = new CoboWaas2.WalletsApi();

    const opts = {
        wallet_type: CoboWaas2.WalletType.Custodial,
        wallet_subtype: CoboWaas2.WalletSubtype.Asset,
        chain_ids: 'BTC,ETH',
        limit: 10,
        before: '',
        after: '',
    };

    return await apiInstance.listSupportedChains(opts);
}
