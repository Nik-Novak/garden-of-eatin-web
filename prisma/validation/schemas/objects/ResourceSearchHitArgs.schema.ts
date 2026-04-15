import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitSelectObjectSchema as ResourceSearchHitSelectObjectSchema } from './ResourceSearchHitSelect.schema';
import { ResourceSearchHitIncludeObjectSchema as ResourceSearchHitIncludeObjectSchema } from './ResourceSearchHitInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ResourceSearchHitSelectObjectSchema).optional(),
  include: z.lazy(() => ResourceSearchHitIncludeObjectSchema).optional()
}).strict();
export const ResourceSearchHitArgsObjectSchema = makeSchema();
export const ResourceSearchHitArgsObjectZodSchema = makeSchema();
