import * as z from 'zod';
export const BugGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  client_log: z.string(),
  server_log: z.string(),
  device_id: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    description: z.number(),
    client_log: z.number(),
    server_log: z.number(),
    device: z.number(),
    device_id: z.number(),
    created_at: z.number(),
    updated_at: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    client_log: z.string().nullable(),
    server_log: z.string().nullable(),
    device_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    client_log: z.string().nullable(),
    server_log: z.string().nullable(),
    device_id: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable()
  }).nullable().optional()
}));