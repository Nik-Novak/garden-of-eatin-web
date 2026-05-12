import * as z from 'zod';
// prettier-ignore
export const ResourceSearchHitModelSchema = z.object({
    id: z.string(),
    resource: z.unknown(),
    resource_id: z.string(),
    search: z.unknown(),
    search_id: z.string(),
    created_at: z.date()
}).strict();

export type ResourceSearchHitPureType = z.infer<typeof ResourceSearchHitModelSchema>;
