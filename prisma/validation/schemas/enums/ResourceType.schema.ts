import * as z from 'zod';

export const ResourceTypeSchema = z.enum(['Pickup', 'Dropoff'])

export type ResourceType = z.infer<typeof ResourceTypeSchema>;