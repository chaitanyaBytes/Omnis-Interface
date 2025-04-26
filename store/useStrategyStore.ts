import { create } from "zustand";
import { StrategyInterface } from "@/types/strategy";
import { dummyStrategies } from "@/data/strategies"; // <-- Assuming you have mock data for now

interface StrategyState {
    strategy: StrategyInterface | null;
    loading: boolean;
    fetchStrategy: (strategyId: string) => Promise<void>;
}

export const useStrategyStore = create<StrategyState>()((set) => ({
    strategy: null,
    loading: true,

    fetchStrategy: async (strategyId) => {
        set({ loading: true });
        try {
            // TODO: Replace with actual API call
            const strategy = dummyStrategies.find((s) => s.id === strategyId) || null;
            set({ strategy, loading: false });
        } catch (error) {
            console.error("Error fetching strategy:", error);
            set({ strategy: null, loading: false });
        }
    },
}));
