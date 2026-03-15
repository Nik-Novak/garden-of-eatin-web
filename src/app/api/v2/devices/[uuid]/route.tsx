import { createOrFindDevice } from "@/actions/device";
import { database } from "@/prisma/database";
import { AugmentedMeal, AugmentedMealDevice, MealInteractionStats } from "@/types/meal";
import { InteractionType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

type RouteContext = { params: Promise<{ uuid: string }> };

export async function GET(request: NextRequest, {params}: RouteContext) {
  const { uuid } = await params;
  console.log(`GET devices @ uuid=${uuid}`);
  // const device = await database.device.findFirst({where:{uuid}});
  const device = await createOrFindDevice(uuid, 
    {
      submitted_meals: {
        include: {
          // This automatically counts the related meal_search_hits for each meal
          _count: {
            select: { meal_search_hits: true } 
          }
        }
      }
    }
  );

  // 2. Get all meal IDs to use in a single interactionStats query
  const mealIds = device.submitted_meals.map(meal => meal.id);

  // 3. Query all interaction stats for ALL meals at once
  const allInteractionStats = await database.mealInteraction.groupBy({
    by: ['meal_id', 'interaction_type'],
    where: {
      meal_id: { in: mealIds }
    },
    _count: {
      _all: true
    }
  });

  // generates { [K in InteractionType]:number }
  const DEFAULT_STATS: MealInteractionStats = Object.values(InteractionType).reduce(
    (acc, key) => {
      acc[key as InteractionType] = 0;
      return acc;
    },
    {} as MealInteractionStats
  );

  // 4. Attach the stats and formatting in memory (No database calls here!)
  const formattedMeals:AugmentedMeal[] = device.submitted_meals.map(meal => {
    // 2. Find all records in the grouped data for this specific meal
    const mealStatsRows = allInteractionStats.filter(stat => stat.meal_id === meal.id);

    // 3. Build the interactionStats object
    const interactionStats: MealInteractionStats = {
      ...DEFAULT_STATS, // Start with zeros for everything
      ...mealStatsRows.reduce((acc, curr) => {
        // Map the enum value to the count
        acc[curr.interaction_type] = curr._count._all;
        return acc;
      }, DEFAULT_STATS)
    };
    
    return {
      ...meal,
      impressions: meal._count.meal_search_hits,
      interactionStats,
      _count: undefined // Optional: clean up the _count object before returning
    }
  });

  const responsePayload:AugmentedMealDevice = {
    ...device,
    submitted_meals: formattedMeals,
  }

  return NextResponse.json(responsePayload);
}