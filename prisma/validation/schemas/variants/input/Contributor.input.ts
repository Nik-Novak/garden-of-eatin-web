import * as z from 'zod';
// prettier-ignore
export const ContributorInputSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    defaultImage: z.string(),
    hoverImage: z.string(),
    order: z.number().int().optional().nullable(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type ContributorInputType = z.infer<typeof ContributorInputSchema>;
