import * as z from 'zod';
export const AccountDeletionRequestAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    email: z.number(),
    reason: z.number(),
    feedback: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    email: z.string().nullable(),
    reason: z.string().nullable(),
    feedback: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    email: z.string().nullable(),
    reason: z.string().nullable(),
    feedback: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});