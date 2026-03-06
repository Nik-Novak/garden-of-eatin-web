import { createOrFindDevice } from "@/actions/device";
import { NextRequest, NextResponse } from "next/server";

type RouteContext = { params: Promise<{ uuid: string }> };

export async function GET(request: NextRequest, {params}: RouteContext) {
  const { uuid } = await params;
  console.log(`GET devices @ uuid=${uuid}`);
  // const device = await database.device.findFirst({where:{uuid}});
  const device = await createOrFindDevice(uuid, {submitted_meals:true});
  return NextResponse.json(device);
}