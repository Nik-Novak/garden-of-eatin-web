import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const devicescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DeviceScalarWhereInputObjectSchema), z.lazy(() => DeviceScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DeviceScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DeviceScalarWhereInputObjectSchema), z.lazy(() => DeviceScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  uuid: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DeviceScalarWhereInputObjectSchema: z.ZodType<Prisma.DeviceScalarWhereInput> = devicescalarwhereinputSchema as unknown as z.ZodType<Prisma.DeviceScalarWhereInput>;
export const DeviceScalarWhereInputObjectZodSchema = devicescalarwhereinputSchema;
