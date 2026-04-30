import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const webdevicescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WebDeviceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WebDeviceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WebDeviceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WebDeviceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WebDeviceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  uuid: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  device_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  user_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WebDeviceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WebDeviceScalarWhereWithAggregatesInput> = webdevicescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WebDeviceScalarWhereWithAggregatesInput>;
export const WebDeviceScalarWhereWithAggregatesInputObjectZodSchema = webdevicescalarwherewithaggregatesinputSchema;
