import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceInteractionWhereInputObjectSchema as ResourceInteractionWhereInputObjectSchema } from './ResourceInteractionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResourceInteractionWhereInputObjectSchema).optional()
}).strict();
export const ResourceCountOutputTypeCountResourceInteractionsArgsObjectSchema = makeSchema();
export const ResourceCountOutputTypeCountResourceInteractionsArgsObjectZodSchema = makeSchema();
