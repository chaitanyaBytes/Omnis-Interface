"use client"

import { useState, useEffect } from "react";
import { Transaction } from "@/types/api";
import { dummyTransactions } from "@/data/transactions";

export function useTransactions() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const [loading, setLoading] = useState(false);
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setTransactions(dummyTransactions);
            setLoading(false);
        }, 500); // Simulate loading delay
    }, [dummyTransactions]);

    return { transactions, loading };
}
