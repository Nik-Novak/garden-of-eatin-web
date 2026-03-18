import * as z from 'zod';

export const NoticeScalarFieldEnumSchema = z.enum(['id', 'level', 'content_md', 'created_at', 'updated_at'])

export type NoticeScalarFieldEnum = z.infer<typeof NoticeScalarFieldEnumSchema>;