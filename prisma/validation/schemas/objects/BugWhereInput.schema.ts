import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DeviceScalarRelationFilterObjectSchema as DeviceScalarRelationFilterObjectSchema } from './DeviceScalarRelationFilter.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const bugwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BugWhereInputObjectSchema), z.lazy(() => BugWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BugWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BugWhereInputObjectSchema), z.lazy(() => BugWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  client_log: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  server_log: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  device_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  device: z.union([z.lazy(() => DeviceScalarRelationFilterObjectSchema), z.lazy(() => DeviceWhereInputObjectSchema)]).optional()
}).strict();
export const BugWhereInputObjectSchema: z.ZodType<Prisma.BugWhereInput> = bugwhereinputSchema as unknown as z.ZodType<Prisma.BugWhereInput>;
export const BugWhereInputObjectZodSchema = bugwhereinputSchema;
