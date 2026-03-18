import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  level: z.boolean().optional(),
  content_md: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional()
}).strict();
export const NoticeSelectObjectSchema: z.ZodType<Prisma.NoticeSelect> = makeSchema() as unknown as z.ZodType<Prisma.NoticeSelect>;
export const NoticeSelectObjectZodSchema = makeSchema();
