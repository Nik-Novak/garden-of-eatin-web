import * as z from 'zod';
import { InteractionTypeSchema } from '../../enums/InteractionType.schema';
// prettier-ignore
export const MealInteractionInputSchema = z.object({
    id: z.string(),
    interaction_type: InteractionTypeSchema,
    meal: z.unknown(),
    meal_id: z.string(),
    device: z.unknown(),
    device_id: z.string(),
    user_location: z.unknown(),
    created_at: z.date()
}).strict();

export type MealInteractionInputType = z.infer<typeof MealInteractionInputSchema>;
