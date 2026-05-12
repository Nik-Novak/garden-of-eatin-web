import * as z from 'zod';
// prettier-ignore
export const ResourceSearchHitInputSchema = z.object({
    id: z.string(),
    resource: z.unknown(),
    resource_id: z.string(),
    search: z.unknown(),
    search_id: z.string(),
    created_at: z.date()
}).strict();

export type ResourceSearchHitInputType = z.infer<typeof ResourceSearchHitInputSchema>;
