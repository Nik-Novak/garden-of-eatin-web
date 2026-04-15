import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitWhereInputObjectSchema as ResourceSearchHitWhereInputObjectSchema } from './ResourceSearchHitWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceSearchHitWhereInputObjectSchema).optional()
}).strict();
export const ResourceOccurrenceSearchCountOutputTypeCountHitsArgsObjectSchema = makeSchema();
export const ResourceOccurrenceSearchCountOutputTypeCountHitsArgsObjectZodSchema = makeSchema();
