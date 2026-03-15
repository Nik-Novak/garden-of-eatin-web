import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  meal_id: z.string().max(24),
  search_id: z.string().max(24),
  created_at: z.coerce.date().optional()
}).strict();
export const MealSearchHitUncheckedCreateInputObjectSchema: z.ZodType<Prisma.MealSearchHitUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitUncheckedCreateInput>;
export const MealSearchHitUncheckedCreateInputObjectZodSchema = makeSchema();
