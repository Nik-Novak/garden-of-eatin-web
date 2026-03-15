import * as z from 'zod';
import { SearchTypeSchema } from '../../enums/SearchType.schema';
// prettier-ignore
export const MealOccurrenceSearchResultSchema = z.object({
    id: z.string(),
    search_type: SearchTypeSchema,
    hits: z.array(z.unknown()),
    start: z.date().nullable(),
    end: z.date().nullable(),
    radius_mi: z.number(),
    user_location: z.unknown(),
    device: z.unknown(),
    device_id: z.string(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type MealOccurrenceSearchResultType = z.infer<typeof MealOccurrenceSearchResultSchema>;
