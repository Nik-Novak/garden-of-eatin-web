import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchCountOutputTypeCountMealsArgsObjectSchema as MealOccurrenceSearchCountOutputTypeCountMealsArgsObjectSchema } from './MealOccurrenceSearchCountOutputTypeCountMealsArgs.schema'

const makeSchema = () => z.object({
  meals: z.union([z.boolean(), z.lazy(() => MealOccurrenceSearchCountOutputTypeCountMealsArgsObjectSchema)]).optional()
}).strict();
export const MealOccurrenceSearchCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchCountOutputTypeSelect>;
export const MealOccurrenceSearchCountOutputTypeSelectObjectZodSchema = makeSchema();
