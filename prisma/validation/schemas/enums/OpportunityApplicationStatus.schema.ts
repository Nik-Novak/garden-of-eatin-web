import * as z from 'zod';

export const OpportunityApplicationStatusSchema = z.enum(['IN_PROGRESS', 'ACCEPTED', 'REJECTED'])

export type OpportunityApplicationStatus = z.infer<typeof OpportunityApplicationStatusSchema>;