import { database } from "@/prisma/database";
import { AugmentedDeviceAgreement } from "@/types/agreements";
import { AgreementType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

type RouteContext = { params: Promise<{ uuid: string }> };

export async function GET(request: NextRequest, {params}:RouteContext):Promise<NextResponse<AugmentedDeviceAgreement[]>> {
  const {uuid} = await params;
  const latestDeviceAgreements = await Promise.all(
    Object.values(AgreementType).map(type =>
      database.deviceAgreement.findFirst({
        where: { agreement:{agreement_type: type}, device:{uuid} },
        orderBy: { agreement:{effective_date: "desc"} },
        include:{ agreement:true }
      })
    )
  );

  return NextResponse.json(latestDeviceAgreements.filter(Boolean) as AugmentedDeviceAgreement[]);
}