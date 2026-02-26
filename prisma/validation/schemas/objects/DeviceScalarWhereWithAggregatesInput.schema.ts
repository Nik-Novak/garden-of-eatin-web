import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const devicescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DeviceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DeviceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DeviceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DeviceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DeviceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  uuid: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DeviceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DeviceScalarWhereWithAggregatesInput> = devicescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DeviceScalarWhereWithAggregatesInput>;
export const DeviceScalarWhereWithAggregatesInputObjectZodSchema = devicescalarwherewithaggregatesinputSchema;
