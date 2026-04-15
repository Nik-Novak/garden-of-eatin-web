import * as z from 'zod';
export const ResourceSearchHitFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  resource: z.unknown(),
  resource_id: z.string(),
  search: z.unknown(),
  search_id: z.string(),
  created_at: z.date()
}));