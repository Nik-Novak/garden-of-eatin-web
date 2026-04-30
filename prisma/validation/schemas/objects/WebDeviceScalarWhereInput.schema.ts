import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const webdevicescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WebDeviceScalarWhereInputObjectSchema), z.lazy(() => WebDeviceScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WebDeviceScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WebDeviceScalarWhereInputObjectSchema), z.lazy(() => WebDeviceScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  uuid: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  device_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  user_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WebDeviceScalarWhereInputObjectSchema: z.ZodType<Prisma.WebDeviceScalarWhereInput> = webdevicescalarwhereinputSchema as unknown as z.ZodType<Prisma.WebDeviceScalarWhereInput>;
export const WebDeviceScalarWhereInputObjectZodSchema = webdevicescalarwhereinputSchema;
