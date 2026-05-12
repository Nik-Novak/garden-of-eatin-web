import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceArgsObjectSchema as ResourceArgsObjectSchema } from './ResourceArgs.schema';
import { ResourceOccurrenceSearchArgsObjectSchema as ResourceOccurrenceSearchArgsObjectSchema } from './ResourceOccurrenceSearchArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  resource: z.union([z.boolean(), z.lazy(() => ResourceArgsObjectSchema)]).optional(),
  resource_id: z.boolean().optional(),
  search: z.union([z.boolean(), z.lazy(() => ResourceOccurrenceSearchArgsObjectSchema)]).optional(),
  search_id: z.boolean().optional(),
  created_at: z.boolean().optional()
}).strict();
export const ResourceSearchHitSelectObjectSchema: z.ZodType<Prisma.ResourceSearchHitSelect> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitSelect>;
export const ResourceSearchHitSelectObjectZodSchema = makeSchema();
