import { database } from "@/prisma/database";
import { decodeQueryParam } from "@/utils/fns/request";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const QuerySchema = z.object({
  meal_ids: z.array(z.string()).optional()
});

export async function GET(request: NextRequest) {
  const {searchParams} = request.nextUrl;
  const rawParams = decodeQueryParam(searchParams.get("q"));
  console.log('rawParams', rawParams);
  const validation = QuerySchema.safeParse(rawParams);
  if (!validation.success) {
    let err = { 
        error: "Invalid or missing parameters", 
        details: z.treeifyError(validation.error) 
    };
    console.error(JSON.stringify(err));
    return NextResponse.json(
      err,
      { status: 400 }
    );
  }

  const { meal_ids } = validation.data;
  const searches = await database.mealOccurrenceSearch.findMany({where:{hits:{some:{meal_id:{in:meal_ids}}}}});
  
  return NextResponse.json(searches);
}