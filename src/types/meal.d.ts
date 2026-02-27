import { Meal } from "@prisma/client"
import { MealCreateInput } from "@prisma/client"

export type MealCreatePayload = {
  meal: MealCreateInput,
  device_uuid: string
}

/**
 * API return shape
 */
export type GeoMealOccurrence = MealOccurrence & {
  distance_miles: number;
  meal: Meal;
};