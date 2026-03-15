import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SearchTypeSchema } from '../enums/SearchType.schema';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { MealSearchHitUncheckedCreateNestedManyWithoutSearchInputObjectSchema as MealSearchHitUncheckedCreateNestedManyWithoutSearchInputObjectSchema } from './MealSearchHitUncheckedCreateNestedManyWithoutSearchInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  search_type: SearchTypeSchema,
  start: z.coerce.date().optional().nullable(),
  end: z.coerce.date().optional().nullable(),
  radius_mi: z.number(),
  user_location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  hits: z.lazy(() => MealSearchHitUncheckedCreateNestedManyWithoutSearchInputObjectSchema).optional()
}).strict();
export const MealOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchUncheckedCreateWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUncheckedCreateWithoutDeviceInput>;
export const MealOccurrenceSearchUncheckedCreateWithoutDeviceInputObjectZodSchema = makeSchema();
