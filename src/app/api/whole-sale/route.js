import { wholesaleData } from "@/allData/wholesaleData";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        wholesaleData
    })
}