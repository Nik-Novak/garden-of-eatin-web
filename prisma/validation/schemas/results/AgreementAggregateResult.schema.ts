import * as z from 'zod';
export const AgreementAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    agreement_type: z.number(),
    effective_date: z.number(),
    content_md: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    effective_date: z.date().nullable(),
    content_md: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    effective_date: z.date().nullable(),
    content_md: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()});