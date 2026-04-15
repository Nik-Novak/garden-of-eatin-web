import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceCountOutputTypeSelectObjectSchema as ResourceCountOutputTypeSelectObjectSchema } from './ResourceCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ResourceCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ResourceCountOutputTypeArgsObjectSchema = makeSchema();
export const ResourceCountOutputTypeArgsObjectZodSchema = makeSchema();
