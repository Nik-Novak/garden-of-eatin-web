import * as z from 'zod';

export const ResourceSearchTypeSchema = z.enum(['Explore', 'Refresh'])

export type ResourceSearchType = z.infer<typeof ResourceSearchTypeSchema>;