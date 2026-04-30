import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceMetadataCreateInputObjectSchema as WebDeviceMetadataCreateInputObjectSchema } from './WebDeviceMetadataCreateInput.schema';
import { WebDeviceMetadataUpsertInputObjectSchema as WebDeviceMetadataUpsertInputObjectSchema } from './WebDeviceMetadataUpsertInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => WebDeviceMetadataCreateInputObjectSchema).optional(),
  upsert: z.lazy(() => WebDeviceMetadataUpsertInputObjectSchema).optional(),
  unset: z.boolean().optional()
}).strict();
export const WebDeviceMetadataNullableUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.WebDeviceMetadataNullableUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceMetadataNullableUpdateEnvelopeInput>;
export const WebDeviceMetadataNullableUpdateEnvelopeInputObjectZodSchema = makeSchema();
