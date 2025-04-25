import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { wallet_address } = await req.json();

    if (!wallet_address) {
        return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/stop_strategy`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                wallet_address,
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log("[STOP-STRATEGY-OK]: ", data);
            return NextResponse.json(data, { status: 200 });
        } else {
            const errorData = await response.json();
            console.log("[STOP-STRATEGY-ERROR]: ", errorData);
            return NextResponse.json({ error: errorData.message || 'Failed to start strategy' }, { status: response.status });
        }
    } catch (err: any) {
        return NextResponse.json({ error: "Internal Server error" }, { status: 500 });
    }
}