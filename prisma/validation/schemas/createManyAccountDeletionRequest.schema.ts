import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AccountDeletionRequestCreateManyInputObjectSchema as AccountDeletionRequestCreateManyInputObjectSchema } from './objects/AccountDeletionRequestCreateManyInput.schema';

export const AccountDeletionRequestCreateManySchema: z.ZodType<Prisma.AccountDeletionRequestCreateManyArgs> = z.object({ data: z.union([ AccountDeletionRequestCreateManyInputObjectSchema, z.array(AccountDeletionRequestCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.AccountDeletionRequestCreateManyArgs>;

export const AccountDeletionRequestCreateManyZodSchema = z.object({ data: z.union([ AccountDeletionRequestCreateManyInputObjectSchema, z.array(AccountDeletionRequestCreateManyInputObjectSchema) ]),  }).strict();