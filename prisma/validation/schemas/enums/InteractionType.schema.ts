import * as z from 'zod';

export const InteractionTypeSchema = z.enum(['View', 'Navigate', 'Share'])

export type InteractionType = z.infer<typeof InteractionTypeSchema>;