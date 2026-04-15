import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSearchTypeSchema } from '../enums/ResourceSearchType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumResourceSearchTypeFilterObjectSchema as NestedEnumResourceSearchTypeFilterObjectSchema } from './NestedEnumResourceSearchTypeFilter.schema'

const nestedenumresourcesearchtypewithaggregatesfilterSchema = z.object({
  equals: ResourceSearchTypeSchema.optional(),
  in: ResourceSearchTypeSchema.array().optional(),
  notIn: ResourceSearchTypeSchema.array().optional(),
  not: z.union([ResourceSearchTypeSchema, z.lazy(() => NestedEnumResourceSearchTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumResourceSearchTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumResourceSearchTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumResourceSearchTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumResourceSearchTypeWithAggregatesFilter> = nestedenumresourcesearchtypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumResourceSearchTypeWithAggregatesFilter>;
export const NestedEnumResourceSearchTypeWithAggregatesFilterObjectZodSchema = nestedenumresourcesearchtypewithaggregatesfilterSchema;
