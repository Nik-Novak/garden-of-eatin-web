import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NoticeSelectObjectSchema as NoticeSelectObjectSchema } from './objects/NoticeSelect.schema';
import { NoticeWhereUniqueInputObjectSchema as NoticeWhereUniqueInputObjectSchema } from './objects/NoticeWhereUniqueInput.schema';
import { NoticeCreateInputObjectSchema as NoticeCreateInputObjectSchema } from './objects/NoticeCreateInput.schema';
import { NoticeUncheckedCreateInputObjectSchema as NoticeUncheckedCreateInputObjectSchema } from './objects/NoticeUncheckedCreateInput.schema';
import { NoticeUpdateInputObjectSchema as NoticeUpdateInputObjectSchema } from './objects/NoticeUpdateInput.schema';
import { NoticeUncheckedUpdateInputObjectSchema as NoticeUncheckedUpdateInputObjectSchema } from './objects/NoticeUncheckedUpdateInput.schema';

export const NoticeUpsertOneSchema: z.ZodType<Prisma.NoticeUpsertArgs> = z.object({ select: NoticeSelectObjectSchema.optional(),  where: NoticeWhereUniqueInputObjectSchema, create: z.union([ NoticeCreateInputObjectSchema, NoticeUncheckedCreateInputObjectSchema ]), update: z.union([ NoticeUpdateInputObjectSchema, NoticeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.NoticeUpsertArgs>;

export const NoticeUpsertOneZodSchema = z.object({ select: NoticeSelectObjectSchema.optional(),  where: NoticeWhereUniqueInputObjectSchema, create: z.union([ NoticeCreateInputObjectSchema, NoticeUncheckedCreateInputObjectSchema ]), update: z.union([ NoticeUpdateInputObjectSchema, NoticeUncheckedUpdateInputObjectSchema ]) }).strict();