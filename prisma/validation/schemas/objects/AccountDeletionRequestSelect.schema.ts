import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  reason: z.boolean().optional(),
  feedback: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const AccountDeletionRequestSelectObjectSchema: z.ZodType<Prisma.AccountDeletionRequestSelect> = makeSchema() as unknown as z.ZodType<Prisma.AccountDeletionRequestSelect>;
export const AccountDeletionRequestSelectObjectZodSchema = makeSchema();
