import * as z from 'zod';
import { OpportunityStatusSchema } from '../../enums/OpportunityStatus.schema';
// prettier-ignore
export const OpportunityModelSchema = z.object({
    id: z.string(),
    title: z.string(),
    abstract: z.string().nullable(),
    description: z.string().nullable(),
    status: OpportunityStatusSchema,
    applications: z.array(z.unknown()),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type OpportunityPureType = z.infer<typeof OpportunityModelSchema>;
