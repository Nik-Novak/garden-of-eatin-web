import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SearchTypeSchema } from '../enums/SearchType.schema';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { MealSearchHitCreateNestedManyWithoutSearchInputObjectSchema as MealSearchHitCreateNestedManyWithoutSearchInputObjectSchema } from './MealSearchHitCreateNestedManyWithoutSearchInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  search_type: SearchTypeSchema,
  start: z.coerce.date().optional().nullable(),
  end: z.coerce.date().optional().nullable(),
  radius_mi: z.number(),
  user_location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  hits: z.lazy(() => MealSearchHitCreateNestedManyWithoutSearchInputObjectSchema).optional()
}).strict();
export const MealOccurrenceSearchCreateWithoutDeviceInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchCreateWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchCreateWithoutDeviceInput>;
export const MealOccurrenceSearchCreateWithoutDeviceInputObjectZodSchema = makeSchema();
