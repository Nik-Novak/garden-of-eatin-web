import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceTypeSchema } from '../enums/ResourceType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumResourceTypeFilterObjectSchema as NestedEnumResourceTypeFilterObjectSchema } from './NestedEnumResourceTypeFilter.schema'

const nestedenumresourcetypewithaggregatesfilterSchema = z.object({
  equals: ResourceTypeSchema.optional(),
  in: ResourceTypeSchema.array().optional(),
  notIn: ResourceTypeSchema.array().optional(),
  not: z.union([ResourceTypeSchema, z.lazy(() => NestedEnumResourceTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumResourceTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumResourceTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumResourceTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumResourceTypeWithAggregatesFilter> = nestedenumresourcetypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumResourceTypeWithAggregatesFilter>;
export const NestedEnumResourceTypeWithAggregatesFilterObjectZodSchema = nestedenumresourcetypewithaggregatesfilterSchema;
