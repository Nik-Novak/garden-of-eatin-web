import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceArgsObjectSchema as ResourceArgsObjectSchema } from './ResourceArgs.schema';
import { ResourceOccurrenceSearchArgsObjectSchema as ResourceOccurrenceSearchArgsObjectSchema } from './ResourceOccurrenceSearchArgs.schema'

const makeSchema = () => z.object({
  resource: z.union([z.boolean(), z.lazy(() => ResourceArgsObjectSchema)]).optional(),
  search: z.union([z.boolean(), z.lazy(() => ResourceOccurrenceSearchArgsObjectSchema)]).optional()
}).strict();
export const ResourceSearchHitIncludeObjectSchema: z.ZodType<Prisma.ResourceSearchHitInclude> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitInclude>;
export const ResourceSearchHitIncludeObjectZodSchema = makeSchema();
