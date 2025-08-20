import { wifiHotspotData } from "@/allData/wifiHotspotData";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        wifiHotspotData
    })
}