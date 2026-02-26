import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { OpportunityArgsObjectSchema as OpportunityArgsObjectSchema } from './OpportunityArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  opportunity: z.union([z.boolean(), z.lazy(() => OpportunityArgsObjectSchema)]).optional(),
  opportunity_id: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  user_id: z.boolean().optional(),
  status: z.boolean().optional(),
  applicant_first_name: z.boolean().optional(),
  applicant_last_name: z.boolean().optional(),
  applicant_email: z.boolean().optional(),
  applicant_phone: z.boolean().optional(),
  applicant_availability: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional()
}).strict();
export const OpportunityApplicationSelectObjectSchema: z.ZodType<Prisma.OpportunityApplicationSelect> = makeSchema() as unknown as z.ZodType<Prisma.OpportunityApplicationSelect>;
export const OpportunityApplicationSelectObjectZodSchema = makeSchema();
