import { database } from "@/prisma/database";
import { Notice } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


type RouteContext = { params: Promise<{ uuid: string }> };

export async function GET(request: NextRequest, {params}: RouteContext):Promise<NextResponse<Notice[]>> {
  const { uuid } = await params;
  console.log(`GET devices/${uuid}/notices`);
  const notices = await database.notice.findMany({
    orderBy: {
      updated_at: 'desc' // We can still let the DB pre-sort the dates
    }
  });

  // Map your severity levels to a numeric weight
  const severityWeights: Record<string, number> = {
    Error: 3,
    Warning: 2,
    Info: 1
  };

  // Sort the results in memory
  const sortedNotices = notices.sort((a, b) => {
    // 1. Sort by Severity (Higher weight comes first)
    if (severityWeights[a.level] !== severityWeights[b.level]) {
      return severityWeights[b.level] - severityWeights[a.level];
    }
    
    // 2. Fallback to updated_at if severities are identical 
    // (Prisma already did this, but this guarantees order if JS sort isn't completely stable)
    return b.updated_at.getTime() - a.updated_at.getTime();
  });

  return NextResponse.json(sortedNotices);
}