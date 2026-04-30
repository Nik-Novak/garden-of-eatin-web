import * as z from 'zod';

export const SearchTypeSchema = z.enum(['Button', 'Explore', 'Refresh', 'ScannableDocument'])

export type SearchType = z.infer<typeof SearchTypeSchema>;