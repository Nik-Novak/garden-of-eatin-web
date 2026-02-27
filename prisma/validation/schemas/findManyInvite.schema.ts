import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InviteIncludeObjectSchema as InviteIncludeObjectSchema } from './objects/InviteInclude.schema';
import { InviteOrderByWithRelationInputObjectSchema as InviteOrderByWithRelationInputObjectSchema } from './objects/InviteOrderByWithRelationInput.schema';
import { InviteWhereInputObjectSchema as InviteWhereInputObjectSchema } from './objects/InviteWhereInput.schema';
import { InviteWhereUniqueInputObjectSchema as InviteWhereUniqueInputObjectSchema } from './objects/InviteWhereUniqueInput.schema';
import { InviteScalarFieldEnumSchema } from './enums/InviteScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InviteFindManySelectSchema: z.ZodType<Prisma.InviteSelect> = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    status: z.boolean().optional(),
    inviter: z.boolean().optional(),
    inviter_id: z.boolean().optional(),
    user: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.InviteSelect>;

export const InviteFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    status: z.boolean().optional(),
    inviter: z.boolean().optional(),
    inviter_id: z.boolean().optional(),
    user: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict();

export const InviteFindManySchema: z.ZodType<Prisma.InviteFindManyArgs> = z.object({ select: InviteFindManySelectSchema.optional(), include: z.lazy(() => InviteIncludeObjectSchema.optional()), orderBy: z.union([InviteOrderByWithRelationInputObjectSchema, InviteOrderByWithRelationInputObjectSchema.array()]).optional(), where: InviteWhereInputObjectSchema.optional(), cursor: InviteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InviteScalarFieldEnumSchema, InviteScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.InviteFindManyArgs>;

export const InviteFindManyZodSchema = z.object({ select: InviteFindManySelectSchema.optional(), include: z.lazy(() => InviteIncludeObjectSchema.optional()), orderBy: z.union([InviteOrderByWithRelationInputObjectSchema, InviteOrderByWithRelationInputObjectSchema.array()]).optional(), where: InviteWhereInputObjectSchema.optional(), cursor: InviteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InviteScalarFieldEnumSchema, InviteScalarFieldEnumSchema.array()]).optional() }).strict();