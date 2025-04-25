"use client"

import { useState, useEffect } from "react";
import { StrategyInterface } from "@/types/strategy";
import { dummyStrategies } from "@/data/strategies";

export function useStrategies() {
    const [strategies, setStrategies] = useState<StrategyInterface[]>([]);
    const [loading, setLoading] = useState(false);
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setStrategies(dummyStrategies);
            setLoading(false);
        }, 500); // Simulate loading delay
    }, [dummyStrategies]);

    return { strategies, loading };
}
