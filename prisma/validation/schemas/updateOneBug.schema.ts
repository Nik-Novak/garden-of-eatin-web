import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BugSelectObjectSchema as BugSelectObjectSchema } from './objects/BugSelect.schema';
import { BugIncludeObjectSchema as BugIncludeObjectSchema } from './objects/BugInclude.schema';
import { BugUpdateInputObjectSchema as BugUpdateInputObjectSchema } from './objects/BugUpdateInput.schema';
import { BugUncheckedUpdateInputObjectSchema as BugUncheckedUpdateInputObjectSchema } from './objects/BugUncheckedUpdateInput.schema';
import { BugWhereUniqueInputObjectSchema as BugWhereUniqueInputObjectSchema } from './objects/BugWhereUniqueInput.schema';

export const BugUpdateOneSchema: z.ZodType<Prisma.BugUpdateArgs> = z.object({ select: BugSelectObjectSchema.optional(), include: BugIncludeObjectSchema.optional(), data: z.union([BugUpdateInputObjectSchema, BugUncheckedUpdateInputObjectSchema]), where: BugWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BugUpdateArgs>;

export const BugUpdateOneZodSchema = z.object({ select: BugSelectObjectSchema.optional(), include: BugIncludeObjectSchema.optional(), data: z.union([BugUpdateInputObjectSchema, BugUncheckedUpdateInputObjectSchema]), where: BugWhereUniqueInputObjectSchema }).strict();