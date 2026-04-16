import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { PlaceCompositeFilterObjectSchema as PlaceCompositeFilterObjectSchema } from './PlaceCompositeFilter.schema';
import { PlaceObjectEqualityInputObjectSchema as PlaceObjectEqualityInputObjectSchema } from './PlaceObjectEqualityInput.schema';
import { PointCompositeFilterObjectSchema as PointCompositeFilterObjectSchema } from './PointCompositeFilter.schema';
import { PointObjectEqualityInputObjectSchema as PointObjectEqualityInputObjectSchema } from './PointObjectEqualityInput.schema';
import { ScheduleCompositeFilterObjectSchema as ScheduleCompositeFilterObjectSchema } from './ScheduleCompositeFilter.schema';
import { ScheduleObjectEqualityInputObjectSchema as ScheduleObjectEqualityInputObjectSchema } from './ScheduleObjectEqualityInput.schema';
import { EnumResourceTypeNullableListFilterObjectSchema as EnumResourceTypeNullableListFilterObjectSchema } from './EnumResourceTypeNullableListFilter.schema';
import { EnumSelectionTypeFilterObjectSchema as EnumSelectionTypeFilterObjectSchema } from './EnumSelectionTypeFilter.schema';
import { SelectionTypeSchema } from '../enums/SelectionType.schema';
import { EnumResourcePackagingTypeNullableListFilterObjectSchema as EnumResourcePackagingTypeNullableListFilterObjectSchema } from './EnumResourcePackagingTypeNullableListFilter.schema';
import { EnumLoadingPolicyFilterObjectSchema as EnumLoadingPolicyFilterObjectSchema } from './EnumLoadingPolicyFilter.schema';
import { LoadingPolicySchema } from '../enums/LoadingPolicy.schema';
import { EnumVehicleTypeNullableListFilterObjectSchema as EnumVehicleTypeNullableListFilterObjectSchema } from './EnumVehicleTypeNullableListFilter.schema';
import { EnumResourceFeatureNullableListFilterObjectSchema as EnumResourceFeatureNullableListFilterObjectSchema } from './EnumResourceFeatureNullableListFilter.schema';
import { EnumDietaryTagNullableListFilterObjectSchema as EnumDietaryTagNullableListFilterObjectSchema } from './EnumDietaryTagNullableListFilter.schema';
import { EnumInventoryCategoryNullableListFilterObjectSchema as EnumInventoryCategoryNullableListFilterObjectSchema } from './EnumInventoryCategoryNullableListFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ResourceOccurrenceListRelationFilterObjectSchema as ResourceOccurrenceListRelationFilterObjectSchema } from './ResourceOccurrenceListRelationFilter.schema';
import { ResourceSearchHitListRelationFilterObjectSchema as ResourceSearchHitListRelationFilterObjectSchema } from './ResourceSearchHitListRelationFilter.schema';
import { ResourceInteractionListRelationFilterObjectSchema as ResourceInteractionListRelationFilterObjectSchema } from './ResourceInteractionListRelationFilter.schema';
import { DeviceNullableScalarRelationFilterObjectSchema as DeviceNullableScalarRelationFilterObjectSchema } from './DeviceNullableScalarRelationFilter.schema';
import { DeviceWhereInputObjectSchema as DeviceWhereInputObjectSchema } from './DeviceWhereInput.schema'

const resourcewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ResourceWhereInputObjectSchema), z.lazy(() => ResourceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ResourceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ResourceWhereInputObjectSchema), z.lazy(() => ResourceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  place: z.union([z.lazy(() => PlaceCompositeFilterObjectSchema), z.lazy(() => PlaceObjectEqualityInputObjectSchema)]).optional(),
  location: z.union([z.lazy(() => PointCompositeFilterObjectSchema), z.lazy(() => PointObjectEqualityInputObjectSchema)]).optional(),
  schedule: z.union([z.lazy(() => ScheduleCompositeFilterObjectSchema), z.lazy(() => ScheduleObjectEqualityInputObjectSchema)]).optional(),
  timezone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  resource_type: z.lazy(() => EnumResourceTypeNullableListFilterObjectSchema).optional(),
  selection_type: z.union([z.lazy(() => EnumSelectionTypeFilterObjectSchema), SelectionTypeSchema]).optional(),
  packaging_type: z.lazy(() => EnumResourcePackagingTypeNullableListFilterObjectSchema).optional(),
  loading_policy: z.union([z.lazy(() => EnumLoadingPolicyFilterObjectSchema), LoadingPolicySchema]).optional(),
  vehicle_types: z.lazy(() => EnumVehicleTypeNullableListFilterObjectSchema).optional(),
  features: z.lazy(() => EnumResourceFeatureNullableListFilterObjectSchema).optional(),
  dietary_tags: z.lazy(() => EnumDietaryTagNullableListFilterObjectSchema).optional(),
  categories: z.lazy(() => EnumInventoryCategoryNullableListFilterObjectSchema).optional(),
  max_height_clearance_m: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  total_weight_kg: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  max_weight_per_visit_kg: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  min_weight_per_visit_kg: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  typical_volume_m3: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  typical_weight_kg: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  is_bulk: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  appointment_required: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  documentation_required: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  id_required: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  rules: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  approved: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  rejection_reason: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  submitter_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(24)]).optional().nullable(),
  submitter_name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  resource_occurrences: z.lazy(() => ResourceOccurrenceListRelationFilterObjectSchema).optional(),
  resource_search_hits: z.lazy(() => ResourceSearchHitListRelationFilterObjectSchema).optional(),
  resource_interactions: z.lazy(() => ResourceInteractionListRelationFilterObjectSchema).optional(),
  submitter: z.union([z.lazy(() => DeviceNullableScalarRelationFilterObjectSchema), z.lazy(() => DeviceWhereInputObjectSchema)]).optional()
}).strict();
export const ResourceWhereInputObjectSchema: z.ZodType<Prisma.ResourceWhereInput> = resourcewhereinputSchema as unknown as z.ZodType<Prisma.ResourceWhereInput>;
export const ResourceWhereInputObjectZodSchema = resourcewhereinputSchema;
