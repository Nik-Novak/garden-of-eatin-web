import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { InviteSelectObjectSchema as InviteSelectObjectSchema } from './objects/InviteSelect.schema';
import { InviteIncludeObjectSchema as InviteIncludeObjectSchema } from './objects/InviteInclude.schema';
import { InviteWhereUniqueInputObjectSchema as InviteWhereUniqueInputObjectSchema } from './objects/InviteWhereUniqueInput.schema';

export const InviteDeleteOneSchema: z.ZodType<Prisma.InviteDeleteArgs> = z.object({ select: InviteSelectObjectSchema.optional(), include: InviteIncludeObjectSchema.optional(), where: InviteWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InviteDeleteArgs>;

export const InviteDeleteOneZodSchema = z.object({ select: InviteSelectObjectSchema.optional(), include: InviteIncludeObjectSchema.optional(), where: InviteWhereUniqueInputObjectSchema }).strict();