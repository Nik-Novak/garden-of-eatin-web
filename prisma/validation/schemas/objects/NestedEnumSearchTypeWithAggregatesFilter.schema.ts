import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SearchTypeSchema } from '../enums/SearchType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSearchTypeFilterObjectSchema as NestedEnumSearchTypeFilterObjectSchema } from './NestedEnumSearchTypeFilter.schema'

const nestedenumsearchtypewithaggregatesfilterSchema = z.object({
  equals: SearchTypeSchema.optional(),
  in: SearchTypeSchema.array().optional(),
  notIn: SearchTypeSchema.array().optional(),
  not: z.union([SearchTypeSchema, z.lazy(() => NestedEnumSearchTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSearchTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSearchTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumSearchTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumSearchTypeWithAggregatesFilter> = nestedenumsearchtypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSearchTypeWithAggregatesFilter>;
export const NestedEnumSearchTypeWithAggregatesFilterObjectZodSchema = nestedenumsearchtypewithaggregatesfilterSchema;
