import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DeviceSettingsNullableCompositeFilterObjectSchema as DeviceSettingsNullableCompositeFilterObjectSchema } from './DeviceSettingsNullableCompositeFilter.schema';
import { DeviceSettingsObjectEqualityInputObjectSchema as DeviceSettingsObjectEqualityInputObjectSchema } from './DeviceSettingsObjectEqualityInput.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { AccountListRelationFilterObjectSchema as AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { DeviceListRelationFilterObjectSchema as DeviceListRelationFilterObjectSchema } from './DeviceListRelationFilter.schema';
import { SessionListRelationFilterObjectSchema as SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';
import { InviteListRelationFilterObjectSchema as InviteListRelationFilterObjectSchema } from './InviteListRelationFilter.schema';
import { InviteNullableScalarRelationFilterObjectSchema as InviteNullableScalarRelationFilterObjectSchema } from './InviteNullableScalarRelationFilter.schema';
import { InviteWhereInputObjectSchema as InviteWhereInputObjectSchema } from './InviteWhereInput.schema';
import { OpportunityApplicationListRelationFilterObjectSchema as OpportunityApplicationListRelationFilterObjectSchema } from './OpportunityApplicationListRelationFilter.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  emailVerified: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  image: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsNullableCompositeFilterObjectSchema), z.lazy(() => DeviceSettingsObjectEqualityInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
  devices: z.lazy(() => DeviceListRelationFilterObjectSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
  invites_sent: z.lazy(() => InviteListRelationFilterObjectSchema).optional(),
  invite_used: z.union([z.lazy(() => InviteNullableScalarRelationFilterObjectSchema), z.lazy(() => InviteWhereInputObjectSchema)]).optional(),
  opportunity_applications: z.lazy(() => OpportunityApplicationListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
