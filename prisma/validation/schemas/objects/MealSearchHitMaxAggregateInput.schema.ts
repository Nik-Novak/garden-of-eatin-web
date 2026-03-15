import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  meal_id: z.literal(true).optional(),
  search_id: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const MealSearchHitMaxAggregateInputObjectSchema: z.ZodType<Prisma.MealSearchHitMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitMaxAggregateInputType>;
export const MealSearchHitMaxAggregateInputObjectZodSchema = makeSchema();
