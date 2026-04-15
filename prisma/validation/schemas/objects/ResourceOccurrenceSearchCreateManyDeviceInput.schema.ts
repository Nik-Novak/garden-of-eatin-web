import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchTypeSchema } from '../enums/ResourceSearchType.schema';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  search_type: ResourceSearchTypeSchema,
  start: z.coerce.date().optional().nullable(),
  end: z.coerce.date().optional().nullable(),
  radius_mi: z.number(),
  user_location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional()
}).strict();
export const ResourceOccurrenceSearchCreateManyDeviceInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchCreateManyDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchCreateManyDeviceInput>;
export const ResourceOccurrenceSearchCreateManyDeviceInputObjectZodSchema = makeSchema();
