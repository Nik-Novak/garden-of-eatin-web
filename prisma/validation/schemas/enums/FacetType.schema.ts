import * as z from 'zod';

export const FacetTypeSchema = z.enum(['hospitality', 'tastiness', 'accessibility', 'restrooms', 'resources'])

export type FacetType = z.infer<typeof FacetTypeSchema>;