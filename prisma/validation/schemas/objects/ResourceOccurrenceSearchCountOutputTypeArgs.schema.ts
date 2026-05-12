import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchCountOutputTypeSelectObjectSchema as ResourceOccurrenceSearchCountOutputTypeSelectObjectSchema } from './ResourceOccurrenceSearchCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ResourceOccurrenceSearchCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ResourceOccurrenceSearchCountOutputTypeArgsObjectSchema = makeSchema();
export const ResourceOccurrenceSearchCountOutputTypeArgsObjectZodSchema = makeSchema();
