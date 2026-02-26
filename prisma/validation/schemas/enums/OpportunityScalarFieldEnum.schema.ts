import * as z from 'zod';

export const OpportunityScalarFieldEnumSchema = z.enum(['id', 'title', 'abstract', 'description', 'status', 'created_at', 'updated_at'])

export type OpportunityScalarFieldEnum = z.infer<typeof OpportunityScalarFieldEnumSchema>;