import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceMetadataCreateInputObjectSchema as DeviceMetadataCreateInputObjectSchema } from './DeviceMetadataCreateInput.schema';
import { DeviceMetadataUpdateInputObjectSchema as DeviceMetadataUpdateInputObjectSchema } from './DeviceMetadataUpdateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => DeviceMetadataCreateInputObjectSchema),
  update: z.lazy(() => DeviceMetadataUpdateInputObjectSchema)
}).strict();
export const DeviceMetadataUpsertInputObjectSchema: z.ZodType<Prisma.DeviceMetadataUpsertInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceMetadataUpsertInput>;
export const DeviceMetadataUpsertInputObjectZodSchema = makeSchema();
