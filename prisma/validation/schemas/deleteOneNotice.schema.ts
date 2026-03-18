import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NoticeSelectObjectSchema as NoticeSelectObjectSchema } from './objects/NoticeSelect.schema';
import { NoticeWhereUniqueInputObjectSchema as NoticeWhereUniqueInputObjectSchema } from './objects/NoticeWhereUniqueInput.schema';

export const NoticeDeleteOneSchema: z.ZodType<Prisma.NoticeDeleteArgs> = z.object({ select: NoticeSelectObjectSchema.optional(),  where: NoticeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NoticeDeleteArgs>;

export const NoticeDeleteOneZodSchema = z.object({ select: NoticeSelectObjectSchema.optional(),  where: NoticeWhereUniqueInputObjectSchema }).strict();