import * as z from 'zod';

export const MealOccurrenceScalarFieldEnumSchema = z.enum(['id', 'meal_id', 'start', 'end', 'timezone'])

export type MealOccurrenceScalarFieldEnum = z.infer<typeof MealOccurrenceScalarFieldEnumSchema>;