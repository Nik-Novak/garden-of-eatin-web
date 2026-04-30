import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceMetadataCreateInputObjectSchema as WebDeviceMetadataCreateInputObjectSchema } from './WebDeviceMetadataCreateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => WebDeviceMetadataCreateInputObjectSchema).optional()
}).strict();
export const WebDeviceMetadataNullableCreateEnvelopeInputObjectSchema: z.ZodType<Prisma.WebDeviceMetadataNullableCreateEnvelopeInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceMetadataNullableCreateEnvelopeInput>;
export const WebDeviceMetadataNullableCreateEnvelopeInputObjectZodSchema = makeSchema();
