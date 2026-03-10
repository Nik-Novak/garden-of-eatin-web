import * as z from 'zod';

export const AgreementScalarFieldEnumSchema = z.enum(['id', 'agreement_type', 'effective_date', 'content_md', 'created_at', 'updated_at'])

export type AgreementScalarFieldEnum = z.infer<typeof AgreementScalarFieldEnumSchema>;