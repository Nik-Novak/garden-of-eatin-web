import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceCountOutputTypeCountResourceOccurrencesArgsObjectSchema as ResourceCountOutputTypeCountResourceOccurrencesArgsObjectSchema } from './ResourceCountOutputTypeCountResourceOccurrencesArgs.schema';
import { ResourceCountOutputTypeCountResourceSearchHitsArgsObjectSchema as ResourceCountOutputTypeCountResourceSearchHitsArgsObjectSchema } from './ResourceCountOutputTypeCountResourceSearchHitsArgs.schema';
import { ResourceCountOutputTypeCountResourceInteractionsArgsObjectSchema as ResourceCountOutputTypeCountResourceInteractionsArgsObjectSchema } from './ResourceCountOutputTypeCountResourceInteractionsArgs.schema'

const makeSchema = () => z.object({
  resource_occurrences: z.union([z.boolean(), z.lazy(() => ResourceCountOutputTypeCountResourceOccurrencesArgsObjectSchema)]).optional(),
  resource_search_hits: z.union([z.boolean(), z.lazy(() => ResourceCountOutputTypeCountResourceSearchHitsArgsObjectSchema)]).optional(),
  resource_interactions: z.union([z.boolean(), z.lazy(() => ResourceCountOutputTypeCountResourceInteractionsArgsObjectSchema)]).optional()
}).strict();
export const ResourceCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ResourceCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCountOutputTypeSelect>;
export const ResourceCountOutputTypeSelectObjectZodSchema = makeSchema();
