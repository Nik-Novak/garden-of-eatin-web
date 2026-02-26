import * as z from 'zod';
import { OpportunityStatusSchema } from '../../enums/OpportunityStatus.schema';
// prettier-ignore
export const OpportunityInputSchema = z.object({
    id: z.string(),
    title: z.string(),
    abstract: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    status: OpportunityStatusSchema,
    applications: z.array(z.unknown()),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type OpportunityInputType = z.infer<typeof OpportunityInputSchema>;
