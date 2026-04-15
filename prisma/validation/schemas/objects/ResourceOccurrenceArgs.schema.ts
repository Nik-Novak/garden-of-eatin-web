import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSelectObjectSchema as ResourceOccurrenceSelectObjectSchema } from './ResourceOccurrenceSelect.schema';
import { ResourceOccurrenceIncludeObjectSchema as ResourceOccurrenceIncludeObjectSchema } from './ResourceOccurrenceInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ResourceOccurrenceSelectObjectSchema).optional(),
  include: z.lazy(() => ResourceOccurrenceIncludeObjectSchema).optional()
}).strict();
export const ResourceOccurrenceArgsObjectSchema = makeSchema();
export const ResourceOccurrenceArgsObjectZodSchema = makeSchema();
