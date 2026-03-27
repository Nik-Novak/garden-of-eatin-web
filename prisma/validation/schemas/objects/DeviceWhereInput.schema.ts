import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DeviceMetadataNullableCompositeFilterObjectSchema as DeviceMetadataNullableCompositeFilterObjectSchema } from './DeviceMetadataNullableCompositeFilter.schema';
import { DeviceMetadataObjectEqualityInputObjectSchema as DeviceMetadataObjectEqualityInputObjectSchema } from './DeviceMetadataObjectEqualityInput.schema';
import { DeviceSettingsCompositeFilterObjectSchema as DeviceSettingsCompositeFilterObjectSchema } from './DeviceSettingsCompositeFilter.schema';
import { DeviceSettingsObjectEqualityInputObjectSchema as DeviceSettingsObjectEqualityInputObjectSchema } from './DeviceSettingsObjectEqualityInput.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DeviceAgreementListRelationFilterObjectSchema as DeviceAgreementListRelationFilterObjectSchema } from './DeviceAgreementListRelationFilter.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { MealInteractionListRelationFilterObjectSchema as MealInteractionListRelationFilterObjectSchema } from './MealInteractionListRelationFilter.schema';
import { BugListRelationFilterObjectSchema as BugListRelationFilterObjectSchema } from './BugListRelationFilter.schema';
import { ContactRequestListRelationFilterObjectSchema as ContactRequestListRelationFilterObjectSchema } from './ContactRequestListRelationFilter.schema';
import { ReviewListRelationFilterObjectSchema as ReviewListRelationFilterObjectSchema } from './ReviewListRelationFilter.schema';
import { MealListRelationFilterObjectSchema as MealListRelationFilterObjectSchema } from './MealListRelationFilter.schema';
import { MealOccurrenceSearchListRelationFilterObjectSchema as MealOccurrenceSearchListRelationFilterObjectSchema } from './MealOccurrenceSearchListRelationFilter.schema'

const devicewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DeviceWhereInputObjectSchema), z.lazy(() => DeviceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DeviceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DeviceWhereInputObjectSchema), z.lazy(() => DeviceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  uuid: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  metadata: z.union([z.lazy(() => DeviceMetadataNullableCompositeFilterObjectSchema), z.lazy(() => DeviceMetadataObjectEqualityInputObjectSchema)]).optional().nullable(),
  settings: z.union([z.lazy(() => DeviceSettingsCompositeFilterObjectSchema), z.lazy(() => DeviceSettingsObjectEqualityInputObjectSchema)]).optional(),
  user_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  device_agreements: z.lazy(() => DeviceAgreementListRelationFilterObjectSchema).optional(),
  user: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  meal_interactions: z.lazy(() => MealInteractionListRelationFilterObjectSchema).optional(),
  bugs: z.lazy(() => BugListRelationFilterObjectSchema).optional(),
  contact_requests: z.lazy(() => ContactRequestListRelationFilterObjectSchema).optional(),
  reviews: z.lazy(() => ReviewListRelationFilterObjectSchema).optional(),
  submitted_meals: z.lazy(() => MealListRelationFilterObjectSchema).optional(),
  meal_occurrence_searches: z.lazy(() => MealOccurrenceSearchListRelationFilterObjectSchema).optional()
}).strict();
export const DeviceWhereInputObjectSchema: z.ZodType<Prisma.DeviceWhereInput> = devicewhereinputSchema as unknown as z.ZodType<Prisma.DeviceWhereInput>;
export const DeviceWhereInputObjectZodSchema = devicewhereinputSchema;
