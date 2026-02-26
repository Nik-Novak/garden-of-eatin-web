import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MealOccurrenceWhereInputObjectSchema as MealOccurrenceWhereInputObjectSchema } from './MealOccurrenceWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealOccurrenceWhereInputObjectSchema).optional()
}).strict();
export const MealCountOutputTypeCountMealOccurrencesArgsObjectSchema = makeSchema();
export const MealCountOutputTypeCountMealOccurrencesArgsObjectZodSchema = makeSchema();
