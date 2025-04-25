"use client"

import { useState } from 'react';

export const useStopStrategy = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const stopStrategy = async ({
        wallet_address,
    }: {
        wallet_address: string,
    }) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const res = await fetch('/api/stop-strategy', {
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
                setError(data.error || 'Failed to stop strategy');
            }
        } catch (err: any) {
            setError('An error occurred while stopping the strategy.');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { stopStrategy, loading, error, success };
};
