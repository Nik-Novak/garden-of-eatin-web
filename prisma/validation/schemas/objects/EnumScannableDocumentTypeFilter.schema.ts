import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentTypeSchema } from '../enums/ScannableDocumentType.schema';
import { NestedEnumScannableDocumentTypeFilterObjectSchema as NestedEnumScannableDocumentTypeFilterObjectSchema } from './NestedEnumScannableDocumentTypeFilter.schema'

const makeSchema = () => z.object({
  equals: ScannableDocumentTypeSchema.optional(),
  in: ScannableDocumentTypeSchema.array().optional(),
  notIn: ScannableDocumentTypeSchema.array().optional(),
  not: z.union([ScannableDocumentTypeSchema, z.lazy(() => NestedEnumScannableDocumentTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumScannableDocumentTypeFilterObjectSchema: z.ZodType<Prisma.EnumScannableDocumentTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumScannableDocumentTypeFilter>;
export const EnumScannableDocumentTypeFilterObjectZodSchema = makeSchema();
