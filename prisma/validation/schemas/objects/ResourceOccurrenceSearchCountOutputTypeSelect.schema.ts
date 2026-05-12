import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchCountOutputTypeCountHitsArgsObjectSchema as ResourceOccurrenceSearchCountOutputTypeCountHitsArgsObjectSchema } from './ResourceOccurrenceSearchCountOutputTypeCountHitsArgs.schema'

const makeSchema = () => z.object({
  hits: z.union([z.boolean(), z.lazy(() => ResourceOccurrenceSearchCountOutputTypeCountHitsArgsObjectSchema)]).optional()
}).strict();
export const ResourceOccurrenceSearchCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchCountOutputTypeSelect>;
export const ResourceOccurrenceSearchCountOutputTypeSelectObjectZodSchema = makeSchema();
