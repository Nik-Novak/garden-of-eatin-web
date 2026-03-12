import { database } from "@/prisma/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log(`GET /agreements`);
  const agreements = await database.agreement.findMany();
  return NextResponse.json(agreements);
}