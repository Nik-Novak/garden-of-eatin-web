import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AccountDeletionRequestSelectObjectSchema as AccountDeletionRequestSelectObjectSchema } from './objects/AccountDeletionRequestSelect.schema';
import { AccountDeletionRequestWhereUniqueInputObjectSchema as AccountDeletionRequestWhereUniqueInputObjectSchema } from './objects/AccountDeletionRequestWhereUniqueInput.schema';

export const AccountDeletionRequestFindUniqueOrThrowSchema: z.ZodType<Prisma.AccountDeletionRequestFindUniqueOrThrowArgs> = z.object({ select: AccountDeletionRequestSelectObjectSchema.optional(),  where: AccountDeletionRequestWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountDeletionRequestFindUniqueOrThrowArgs>;

export const AccountDeletionRequestFindUniqueOrThrowZodSchema = z.object({ select: AccountDeletionRequestSelectObjectSchema.optional(),  where: AccountDeletionRequestWhereUniqueInputObjectSchema }).strict();