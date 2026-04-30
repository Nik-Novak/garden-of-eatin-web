import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentTypeSchema } from '../enums/ScannableDocumentType.schema'

const nestedenumscannabledocumenttypefilterSchema = z.object({
  equals: ScannableDocumentTypeSchema.optional(),
  in: ScannableDocumentTypeSchema.array().optional(),
  notIn: ScannableDocumentTypeSchema.array().optional(),
  not: z.union([ScannableDocumentTypeSchema, z.lazy(() => NestedEnumScannableDocumentTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumScannableDocumentTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumScannableDocumentTypeFilter> = nestedenumscannabledocumenttypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumScannableDocumentTypeFilter>;
export const NestedEnumScannableDocumentTypeFilterObjectZodSchema = nestedenumscannabledocumenttypefilterSchema;
