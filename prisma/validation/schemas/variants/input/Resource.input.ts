import * as z from 'zod';
import { ResourceTypeSchema } from '../../enums/ResourceType.schema';
import { SelectionTypeSchema } from '../../enums/SelectionType.schema';
import { ResourcePackagingTypeSchema } from '../../enums/ResourcePackagingType.schema';
import { LoadingPolicySchema } from '../../enums/LoadingPolicy.schema';
import { VehicleTypeSchema } from '../../enums/VehicleType.schema';
import { ResourceFeatureSchema } from '../../enums/ResourceFeature.schema';
import { DietaryTagSchema } from '../../enums/DietaryTag.schema';
import { InventoryCategorySchema } from '../../enums/InventoryCategory.schema';
// prettier-ignore
export const ResourceInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    place: z.unknown(),
    location: z.unknown(),
    schedule: z.unknown(),
    timezone: z.string(),
    resource_type: ResourceTypeSchema,
    selection_type: SelectionTypeSchema,
    packaging_type: ResourcePackagingTypeSchema.array(),
    loading_policy: LoadingPolicySchema,
    vehicle_types: VehicleTypeSchema.array(),
    features: ResourceFeatureSchema.array(),
    dietary_tags: DietaryTagSchema.array(),
    categories: InventoryCategorySchema.array(),
    max_height_clearance_m: z.number().optional().nullable(),
    total_weight_kg: z.number(),
    max_weight_per_visit_kg: z.number(),
    min_weight_per_visit_kg: z.number().optional().nullable(),
    typical_volume_m3: z.number().optional().nullable(),
    typical_weight_kg: z.number().optional().nullable(),
    is_bulk: z.boolean().optional().nullable(),
    appointment_required: z.boolean(),
    documentation_required: z.array(z.string()),
    id_required: z.boolean(),
    rules: z.array(z.string()),
    resource_occurrences: z.array(z.unknown()),
    resource_search_hits: z.array(z.unknown()),
    resource_interactions: z.array(z.unknown()),
    approved: z.boolean().optional().nullable(),
    rejection_reason: z.string().optional().nullable(),
    submitter: z.unknown().optional().nullable(),
    submitter_id: z.string().optional().nullable(),
    submitter_name: z.string().optional().nullable(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type ResourceInputType = z.infer<typeof ResourceInputSchema>;
