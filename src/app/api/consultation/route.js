import { consultationData } from "@/allData/consultationData";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        consultationData
    })
}