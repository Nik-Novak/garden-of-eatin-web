import * as z from 'zod';

export const SessionScalarFieldEnumSchema = z.enum(['id', 'token', 'expiresAt', 'ipAddress', 'userAgent', 'userId', 'createdAt', 'updatedAt'])

export type SessionScalarFieldEnum = z.infer<typeof SessionScalarFieldEnumSchema>;