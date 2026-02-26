import * as z from 'zod';

export const ParkingSchema = z.enum(['OnPremise', 'Street', 'None'])

export type Parking = z.infer<typeof ParkingSchema>;