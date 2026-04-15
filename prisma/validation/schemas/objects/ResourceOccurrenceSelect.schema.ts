import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceArgsObjectSchema as ResourceArgsObjectSchema } from './ResourceArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  resource: z.union([z.boolean(), z.lazy(() => ResourceArgsObjectSchema)]).optional(),
  resource_id: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  timezone: z.boolean().optional(),
  location: z.boolean().optional(),
  created_at: z.boolean().optional()
}).strict();
export const ResourceOccurrenceSelectObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSelect> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSelect>;
export const ResourceOccurrenceSelectObjectZodSchema = makeSchema();
