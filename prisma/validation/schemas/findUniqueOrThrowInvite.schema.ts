import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InviteSelectObjectSchema as InviteSelectObjectSchema } from './objects/InviteSelect.schema';
import { InviteIncludeObjectSchema as InviteIncludeObjectSchema } from './objects/InviteInclude.schema';
import { InviteWhereUniqueInputObjectSchema as InviteWhereUniqueInputObjectSchema } from './objects/InviteWhereUniqueInput.schema';

export const InviteFindUniqueOrThrowSchema: z.ZodType<Prisma.InviteFindUniqueOrThrowArgs> = z.object({ select: InviteSelectObjectSchema.optional(), include: InviteIncludeObjectSchema.optional(), where: InviteWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InviteFindUniqueOrThrowArgs>;

export const InviteFindUniqueOrThrowZodSchema = z.object({ select: InviteSelectObjectSchema.optional(), include: InviteIncludeObjectSchema.optional(), where: InviteWhereUniqueInputObjectSchema }).strict();