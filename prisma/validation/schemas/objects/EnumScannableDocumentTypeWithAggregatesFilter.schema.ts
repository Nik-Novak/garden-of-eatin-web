import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentTypeSchema } from '../enums/ScannableDocumentType.schema';
import { NestedEnumScannableDocumentTypeWithAggregatesFilterObjectSchema as NestedEnumScannableDocumentTypeWithAggregatesFilterObjectSchema } from './NestedEnumScannableDocumentTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumScannableDocumentTypeFilterObjectSchema as NestedEnumScannableDocumentTypeFilterObjectSchema } from './NestedEnumScannableDocumentTypeFilter.schema'

const makeSchema = () => z.object({
  equals: ScannableDocumentTypeSchema.optional(),
  in: ScannableDocumentTypeSchema.array().optional(),
  notIn: ScannableDocumentTypeSchema.array().optional(),
  not: z.union([ScannableDocumentTypeSchema, z.lazy(() => NestedEnumScannableDocumentTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumScannableDocumentTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumScannableDocumentTypeFilterObjectSchema).optional()
}).strict();
export const EnumScannableDocumentTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumScannableDocumentTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumScannableDocumentTypeWithAggregatesFilter>;
export const EnumScannableDocumentTypeWithAggregatesFilterObjectZodSchema = makeSchema();
