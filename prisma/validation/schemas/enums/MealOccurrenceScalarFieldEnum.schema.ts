import * as z from 'zod';

export const MealOccurrenceScalarFieldEnumSchema = z.enum(['id', 'meal_id', 'start', 'end', 'timezone', 'created_at'])

export type MealOccurrenceScalarFieldEnum = z.infer<typeof MealOccurrenceScalarFieldEnumSchema>;