import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  opportunity_id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  status: z.literal(true).optional(),
  applicant_first_name: z.literal(true).optional(),
  applicant_last_name: z.literal(true).optional(),
  applicant_email: z.literal(true).optional(),
  applicant_phone: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const OpportunityApplicationMaxAggregateInputObjectSchema: z.ZodType<Prisma.OpportunityApplicationMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationMaxAggregateInputType>;
export const OpportunityApplicationMaxAggregateInputObjectZodSchema = makeSchema();
