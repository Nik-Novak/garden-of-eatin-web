import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  meal_id: z.literal(true).optional(),
  start: z.literal(true).optional(),
  end: z.literal(true).optional(),
  timezone: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const MealOccurrenceCountAggregateInputObjectSchema: z.ZodType<Prisma.MealOccurrenceCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceCountAggregateInputType>;
export const MealOccurrenceCountAggregateInputObjectZodSchema = makeSchema();
