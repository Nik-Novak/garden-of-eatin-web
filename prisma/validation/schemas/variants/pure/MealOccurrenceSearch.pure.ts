import * as z from 'zod';
import { SearchTypeSchema } from '../../enums/SearchType.schema';
// prettier-ignore
export const MealOccurrenceSearchModelSchema = z.object({
    id: z.string(),
    search_type: SearchTypeSchema,
    meals: z.array(z.unknown()),
    meal_ids: z.array(z.string()),
    start: z.date().nullable(),
    end: z.date().nullable(),
    radius_mi: z.number(),
    user_location: z.unknown(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type MealOccurrenceSearchPureType = z.infer<typeof MealOccurrenceSearchModelSchema>;
