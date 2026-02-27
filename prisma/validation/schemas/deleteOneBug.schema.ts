import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BugSelectObjectSchema as BugSelectObjectSchema } from './objects/BugSelect.schema';
import { BugIncludeObjectSchema as BugIncludeObjectSchema } from './objects/BugInclude.schema';
import { BugWhereUniqueInputObjectSchema as BugWhereUniqueInputObjectSchema } from './objects/BugWhereUniqueInput.schema';

export const BugDeleteOneSchema: z.ZodType<Prisma.BugDeleteArgs> = z.object({ select: BugSelectObjectSchema.optional(), include: BugIncludeObjectSchema.optional(), where: BugWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BugDeleteArgs>;

export const BugDeleteOneZodSchema = z.object({ select: BugSelectObjectSchema.optional(), include: BugIncludeObjectSchema.optional(), where: BugWhereUniqueInputObjectSchema }).strict();