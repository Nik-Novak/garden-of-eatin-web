import * as z from 'zod';
import { OpportunityApplicationStatusSchema } from '../../enums/OpportunityApplicationStatus.schema';
// prettier-ignore
export const OpportunityApplicationInputSchema = z.object({
    id: z.string(),
    opportunity: z.unknown(),
    opportunity_id: z.string(),
    user: z.unknown().optional().nullable(),
    user_id: z.string().optional().nullable(),
    status: OpportunityApplicationStatusSchema,
    applicant_first_name: z.string(),
    applicant_last_name: z.string(),
    applicant_email: z.string(),
    applicant_phone: z.string(),
    applicant_availability: z.array(z.unknown()),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type OpportunityApplicationInputType = z.infer<typeof OpportunityApplicationInputSchema>;
