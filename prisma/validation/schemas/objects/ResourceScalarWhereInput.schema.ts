import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumResourceTypeFilterObjectSchema as EnumResourceTypeFilterObjectSchema } from './EnumResourceTypeFilter.schema';
import { ResourceTypeSchema } from '../enums/ResourceType.schema';
import { EnumSelectionTypeFilterObjectSchema as EnumSelectionTypeFilterObjectSchema } from './EnumSelectionTypeFilter.schema';
import { SelectionTypeSchema } from '../enums/SelectionType.schema';
import { EnumResourcePackagingTypeNullableListFilterObjectSchema as EnumResourcePackagingTypeNullableListFilterObjectSchema } from './EnumResourcePackagingTypeNullableListFilter.schema';
import { EnumLoadingPolicyFilterObjectSchema as EnumLoadingPolicyFilterObjectSchema } from './EnumLoadingPolicyFilter.schema';
import { LoadingPolicySchema } from '../enums/LoadingPolicy.schema';
import { EnumVehicleTypeNullableListFilterObjectSchema as EnumVehicleTypeNullableListFilterObjectSchema } from './EnumVehicleTypeNullableListFilter.schema';
import { EnumDietaryTagNullableListFilterObjectSchema as EnumDietaryTagNullableListFilterObjectSchema } from './EnumDietaryTagNullableListFilter.schema';
import { EnumInventoryCategoryNullableListFilterObjectSchema as EnumInventoryCategoryNullableListFilterObjectSchema } from './EnumInventoryCategoryNullableListFilter.schema';
import { EnumResourceFeatureNullableListFilterObjectSchema as EnumResourceFeatureNullableListFilterObjectSchema } from './EnumResourceFeatureNullableListFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const resourcescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ResourceScalarWhereInputObjectSchema), z.lazy(() => ResourceScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ResourceScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ResourceScalarWhereInputObjectSchema), z.lazy(() => ResourceScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  timezone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  resource_type: z.union([z.lazy(() => EnumResourceTypeFilterObjectSchema), ResourceTypeSchema]).optional(),
  selection_type: z.union([z.lazy(() => EnumSelectionTypeFilterObjectSchema), SelectionTypeSchema]).optional(),
  packaging_type: z.lazy(() => EnumResourcePackagingTypeNullableListFilterObjectSchema).optional(),
  loading_policy: z.union([z.lazy(() => EnumLoadingPolicyFilterObjectSchema), LoadingPolicySchema]).optional(),
  vehicle_types: z.lazy(() => EnumVehicleTypeNullableListFilterObjectSchema).optional(),
  dietary_tags: z.lazy(() => EnumDietaryTagNullableListFilterObjectSchema).optional(),
  categories: z.lazy(() => EnumInventoryCategoryNullableListFilterObjectSchema).optional(),
  features: z.lazy(() => EnumResourceFeatureNullableListFilterObjectSchema).optional(),
  max_height_clearance_m: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  typical_volume_m3: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  typical_weight_kg: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  is_bulk: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  appointment_required: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  documentation_required: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  id_required: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  rules: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  approved: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  rejection_reason: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  submitter_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  submitter_name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ResourceScalarWhereInputObjectSchema: z.ZodType<Prisma.ResourceScalarWhereInput> = resourcescalarwhereinputSchema as unknown as z.ZodType<Prisma.ResourceScalarWhereInput>;
export const ResourceScalarWhereInputObjectZodSchema = resourcescalarwhereinputSchema;
