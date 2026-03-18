import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NoticeLevelSchema } from '../enums/NoticeLevel.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  level: NoticeLevelSchema,
  content_md: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const NoticeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.NoticeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.NoticeUncheckedCreateInput>;
export const NoticeUncheckedCreateInputObjectZodSchema = makeSchema();
