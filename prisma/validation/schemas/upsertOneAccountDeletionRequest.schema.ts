import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AccountDeletionRequestSelectObjectSchema as AccountDeletionRequestSelectObjectSchema } from './objects/AccountDeletionRequestSelect.schema';
import { AccountDeletionRequestWhereUniqueInputObjectSchema as AccountDeletionRequestWhereUniqueInputObjectSchema } from './objects/AccountDeletionRequestWhereUniqueInput.schema';
import { AccountDeletionRequestCreateInputObjectSchema as AccountDeletionRequestCreateInputObjectSchema } from './objects/AccountDeletionRequestCreateInput.schema';
import { AccountDeletionRequestUncheckedCreateInputObjectSchema as AccountDeletionRequestUncheckedCreateInputObjectSchema } from './objects/AccountDeletionRequestUncheckedCreateInput.schema';
import { AccountDeletionRequestUpdateInputObjectSchema as AccountDeletionRequestUpdateInputObjectSchema } from './objects/AccountDeletionRequestUpdateInput.schema';
import { AccountDeletionRequestUncheckedUpdateInputObjectSchema as AccountDeletionRequestUncheckedUpdateInputObjectSchema } from './objects/AccountDeletionRequestUncheckedUpdateInput.schema';

export const AccountDeletionRequestUpsertOneSchema: z.ZodType<Prisma.AccountDeletionRequestUpsertArgs> = z.object({ select: AccountDeletionRequestSelectObjectSchema.optional(),  where: AccountDeletionRequestWhereUniqueInputObjectSchema, create: z.union([ AccountDeletionRequestCreateInputObjectSchema, AccountDeletionRequestUncheckedCreateInputObjectSchema ]), update: z.union([ AccountDeletionRequestUpdateInputObjectSchema, AccountDeletionRequestUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AccountDeletionRequestUpsertArgs>;

export const AccountDeletionRequestUpsertOneZodSchema = z.object({ select: AccountDeletionRequestSelectObjectSchema.optional(),  where: AccountDeletionRequestWhereUniqueInputObjectSchema, create: z.union([ AccountDeletionRequestCreateInputObjectSchema, AccountDeletionRequestUncheckedCreateInputObjectSchema ]), update: z.union([ AccountDeletionRequestUpdateInputObjectSchema, AccountDeletionRequestUncheckedUpdateInputObjectSchema ]) }).strict();