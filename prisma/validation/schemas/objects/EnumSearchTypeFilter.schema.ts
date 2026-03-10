import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SearchTypeSchema } from '../enums/SearchType.schema';
import { NestedEnumSearchTypeFilterObjectSchema as NestedEnumSearchTypeFilterObjectSchema } from './NestedEnumSearchTypeFilter.schema'

const makeSchema = () => z.object({
  equals: SearchTypeSchema.optional(),
  in: SearchTypeSchema.array().optional(),
  notIn: SearchTypeSchema.array().optional(),
  not: z.union([SearchTypeSchema, z.lazy(() => NestedEnumSearchTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumSearchTypeFilterObjectSchema: z.ZodType<Prisma.EnumSearchTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSearchTypeFilter>;
export const EnumSearchTypeFilterObjectZodSchema = makeSchema();
