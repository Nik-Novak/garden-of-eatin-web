import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { MealCountOutputTypeCountReviewsArgsObjectSchema as MealCountOutputTypeCountReviewsArgsObjectSchema } from './MealCountOutputTypeCountReviewsArgs.schema';
import { MealCountOutputTypeCountMealOccurrencesArgsObjectSchema as MealCountOutputTypeCountMealOccurrencesArgsObjectSchema } from './MealCountOutputTypeCountMealOccurrencesArgs.schema'

const makeSchema = () => z.object({
  reviews: z.union([z.boolean(), z.lazy(() => MealCountOutputTypeCountReviewsArgsObjectSchema)]).optional(),
  meal_occurrences: z.union([z.boolean(), z.lazy(() => MealCountOutputTypeCountMealOccurrencesArgsObjectSchema)]).optional()
}).strict();
export const MealCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.MealCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.MealCountOutputTypeSelect>;
export const MealCountOutputTypeSelectObjectZodSchema = makeSchema();
