// app/api/cobo/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const body = await req.json();

    console.log("📬 Webhook event received from Cobo:", body);

    return NextResponse.json({ status: "received" });
}
