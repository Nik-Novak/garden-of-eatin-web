import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountDeletionRequestSelectObjectSchema as AccountDeletionRequestSelectObjectSchema } from './AccountDeletionRequestSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AccountDeletionRequestSelectObjectSchema).optional()
}).strict();
export const AccountDeletionRequestArgsObjectSchema = makeSchema();
export const AccountDeletionRequestArgsObjectZodSchema = makeSchema();
