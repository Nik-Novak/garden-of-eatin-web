import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceFindManySchema as ResourceOccurrenceFindManySchema } from '../findManyResourceOccurrence.schema';
import { ResourceSearchHitFindManySchema as ResourceSearchHitFindManySchema } from '../findManyResourceSearchHit.schema';
import { ResourceInteractionFindManySchema as ResourceInteractionFindManySchema } from '../findManyResourceInteraction.schema';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema';
import { ResourceCountOutputTypeArgsObjectSchema as ResourceCountOutputTypeArgsObjectSchema } from './ResourceCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  resource_occurrences: z.union([z.boolean(), z.lazy(() => ResourceOccurrenceFindManySchema)]).optional(),
  resource_search_hits: z.union([z.boolean(), z.lazy(() => ResourceSearchHitFindManySchema)]).optional(),
  resource_interactions: z.union([z.boolean(), z.lazy(() => ResourceInteractionFindManySchema)]).optional(),
  submitter: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ResourceCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ResourceIncludeObjectSchema: z.ZodType<Prisma.ResourceInclude> = makeSchema() as unknown as z.ZodType<Prisma.ResourceInclude>;
export const ResourceIncludeObjectZodSchema = makeSchema();
