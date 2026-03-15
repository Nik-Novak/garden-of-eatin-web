import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceHardwareObjectEqualityInputObjectSchema as DeviceHardwareObjectEqualityInputObjectSchema } from './DeviceHardwareObjectEqualityInput.schema';
import { DeviceHardwareWhereInputObjectSchema as DeviceHardwareWhereInputObjectSchema } from './DeviceHardwareWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => DeviceHardwareObjectEqualityInputObjectSchema).optional().nullable(),
  is: z.lazy(() => DeviceHardwareWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => DeviceHardwareWhereInputObjectSchema).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();
export const DeviceHardwareNullableCompositeFilterObjectSchema: z.ZodType<Prisma.DeviceHardwareNullableCompositeFilter> = makeSchema() as unknown as z.ZodType<Prisma.DeviceHardwareNullableCompositeFilter>;
export const DeviceHardwareNullableCompositeFilterObjectZodSchema = makeSchema();
