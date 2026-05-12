import * as z from 'zod';

export const ResourceScalarFieldEnumSchema = z.enum(['id', 'name', 'timezone', 'resource_type', 'selection_type', 'packaging_type', 'loading_policy', 'vehicle_types', 'dietary_tags', 'categories', 'features', 'max_height_clearance_m', 'typical_volume_m3', 'typical_weight_kg', 'is_bulk', 'appointment_required', 'documentation_required', 'id_required', 'rules', 'approved', 'rejection_reason', 'submitter_id', 'submitter_name', 'created_at', 'updated_at'])

export type ResourceScalarFieldEnum = z.infer<typeof ResourceScalarFieldEnumSchema>;