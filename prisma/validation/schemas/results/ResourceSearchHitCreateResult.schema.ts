import * as z from 'zod';
export const ResourceSearchHitCreateResultSchema = z.object({
  id: z.string(),
  resource: z.unknown(),
  resource_id: z.string(),
  search: z.unknown(),
  search_id: z.string(),
  created_at: z.date()
});