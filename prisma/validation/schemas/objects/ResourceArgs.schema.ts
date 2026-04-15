import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSelectObjectSchema as ResourceSelectObjectSchema } from './ResourceSelect.schema';
import { ResourceIncludeObjectSchema as ResourceIncludeObjectSchema } from './ResourceInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ResourceSelectObjectSchema).optional(),
  include: z.lazy(() => ResourceIncludeObjectSchema).optional()
}).strict();
export const ResourceArgsObjectSchema = makeSchema();
export const ResourceArgsObjectZodSchema = makeSchema();
