import * as z from 'zod';

export const MealSearchHitScalarFieldEnumSchema = z.enum(['id', 'meal_id', 'search_id', 'created_at'])

export type MealSearchHitScalarFieldEnum = z.infer<typeof MealSearchHitScalarFieldEnumSchema>;