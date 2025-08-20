import { mobilePhonesData } from "@/allData/mobilePhonesData";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        mobilePhonesData
    })
}