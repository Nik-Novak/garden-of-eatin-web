import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumInviteStatusFilterObjectSchema as EnumInviteStatusFilterObjectSchema } from './EnumInviteStatusFilter.schema';
import { InviteStatusSchema } from '../enums/InviteStatus.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema'

const invitewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => InviteWhereInputObjectSchema), z.lazy(() => InviteWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InviteWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InviteWhereInputObjectSchema), z.lazy(() => InviteWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumInviteStatusFilterObjectSchema), InviteStatusSchema]).optional(),
  inviter_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  user_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  inviter: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const InviteWhereInputObjectSchema: z.ZodType<Prisma.InviteWhereInput> = invitewhereinputSchema as unknown as z.ZodType<Prisma.InviteWhereInput>;
export const InviteWhereInputObjectZodSchema = invitewhereinputSchema;
