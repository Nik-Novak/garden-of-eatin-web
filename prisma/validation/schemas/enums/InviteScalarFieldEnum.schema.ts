import * as z from 'zod';

export const InviteScalarFieldEnumSchema = z.enum(['id', 'email', 'status', 'inviter_id', 'user_id', 'created_at', 'updated_at'])

export type InviteScalarFieldEnum = z.infer<typeof InviteScalarFieldEnumSchema>;