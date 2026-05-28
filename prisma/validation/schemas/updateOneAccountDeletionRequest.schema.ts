import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AccountDeletionRequestSelectObjectSchema as AccountDeletionRequestSelectObjectSchema } from './objects/AccountDeletionRequestSelect.schema';
import { AccountDeletionRequestUpdateInputObjectSchema as AccountDeletionRequestUpdateInputObjectSchema } from './objects/AccountDeletionRequestUpdateInput.schema';
import { AccountDeletionRequestUncheckedUpdateInputObjectSchema as AccountDeletionRequestUncheckedUpdateInputObjectSchema } from './objects/AccountDeletionRequestUncheckedUpdateInput.schema';
import { AccountDeletionRequestWhereUniqueInputObjectSchema as AccountDeletionRequestWhereUniqueInputObjectSchema } from './objects/AccountDeletionRequestWhereUniqueInput.schema';

export const AccountDeletionRequestUpdateOneSchema: z.ZodType<Prisma.AccountDeletionRequestUpdateArgs> = z.object({ select: AccountDeletionRequestSelectObjectSchema.optional(),  data: z.union([AccountDeletionRequestUpdateInputObjectSchema, AccountDeletionRequestUncheckedUpdateInputObjectSchema]), where: AccountDeletionRequestWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountDeletionRequestUpdateArgs>;

export const AccountDeletionRequestUpdateOneZodSchema = z.object({ select: AccountDeletionRequestSelectObjectSchema.optional(),  data: z.union([AccountDeletionRequestUpdateInputObjectSchema, AccountDeletionRequestUncheckedUpdateInputObjectSchema]), where: AccountDeletionRequestWhereUniqueInputObjectSchema }).strict();