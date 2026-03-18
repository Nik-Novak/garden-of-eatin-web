import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NoticeSelectObjectSchema as NoticeSelectObjectSchema } from './objects/NoticeSelect.schema';
import { NoticeUpdateInputObjectSchema as NoticeUpdateInputObjectSchema } from './objects/NoticeUpdateInput.schema';
import { NoticeUncheckedUpdateInputObjectSchema as NoticeUncheckedUpdateInputObjectSchema } from './objects/NoticeUncheckedUpdateInput.schema';
import { NoticeWhereUniqueInputObjectSchema as NoticeWhereUniqueInputObjectSchema } from './objects/NoticeWhereUniqueInput.schema';

export const NoticeUpdateOneSchema: z.ZodType<Prisma.NoticeUpdateArgs> = z.object({ select: NoticeSelectObjectSchema.optional(),  data: z.union([NoticeUpdateInputObjectSchema, NoticeUncheckedUpdateInputObjectSchema]), where: NoticeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NoticeUpdateArgs>;

export const NoticeUpdateOneZodSchema = z.object({ select: NoticeSelectObjectSchema.optional(),  data: z.union([NoticeUpdateInputObjectSchema, NoticeUncheckedUpdateInputObjectSchema]), where: NoticeWhereUniqueInputObjectSchema }).strict();