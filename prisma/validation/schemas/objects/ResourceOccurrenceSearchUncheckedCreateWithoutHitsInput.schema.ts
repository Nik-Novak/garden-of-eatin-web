import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchTypeSchema } from '../enums/ResourceSearchType.schema';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  search_type: ResourceSearchTypeSchema,
  start: z.coerce.date().optional().nullable(),
  end: z.coerce.date().optional().nullable(),
  radius_mi: z.number(),
  user_location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  device_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const ResourceOccurrenceSearchUncheckedCreateWithoutHitsInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchUncheckedCreateWithoutHitsInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchUncheckedCreateWithoutHitsInput>;
export const ResourceOccurrenceSearchUncheckedCreateWithoutHitsInputObjectZodSchema = makeSchema();
