import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DeviceSettingsObjectEqualityInputObjectSchema as DeviceSettingsObjectEqualityInputObjectSchema } from './DeviceSettingsObjectEqualityInput.schema';
import { DeviceSettingsWhereInputObjectSchema as DeviceSettingsWhereInputObjectSchema } from './DeviceSettingsWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => DeviceSettingsObjectEqualityInputObjectSchema).optional().nullable(),
  is: z.lazy(() => DeviceSettingsWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => DeviceSettingsWhereInputObjectSchema).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();
export const DeviceSettingsNullableCompositeFilterObjectSchema: z.ZodType<Prisma.DeviceSettingsNullableCompositeFilter> = makeSchema() as unknown as z.ZodType<Prisma.DeviceSettingsNullableCompositeFilter>;
export const DeviceSettingsNullableCompositeFilterObjectZodSchema = makeSchema();
