import { itInfrastructureData } from "@/allData/itInfrastructureData";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        itInfrastructureData
    })
}