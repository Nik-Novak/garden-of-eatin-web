import * as z from 'zod';
// prettier-ignore
export const MealSearchHitResultSchema = z.object({
    id: z.string(),
    meal: z.unknown(),
    meal_id: z.string(),
    search: z.unknown(),
    search_id: z.string(),
    created_at: z.date()
}).strict();

export type MealSearchHitResultType = z.infer<typeof MealSearchHitResultSchema>;
