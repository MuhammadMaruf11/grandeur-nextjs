import { computerSystemData } from "@/allData/computerSystemData";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        computerSystemData
    })
}