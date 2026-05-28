import * as z from 'zod';

export const AccountDeletionRequestScalarFieldEnumSchema = z.enum(['id', 'email', 'reason', 'feedback', 'createdAt', 'updatedAt'])

export type AccountDeletionRequestScalarFieldEnum = z.infer<typeof AccountDeletionRequestScalarFieldEnumSchema>;