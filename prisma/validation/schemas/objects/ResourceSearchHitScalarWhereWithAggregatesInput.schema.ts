import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const resourcesearchhitscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ResourceSearchHitScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ResourceSearchHitScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ResourceSearchHitScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ResourceSearchHitScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ResourceSearchHitScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  resource_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  search_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(24)]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ResourceSearchHitScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ResourceSearchHitScalarWhereWithAggregatesInput> = resourcesearchhitscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ResourceSearchHitScalarWhereWithAggregatesInput>;
export const ResourceSearchHitScalarWhereWithAggregatesInputObjectZodSchema = resourcesearchhitscalarwherewithaggregatesinputSchema;
