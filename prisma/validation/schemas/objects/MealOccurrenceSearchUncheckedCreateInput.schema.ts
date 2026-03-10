import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SearchTypeSchema } from '../enums/SearchType.schema';
import { MealOccurrenceSearchCreatemeal_idsInputObjectSchema as MealOccurrenceSearchCreatemeal_idsInputObjectSchema } from './MealOccurrenceSearchCreatemeal_idsInput.schema';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { MealUncheckedCreateNestedManyWithoutMeal_occurrence_searchesInputObjectSchema as MealUncheckedCreateNestedManyWithoutMeal_occurrence_searchesInputObjectSchema } from './MealUncheckedCreateNestedManyWithoutMeal_occurrence_searchesInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  search_type: SearchTypeSchema,
  meal_ids: z.union([z.lazy(() => MealOccurrenceSearchCreatemeal_idsInputObjectSchema), z.string().max(24).array()]).optional(),
  start: z.coerce.date().optional().nullable(),
  end: z.coerce.date().optional().nullable(),
  radius_mi: z.number(),
  user_location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  meals: z.lazy(() => MealUncheckedCreateNestedManyWithoutMeal_occurrence_searchesInputObjectSchema).optional()
}).strict();
export const MealOccurrenceSearchUncheckedCreateInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUncheckedCreateInput>;
export const MealOccurrenceSearchUncheckedCreateInputObjectZodSchema = makeSchema();
