import * as z from 'zod';

export const ResourceOccurrenceSearchScalarFieldEnumSchema = z.enum(['id', 'search_type', 'start', 'end', 'radius_mi', 'device_id', 'created_at'])

export type ResourceOccurrenceSearchScalarFieldEnum = z.infer<typeof ResourceOccurrenceSearchScalarFieldEnumSchema>;