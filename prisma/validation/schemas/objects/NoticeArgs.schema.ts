import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NoticeSelectObjectSchema as NoticeSelectObjectSchema } from './NoticeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => NoticeSelectObjectSchema).optional()
}).strict();
export const NoticeArgsObjectSchema = makeSchema();
export const NoticeArgsObjectZodSchema = makeSchema();
