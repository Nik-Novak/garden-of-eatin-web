import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NoticeUpdateManyMutationInputObjectSchema as NoticeUpdateManyMutationInputObjectSchema } from './objects/NoticeUpdateManyMutationInput.schema';
import { NoticeWhereInputObjectSchema as NoticeWhereInputObjectSchema } from './objects/NoticeWhereInput.schema';

export const NoticeUpdateManySchema: z.ZodType<Prisma.NoticeUpdateManyArgs> = z.object({ data: NoticeUpdateManyMutationInputObjectSchema, where: NoticeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NoticeUpdateManyArgs>;

export const NoticeUpdateManyZodSchema = z.object({ data: NoticeUpdateManyMutationInputObjectSchema, where: NoticeWhereInputObjectSchema.optional() }).strict();