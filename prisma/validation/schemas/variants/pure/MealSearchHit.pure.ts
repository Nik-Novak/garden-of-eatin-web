import * as z from 'zod';
// prettier-ignore
export const MealSearchHitModelSchema = z.object({
    id: z.string(),
    meal: z.unknown(),
    meal_id: z.string(),
    search: z.unknown(),
    search_id: z.string(),
    created_at: z.date()
}).strict();

export type MealSearchHitPureType = z.infer<typeof MealSearchHitModelSchema>;
