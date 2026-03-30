import { NextRequest, NextResponse } from "next/server";
// Adjust this path to wherever your script actually lives
import cronGenerateStats from "@/prisma/migrations/cron-generate-stats"; 

// Allow this function to run for up to 5 minutes (max for Vercel Pro)
// If you are on the Hobby plan, the max is 10 seconds.
export const maxDuration = 300; 

// Helper function to check authorization
function isAuthorized(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  // Vercel automatically sends the CRON_SECRET as a Bearer token
  return authHeader === `Bearer ${process.env.CRON_SECRET}`;
}

// GET handler for the Vercel Cron Job
export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    await cronGenerateStats();
    return NextResponse.json({ success: true, message: "Cron: Occurrences generated." });
  } catch (error) {
    console.error("Error in generate-occurrences cron:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

// POST handler for your manual programmatic triggers
export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  
  try {
    await cronGenerateStats();
    return NextResponse.json({ success: true, message: "Manual: Occurrences generated." });
  } catch (error) {
    console.error("Error in generate-occurrences manual trigger:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}