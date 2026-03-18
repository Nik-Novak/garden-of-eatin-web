import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NoticeWhereInputObjectSchema as NoticeWhereInputObjectSchema } from './objects/NoticeWhereInput.schema';

export const NoticeDeleteManySchema: z.ZodType<Prisma.NoticeDeleteManyArgs> = z.object({ where: NoticeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NoticeDeleteManyArgs>;

export const NoticeDeleteManyZodSchema = z.object({ where: NoticeWhereInputObjectSchema.optional() }).strict();