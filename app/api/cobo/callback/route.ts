// app/api/cobo/callback/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const body = await req.json();

    // TODO: (Optional) Verify the request signature here using HMAC or headers

    console.log("🚀 Cobo Callback Received:", body);

    // Respond back to Cobo
    return NextResponse.json({ status: "ok" });
}

export function GET() {
    return NextResponse.json({ status: "Callback endpoint is live" });
}
