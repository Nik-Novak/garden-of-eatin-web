import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AccountDeletionRequestSelectObjectSchema as AccountDeletionRequestSelectObjectSchema } from './objects/AccountDeletionRequestSelect.schema';
import { AccountDeletionRequestCreateInputObjectSchema as AccountDeletionRequestCreateInputObjectSchema } from './objects/AccountDeletionRequestCreateInput.schema';
import { AccountDeletionRequestUncheckedCreateInputObjectSchema as AccountDeletionRequestUncheckedCreateInputObjectSchema } from './objects/AccountDeletionRequestUncheckedCreateInput.schema';

export const AccountDeletionRequestCreateOneSchema: z.ZodType<Prisma.AccountDeletionRequestCreateArgs> = z.object({ select: AccountDeletionRequestSelectObjectSchema.optional(),  data: z.union([AccountDeletionRequestCreateInputObjectSchema, AccountDeletionRequestUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AccountDeletionRequestCreateArgs>;

export const AccountDeletionRequestCreateOneZodSchema = z.object({ select: AccountDeletionRequestSelectObjectSchema.optional(),  data: z.union([AccountDeletionRequestCreateInputObjectSchema, AccountDeletionRequestUncheckedCreateInputObjectSchema]) }).strict();