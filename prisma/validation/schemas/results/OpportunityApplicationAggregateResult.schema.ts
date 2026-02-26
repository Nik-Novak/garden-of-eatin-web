import * as z from 'zod';
export const OpportunityApplicationAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    opportunity: z.number(),
    opportunity_id: z.number(),
    user: z.number(),
    user_id: z.number(),
    status: z.number(),
    applicant_first_name: z.number(),
    applicant_last_name: z.number(),
    applicant_email: z.number(),
    applicant_phone: z.number(),
    applicant_availability: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    opportunity_id: z.string().nullable(),
    user_id: z.string().nullable(),
    applicant_first_name: z.string().nullable(),
    applicant_last_name: z.string().nullable(),
    applicant_email: z.string().nullable(),
    applicant_phone: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    opportunity_id: z.string().nullable(),
    user_id: z.string().nullable(),
    applicant_first_name: z.string().nullable(),
    applicant_last_name: z.string().nullable(),
    applicant_email: z.string().nullable(),
    applicant_phone: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()});