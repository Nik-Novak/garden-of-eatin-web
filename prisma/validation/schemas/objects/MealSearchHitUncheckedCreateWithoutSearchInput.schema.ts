import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  meal_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const MealSearchHitUncheckedCreateWithoutSearchInputObjectSchema: z.ZodType<Prisma.MealSearchHitUncheckedCreateWithoutSearchInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitUncheckedCreateWithoutSearchInput>;
export const MealSearchHitUncheckedCreateWithoutSearchInputObjectZodSchema = makeSchema();
