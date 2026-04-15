import * as z from 'zod';
import { ResourceSearchTypeSchema } from '../../enums/ResourceSearchType.schema';
// prettier-ignore
export const ResourceOccurrenceSearchModelSchema = z.object({
    id: z.string(),
    search_type: ResourceSearchTypeSchema,
    hits: z.array(z.unknown()),
    start: z.date().nullable(),
    end: z.date().nullable(),
    radius_mi: z.number(),
    user_location: z.unknown(),
    device: z.unknown(),
    device_id: z.string(),
    created_at: z.date()
}).strict();

export type ResourceOccurrenceSearchPureType = z.infer<typeof ResourceOccurrenceSearchModelSchema>;
