import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceMetadataCreateInputObjectSchema as DeviceMetadataCreateInputObjectSchema } from './DeviceMetadataCreateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => DeviceMetadataCreateInputObjectSchema).optional()
}).strict();
export const DeviceMetadataNullableCreateEnvelopeInputObjectSchema: z.ZodType<Prisma.DeviceMetadataNullableCreateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceMetadataNullableCreateEnvelopeInput>;
export const DeviceMetadataNullableCreateEnvelopeInputObjectZodSchema = makeSchema();
