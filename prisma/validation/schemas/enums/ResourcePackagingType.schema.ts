import * as z from 'zod';

export const ResourcePackagingTypeSchema = z.enum(['Loose', 'Bags', 'Boxes', 'IndustrialSacks', 'Pallets'])

export type ResourcePackagingType = z.infer<typeof ResourcePackagingTypeSchema>;