import * as z from 'zod';

export const WebDeviceScalarFieldEnumSchema = z.enum(['id', 'uuid', 'device_id', 'user_id', 'created_at', 'updated_at'])

export type WebDeviceScalarFieldEnum = z.infer<typeof WebDeviceScalarFieldEnumSchema>;