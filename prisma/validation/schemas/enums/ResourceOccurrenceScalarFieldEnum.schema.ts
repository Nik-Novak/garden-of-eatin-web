import * as z from 'zod';

export const ResourceOccurrenceScalarFieldEnumSchema = z.enum(['id', 'resource_id', 'start', 'end', 'timezone', 'created_at'])

export type ResourceOccurrenceScalarFieldEnum = z.infer<typeof ResourceOccurrenceScalarFieldEnumSchema>;