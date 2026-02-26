import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  category: z.literal(true).optional(),
  summary: z.literal(true).optional(),
  content: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const PostMinAggregateInputObjectSchema: z.ZodType<Prisma.PostMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PostMinAggregateInputType>;
export const PostMinAggregateInputObjectZodSchema = makeSchema();
