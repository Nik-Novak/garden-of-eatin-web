import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  timezone: z.literal(true).optional(),
  service: z.literal(true).optional(),
  parking: z.literal(true).optional(),
  approved: z.literal(true).optional(),
  submitter_id: z.literal(true).optional(),
  submitter_name: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const MealMinAggregateInputObjectSchema: z.ZodType<Prisma.MealMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MealMinAggregateInputType>;
export const MealMinAggregateInputObjectZodSchema = makeSchema();
