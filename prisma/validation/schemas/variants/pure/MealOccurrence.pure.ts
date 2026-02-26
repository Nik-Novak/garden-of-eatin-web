import * as z from 'zod';
// prettier-ignore
export const MealOccurrenceModelSchema = z.object({
    id: z.string(),
    meal: z.unknown(),
    meal_id: z.string(),
    start: z.date(),
    end: z.date(),
    timezone: z.string(),
    location: z.unknown()
}).strict();

export type MealOccurrencePureType = z.infer<typeof MealOccurrenceModelSchema>;
