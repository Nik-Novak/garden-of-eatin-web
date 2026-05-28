import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AccountDeletionRequestWhereInputObjectSchema as AccountDeletionRequestWhereInputObjectSchema } from './objects/AccountDeletionRequestWhereInput.schema';

export const AccountDeletionRequestDeleteManySchema: z.ZodType<Prisma.AccountDeletionRequestDeleteManyArgs> = z.object({ where: AccountDeletionRequestWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountDeletionRequestDeleteManyArgs>;

export const AccountDeletionRequestDeleteManyZodSchema = z.object({ where: AccountDeletionRequestWhereInputObjectSchema.optional() }).strict();