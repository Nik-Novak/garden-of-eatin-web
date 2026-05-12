import * as z from 'zod';

export const SelectionTypeSchema = z.enum(['Choice', 'NoChoice'])

export type SelectionType = z.infer<typeof SelectionTypeSchema>;