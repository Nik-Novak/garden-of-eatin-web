import * as z from 'zod';

export const PostScalarFieldEnumSchema = z.enum(['id', 'title', 'category', 'summary', 'content', 'keywords', 'created_at', 'updated_at'])

export type PostScalarFieldEnum = z.infer<typeof PostScalarFieldEnumSchema>;