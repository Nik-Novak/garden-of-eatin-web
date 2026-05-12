import * as z from 'zod';

export const DietaryTagSchema = z.enum(['Halal', 'Kosher', 'Vegan', 'Vegetarian', 'GlutenFree', 'NutFree', 'LowSodium'])

export type DietaryTag = z.infer<typeof DietaryTagSchema>;