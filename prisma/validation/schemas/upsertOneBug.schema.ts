import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BugSelectObjectSchema as BugSelectObjectSchema } from './objects/BugSelect.schema';
import { BugIncludeObjectSchema as BugIncludeObjectSchema } from './objects/BugInclude.schema';
import { BugWhereUniqueInputObjectSchema as BugWhereUniqueInputObjectSchema } from './objects/BugWhereUniqueInput.schema';
import { BugCreateInputObjectSchema as BugCreateInputObjectSchema } from './objects/BugCreateInput.schema';
import { BugUncheckedCreateInputObjectSchema as BugUncheckedCreateInputObjectSchema } from './objects/BugUncheckedCreateInput.schema';
import { BugUpdateInputObjectSchema as BugUpdateInputObjectSchema } from './objects/BugUpdateInput.schema';
import { BugUncheckedUpdateInputObjectSchema as BugUncheckedUpdateInputObjectSchema } from './objects/BugUncheckedUpdateInput.schema';

export const BugUpsertOneSchema: z.ZodType<Prisma.BugUpsertArgs> = z.object({ select: BugSelectObjectSchema.optional(), include: BugIncludeObjectSchema.optional(), where: BugWhereUniqueInputObjectSchema, create: z.union([ BugCreateInputObjectSchema, BugUncheckedCreateInputObjectSchema ]), update: z.union([ BugUpdateInputObjectSchema, BugUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BugUpsertArgs>;

export const BugUpsertOneZodSchema = z.object({ select: BugSelectObjectSchema.optional(), include: BugIncludeObjectSchema.optional(), where: BugWhereUniqueInputObjectSchema, create: z.union([ BugCreateInputObjectSchema, BugUncheckedCreateInputObjectSchema ]), update: z.union([ BugUpdateInputObjectSchema, BugUncheckedUpdateInputObjectSchema ]) }).strict();