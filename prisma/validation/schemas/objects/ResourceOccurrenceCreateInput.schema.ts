import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { ResourceCreateNestedOneWithoutResource_occurrencesInputObjectSchema as ResourceCreateNestedOneWithoutResource_occurrencesInputObjectSchema } from './ResourceCreateNestedOneWithoutResource_occurrencesInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  start: z.coerce.date(),
  end: z.coerce.date(),
  timezone: z.string(),
  location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  created_at: z.coerce.date().optional(),
  resource: z.lazy(() => ResourceCreateNestedOneWithoutResource_occurrencesInputObjectSchema)
}).strict();
export const ResourceOccurrenceCreateInputObjectSchema: z.ZodType<Prisma.ResourceOccurrenceCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceCreateInput>;
export const ResourceOccurrenceCreateInputObjectZodSchema = makeSchema();
