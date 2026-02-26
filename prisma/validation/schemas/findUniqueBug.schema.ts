import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { BugSelectObjectSchema as BugSelectObjectSchema } from './objects/BugSelect.schema';
import { BugIncludeObjectSchema as BugIncludeObjectSchema } from './objects/BugInclude.schema';
import { BugWhereUniqueInputObjectSchema as BugWhereUniqueInputObjectSchema } from './objects/BugWhereUniqueInput.schema';

export const BugFindUniqueSchema: z.ZodType<Prisma.BugFindUniqueArgs> = z.object({ select: BugSelectObjectSchema.optional(), include: BugIncludeObjectSchema.optional(), where: BugWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BugFindUniqueArgs>;

export const BugFindUniqueZodSchema = z.object({ select: BugSelectObjectSchema.optional(), include: BugIncludeObjectSchema.optional(), where: BugWhereUniqueInputObjectSchema }).strict();