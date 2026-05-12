import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  start: z.coerce.date(),
  end: z.coerce.date(),
  timezone: z.string(),
  location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional()
}).strict();
export const ResourceOccurrenceCreateWithoutResourceInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceCreateWithoutResourceInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceCreateWithoutResourceInput>;
export const ResourceOccurrenceCreateWithoutResourceInputObjectZodSchema = makeSchema();
