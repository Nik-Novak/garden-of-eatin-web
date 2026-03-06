
//meal-occurrence.ts
import { database } from "@/prisma/database";
import { JsonObject } from "@prisma/client/runtime/library";
import { GeoMealOccurrence } from "@/types/meal";


const toMongoDate = (date: Date) => ({ $date: date.toISOString() });

/**
 * $runCommandRaw response wrapper
 */
export type RawResult<T> = {
  cursor: {
    firstBatch: T[];
    id: number;
  };
  ok: 1;
};

export type GetMealOccurrencesParams = {
  userLng: number;
  userLat: number;
  radiusMi?: number;
  start?: Date;
  end?: Date;
}

export async function getMealOccurrences({userLng, userLat, radiusMi=10, start, end}:GetMealOccurrencesParams):Promise<GeoMealOccurrence[]>{
  // const { database } = await import("@/prisma/database");
  console.log('IS SERVER:', typeof window === 'undefined');
  const isAllMode = !start && !end;
  const radiusMeters = radiusMi * 1609.34;
  /**
   * STEP 1: Prisma returns JsonObject → treat as unknown
   */
  console.log('Running query with params:', {userLng, userLat, radiusMeters, start, end});
  console.log('Current time:', new Date().toISOString());
  const pipeline: any[] = [
    {
      $geoNear: {
        key: "location",
        near: { type: "Point", coordinates: [userLng, userLat] },
        distanceField: "distance_miles",
        distanceMultiplier: 1 / 1609.34, //convert to Mi
        maxDistance: radiusMeters,
        spherical: true,
      },
    },
    // 1. Filter by date only if dates are provided
    {
      $match: {
        ...(start && { start: { $gte: toMongoDate(start) } }),
        ...(end && { end: { $lte: toMongoDate(end) } }),
      },
    },
    // 2. If "All" mode, collapse duplicates of the same meal
    ...(isAllMode ? [
      {
        $group: {
          _id: "$meal_id", // Unique by Meal ID
          doc: { $first: "$$ROOT" }
        }
      },
      { $replaceRoot: { newRoot: "$doc" } }
    ] : []),
    // 3. Attach Meal details
    {
      $lookup: {
        from: "meals",
        localField: "meal_id",
        foreignField: "_id",
        as: "meal",
      },
    },
    { $unwind: "$meal" },
    // 4. Final Sort (Grouping breaks the geoNear sort)
    { $sort: { distance_miles: 1 } }
  ];
  const rawUnknown = await database.$runCommandRaw({
    aggregate: "meal_occurrences",
    pipeline,
    cursor: {},
  });

  /**
   * STEP 2: Explicitly assert boundary type
   */
  const raw = rawUnknown as unknown as RawResult<JsonObject>;

  /**
   * Normalize Mongo `_id` → Prisma `id`
   */
  const formattedResults = raw.cursor.firstBatch.map(
    o=>database.mealOccurrence.convertRawJson(o) as GeoMealOccurrence
  );

  // console.log('formattedResults', formattedResults);

  return formattedResults;
}
