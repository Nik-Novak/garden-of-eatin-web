import * as z from 'zod';

export const VehicleTypeSchema = z.enum(['Car', 'SUV', 'Van', 'BoxTruck', 'Trailer', 'Truck', 'SemiTruck'])

export type VehicleType = z.infer<typeof VehicleTypeSchema>;