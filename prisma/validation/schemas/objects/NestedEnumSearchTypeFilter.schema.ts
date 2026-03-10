import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SearchTypeSchema } from '../enums/SearchType.schema'

const nestedenumsearchtypefilterSchema = z.object({
  equals: SearchTypeSchema.optional(),
  in: SearchTypeSchema.array().optional(),
  notIn: SearchTypeSchema.array().optional(),
  not: z.union([SearchTypeSchema, z.lazy(() => NestedEnumSearchTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumSearchTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumSearchTypeFilter> = nestedenumsearchtypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumSearchTypeFilter>;
export const NestedEnumSearchTypeFilterObjectZodSchema = nestedenumsearchtypefilterSchema;
