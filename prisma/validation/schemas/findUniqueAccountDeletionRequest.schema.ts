import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AccountDeletionRequestSelectObjectSchema as AccountDeletionRequestSelectObjectSchema } from './objects/AccountDeletionRequestSelect.schema';
import { AccountDeletionRequestWhereUniqueInputObjectSchema as AccountDeletionRequestWhereUniqueInputObjectSchema } from './objects/AccountDeletionRequestWhereUniqueInput.schema';

export const AccountDeletionRequestFindUniqueSchema: z.ZodType<Prisma.AccountDeletionRequestFindUniqueArgs> = z.object({ select: AccountDeletionRequestSelectObjectSchema.optional(),  where: AccountDeletionRequestWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountDeletionRequestFindUniqueArgs>;

export const AccountDeletionRequestFindUniqueZodSchema = z.object({ select: AccountDeletionRequestSelectObjectSchema.optional(),  where: AccountDeletionRequestWhereUniqueInputObjectSchema }).strict();