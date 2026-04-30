import * as z from 'zod';

export const ScannableDocumentScalarFieldEnumSchema = z.enum(['id', 'type', 'name', 'timezone', 'file_url', 'submitter_id', 'created_at', 'updated_at'])

export type ScannableDocumentScalarFieldEnum = z.infer<typeof ScannableDocumentScalarFieldEnumSchema>;