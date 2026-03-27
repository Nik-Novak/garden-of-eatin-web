import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceMetadataCreateInputObjectSchema as DeviceMetadataCreateInputObjectSchema } from './DeviceMetadataCreateInput.schema';
import { DeviceMetadataUpsertInputObjectSchema as DeviceMetadataUpsertInputObjectSchema } from './DeviceMetadataUpsertInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => DeviceMetadataCreateInputObjectSchema).optional(),
  upsert: z.lazy(() => DeviceMetadataUpsertInputObjectSchema).optional(),
  unset: z.boolean().optional()
}).strict();
export const DeviceMetadataNullableUpdateEnvelopeInputObjectSchema: z.ZodType<Prisma.DeviceMetadataNullableUpdateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceMetadataNullableUpdateEnvelopeInput>;
export const DeviceMetadataNullableUpdateEnvelopeInputObjectZodSchema = makeSchema();
