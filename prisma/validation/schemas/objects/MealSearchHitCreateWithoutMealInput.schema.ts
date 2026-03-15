import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MealOccurrenceSearchCreateNestedOneWithoutHitsInputObjectSchema as MealOccurrenceSearchCreateNestedOneWithoutHitsInputObjectSchema } from './MealOccurrenceSearchCreateNestedOneWithoutHitsInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  created_at: z.coerce.date().optional(),
  search: z.lazy(() => MealOccurrenceSearchCreateNestedOneWithoutHitsInputObjectSchema)
}).strict();
export const MealSearchHitCreateWithoutMealInputObjectSchema: z.ZodType<Prisma.MealSearchHitCreateWithoutMealInput> = makeSchema() as unknown as z.ZodType<Prisma.MealSearchHitCreateWithoutMealInput>;
export const MealSearchHitCreateWithoutMealInputObjectZodSchema = makeSchema();
