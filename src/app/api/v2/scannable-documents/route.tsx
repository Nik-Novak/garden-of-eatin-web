import { database } from "@/prisma/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let requestBody = await request.json() as unknown;
  let data = await database.scannableDocument.validate(requestBody);
  let qrCode = await database.scannableDocument.create({ data });
  return NextResponse.json(qrCode, {status:201});
}