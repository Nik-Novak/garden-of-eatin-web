import * as z from 'zod';

export const MealScalarFieldEnumSchema = z.enum(['id', 'name', 'timezone', 'setting', 'service', 'parking', 'features', 'approved', 'submitter_id', 'submitter_name', 'created_at', 'updated_at'])

export type MealScalarFieldEnum = z.infer<typeof MealScalarFieldEnumSchema>;