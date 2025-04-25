import VaultDetail from "./_components/vault-details"

export default async function Page({
    params,
}: {
    params: Promise<{ vaultId: string }>
}) {
    const { vaultId } = await params
    return (
        <div className="max-w-[90rem] mx-auto px-4">
            <VaultDetail vaultId={vaultId} />
        </div>
    )
}

