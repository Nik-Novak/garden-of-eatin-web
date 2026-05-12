import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ResourceScalarRelationFilterObjectSchema as ResourceScalarRelationFilterObjectSchema } from './ResourceScalarRelationFilter.schema';
import { ResourceWhereInputObjectSchema as ResourceWhereInputObjectSchema } from './ResourceWhereInput.schema';
import { ResourceOccurrenceSearchScalarRelationFilterObjectSchema as ResourceOccurrenceSearchScalarRelationFilterObjectSchema } from './ResourceOccurrenceSearchScalarRelationFilter.schema';
import { ResourceOccurrenceSearchWhereInputObjectSchema as ResourceOccurrenceSearchWhereInputObjectSchema } from './ResourceOccurrenceSearchWhereInput.schema'

const resourcesearchhitwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ResourceSearchHitWhereInputObjectSchema), z.lazy(() => ResourceSearchHitWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ResourceSearchHitWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ResourceSearchHitWhereInputObjectSchema), z.lazy(() => ResourceSearchHitWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  resource_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  search_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(24)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  resource: z.union([z.lazy(() => ResourceScalarRelationFilterObjectSchema), z.lazy(() => ResourceWhereInputObjectSchema)]).optional(),
  search: z.union([z.lazy(() => ResourceOccurrenceSearchScalarRelationFilterObjectSchema), z.lazy(() => ResourceOccurrenceSearchWhereInputObjectSchema)]).optional()
}).strict();
export const ResourceSearchHitWhereInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitWhereInput> = resourcesearchhitwhereinputSchema as unknown as z.ZodType<Prisma.ResourceSearchHitWhereInput>;
export const ResourceSearchHitWhereInputObjectZodSchema = resourcesearchhitwhereinputSchema;
