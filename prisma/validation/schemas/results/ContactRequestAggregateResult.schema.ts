import * as z from 'zod';
export const ContactRequestAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    phone: z.number(),
    email: z.number(),
    device: z.number(),
    device_id: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    phone: z.string().nullable(),
    email: z.string().nullable(),
    device_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    phone: z.string().nullable(),
    email: z.string().nullable(),
    device_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()});