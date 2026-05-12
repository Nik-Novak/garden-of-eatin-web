import * as z from 'zod';
// prettier-ignore
export const ResourceOccurrenceInputSchema = z.object({
    id: z.string(),
    resource: z.unknown(),
    resource_id: z.string(),
    start: z.date(),
    end: z.date(),
    timezone: z.string(),
    location: z.unknown(),
    created_at: z.date()
}).strict();

export type ResourceOccurrenceInputType = z.infer<typeof ResourceOccurrenceInputSchema>;
