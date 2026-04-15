import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SelectionTypeSchema } from '../enums/SelectionType.schema'

const nestedenumselectiontypefilterSchema = z.object({
  equals: SelectionTypeSchema.optional(),
  in: SelectionTypeSchema.array().optional(),
  notIn: SelectionTypeSchema.array().optional(),
  not: z.union([SelectionTypeSchema, z.lazy(() => NestedEnumSelectionTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumSelectionTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumSelectionTypeFilter> = nestedenumselectiontypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumSelectionTypeFilter>;
export const NestedEnumSelectionTypeFilterObjectZodSchema = nestedenumselectiontypefilterSchema;
