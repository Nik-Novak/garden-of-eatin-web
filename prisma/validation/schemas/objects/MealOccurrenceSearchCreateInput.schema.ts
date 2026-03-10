import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SearchTypeSchema } from '../enums/SearchType.schema';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { MealCreateNestedManyWithoutMeal_occurrence_searchesInputObjectSchema as MealCreateNestedManyWithoutMeal_occurrence_searchesInputObjectSchema } from './MealCreateNestedManyWithoutMeal_occurrence_searchesInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  search_type: SearchTypeSchema,
  start: z.coerce.date().optional().nullable(),
  end: z.coerce.date().optional().nullable(),
  radius_mi: z.number(),
  user_location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  meals: z.lazy(() => MealCreateNestedManyWithoutMeal_occurrence_searchesInputObjectSchema).optional()
}).strict();
export const MealOccurrenceSearchCreateInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchCreateInput>;
export const MealOccurrenceSearchCreateInputObjectZodSchema = makeSchema();
