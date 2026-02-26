import * as z from 'zod';
import { OpportunityApplicationStatusSchema } from '../../enums/OpportunityApplicationStatus.schema';
// prettier-ignore
export const OpportunityApplicationResultSchema = z.object({
    id: z.string(),
    opportunity: z.unknown(),
    opportunity_id: z.string(),
    user: z.unknown().nullable(),
    user_id: z.string().nullable(),
    status: OpportunityApplicationStatusSchema,
    applicant_first_name: z.string(),
    applicant_last_name: z.string(),
    applicant_email: z.string(),
    applicant_phone: z.string(),
    applicant_availability: z.array(z.unknown()),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type OpportunityApplicationResultType = z.infer<typeof OpportunityApplicationResultSchema>;
