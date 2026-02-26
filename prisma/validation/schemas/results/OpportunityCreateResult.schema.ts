import * as z from 'zod';
export const OpportunityCreateResultSchema = z.object({
  id: z.string(),
  title: z.string(),
  abstract: z.string().optional(),
  description: z.string().optional(),
  status: z.unknown(),
  applications: z.array(z.unknown()),
  created_at: z.date(),
  updated_at: z.date()
});