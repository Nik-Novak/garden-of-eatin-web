import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  meal_id: z.string().max(24),
  search_id: z.string().max(24),
  created_at: z.coerce.date().optional()
}).strict();
export const MealSearchHitCreateManyInputObjectSchema: z.ZodType<Prisma.MealSearchHitCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitCreateManyInput>;
export const MealSearchHitCreateManyInputObjectZodSchema = makeSchema();
