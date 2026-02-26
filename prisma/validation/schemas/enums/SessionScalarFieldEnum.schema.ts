import * as z from 'zod';

export const SessionScalarFieldEnumSchema = z.enum(['id', 'sessionToken', 'userId', 'expires', 'created_at', 'updated_at'])

export type SessionScalarFieldEnum = z.infer<typeof SessionScalarFieldEnumSchema>;