import * as z from 'zod';

export const OpportunityApplicationScalarFieldEnumSchema = z.enum(['id', 'opportunity_id', 'user_id', 'status', 'applicant_first_name', 'applicant_last_name', 'applicant_email', 'applicant_phone', 'created_at', 'updated_at'])

export type OpportunityApplicationScalarFieldEnum = z.infer<typeof OpportunityApplicationScalarFieldEnumSchema>;