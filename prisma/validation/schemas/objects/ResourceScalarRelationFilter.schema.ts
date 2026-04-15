import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceWhereInputObjectSchema as ResourceWhereInputObjectSchema } from './ResourceWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ResourceWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ResourceWhereInputObjectSchema).optional()
}).strict();
export const ResourceScalarRelationFilterObjectSchema: z.ZodType<Prisma.ResourceScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ResourceScalarRelationFilter>;
export const ResourceScalarRelationFilterObjectZodSchema = makeSchema();
