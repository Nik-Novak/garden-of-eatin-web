import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumInviteStatusFilterObjectSchema as EnumInviteStatusFilterObjectSchema } from './EnumInviteStatusFilter.schema';
import { InviteStatusSchema } from '../enums/InviteStatus.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const invitescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => InviteScalarWhereInputObjectSchema), z.lazy(() => InviteScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InviteScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InviteScalarWhereInputObjectSchema), z.lazy(() => InviteScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumInviteStatusFilterObjectSchema), InviteStatusSchema]).optional(),
  inviter_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const InviteScalarWhereInputObjectSchema: z.ZodType<Prisma.InviteScalarWhereInput> = invitescalarwhereinputSchema as unknown as z.ZodType<Prisma.InviteScalarWhereInput>;
export const InviteScalarWhereInputObjectZodSchema = invitescalarwhereinputSchema;
