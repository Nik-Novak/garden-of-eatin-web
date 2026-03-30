// app/api/revalidate/route.ts
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Define the schema
const RevalidateSchema = z.object({
  path: z.string().min(1, "Path is required"),
  type: z.enum(["page", "layout"]).optional(),
});

function isAuthorized(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  return authHeader === `Bearer ${process.env.CRON_SECRET}`;
}

export async function POST(request: NextRequest) {
  // 1. Authorization Check
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: "Invalid authorization" }, { status: 401 });
  }

  try {
    // 2. Parse and Validate the Body
    const body = await request.json();
    const result = RevalidateSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { message: "Invalid request body", errors: z.treeifyError(result.error) },
        { status: 400 }
      );
    }

    const { path, type } = result.data;

    console.log(`POST /revalidate @ ${JSON.stringify(result.data)}`);

    // 3. Execute Revalidation
    // Next.js handles the cache purging instantly on the edge
    revalidatePath(path, type);

    return NextResponse.json({
      revalidated: true,
      path,
      type: type ?? "page",
      now: Date.now(),
    });
  } catch (err) {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}