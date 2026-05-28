import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AccountDeletionRequestOrderByWithRelationInputObjectSchema as AccountDeletionRequestOrderByWithRelationInputObjectSchema } from './objects/AccountDeletionRequestOrderByWithRelationInput.schema';
import { AccountDeletionRequestWhereInputObjectSchema as AccountDeletionRequestWhereInputObjectSchema } from './objects/AccountDeletionRequestWhereInput.schema';
import { AccountDeletionRequestWhereUniqueInputObjectSchema as AccountDeletionRequestWhereUniqueInputObjectSchema } from './objects/AccountDeletionRequestWhereUniqueInput.schema';
import { AccountDeletionRequestScalarFieldEnumSchema } from './enums/AccountDeletionRequestScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountDeletionRequestFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AccountDeletionRequestSelect> = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    reason: z.boolean().optional(),
    feedback: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AccountDeletionRequestSelect>;

export const AccountDeletionRequestFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    reason: z.boolean().optional(),
    feedback: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const AccountDeletionRequestFindFirstOrThrowSchema: z.ZodType<Prisma.AccountDeletionRequestFindFirstOrThrowArgs> = z.object({ select: AccountDeletionRequestFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([AccountDeletionRequestOrderByWithRelationInputObjectSchema, AccountDeletionRequestOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountDeletionRequestWhereInputObjectSchema.optional(), cursor: AccountDeletionRequestWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountDeletionRequestScalarFieldEnumSchema, AccountDeletionRequestScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AccountDeletionRequestFindFirstOrThrowArgs>;

export const AccountDeletionRequestFindFirstOrThrowZodSchema = z.object({ select: AccountDeletionRequestFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([AccountDeletionRequestOrderByWithRelationInputObjectSchema, AccountDeletionRequestOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountDeletionRequestWhereInputObjectSchema.optional(), cursor: AccountDeletionRequestWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountDeletionRequestScalarFieldEnumSchema, AccountDeletionRequestScalarFieldEnumSchema.array()]).optional() }).strict();