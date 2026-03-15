import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  interaction_type: z.literal(true).optional(),
  meal_id: z.literal(true).optional(),
  device_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const MealInteractionCountAggregateInputObjectSchema: z.ZodType<Prisma.MealInteractionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MealInteractionCountAggregateInputType>;
export const MealInteractionCountAggregateInputObjectZodSchema = makeSchema();
