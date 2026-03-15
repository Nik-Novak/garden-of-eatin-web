import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  search_type: z.literal(true).optional(),
  start: z.literal(true).optional(),
  end: z.literal(true).optional(),
  radius_mi: z.literal(true).optional(),
  device_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const MealOccurrenceSearchCountAggregateInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchCountAggregateInputType>;
export const MealOccurrenceSearchCountAggregateInputObjectZodSchema = makeSchema();
