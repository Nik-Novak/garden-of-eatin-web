import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentTypeSchema } from '../enums/ScannableDocumentType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumScannableDocumentTypeFilterObjectSchema as NestedEnumScannableDocumentTypeFilterObjectSchema } from './NestedEnumScannableDocumentTypeFilter.schema'

const nestedenumscannabledocumenttypewithaggregatesfilterSchema = z.object({
  equals: ScannableDocumentTypeSchema.optional(),
  in: ScannableDocumentTypeSchema.array().optional(),
  notIn: ScannableDocumentTypeSchema.array().optional(),
  not: z.union([ScannableDocumentTypeSchema, z.lazy(() => NestedEnumScannableDocumentTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumScannableDocumentTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumScannableDocumentTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumScannableDocumentTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumScannableDocumentTypeWithAggregatesFilter> = nestedenumscannabledocumenttypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumScannableDocumentTypeWithAggregatesFilter>;
export const NestedEnumScannableDocumentTypeWithAggregatesFilterObjectZodSchema = nestedenumscannabledocumenttypewithaggregatesfilterSchema;
