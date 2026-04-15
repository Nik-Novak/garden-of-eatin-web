import * as z from 'zod';

export const ListingTypeSchema = z.enum(['Pickup', 'Dropoff'])

export type ListingType = z.infer<typeof ListingTypeSchema>;