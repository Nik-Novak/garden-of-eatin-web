import { database } from "@/prisma/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let requestBody = await request.json() as unknown;
  if(!Array.isArray(requestBody)){
    return NextResponse.json({ error: "Expected an array of objects" }, { status: 400 });
  }
  let data = await database.scannableDocument.validateMany(requestBody);
  let result = await database.scannableDocument.createMany({data});
  return NextResponse.json({ count: result.count }, { status: 201 })
}