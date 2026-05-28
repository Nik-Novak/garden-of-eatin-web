import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const accountdeletionrequestwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountDeletionRequestWhereInputObjectSchema), z.lazy(() => AccountDeletionRequestWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountDeletionRequestWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountDeletionRequestWhereInputObjectSchema), z.lazy(() => AccountDeletionRequestWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  reason: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  feedback: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AccountDeletionRequestWhereInputObjectSchema: z.ZodType<Prisma.AccountDeletionRequestWhereInput> = accountdeletionrequestwhereinputSchema as unknown as z.ZodType<Prisma.AccountDeletionRequestWhereInput>;
export const AccountDeletionRequestWhereInputObjectZodSchema = accountdeletionrequestwhereinputSchema;
