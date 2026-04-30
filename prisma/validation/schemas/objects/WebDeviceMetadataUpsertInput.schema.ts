import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceMetadataCreateInputObjectSchema as WebDeviceMetadataCreateInputObjectSchema } from './WebDeviceMetadataCreateInput.schema';
import { WebDeviceMetadataUpdateInputObjectSchema as WebDeviceMetadataUpdateInputObjectSchema } from './WebDeviceMetadataUpdateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => WebDeviceMetadataCreateInputObjectSchema),
  update: z.lazy(() => WebDeviceMetadataUpdateInputObjectSchema)
}).strict();
export const WebDeviceMetadataUpsertInputObjectSchema: z.ZodType<Prisma.WebDeviceMetadataUpsertInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceMetadataUpsertInput>;
export const WebDeviceMetadataUpsertInputObjectZodSchema = makeSchema();
