import * as z from 'zod';

export const MealScalarFieldEnumSchema = z.enum(['id', 'name', 'timezone', 'setting', 'service', 'parking', 'features', 'meal_occurrence_search_ids', 'approved', 'rejection_reason', 'submitter_id', 'submitter_name', 'created_at', 'updated_at'])

export type MealScalarFieldEnum = z.infer<typeof MealScalarFieldEnumSchema>;