import * as z from 'zod';

export const TravelModeSchema = z.enum(['Walking', 'Cycling', 'Driving'])

export type TravelMode = z.infer<typeof TravelModeSchema>;