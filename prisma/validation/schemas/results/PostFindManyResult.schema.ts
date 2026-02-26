import * as z from 'zod';
export const PostFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  title: z.string(),
  category: z.string().optional(),
  images: z.array(z.unknown()),
  summary: z.string().optional(),
  content: z.string(),
  keywords: z.array(z.string()),
  created_at: z.date(),
  updated_at: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});