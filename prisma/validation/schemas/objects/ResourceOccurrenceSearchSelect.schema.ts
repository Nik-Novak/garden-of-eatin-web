import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitFindManySchema as ResourceSearchHitFindManySchema } from '../findManyResourceSearchHit.schema';
import { DeviceArgsObjectSchema as DeviceArgsObjectSchema } from './DeviceArgs.schema';
import { ResourceOccurrenceSearchCountOutputTypeArgsObjectSchema as ResourceOccurrenceSearchCountOutputTypeArgsObjectSchema } from './ResourceOccurrenceSearchCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  search_type: z.boolean().optional(),
  hits: z.union([z.boolean(), z.lazy(() => ResourceSearchHitFindManySchema)]).optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  radius_mi: z.boolean().optional(),
  user_location: z.boolean().optional(),
  device: z.union([z.boolean(), z.lazy(() => DeviceArgsObjectSchema)]).optional(),
  device_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ResourceOccurrenceSearchCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ResourceOccurrenceSearchSelectObjectSchema: z.ZodType<Prisma.ResourceOccurrenceSearchSelect> = makeSchema() as unknown as z.ZodType<Prisma.ResourceOccurrenceSearchSelect>;
export const ResourceOccurrenceSearchSelectObjectZodSchema = makeSchema();
