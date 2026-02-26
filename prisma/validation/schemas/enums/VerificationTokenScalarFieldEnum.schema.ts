import * as z from 'zod';

export const VerificationTokenScalarFieldEnumSchema = z.enum(['id', 'identifier', 'token', 'expires', 'created_at', 'updated_at'])

export type VerificationTokenScalarFieldEnum = z.infer<typeof VerificationTokenScalarFieldEnumSchema>;