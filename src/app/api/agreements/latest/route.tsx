import { database } from "@/prisma/database";
import { AgreementType } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const agreements = await Promise.all(
    Object.values(AgreementType).map(type =>
      database.agreement.findFirst({
        where: { agreement_type: type },
        orderBy: { effective_date: "desc" }
      })
    )
  );

  return NextResponse.json(agreements.filter(Boolean));
}