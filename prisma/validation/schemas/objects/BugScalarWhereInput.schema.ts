import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const bugscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BugScalarWhereInputObjectSchema), z.lazy(() => BugScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BugScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BugScalarWhereInputObjectSchema), z.lazy(() => BugScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  client_log: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  server_log: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  device_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BugScalarWhereInputObjectSchema: z.ZodType<Prisma.BugScalarWhereInput> = bugscalarwhereinputSchema as unknown as z.ZodType<Prisma.BugScalarWhereInput>;
export const BugScalarWhereInputObjectZodSchema = bugscalarwhereinputSchema;
