import { createOrFindDevice } from "@/actions/device";
import { database } from "@/prisma/database";
import { AugmentedDeviceAgreement } from "@/types/agreements";
import { DeviceAgreement } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

type RouteContext = { params: Promise<{ uuid: string }> };

export async function GET(request: NextRequest, {params}: RouteContext):Promise<NextResponse<AugmentedDeviceAgreement[]>> {
  const { uuid } = await params;
  console.log(`GET devices/${uuid}/agreements`);
  const agreements = await database.deviceAgreement.findMany({where:{device:{uuid}}, include:{agreement:true}})
  return NextResponse.json(agreements);
}

export async function POST(request: NextRequest, {params}: RouteContext):Promise<NextResponse<AugmentedDeviceAgreement>> {
  const { uuid } = await params;
  console.log(`POST devices/${uuid}/agreements`);
  const body = await request.json();
  let deviceAgreementInput = await database.deviceAgreement.validate(body);
  let deviceAgreement = await database.deviceAgreement.create({data:deviceAgreementInput, include:{agreement:true}});
  return NextResponse.json(deviceAgreement);
}