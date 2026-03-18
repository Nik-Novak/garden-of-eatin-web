import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional()
}).strict();
export const NoticeWhereUniqueInputObjectSchema: z.ZodType<Prisma.NoticeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.NoticeWhereUniqueInput>;
export const NoticeWhereUniqueInputObjectZodSchema = makeSchema();
