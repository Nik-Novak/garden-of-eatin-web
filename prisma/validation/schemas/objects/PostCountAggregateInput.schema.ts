import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  category: z.literal(true).optional(),
  summary: z.literal(true).optional(),
  content: z.literal(true).optional(),
  keywords: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const PostCountAggregateInputObjectSchema: z.ZodType<Prisma.PostCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PostCountAggregateInputType>;
export const PostCountAggregateInputObjectZodSchema = makeSchema();
