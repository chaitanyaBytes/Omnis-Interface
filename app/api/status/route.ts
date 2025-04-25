import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/status`, {
            method: "GET"
        });

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