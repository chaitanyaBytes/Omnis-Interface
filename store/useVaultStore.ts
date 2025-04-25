import { create } from "zustand";
import { Vault } from "@/types/vault";
import { sampleVaults } from "@/data/vault"; // Remove this when using API

interface VaultState {
    vault: Vault | null;
    loading: boolean;
    fetchVault: (vaultId: string) => Promise<void>;
}

export const useVaultStore = create<VaultState>()((set) => ({
    vault: null,
    loading: true,

    fetchVault: async (vaultId) => {
        set({ loading: true });
        try {
            // TODO: Replace with actual API call
            const vault = sampleVaults.find((v) => v.id === vaultId) || null;
            set({ vault, loading: false });
        } catch (error) {
            console.error("Error fetching vault:", error);
            set({ vault: null, loading: false });
        }
    },
}));
