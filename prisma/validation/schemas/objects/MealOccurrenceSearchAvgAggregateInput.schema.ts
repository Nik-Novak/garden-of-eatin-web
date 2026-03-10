import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  radius_mi: z.literal(true).optional()
}).strict();
export const MealOccurrenceSearchAvgAggregateInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchAvgAggregateInputType>;
export const MealOccurrenceSearchAvgAggregateInputObjectZodSchema = makeSchema();
