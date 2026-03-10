import * as z from 'zod';
export const AgreementFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  agreement_type: z.unknown(),
  effective_date: z.date(),
  content_md: z.string(),
  created_at: z.date(),
  updated_at: z.date()
}));