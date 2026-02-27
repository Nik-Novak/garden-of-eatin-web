import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InviteSelectObjectSchema as InviteSelectObjectSchema } from './objects/InviteSelect.schema';
import { InviteIncludeObjectSchema as InviteIncludeObjectSchema } from './objects/InviteInclude.schema';
import { InviteWhereUniqueInputObjectSchema as InviteWhereUniqueInputObjectSchema } from './objects/InviteWhereUniqueInput.schema';
import { InviteCreateInputObjectSchema as InviteCreateInputObjectSchema } from './objects/InviteCreateInput.schema';
import { InviteUncheckedCreateInputObjectSchema as InviteUncheckedCreateInputObjectSchema } from './objects/InviteUncheckedCreateInput.schema';
import { InviteUpdateInputObjectSchema as InviteUpdateInputObjectSchema } from './objects/InviteUpdateInput.schema';
import { InviteUncheckedUpdateInputObjectSchema as InviteUncheckedUpdateInputObjectSchema } from './objects/InviteUncheckedUpdateInput.schema';

export const InviteUpsertOneSchema: z.ZodType<Prisma.InviteUpsertArgs> = z.object({ select: InviteSelectObjectSchema.optional(), include: InviteIncludeObjectSchema.optional(), where: InviteWhereUniqueInputObjectSchema, create: z.union([ InviteCreateInputObjectSchema, InviteUncheckedCreateInputObjectSchema ]), update: z.union([ InviteUpdateInputObjectSchema, InviteUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.InviteUpsertArgs>;

export const InviteUpsertOneZodSchema = z.object({ select: InviteSelectObjectSchema.optional(), include: InviteIncludeObjectSchema.optional(), where: InviteWhereUniqueInputObjectSchema, create: z.union([ InviteCreateInputObjectSchema, InviteUncheckedCreateInputObjectSchema ]), update: z.union([ InviteUpdateInputObjectSchema, InviteUncheckedUpdateInputObjectSchema ]) }).strict();