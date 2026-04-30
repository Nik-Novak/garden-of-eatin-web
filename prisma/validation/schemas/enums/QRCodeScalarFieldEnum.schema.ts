import * as z from 'zod';

export const QRCodeScalarFieldEnumSchema = z.enum(['id', 'name', 'scannable_document_id', 'created_at', 'updated_at'])

export type QRCodeScalarFieldEnum = z.infer<typeof QRCodeScalarFieldEnumSchema>;