import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const accountdeletionrequestscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountDeletionRequestScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AccountDeletionRequestScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountDeletionRequestScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountDeletionRequestScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AccountDeletionRequestScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  reason: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  feedback: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AccountDeletionRequestScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AccountDeletionRequestScalarWhereWithAggregatesInput> = accountdeletionrequestscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AccountDeletionRequestScalarWhereWithAggregatesInput>;
export const AccountDeletionRequestScalarWhereWithAggregatesInputObjectZodSchema = accountdeletionrequestscalarwherewithaggregatesinputSchema;
