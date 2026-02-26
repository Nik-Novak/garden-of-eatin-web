import * as z from 'zod';
export const PostGroupByResultSchema = z.array(z.object({
  id: z.string(),
  title: z.string(),
  category: z.string(),
  summary: z.string(),
  content: z.string(),
  keywords: z.array(z.string()),
  created_at: z.date(),
  updated_at: z.date(),
  _count: z.object({
    id: z.number(),
    title: z.number(),
    category: z.number(),
    images: z.number(),
    summary: z.number(),
    content: z.number(),
    keywords: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    category: z.string().nullable(),
    summary: z.string().nullable(),
    content: z.string().nullable(),
    keywords: z.array(z.string()).nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    category: z.string().nullable(),
    summary: z.string().nullable(),
    content: z.string().nullable(),
    keywords: z.array(z.string()).nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()
}));