import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  timezone: z.literal(true).optional(),
  setting: z.literal(true).optional(),
  service: z.literal(true).optional(),
  parking: z.literal(true).optional(),
  features: z.literal(true).optional(),
  approved: z.literal(true).optional(),
  submitter_id: z.literal(true).optional(),
  submitter_name: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const MealCountAggregateInputObjectSchema: z.ZodType<Prisma.MealCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MealCountAggregateInputType>;
export const MealCountAggregateInputObjectZodSchema = makeSchema();
