import * as z from 'zod';

export const ContactRequestScalarFieldEnumSchema = z.enum(['id', 'name', 'phone', 'email', 'device_id', 'created_at', 'updated_at'])

export type ContactRequestScalarFieldEnum = z.infer<typeof ContactRequestScalarFieldEnumSchema>;