import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  meal_id: z.string().max(24),
  created_at: z.coerce.date().optional()
}).strict();
export const MealSearchHitCreateManySearchInputObjectSchema: z.ZodType<Prisma.MealSearchHitCreateManySearchInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitCreateManySearchInput>;
export const MealSearchHitCreateManySearchInputObjectZodSchema = makeSchema();
