import * as z from 'zod';
// prettier-ignore
export const PostInputSchema = z.object({
    id: z.string(),
    title: z.string(),
    category: z.string().optional().nullable(),
    images: z.array(z.unknown()),
    summary: z.string().optional().nullable(),
    content: z.string(),
    keywords: z.array(z.string()),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type PostInputType = z.infer<typeof PostInputSchema>;
