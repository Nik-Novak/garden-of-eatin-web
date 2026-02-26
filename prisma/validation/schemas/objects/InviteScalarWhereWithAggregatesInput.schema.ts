import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumInviteStatusWithAggregatesFilterObjectSchema as EnumInviteStatusWithAggregatesFilterObjectSchema } from './EnumInviteStatusWithAggregatesFilter.schema';
import { InviteStatusSchema } from '../enums/InviteStatus.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const invitescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => InviteScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InviteScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InviteScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InviteScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InviteScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumInviteStatusWithAggregatesFilterObjectSchema), InviteStatusSchema]).optional(),
  inviter_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  user_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const InviteScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.InviteScalarWhereWithAggregatesInput> = invitescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.InviteScalarWhereWithAggregatesInput>;
export const InviteScalarWhereWithAggregatesInputObjectZodSchema = invitescalarwherewithaggregatesinputSchema;
