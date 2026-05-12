import { Device, InteractionType, Meal, Resource, ResourceOccurrence } from "@prisma/client"
import { Prisma, MealOccurrence } from "@prisma/client"
import { AugmentedMealDevice } from "./meal";


export type ResourceCreatePayload = {
  resource: Prisma.ResourceCreateInput,
  device_uuid: string
}

export type InteractionStats = {
  [K in InteractionType]: number;
};

export type AugmentedResource = Resource & {
  interactionStats?: InteractionStats,
  impressions?: number
};

/**
 * API return shape
 */
export type GeoResourceOccurrence = ResourceOccurrence & {
  distance_miles: number;
  resource: AugmentedResource;
};

export type AugmentedDevice = AugmentedMealDevice & {
  submitted_resources: AugmentedResource[]
}