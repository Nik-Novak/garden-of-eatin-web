import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema'

const webdevicesettingswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WebDeviceSettingsWhereInputObjectSchema), z.lazy(() => WebDeviceSettingsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WebDeviceSettingsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WebDeviceSettingsWhereInputObjectSchema), z.lazy(() => WebDeviceSettingsWhereInputObjectSchema).array()]).optional(),
  dark_mode: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable()
}).strict();
export const WebDeviceSettingsWhereInputObjectSchema: z.ZodType<Prisma.WebDeviceSettingsWhereInput> = webdevicesettingswhereinputSchema as unknown as z.ZodType<Prisma.WebDeviceSettingsWhereInput>;
export const WebDeviceSettingsWhereInputObjectZodSchema = webdevicesettingswhereinputSchema;
