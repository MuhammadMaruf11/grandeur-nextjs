import { servicesData } from "@/allData/servicesData";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        servicesData
    })
}