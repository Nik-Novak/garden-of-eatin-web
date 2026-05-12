import * as z from 'zod';
export const ResourceOccurrenceAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    resource: z.number(),
    resource_id: z.number(),
    start: z.number(),
    end: z.number(),
    timezone: z.number(),
    location: z.number(),
    created_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    resource_id: z.string().nullable(),
    start: z.date().nullable(),
    end: z.date().nullable(),
    timezone: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    resource_id: z.string().nullable(),
    start: z.date().nullable(),
    end: z.date().nullable(),
    timezone: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()});