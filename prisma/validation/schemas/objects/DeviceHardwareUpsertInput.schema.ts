import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceHardwareCreateInputObjectSchema as DeviceHardwareCreateInputObjectSchema } from './DeviceHardwareCreateInput.schema';
import { DeviceHardwareUpdateInputObjectSchema as DeviceHardwareUpdateInputObjectSchema } from './DeviceHardwareUpdateInput.schema'

const makeSchema = () => z.object({
  set: z.lazy(() => DeviceHardwareCreateInputObjectSchema),
  update: z.lazy(() => DeviceHardwareUpdateInputObjectSchema)
}).strict();
export const DeviceHardwareUpsertInputObjectSchema: z.ZodType<Prisma.DeviceHardwareUpsertInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceHardwareUpsertInput>;
export const DeviceHardwareUpsertInputObjectZodSchema = makeSchema();
