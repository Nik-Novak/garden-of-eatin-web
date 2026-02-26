import * as z from 'zod';
// prettier-ignore
export const PostModelSchema = z.object({
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

export type PostPureType = z.infer<typeof PostModelSchema>;
