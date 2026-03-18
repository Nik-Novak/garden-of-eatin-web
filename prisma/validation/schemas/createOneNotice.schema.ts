import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NoticeSelectObjectSchema as NoticeSelectObjectSchema } from './objects/NoticeSelect.schema';
import { NoticeCreateInputObjectSchema as NoticeCreateInputObjectSchema } from './objects/NoticeCreateInput.schema';
import { NoticeUncheckedCreateInputObjectSchema as NoticeUncheckedCreateInputObjectSchema } from './objects/NoticeUncheckedCreateInput.schema';

export const NoticeCreateOneSchema: z.ZodType<Prisma.NoticeCreateArgs> = z.object({ select: NoticeSelectObjectSchema.optional(),  data: z.union([NoticeCreateInputObjectSchema, NoticeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.NoticeCreateArgs>;

export const NoticeCreateOneZodSchema = z.object({ select: NoticeSelectObjectSchema.optional(),  data: z.union([NoticeCreateInputObjectSchema, NoticeUncheckedCreateInputObjectSchema]) }).strict();