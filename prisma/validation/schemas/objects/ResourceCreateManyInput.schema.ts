import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PlaceCreateEnvelopeInputObjectSchema as PlaceCreateEnvelopeInputObjectSchema } from './PlaceCreateEnvelopeInput.schema';
import { PlaceCreateInputObjectSchema as PlaceCreateInputObjectSchema } from './PlaceCreateInput.schema';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { ScheduleCreateEnvelopeInputObjectSchema as ScheduleCreateEnvelopeInputObjectSchema } from './ScheduleCreateEnvelopeInput.schema';
import { ScheduleCreateInputObjectSchema as ScheduleCreateInputObjectSchema } from './ScheduleCreateInput.schema';
import { ResourceCreateresource_typeInputObjectSchema as ResourceCreateresource_typeInputObjectSchema } from './ResourceCreateresource_typeInput.schema';
import { ResourceTypeSchema } from '../enums/ResourceType.schema';
import { SelectionTypeSchema } from '../enums/SelectionType.schema';
import { ResourceCreatepackaging_typeInputObjectSchema as ResourceCreatepackaging_typeInputObjectSchema } from './ResourceCreatepackaging_typeInput.schema';
import { ResourcePackagingTypeSchema } from '../enums/ResourcePackagingType.schema';
import { LoadingPolicySchema } from '../enums/LoadingPolicy.schema';
import { ResourceCreatevehicle_typesInputObjectSchema as ResourceCreatevehicle_typesInputObjectSchema } from './ResourceCreatevehicle_typesInput.schema';
import { VehicleTypeSchema } from '../enums/VehicleType.schema';
import { ResourceCreatefeaturesInputObjectSchema as ResourceCreatefeaturesInputObjectSchema } from './ResourceCreatefeaturesInput.schema';
import { ResourceFeatureSchema } from '../enums/ResourceFeature.schema';
import { ResourceCreatedietary_tagsInputObjectSchema as ResourceCreatedietary_tagsInputObjectSchema } from './ResourceCreatedietary_tagsInput.schema';
import { DietaryTagSchema } from '../enums/DietaryTag.schema';
import { ResourceCreatecategoriesInputObjectSchema as ResourceCreatecategoriesInputObjectSchema } from './ResourceCreatecategoriesInput.schema';
import { InventoryCategorySchema } from '../enums/InventoryCategory.schema';
import { ResourceCreatedocumentation_requiredInputObjectSchema as ResourceCreatedocumentation_requiredInputObjectSchema } from './ResourceCreatedocumentation_requiredInput.schema';
import { ResourceCreaterulesInputObjectSchema as ResourceCreaterulesInputObjectSchema } from './ResourceCreaterulesInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  name: z.string(),
  place: z.union([z.lazy(() => PlaceCreateEnvelopeInputObjectSchema), z.lazy(() => PlaceCreateInputObjectSchema)]),
  location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  schedule: z.union([z.lazy(() => ScheduleCreateEnvelopeInputObjectSchema), z.lazy(() => ScheduleCreateInputObjectSchema)]),
  timezone: z.string(),
  resource_type: z.union([z.lazy(() => ResourceCreateresource_typeInputObjectSchema), ResourceTypeSchema.array()]).optional(),
  selection_type: SelectionTypeSchema,
  packaging_type: z.union([z.lazy(() => ResourceCreatepackaging_typeInputObjectSchema), ResourcePackagingTypeSchema.array()]).optional(),
  loading_policy: LoadingPolicySchema,
  vehicle_types: z.union([z.lazy(() => ResourceCreatevehicle_typesInputObjectSchema), VehicleTypeSchema.array()]).optional(),
  features: z.union([z.lazy(() => ResourceCreatefeaturesInputObjectSchema), ResourceFeatureSchema.array()]).optional(),
  dietary_tags: z.union([z.lazy(() => ResourceCreatedietary_tagsInputObjectSchema), DietaryTagSchema.array()]).optional(),
  categories: z.union([z.lazy(() => ResourceCreatecategoriesInputObjectSchema), InventoryCategorySchema.array()]).optional(),
  max_height_clearance_m: z.number().optional().nullable(),
  total_weight_kg: z.number(),
  max_weight_per_visit_kg: z.number(),
  min_weight_per_visit_kg: z.number().optional().nullable(),
  typical_volume_m3: z.number().optional().nullable(),
  typical_weight_kg: z.number().optional().nullable(),
  is_bulk: z.boolean().optional().nullable(),
  appointment_required: z.boolean(),
  documentation_required: z.union([z.lazy(() => ResourceCreatedocumentation_requiredInputObjectSchema), z.string().array()]).optional(),
  id_required: z.boolean(),
  rules: z.union([z.lazy(() => ResourceCreaterulesInputObjectSchema), z.string().array()]).optional(),
  approved: z.boolean().optional().nullable(),
  rejection_reason: z.string().optional().nullable(),
  submitter_id: z.string().max(24).optional().nullable(),
  submitter_name: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const ResourceCreateManyInputObjectSchema: z.ZodType<Prisma.ResourceCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCreateManyInput>;
export const ResourceCreateManyInputObjectZodSchema = makeSchema();
