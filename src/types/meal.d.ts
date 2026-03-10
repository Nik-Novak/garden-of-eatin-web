import { Meal } from "@prisma/client"
import { Prisma, MealOccurrence } from "@prisma/client"

export type MealCreatePayload = {
  meal: Prisma.MealCreateInput,
  device_uuid: string
}

/**
 * API return shape
 */
export type GeoMealOccurrence = MealOccurrence & {
  distance_miles: number;
  meal: Meal;
};