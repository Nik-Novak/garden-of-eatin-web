import type { Prisma } from '../../../.generated/prisma/client';
import * as z from 'zod';
import { InviteSelectObjectSchema as InviteSelectObjectSchema } from './objects/InviteSelect.schema';
import { InviteIncludeObjectSchema as InviteIncludeObjectSchema } from './objects/InviteInclude.schema';
import { InviteCreateInputObjectSchema as InviteCreateInputObjectSchema } from './objects/InviteCreateInput.schema';
import { InviteUncheckedCreateInputObjectSchema as InviteUncheckedCreateInputObjectSchema } from './objects/InviteUncheckedCreateInput.schema';

export const InviteCreateOneSchema: z.ZodType<Prisma.InviteCreateArgs> = z.object({ select: InviteSelectObjectSchema.optional(), include: InviteIncludeObjectSchema.optional(), data: z.union([InviteCreateInputObjectSchema, InviteUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.InviteCreateArgs>;

export const InviteCreateOneZodSchema = z.object({ select: InviteSelectObjectSchema.optional(), include: InviteIncludeObjectSchema.optional(), data: z.union([InviteCreateInputObjectSchema, InviteUncheckedCreateInputObjectSchema]) }).strict();