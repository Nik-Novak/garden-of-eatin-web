import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  level: z.literal(true).optional(),
  content_md: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const NoticeMinAggregateInputObjectSchema: z.ZodType<Prisma.NoticeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NoticeMinAggregateInputType>;
export const NoticeMinAggregateInputObjectZodSchema = makeSchema();
