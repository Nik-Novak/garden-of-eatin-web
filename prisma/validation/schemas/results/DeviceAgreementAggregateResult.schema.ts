import * as z from 'zod';
export const DeviceAgreementAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    device: z.number(),
    device_id: z.number(),
    agreement: z.number(),
    agreement_id: z.number(),
    opened: z.number(),
    accepted: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    device_id: z.string().nullable(),
    agreement_id: z.string().nullable(),
    opened: z.date().nullable(),
    accepted: z.date().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    device_id: z.string().nullable(),
    agreement_id: z.string().nullable(),
    opened: z.date().nullable(),
    accepted: z.date().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()});