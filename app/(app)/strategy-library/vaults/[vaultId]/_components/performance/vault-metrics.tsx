import { useVaultStore } from "@/store/useVaultStore";

export default function VaultMetrics() {
    const vault = useVaultStore((state) => state.vault);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-6">
            <div className="">
                <div className="flex flex-row items-start gap-2">
                    <div>
                        <h3 className="text-sm text-gray-400">APY (44 days)</h3>
                        <p className="text-[var(--vault-page-primary)] text-2xl font-semibold">{vault?.apy}%</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex flex-row items-start gap-2">
                    <div>
                        <h3 className="text-sm text-gray-400">TVL</h3>
                        <p className=" text-2xl font-semibold">${vault?.tvl}</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex flex-row items-start gap-2">
                    <div>
                        <h3 className="text-sm text-gray-400">Max Daily Drawdwon</h3>
                        <p className={`text-2xl font-semibold ${vault?.dailyDrawdown && vault.dailyDrawdown > 0 ? "text-[var(--vault-page-primary)]" : "text-destructive"}`}>{vault?.dailyDrawdown}%</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex flex-row items-start gap-2">
                    <div>
                        <h3 className="text-sm text-gray-400">Volume (30D)</h3>
                        <p className={`text-2xl font-semibold`}>{vault?.volume}</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-row items-start gap-2">
                    <div>
                        <h3 className="text-sm text-gray-400">Capacity</h3>
                        <p className=" text-2xl font-semibold mt-1">{vault?.capacity}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

