import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealSearchHitWhereInputObjectSchema as MealSearchHitWhereInputObjectSchema } from './MealSearchHitWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MealSearchHitWhereInputObjectSchema).optional()
}).strict();
export const MealOccurrenceSearchCountOutputTypeCountHitsArgsObjectSchema = makeSchema();
export const MealOccurrenceSearchCountOutputTypeCountHitsArgsObjectZodSchema = makeSchema();
