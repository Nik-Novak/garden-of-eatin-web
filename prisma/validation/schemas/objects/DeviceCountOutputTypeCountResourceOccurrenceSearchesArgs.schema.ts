import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceOccurrenceSearchWhereInputObjectSchema as ResourceOccurrenceSearchWhereInputObjectSchema } from './ResourceOccurrenceSearchWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceOccurrenceSearchWhereInputObjectSchema).optional()
}).strict();
export const DeviceCountOutputTypeCountResourceOccurrenceSearchesArgsObjectSchema = makeSchema();
export const DeviceCountOutputTypeCountResourceOccurrenceSearchesArgsObjectZodSchema = makeSchema();
