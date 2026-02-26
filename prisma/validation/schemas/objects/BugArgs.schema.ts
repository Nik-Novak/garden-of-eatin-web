import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { BugSelectObjectSchema as BugSelectObjectSchema } from './BugSelect.schema';
import { BugIncludeObjectSchema as BugIncludeObjectSchema } from './BugInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BugSelectObjectSchema).optional(),
  include: z.lazy(() => BugIncludeObjectSchema).optional()
}).strict();
export const BugArgsObjectSchema = makeSchema();
export const BugArgsObjectZodSchema = makeSchema();
