import * as z from 'zod';

export const ResourceSearchHitScalarFieldEnumSchema = z.enum(['id', 'resource_id', 'search_id', 'created_at'])

export type ResourceSearchHitScalarFieldEnum = z.infer<typeof ResourceSearchHitScalarFieldEnumSchema>;