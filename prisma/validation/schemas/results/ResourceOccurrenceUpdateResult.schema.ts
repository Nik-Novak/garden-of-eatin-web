import * as z from 'zod';
export const ResourceOccurrenceUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  resource: z.unknown(),
  resource_id: z.string(),
  start: z.date(),
  end: z.date(),
  timezone: z.string(),
  location: z.unknown(),
  created_at: z.date()
}));