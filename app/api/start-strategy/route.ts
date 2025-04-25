// /pages/api/start-strategy.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { wallet_address, strategy_name, symbol, usdt_amount } = await req.json();

    console.log("hello from api")
    // Validate the request body
    if (!wallet_address || !strategy_name || !symbol || !usdt_amount) {
        return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    console.log("step 2")
    try {
        // Call your backend API to start the strategy
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/start_strategy`, {
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

        console.log("step 3")
        // If backend call is successful
        if (response.ok) {
            const data = await response.json();
            console.log("[START-STRATEGY-OK]: ", data);
            return NextResponse.json(data, { status: 200 });
        } else {
            const errorData = await response.json();
            console.log("[START-STRATEGY-ERROR]: ", errorData);
            return NextResponse.json({ error: errorData.message || 'Failed to start strategy' }, { status: response.status });
        }
    } catch (error) {
        console.log("Error caught")
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
} 
