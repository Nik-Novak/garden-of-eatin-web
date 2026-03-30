import * as z from 'zod';
export const ContributorAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    firstName: z.number(),
    defaultImage: z.number(),
    hoverImage: z.number(),
    order: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _sum: z.object({
    order: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    order: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    firstName: z.string().nullable(),
    defaultImage: z.string().nullable(),
    hoverImage: z.string().nullable(),
    order: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    firstName: z.string().nullable(),
    defaultImage: z.string().nullable(),
    hoverImage: z.string().nullable(),
    order: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()});