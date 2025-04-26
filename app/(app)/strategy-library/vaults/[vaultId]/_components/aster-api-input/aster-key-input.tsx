"use client"

// 777bb47731e4d59d354230be0bcb0fe29f48ba1973baa5d9e85dfe3971203593
// a8a6d493c9b01323ddd5b456e8cef5ecab6f5117e92d0f9726167966337698ed

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAsterAPI } from "../../_context/aster-api-context"
import { useAccount } from "wagmi"
import { Button } from "@/components/ui/button"
import { useRegisterApiKeys } from "../../_hooks/useRegisterApiKeys"
import { toast } from "sonner"

export const AsterApiInput = () => {
    const { address } = useAccount()
    const { asterAPIkey, setAsterAPIkey, asterSecretAPIkey, setAsterSecretAPIkey } = useAsterAPI();
    const { registerKeys, loading, error, success } = useRegisterApiKeys();

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        if (!address || !asterAPIkey || !asterSecretAPIkey) {
            toast.error("Please fill in both API keys.");
            return;
        }
        console.log(address)
        console.log(asterAPIkey);
        console.log(asterSecretAPIkey);

        try {
            await registerKeys({
                wallet_address: address,
                api_key: asterAPIkey,
                secret_key: asterSecretAPIkey,
            });
            toast.success("Keys registered successfully!");
        } catch (err) {
            toast.error(`Error: ${error || 'An error occurred'}`);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="rounded-2xl bg-[#F8F9FC]">
            <div className="p-4 space-y-6 rounded-2xl">
                <div className="text-2xl text-[#1C274C] font-semibold">
                    Register Aster API Keys
                </div>

                <div className="space-y-2">
                    <Label>Aster API Key</Label>
                    <Input
                        type="text"
                        value={asterAPIkey}
                        onChange={(e) => setAsterAPIkey(e.target.value)}
                        placeholder="Enter API key"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Aster secret API Key</Label>
                    <Input
                        type="text"
                        value={asterSecretAPIkey}
                        onChange={(e) => setAsterSecretAPIkey(e.target.value)}
                        placeholder="Enter Secret API key"
                    />
                </div>

                <Button
                    type="submit"
                    className="cursor-pointer bg-[#363F72] hover:bg-[#363F72]/90 w-full"
                    disabled={loading || !asterAPIkey || !asterSecretAPIkey}

                >
                    {loading ? (
                        <div className="animate-spin w-4 h-4 border-2 border-t-transparent rounded-full"></div>
                    ) : (
                        "Register Keys"
                    )}
                </Button>
                {success && <p className="text-green-600">Keys registered successfully!</p>}
                {error && <p className="text-red-600">{error}</p>}
            </div>
        </form>
    )
}