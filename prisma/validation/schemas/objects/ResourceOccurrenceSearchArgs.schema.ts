import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchSelectObjectSchema as ResourceOccurrenceSearchSelectObjectSchema } from './ResourceOccurrenceSearchSelect.schema';
import { ResourceOccurrenceSearchIncludeObjectSchema as ResourceOccurrenceSearchIncludeObjectSchema } from './ResourceOccurrenceSearchInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ResourceOccurrenceSearchSelectObjectSchema).optional(),
  include: z.lazy(() => ResourceOccurrenceSearchIncludeObjectSchema).optional()
}).strict();
export const ResourceOccurrenceSearchArgsObjectSchema = makeSchema();
export const ResourceOccurrenceSearchArgsObjectZodSchema = makeSchema();
