import * as z from 'zod';
export const ResourceSearchHitAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    resource: z.number(),
    resource_id: z.number(),
    search: z.number(),
    search_id: z.number(),
    created_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    resource_id: z.string().nullable(),
    search_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    resource_id: z.string().nullable(),
    search_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()});