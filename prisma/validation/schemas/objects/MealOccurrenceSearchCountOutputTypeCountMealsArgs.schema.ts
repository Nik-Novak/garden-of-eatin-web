import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealWhereInputObjectSchema as MealWhereInputObjectSchema } from './MealWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealWhereInputObjectSchema).optional()
}).strict();
export const MealOccurrenceSearchCountOutputTypeCountMealsArgsObjectSchema = makeSchema();
export const MealOccurrenceSearchCountOutputTypeCountMealsArgsObjectZodSchema = makeSchema();
