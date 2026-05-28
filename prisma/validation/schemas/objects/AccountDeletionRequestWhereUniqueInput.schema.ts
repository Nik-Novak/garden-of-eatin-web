import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional()
}).strict();
export const AccountDeletionRequestWhereUniqueInputObjectSchema: z.ZodType<Prisma.AccountDeletionRequestWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountDeletionRequestWhereUniqueInput>;
export const AccountDeletionRequestWhereUniqueInputObjectZodSchema = makeSchema();
