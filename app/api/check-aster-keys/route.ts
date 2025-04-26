import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { wallet_address } = await req.json();

    if (!wallet_address) {
        return NextResponse.json({ error: 'Missing wallet address' }, { status: 400 });
    }

    try {
        // CHANGED: Now GET instead of POST
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/check_user/${wallet_address}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        if (response.ok && data.exists) {
            console.log("User is already registered");
            return NextResponse.json({ registered: true });
        } else {
            console.log("User is not registered");
            return NextResponse.json({ registered: false });
        }
    } catch (error) {
        return NextResponse.json({ error: "Failed to check keys" }, { status: 500 });
    }
}
