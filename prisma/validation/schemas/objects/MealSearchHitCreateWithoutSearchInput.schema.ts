import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealCreateNestedOneWithoutMeal_search_hitsInputObjectSchema as MealCreateNestedOneWithoutMeal_search_hitsInputObjectSchema } from './MealCreateNestedOneWithoutMeal_search_hitsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  created_at: z.coerce.date().optional(),
  meal: z.lazy(() => MealCreateNestedOneWithoutMeal_search_hitsInputObjectSchema)
}).strict();
export const MealSearchHitCreateWithoutSearchInputObjectSchema: z.ZodType<Prisma.MealSearchHitCreateWithoutSearchInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitCreateWithoutSearchInput>;
export const MealSearchHitCreateWithoutSearchInputObjectZodSchema = makeSchema();
