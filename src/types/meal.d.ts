import { Meal } from "@/generated/prisma/client"
import { MealCreateInput } from "@/generated/prisma/models"

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