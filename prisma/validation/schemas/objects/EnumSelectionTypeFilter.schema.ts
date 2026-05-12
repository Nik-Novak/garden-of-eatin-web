import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SelectionTypeSchema } from '../enums/SelectionType.schema';
import { NestedEnumSelectionTypeFilterObjectSchema as NestedEnumSelectionTypeFilterObjectSchema } from './NestedEnumSelectionTypeFilter.schema'

const makeSchema = () => z.object({
  equals: SelectionTypeSchema.optional(),
  in: SelectionTypeSchema.array().optional(),
  notIn: SelectionTypeSchema.array().optional(),
  not: z.union([SelectionTypeSchema, z.lazy(() => NestedEnumSelectionTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumSelectionTypeFilterObjectSchema: z.ZodType<Prisma.EnumSelectionTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSelectionTypeFilter>;
export const EnumSelectionTypeFilterObjectZodSchema = makeSchema();
