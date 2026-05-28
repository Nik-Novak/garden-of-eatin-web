import * as z from 'zod';
export const AccountDeletionRequestGroupByResultSchema = z.array(z.object({
  id: z.string(),
  email: z.string(),
  reason: z.string(),
  feedback: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
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
  }).nullable().optional()
}));