import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceArgsObjectSchema as ResourceArgsObjectSchema } from './ResourceArgs.schema'

const makeSchema = () => z.object({
  resource: z.union([z.boolean(), z.lazy(() => ResourceArgsObjectSchema)]).optional()
}).strict();
export const ResourceOccurrenceIncludeObjectSchema: z.ZodType<Prisma.ResourceOccurrenceInclude> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceInclude>;
export const ResourceOccurrenceIncludeObjectZodSchema = makeSchema();
