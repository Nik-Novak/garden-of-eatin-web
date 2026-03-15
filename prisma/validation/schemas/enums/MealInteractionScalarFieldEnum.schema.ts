import * as z from 'zod';

export const MealInteractionScalarFieldEnumSchema = z.enum(['id', 'interaction_type', 'meal_id', 'device_id', 'created_at'])

export type MealInteractionScalarFieldEnum = z.infer<typeof MealInteractionScalarFieldEnumSchema>;