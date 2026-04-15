import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceWhereInputObjectSchema as ResourceWhereInputObjectSchema } from './ResourceWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ResourceWhereInputObjectSchema).optional(),
  some: z.lazy(() => ResourceWhereInputObjectSchema).optional(),
  none: z.lazy(() => ResourceWhereInputObjectSchema).optional()
}).strict();
export const ResourceListRelationFilterObjectSchema: z.ZodType<Prisma.ResourceListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ResourceListRelationFilter>;
export const ResourceListRelationFilterObjectZodSchema = makeSchema();
