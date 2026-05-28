import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  email: z.string(),
  reason: z.string().optional().nullable(),
  feedback: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const AccountDeletionRequestCreateManyInputObjectSchema: z.ZodType<Prisma.AccountDeletionRequestCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountDeletionRequestCreateManyInput>;
export const AccountDeletionRequestCreateManyInputObjectZodSchema = makeSchema();
