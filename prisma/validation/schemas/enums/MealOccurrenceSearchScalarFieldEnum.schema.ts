import * as z from 'zod';

export const MealOccurrenceSearchScalarFieldEnumSchema = z.enum(['id', 'search_type', 'meal_ids', 'start', 'end', 'radius_mi', 'created_at', 'updated_at'])

export type MealOccurrenceSearchScalarFieldEnum = z.infer<typeof MealOccurrenceSearchScalarFieldEnumSchema>;