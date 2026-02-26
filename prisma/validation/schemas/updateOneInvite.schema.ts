import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { InviteSelectObjectSchema as InviteSelectObjectSchema } from './objects/InviteSelect.schema';
import { InviteIncludeObjectSchema as InviteIncludeObjectSchema } from './objects/InviteInclude.schema';
import { InviteUpdateInputObjectSchema as InviteUpdateInputObjectSchema } from './objects/InviteUpdateInput.schema';
import { InviteUncheckedUpdateInputObjectSchema as InviteUncheckedUpdateInputObjectSchema } from './objects/InviteUncheckedUpdateInput.schema';
import { InviteWhereUniqueInputObjectSchema as InviteWhereUniqueInputObjectSchema } from './objects/InviteWhereUniqueInput.schema';

export const InviteUpdateOneSchema: z.ZodType<Prisma.InviteUpdateArgs> = z.object({ select: InviteSelectObjectSchema.optional(), include: InviteIncludeObjectSchema.optional(), data: z.union([InviteUpdateInputObjectSchema, InviteUncheckedUpdateInputObjectSchema]), where: InviteWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InviteUpdateArgs>;

export const InviteUpdateOneZodSchema = z.object({ select: InviteSelectObjectSchema.optional(), include: InviteIncludeObjectSchema.optional(), data: z.union([InviteUpdateInputObjectSchema, InviteUncheckedUpdateInputObjectSchema]), where: InviteWhereUniqueInputObjectSchema }).strict();