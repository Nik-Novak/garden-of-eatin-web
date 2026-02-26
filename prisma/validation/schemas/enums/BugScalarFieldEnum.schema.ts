import * as z from 'zod';

export const BugScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'client_log', 'server_log', 'device_id', 'created_at', 'updated_at'])

export type BugScalarFieldEnum = z.infer<typeof BugScalarFieldEnumSchema>;