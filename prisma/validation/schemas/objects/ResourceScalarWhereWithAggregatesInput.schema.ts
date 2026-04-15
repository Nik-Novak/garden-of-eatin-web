import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumResourceTypeWithAggregatesFilterObjectSchema as EnumResourceTypeWithAggregatesFilterObjectSchema } from './EnumResourceTypeWithAggregatesFilter.schema';
import { ResourceTypeSchema } from '../enums/ResourceType.schema';
import { EnumSelectionTypeWithAggregatesFilterObjectSchema as EnumSelectionTypeWithAggregatesFilterObjectSchema } from './EnumSelectionTypeWithAggregatesFilter.schema';
import { SelectionTypeSchema } from '../enums/SelectionType.schema';
import { EnumResourcePackagingTypeNullableListFilterObjectSchema as EnumResourcePackagingTypeNullableListFilterObjectSchema } from './EnumResourcePackagingTypeNullableListFilter.schema';
import { EnumLoadingPolicyWithAggregatesFilterObjectSchema as EnumLoadingPolicyWithAggregatesFilterObjectSchema } from './EnumLoadingPolicyWithAggregatesFilter.schema';
import { LoadingPolicySchema } from '../enums/LoadingPolicy.schema';
import { EnumVehicleTypeNullableListFilterObjectSchema as EnumVehicleTypeNullableListFilterObjectSchema } from './EnumVehicleTypeNullableListFilter.schema';
import { EnumResourceFeatureNullableListFilterObjectSchema as EnumResourceFeatureNullableListFilterObjectSchema } from './EnumResourceFeatureNullableListFilter.schema';
import { EnumDietaryTagNullableListFilterObjectSchema as EnumDietaryTagNullableListFilterObjectSchema } from './EnumDietaryTagNullableListFilter.schema';
import { EnumInventoryCategoryNullableListFilterObjectSchema as EnumInventoryCategoryNullableListFilterObjectSchema } from './EnumInventoryCategoryNullableListFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema as BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const resourcescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ResourceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ResourceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ResourceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ResourceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ResourceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  timezone: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  resource_type: z.union([z.lazy(() => EnumResourceTypeWithAggregatesFilterObjectSchema), ResourceTypeSchema]).optional(),
  selection_type: z.union([z.lazy(() => EnumSelectionTypeWithAggregatesFilterObjectSchema), SelectionTypeSchema]).optional(),
  packaging_type: z.lazy(() => EnumResourcePackagingTypeNullableListFilterObjectSchema).optional(),
  loading_policy: z.union([z.lazy(() => EnumLoadingPolicyWithAggregatesFilterObjectSchema), LoadingPolicySchema]).optional(),
  vehicle_types: z.lazy(() => EnumVehicleTypeNullableListFilterObjectSchema).optional(),
  features: z.lazy(() => EnumResourceFeatureNullableListFilterObjectSchema).optional(),
  dietary_tags: z.lazy(() => EnumDietaryTagNullableListFilterObjectSchema).optional(),
  categories: z.lazy(() => EnumInventoryCategoryNullableListFilterObjectSchema).optional(),
  max_height_clearance_m: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  total_weight_kg: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  max_weight_per_visit_kg: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  min_weight_per_visit_kg: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  typical_volume_m3: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  typical_weight_kg: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  is_bulk: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  appointment_required: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  documentation_required: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  id_required: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  rules: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  approved: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  rejection_reason: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  submitter_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  submitter_name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ResourceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ResourceScalarWhereWithAggregatesInput> = resourcescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ResourceScalarWhereWithAggregatesInput>;
export const ResourceScalarWhereWithAggregatesInputObjectZodSchema = resourcescalarwherewithaggregatesinputSchema;
