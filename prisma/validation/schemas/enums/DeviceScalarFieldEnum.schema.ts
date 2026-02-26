import * as z from 'zod';

export const DeviceScalarFieldEnumSchema = z.enum(['id', 'uuid', 'user_id', 'created_at', 'updated_at'])

export type DeviceScalarFieldEnum = z.infer<typeof DeviceScalarFieldEnumSchema>;