import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceInteractionSelectObjectSchema as ResourceInteractionSelectObjectSchema } from './ResourceInteractionSelect.schema';
import { ResourceInteractionIncludeObjectSchema as ResourceInteractionIncludeObjectSchema } from './ResourceInteractionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ResourceInteractionSelectObjectSchema).optional(),
  include: z.lazy(() => ResourceInteractionIncludeObjectSchema).optional()
}).strict();
export const ResourceInteractionArgsObjectSchema = makeSchema();
export const ResourceInteractionArgsObjectZodSchema = makeSchema();
