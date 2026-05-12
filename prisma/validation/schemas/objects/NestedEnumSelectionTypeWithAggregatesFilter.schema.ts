import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SelectionTypeSchema } from '../enums/SelectionType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSelectionTypeFilterObjectSchema as NestedEnumSelectionTypeFilterObjectSchema } from './NestedEnumSelectionTypeFilter.schema'

const nestedenumselectiontypewithaggregatesfilterSchema = z.object({
  equals: SelectionTypeSchema.optional(),
  in: SelectionTypeSchema.array().optional(),
  notIn: SelectionTypeSchema.array().optional(),
  not: z.union([SelectionTypeSchema, z.lazy(() => NestedEnumSelectionTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSelectionTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSelectionTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumSelectionTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumSelectionTypeWithAggregatesFilter> = nestedenumselectiontypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSelectionTypeWithAggregatesFilter>;
export const NestedEnumSelectionTypeWithAggregatesFilterObjectZodSchema = nestedenumselectiontypewithaggregatesfilterSchema;
