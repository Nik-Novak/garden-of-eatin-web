import { getRemoteSettings, updateRemoteSettings } from "@/actions/settings";
import { NextRequest, NextResponse } from "next/server";

type RouteContext = { params:Promise<{ uuid:string }>};

export async function GET(request: NextRequest, { params }: RouteContext) {
  const { uuid } = await params;
  console.log(`GET settings @ uuid=${uuid}`);
  const settings = await getRemoteSettings(uuid);
  return NextResponse.json(settings);
}

export async function PATCH(request: NextRequest, { params }: RouteContext) {
  const { uuid } = await params;
  const update = await request.json();
  console.log(`PATCH settings @ uuid=${uuid}, update=${JSON.stringify(update, null, 2)}`);
  let settings = await updateRemoteSettings(uuid, update);
  return NextResponse.json(settings);
}