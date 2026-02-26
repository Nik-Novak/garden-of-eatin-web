import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  status: z.boolean().optional(),
  inviter: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  inviter_id: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  user_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional()
}).strict();
export const InviteSelectObjectSchema: z.ZodType<Prisma.InviteSelect> = makeSchema() as unknown as z.ZodType<Prisma.InviteSelect>;
export const InviteSelectObjectZodSchema = makeSchema();
