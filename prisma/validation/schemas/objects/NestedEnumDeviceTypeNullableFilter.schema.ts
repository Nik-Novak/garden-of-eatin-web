import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceTypeSchema } from '../enums/DeviceType.schema'

const nestedenumdevicetypenullablefilterSchema = z.object({
  equals: DeviceTypeSchema.optional().nullable(),
  in: DeviceTypeSchema.array().optional().nullable(),
  notIn: DeviceTypeSchema.array().optional().nullable(),
  not: z.union([DeviceTypeSchema, z.lazy(() => NestedEnumDeviceTypeNullableFilterObjectSchema)]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();
export const NestedEnumDeviceTypeNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumDeviceTypeNullableFilter> = nestedenumdevicetypenullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumDeviceTypeNullableFilter>;
export const NestedEnumDeviceTypeNullableFilterObjectZodSchema = nestedenumdevicetypenullablefilterSchema;
