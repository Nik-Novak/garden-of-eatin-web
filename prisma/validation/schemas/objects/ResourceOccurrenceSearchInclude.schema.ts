import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitFindManySchema as ResourceSearchHitFindManySchema } from '../findManyResourceSearchHit.schema';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema';
import { ResourceOccurrenceSearchCountOutputTypeArgsObjectSchema as ResourceOccurrenceSearchCountOutputTypeArgsObjectSchema } from './ResourceOccurrenceSearchCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  hits: z.union([z.boolean(), z.lazy(() => ResourceSearchHitFindManySchema)]).optional(),
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ResourceOccurrenceSearchCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ResourceOccurrenceSearchIncludeObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchInclude> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchInclude>;
export const ResourceOccurrenceSearchIncludeObjectZodSchema = makeSchema();
