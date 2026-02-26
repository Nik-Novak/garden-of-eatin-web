import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  inviter: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const InviteIncludeObjectSchema: z.ZodType<Prisma.InviteInclude> = makeSchema() as unknown as z.ZodType<Prisma.InviteInclude>;
export const InviteIncludeObjectZodSchema = makeSchema();
