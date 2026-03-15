import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SearchTypeSchema } from '../enums/SearchType.schema';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { MealSearchHitUncheckedCreateNestedManyWithoutSearchInputObjectSchema as MealSearchHitUncheckedCreateNestedManyWithoutSearchInputObjectSchema } from './MealSearchHitUncheckedCreateNestedManyWithoutSearchInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  search_type: SearchTypeSchema,
  start: z.coerce.date().optional().nullable(),
  end: z.coerce.date().optional().nullable(),
  radius_mi: z.number(),
  user_location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  device_id: z.string().max(24),
  created_at: z.coerce.date().optional(),
  hits: z.lazy(() => MealSearchHitUncheckedCreateNestedManyWithoutSearchInputObjectSchema).optional()
}).strict();
export const MealOccurrenceSearchUncheckedCreateInputObjectSchema: z.ZodType<Prisma.MealOccurrenceSearchUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MealOccurrenceSearchUncheckedCreateInput>;
export const MealOccurrenceSearchUncheckedCreateInputObjectZodSchema = makeSchema();
