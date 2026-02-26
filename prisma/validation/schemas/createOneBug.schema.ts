import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { BugSelectObjectSchema as BugSelectObjectSchema } from './objects/BugSelect.schema';
import { BugIncludeObjectSchema as BugIncludeObjectSchema } from './objects/BugInclude.schema';
import { BugCreateInputObjectSchema as BugCreateInputObjectSchema } from './objects/BugCreateInput.schema';
import { BugUncheckedCreateInputObjectSchema as BugUncheckedCreateInputObjectSchema } from './objects/BugUncheckedCreateInput.schema';

export const BugCreateOneSchema: z.ZodType<Prisma.BugCreateArgs> = z.object({ select: BugSelectObjectSchema.optional(), include: BugIncludeObjectSchema.optional(), data: z.union([BugCreateInputObjectSchema, BugUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BugCreateArgs>;

export const BugCreateOneZodSchema = z.object({ select: BugSelectObjectSchema.optional(), include: BugIncludeObjectSchema.optional(), data: z.union([BugCreateInputObjectSchema, BugUncheckedCreateInputObjectSchema]) }).strict();