import * as z from 'zod';

export const QRScanScalarFieldEnumSchema = z.enum(['id', 'qr_code_id', 'web_device_id', 'device_id', 'created_at', 'updated_at'])

export type QRScanScalarFieldEnum = z.infer<typeof QRScanScalarFieldEnumSchema>;