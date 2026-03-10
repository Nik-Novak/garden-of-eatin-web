import * as z from 'zod';
import { SearchTypeSchema } from '../../enums/SearchType.schema';
// prettier-ignore
export const MealOccurrenceSearchInputSchema = z.object({
    id: z.string(),
    search_type: SearchTypeSchema,
    meals: z.array(z.unknown()),
    meal_ids: z.array(z.string()),
    start: z.date().optional().nullable(),
    end: z.date().optional().nullable(),
    radius_mi: z.number(),
    user_location: z.unknown(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type MealOccurrenceSearchInputType = z.infer<typeof MealOccurrenceSearchInputSchema>;
