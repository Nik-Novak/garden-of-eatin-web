import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DeviceSettingsNullableCompositeFilterObjectSchema as DeviceSettingsNullableCompositeFilterObjectSchema } from './DeviceSettingsNullableCompositeFilter.schema';
import { DeviceSettingsObjectEqualityInputObjectSchema as DeviceSettingsObjectEqualityInputObjectSchema } from './DeviceSettingsObjectEqualityInput.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { SessionListRelationFilterObjectSchema as SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';
import { AccountListRelationFilterObjectSchema as AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { DeviceListRelationFilterObjectSchema as DeviceListRelationFilterObjectSchema } from './DeviceListRelationFilter.schema';
import { WebDeviceListRelationFilterObjectSchema as WebDeviceListRelationFilterObjectSchema } from './WebDeviceListRelationFilter.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  emailVerified: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  image: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  role: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  banned: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  banReason: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  banExpires: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsNullableCompositeFilterObjectSchema), z.lazy(() => DeviceSettingsObjectEqualityInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
  accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
  devices: z.lazy(() => DeviceListRelationFilterObjectSchema).optional(),
  web_devices: z.lazy(() => WebDeviceListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
