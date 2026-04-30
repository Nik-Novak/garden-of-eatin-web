import { database } from "@/prisma/database";
import { Prisma, QRAction } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

type RouteContext = { params: Promise<{ qr_code_id: string }> };

const QuerySchema = z.object({
  device_id: z.string({
    // In Zod 4, 'error' is the unified property for error customization
    error: (issue) => "device_id must be a valid string.",
  }).optional(),

  web_device_id: z.string({
    error: (issue) => "web_device_id must be a valid string.",
  }).optional(),
})
.superRefine((data, ctx) => {
  // Logic: If both are missing, add custom "required" errors to the paths
  if (data.device_id === undefined && data.web_device_id === undefined) {
    ctx.addIssue({
      code: 'custom',
      message: "device_id is required.",
      path: ["device_id"],
    });
    ctx.addIssue({
      code: 'custom',
      message: "web_device_id is required.",
      path: ["web_device_id"],
    });
  }
});

export async function GET(request: NextRequest, { params }: RouteContext) {

  //Route Params
  const { qr_code_id } = await params;
  console.log(`${request.method} qr-codes @ qr_code_id=${qr_code_id}`);
  if (!qr_code_id) {
    return NextResponse.json({ error: "Missing qr_code_id" }, { status: 400 });
  }

  //Search Params
  const rawParams = Object.fromEntries(request.nextUrl.searchParams);
  const validation = QuerySchema.safeParse(rawParams);
  if (!validation.success) {
    return NextResponse.json(
      { 
        error: "Invalid or missing parameters", 
        details: z.treeifyError(validation.error) 
      },
      { status: 400 }
    );
  }
  const { device_id, web_device_id } = validation.data;

  let qr = await database.qRCode.findById(qr_code_id);
  
  let qrScan = await database.qRScan.create({data:{
    qr_action: qr.action as Prisma.QRActionCreateInput,
    device_id,
    web_device_id,
    qr_code_id,
  }});

  return NextResponse.json(qrScan, {status:201});
}