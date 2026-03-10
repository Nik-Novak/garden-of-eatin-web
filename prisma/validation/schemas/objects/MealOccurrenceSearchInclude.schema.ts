import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealFindManySchema as MealFindManySchema } from '../findManyMeal.schema';
import { MealOccurrenceSearchCountOutputTypeArgsObjectSchema as MealOccurrenceSearchCountOutputTypeArgsObjectSchema } from './MealOccurrenceSearchCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  meals: z.union([z.boolean(), z.lazy(() => MealFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MealOccurrenceSearchCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MealOccurrenceSearchIncludeObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchInclude> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchInclude>;
export const MealOccurrenceSearchIncludeObjectZodSchema = makeSchema();
