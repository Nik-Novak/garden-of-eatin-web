import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealCreateNestedOneWithoutMeal_search_hitsInputObjectSchema as MealCreateNestedOneWithoutMeal_search_hitsInputObjectSchema } from './MealCreateNestedOneWithoutMeal_search_hitsInput.schema';
import { MealOccurrenceSearchCreateNestedOneWithoutHitsInputObjectSchema as MealOccurrenceSearchCreateNestedOneWithoutHitsInputObjectSchema } from './MealOccurrenceSearchCreateNestedOneWithoutHitsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  created_at: z.coerce.date().optional(),
  meal: z.lazy(() => MealCreateNestedOneWithoutMeal_search_hitsInputObjectSchema),
  search: z.lazy(() => MealOccurrenceSearchCreateNestedOneWithoutHitsInputObjectSchema)
}).strict();
export const MealSearchHitCreateInputObjectSchema: z.ZodType<Prisma.MealSearchHitCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitCreateInput>;
export const MealSearchHitCreateInputObjectZodSchema = makeSchema();
