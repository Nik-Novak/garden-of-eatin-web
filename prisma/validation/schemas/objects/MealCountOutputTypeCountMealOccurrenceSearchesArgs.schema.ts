import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchWhereInputObjectSchema as MealOccurrenceSearchWhereInputObjectSchema } from './MealOccurrenceSearchWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealOccurrenceSearchWhereInputObjectSchema).optional()
}).strict();
export const MealCountOutputTypeCountMealOccurrenceSearchesArgsObjectSchema = makeSchema();
export const MealCountOutputTypeCountMealOccurrenceSearchesArgsObjectZodSchema = makeSchema();
