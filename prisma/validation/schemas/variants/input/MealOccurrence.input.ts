import * as z from 'zod';
// prettier-ignore
export const MealOccurrenceInputSchema = z.object({
    id: z.string(),
    meal: z.unknown(),
    meal_id: z.string(),
    start: z.date(),
    end: z.date(),
    timezone: z.string(),
    location: z.unknown(),
    created_at: z.date()
}).strict();

export type MealOccurrenceInputType = z.infer<typeof MealOccurrenceInputSchema>;
