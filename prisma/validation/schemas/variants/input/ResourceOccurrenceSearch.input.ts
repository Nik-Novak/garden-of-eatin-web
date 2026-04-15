import * as z from 'zod';
import { ResourceSearchTypeSchema } from '../../enums/ResourceSearchType.schema';
// prettier-ignore
export const ResourceOccurrenceSearchInputSchema = z.object({
    id: z.string(),
    search_type: ResourceSearchTypeSchema,
    hits: z.array(z.unknown()),
    start: z.date().optional().nullable(),
    end: z.date().optional().nullable(),
    radius_mi: z.number(),
    user_location: z.unknown(),
    device: z.unknown(),
    device_id: z.string(),
    created_at: z.date()
}).strict();

export type ResourceOccurrenceSearchInputType = z.infer<typeof ResourceOccurrenceSearchInputSchema>;
