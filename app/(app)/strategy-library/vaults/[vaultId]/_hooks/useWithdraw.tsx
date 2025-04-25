"use client"

import { useState } from 'react';

export const useWithdraw = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const withdraw = async ({
        wallet_address,
    }: {
        wallet_address: string,
    }) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const res = await fetch('/api/withdraw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    wallet_address,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess(true);
            } else {
                setError(data.error || 'Failed to withdraw');
            }
        } catch (err: any) {
            setError('An error occurred while withdrawing.');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { withdraw, loading, error, success };
};
