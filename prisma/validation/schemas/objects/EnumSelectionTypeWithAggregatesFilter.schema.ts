import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SelectionTypeSchema } from '../enums/SelectionType.schema';
import { NestedEnumSelectionTypeWithAggregatesFilterObjectSchema as NestedEnumSelectionTypeWithAggregatesFilterObjectSchema } from './NestedEnumSelectionTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSelectionTypeFilterObjectSchema as NestedEnumSelectionTypeFilterObjectSchema } from './NestedEnumSelectionTypeFilter.schema'

const makeSchema = () => z.object({
  equals: SelectionTypeSchema.optional(),
  in: SelectionTypeSchema.array().optional(),
  notIn: SelectionTypeSchema.array().optional(),
  not: z.union([SelectionTypeSchema, z.lazy(() => NestedEnumSelectionTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSelectionTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSelectionTypeFilterObjectSchema).optional()
}).strict();
export const EnumSelectionTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumSelectionTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSelectionTypeWithAggregatesFilter>;
export const EnumSelectionTypeWithAggregatesFilterObjectZodSchema = makeSchema();
