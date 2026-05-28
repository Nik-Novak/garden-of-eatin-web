import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AccountDeletionRequestSelectObjectSchema as AccountDeletionRequestSelectObjectSchema } from './objects/AccountDeletionRequestSelect.schema';
import { AccountDeletionRequestWhereUniqueInputObjectSchema as AccountDeletionRequestWhereUniqueInputObjectSchema } from './objects/AccountDeletionRequestWhereUniqueInput.schema';

export const AccountDeletionRequestDeleteOneSchema: z.ZodType<Prisma.AccountDeletionRequestDeleteArgs> = z.object({ select: AccountDeletionRequestSelectObjectSchema.optional(),  where: AccountDeletionRequestWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountDeletionRequestDeleteArgs>;

export const AccountDeletionRequestDeleteOneZodSchema = z.object({ select: AccountDeletionRequestSelectObjectSchema.optional(),  where: AccountDeletionRequestWhereUniqueInputObjectSchema }).strict();