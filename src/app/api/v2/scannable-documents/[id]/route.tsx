import { database } from "@/prisma/database";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, { params }: RouteContext) {
  const { id } = await params;
  console.log(`${request.method} scannable-documents @ id=${id}`);

  if (!id) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 });
  }
  
  let result = await database.scannableDocument.findById(id);
  return NextResponse.json(result);
}

export async function PATCH(request: NextRequest, { params }: RouteContext) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 });
  }
  const update = (await request.json()) as Prisma.ScannableDocumentUpdateInput;

  console.log(`${request.method} scannable-documents @ id=${id}, update=${JSON.stringify(update, null, 2)}`);
  
  let updated = await database.scannableDocument.updateById(id, {data:update});
  
  return Response.json(updated);


}