import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  level: z.literal(true).optional(),
  content_md: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const NoticeCountAggregateInputObjectSchema: z.ZodType<Prisma.NoticeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NoticeCountAggregateInputType>;
export const NoticeCountAggregateInputObjectZodSchema = makeSchema();
