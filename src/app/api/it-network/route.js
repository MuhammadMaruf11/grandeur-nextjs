import { itNetworkServiceData } from "@/allData/itNetworkServiceData";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        itNetworkServiceData
    })
}