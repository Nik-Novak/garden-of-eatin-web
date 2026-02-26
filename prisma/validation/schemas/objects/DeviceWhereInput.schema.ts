import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DeviceSettingsCompositeFilterObjectSchema as DeviceSettingsCompositeFilterObjectSchema } from './DeviceSettingsCompositeFilter.schema';
import { DeviceSettingsObjectEqualityInputObjectSchema as DeviceSettingsObjectEqualityInputObjectSchema } from './DeviceSettingsObjectEqualityInput.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { BugListRelationFilterObjectSchema as BugListRelationFilterObjectSchema } from './BugListRelationFilter.schema';
import { ContactRequestListRelationFilterObjectSchema as ContactRequestListRelationFilterObjectSchema } from './ContactRequestListRelationFilter.schema';
import { ReviewListRelationFilterObjectSchema as ReviewListRelationFilterObjectSchema } from './ReviewListRelationFilter.schema';
import { MealListRelationFilterObjectSchema as MealListRelationFilterObjectSchema } from './MealListRelationFilter.schema'

const devicewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DeviceWhereInputObjectSchema), z.lazy(() => DeviceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DeviceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DeviceWhereInputObjectSchema), z.lazy(() => DeviceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  uuid: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  settings: z.union([z.lazy(() => DeviceSettingsCompositeFilterObjectSchema), z.lazy(() => DeviceSettingsObjectEqualityInputObjectSchema)]).optional(),
  user_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  bugs: z.lazy(() => BugListRelationFilterObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestListRelationFilterObjectSchema).optional(),
  reviews: z.lazy(() => ReviewListRelationFilterObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealListRelationFilterObjectSchema).optional()
}).strict();
export const DeviceWhereInputObjectSchema: z.ZodType<Prisma.DeviceWhereInput> = devicewhereinputSchema as unknown as z.ZodType<Prisma.DeviceWhereInput>;
export const DeviceWhereInputObjectZodSchema = devicewhereinputSchema;
