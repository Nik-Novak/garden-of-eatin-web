import * as z from 'zod';
export const ContributorUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  firstName: z.string(),
  defaultImage: z.string(),
  hoverImage: z.string(),
  order: z.number().int().optional(),
  created_at: z.date(),
  updated_at: z.date()
}));