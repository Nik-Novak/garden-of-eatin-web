import * as z from 'zod';
export const ResourceInteractionFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  interaction_type: z.unknown(),
  resource: z.unknown(),
  resource_id: z.string(),
  device: z.unknown(),
  device_id: z.string(),
  user_location: z.unknown(),
  created_at: z.date()
}));