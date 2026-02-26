import * as z from 'zod';
export const PostUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  title: z.string(),
  category: z.string().optional(),
  images: z.array(z.unknown()),
  summary: z.string().optional(),
  content: z.string(),
  keywords: z.array(z.string()),
  created_at: z.date(),
  updated_at: z.date()
}));