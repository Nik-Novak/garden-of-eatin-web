import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AccountDeletionRequestUpdateManyMutationInputObjectSchema as AccountDeletionRequestUpdateManyMutationInputObjectSchema } from './objects/AccountDeletionRequestUpdateManyMutationInput.schema';
import { AccountDeletionRequestWhereInputObjectSchema as AccountDeletionRequestWhereInputObjectSchema } from './objects/AccountDeletionRequestWhereInput.schema';

export const AccountDeletionRequestUpdateManySchema: z.ZodType<Prisma.AccountDeletionRequestUpdateManyArgs> = z.object({ data: AccountDeletionRequestUpdateManyMutationInputObjectSchema, where: AccountDeletionRequestWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountDeletionRequestUpdateManyArgs>;

export const AccountDeletionRequestUpdateManyZodSchema = z.object({ data: AccountDeletionRequestUpdateManyMutationInputObjectSchema, where: AccountDeletionRequestWhereInputObjectSchema.optional() }).strict();