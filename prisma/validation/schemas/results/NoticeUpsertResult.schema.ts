import * as z from 'zod';
export const NoticeUpsertResultSchema = z.object({
  id: z.string(),
  level: z.unknown(),
  content_md: z.string(),
  created_at: z.date(),
  updated_at: z.date()
});