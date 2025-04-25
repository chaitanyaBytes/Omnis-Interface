import { useReadContract } from 'wagmi'
import { useAccount } from 'wagmi'
import { abi } from '@/lib/abi'
import { formatUnits } from 'viem'
import { bsc } from 'wagmi/chains'

const USDT_CONTRACT_BNB = '0x55d398326f99059fF775485246999027B3197955' // BNB Chain USDT

export const useUsdtBalance = () => {
    const { address } = useAccount()

    const result = useReadContract({
        abi: abi,
        address: USDT_CONTRACT_BNB,
        functionName: 'balanceOf',
        args: address ? [address] : undefined,
        chainId: bsc.id,
        query: {
            enabled: !!address,
        },
    })

    const decimalsResult = useReadContract({
        abi: abi,
        address: USDT_CONTRACT_BNB,
        functionName: 'decimals',
        query: {
            enabled: !!address,
        },
    })

    const isLoading = result.isLoading || decimalsResult.isLoading
    const error = result.error || decimalsResult.error

    let formatted = '0'
    if (result.data && decimalsResult.data) {
        formatted = formatUnits(result.data, decimalsResult.data)
    }

    return {
        raw: result.data,
        formatted,
        isLoading,
        error,
    }
}
