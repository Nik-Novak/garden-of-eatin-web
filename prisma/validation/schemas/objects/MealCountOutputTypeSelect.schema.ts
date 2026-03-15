import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealCountOutputTypeCountReviewsArgsObjectSchema as MealCountOutputTypeCountReviewsArgsObjectSchema } from './MealCountOutputTypeCountReviewsArgs.schema';
import { MealCountOutputTypeCountMealOccurrencesArgsObjectSchema as MealCountOutputTypeCountMealOccurrencesArgsObjectSchema } from './MealCountOutputTypeCountMealOccurrencesArgs.schema';
import { MealCountOutputTypeCountMealSearchHitsArgsObjectSchema as MealCountOutputTypeCountMealSearchHitsArgsObjectSchema } from './MealCountOutputTypeCountMealSearchHitsArgs.schema';
import { MealCountOutputTypeCountMealInteractionsArgsObjectSchema as MealCountOutputTypeCountMealInteractionsArgsObjectSchema } from './MealCountOutputTypeCountMealInteractionsArgs.schema'

const makeSchema = () => z.object({
  reviews: z.union([z.boolean(), z.lazy(() => MealCountOutputTypeCountReviewsArgsObjectSchema)]).optional(),
  meal_occurrences: z.union([z.boolean(), z.lazy(() => MealCountOutputTypeCountMealOccurrencesArgsObjectSchema)]).optional(),
  meal_search_hits: z.union([z.boolean(), z.lazy(() => MealCountOutputTypeCountMealSearchHitsArgsObjectSchema)]).optional(),
  meal_interactions: z.union([z.boolean(), z.lazy(() => MealCountOutputTypeCountMealInteractionsArgsObjectSchema)]).optional()
}).strict();
export const MealCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.MealCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.MealCountOutputTypeSelect>;
export const MealCountOutputTypeSelectObjectZodSchema = makeSchema();
