import * as z from 'zod';
// prettier-ignore
export const MealSearchHitInputSchema = z.object({
    id: z.string(),
    meal: z.unknown(),
    meal_id: z.string(),
    search: z.unknown(),
    search_id: z.string(),
    created_at: z.date()
}).strict();

export type MealSearchHitInputType = z.infer<typeof MealSearchHitInputSchema>;
