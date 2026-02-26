import * as z from 'zod';
// prettier-ignore
export const PostResultSchema = z.object({
    id: z.string(),
    title: z.string(),
    category: z.string().nullable(),
    images: z.array(z.unknown()),
    summary: z.string().nullable(),
    content: z.string(),
    keywords: z.array(z.string()),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type PostResultType = z.infer<typeof PostResultSchema>;
