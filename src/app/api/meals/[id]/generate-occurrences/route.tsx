import { NextRequest } from "next/server";
import { database } from "@/prisma/database";
import { GeoMealOccurrence } from "@/types/meal";
import { getDistanceInMiles, mealOccurrences } from "@/utils/fns/meal-occurrences";
import spacetime from "spacetime";
import { v4 as uuidv4 } from 'uuid';
import { z } from "zod"; // 1. Import Zod

// 2. Define the exact schema and custom error messages
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

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, { params }: RouteContext) {
  const { id } = await params;

  if (!id) {
    return Response.json({ error: "Missing Meal ID" }, { status: 400 });
  }

  // 3. Convert the searchParams map into a standard JavaScript object
  const rawParams = Object.fromEntries(request.nextUrl.searchParams);
  
  // 4. Safely parse the object against our schema
  const validation = QuerySchema.safeParse(rawParams);

  // 5. If validation fails, return the detailed field errors immediately
  if (!validation.success) {
    return Response.json(
      { 
        error: "Invalid or missing parameters", 
        details: z.treeifyError(validation.error)
      }, 
      { status: 400 }
    );
  }

  // 6. Destructure the safely typed, converted, and validated data!
  const { start_date, end_date, user_lat, user_lng, radius_mi } = validation.data;

  const meal = await database.meal.findUnique({
    where: { id },
  });

  if (!meal) {
    return Response.json({ error: `id ${id} not found` }, { status: 404 });
  }

  let windowStart = start_date ? spacetime(start_date).toNativeDate() : spacetime().subtract(2, 'days').toNativeDate();
  let windowEnd = end_date ? spacetime(end_date).toNativeDate() : spacetime().add(45, 'days').toNativeDate();
  
  let localOccurrences = mealOccurrences({ meal, windowStart, windowEnd });
  const [mealLng, mealLat] = meal.location.coordinates;
  
  let distance_miles = getDistanceInMiles(user_lat, user_lng, mealLat, mealLng);
  
  if (distance_miles > radius_mi) {
    return Response.json([], { status: 200 });
  }
    
  let localGeoOcc: GeoMealOccurrence[] = localOccurrences.map(o => ({ 
    ...o, 
    distance_miles, 
    meal, 
    id: 'local://' + uuidv4() 
  }));

  if (start_date && end_date) { 
    return Response.json(localGeoOcc, { status: 200 });
  } else { 
    return Response.json(localGeoOcc[0] ? [localGeoOcc[0]] : [], { status: 200 });
  }
}