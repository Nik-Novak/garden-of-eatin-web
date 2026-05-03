import * as z from 'zod';
export const DummyGenTypesGroupByResultSchema = z.array(z.object({
  id: z.string(),
  _count: z.object({
    id: z.number(),
    qrarp: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable()
  }).nullable().optional()
}));