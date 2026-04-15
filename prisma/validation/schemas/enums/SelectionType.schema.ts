import * as z from 'zod';

export const SelectionTypeSchema = z.enum(['Choice', 'Predetermined'])

export type SelectionType = z.infer<typeof SelectionTypeSchema>;