import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { DeviceSettingsObjectEqualityInputObjectSchema as DeviceSettingsObjectEqualityInputObjectSchema } from './DeviceSettingsObjectEqualityInput.schema';
import { DeviceSettingsWhereInputObjectSchema as DeviceSettingsWhereInputObjectSchema } from './DeviceSettingsWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => DeviceSettingsObjectEqualityInputObjectSchema).optional(),
  is: z.lazy(() => DeviceSettingsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => DeviceSettingsWhereInputObjectSchema).optional()
}).strict();
export const DeviceSettingsCompositeFilterObjectSchema: z.ZodType<Prisma.DeviceSettingsCompositeFilter> = makeSchema() as unknown as z.ZodType<Prisma.DeviceSettingsCompositeFilter>;
export const DeviceSettingsCompositeFilterObjectZodSchema = makeSchema();
