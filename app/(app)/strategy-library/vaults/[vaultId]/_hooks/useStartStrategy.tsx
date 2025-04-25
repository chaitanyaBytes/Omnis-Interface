"use client"

import { useState } from 'react';

export const useStartStrategy = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const startStrategy = async ({
        wallet_address,
        strategy_name,
        symbol,
        usdt_amount
    }: {
        wallet_address: string,
        strategy_name: string,
        symbol: string,
        usdt_amount: number
    }) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const res = await fetch('/api/start-strategy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    wallet_address,
                    strategy_name,
                    symbol,
                    usdt_amount,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess(true);
            } else {
                setError(data.error || 'Failed to start strategy');
            }
        } catch (err: any) {
            setError('An error occurred while starting the strategy.');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { startStrategy, loading, error, success };
};
