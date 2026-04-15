import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceWhereInputObjectSchema as ResourceWhereInputObjectSchema } from './ResourceWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceWhereInputObjectSchema).optional()
}).strict();
export const DeviceCountOutputTypeCountSubmittedResourcesArgsObjectSchema = makeSchema();
export const DeviceCountOutputTypeCountSubmittedResourcesArgsObjectZodSchema = makeSchema();
