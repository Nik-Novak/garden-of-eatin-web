import { database } from "@/prisma/database";
import { NextRequest, NextResponse } from "next/server";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, { params }: RouteContext) {
  const { id } = await params;
  console.log(`${request.method} qr-codes @ id=${id}`);

  if (!id) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 });
  }
  
  let result = await database.qRCode.findById(id);
  return NextResponse.json(result);
}