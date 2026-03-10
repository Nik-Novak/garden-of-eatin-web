import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SearchTypeSchema } from '../enums/SearchType.schema';
import { MealOccurrenceSearchCreatemeal_idsInputObjectSchema as MealOccurrenceSearchCreatemeal_idsInputObjectSchema } from './MealOccurrenceSearchCreatemeal_idsInput.schema';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  search_type: SearchTypeSchema,
  meal_ids: z.union([z.lazy(() => MealOccurrenceSearchCreatemeal_idsInputObjectSchema), z.string().array()]).optional(),
  start: z.coerce.date().optional().nullable(),
  end: z.coerce.date().optional().nullable(),
  radius_mi: z.number(),
  user_location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const MealOccurrenceSearchUncheckedCreateWithoutMealsInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchUncheckedCreateWithoutMealsInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUncheckedCreateWithoutMealsInput>;
export const MealOccurrenceSearchUncheckedCreateWithoutMealsInputObjectZodSchema = makeSchema();
