"use client"

import { useState } from "react";

export function useRegisterApiKeys() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const registerKeys = async ({
        wallet_address,
        api_key,
        secret_key,
    }: {
        wallet_address: string;
        api_key: string;
        secret_key: string;
    }) => {
        setLoading(true);
        setSuccess(false);
        setError(null);

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ wallet_address, api_key, secret_key }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to register keys");
            }

            setSuccess(true);
            return data;
        } catch (err: any) {
            setError(err.message || "Something went wrong");
            throw err; // Optional: throw if you still want to catch it in the component
        } finally {
            setLoading(false);
        }
    };

    return { registerKeys, loading, success, error };
}
