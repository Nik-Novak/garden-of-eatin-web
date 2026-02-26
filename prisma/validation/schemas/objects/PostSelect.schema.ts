import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  category: z.boolean().optional(),
  images: z.boolean().optional(),
  summary: z.boolean().optional(),
  content: z.boolean().optional(),
  keywords: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional()
}).strict();
export const PostSelectObjectSchema: z.ZodType<Prisma.PostSelect> = makeSchema() as unknown as z.ZodType<Prisma.PostSelect>;
export const PostSelectObjectZodSchema = makeSchema();
