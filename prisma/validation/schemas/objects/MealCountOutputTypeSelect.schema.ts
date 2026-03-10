import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealCountOutputTypeCountReviewsArgsObjectSchema as MealCountOutputTypeCountReviewsArgsObjectSchema } from './MealCountOutputTypeCountReviewsArgs.schema';
import { MealCountOutputTypeCountMealOccurrencesArgsObjectSchema as MealCountOutputTypeCountMealOccurrencesArgsObjectSchema } from './MealCountOutputTypeCountMealOccurrencesArgs.schema';
import { MealCountOutputTypeCountMealOccurrenceSearchesArgsObjectSchema as MealCountOutputTypeCountMealOccurrenceSearchesArgsObjectSchema } from './MealCountOutputTypeCountMealOccurrenceSearchesArgs.schema'

const makeSchema = () => z.object({
  reviews: z.union([z.boolean(), z.lazy(() => MealCountOutputTypeCountReviewsArgsObjectSchema)]).optional(),
  meal_occurrences: z.union([z.boolean(), z.lazy(() => MealCountOutputTypeCountMealOccurrencesArgsObjectSchema)]).optional(),
  meal_occurrence_searches: z.union([z.boolean(), z.lazy(() => MealCountOutputTypeCountMealOccurrenceSearchesArgsObjectSchema)]).optional()
}).strict();
export const MealCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.MealCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.MealCountOutputTypeSelect>;
export const MealCountOutputTypeSelectObjectZodSchema = makeSchema();
