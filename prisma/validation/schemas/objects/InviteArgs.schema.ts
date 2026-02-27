import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InviteSelectObjectSchema as InviteSelectObjectSchema } from './InviteSelect.schema';
import { InviteIncludeObjectSchema as InviteIncludeObjectSchema } from './InviteInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => InviteSelectObjectSchema).optional(),
  include: z.lazy(() => InviteIncludeObjectSchema).optional()
}).strict();
export const InviteArgsObjectSchema = makeSchema();
export const InviteArgsObjectZodSchema = makeSchema();
