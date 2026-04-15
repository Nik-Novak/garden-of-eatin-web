import * as z from 'zod';

export const ResourceInteractionScalarFieldEnumSchema = z.enum(['id', 'interaction_type', 'resource_id', 'device_id', 'created_at'])

export type ResourceInteractionScalarFieldEnum = z.infer<typeof ResourceInteractionScalarFieldEnumSchema>;