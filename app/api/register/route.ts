// app/api/register/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { wallet_address, api_key, secret_key } = body;

        if (!wallet_address || !api_key || !secret_key) {
            return NextResponse.json(
                { error: "Missing required fields." },
                { status: 400 }
            );
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ wallet_address, api_key, secret_key }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json(
                { error: errorData.message || "Failed to register keys." },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json({ success: true, data }, { status: response.status });

    } catch (error: any) {
        console.error("Register API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
