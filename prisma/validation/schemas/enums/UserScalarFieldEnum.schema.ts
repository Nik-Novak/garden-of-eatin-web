import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'emailVerified', 'image', 'created_at', 'updated_at'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;