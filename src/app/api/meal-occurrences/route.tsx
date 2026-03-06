import { database } from "@/prisma/database";
import spacetime from 'spacetime';
import { JsonObject } from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const toMongoDate = (date: Date) => ({ $date: date.toISOString() });

export type RawResult<T> = {
  cursor: {
    firstBatch: T[];
    id: number;
  };
  ok: 1;
};

// 1. Schema requires radius_mi again
const QuerySchema = z.object({
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  
  user_lat: z.coerce.number({
    error: (issue) => 
      issue.input === undefined 
        ? "user_lat is required." 
        : "user_lat must be a valid number.",
  }),
  
  user_lng: z.coerce.number({
    error: (issue) => 
      issue.input === undefined 
        ? "user_lng is required." 
        : "user_lng must be a valid number.",
  }),
  
  radius_mi: z.coerce.number({
    error: (issue) => 
      issue.input === undefined 
        ? "radius_mi is required." 
        : "radius_mi must be a valid number.",
  }).positive({ error: "radius_mi must be greater than 0." }),
});

export async function GET(request: NextRequest) {
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

  // 2. Keep the extracted variables in snake_case
  const { user_lat, user_lng, radius_mi, start_date, end_date } = validation.data;

  // 3. Switch internal variables to snake_case to match
  const isAllMode = !start_date && !end_date;
  const start = start_date ? spacetime(start_date).toNativeDate() : undefined;
  const end = end_date ? spacetime(end_date).toNativeDate() : undefined;

  const radius_meters = radius_mi * 1609.34;

  try {
    console.log('Running query with params:', validation.data);
    console.log('Current time:', spacetime().iso());
    
    // Note: The database fields 'start' and 'end' remain standard to match your MongoDB schema
    const pipeline: any[] = [
      {
        $geoNear: {
          key: "location",
          near: { type: "Point", coordinates: [user_lng, user_lat] },
          distanceField: "distance_miles",
          distanceMultiplier: 1 / 1609.34,
          maxDistance: radius_meters,
          spherical: true,
          query: { 
            ...(start && { start: { $gte: toMongoDate(start) } }),
            ...(end && { end: { $lte: toMongoDate(end) } }),
          }
        },
      },
      ...(isAllMode ? [
        {
          $group: {
            _id: "$meal_id",
            doc: { 
              $top: { 
                output: "$$ROOT",   
                sortBy: { start: 1 } 
              } 
            }
          }
        },
        { $replaceRoot: { newRoot: "$doc" } }
      ] : []),
      {
        $lookup: {
          from: "meals",
          localField: "meal_id",
          foreignField: "_id",
          as: "meal",
        },
      },
      { $unwind: "$meal" },
      { $sort: { distance_miles: 1 } }
    ];
    
    const rawUnknown = await database.$runCommandRaw({
      aggregate: "meal_occurrences",
      pipeline,
      cursor: {},
    });

    const raw = rawUnknown as unknown as RawResult<JsonObject>;

    const formattedResults = raw.cursor.firstBatch.map(
      o => database.mealOccurrence.convertRawJson(o)
    );

    return NextResponse.json(formattedResults);
    
  } catch (err) {
    console.error("Error fetching meal occurrences:", err);
    return NextResponse.json(
      { error: "Failed to fetch meal occurrences" },
      { status: 500 }
    );
  }
}