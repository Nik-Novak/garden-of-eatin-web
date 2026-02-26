import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const bugscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BugScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BugScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BugScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BugScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BugScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  client_log: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  server_log: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  device_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BugScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BugScalarWhereWithAggregatesInput> = bugscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BugScalarWhereWithAggregatesInput>;
export const BugScalarWhereWithAggregatesInputObjectZodSchema = bugscalarwherewithaggregatesinputSchema;
