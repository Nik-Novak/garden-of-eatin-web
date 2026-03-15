import { Device, InteractionType, Meal } from "@prisma/client"
import { Prisma, MealOccurrence } from "@prisma/client"

export type MealCreatePayload = {
  meal: Prisma.MealCreateInput,
  device_uuid: string
}

export type MealInteractionStats = {
  [K in InteractionType]: number;
};

export type AugmentedMeal = Meal & {
  interactionStats?: MealInteractionStats,
  impressions?: number
};

/**
 * API return shape
 */
export type GeoMealOccurrence = MealOccurrence & {
  distance_miles: number;
  meal: Meal;
};

export type AugmentedMealDevice = Prisma.DeviceGetPayload<{ include:{submitted_meals:true} }> & {
  submitted_meals: AugmentedMeal[]
}