import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  search_id: z.string().max(24),
  created_at: z.coerce.date().optional()
}).strict();
export const MealSearchHitCreateManyMealInputObjectSchema: z.ZodType<Prisma.MealSearchHitCreateManyMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitCreateManyMealInput>;
export const MealSearchHitCreateManyMealInputObjectZodSchema = makeSchema();
