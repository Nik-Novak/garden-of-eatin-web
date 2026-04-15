import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchHitWhereInputObjectSchema as ResourceSearchHitWhereInputObjectSchema } from './ResourceSearchHitWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ResourceSearchHitWhereInputObjectSchema).optional(),
  some: z.lazy(() => ResourceSearchHitWhereInputObjectSchema).optional(),
  none: z.lazy(() => ResourceSearchHitWhereInputObjectSchema).optional()
}).strict();
export const ResourceSearchHitListRelationFilterObjectSchema: z.ZodType<Prisma.ResourceSearchHitListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ResourceSearchHitListRelationFilter>;
export const ResourceSearchHitListRelationFilterObjectZodSchema = makeSchema();
