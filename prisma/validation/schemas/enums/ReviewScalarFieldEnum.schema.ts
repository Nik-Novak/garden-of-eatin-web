import * as z from 'zod';

export const ReviewScalarFieldEnumSchema = z.enum(['id', 'name', 'overall', 'feature_reviews', 'device_id', 'meal_id', 'created_at', 'updated_at'])

export type ReviewScalarFieldEnum = z.infer<typeof ReviewScalarFieldEnumSchema>;