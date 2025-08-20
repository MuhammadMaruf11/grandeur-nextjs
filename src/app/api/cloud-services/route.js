import { cloudServiceData } from "@/allData/cloudServiceData";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        cloudServiceData
    })
}