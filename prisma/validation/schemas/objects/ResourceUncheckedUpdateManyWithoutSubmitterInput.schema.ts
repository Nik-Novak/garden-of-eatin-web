import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PlaceUpdateEnvelopeInputObjectSchema as PlaceUpdateEnvelopeInputObjectSchema } from './PlaceUpdateEnvelopeInput.schema';
import { PlaceCreateInputObjectSchema as PlaceCreateInputObjectSchema } from './PlaceCreateInput.schema';
import { PointUpdateEnvelopeInputObjectSchema as PointUpdateEnvelopeInputObjectSchema } from './PointUpdateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { ScheduleUpdateEnvelopeInputObjectSchema as ScheduleUpdateEnvelopeInputObjectSchema } from './ScheduleUpdateEnvelopeInput.schema';
import { ScheduleCreateInputObjectSchema as ScheduleCreateInputObjectSchema } from './ScheduleCreateInput.schema';
import { ResourceTypeSchema } from '../enums/ResourceType.schema';
import { EnumResourceTypeFieldUpdateOperationsInputObjectSchema as EnumResourceTypeFieldUpdateOperationsInputObjectSchema } from './EnumResourceTypeFieldUpdateOperationsInput.schema';
import { SelectionTypeSchema } from '../enums/SelectionType.schema';
import { EnumSelectionTypeFieldUpdateOperationsInputObjectSchema as EnumSelectionTypeFieldUpdateOperationsInputObjectSchema } from './EnumSelectionTypeFieldUpdateOperationsInput.schema';
import { ResourceUpdatepackaging_typeInputObjectSchema as ResourceUpdatepackaging_typeInputObjectSchema } from './ResourceUpdatepackaging_typeInput.schema';
import { ResourcePackagingTypeSchema } from '../enums/ResourcePackagingType.schema';
import { LoadingPolicySchema } from '../enums/LoadingPolicy.schema';
import { EnumLoadingPolicyFieldUpdateOperationsInputObjectSchema as EnumLoadingPolicyFieldUpdateOperationsInputObjectSchema } from './EnumLoadingPolicyFieldUpdateOperationsInput.schema';
import { ResourceUpdatevehicle_typesInputObjectSchema as ResourceUpdatevehicle_typesInputObjectSchema } from './ResourceUpdatevehicle_typesInput.schema';
import { VehicleTypeSchema } from '../enums/VehicleType.schema';
import { ResourceUpdatedietary_tagsInputObjectSchema as ResourceUpdatedietary_tagsInputObjectSchema } from './ResourceUpdatedietary_tagsInput.schema';
import { DietaryTagSchema } from '../enums/DietaryTag.schema';
import { ResourceUpdatecategoriesInputObjectSchema as ResourceUpdatecategoriesInputObjectSchema } from './ResourceUpdatecategoriesInput.schema';
import { InventoryCategorySchema } from '../enums/InventoryCategory.schema';
import { ResourceUpdatefeaturesInputObjectSchema as ResourceUpdatefeaturesInputObjectSchema } from './ResourceUpdatefeaturesInput.schema';
import { ResourceFeatureSchema } from '../enums/ResourceFeature.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ResourceUpdatedocumentation_requiredInputObjectSchema as ResourceUpdatedocumentation_requiredInputObjectSchema } from './ResourceUpdatedocumentation_requiredInput.schema';
import { ResourceUpdaterulesInputObjectSchema as ResourceUpdaterulesInputObjectSchema } from './ResourceUpdaterulesInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  place: z.union([z.lazy(() => PlaceUpdateEnvelopeInputObjectSchema), z.lazy(() => PlaceCreateInputObjectSchema)]).optional(),
  location: z.union([z.lazy(() => PointUpdateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]).optional(),
  schedule: z.union([z.lazy(() => ScheduleUpdateEnvelopeInputObjectSchema), z.lazy(() => ScheduleCreateInputObjectSchema)]).optional(),
  timezone: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource_type: z.union([ResourceTypeSchema, z.lazy(() => EnumResourceTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  selection_type: z.union([SelectionTypeSchema, z.lazy(() => EnumSelectionTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  packaging_type: z.union([z.lazy(() => ResourceUpdatepackaging_typeInputObjectSchema), ResourcePackagingTypeSchema.array()]).optional(),
  loading_policy: z.union([LoadingPolicySchema, z.lazy(() => EnumLoadingPolicyFieldUpdateOperationsInputObjectSchema)]).optional(),
  vehicle_types: z.union([z.lazy(() => ResourceUpdatevehicle_typesInputObjectSchema), VehicleTypeSchema.array()]).optional(),
  dietary_tags: z.union([z.lazy(() => ResourceUpdatedietary_tagsInputObjectSchema), DietaryTagSchema.array()]).optional(),
  categories: z.union([z.lazy(() => ResourceUpdatecategoriesInputObjectSchema), InventoryCategorySchema.array()]).optional(),
  features: z.union([z.lazy(() => ResourceUpdatefeaturesInputObjectSchema), ResourceFeatureSchema.array()]).optional(),
  max_height_clearance_m: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  typical_volume_m3: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  typical_weight_kg: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  is_bulk: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  appointment_required: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  documentation_required: z.union([z.lazy(() => ResourceUpdatedocumentation_requiredInputObjectSchema), z.string().array()]).optional(),
  id_required: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  rules: z.union([z.lazy(() => ResourceUpdaterulesInputObjectSchema), z.string().array()]).optional(),
  approved: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  rejection_reason: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  submitter_name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ResourceUncheckedUpdateManyWithoutSubmitterInputObjectSchema: z.ZodType<Prisma.ResourceUncheckedUpdateManyWithoutSubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUncheckedUpdateManyWithoutSubmitterInput>;
export const ResourceUncheckedUpdateManyWithoutSubmitterInputObjectZodSchema = makeSchema();
