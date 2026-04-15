import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceWhereInputObjectSchema as ResourceOccurrenceWhereInputObjectSchema } from './ResourceOccurrenceWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceOccurrenceWhereInputObjectSchema).optional()
}).strict();
export const ResourceCountOutputTypeCountResourceOccurrencesArgsObjectSchema = makeSchema();
export const ResourceCountOutputTypeCountResourceOccurrencesArgsObjectZodSchema = makeSchema();
