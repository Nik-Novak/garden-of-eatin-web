import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WebDeviceSettingsObjectEqualityInputObjectSchema as WebDeviceSettingsObjectEqualityInputObjectSchema } from './WebDeviceSettingsObjectEqualityInput.schema';
import { WebDeviceSettingsWhereInputObjectSchema as WebDeviceSettingsWhereInputObjectSchema } from './WebDeviceSettingsWhereInput.schema'

const makeSchema = () => z.object({
  equals: z.lazy(() => WebDeviceSettingsObjectEqualityInputObjectSchema).optional(),
  is: z.lazy(() => WebDeviceSettingsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => WebDeviceSettingsWhereInputObjectSchema).optional()
}).strict();
export const WebDeviceSettingsCompositeFilterObjectSchema: z.ZodType<Prisma.WebDeviceSettingsCompositeFilter> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceSettingsCompositeFilter>;
export const WebDeviceSettingsCompositeFilterObjectZodSchema = makeSchema();
