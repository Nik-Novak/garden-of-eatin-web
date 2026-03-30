import * as z from 'zod';
// prettier-ignore
export const ContributorModelSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    defaultImage: z.string(),
    hoverImage: z.string(),
    order: z.number().int().nullable(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type ContributorPureType = z.infer<typeof ContributorModelSchema>;
