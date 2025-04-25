import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { wallet_address } = await req.json();
    console.log("[WITHDRAW-REQ]:", wallet_address);

    if (!wallet_address) {
        return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/withdraw`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                wallet_address,
            })
        });

        console.log("[WITHDRAW-RESP-STATUS]:", response.status);

        if (response.ok) {
            const data = await response.json();
            console.log("[WITHDRAW-OK]: ", data);
            return NextResponse.json(data, { status: 200 });
        } else {
            const errorData = await response.json();
            console.log("[WITHDRAW-ERROR]: ", errorData);
            return NextResponse.json({ error: errorData.message || 'Failed to withdraw' }, { status: response.status });
        }
    } catch (err: any) {
        return NextResponse.json({ error: "Internal Server error" }, { status: 500 });
    }
}