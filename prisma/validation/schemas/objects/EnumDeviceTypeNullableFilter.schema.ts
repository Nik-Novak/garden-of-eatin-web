import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceTypeSchema } from '../enums/DeviceType.schema';
import { NestedEnumDeviceTypeNullableFilterObjectSchema as NestedEnumDeviceTypeNullableFilterObjectSchema } from './NestedEnumDeviceTypeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: DeviceTypeSchema.optional().nullable(),
  in: DeviceTypeSchema.array().optional().nullable(),
  notIn: DeviceTypeSchema.array().optional().nullable(),
  not: z.union([DeviceTypeSchema, z.lazy(() => NestedEnumDeviceTypeNullableFilterObjectSchema)]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();
export const EnumDeviceTypeNullableFilterObjectSchema: z.ZodType<Prisma.EnumDeviceTypeNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDeviceTypeNullableFilter>;
export const EnumDeviceTypeNullableFilterObjectZodSchema = makeSchema();
