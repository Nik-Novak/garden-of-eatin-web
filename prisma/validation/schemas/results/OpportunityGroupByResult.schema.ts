import * as z from 'zod';
export const OpportunityGroupByResultSchema = z.array(z.object({
  id: z.string(),
  title: z.string(),
  abstract: z.string(),
  description: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  _count: z.object({
    id: z.number(),
    title: z.number(),
    abstract: z.number(),
    description: z.number(),
    status: z.number(),
    applications: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    abstract: z.string().nullable(),
    description: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    abstract: z.string().nullable(),
    description: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()
}));