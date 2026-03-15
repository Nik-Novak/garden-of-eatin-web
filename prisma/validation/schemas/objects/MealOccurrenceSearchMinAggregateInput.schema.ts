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
  updated_at: z.literal(true).optional()
}).strict();
export const MealOccurrenceSearchMinAggregateInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchMinAggregateInputType>;
export const MealOccurrenceSearchMinAggregateInputObjectZodSchema = makeSchema();
