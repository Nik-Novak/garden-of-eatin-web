import * as z from 'zod';

export const MealOccurrenceSearchScalarFieldEnumSchema = z.enum(['id', 'search_type', 'start', 'end', 'radius_mi', 'device_id', 'created_at'])

export type MealOccurrenceSearchScalarFieldEnum = z.infer<typeof MealOccurrenceSearchScalarFieldEnumSchema>;