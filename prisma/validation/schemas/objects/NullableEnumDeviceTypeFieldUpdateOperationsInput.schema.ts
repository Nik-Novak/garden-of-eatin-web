import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceTypeSchema } from '../enums/DeviceType.schema'

const makeSchema = () => z.object({
  set: DeviceTypeSchema.optional(),
  unset: z.boolean().optional()
}).strict();
export const NullableEnumDeviceTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumDeviceTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumDeviceTypeFieldUpdateOperationsInput>;
export const NullableEnumDeviceTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
