import * as z from 'zod';
export const OpportunityApplicationUpsertResultSchema = z.object({
  id: z.string(),
  opportunity: z.unknown(),
  opportunity_id: z.string(),
  user: z.unknown().optional(),
  user_id: z.string().optional(),
  status: z.unknown(),
  applicant_first_name: z.string(),
  applicant_last_name: z.string(),
  applicant_email: z.string(),
  applicant_phone: z.string(),
  applicant_availability: z.array(z.unknown()),
  created_at: z.date(),
  updated_at: z.date()
});