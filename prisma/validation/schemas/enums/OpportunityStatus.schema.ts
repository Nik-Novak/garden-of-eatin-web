import * as z from 'zod';

export const OpportunityStatusSchema = z.enum(['OPEN', 'IN_PROGRESS', 'CLOSED'])

export type OpportunityStatus = z.infer<typeof OpportunityStatusSchema>;